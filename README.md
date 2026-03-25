# 🎓 VivaVault

> **The ultimate decentralized repository for Mobile Application Development (MAD) viva preparation.**

VivaVault is an open, student-driven platform designed to aggregate, organize, and explore previous viva voce questions. By centralizing past experiences across various subjects like **MAD1, MAD2, MLP, BDM, and GENAI**, it significantly lowers the preparation barrier, enabling students to filter historical questions down to specific proctors and topics instantly.

---

## ✨ Key Features

- 🔍 **Smart Search Engine:** Instantly lookup questions by keyword, topic, or directly search for a specific proctor (e.g., `DR_SHARMA`).
- 🔥 **Most Asked Questions:** Curated, aggregated banks of the most recurring viva questions separated dynamically by your subject module and nested by subcategories (Flask, Vue, DB Normalization, etc.).
- 🖋️ **Community Driven:** An open submission portal where students can instantly share questions and specific advice right after their viva concludes.
- 📊 **Intelligent Insights:** Identifies trending proctors and extracts the most heavily focused topics automatically to give aggregate study metrics.
- 📱 **Premium UI/UX:** Built on ShadCN and Tailwind CSS, providing a fully responsive, glassmorphic dark-mode supported experience.
- 🔖 **Utility First:** Bookmark crucial questions locally, one-click copy to clipboard, and deep-link share proctor profiles with peers.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/) (Radix UI), Lucide Icons
- **Backend/Database:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Deployment:** [Vercel](https://vercel.com)

---

## 🚀 Local Deployment & Setup

### 1. Clone the repository
```bash
git clone https://github.com/DataSage-Parth/Viva_Vault.git
cd viva_vault
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Supabase (Backend)
1. Creating a new project on [Supabase.com](https://supabase.com).
2. Head into the **SQL Editor** tab.
3. Copy the entire contents of `supabase/schema.sql` located in this repository and execute it. 
   - *This will instantly generate your `questions` table and configure Row Level Security (RLS) permitting public inserts.*

### 4. Configure Environment Variables
Create a `.env.local` file at the root of the project:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser.

---

## 📂 Database Schema Overview

The platform uses a clean, unified `questions` table mapped identically to the frontend interfaces:
- `id`: UUID (Primary Key)
- `proctor_id`: Text (Indexes proctor lookup paths)
- `subject`: Text (`MAD1`, `MAD2`, `MLP`, etc.)
- `level`: Integer (Optional lookup depth e.g. `1` or `2`)
- `questions_text`: Text (The detailed question list)
- `advice`: Text (Optional peer advice)
- `viva_datetime`: Timestamp
- `created_at`: Timestamp
- `tags`: Text[] (Topics extracted via UI Keyword maps)

---

## 🤝 Disclaimer
*This platform is created purely for educational purposes to help students prepare for viva exams. The questions shared here are based on students' personal experiences and may not reflect actual exam content. We do not promote any unfair practices or academic misconduct.*
