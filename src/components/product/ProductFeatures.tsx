import Image from 'next/image';
import { ProductFeature } from '@/data/products';

type ProductFeaturesProps = {
  features: ProductFeature[];
}

function FeatureSection({ feature, reverse = false }: { feature: ProductFeature, reverse?: boolean }) {
  const imageColumn = (
    <div className="relative w-full h-80 rounded-lg overflow-hidden">
      <Image
        src={feature.image}
        alt={feature.title}
        fill
        className="object-cover"
      />
    </div>
  );

  const textColumn = (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
        {feature.title}
      </h2>
      {feature.description && (
         <p className="mt-6 text-lg text-gray-600 leading-8">
           {feature.description}
         </p>
      )}
      {feature.bullets && (
        <div className="mt-8 space-y-4">
          {feature.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <p className="text-gray-700">{bullet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const textColumnWithCards = (
     <div className="relative h-96 rounded-2xl overflow-hidden">
       <Image
         src={feature.image}
         alt={feature.title}
         fill
         className="object-cover"
       />
       <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
       <div className="relative h-full p-8 flex flex-col justify-start">
         <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
         {feature.bullets && (
            <ul className="mt-4 space-y-2 text-gray-200">
             {feature.bullets.map((bullet, i) => (
               <li key={i} className="flex items-start">
                 <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                 <span>{bullet}</span>
               </li>
             ))}
           </ul>
         )}
       </div>
     </div>
  );
  
  // '柔軟な拡張性' or '極めて優れた演算能力'
  if (!feature.description) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {/* This is a bit of a hack, assuming the features without description are the two cards */}
        {/* A better data structure could solve this, but for now it works. */}
        {features.filter(f => !f.description).map(f => (
          <div key={f.title} className="relative h-96 rounded-2xl overflow-hidden">
            <Image src={f.image} alt={f.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
            <div className="relative h-full p-8 flex flex-col justify-start">
              <h3 className="text-3xl font-bold text-white">{f.title}</h3>
              {f.bullets && (
                <ul className="mt-4 space-y-2 text-gray-200">
                  {f.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {reverse ? (
        <>
          {textColumn}
          {imageColumn}
        </>
      ) : (
        <>
          {imageColumn}
          {textColumn}
        </>
      )}
    </div>
  );
}


export function ProductFeatures({ features }: ProductFeaturesProps) {
  // Logic to handle the special two-card layout
  const mainFeature = features.find(f => f.description);
  const cardFeatures = features.filter(f => !f.description);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {mainFeature && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <Image src={mainFeature.image} alt={mainFeature.title} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                {mainFeature.title}
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-8">
                {mainFeature.description}
              </p>
              {mainFeature.bullets && (
                <div className="mt-8 space-y-4">
                  {mainFeature.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
                      <p className="text-gray-700">{bullet}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        {cardFeatures.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {cardFeatures.map(feature => (
              <div key={feature.title} className="relative h-96 rounded-2xl overflow-hidden">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                <div className="relative h-full p-8 flex flex-col justify-start">
                  <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                  {feature.bullets && (
                    <ul className="mt-4 space-y-2 text-gray-200">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
