"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BeautyStore() {
  const [email, setEmail] = useState("")

  const products = [
    {
      title: "منتج العناية الأول",
      price: "199",
      tag: "جديد",
      tagColor: "bg-purple-600",
      image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=300&h=200&q=80",
    },
    {
      title: "منتج العناية الثاني",
      price: "159",
      tag: "خصم 20%",
      tagColor: "bg-red-500",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=200&q=80",
    },
    {
      title: "منتج العناية الثالث",
      price: "179",
      tag: "",
      image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=300&h=200&q=80",
    },
  ]

  const testimonials = [
    {
      name: "سارة أحمد",
      text: "تجربة رائعة مع المنتجات",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "نورة محمد",
      text: "نتائج مذهلة للبشرة",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "ريم خالد",
      text: "جودة عالية وخدمة ممتازة",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "منى عبدالله",
      text: "منتجات عالية وفعالة",
      image: "https://i.pravatar.cc/100?img=4",
    },
  ]

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Image src="/placeholder.svg" alt="Logo" width={120} height={40} className="h-10 w-auto" priority />
          <div className="flex items-center gap-4">
            <button className="p-2 transition hover:text-purple-600" aria-label="Search products">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 transition hover:text-purple-600" aria-label="User account">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 transition hover:text-purple-600" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto grid gap-8 px-4 py-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            المنتجات الجمالية وحلول العناية بالبشرة
          </h1>
          <p className="text-gray-600">اكتشفي سر الجمال الطبيعي مع منتجاتنا المميزة للعناية بالبشرة</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input type="text" placeholder="الاسم الكامل" className="w-full" />
            <Input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700">اشترك الآن</Button>
          </form>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
          <Image
            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&h=600&q=75&fm=webp"
            alt="Luxury beauty and skincare products collection"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABUGl4ZWxtYXRvciBQcm8gMi4zLjMAAAAEkAQAAgAAABQAAABw/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEgAYAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/v4ooooAKKKKACiiigD/2Q=="
            fetchPriority="high"
            aria-label="Premium beauty and skincare products arranged elegantly"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">منتجاتنا المميزة</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg"
              >
                <div className="aspect-[3/2] bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                {product.tag && (
                  <span
                    className={`absolute right-2 top-2 rounded-full ${product.tagColor} px-3 py-1 text-xs text-white`}
                  >
                    {product.tag}
                  </span>
                )}
                <div className="p-4">
                  <h3 className="mb-2 font-semibold">{product.title}</h3>
                  <p className="mb-4 text-sm text-gray-600">وصف تفصيلي للمنتج وفوائده للبشرة</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{product.price} ر.س</span>
                    <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                      أضف للسلة
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">تجارب العملاء</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((review, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mb-2 flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-2 text-sm text-gray-600">{review.text}</p>
                <p className="font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">لماذا تختارين منتجاتنا؟</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "جودة مضمونة",
                description: "منتجات طبيعية ومختبرة علميا",
              },
              {
                title: "توصيل سريع",
                description: "شحن مجاني للطلبات فوق 200 ر.س",
              },
              {
                title: "دعم متواصل",
                description: "فريق خدمة عملاء متخصصين",
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <div className="h-6 w-6 rounded-full bg-purple-600" />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold">تابعنا</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  فيسبوك
                </Link>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  تويتر
                </Link>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  انستغرام
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">خدمة العملاء</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    تتبع الطلب
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    سياسة الإرجاع
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    الشحن والتوصيل
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">المنتجات</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    العناية بالبشرة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    العناية بالشعر
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    المكياج
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">روابط مهمة</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    تواصل معنا
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    عن الشركة
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">جميع الحقوق محفوظة © 2024</div>
        </div>
      </footer>
    </div>
  )
}

