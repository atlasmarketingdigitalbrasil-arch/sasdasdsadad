import { motion } from "framer-motion";
import { Film, PresentationIcon, Palette, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Film,
    title: "Edição de Vídeo",
    description: "Vídeos profissionais para redes sociais, YouTube, institucional e campanhas publicitárias com qualidade cinematográfica.",
  },
  {
    icon: PresentationIcon,
    title: "Design de Apresentações",
    description: "Apresentações impactantes para pitch decks, reuniões de negócios e eventos corporativos que encantam audiências.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Construção completa da identidade visual — logotipo, paleta de cores, tipografia e guidelines para sua marca.",
  },
  {
    icon: RefreshCw,
    title: "Rebranding",
    description: "Revitalização estratégica da sua marca para acompanhar o mercado e conectar com novos públicos.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => (
  <section id="servicos" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-medium tracking-widest uppercase">O que fazemos</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">Nossos Serviços</h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((s) => (
          <motion.div key={s.title} variants={item}>
            <Card className="bg-card border-border hover:border-primary/40 transition-colors h-full group">
              <CardContent className="p-8 flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
