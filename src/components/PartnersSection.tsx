import { motion } from "framer-motion";

interface PartnerLogo {
  name: string;
  logo: string;
}

const PartnersSection = () => {
  const communityPartners: PartnerLogo[] = [
    { name: "Partner 1", logo: "/lovable-logo-white.png" },
    { name: "Partner 2", logo: "/lovable-logo-white.png" },
    { name: "Partner 3", logo: "/lovable-logo-white.png" },
    { name: "Partner 4", logo: "/lovable-logo-white.png" },
  ];

  const techPartners: PartnerLogo[] = [
    { name: "Tech 1", logo: "/lovable-logo-white.png" },
    { name: "Tech 2", logo: "/lovable-logo-white.png" },
    { name: "Tech 3", logo: "/lovable-logo-white.png" },
    { name: "Tech 4", logo: "/lovable-logo-white.png" },
  ];

  const foodPartners: PartnerLogo[] = [
    { name: "Food 1", logo: "/lovable-logo-white.png" },
    { name: "Food 2", logo: "/lovable-logo-white.png" },
    { name: "Food 3", logo: "/lovable-logo-white.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const PartnerCard = ({ title, partners }: { title: string; partners: PartnerLogo[] }) => (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square bg-background/50 rounded-xl p-4 flex items-center justify-center border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain filter brightness-100 opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Powering HerCode
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <PartnerCard title="Community Partners" partners={communityPartners} />
          <PartnerCard title="Tech Partners" partners={techPartners} />
          <PartnerCard title="Food Partners" partners={foodPartners} />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
