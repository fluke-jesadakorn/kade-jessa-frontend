import { useRef } from 'react'
import { initialize } from "../utils/firebaseInit";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({ ENDPOINT }) => {

    const userRef = useRef()
    const passRef = useRef()

    const signin = async ({ user, password }) => {
        const headers = new Headers
        headers.append("Authentication", "Bearer " + await token.user.getIdToken())
        await initialize()
        signInWithEmailAndPassword(getAuth(), user + "@gmail.com", password)
            .then(async token => {
                console.log(await token.user.getIdToken())
                fetch(ENDPOINT + '/user/login', {
                    method: "POST",
                    body: JSON.stringify({
                        idToken: await token.user.getIdToken()
                    }),
                    headers: headers
                })
                    .then(resp => resp.json())
                    .then(res => console.log(res))
                    .catch(err => console.error(err))
            })
            .catch(res => console.error(res))
    }

    const handleSubmit = (e) => {
        const user = userRef.current.value
        const password = passRef.current.value
        e.preventDefault()
        signin({ user, password })
    }

    return <div>
        <form onSubmit={e => handleSubmit(e)} id="form">
            <label htmlFor="user">User</label>
            <input type="text" name="user" ref={userRef} id="user" />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" ref={passRef} id='password' />
            <button type='submit'>Login</button>
        </form>
    </div>
}

export default Login