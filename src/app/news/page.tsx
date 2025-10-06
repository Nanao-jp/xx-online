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
              スターシーズデジタルの最新情報をお届けします。
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
                  <span className="text-gray-500 text-sm ml-4">2025.10.01</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  800G OSFP光トランシーバー新製品ラインナップを拡充
                </h2>
                <p className="text-gray-600">
                  次世代AIデータセンター向けの800G OSFP DR8/2xFR4光トランシーバーの提供を開始いたしました。高速・長距離通信を実現し、大規模AIクラスターの構築をサポートします。
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    プレスリリース
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2025.09.25</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  液冷CDUソリューションの国内展開を本格化
                </h2>
                <p className="text-gray-600">
                  高密度GPU環境向けの先進的な液冷技術を活用したCDUソリューションの提供を拡大いたします。省エネルギーと高効率冷却を両立し、データセンターの持続可能性を向上させます。
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    イベント
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2025.09.15</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  「AI Data Center Expo 2025」に出展いたします
                </h2>
                <p className="text-gray-600">
                  10月23日〜25日開催の展示会にて、最新のAIデータセンターソリューションをご紹介します。GPUサーバー、液冷CDU、高速光モジュールなど、E2Eソリューションを展示予定です。
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    製品情報
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2025.09.01</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  NVIDIA H200搭載GPUサーバーの取り扱いを開始
                </h2>
                <p className="text-gray-600">
                  最新のNVIDIA H200 Tensor Core GPUを搭載した高性能AIサーバーの提供を開始しました。大規模言語モデルのトレーニングや推論に最適な性能を提供します。
                </p>
              </article>

              <article className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    プレスリリース
                  </span>
                  <span className="text-gray-500 text-sm ml-4">2025.08.20</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  大手クラウドプロバイダーとの戦略的パートナーシップを締結
                </h2>
                <p className="text-gray-600">
                  AIデータセンターインフラの構築において、包括的なサポートとソリューション提供を行う戦略的パートナーシップを締結いたしました。
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
            <h3 className="text-xl font-bold mb-4">スターシーズデジタル</h3>
            <p className="text-gray-400">
              AI駆動のビジネス革新と持続可能な成長を実現し、社会のスマート化を推進
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
