import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "@/components/Videocard";
import { VideoGrid } from "@/components/videoGrid";
import { AppBar } from "@/components/Appbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <AppBar></AppBar>
      <VideoGrid></VideoGrid>
    </div>
  );
}
 