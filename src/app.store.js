import { create } from "zustand"

export const useAppStore = create((set) => {
    return {
        role: "user",

        promoteToAdmin: () => {
            set({
                role: "admin",
            })
        },
    }
})
