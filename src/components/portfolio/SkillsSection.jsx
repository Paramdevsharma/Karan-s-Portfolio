import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, FileText, Users } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Software",
      skills: [
        { name: "Civil 3D", level: 95, years: "3+ years" },
        { name: "AutoCAD", level: 95, years: "9+ years" },
        { name: "MicroStation", level: 85, years: "2 years" },
        { name: "AutoTurn", level: 85, years: "2+ years" },
        { name: "PTV Vistro", level: 85, years: "2+ years" },
        { name: "SAP 2000", level: 80, years: "2+ years" },
        { name: "Microsoft Project", level: 85, years: "Proficient" }
      ]
    },
    {
      icon: Briefcase,
      title: "Project Management",
      skills: [
        { name: "Procurement Leadership", level: 95 },
        { name: "Budget Tracking & Control", level: 95 },
        { name: "Contract Administration", level: 90 },
        { name: "Schedule Management", level: 90 },
        { name: "Risk Management", level: 85 },
        { name: "Consultant Oversight", level: 90 }
      ]
    },
    {
      icon: FileText,
      title: "Engineering Expertise",
      skills: [
        { name: "Roadway Design", level: 95 },
        { name: "Structural Design & Analysis", level: 90 },
        { name: "Hydraulic Engineering", level: 85 },
        { name: "Traffic Impact Studies", level: 85 },
        { name: "Site Inspections", level: 90 },
        { name: "Cost Estimation", level: 90 }
      ]
    },
    {
      icon: Users,
      title: "Regulatory & Stakeholder",
      skills: [
        { name: "Environmental Assessments", level: 90 },
        { name: "Public Consultation", level: 90 },
        { name: "Regulatory Coordination", level: 90 },
        { name: "Multi-Agency Collaboration", level: 95 },
        { name: "Stakeholder Engagement", level: 95 },
        { name: "Report Writing", level: 90 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#D2D2C8]/20 to-[#D2D2C8]/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#69532C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7C3E2E]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#7C3E2E] font-semibold text-sm tracking-wider uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212A31] mb-6">Technical & Professional Skills</h2>
          <div className="w-20 h-1 bg-[#69532C] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-[#D2D2C8]"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#69532C] to-[#7C3E2E] rounded-xl flex items-center justify-center">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#212A31]">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#212A31] font-medium">{skill.name}</span>
                      {skill.years && (
                        <span className="text-xs text-[#212A31]/60 bg-[#D2D2C8]/30 px-2 py-1 rounded-full">
                          {skill.years}
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-[#D2D2C8]/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full bg-gradient-to-r from-[#69532C] to-[#7C3E2E] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#D2D2C8]/50 to-white rounded-3xl p-8 md:p-12 border-2 border-[#D2D2C8]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#7C3E2E] mb-8 text-center">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Public Safety",
              "Accessibility & Inclusion",
              "Budget Management",
              "Quality Assurance",
              "Construction Support",
              "Permit Acquisition",
              "Data Analysis",
              "Technical Reporting",
              "Team Leadership",
              "Problem Solving",
              "Time Management",
              "Interdisciplinary Coordination"
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white backdrop-blur border-2 border-[#69532C] rounded-xl px-5 py-3 hover:bg-[#D2D2C8]/30 transition-colors duration-300 shadow-md"
                >
                <span className="text-[#7C3E2E] font-medium">{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}