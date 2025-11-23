import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Planning and Design Coordinator",
      department: "Capital Planning and Delivery – Public Works",
      company: "York Region",
      location: "Newmarket, Ontario",
      period: "March 2023 – Current",
      current: true,
      description: "Led multi-disciplinary teams and support delivery of $22 million annual Structural Renewal Program, ensuring successful completion of capital infrastructure projects including bridges, culverts, and retaining walls.",
      achievements: [
        "Achieved 100% annual budget adherence on $22M program",
        "Led procurement of RFPs, RFQs, RFTs, and RFPQs for consultant and contractor selection",
        "Coordinated with MECP, DFO, TRCA, LSRCA, Transport Canada, and CNR for permits",
        "Managed full project lifecycle from budgeting to construction support",
        "Conducted structural design and analysis for culverts, bridges, and retaining walls",
        "Streamlined delivery processes and proactively resolved project risks"
      ]
    },
    {
      title: "Transportation EIT (Roadway Group)",
      department: "Transportation Planning",
      company: "EXP Services LTD",
      location: "Brampton, Ontario",
      period: "May 2021 – March 2023",
      current: false,
      description: "Contributed to major infrastructure projects including Bombardier Aircraft Facility ($400M), Hurontario LRT ($4.6B), and Eglinton Crosstown West Extension ($729M).",
      achievements: [
        "Developed EA and 30% roadway designs for Bombardier with multi-agency coordination",
        "Produced staging and design packages for 6 km HuLRT transit corridor",
        "Performed vehicle swept-path analysis using Autoturn (WB-20, LCVs)",
        "Prepared cost estimates for EA, 30%, 100%, IFT and IFC stages",
        "Generated full submission packages including documentation and drawing sets",
        "Coordinated design input from Region of Peel and City of Mississauga"
      ]
    },
    {
      title: "Engineering Associate",
      department: "Provincial Highway Management",
      company: "Ministry of Transportation Ontario (MTO)",
      location: "North Bay, Ontario",
      period: "Sep 2019 – May 2020",
      current: false,
      description: "Created preliminary assessment reports and conducted fieldwork for highway expansion and rehabilitation projects valued $2M-$169M across Northern Ontario.",
      achievements: [
        "Created Preliminary Assessment Report for HWY 69 Expansion ($169M)",
        "Worked on rehabilitation projects for Highway 11, 537, and 17",
        "Conducted field reviews to collect MTO assets and existing conditions",
        "Prepared reports used as scope and cost baseline for detailed design",
        "Performed traffic impact studies and turning movement counts",
        "Reviewed consultant reports including tender packages and technical reports"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#D2D2C8]/20 to-[#D2D2C8]/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#69532C]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#7C3E2E] font-semibold text-sm tracking-wider uppercase mb-4 block">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212A31] mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-[#69532C] mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#69532C] via-[#7C3E2E] to-[#D2D2C8]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-[calc(50%-3rem)] bg-white rounded-3xl p-8 shadow-xl border-2 border-[#D2D2C8] hover:border-[#69532C] transition-all duration-300">
                  {/* Current Badge */}
                  {exp.current && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Current Position
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#212A31] mb-2">{exp.title}</h3>
                    <div className="text-[#7C3E2E] font-semibold mb-3">{exp.department}</div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#212A31]/70">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#212A31]/70">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#212A31]/70">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#212A31]/80 leading-relaxed mb-6 font-light">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <div className="font-semibold text-[#212A31] mb-3 text-sm">Key Achievements:</div>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#69532C] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[#212A31]/70 text-sm font-light">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-24 h-24 relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#69532C] to-[#7C3E2E] rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-[#69532C] rounded-full animate-ping opacity-20" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-[#D2D2C8]/50 to-white rounded-3xl p-8 md:p-12 border-2 border-[#D2D2C8]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#7C3E2E] mb-8 text-center">Leadership Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white backdrop-blur border-2 border-[#69532C] rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-[#7C3E2E] rounded-full animate-pulse" />
                <span className="text-[#7C3E2E] text-sm font-semibold">Current</span>
              </div>
              <div className="text-[#7C3E2E] text-xl font-bold mb-2">Committee Chair</div>
              <div className="text-[#69532C] font-light mb-1">Young Professionals Committee</div>
              <div className="text-[#69532C]/80 text-sm">Municipal Engineers Association (MEA)</div>
              <div className="text-[#69532C]/80 text-sm mt-2">August 2024 – Present</div>
            </div>
            <div className="bg-white backdrop-blur border-2 border-[#69532C] rounded-2xl p-6 shadow-lg">
              <div className="text-[#7C3E2E] text-sm font-semibold mb-3">Past Leadership</div>
              <div className="text-[#7C3E2E] text-xl font-bold mb-2">Chairman</div>
              <div className="text-[#69532C] font-light mb-1">Transportation Social Committee</div>
              <div className="text-[#69532C]/80 text-sm">EXP Services</div>
              <div className="text-[#69532C]/80 text-sm mt-2">May 2021 – March 2023</div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#D2D2C8]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#212A31] mb-8 text-center">Education</h3>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-br from-[#69532C] to-[#7C3E2E] rounded-2xl p-1 mb-6">
              <div className="bg-white rounded-xl px-8 py-6">
                <div className="text-[#7C3E2E] font-bold text-3xl mb-2">B.Eng. (Hons)</div>
                <div className="text-[#212A31] font-bold text-xl mb-2">Civil Engineering</div>
                <div className="text-[#212A31]/70 font-light">Specialization: Structural & Transportation Engineering</div>
              </div>
            </div>
            <div className="text-[#212A31]/80 text-lg font-light">
              Lassonde School of Engineering, York University
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}