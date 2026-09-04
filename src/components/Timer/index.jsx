import {useState,useEffect} from "reacy";
import styles from "./Timer.module.css"

export default function Timer ({isGameOver, currentMove}) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (currentMove === 0) {
            setSeconds (0);
        
        } 
    }, [])
}