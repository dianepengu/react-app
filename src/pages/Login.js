import { useState } from "react"
// import './Login.css'
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
        <div className='flex flex-col w-2/3 p-5 justify-center items-center'>
            <div className="flex flex-col w-1/3 space-y-5 justify-center items-center">
                <div className='flex flex-col justify-center items-center'>
                    <div className="text-3xl font-bold">Login</div>
                </div>
                <div className='flex flex-col w-full justify-center items-start'>
                    <input
                        value={username}
                        placeholder="Enter your username here"
                        onChange={ev => setUsername(ev.target.value)}
                        className='p-2 border-2 w-full rounded-lg' />
                    <label className="w-full text-sm text-red-500 ml-1">{usernameError}</label>
                </div>
                <div className='flex flex-col w-full justify-center items-start'>
                    <input
                        value={password}
                        placeholder="Enter your password here"
                        onChange={ev => setPassword(ev.target.value)}
                        className='p-2 border-2 w-full rounded-lg' />
                    <label className="text-sm text-red-500 ml-1">{passwordError}</label>
                </div>
                <input
                    className='w-full p-2 text-white font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg'
                    type="button"
                    onClick={onButtonClick}
                    value={"Log in"} />

                {showModal &&
                    <div id="myModal" class="modal">

                        <div class="modal-content">
                            <span class="close" onClick={() => { setShowModal(false) }}>&times;</span>
                            <p>Login Success!</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )

}