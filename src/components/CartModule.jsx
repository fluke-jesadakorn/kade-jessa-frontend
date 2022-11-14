import { IDs} from '../utils/store'
import { useStore } from '@nanostores/react'
//batch
const ENDPOINT = import.meta.env.ENDPOINT;

const getDate = await fetch(ENDPOINT).then((res) => res.json());

export default function Cart () {
    const IDList = useStore(IDs)
    return IDList.map((item, key)=>(
        <p key={key}>{item}</p>
    ))
}