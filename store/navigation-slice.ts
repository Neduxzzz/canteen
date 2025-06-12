import { StateCreator } from "zustand"
import { INavSlice } from "./store-t"

export const createNavagitionSlice: StateCreator<INavSlice> = (set) => ({
  menu: [],
  setMenu: (menu) =>
    set(() => ({
      menu,
    })),
})
