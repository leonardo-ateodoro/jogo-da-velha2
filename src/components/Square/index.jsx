import styles from "./Square.module.CSS";

export default function Square ({value, onSquareClick}) {
    return (
         <button className={styles.square} onClick = {onSquareClick}>
            {value} </button>
    );
}