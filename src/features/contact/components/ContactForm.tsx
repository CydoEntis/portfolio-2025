import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!", {
        description: "I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-[11px] font-medium text-muted-foreground tracking-[0.06em] uppercase">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="bg-input border-glass-border text-foreground rounded-lg transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-[11px] font-medium text-muted-foreground tracking-[0.06em] uppercase">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-input border-glass-border text-foreground rounded-lg transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-[11px] font-medium text-muted-foreground tracking-[0.06em] uppercase">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project or opportunity"
                  rows={5}
                  className="bg-input border-glass-border text-foreground rounded-lg resize-y transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="cursor-pointer inline-flex items-center gap-2 px-[26px] py-3 rounded-lg text-[13.5px] font-medium text-white transition-all disabled:opacity-50"
          style={{
            background: "linear-gradient(135deg, var(--primary), var(--primary))",
            boxShadow: "0 2px 12px var(--accent-glow)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 20px var(--accent-glow-strong)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 2px 12px var(--accent-glow)";
          }}
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Message →"}
        </button>
      </form>
    </Form>
  );
}
