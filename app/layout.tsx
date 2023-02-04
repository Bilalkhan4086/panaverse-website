"use client";
import HeaderNavbar from "@/components/Header";
import "./globals.css";
import { Provider } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <Provider>
            <HeaderNavbar />
            {children}
          </Provider>
        </body>
      </html>
    );
  }
}
