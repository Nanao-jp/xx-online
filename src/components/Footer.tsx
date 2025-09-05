import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { href: '/about', label: '会社情報' },
    { href: '/news', label: 'ニュース' },
    { href: '/solution', label: 'ソリューション' },
    { href: '/products', label: '製品' },
    { href: '/service-support', label: 'サービス・サポート' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">XX-online</h3>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              企業のITインフラを革新し、ビジネス成長を支援します
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

          {/* Contact */}
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
