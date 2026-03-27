import { createClient } from "@/lib/supabase/client";

export async function handleUpvote(questionId: string, userId: string) {
  const supabase = createClient();

  // 1. Check if vote already exists
  const { data: existingVote, error: fetchError } = await supabase
    .from("question_votes")
    .select("id")
    .eq("question_id", questionId)
    .eq("user_id", userId)
    .single();

  // PGRST116 means zero rows returned (which is what we want)
  if (fetchError && fetchError.code !== "PGRST116") return false;
  
  // If entry exists, return without changes
  if (existingVote) return false;

  // 2. Insert new vote
  const { error: insertError } = await supabase
    .from("question_votes")
    .insert([{ question_id: questionId, user_id: userId }]);

  if (insertError) return false;

  // 3. Increment upvotes by 1
  const { data: qData } = await supabase
    .from("questions")
    .select("upvotes")
    .eq("id", questionId)
    .single();

  const currentVotes = qData?.upvotes || 0;

  const { error: updateError } = await supabase
    .from("questions")
    .update({ upvotes: currentVotes + 1 })
    .eq("id", questionId);

  if (updateError) return false;

  return true;
}
