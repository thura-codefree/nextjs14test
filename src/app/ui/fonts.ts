import { Inter, Lusitana, Roboto_Mono, Playpen_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
export const playpen_sans = Playpen_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playpen_sans",
});
