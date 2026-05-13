import { useAuth } from '../store/auth';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

function initialsFrom(name?: string | null, email?: string | null): string {
  if (name) {
    const parts = name.trim().split(/\s+/);
    return (parts[0][0] + (parts[1]?.[0] ?? '')).toUpperCase();
  }
  if (email) return email[0].toUpperCase();
  return '·';
}

export function Header() {
  const user = useAuth((s) => s.user);
  const fullName = (user?.user_metadata?.full_name ?? user?.user_metadata?.name) as
    | string
    | undefined;
  const initials = initialsFrom(fullName, user?.email);

  return (
    <header className="border-b border-[var(--color-hairline)]">
      <div className="grid grid-cols-3 items-center px-6 py-3">
        <div />
        <div className="flex justify-center">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-hairline)] font-mono text-xs tracking-wide text-[var(--color-fg)]"
            aria-label={user?.email ?? 'profile'}
            title={user?.email ?? ''}
          >
            {initials}
          </div>
        </div>
        <div className="flex justify-end gap-3 text-[var(--color-arrow)]">
          <button
            type="button"
            aria-label="Back"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/5"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            aria-label="Forward"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/5"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
