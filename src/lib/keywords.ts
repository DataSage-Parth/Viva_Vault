// Common MAD topics for keyword extraction and auto-tagging
export const MAD_KEYWORDS = [
  'ORM', 'MVC', 'MVVM', 'MVP',
  'REST API', 'RESTful', 'HTTP methods', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH',
  'Database', 'DB Schema', 'SQLite', 'Room', 'Realm',
  'RecyclerView', 'ListView', 'Adapter', 'ViewHolder',
  'Fragment', 'Activity', 'Intent', 'Bundle',
  'ViewModel', 'LiveData', 'StateFlow', 'DataBinding',
  'Retrofit', 'Volley', 'OkHttp', 'Gson', 'JSON',
  'SharedPreferences', 'DataStore',
  'Navigation', 'NavController', 'Deep Link',
  'Notification', 'Firebase', 'FCM', 'Push Notification',
  'Coroutines', 'AsyncTask', 'Thread', 'Handler',
  'Dependency Injection', 'Dagger', 'Hilt', 'Koin',
  'Jetpack Compose', 'XML Layout', 'ConstraintLayout',
  'Service', 'BroadcastReceiver', 'ContentProvider',
  'Permission', 'Runtime Permission',
  'Testing', 'Unit Test', 'UI Test', 'Espresso',
  'Lifecycle', 'onResume', 'onCreate', 'onPause', 'onDestroy',
  'Manifest', 'Gradle', 'Build',
  'Flutter', 'Dart', 'Widget', 'StatefulWidget', 'StatelessWidget',
  'React Native', 'Expo', 'Kotlin', 'Java', 'Swift',
  'State Management', 'Provider', 'Bloc', 'Redux',
  'API Integration', 'Authentication', 'OAuth',
  'Material Design', 'Cupertino',
  'Animation', 'Gesture', 'Touch Event',
  'Sensor', 'Camera', 'GPS', 'Location',
  'Bluetooth', 'NFC', 'WebSocket',
];

export function extractTopics(text: string): { topic: string; count: number }[] {
  const lowerText = text.toLowerCase();
  const results: { topic: string; count: number }[] = [];

  for (const keyword of MAD_KEYWORDS) {
    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    const matches = lowerText.match(regex);
    if (matches && matches.length > 0) {
      results.push({ topic: keyword, count: matches.length });
    }
  }

  return results.sort((a, b) => b.count - a.count);
}

export function extractTopicsFromQuestions(questions: { questions_text: string }[]): { topic: string; count: number }[] {
  const combinedText = questions.map(q => q.questions_text).join(' ');
  return extractTopics(combinedText);
}
