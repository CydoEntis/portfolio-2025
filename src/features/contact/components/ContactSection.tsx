import { ContactForm } from "./ContactForm";

function ContactSection() {
  return (
    <section className="py-20 px-4  border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-primary text-sm font-semibold mb-4 uppercase tracking-wider">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Have a project?</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's talk!</h3>
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
