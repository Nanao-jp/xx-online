// --- Re-export all types from the new types file
export * from './types';

// --- Import product data from subdirectories
import { serverProducts } from './server';
import { cableProducts } from './cable';
import type { Product } from './types';

// --- Combine and export all products
export const allProducts = [
  ...serverProducts,
  ...cableProducts,
] satisfies readonly Product[];
