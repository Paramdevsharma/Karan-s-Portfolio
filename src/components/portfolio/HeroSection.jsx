import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Award, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D2D2C8] via-white to-[#D2D2C8] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D2D2C8_1px,transparent_1px),linear-gradient(to_bottom,#D2D2C8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#69532C]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7C3E2E]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#69532C]/10 border border-[#69532C]/20 rounded-full mb-8"
          >
            <Award className="w-4 h-4 text-[#69532C]" />
            <span className="text-sm font-medium text-[#69532C]">Licensed Professional Engineer</span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#7C3E2E] mb-4 tracking-tight"
          >
            Karan D. Sharma
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-2xl md:text-3xl font-light text-[#69532C]">P.Eng.</span>
            <span className="text-[#69532C]/50">|</span>
            <span className="text-2xl md:text-3xl font-light text-[#7C3E2E]">Civil Engineer</span>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-[#7C3E2E]/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
          >
            5+ years of experience delivering complex, multi-disciplinary capital infrastructure projects 
            across transit and municipal sectors. Expert in project management, environmental assessments, 
            and stakeholder engagement with a proven track record on $22M-$4.6B projects.
          </motion.p>

          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a href="mailto:karanvatas@outlook.com">
              <Button className="bg-[#69532C] hover:bg-[#7C3E2E] text-white font-semibold px-6 py-6 text-base">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                Get in Touch
              </Button>
            </a>
            <a href="tel:+14162780096">
              <Button className="bg-[#69532C] hover:bg-[#7C3E2E] text-white font-semibold px-6 py-6 text-base">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">416.278.0096</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/karan2025" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#69532C] hover:bg-[#7C3E2E] text-white font-semibold px-6 py-6 text-base">
                <Linkedin className="w-5 h-5 mr-2 flex-shrink-0" />
                LinkedIn
              </Button>
            </a>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur border border-[#D2D2C8] rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#7C3E2E] mb-2">5+</div>
              <div className="text-[#69532C] font-light">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur border border-[#D2D2C8] rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#7C3E2E] mb-2">$4.6B</div>
              <div className="text-[#69532C] font-light">Largest Project Value</div>
            </div>
            <div className="bg-white/80 backdrop-blur border border-[#D2D2C8] rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-[#7C3E2E] mb-2">P.Eng.</div>
              <div className="text-[#69532C] font-light">Licensed Professional</div>
            </div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}