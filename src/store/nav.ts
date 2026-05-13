import { create } from 'zustand';

export type Screen = 'home' | 'data' | 'graph' | 'table';
export type Tab = 'build' | 'view';

interface NavState {
  screen: Screen;
  tab: Tab;
  drawerOpen: boolean;
  setScreen: (s: Screen) => void;
  setTab: (t: Tab) => void;
  setDrawer: (open: boolean) => void;
}

export const useNav = create<NavState>((set) => ({
  screen: 'home',
  tab: 'build',
  drawerOpen: false,
  setScreen: (screen) => set({ screen }),
  setTab: (tab) => set({ tab }),
  setDrawer: (drawerOpen) => set({ drawerOpen }),
}));
