import Link from 'next/link';

export default function ProductContactCTA() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            製品に関するお問い合わせ
          </h2>
          <p className="mt-4 mx-auto text-lg leading-8 text-gray-600">
            導入のご相談、お見積もり、技術的なご質問など、お気軽にお問い合わせください。
          </p>
          <div className="mt-8">
            <Link
              href="/contact" // Assuming a contact page exists or will be created
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
