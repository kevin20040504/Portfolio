import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { site } from "@/data/portfolio";
import { publicFileExists } from "@/lib/assets";

export default function HomePage() {
  const cvAvailable = publicFileExists(site.cvPath);

  return (
    <>
      <Hero cvAvailable={cvAvailable} />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
    </>
  );
}
