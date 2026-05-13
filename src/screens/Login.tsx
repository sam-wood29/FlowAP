import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { GitHubIcon, GoogleIcon, EnvelopeIcon } from '../components/icons';

type Mode = 'idle' | 'email' | 'sent' | 'error';

export function Login() {
  const [mode, setMode] = useState<Mode>('idle');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const signInOAuth = async (provider: 'github' | 'google') => {
    setErrorMsg('');
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.origin },
    });
    if (error) {
      setErrorMsg(error.message);
      setMode('error');
    }
  };

  const sendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setErrorMsg('');
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin },
    });
    setSubmitting(false);
    if (error) {
      setErrorMsg(error.message);
      setMode('error');
      return;
    }
    setMode('sent');
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[var(--color-bg)] px-6">
      <div className="flex w-full max-w-sm flex-col items-center">
        <h1 className="mb-12 font-mono text-sm tracking-[0.3em] text-[var(--color-muted)] uppercase">
          CashFlowAPV
        </h1>

        <div className="flex items-center gap-8">
          <IconButton label="Sign in with GitHub" onClick={() => signInOAuth('github')}>
            <GitHubIcon />
          </IconButton>
          <IconButton label="Sign in with Google" onClick={() => signInOAuth('google')}>
            <GoogleIcon />
          </IconButton>
          <IconButton
            label="Sign in with email"
            onClick={() => setMode(mode === 'email' ? 'idle' : 'email')}
            active={mode === 'email'}
          >
            <EnvelopeIcon />
          </IconButton>
        </div>

        <div className="mt-8 h-24 w-full">
          {mode === 'email' && (
            <form onSubmit={sendMagicLink} className="flex w-full flex-col gap-3">
              <input
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-[var(--color-hairline)] bg-transparent px-3 py-2 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-fg)]"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full border border-[var(--color-hairline)] px-3 py-2 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-fg)] disabled:opacity-50"
              >
                {submitting ? 'Sending…' : 'Send magic link'}
              </button>
            </form>
          )}
          {mode === 'sent' && (
            <p className="mt-2 text-center text-sm text-[var(--color-muted)]">
              Check your email for a sign-in link.
            </p>
          )}
          {mode === 'error' && errorMsg && (
            <p className="mt-2 text-center text-sm text-red-400">{errorMsg}</p>
          )}
        </div>
      </div>
    </div>
  );
}

interface IconButtonProps {
  label: string;
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}

function IconButton({ label, onClick, active, children }: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
        active
          ? 'border-[var(--color-fg)] text-[var(--color-fg)]'
          : 'border-[var(--color-hairline)] text-[var(--color-muted)] hover:border-[var(--color-fg)] hover:text-[var(--color-fg)]'
      }`}
    >
      {children}
    </button>
  );
}
