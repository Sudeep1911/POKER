const PlayerHand = ({ player, index }) => {
  return (
    <div className="mt-4 text-center">
      <h2 className="text-lg">{`Player ${index + 1}`}</h2>
      <div className="flex space-x-2">
        {player.hand.map((card, idx) => (
          <div key={idx} className="p-2 bg-white text-black rounded">
            {card.rank} {card.suit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerHand;
