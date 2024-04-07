import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";
import QueryClientProvider from "./QueryClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enigma AI",
  description: "Enigma AI - Crafting Custom Characters with Voice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          card: "bg-primary-foreground",
          formFieldInput: "bg-input",
          formButtonPrimary:
            "bg-primary text-primary-foreground hover:bg-primary/90",
          footerActionLink: "text-primary",
          badge: "text-primary",
          profileSectionPrimaryButton: "text-primary",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <QueryClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
