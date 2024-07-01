import Event from "@/components/Event";
import Floor from "@/components/Floor";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Time from "@/components/Time";

export default function Home() {
  return (
    <main className="flex w-full flex-col overflow-hidden pb-[160px]">
      {/* <Navbar /> */}
      <Hero />
      <Location />
      <Time />
      <Floor />
      <Guide />
      <Event />
    </main>
  );
}
