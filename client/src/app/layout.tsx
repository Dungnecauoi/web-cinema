import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Flex, Layout } from "antd"
import { AntdRegistry } from "@ant-design/nextjs-registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "phim mới",
  description: "cập nhật phim mới nhất, phim chọn bộ, phim chiếu rạp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AntdRegistry>
        <Flex>
          <Layout>
          {children}
          </Layout>
        </Flex>
        </AntdRegistry>
      </body>
    </html>
  );
}
