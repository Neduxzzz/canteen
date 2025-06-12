import { StateCreator } from "zustand"
import { INotificationSlice } from "./store-t"

export const createNotificationSlice: StateCreator<INotificationSlice> = (
  set
) => ({
  messages: [],
  setMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
})
