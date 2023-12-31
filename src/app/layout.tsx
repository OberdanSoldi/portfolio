import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { userService } from "@/services/user.service";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await userService.getUserData();
  return (
    <html lang="pt-BR">
      <body className=" p-6 lg:px-8 antialiased flex flex-col w-full max-w-4xl mx-auto">
        <Header avatar_url={data.avatar_url} />
        {children}
      </body>
    </html>
  );
}
