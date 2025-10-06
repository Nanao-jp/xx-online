import Header from "@/components/Header";

export default function ServiceSupport() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              サービス・サポート
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              サービス・サポート体制を整備中です。
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-16 rounded-3xl border border-gray-200 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                準備中
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                より充実したサービス・サポート体制を構築中です。<br />
                現在お急ぎのお客様は、お問い合わせフォームよりご連絡ください。
              </p>

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
