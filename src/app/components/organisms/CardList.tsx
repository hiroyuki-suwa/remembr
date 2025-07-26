import { CardListItem } from "@/app/components/molecules/CardListItem";
import { dummyCards } from "@/mocks";

const items = dummyCards.map((card) => (
  <CardListItem card={card} key={card.id} />
));

interface CardListProps {
  className?: string;
}

export const CardList = ({ className = "" }: CardListProps) => (
  <ul className={`p-4 ${className}`}>{items}</ul>
);
