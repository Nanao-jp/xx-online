import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              スターシーズデジタル株式会社 は、AI時代の到来とともに急速に進化するデジタル社会の中で、次世代インフラの中核を担う AIデータセンター向けエンドツーエンドソリューション を提供するテクノロジー企業です。私たちは、AIサーバー、ストレージ、スイッチ、光モジュール、コンテナ型データセンター、そして先進的な液冷技術を有機的に組み合わせ、IDC運営事業者のネットワークサービスと緊密に連携することで、高密度・高性能・低消費電力 を兼ね備えた次世代のAIインフラを実現しています。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              スターシーズデジタルの最大の特徴は、単なるハードウェア製品の提供にとどまらず、企画・設計・建設・運用・保守・最適化 に至るすべてのプロセスをワンストップで支援できることです。プロジェクト初期段階における要件定義やシステムアーキテクチャ設計から、導入・チューニング・エネルギーマネジメントまでを包括的にカバーし、お客様のAIデータセンター構築をスピーディかつ確実にサポートします。これにより、導入コストと運用コストの両面で効率化を図り、AIサービスの迅速な展開と長期的なTCO削減を実現します。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              さらに、AIの高性能化に伴い増大する電力消費や熱課題に対して、スターシーズデジタルは 液冷技術と再生可能エネルギーの融合 による環境配慮型ソリューションを推進しています。液冷システムは空冷方式に比べて冷却効率が大幅に高く、エネルギー使用量とCO₂排出量を削減。加えて、スマート制御技術による最適化運転を通じて、AIサーバー群の安定稼働と持続可能なデータセンター運営を両立させています。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              また、スターシーズデジタルは AI・クラウド・ネットワーク・ストレージ・エネルギー の各技術を統合し、オープンかつスケーラブルなデジタルエコシステムを構築しています。国内外の企業、研究機関、地方自治体とのパートナーシップを通じて、産業の高度化、都市のスマート化、社会インフラのデジタル化を加速。AIがもたらす膨大なデータと演算能力を社会的価値へと転換し、ビジネスの革新・環境の持続性・人々の生活の豊かさ の調和を目指しています。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              私たちの使命は、「テクノロジーの力で未来を育てる」ことです。スターシーズデジタルは、AIデータセンターを中心としたトータルソリューションプロバイダーとして、信頼性・効率性・環境性能を兼ね備えた次世代インフラを創造し、お客様の成長とともに社会全体の持続的な発展に貢献してまいります。テクノロジーを通じて新たな価値を生み出し、人・情報・エネルギーが共鳴するスマートで持続可能な未来社会 の実現を目指します。スターシーズデジタル株式会社は、AIの基盤を築き、無限の知能が共鳴する未来を創造します。テクノロジーの力で社会を進化させ、人・情報・エネルギーが調和する新しい時代へ。
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Googleマップ</h2>
                <div className="w-full h-80 md:h-full min-h-[320px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E4%B8%89%E7%94%B01-4-28%20%E4%B8%89%E7%94%B0%E5%9B%BD%E9%9A%9B%E3%83%93%E3%83%AB&hl=ja&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">会社概要</h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-900">会社名</dt>
                    <dd className="text-gray-600">スターシーズデジタル株式会社</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">代表者</dt>
                    <dd className="text-gray-600">代表取締役 鈴木 雅順</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">所在地</dt>
                    <dd className="text-gray-600">〒108-0073<br />東京都港区三田1-4-28 三田国際ビル1808</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">電話 / FAX</dt>
                    <dd className="text-gray-600">TEL：03-6435-4433　／　FAX：03-6435-4448</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">お問い合わせメール</dt>
                    <dd className="text-gray-600">ssd-sales@starseeds-digital.co.jp</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Business Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
