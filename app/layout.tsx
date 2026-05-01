import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hariharan Arumugam | Application Support Engineer",
  description:
    "Application Support Engineer with 5+ years experience in L1/L2 production support, incident management, and enterprise application maintenance. ITIL certified professional at TCS.",
  keywords: [
    "Application Support Engineer",
    "ITIL",
    "ServiceNow",
    "TCS",
    "Chennai",
    "Production Support",
    "Incident Management",
    "SQL",
    "SAP",
    "Power BI",
  ],
  openGraph: {
    title: "Hariharan Arumugam | Application Support Engineer",
    description:
      "5+ years L1/L2 production support experience. 16+ app transitions with zero downtime. ITIL certified.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
