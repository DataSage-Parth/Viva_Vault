# 🎓 VivaVault

> ⭐ **_If this helped you, consider starring the repo!_**

VivaVault is a student-driven platform designed to make viva preparation **easier**, **faster**, and **more focused**.

Instead of guessing what might be asked, **VivaVault** lets you explore _**real questions asked in previous viva exams**_, organized by subject, level, and proctor. The goal is simple — *help students prepare smarter using actual experiences*.

---

## 🚀 What is VivaVault?

Preparing for viva exams is often confusing because:

* ❓ You don't know what the examiner will focus on
* 👨‍🏫 Questions vary between proctors
* 📚 There's no centralized resource

**VivaVault** solves this by acting as a **shared knowledge base** where students contribute and explore real viva questions.

---

## ✨ Features

### 🔍 Smart Search
Search questions instantly by:
* 🆔 **Proctor ID**
* 🔑 **Topic or keyword**
* 📖 **Subject** (`MAD1`, `MAD2`, `MLP`, etc.)

---

### 🔥 Most Asked Questions
Curated collections of high-frequency questions for each subject. Questions are grouped into topics like:
* 🐍 *Flask, Database, Security* (MAD1)
* ⚡ *JavaScript, Vue, APIs* (MAD2)

_This helps you focus on what matters most._

---

### 🖋️ Community Contributions
Students can submit:
* 📝 Questions asked in their viva
* 💡 Advice for future students

_This keeps the platform continuously growing and relevant._

---

### 📊 Insights & Trends
* 📈 Identify frequently asked topics
* 🎯 Discover active proctors
* 🧠 Understand patterns across vivas

---

### 📱 Clean & Responsive UI
* 🌙 **Dark theme** optimized for long study sessions
* 📱 **Fully responsive** (mobile, tablet, desktop)
* 🧘‍♂️ Simple and distraction-free experience

---

## 🎯 Who is this for?

* 🎓 Students preparing for **MAD viva**
* 🛠️ Anyone who wants **real exam insights instead of theory**
* 🌱 Juniors looking for **direction before their first viva**

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

* **Frontend:** Next.js (App Router), TypeScript
* **Styling:** Tailwind CSS, ShadCN UI
* **Backend & Database:** Supabase (PostgreSQL)
* **Deployment:** Vercel

---

## 📂 Data Structure

VivaVault uses a simple and efficient database structure:

* 👤 `proctor_id` → identifies examiner pattern
* 📚 `subject` → MAD1, MAD2, MLP, etc.
* 🎚️ `level` → optional (L1, L2)
* 💬 `questions_text` → actual questions
* 💡 `advice` → optional student input
* 📅 `viva date` → timeline reference

---

## 💡 Vision

The long-term goal of VivaVault is to become a **go-to preparation platform for technical vivas**, where students don't rely on guesswork but learn from _real experiences_.

---

## 🤝 Disclaimer

> ⚠️ _This platform is created purely for educational purposes to help students prepare for viva exams. The questions shared here are based on students' personal experiences and may not reflect actual exam content. We do not promote any unfair practices or academic misconduct._
