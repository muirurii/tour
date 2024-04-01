
import Hero from "./home/Hero";
import Welcome from "./home/Welcome";

export default function Home() {

  return (
    <main className={`min-h-screen w-screen`}>
      <Hero />
      <Welcome />
    </main>
  );
}
