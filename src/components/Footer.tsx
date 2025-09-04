export default function Footer() {
  return (
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
  );
}
