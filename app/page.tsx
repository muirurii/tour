
import FeaturedPackages from "./home/Featured";
import Hero from "./home/Hero";
import Testimonials from "./home/Testimonials";
import Welcome from "./home/Welcome";
import Partners from "./home/Partners";

export default function Home() {

  return (
    <main className={`min-h-screen w-screen`}>
      <Hero />
      <Welcome />
      <FeaturedPackages />
      <Testimonials />
      <Partners />
    </main>
  );
}
