import { create } from 'zustand';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

type Status = 'loading' | 'authed' | 'anon';

interface AuthState {
  status: Status;
  session: Session | null;
  user: User | null;
  signOut: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  status: 'loading',
  session: null,
  user: null,
  signOut: async () => {
    await supabase.auth.signOut();
    set({ status: 'anon', session: null, user: null });
  },
}));

supabase.auth.getSession().then(({ data }) => {
  const session = data.session;
  useAuth.setState({
    status: session ? 'authed' : 'anon',
    session,
    user: session?.user ?? null,
  });
});

supabase.auth.onAuthStateChange((_event, session) => {
  useAuth.setState({
    status: session ? 'authed' : 'anon',
    session,
    user: session?.user ?? null,
  });
});
