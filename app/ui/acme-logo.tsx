import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <h1 className={`${lusitana.className} text-2xl text-white`}>Acme </h1>
    </div>
  );
}
