import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Contato</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">Vamos conversar?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Pronto para transformar sua marca? Entre em contato e descubra como podemos ajudar.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail, text: "contato@atlasmarketing.com.br" },
                { icon: Phone, text: "(11) 99999-9999" },
                { icon: MapPin, text: "São Paulo, SP — Brasil" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <Input placeholder="Seu nome" required className="bg-card border-border" />
            <Input type="email" placeholder="Seu e-mail" required className="bg-card border-border" />
            <Input placeholder="Assunto" required className="bg-card border-border" />
            <Textarea placeholder="Sua mensagem" rows={5} required className="bg-card border-border resize-none" />
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
