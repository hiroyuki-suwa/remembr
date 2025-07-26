import { AppCopyright } from "@/app/components/atoms/AppCopyright";

interface AppFooterProps {
  className?: string;
}

export const AppFooter = ({ className = "" }: AppFooterProps) => (
  <footer
    className={`w-full min-h-8 p-2 flex items-center justify-center ${className}`}
  >
    <AppCopyright className="text-xs font-light" />
  </footer>
);
