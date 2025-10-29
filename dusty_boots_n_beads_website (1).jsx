import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function DustyBootsSite() {
  const products = [
    { id: 1, name: "Turquoise Seed Bracelet", price: "$6", img: "/uploads/bracelet1.png" },
    { id: 2, name: "Prairie Wrap", price: "$15", img: "/uploads/bracelet2.png" },
    { id: 3, name: "Sunset Anklet", price: "$6", img: "/uploads/bracelet3.png" },
    { id: 4, name: "Feather Charm Trio", price: "$6", img: "/uploads/bracelet4.png" },
  ];

  return (
    <div className="min-h-screen bg-beige-50 text-brown-900 antialiased">
      <header className="bg-beige-100/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/uploads/logo.png" alt="Dusty Boots n Beads logo" className="w-14 h-14 object-contain" />
            <div>
              <h1 className="text-xl font-serif">Dusty Boots <span className="font-bold">n</span> Beads</h1>
              <p className="text-xs">Handmade seed bead jewelry — teen run</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#shop" className="hover:underline">Shop</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Button className="flex items-center gap-2"><ShoppingCart size={16} /> Shop</Button>
          </nav>

          <div className="md:hidden">
            <button aria-label="open menu" className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#4A2A18" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Handmade seed bead jewelry with a western heart.</h2>
            <p className="text-lg mb-6 max-w-xl">Designed and crafted by teens — turquoise, feathers, and dusty-trail vibes. Each piece is small-batch, made with care to fit your everyday cowgirl style.</p>
            <div className="flex gap-4">
              <a href="#shop" className="inline-block bg-amber-600 text-white px-6 py-2 rounded shadow">Shop Bestsellers</a>
              <a href="#about" className="inline-block border border-amber-600 px-6 py-2 rounded">Learn More</a>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
            <div className="w-72 h-72 bg-beige-200 rounded-2xl shadow-inner flex items-center justify-center">
              <img src="/uploads/hero.png" alt="bracelet on wrist" className="w-64 h-64 object-cover rounded-lg shadow" />
            </div>
          </motion.div>
        </section>

        <section id="shop" className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-serif mb-4">Shop</h3>
          <p className="text-sm mb-6">Small-batch seed bead jewelry — bracelets, chokers, and charms.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p) => (
              <Card key={p.id} className="overflow-hidden">
                <CardContent>
                  <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded" />
                  <h4 className="mt-3 font-medium">{p.name}</h4>
                  <p className="text-sm text-gray-600">{p.price}</p>
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1">Add to Cart</Button>
                    <Button variant="ghost">View</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="max-w-4xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-serif mb-4">About Us</h3>
          <div className="prose max-w-none">
            <p>Howdy! We’re <strong>Jaylynn Grant, Jenica Steely, Taylor Bethcher, and Zoe Baldwin</strong> — four creative teens with a love for western style, handmade art, and all things beadwork.</p>
            <p>What started as a fun hobby between friends quickly turned into a dream we wanted to share with others. We handmake <strong>seed bead jewelry</strong> inspired by the rustic charm of the West — turquoise tones, dusty trails, cowboy boots, and sunsets on the plains.</p>
            <p>Thank you for supporting our small business and our big dreams. From our hands to yours — welcome to <em>Dusty Boots n Beads</em>.</p>
          </div>
        </section>

        <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-serif mb-4">Contact</h3>
          <p className="mb-6">Questions, custom orders, or collabs? Drop us a note.</p>

          <form className="grid grid-cols-1 gap-4">
            <input className="border rounded px-4 py-2" placeholder="Your name" />
            <input className="border rounded px-4 py-2" placeholder="Email" />
            <textarea className="border rounded px-4 py-2" placeholder="Message" rows={5}></textarea>
            <div className="flex items-center gap-4">
              <Button type="submit">Send Message</Button>
              <div className="text-sm text-gray-600 flex items-center gap-2"><Mail size={14}/> info@dustybootsnbeads.com</div>
            </div>
          </form>
        </section>

        <footer className="bg-beige-100 border-t mt-12">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <strong>Dusty Boots n Beads</strong>
              <div className="text-sm text-gray-600">Handmade seed bead jewelry by Jaylynn, Jenica, Taylor & Zoe</div>
            </div>
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} Dusty Boots n Beads</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
