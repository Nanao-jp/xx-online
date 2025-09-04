'use client';

import { useRouter } from 'next/navigation';
import { useRef, useEffect, useCallback, PropsWithChildren } from 'react';

export default function Modal({ children }: PropsWithChildren) {
  const overlay = useRef<HTMLDivElement>(null);
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
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 flex items-center justify-center"
      onClick={onClick}
    >
      <div
        className="relative w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
      >
        <button
          onClick={onDismiss}
          className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="閉じる"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
