"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Send, Clock } from "lucide-react";

export default function SubmitPage() {
  const router = useRouter();
  const supabase = createClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    proctor_id: "",
    subject: "",
    level: "",
    questions_text: "",
    advice: "",
    viva_datetime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "proctor_id") {
      const cleanValue = value.replace(/[^a-zA-Z0-9_]/g, "").toUpperCase();
      setFormData((prev) => ({ ...prev, [name]: cleanValue }));
    } else if (name === "viva_datetime") {
      const datetimeValue = value ? `${value}T12:00:00` : "";
      setFormData((prev) => ({ ...prev, [name]: datetimeValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    if (name === "subject") {
      const isLevelRequired = ["MAD1", "MAD2", "MLP"].includes(value);
      setFormData((prev) => ({ 
        ...prev, 
        subject: value,
        level: isLevelRequired ? prev.level : "" 
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      
      const target = e.target as HTMLTextAreaElement;
      const { selectionStart, selectionEnd, value } = target;
      
      const newValue = value.substring(0, selectionStart) + "\n• " + value.substring(selectionEnd);
      
      setFormData((prev) => ({ ...prev, questions_text: newValue }));
      
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = selectionStart + 3;
      }, 0);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (formData.questions_text === "") {
      setFormData((prev) => ({ ...prev, questions_text: "• " }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const isLevelRequired = ["MAD1", "MAD2", "MLP"].includes(formData.subject);

    if (!formData.subject || (isLevelRequired && !formData.level) || !formData.questions_text) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (formData.proctor_id && !/^LEVEL[0-9]+_[0-9]+$/.test(formData.proctor_id)) {
      toast.error("Invalid Proctor ID format.", { description: "Must match pattern e.g. LEVEL1_23" });
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        proctor_id: formData.proctor_id ? formData.proctor_id.toUpperCase() : "UNKNOWN",
        subject: formData.subject,
        level: isLevelRequired ? parseInt(formData.level) : null,
        questions_text: formData.questions_text,
        advice: formData.advice || null,
        viva_datetime: formData.viva_datetime ? new Date(formData.viva_datetime).toISOString() : null,
      };

      const { error } = await supabase.from("questions").insert([payload]);

      if (error) throw error;

      toast.success("Submission received!", {
        description: "Your questions have been published successfully.",
      });

      setFormData({
        proctor_id: "",
        subject: "",
        level: "",
        questions_text: "",
        advice: "",
        viva_datetime: "",
      });
      
      router.push("/");
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to submit", { description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card className="glass border-border/50">
        <CardHeader className="text-center space-y-2 pb-8">
          <div className="mx-auto w-12 h-12 bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 rounded-full flex items-center justify-center mb-2">
            <Send className="w-6 h-6 ml-1" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Contribute Questions
          </CardTitle>
          <CardDescription className="text-base text-center max-w-md mx-auto">
            Share what was asked in your viva to help your juniors. Your submission will be published instantly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="proctor_id" className="text-sm font-semibold">Proctor ID</Label>
                <Input
                  id="proctor_id"
                  name="proctor_id"
                  placeholder="e.g. LEVEL1_23 (leave blank if unknown)"
                  value={formData.proctor_id}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="viva_datetime" className="text-sm font-semibold flex items-center gap-2">
                  <Clock className="w-3 h-3" /> Date of Viva
                </Label>
                <Input
                  id="viva_datetime"
                  name="viva_datetime"
                  type="date"
                  value={formData.viva_datetime ? formData.viva_datetime.split("T")[0] : ""}
                  onChange={handleChange}
                  className="bg-background text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-semibold">Subject <span className="text-destructive">*</span></Label>
                <Select value={formData.subject} onValueChange={(val) => handleSelectChange("subject", val || "")} required>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MAD1">MAD 1</SelectItem>
                    <SelectItem value="MAD2">MAD 2</SelectItem>
                    <SelectItem value="MLP">MLP</SelectItem>
                    <SelectItem value="BDM">BDM</SelectItem>
                    <SelectItem value="GENAI">GenAI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {["MAD1", "MAD2", "MLP"].includes(formData.subject) && (
                <div className="space-y-2">
                  <Label htmlFor="level" className="text-sm font-semibold">Level <span className="text-destructive">*</span></Label>
                  <Select value={formData.level} onValueChange={(val) => handleSelectChange("level", val || "")} required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Level 1</SelectItem>
                      <SelectItem value="2">Level 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="questions_text" className="text-sm font-semibold">Questions Asked <span className="text-destructive">*</span></Label>
              <Textarea
                id="questions_text"
                name="questions_text"
                placeholder="List the questions that were asked... (Use bullet points for clarity)"
                rows={5}
                value={formData.questions_text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                required
                className="resize-none bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="advice" className="text-sm font-semibold">Advice for others (Optional)</Label>
              <Textarea
                id="advice"
                name="advice"
                placeholder="Any tips on what to focus on or what the proctor expects..."
                rows={3}
                value={formData.advice}
                onChange={handleChange}
                className="resize-none bg-background"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium shadow-lg shadow-violet-500/25 h-12 text-lg rounded-xl transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Questions"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
