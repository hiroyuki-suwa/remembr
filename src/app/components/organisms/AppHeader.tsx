import { AppLogo } from "@/app/components/atoms/AppLogo";
import { APP_METADATA } from "@/constants";
const { description } = APP_METADATA;

interface AppHeaderProps {
  className?: string;
}

export const AppHeader = ({ className = "" }: AppHeaderProps) => (
  <header className={`w-full min-h-12 p-2 ${className}`}>
    <div className="w-full h-full mx-auto flex items-center justify-between gap-4">
      <h1>
        <AppLogo className="text-3xl" />
      </h1>
      <p className="text-xs text-right font-light italic wrap-break-word">
        {description}
      </p>
    </div>
  </header>
);
