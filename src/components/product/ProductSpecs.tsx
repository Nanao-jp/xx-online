import Link from 'next/link';
import { ProductSpec } from '@/data/products';

type ProductSpecsProps = {
  specs: ProductSpec[];
  datasheetUrl?: string;
}

export function ProductSpecs({ specs, datasheetUrl }: ProductSpecsProps) {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            技術仕様
          </h2>
        </div>
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {specs.map((spec) => (
              <div key={spec.label} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{spec.label}</dt>
                <dd className="mt-2 text-sm text-gray-500">{spec.value}</dd>
              </div>
            ))}
          </div>
        </div>
        {datasheetUrl && (
          <div className="mt-12 text-center">
            <Link
              href={datasheetUrl}
              download
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              データシートをダウンロード
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
