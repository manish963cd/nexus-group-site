import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Heart, ArrowRight, Users, Trophy, Globe } from 'lucide-react';

const CardSection = () => {
  const cards = [
    {
      id: 1,
      title: "Estate Division",
      subtitle: "Premium Real Estate Development",
      description: "Crafting exceptional residential and commercial spaces with innovative design, sustainable practices, and uncompromising quality standards.",
      link: "/estate",
      icon: Building2,
      gradient: "from-blue-600 to-blue-400",
      stats: [
        { icon: Building2, label: "Properties", value: "50+" },
        { icon: Users, label: "Happy Clients", value: "1000+" },
        { icon: Trophy, label: "Awards", value: "15+" }
      ],
      features: ["Luxury Developments", "Commercial Projects", "Sustainable Design", "Prime Locations"]
    },
    {
      id: 2,
      title: "NGO Division",
      subtitle: "Community Impact & Social Change",
      description: "Dedicated to creating meaningful change through education, healthcare, and community development programs that empower lives and build stronger communities.",
      link: "/ngo",
      icon: Heart,
      gradient: "from-red-500 to-pink-400",
      stats: [
        { icon: Users, label: "Lives Impacted", value: "5000+" },
        { icon: Globe, label: "Communities", value: "25+" },
        { icon: Heart, label: "Programs", value: "30+" }
      ],
      features: ["Education Programs", "Healthcare Initiatives", "Community Development", "Emergency Relief"]
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Divisions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we're making a difference through exceptional real estate development 
            and meaningful community impact initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{card.title}</h3>
                    <p className="text-muted-foreground">{card.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {card.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {card.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex justify-center mb-2">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={card.link}
                  className="inline-flex items-center space-x-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold group-hover:scale-105 transition-all duration-300 hover:shadow-glow"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;