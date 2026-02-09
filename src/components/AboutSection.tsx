import { motion } from "framer-motion";
import { Target, Zap, Users } from "lucide-react";

const stats = [
  { icon: Target, value: "150+", label: "Projetos Entregues" },
  { icon: Users, value: "80+", label: "Clientes Satisfeitos" },
  { icon: Zap, value: "5+", label: "Anos de Experiência" },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Quem somos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Estratégia + Criatividade = <span className="text-primary">Resultados</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Atlas Marketing Digital é uma agência especializada em transformar marcas através de conteúdo visual de alto impacto. Combinamos estratégia, design e tecnologia para entregar soluções que geram resultados reais.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Do conceito à execução, cuidamos de cada detalhe para que sua marca se destaque no mercado digital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-6 text-center">
              <s.icon className="text-primary mx-auto mb-3" size={28} />
              <div className="text-3xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
