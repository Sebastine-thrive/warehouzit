import "./globals.css";
import type { Metadata } from "next";
import { StateContext } from "../../context/StateContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warehouzit",
  description:
    "Connecting warehouse space owners to space seekers who need them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContext> {children}</StateContext>
      </body>
    </html>
  );
}
