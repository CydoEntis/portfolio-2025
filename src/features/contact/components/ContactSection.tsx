import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { ContactForm } from "./ContactForm";

export default function ContactSection() {
  return (
    <div>
      <FadeIn>
        <SectionHeader
          label="Contact"
          title="Let's work together"
          subtitle="Have a project or opportunity? I'd love to hear about it."
        />
      </FadeIn>
      <FadeIn delay={0.06}>
        <div className="border border-glass-border rounded-xl bg-glass backdrop-blur-[12px] shadow p-7">
          <ContactForm />
        </div>
      </FadeIn>
    </div>
  );
}
