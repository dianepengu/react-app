import { useState } from "react"
import './Login.css'
import '../components/Modal.css'
import Modal from "../components/Modal"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [showModal, setShowModal] = useState(false)

    const credentials = {
        'accounts': [
            {
                'uname': 'john',
                'pass': '123456'
            },
            {
                'uname': 'mary',
                'pass': '456'
            }
        ]
    }

    const onButtonClick = () => {
        // Set initial error values to empty
        setUsernameError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === username) {
            setUsernameError("Please enter your email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        credentials.accounts.forEach(cred => {
            if (cred.uname === username) {
                if (cred.pass === password) {
                    console.log('success')
                    setShowModal(true)
                } else {
                    setShowModal(false)
                }
            }
        })
    }

    return (
        <div className={"mainContainer"}>
            <div className={"titleContainer"}>
                <div>Login</div>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    value={username}
                    placeholder="Enter your username here"
                    onChange={ev => setUsername(ev.target.value)}
                    className={"inputBox"} />
                <label className="errorLabel">{usernameError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={ev => setPassword(ev.target.value)}
                    className={"inputBox"} />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    className={"inputButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={"Log in"} />
            </div>
            {showModal &&
                <div id="myModal" class="modal">

                    <div class="modal-content">
                        <span class="close" onClick={() => { setShowModal(false) }}>&times;</span>
                        <p>Login Success!</p>
                    </div>

                </div>
            }
        </div>
    )

}