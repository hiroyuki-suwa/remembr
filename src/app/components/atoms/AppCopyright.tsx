import { APP_METADATA } from "@/constants";
const { author, year } = APP_METADATA;

interface AppCopyrightProps {
  className?: string;
}

export const AppCopyright = ({ className = "" }: AppCopyrightProps) => (
  <span className={`${className}`}>
    &copy;{year} {author}
  </span>
);
