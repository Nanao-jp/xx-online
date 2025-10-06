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
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              スターシーズデジタル株式会社は、東京に本社を置くStarSeeds上場企業の子会社です。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              AIデータセンター向けエンドツーエンドソリューションを提供し、AIサーバー、ストレージ、スイッチ、光モジュール、コンテナ型データセンター、先進的な液冷技術を組み合わせ、IDC運営事業者のネットワークサービスと連携。計画・構築・運営までを一貫して支援し、AI駆動のビジネス革新と持続可能な成長を実現し、社会のスマート化を推進します。
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
                    <dd className="text-gray-600">スターシーズデジタル株式会社</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">代表者</dt>
                    <dd className="text-gray-600">代表取締役 鈴木雅順</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">所在地</dt>
                    <dd className="text-gray-600">〒108-0073<br />東京都港区三田1-4-28 三田国際ビル1808</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">親会社</dt>
                    <dd className="text-gray-600">StarSeeds（上場企業）</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">事業内容</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI DC Solution製品</h3>
                    <p className="text-gray-600">
                      GPUサーバー、ストレージサーバー、液冷CDU、コンテナー、スイッチ、光モジュールをカバーするE2E AIデータセンターソリューション。顧客のデータセンターの効率的かつ迅速な展開をサポートします。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">サイト電源製品</h3>
                    <p className="text-gray-600">
                      信頼性の高い現場バックアップ電源に対するオペレーターの要件を満たす、屋内および屋外の電源装置とバッテリーのフルラインナップを備えた高品質のソリューション。
                    </p>
                  </div>
                </div>
              </div>
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
