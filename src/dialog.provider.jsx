import React from "react"
import ReactDOM from "react-dom"
import { useDialogStore } from "./dialog.store"

import "./dialog.styles.css"

export const DialogProvider = (props) => {
    const { isOpen, type, title, content , close } = useDialogStore() // prettier-ignore

    // NOTE: We only expose the msgBox and msgBoxYN functions to the rest of the app
    return (
        <>
            {props.children}

            {isOpen && (
                <Modal>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    {type === "ok" && (
                        <button onClick={() => close("ok")}>OK</button>
                    )}
                    {type === "yes-no" && (
                        <div className="button-container">
                            <button onClick={() => close(false)}>No</button>
                            <button onClick={() => close(true)}>Yes</button>
                        </div>
                    )}
                </Modal>
            )}
        </>
    )
}

function Modal(props) {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">{props.children}</div>
        </div>,
        document.getElementById("portal") // NOTE: Make sure you have <div id="portal"></div> in your index.html
    )
}
