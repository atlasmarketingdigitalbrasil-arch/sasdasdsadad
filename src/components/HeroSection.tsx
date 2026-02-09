import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase">
          Marketing Digital de Alta Performance
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          Elevamos sua marca ao{" "}
          <span className="text-primary">próximo nível</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Edição de vídeo, design de apresentações, branding e rebranding — 
          tudo para transformar a presença digital da sua empresa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8 gap-2" asChild>
            <a href="#contato">
              Solicitar Orçamento <ArrowRight size={18} />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8" asChild>
            <a href="#servicos">Nossos Serviços</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
