import { Drawer } from 'vaul';
import { useNav } from '../store/nav';
import { PopBackIcon } from './icons';

export function ReportDrawer() {
  const open = useNav((s) => s.drawerOpen);
  const setDrawer = useNav((s) => s.setDrawer);

  return (
    <Drawer.Root direction="right" open={open} onOpenChange={setDrawer}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50" />
        <Drawer.Content
          className="fixed top-0 right-0 z-50 flex h-full flex-col border-l border-[var(--color-hairline)] bg-[var(--color-surface)] outline-none"
          style={{ width: '78.6%' }}
        >
          <Drawer.Title className="sr-only">Report</Drawer.Title>
          <Drawer.Description className="sr-only">
            Report panel — empty in v0.
          </Drawer.Description>
          <button
            type="button"
            onClick={() => setDrawer(false)}
            aria-label="Close report"
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-hairline)] bg-[var(--color-bg)] p-2 text-[var(--color-fg)] transition-colors hover:border-[var(--color-fg)]"
          >
            <PopBackIcon />
          </button>
          <div className="flex-1" />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
