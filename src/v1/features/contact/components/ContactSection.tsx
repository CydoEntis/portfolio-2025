import { ContactForm } from "@/features/contact/components/ContactForm";

function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left  mb-4 uppercase tracking-wider text-primary">
              Contact
            </h2>
            <div className="w-16 h-px bg-primary/20  mb-8"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">Have a project?</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">Let's talk!</h3>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
