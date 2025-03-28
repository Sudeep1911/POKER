import { usePokerStore } from "../store/pokerStore";
import PlayerHand from "./PlayerHand";
import BetControls from "./BetControls";

const PokerTable = () => {
  const { players, communityCards, pot, gameStatus, dealCommunityCard } =
    usePokerStore();

  return (
    <div className="p-6 bg-green-700 min-h-screen flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mb-4">Poker Game</h1>
      <div className="bg-gray-900 p-4 rounded-lg w-full max-w-2xl">
        <h2 className="text-xl mb-2">Community Cards</h2>
        <div className="flex space-x-2 mb-4">
          {communityCards.map((card, idx) => (
            <div key={idx} className="p-2 bg-white text-black rounded">
              {card.rank} {card.suit}
            </div>
          ))}
        </div>
        <h3 className="text-lg">Pot: ${pot}</h3>
      </div>

      {players.map((player, idx) => (
        <PlayerHand key={idx} player={player} index={idx} />
      ))}

      <BetControls />

      {gameStatus === "playing" && (
        <button
          onClick={dealCommunityCard}
          className="mt-4 px-4 py-2 bg-blue-500 rounded"
        >
          Deal Community Card
        </button>
      )}
    </div>
  );
};

export default PokerTable;
