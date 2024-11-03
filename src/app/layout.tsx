import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Cintillo } from "@/components/cintillo";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema de gestión de actividades inamujer",
  description: "Sistema de gestión de actividades inamujer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link
          rel="icon"
          href="/ina.png"
          type="image/x-icon"
          sizes="any"
        />
      <body className={`${inter.className}`}>
       
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > 
          <Cintillo />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
