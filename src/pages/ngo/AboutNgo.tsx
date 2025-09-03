import { motion } from 'framer-motion';
import { Heart, Target, Users, Globe, Award, Lightbulb, Shield, HandHeart } from 'lucide-react';

const AboutNgo = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding, treating every individual with dignity and respect."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "We maintain complete transparency in our operations, ensuring donors know exactly how their contributions are used."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creative solutions and innovative approaches to address complex social challenges."
    },
    {
      icon: HandHeart,
      title: "Community-Centered",
      description: "We work with communities, not for them, ensuring local ownership and sustainable impact."
    }
  ];

  const milestones = [
    {
      year: "2012",
      title: "NGO Founded",
      description: "Started with a mission to create meaningful social impact in underserved communities.",
      impact: "First community program launched"
    },
    {
      year: "2015",
      title: "Education Initiative",
      description: "Launched our flagship education program, providing scholarships and learning resources.",
      impact: "500+ students supported"
    },
    {
      year: "2018",
      title: "Healthcare Expansion",
      description: "Introduced mobile health clinics and medical camps for remote communities.",
      impact: "2,000+ patients treated"
    },
    {
      year: "2020",
      title: "Emergency Response",
      description: "Pivoted to provide emergency relief during the global pandemic crisis.",
      impact: "10,000+ families assisted"
    },
    {
      year: "2022",
      title: "Housing Program",
      description: "Launched sustainable housing initiative for disaster-affected families.",
      impact: "300+ homes built"
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Implemented technology solutions to scale our impact and reach more communities.",
      impact: "5,000+ lives impacted"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Executive Director",
      bio: "15+ years in non-profit leadership, passionate about sustainable community development and social justice.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      specialization: "Strategic Leadership"
    },
    {
      name: "Dr. James Williams",
      role: "Healthcare Director",
      bio: "Medical doctor with expertise in community health programs and preventive care initiatives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      specialization: "Community Health"
    },
    {
      name: "Maria Santos",
      role: "Education Program Manager",
      bio: "Former educator turned program manager, dedicated to expanding educational opportunities for all children.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      specialization: "Educational Development"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-red-500 to-pink-400 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our NGO</h1>
            <p className="text-xl leading-relaxed opacity-90">
              For over a decade, we've been dedicated to creating sustainable positive change 
              in communities through comprehensive education, healthcare, and development programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-400 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower underserved communities through comprehensive programs in education, 
                healthcare, and sustainable development. We believe that every person deserves access 
                to basic necessities and opportunities for growth, regardless of their background or circumstances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A world where every community has the resources, knowledge, and support needed to thrive. 
                We envision sustainable, self-reliant communities where individuals can reach their full 
                potential and contribute to collective prosperity and well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              The principles that guide our work and define our approach to community development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-red-500 to-pink-400 rounded-2xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small local initiative to a comprehensive community development organization.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-card p-8 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-red-500 mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{milestone.description}</p>
                    <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                      <Award className="w-4 h-4" />
                      <span>{milestone.impact}</span>
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 bg-red-500 rounded-full relative z-10 shadow-lg">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500/20 rounded-full" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to creating sustainable positive change in communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-red-500 font-medium mb-3">{member.role}</div>
                  <div className="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {member.specialization}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-red-500 to-pink-400 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whether through donations, volunteering, or partnerships, there are many ways 
              to support our work and help us create lasting positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/ngo/donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Make a Donation
              </motion.a>
              <motion.a
                href="/ngo/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-all duration-300"
              >
                Volunteer With Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutNgo;