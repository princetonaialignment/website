import { create } from "zustand";

type ApplicationStore = {
  applicationsOpen: boolean;
  setApplicationsOpen: (open: boolean) => void;
};

const useApplicationStore = create<ApplicationStore>((set) => ({
  applicationsOpen: true,
  setApplicationsOpen: (open: boolean) => set({ applicationsOpen: open }),
}));

export default useApplicationStore;
