import { useAppStore } from "./app.store"
import { useDialogStore } from "./dialog.store"

import "./App.css"

export function App() {
    const { role, promoteToAdmin } = useAppStore()
    const { msgBox, msgBoxYN } = useDialogStore()

    // You have to use async/await here if you want to wait for the user to click Yes or No
    async function handlePromoteToAdmin() {
        const result = await msgBoxYN(
            "Promote to Admin",
            "Are you sure you want to promote to admin?"
        )

        if (result) {
            // do something only if the user clicks Yes
            promoteToAdmin()
        }
    }

    async function handleShowMsgBoxes() {
        console.log("before msgBox")
        await msgBox("MyApp", "Hello World")
        console.log("after msgBox")
        await msgBox("MyApp", "Ginger says hello too!")
        console.log("after msgBox 2")
    }

    let rolePart = role
    if (role === "admin") {
        rolePart = (
            <span style={{ color: "deeppink", fontWeight: "bold" }}>admin</span>
        )
    }

    return (
        <div className="App">
            <p>Your current role is {rolePart}</p>

            <button onClick={() => handlePromoteToAdmin()}>
                Promote to Admin
            </button>

            <button onClick={() => handleShowMsgBoxes()}>
                Show Message Boxes
            </button>
        </div>
    )
}
