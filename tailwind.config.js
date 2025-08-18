/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // XX-online カスタムカラーパレット
        'xx-orange': {
          50: '#fff7ed',   // 薄いピーチ色の背景
          100: '#ffedd5',  // ホバー時の薄い背景色
          300: '#fdba74',  // ホバー時のボーダー
          500: '#f97316',  // ドット色・明るいオレンジ
          600: '#ea580c',  // メインオレンジ色
          700: '#c2410c',  // ホバー時の濃いオレンジ
          800: '#9a3412',  // テキスト色
        },
      },
    },
  },
  plugins: [],
}
