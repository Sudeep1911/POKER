import { usePokerStore } from "../store/pokerStore";

const BetControls = () => {
  const { placeBet, dealCards } = usePokerStore();

  return (
    <div className="mt-4 flex space-x-4">
      <button
        onClick={() => placeBet(10)}
        className="px-4 py-2 bg-red-500 rounded"
      >
        Bet $10
      </button>
      <button onClick={dealCards} className="px-4 py-2 bg-yellow-500 rounded">
        Start New Game
      </button>
    </div>
  );
};

export default BetControls;
