import type { Product, ServerProduct, ServerCategory } from '@/data/types';

const SERVER_CATEGORIES: readonly ServerCategory[] = ['gpu-server', 'cpu-server'];

export function isServerProduct(p: Product): p is ServerProduct {
  // 判別キー（category）でナローイング
  return (SERVER_CATEGORIES as readonly string[]).includes(p.category);
}
