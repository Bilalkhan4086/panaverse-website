"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Hero4 from "@/components/Hero4";
import Hero5 from "@/components/Hero5";

export default function App() {
  return (
    <div style={{ height: "90vh" }}>
      <Hero />
      <Hero2 />
      <Hero3 marginTop={[800, 400, 400, 0, 0]} />
      <Hero4 />
      <Hero5 />
      <Footer />
    </div>
  );
}
