import { motion } from 'framer-motion';
import { Building2, Award, Users, Target, Shield, Lightbulb, Leaf, Star } from 'lucide-react';

const AboutEstate = () => {
  const stats = [
    { icon: Building2, label: "Projects Completed", value: "50+", color: "text-blue-600" },
    { icon: Users, label: "Happy Clients", value: "1000+", color: "text-green-600" },
    { icon: Award, label: "Industry Awards", value: "15+", color: "text-purple-600" },
    { icon: Star, label: "Average Rating", value: "4.9", color: "text-yellow-600" }
  ];

  const principles = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality, using only the finest materials and employing expert craftsmen for every project."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge design trends and smart building technologies to create future-ready properties."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to environmentally responsible development with green building practices and energy-efficient designs."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every decision we make is centered around delivering exceptional value and satisfaction to our clients."
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Green Building Excellence Award",
      description: "Recognized for outstanding commitment to sustainable development practices."
    },
    {
      year: "2023",
      title: "Best Luxury Development",
      description: "Skyline Towers won the regional award for luxury residential excellence."
    },
    {
      year: "2022",
      title: "Innovation in Design",
      description: "Awarded for incorporating smart home technology across all residential projects."
    },
    {
      year: "2021",
      title: "Customer Satisfaction Leader",
      description: "Achieved the highest customer satisfaction rating in the metropolitan area."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Estate Division</h1>
            <p className="text-xl leading-relaxed opacity-90">
              For over 15 years, we've been crafting exceptional residential and commercial properties 
              that redefine luxury living and set new standards in real estate development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                To create extraordinary spaces that enhance lives and communities through innovative design, 
                superior craftsmanship, and unwavering attention to detail. We believe that exceptional 
                real estate goes beyond buildings – it's about creating environments where people thrive.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Every project we undertake is a testament to our commitment to excellence, sustainability, 
                and the belief that great architecture has the power to inspire and transform lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The foundational values that guide every decision and drive our pursuit of excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <principle.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Recent Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition and awards that validate our commitment to excellence in real estate development.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-card p-6 rounded-xl shadow-sm">
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="w-5 h-5 text-primary" />
                      <div className="text-2xl font-bold text-primary">{achievement.year}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary/20 rounded-full" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Experience Excellence</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to discover what sets our real estate developments apart? 
              Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/estate/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                View Our Projects
              </motion.a>
              <motion.a
                href="/estate/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-background text-background px-8 py-4 rounded-lg font-semibold hover:bg-background hover:text-foreground transition-all duration-300"
              >
                Get Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutEstate;