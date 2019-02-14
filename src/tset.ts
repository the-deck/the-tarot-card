
type CardType = "Major" | "Minor";
type SuitType = "Wand" | "Cup" | "Sword" | "Pentacle";

interface Meaning {
  keyword: string;
  means: string[] | string;
}

interface Card {
  cardType: CardType;
  name: string;
  nick: string;
  meta?: Meaning[];
  meaning: Meaning[];
  reverse: Meaning[];
  job?: string;
  suitType?: SuitType;
}

let myCard: Card = {
  cardType: "Minor",
  name: "Ace of Wands",
  nick: "Aw",
  suitType: "Wand",
  meaning: [
    {
      keyword: "새로운 시작",
      means: ["창업", "창안", "입학", "취직", "관계"]
    }
  ],
  reverse: [
    {
      keyword: "끝",
      means: ["일이 완성하지 못하고 끝나버림", "실현되지 않은 목표", "계획의 무산"]
    }
  ]
};
