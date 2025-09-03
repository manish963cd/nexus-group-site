import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, Users, Star, Filter, Search, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['All', 'Residential', 'Commercial', 'Mixed-Use', 'Completed', 'Ongoing', 'Planned'];

  const projects = [
    {
      id: 1,
      name: "Skyline Towers",
      type: "Residential",
      category: "Luxury Residential",
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Completed",
      completion: "2024",
      units: "120 Units",
      rating: 4.9,
      price: "From $850K",
      description: "Luxury high-rise towers with panoramic city views, premium amenities, and smart home technology.",
      features: ["Smart Home Tech", "Rooftop Garden", "Fitness Center", "Concierge Service"]
    },
    {
      id: 2,
      name: "Business Hub Plaza",
      type: "Commercial",
      category: "Office Complex",
      location: "Business Central",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Ongoing",
      completion: "2025",
      units: "50 Offices",
      rating: 4.8,
      price: "From $2.5M",
      description: "Modern commercial complex designed for growing businesses with flexible office spaces.",
      features: ["Flexible Spaces", "Conference Centers", "Parking Garage", "Restaurant District"]
    },
    {
      id: 3,
      name: "Green Valley Homes",
      type: "Residential",
      category: "Sustainable Housing",
      location: "Suburban Area",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Planned",
      completion: "2026",
      units: "200 Units",
      rating: 4.7,
      price: "From $650K",
      description: "Eco-friendly residential community with sustainable design and green building practices.",
      features: ["Solar Panels", "Rain Water Harvesting", "Community Garden", "EV Charging"]
    },
    {
      id: 4,
      name: "Marina Bay Residences",
      type: "Mixed-Use",
      category: "Waterfront Development",
      location: "Marina District",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Completed",
      completion: "2023",
      units: "180 Units",
      rating: 4.9,
      price: "From $1.2M",
      description: "Luxury waterfront living with retail spaces, marina access, and world-class amenities.",
      features: ["Marina Access", "Retail Spaces", "Spa & Wellness", "Private Beach"]
    },
    {
      id: 5,
      name: "Tech Park Offices",
      type: "Commercial",
      category: "Technology Campus",
      location: "Innovation District",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Ongoing",
      completion: "2025",
      units: "75 Offices",
      rating: 4.6,
      price: "From $3.2M",
      description: "State-of-the-art technology campus designed for innovation and collaboration.",
      features: ["High-Speed Internet", "Innovation Labs", "Food Courts", "Recreation Areas"]
    },
    {
      id: 6,
      name: "Heritage Square",
      type: "Mixed-Use",
      category: "Historic Renovation",
      location: "Historic Quarter",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Completed",
      completion: "2022",
      units: "95 Units",
      rating: 4.8,
      price: "From $750K",
      description: "Beautifully restored historic buildings transformed into modern living and working spaces.",
      features: ["Historic Preservation", "Modern Interiors", "Cultural Center", "Art Galleries"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'All' || 
                         project.type === selectedFilter || 
                         project.status === selectedFilter;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl leading-relaxed opacity-90">
              Explore our diverse portfolio of exceptional residential, commercial, and mixed-use developments 
              that set new standards in luxury and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedFilter === filter
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
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
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm p-3 rounded-lg text-white">
                      <div className="font-bold text-lg">{project.price}</div>
                      <div className="text-sm opacity-90">{project.category}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{project.name}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.units}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.completion}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or filters.</p>
            </motion.div>
          )}
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
            <h2 className="text-4xl font-bold mb-6">Interested in Our Projects?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get in touch with our expert team to learn more about investment opportunities 
              or to schedule a private viewing of any of our developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/estate/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Schedule Viewing
              </motion.a>
              <motion.a
                href="/estate/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-background text-background px-8 py-4 rounded-lg font-semibold hover:bg-background hover:text-foreground transition-all duration-300"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;