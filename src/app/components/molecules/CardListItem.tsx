import { Card } from "@/types";

interface CardListItemProps {
  card: Card;
}

export const CardListItem = ({ card }: CardListItemProps) => {
  return (
    <li className="w-full p-4 flex items-center justify-center border rounded-lg">
      <span className="max-w-full text-3xl font-bold wrap-break-word app-sans-alt">
        {card.word}
      </span>
    </li>
  );
};
