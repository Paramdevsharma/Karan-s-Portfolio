import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#D2D2C8] via-white to-[#D2D2C8] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D2D2C8_1px,transparent_1px),linear-gradient(to_bottom,#D2D2C8_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#69532C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#7C3E2E]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#7C3E2E] font-semibold text-sm tracking-wider uppercase mb-4 block">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#7C3E2E] mb-6">Let's Connect</h2>
          <div className="w-20 h-1 bg-[#69532C] mx-auto mb-6" />
          <p className="text-xl text-[#69532C] max-w-3xl mx-auto font-light">
            Available for project consultations, collaborations, and professional inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-[#7C3E2E] mb-6">Contact Information</h3>
              <p className="text-[#69532C] font-light leading-relaxed mb-8">
                Feel free to reach out for project discussions, professional opportunities, 
                or collaboration on infrastructure and engineering initiatives.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a 
                href="mailto:karanvatas@outlook.com"
                className="group block bg-white backdrop-blur border-2 border-[#D2D2C8] hover:border-[#69532C] rounded-2xl p-6 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#69532C]/20 rounded-xl flex items-center justify-center group-hover:bg-[#69532C] transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#69532C] group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[#69532C]/70 text-sm mb-1">Email</div>
                    <div className="text-[#7C3E2E] font-semibold">karanvatas@outlook.com</div>
                  </div>
                </div>
              </a>

              <a 
                href="tel:+14162780096"
                className="group block bg-white backdrop-blur border-2 border-[#D2D2C8] hover:border-[#69532C] rounded-2xl p-6 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#69532C]/20 rounded-xl flex items-center justify-center group-hover:bg-[#69532C] transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#69532C] group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[#69532C]/70 text-sm mb-1">Phone</div>
                    <div className="text-[#7C3E2E] font-semibold whitespace-nowrap">416.278.0096</div>
                  </div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/karan2025"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white backdrop-blur border-2 border-[#D2D2C8] hover:border-[#69532C] rounded-2xl p-6 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#69532C]/20 rounded-xl flex items-center justify-center group-hover:bg-[#69532C] transition-colors duration-300 flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-[#69532C] group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-[#69532C]/70 text-sm mb-1">LinkedIn</div>
                    <div className="text-[#7C3E2E] font-semibold break-all">linkedin.com/in/karan2025</div>
                  </div>
                </div>
              </a>

              <div className="bg-white backdrop-blur border-2 border-[#D2D2C8] rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#69532C]/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#69532C]" />
                  </div>
                  <div>
                    <div className="text-[#69532C]/70 text-sm mb-1">Location</div>
                    <div className="text-[#7C3E2E] font-semibold">Greater Toronto Area, Ontario</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white backdrop-blur border-2 border-[#D2D2C8] rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#7C3E2E] mb-6">Professional Credentials</h3>
            
            <div className="space-y-6">
              <div className="bg-[#D2D2C8]/30 rounded-2xl p-6 border border-[#D2D2C8]">
                <div className="text-[#7C3E2E] font-semibold mb-2">P.Eng. License</div>
                <div className="text-[#7C3E2E] font-bold text-lg mb-1">Professional Engineer</div>
                <div className="text-[#69532C] text-sm">Ontario License #100571970</div>
                <div className="text-[#7C3E2E] text-sm mt-2">✓ Active Status</div>
              </div>

              <div className="bg-[#D2D2C8]/30 rounded-2xl p-6 border border-[#D2D2C8]">
                <div className="text-[#7C3E2E] font-semibold mb-2">PMP Certification</div>
                <div className="text-[#7C3E2E] font-bold text-lg mb-1">In Progress</div>
                <div className="text-[#69532C] text-sm">Project Management Professional</div>
                <div className="text-[#7C3E2E] text-sm mt-2">Exam: October 2025</div>
              </div>

              <div className="bg-[#D2D2C8]/30 rounded-2xl p-6 border border-[#D2D2C8]">
                <div className="text-[#7C3E2E] font-semibold mb-2">Education</div>
                <div className="text-[#7C3E2E] font-bold text-lg mb-1">B.Eng. (Hons)</div>
                <div className="text-[#69532C] text-sm">Civil Engineering - Structural & Transportation</div>
                <div className="text-[#69532C]/80 text-sm mt-2">York University</div>
              </div>

              <div className="bg-[#D2D2C8]/30 rounded-2xl p-6 border border-[#D2D2C8]">
                <div className="text-[#7C3E2E] font-semibold mb-2">Experience</div>
                <div className="text-[#7C3E2E] font-bold text-lg mb-1">5+ Years</div>
                <div className="text-[#69532C] text-sm">Infrastructure & Transit Projects</div>
                <div className="text-[#69532C]/80 text-sm mt-2">$22M - $4.6B Project Portfolio</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#D2D2C8]">
              <div className="text-[#69532C] text-sm mb-4">Areas of Expertise:</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Project Management",
                  "Civil Engineering",
                  "Transit Infrastructure",
                  "Highway Design",
                  "Stakeholder Engagement",
                  "Environmental Assessment"
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#D2D2C8]/50 border border-[#69532C] rounded-lg px-3 py-1.5 text-[#7C3E2E] text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="border-t border-[#D2D2C8] pt-8">
            <p className="text-[#69532C] text-sm">
              © {new Date().getFullYear()} Karan D. Sharma, P.Eng. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}