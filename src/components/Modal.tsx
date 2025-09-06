'use client';

import { useRouter } from 'next/navigation';
import { useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <AnimatePresence>
      <motion.div
        ref={overlay}
        className="fixed z-50 left-0 top-0 w-full h-full mx-auto bg-black/80 flex items-center justify-center p-4"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          ref={wrapper}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex-shrink-0 flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800 pl-2">製品詳細</h2>
              <button
              onClick={onDismiss}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
              <X className="w-5 h-5 text-gray-700" />
              <span className="sr-only">Close modal</span>
              </button>
          </div>
          <div className="overflow-y-auto">
              {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
