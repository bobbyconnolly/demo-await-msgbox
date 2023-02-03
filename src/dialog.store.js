import { create } from "zustand"

export const useDialogStore = create((set, get) => {
    // Don't put any logic here, just return the object that will be used as the store (state + actions)

    return {
        isOpen: false,
        type: "",
        title: "",
        content: "",
        resolve: null,

        // Open is used internally and is called by msgBox and msgBoxYN
        open: (type, title, content) => {
            set({
                isOpen: true,
                type,
                title,
                content,
            })
        },

        close: (result) => {
            get().resolve(result)

            // Reset the state
            set({
                isOpen: false,
                type: "",
                title: "",
                content: "",
                resolve: null,
            })
        },

        msgBox: (title, content) => {
            get().open("ok", title, content)

            // Return a promise such that the caller can await the user clicking OK
            return new Promise((resolve) => {
                // Store the resolve function so that it can be called when the user clicks OK (see `close` above)
                set({
                    resolve,
                })
            })
        },

        msgBoxYN: (title, content) => {
            get().open("yes-no", title, content)

            return new Promise((resolve) => {
                set({
                    resolve,
                })
            })
        },
    }
})
