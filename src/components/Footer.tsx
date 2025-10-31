import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/products', label: '製品' },
    { href: '/solution', label: '事業内容' },
    // { href: '/news', label: 'ニュース' },
    { href: '/about', label: '会社概要' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Star Seeds Digital Co., Ltd.</h3>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0 mb-4">
              AIデータセンター向けエンドツーエンドソリューションを提供し、AI駆動のビジネス革新と持続可能な成長を実現します。
            </p>
            <p className="text-gray-500 text-sm max-w-md mx-auto md:mx-0">
              スターシーズデジタル株式会社<br />
              〒108-0073<br />
              東京都港区三田1-4-28 三田国際ビル1808
              <br />TEL：03-6435-4433　／　FAX：03-6435-4448
            </p>
          </div>
          
          {/* Sitemap */}
          <div>
            <h4 className="font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-gray-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Solutions */}
          <div>
            <h4 className="font-semibold mb-4">製品・ソリューション</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/products?tab=server" className="hover:text-white transition-colors">サーバー</Link>
              </li>
              <li>
                <Link href="/products?tab=transceiver" className="hover:text-white transition-colors">光トランシーバー</Link>
              </li>
              <li>
                <Link href="/products?tab=cable" className="hover:text-white transition-colors">ケーブル（AOC・DAC・MPO）</Link>
              </li>
              <li>
                <Link href="/solution" className="hover:text-white transition-colors">ソリューション（液冷CDUなど）</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Star Seeds Digital Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
