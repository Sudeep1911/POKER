import { create } from "zustand";

const suits = ["♠️", "♣️", "♥️", "♦️"];
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const generateDeck = () => {
  return suits
    .flatMap((suit) =>
      ranks.map((rank) => ({ rank, suit, value: ranks.indexOf(rank) + 2 }))
    )
    .sort(() => Math.random() - 0.5);
};

export const usePokerStore = create((set) => ({
  deck: generateDeck(),
  players: [{ hand: [] }, { hand: [] }],
  communityCards: [],
  pot: 0,
  currentBet: 10,
  turn: 0,
  gameStatus: "waiting",

  dealCards: () => {
    let deck = generateDeck();
    let players = [
      { hand: [deck.pop(), deck.pop()] },
      { hand: [deck.pop(), deck.pop()] },
    ];
    set({ deck, players, communityCards: [], pot: 0, gameStatus: "playing" });
  },

  dealCommunityCard: () => {
    set((state) => {
      if (state.communityCards.length < 5) {
        return { communityCards: [...state.communityCards, state.deck.pop()] };
      }
      return {};
    });
  },

  placeBet: (amount) => set((state) => ({ pot: state.pot + amount })),
}));
