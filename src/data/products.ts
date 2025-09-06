// --- Re-export all types from the new types file
export * from './types';

// --- Import product data from subdirectories
import { serverProducts } from './server';
import { cableProducts } from './cable';
import type { AnyProduct } from './types';

// --- Combine and export all products
export const allProducts: AnyProduct[] = [
  ...serverProducts,
  ...cableProducts,
];
