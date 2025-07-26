interface AppLogoProps {
  className?: string;
}

export const AppLogo = ({ className = "" }: AppLogoProps) => (
  <span className={`app-sans-alt leading-none ${className}`}>
    <span className="font-bold">re:</span>
    <span className="font-light">membr</span>
  </span>
);
