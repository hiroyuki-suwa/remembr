import { dummyText } from "@/mocks";

const dummyContents = Array(42)
  .fill(Boolean)
  .map((_, index) => (
    <p key={index} className="mb-4">
      {dummyText()}
    </p>
  ));

interface CardDetailProps {
  className?: string;
}

export const CardDetail = ({ className = "" }: CardDetailProps) => (
  <div className={`p-4 ${className}`}>
    <article className="app-serif text-justify">{dummyContents}</article>
  </div>
);
