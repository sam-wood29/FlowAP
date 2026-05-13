import { Header } from '../components/Header';
import { BuildViewTabs } from '../components/BuildViewTabs';
import { ReportDrawer } from '../components/ReportDrawer';
import { useNav } from '../store/nav';
import { Home } from './Home';
import { Data } from './Data';
import { Graph } from './Graph';
import { Table } from './Table';

export function Main() {
  const screen = useNav((s) => s.screen);
  const setDrawer = useNav((s) => s.setDrawer);

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <BuildViewTabs />
      <main className="flex flex-1 flex-col">
        {screen === 'home' && <Home />}
        {screen === 'data' && <Data />}
        {screen === 'graph' && <Graph />}
        {screen === 'table' && <Table />}
      </main>
      <button
        type="button"
        onClick={() => setDrawer(true)}
        aria-label="Open report"
        className="fixed top-1/2 right-0 -translate-y-1/2 rounded-l-full border border-r-0 border-[var(--color-hairline)] bg-[var(--color-surface)] px-2 py-3 text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
      >
        <span className="font-mono text-[10px] tracking-widest [writing-mode:vertical-rl]">
          report
        </span>
      </button>
      <ReportDrawer />
    </div>
  );
}
