import { useNav, type Screen } from '../store/nav';

interface BuildButton {
  screen: Screen;
  label: string;
  colorVar: string;
}

const BUTTONS: BuildButton[] = [
  { screen: 'data', label: 'data', colorVar: 'var(--color-data)' },
  { screen: 'graph', label: 'graph', colorVar: 'var(--color-graph)' },
  { screen: 'table', label: 'table', colorVar: 'var(--color-table)' },
];

export function Home() {
  const setScreen = useNav((s) => s.setScreen);

  return (
    <div className="flex flex-1 flex-col items-center px-6 pt-10">
      <p className="font-mono text-xs tracking-[0.25em] text-[var(--color-muted)] uppercase">
        build here
      </p>
      <div className="my-6 h-px w-40 bg-[var(--color-hairline)]" />
      <div className="flex w-full max-w-sm flex-col gap-5">
        {BUTTONS.map((b) => (
          <button
            key={b.screen}
            type="button"
            onClick={() => setScreen(b.screen)}
            className="w-full border bg-transparent py-5 text-center text-base tracking-wide transition-colors hover:bg-white/[0.03]"
            style={{ borderColor: b.colorVar, color: b.colorVar }}
          >
            {b.label}
          </button>
        ))}
      </div>
    </div>
  );
}
