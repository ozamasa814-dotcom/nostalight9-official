import { Link } from "wouter";
import Header from "@/components/Header";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Contact</h1>
        <p className="text-gray-400 text-lg">お問い合わせ</p>
      </section>

      {/* Contact Form */}
      <section className="container max-w-2xl mx-auto px-6 pb-32">
        {submitted ? (
          <div className="text-center py-16 border border-white/10 bg-white/5 rounded-sm">
            <div className="text-5xl mb-6">✓</div>
            <h2 className="font-serif text-2xl mb-4">ありがとうございます</h2>
            <p className="text-gray-400">内容を送信しました。</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-400">
                Name <span className="text-red-400">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30"
                placeholder="お名前"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-400">
                Email <span className="text-red-400">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30"
                placeholder="your@email.com"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm mb-2 text-gray-400">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 text-white rounded-md px-3 py-2 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
              >
                <option value="" className="bg-[#0d1b2a]">選択してください</option>
                <option value="general" className="bg-[#0d1b2a]">一般的なお問い合わせ</option>
                <option value="collaboration" className="bg-[#0d1b2a]">コラボレーション</option>
                <option value="media" className="bg-[#0d1b2a]">メディア掲載</option>
                <option value="other" className="bg-[#0d1b2a]">その他</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-gray-400">
                Message <span className="text-red-400">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={8}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-white/30 resize-none"
                placeholder="メッセージをご記入ください"
              />
            </div>

            {/* reCAPTCHA Placeholder */}
            <div className="border border-white/10 bg-white/5 p-4 rounded-sm text-center text-gray-500 text-sm">
              reCAPTCHA (実装予定)
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                className="px-12 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white transition-colors duration-300 tracking-wider text-sm"
              >
                SEND MESSAGE
              </Button>
            </div>
          </form>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

