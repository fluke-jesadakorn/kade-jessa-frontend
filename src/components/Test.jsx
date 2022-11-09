import { useState } from 'react'
export default function Test() {
    const [state, setState] = useState(0)
    return <button onClick={() => setState(prev => prev + 1)}>{state}</button>
}
