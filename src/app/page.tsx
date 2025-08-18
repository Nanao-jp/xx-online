import Image from "next/image";
import { Cloud, Shield, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                XX-online
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                サービス
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                ソリューション
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                会社情報
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                お問い合わせ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              資料請求
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="IT Infrastructure Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
            ITインフラを<br />革新する
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              Core Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              主要サービス
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              最新技術を駆使した包括的なITインフラソリューションで、企業のデジタル変革を実現
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <Cloud className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">クラウドインフラ</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AWS、Azure、GCPを活用したスケーラブルなクラウドインフラの設計・構築・運用
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    マルチクラウド対応
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    自動スケーリング
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    コスト最適化
                  </div>
                </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">サイバーセキュリティ</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  ゼロトラストアーキテクチャに基づく包括的なセキュリティソリューション
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    多層防御システム
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    AI脅威検知
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    コンプライアンス対応
                  </div>
                </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                  <Network className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ネットワークソリューション</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  高速・安全・安定したエンタープライズネットワークの構築と管理
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    SD-WAN対応
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    5G統合ソリューション
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    24/7監視・運用
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">XX-online</h3>
              <p className="text-gray-400">
                企業のITインフラを革新し、ビジネス成長を支援します
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">クラウドインフラ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">セキュリティ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ネットワーク</a></li>
                <li><a href="#" className="hover:text-white transition-colors">運用・保守</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">企業情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">導入事例</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ニュース</a></li>
                <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>TEL: 03-XXXX-XXXX</li>
                <li>Email: info@xx-online.com</li>
                <li>営業時間: 平日 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 XX-online. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
