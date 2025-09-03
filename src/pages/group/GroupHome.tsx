import { motion } from 'framer-motion';
import HeroCarousel from '../../components/HeroCarousel';
import CardSection from '../../components/CardSection';
import { Users, Award, Globe, TrendingUp, Shield, Lightbulb } from 'lucide-react';

const GroupHome = () => {
  const stats = [
    { icon: Users, label: "Employees", value: "500+", color: "text-blue-600" },
    { icon: Award, label: "Awards Won", value: "25+", color: "text-green-600" },
    { icon: Globe, label: "Years of Excellence", value: "15+", color: "text-purple-600" },
    { icon: TrendingUp, label: "Projects Completed", value: "100+", color: "text-red-600" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our dealings."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge solutions and creative thinking to stay ahead of industry trends."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in giving back and creating positive impact in the communities we serve."
    }
  ];

  return (
    <div>
      <HeroCarousel />
      
      <CardSection />

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
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Over the years, we've built a legacy of excellence and positive impact across all our ventures.
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
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-hover flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you're looking for premium real estate solutions or want to support our community initiatives, 
              we're here to make a difference together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/estate/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Discuss Real Estate
              </motion.a>
              <motion.a
                href="/ngo/donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-background text-background px-8 py-4 rounded-lg font-semibold hover:bg-background hover:text-foreground transition-all duration-300"
              >
                Support Our Cause
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GroupHome;