import Image from "next/image";

import Header from "@/components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              会社情報
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              XX-onlineは、企業のITインフラを支える革新的なソリューションを提供する企業です。
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">会社概要</h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-900">会社名</dt>
                    <dd className="text-gray-600">XX-online株式会社</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">設立</dt>
                    <dd className="text-gray-600">2009年</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">代表者</dt>
                    <dd className="text-gray-600">代表取締役社長 山田太郎</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">所在地</dt>
                    <dd className="text-gray-600">東京都渋谷区XXX-X-X</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">従業員数</dt>
                    <dd className="text-gray-600">120名</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">事業内容</h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• クラウドインフラの設計・構築・運用</li>
                  <li>• サイバーセキュリティソリューション</li>
                  <li>• ネットワークインフラの構築・管理</li>
                  <li>• ITコンサルティングサービス</li>
                  <li>• 24時間365日の運用サポート</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">XX-online</h3>
            <p className="text-gray-400">
              企業のITインフラを革新し、ビジネス成長を支援します
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
