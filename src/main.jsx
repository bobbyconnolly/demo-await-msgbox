import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { DialogProvider } from "./dialog.provider"
import "./index.css"

// Be sure to add an instance of DialogProvider or else the dialog functionality won't work
// Here is a good place to put it. It's not necessary to wrap App in this case since we aren't using `React.createContext()`...
// ... DialogProvider could be a sibling of <App /> and it would still work. Maybe there's a "better" way ¯\_(ツ)_/¯

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DialogProvider>
            <App />
        </DialogProvider>
    </React.StrictMode>
)
