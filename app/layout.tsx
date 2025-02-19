import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beauty Store - المنتجات الجمالية وحلول العناية بالبشرة",
  description: "اكتشفي سر الجمال الطبيعي مع منتجاتنا المميزة للعناية بالبشرة",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'