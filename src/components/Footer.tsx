const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <span className="text-primary">ATLAS</span> MKT
      </span>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Atlas Marketing Digital. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
