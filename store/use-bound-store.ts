import { create } from "zustand"
import { createNavagitionSlice } from "./navigation-slice"
export { useShallow } from "zustand/shallow"
import { createNotificationSlice } from "./notification-slice"
import { INavSlice, INotificationSlice } from "./store-t"

export const useBoundStore = create<INavSlice & INotificationSlice>()(
  (...a) => ({
    ...createNavagitionSlice(...a),
    ...createNotificationSlice(...a),
  })
)
