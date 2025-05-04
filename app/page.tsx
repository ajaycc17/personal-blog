import Hero from "./components/Hero";
import Articles from "./components/articles/Articles";

export const revalidate = 60;

export default function Home() {
  return (
    <div className="fade-in">
      <Hero image="Ajay.jpeg" />
      <Articles />
    </div>
  );
}