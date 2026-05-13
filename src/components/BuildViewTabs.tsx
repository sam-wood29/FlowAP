import { useNav, type Tab } from '../store/nav';

const TABS: Tab[] = ['build', 'view'];

export function BuildViewTabs() {
  const tab = useNav((s) => s.tab);
  const setTab = useNav((s) => s.setTab);

  return (
    <div className="border-b border-[var(--color-hairline)]">
      <div className="flex justify-center gap-12 px-6 py-3">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`text-sm tracking-wide transition-opacity ${
              tab === t
                ? 'text-[var(--color-fg)]'
                : 'text-[var(--color-muted)] hover:text-[var(--color-fg)]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
