import { certifications } from "@/data/portfolio";
import { resolveCertification } from "@/lib/assets";
import { CertificationGrid } from "./CertificationGrid";
import { Section } from "./Section";

export function Certifications() {
  const resolved = certifications.map(resolveCertification);

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Courses I've completed outside the classroom."
      description="Online courses I've taken to strengthen my web development fundamentals. Click a certificate to view it in full."
    >
      <CertificationGrid certifications={resolved} />
    </Section>
  );
}
