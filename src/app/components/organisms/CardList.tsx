import { CardListItem } from "@/app/components/molecules/CardListItem";
import { dummyCards } from "@/mocks";

const items = dummyCards.map((card) => (
  <CardListItem card={card} key={card.id} className="app-bg-fill" />
));

interface CardListProps {
  className?: string;
}

export const CardList = ({ className = "" }: CardListProps) => (
  <ul className={`app-bg-fillp-4 p-4 ${className}`}>{items}</ul>
);
