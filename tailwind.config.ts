import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Geist',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        mono: [
          'Geist Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      colors: {
        bg: '#000000',
        surface: '#0a0a0a',
        hairline: '#1a1a1a',
        muted: '#6b6b6b',
        fg: '#ededed',
        arrow: '#7dd3fc',
        data: '#ef4444',
        graph: '#4338ca',
        table: '#f97316',
      },
    },
  },
  plugins: [],
};

export default config;
