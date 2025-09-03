import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Award, ArrowRight, Star, Calendar, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstateHome = () => {
  const featuredProjects = [
    {
      id: 1,
      name: "Skyline Towers",
      type: "Luxury Residential",
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Completed",
      units: "120 Units",
      rating: 4.9,
      price: "From $850K"
    },
    {
      id: 2,
      name: "Business Hub Plaza",
      type: "Commercial Complex",
      location: "Business Central",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Under Construction",
      units: "50 Offices",
      rating: 4.8,
      price: "From $2.5M"
    },
    {
      id: 3,
      name: "Green Valley Homes",
      type: "Sustainable Housing",
      location: "Suburban Area",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Planning Phase",
      units: "200 Units",
      rating: 4.7,
      price: "From $650K"
    }
  ];

  const services = [
    {
      icon: Building2,
      title: "Luxury Developments",
      description: "Premium residential and commercial properties with world-class amenities and modern design."
    },
    {
      icon: Home,
      title: "Custom Homes",
      description: "Bespoke residential solutions tailored to your unique lifestyle and preferences."
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Comprehensive management services for all property types with 24/7 support."
    },
    {
      icon: Award,
      title: "Investment Consulting",
      description: "Expert guidance on real estate investments with proven track record of success."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      }}>
        <div className="absolute insets-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium opacity-90">Premium Real Estate</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                Building Tomorrow's Landmarks Today
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl leading-relaxed mb-8 opacity-90"
              >
                Discover exceptional residential and commercial properties crafted with precision, 
                innovation, and sustainable design principles. Where luxury meets functionality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/estate/projects"
                  className="inline-flex items-center space-x-2 bg-white text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/estate/contact"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-foreground transition-all duration-300"
                >
                  <span>Get Consultation</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our showcase of exceptional developments that define luxury living and commercial excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Under Construction' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <div className="flex items-center space-x-1 text-white text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{project.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{project.name}</h3>
                      <p className="text-primary font-medium">{project.type}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="font-bold text-foreground">{project.price}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                    <span>{project.units}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>2024</span>
                    </div>
                  </div>

                  <Link
                    to="/estate/projects"
                    className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-lg font-semibold text-center block hover:scale-105 transition-all duration-300"
                  >
                    View Details
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
              to="/estate/projects"
              className="inline-flex items-center space-x-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to meet your every need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you discover the perfect real estate solution 
              that matches your vision and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/estate/projects"
                  className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Browse Properties
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/estate/contact"
                  className="border-2 border-background text-background px-8 py-4 rounded-lg font-semibold hover:bg-background hover:text-foreground transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EstateHome;