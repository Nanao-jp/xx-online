import type {
  Product,
  ServerProduct,
  CableProduct,
  TransceiverProduct,
  ServerCategory,
  CableCategory,
  TransceiverCategory,
} from '@/data/types';

const serverCategories: ServerCategory[] = ['gpu-server', 'cpu-server'];
const cableCategories: CableCategory[] = ['aoc', 'dac', 'mpo'];
const transceiverCategories: TransceiverCategory[] = [
  '1.6t',
  '800g',
  '400g',
  '200g',
  '100g',
  'coherent',
];

export const isServerProduct = (product: Product): product is ServerProduct => {
  return (serverCategories as string[]).includes(product.category);
};

export const isCableProduct = (product: Product): product is CableProduct => {
  return (cableCategories as string[]).includes(product.category);
};

export const isTransceiverProduct = (
  product: Product,
): product is TransceiverProduct => {
  return (transceiverCategories as string[]).includes(product.category);
};
