// Importa hooks, componentes e estilos
import { useState } from "react";
import Board from "../Board";
import styles from "./Game.module.css";

// Componente principal do jogo
export default function Game() {
  // Histórico de jogadas
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // Movimento atual
  const [currentMove, setCurrentMove] = useState(0);

  // Define de quem é a vez (X começa)
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // Atualiza o tabuleiro e o histórico
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Permite voltar para uma jogada anterior
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Lista de movimentos
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "🔄 Agora é a sua vez #" + move;
    } else {
      description = "🎮 ir para o inicio do jogo";
    }
    return (
      <li key={move}>
        <button className={styles.moveBtn} onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  // Renderiza o jogo
  return (
    <div className={styles.game}>
      <div className={styles.boardWrapper}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>Histórico</h2>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}