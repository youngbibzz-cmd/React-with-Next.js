import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jordan Lee — Frontend Developer",
    template: "%s — Jordan Lee",
  },
  description:
    "Jordan Lee is a frontend developer building thoughtful, accessible digital experiences for people and ambitious ideas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
