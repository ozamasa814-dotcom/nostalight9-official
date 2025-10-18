import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Privacy Policy</h1>
        <p className="text-gray-400 text-lg">プライバシーポリシー</p>
      </section>

      {/* Content Section */}
      <section className="container max-w-4xl mx-auto px-6 pb-32">
        <div className="border-l-2 border-white/20 pl-8 space-y-6">
          <p className="text-gray-300 leading-relaxed">
            当サイトでは、お問い合わせ対応のためにお名前・メールアドレス等を取得します。
          </p>
          <p className="text-gray-300 leading-relaxed">
            取得した情報は目的の範囲内でのみ利用し、適切に管理します。
          </p>
          <p className="text-gray-300 leading-relaxed">
            法令に基づく場合を除き、本人の同意なく第三者に提供しません。
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block px-8 py-3 border border-white/30 hover:bg-white/10 transition-colors duration-300 tracking-wider text-sm">
              CONTACT US
            </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

