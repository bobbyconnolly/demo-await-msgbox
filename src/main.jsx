import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { DialogProvider } from "./dialog.provider"
import "./index.css"

// Be sure to wrap your app in the DialogProvider or else the dialog functionality won't work

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DialogProvider>
            <App />
        </DialogProvider>
    </React.StrictMode>
)
