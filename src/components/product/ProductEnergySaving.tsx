import Image from 'next/image';
import { Product } from '@/data/products';

type ProductEnergySavingProps = {
  content: Product['energySaving'];
}

export function ProductEnergySaving({ content }: ProductEnergySavingProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            効率的な省エネ
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden md:col-span-2">
            <Image
              src={content.image}
              alt="効率的な省エネ"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8 md:col-span-3">
            {content.points.map((point) => (
              <div key={point.title}>
                <h3 className="text-2xl font-bold text-gray-800">
                  {point.title}
                </h3>
                <p className="mt-2 text-lg text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
