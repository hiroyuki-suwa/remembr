import { Card } from "@/types";

interface CardListItemProps {
  card: Card;
  className?: string;
}

export const CardListItem = ({ card, className }: CardListItemProps) => {
  return (
    <li
      className={`w-full p-4 flex items-center justify-center border rounded-full ${className}`}
    >
      <span className="max-w-full text-3xl font-bold wrap-break-word app-sans-alt">
        {card.word}
      </span>
    </li>
  );
};
