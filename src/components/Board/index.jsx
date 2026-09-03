// Importa o componente Square e os estilos do Board
import Square from "../Square";
import styles from "./Board.module.css";
import calculateWinner from "../../../utils/calculateWinner";

// Componente responsável por renderizar o tabuleiro do jogo
export default function Board({ xIsNext, squares, onPlay }) {
  // Função que lida com o clique em uma casa do tabuleiro
  function handleClick(i) {
    // Impede jogadas após o fim do jogo ou em uma célula já preenchida
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Cria uma cópia do tabuleiro
    const nextSquares = squares.slice();

    // Define o símbolo (X ou O) da jogada
    if (xIsNext) {
      nextSquares[i] = "🎈";
    } else {
      nextSquares[i] = "🎄";
    }

    // Atualiza o estado do jogo
    onPlay(nextSquares);
  }

  // Verifica se existe um vencedor
  const winner = calculateWinner(squares);

  // Define a mensagem de status
  let status;
  if (winner) {
    status = "🥇 Vencedor: " + winner;
  } else {
    status = "📣 Próximo jogador: " + (xIsNext ? "🎈" : "🎄");
  }

  // Renderiza o tabuleiro com título e 9 casas
  return (
    <div className={styles.board}>
      <h1 className={styles.title}>🎰 Jogo da Velha do Léo</h1>
      <div className={styles.status}>{status}</div>
      <div className={styles.row}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className= {styles.row}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className= {styles.row}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

    </div>

  );
}
