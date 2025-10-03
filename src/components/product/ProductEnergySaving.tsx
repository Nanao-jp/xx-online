import Image from 'next/image';
import { ServerProduct } from '@/data/types';
import { Zap, ShieldCheck, Cpu, LucideIcon, BatteryCharging, ThermometerSun, Gauge } from 'lucide-react';
import { CSSProperties } from 'react';

type ProductEnergySavingProps = {
  energySaving: ServerProduct['energySaving'];
};

const iconMap: { [key: string]: LucideIcon } = {
  BatteryCharging: BatteryCharging,
  ThermometerSun: ThermometerSun,
  Gauge: Gauge,
  Zap: Zap,
  'shield-check': ShieldCheck,
  cpu: Cpu,
  // 小文字のキーも対応
  zap: Zap,
};

export function ProductEnergySaving({ energySaving }: ProductEnergySavingProps) {
  if (!energySaving || (!energySaving.image && energySaving.points.length === 0)) {
    return null;
  }

  const getPositionClasses = (position?: string) => {
    switch (position) {
      case 'top':
        return 'object-top';
      case 'bottom':
        return 'object-bottom';
      case 'left':
        return 'object-left';
      case 'right':
        return 'object-right';
      default:
        return 'object-center';
    }
  };

  const getPositionStyles = (): CSSProperties => {
    const keywords = ['top', 'bottom', 'left', 'right', 'center'];
    if (energySaving.imagePosition && !keywords.includes(energySaving.imagePosition)) {
      return { objectPosition: energySaving.imagePosition };
    }
    return {};
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-20 sm:py-32 border-t-2 border-gray-200">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center lg:text-left mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            効率的な省エネ
          </h2>
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
            <div className="h-1 w-8 bg-orange-200 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
          {energySaving.image && (
            <div className="relative w-full aspect-video lg:h-[70vh] lg:aspect-auto rounded-3xl overflow-hidden shadow-2xl order-last lg:order-first border-4 border-white ring-1 ring-gray-200">
              <Image
                src={energySaving.image}
                alt="効率的な省エネ"
                fill
                className={`object-cover ${getPositionClasses(energySaving.imagePosition)}`}
                style={getPositionStyles()}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
            </div>
          )}

          <div className="space-y-6">
            {energySaving.points.map((point) => {
              const Icon = iconMap[point.icon];
              return (
                <div key={point.title} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                      {Icon && <Icon className="w-7 h-7 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
