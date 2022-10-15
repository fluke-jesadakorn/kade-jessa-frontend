import { useRef, useState, useEffect } from 'react'
import { initialize } from "../utils/firebaseInit";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import '../styles/login.scss'

const Login = ({ ENDPOINT }) => {
    const [fail, setFail] = useState(false)
    const userRef = useRef()
    const passRef = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setFail(false)
        }, 5000);
        return () => clearTimeout(timer);
    }, [fail]);

    const signin = async ({ user, password }) => {
        await initialize()
        signInWithEmailAndPassword(getAuth(), user + "@gmail.com", password)
            .then(async token => {
                fetch(ENDPOINT + '/admin/login', {
                    method: "POST",
                    body: JSON.stringify({
                        idToken: await token.user.getIdToken()
                    }),
                    credentials: "include"
                })
                    .then(resp => resp.json())
                    .then(() => {
                        return window.location.replace('/admin')
                    })
                    .catch(err => {
                        console.error(err)
                    })
            })
            .catch(res => {
                console.error(res)
                setFail(true)
            })
    }

    const handleSubmit = (e) => {
        const user = userRef.current.value
        const password = passRef.current.value
        e.preventDefault()
        signin({ user, password })
    }

    return <div>
        {
            fail && <div className="alert alert-error shadow-lg fixed">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Wrong Username or Password</span>
                </div>
            </div>
        }
        <form onSubmit={e => handleSubmit(e)} className='flex flex-col align-middle h-screen justify-center px-64'>
            <div className="form-control py-4 w-full">
                <label className="input-group input-group-md">
                    <span>User</span>
                    <input ref={userRef} type="text" placeholder="Enter User" className="input input-bordered input-md w-full" />
                </label>
            </div>
            <div className="form-control py-4 w-full">
                <label className="input-group input-group-md w-full">
                    <span>Password</span>
                    <input ref={passRef} type="text" placeholder="Enter password" className="input input-bordered input-md w-full" />
                </label>
            </div>
            <div className="form-control py-4 w-full">
                <button className='btn btn-primary p-4' type='submit'>Login</button>
            </div>
        </form>
    </div>
}

export default Login