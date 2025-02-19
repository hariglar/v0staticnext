import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beauty Store - المنتجات الجمالية وحلول العناية بالبشرة",
  description: "اكتشفي سر الجمال الطبيعي مع منتجاتنا المميزة للعناية بالبشرة",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

