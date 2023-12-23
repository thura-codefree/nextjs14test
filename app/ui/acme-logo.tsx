import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white w-full">
      <CurrencyDollarIcon className="h-12 w-12" />
      <h1 className={`${lusitana.className} md:w-full text-2xl text-white`}>
        Invoice System (Next.js-v14)
      </h1>
    </div>
  );
}
