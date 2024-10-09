import { ParticlesDemo } from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black antialiased">
      <ParticlesDemo />
    </div>
  );
}
