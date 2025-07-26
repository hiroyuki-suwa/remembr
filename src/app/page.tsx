import { AppLogo } from "@/app/components/atoms/AppLogo";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center gap-4 overflow-y-auto app-noscrollbar">
      <div className="my-auto p-4 text-center">
        <h1>
          <AppLogo className="text-5xl" />
        </h1>
        <p className="text-xl font-light">coming soon...</p>
      </div>
    </div>
  );
}
