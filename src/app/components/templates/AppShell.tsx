import { AppHeader } from "@/app/components/organisms/AppHeader";
import { AppFooter } from "@/app/components/organisms/AppFooter";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app h-screen min-h-screen flex flex-col items-center justify-between">
      <AppHeader className="app-bg-fill shrink-0 border-b" />
      <main className="flex-1 w-full max-w-7xl overflow-hidden">
        {children}
      </main>
      <AppFooter className="app-bg-fill shrink-0 border-t" />
    </div>
  );
};
