import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VivaVault – MAD Viva Prep",
  description: "Explore real viva questions, learn from others, and ace your viva.",
  openGraph: {
    title: "VivaVault – MAD Viva Prep",
    description: "Explore real viva questions, learn from others, and ace your viva.",
    url: "https://vivavault.vercel.app",
    siteName: "VivaVault",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VivaVault Social Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VivaVault – MAD Viva Prep",
    description: "Explore real viva questions, learn from others, and ace your viva.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
