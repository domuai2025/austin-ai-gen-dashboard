import { create } from 'zustand';

interface PanelStore {
  profileId: string | null;
  setProfileId: (id: string | null) => void;
}

const usePanel = create<PanelStore>((set) => ({
  profileId: null,
  setProfileId: (id) => set({ profileId: id }),
}));

export { usePanel };
