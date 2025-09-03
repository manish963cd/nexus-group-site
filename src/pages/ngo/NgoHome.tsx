import { motion } from 'framer-motion';
import { Heart, Users, GraduationCap, Stethoscope, Home, ArrowRight, HandHeart, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const NgoHome = () => {
  const programs = [
    {
      id: 1,
      title: "Education First",
      icon: GraduationCap,
      description: "Providing quality education and scholarships to underprivileged children in our communities.",
      beneficiaries: "1,200+ Students",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Healthcare Access",
      icon: Stethoscope,
      description: "Free medical camps, health screenings, and essential healthcare services for remote communities.",
      beneficiaries: "3,000+ Patients",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Shelter & Housing",
      icon: Home,
      description: "Building homes and providing shelter for families affected by natural disasters and poverty.",
      beneficiaries: "500+ Families",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const impact = [
    { icon: Users, label: "Lives Impacted", value: "5,000+", description: "Individuals directly benefited" },
    { icon: Globe, label: "Communities Served", value: "25+", description: "Villages and neighborhoods" },
    { icon: HandHeart, label: "Volunteers", value: "200+", description: "Active community volunteers" },
    { icon: Award, label: "Programs Running", value: "30+", description: "Active initiatives" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')"
      }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium opacity-90">Making a Difference</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                Transforming Lives Through Impact
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl leading-relaxed mb-8 opacity-90"
              >
                Join us in creating positive change through education, healthcare, and community 
                development programs that empower lives and build stronger, more resilient communities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/ngo/donate"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <Heart className="w-5 h-5" />
                  <span>Donate Now</span>
                </Link>
                <Link
                  to="/ngo/programs"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-foreground transition-all duration-300"
                >
                  <span>Our Programs</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every number represents a life touched, a family helped, and a community strengthened.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impact.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-pink-400 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Programs */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Key Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to address the most pressing needs in our communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center`}>
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{program.description}</p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-medium text-primary">{program.beneficiaries}</div>
                    <div className="text-sm text-muted-foreground">Active Program</div>
                  </div>

                  <Link
                    to="/ngo/programs"
                    className="w-full bg-gradient-to-r from-red-500 to-pink-400 text-white py-3 rounded-lg font-semibold text-center block hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/ngo/programs"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-400 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="section-padding bg-gradient-to-r from-red-500 to-pink-400 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Every Donation Makes a Difference</h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Your support enables us to reach more communities, help more families, and create 
              lasting positive change. Together, we can build a better world for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/ngo/donate"
                  className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Make a Donation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/ngo/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 transition-all duration-300"
                >
                  Volunteer With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Testimonial"
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="text-2xl font-medium text-foreground leading-relaxed mb-6">
              "The education program changed my daughter's life completely. She now has access to quality 
              education and dreams of becoming a doctor. We are forever grateful for this opportunity."
            </blockquote>
            <div className="text-muted-foreground">
              <div className="font-medium">Maria Rodriguez</div>
              <div className="text-sm">Parent, Education First Program</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NgoHome;