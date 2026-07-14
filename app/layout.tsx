import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🎉 병준이 생일잔치 🎉",
  description: "촌스럽지만 진심인 병준이의 뽕짝 생일잔치",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
