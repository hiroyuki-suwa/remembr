import { CardList } from "@/app/components/organisms/CardList";
import { CardDetail } from "@/app/components/organisms/CardDetail";

export default function Home() {
  return (
    <div className="mx-auto h-full flex flex-col md:flex-row items-center justify-center mad:gap-4 overflow-y-auto app-noscrollbar">
      <CardList className="flex-shrink w-128 max-w-md h-full max-h-full flex flex-col gap-4 items-center overflow-y-auto app-noscrollbar" />
      <CardDetail className="app-bg-fill flex-1 w-full md:w-1/2 min-h-1/3 md:h-full md:min-h-full border-t md:border-l md:border-t-0 overflow-y-auto app-noscrollbar" />
    </div>
  );
}
