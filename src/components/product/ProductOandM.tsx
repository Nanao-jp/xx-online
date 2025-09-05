import { Rocket, Gauge, Search } from 'lucide-react';
import { Product } from '@/data/products';

type ProductOandMProps = {
  content: Product['oandm'];
}

const iconMap = {
  Rocket: Rocket,
  Gauge: Gauge,
  Search: Search,
};

export function ProductOandM({ content }: ProductOandMProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            インテリジェントなO&M
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={feature.title} className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-orange-50 p-4 rounded-full mb-6">
                  <IconComponent className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
