import Header from "@/components/Header";

export default function News() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              ニュース
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              XX-onlineの最新情報をお届けします。
            </p>
          </div>
        </section>

        {/* News List */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <article className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    お知らせ
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2024.12.15</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  新サービス「クラウドセキュリティプラス」をリリースしました
                </h2>
                <p className="text-gray-600">
                  AI技術を活用したセキュリティ監視機能を強化した新サービスの提供を開始いたします。
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    プレスリリース
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2024.12.01</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  大手製造業A社とのパートナーシップ締結について
                </h2>
                <p className="text-gray-600">
                  工場IoTシステムの構築・運用において包括的なサポートを提供いたします。
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    イベント
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2024.11.20</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  「ITインフラセミナー2024」に出展いたします
                </h2>
                <p className="text-gray-600">
                  12月20日開催のセミナーにて、最新のクラウドソリューションをご紹介します。
                </p>
              </article>
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
