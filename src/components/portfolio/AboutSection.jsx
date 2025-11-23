import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, TrendingUp, Users } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Target,
      title: "Project Lifecycle Management",
      description: "Full project oversight from scope development and EA to procurement, construction support, and close-out"
    },
    {
      icon: Users,
      title: "Stakeholder Engagement",
      description: "Expert in public consultation, regulatory coordination (MECP, TRCA, DFO), and multi-agency collaboration"
    },
    {
      icon: TrendingUp,
      title: "Budget Excellence",
      description: "Proven track record of 100% annual budget adherence on $22M+ programs"
    },
    {
      icon: Award,
      title: "PMP Certification",
      description: "Currently pursuing Project Management Professional certification (Exam: October 2025)"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#7C3E2E] font-semibold text-sm tracking-wider uppercase mb-4 block">About</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212A31] mb-6">Professional Summary</h2>
          <div className="w-20 h-1 bg-[#69532C] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-[#D2D2C8]/20 to-[#D2D2C8]/30 rounded-3xl p-8 md:p-12 border border-[#D2D2C8]/50 shadow-xl">
            <p className="text-lg md:text-xl text-[#212A31]/80 leading-relaxed font-light">
              Licensed Professional Engineer (P.Eng.) with <span className="font-semibold text-[#212A31]">5+ years of experience</span> delivering 
              complex, multi-disciplinary capital infrastructure projects across transit and municipal sectors. 
              Proven expertise managing full project lifecycle from scope development and environmental assessments 
              to procurement, consultant oversight, construction support, and project close-out.
            </p>
            <p className="text-lg md:text-xl text-[#212A31]/80 leading-relaxed font-light mt-6">
              Skilled in <span className="font-semibold text-[#212A31]">public consultation, stakeholder engagement, budgeting, 
              contract administration</span>, and regulatory coordination (MECP, TRCA, DFO). Currently pursuing 
              PMP certification to further strengthen leadership and project delivery credentials.
            </p>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-[#D2D2C8] hover:border-[#69532C] hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#69532C] to-[#7C3E2E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#212A31] mb-3">{item.title}</h3>
                <p className="text-[#212A31]/70 font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#D2D2C8]/50 to-white rounded-3xl p-8 md:p-12 text-center border-2 border-[#D2D2C8]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#7C3E2E] mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white backdrop-blur border-2 border-[#69532C] rounded-xl px-8 py-4 shadow-lg">
              <div className="text-[#7C3E2E] font-semibold text-sm mb-1">Active License</div>
              <div className="text-[#7C3E2E] text-lg font-bold">Professional Engineer (P.Eng.)</div>
              <div className="text-[#69532C] text-sm mt-1">Ontario – License #100571970</div>
            </div>
            <div className="bg-white backdrop-blur border-2 border-[#69532C] rounded-xl px-8 py-4 shadow-lg">
              <div className="text-[#7C3E2E] font-semibold text-sm mb-1">In Progress</div>
              <div className="text-[#7C3E2E] text-lg font-bold">Project Management Professional (PMP)</div>
              <div className="text-[#69532C] text-sm mt-1">Exam scheduled: October 2025</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}