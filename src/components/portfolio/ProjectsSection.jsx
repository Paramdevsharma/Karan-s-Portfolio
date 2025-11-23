import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Train, Navigation, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Hurontario Light Rail Transit (HuLRT)",
      value: "$4.6 Billion",
      client: "Region of Peel & City of Mississauga",
      icon: Train,
      color: "from-[#69532C] to-[#7C3E2E]",
      description: "Produced staging and design packages for 6 km transit corridor; collaborated with Region of Peel and City of Mississauga.",
      highlights: [
        "6 km of roadway and track design",
        "Active transportation infrastructure",
        "Multi-Use Paths and cycle tracks",
        "Full submission packages including documentation",
        "MicroStation and Autoturn staging drawings"
      ]
    },
    {
      title: "Eglinton Crosstown West Extension",
      value: "$729 Million",
      client: "Metrolinx",
      icon: Train,
      color: "from-[#7C3E2E] to-[#69532C]",
      description: "Supported detailed design and interdisciplinary coordination for twin bored tunnel, headwalls, and traffic management plans.",
      highlights: [
        "9.2 km extension with 6 new stops",
        "Twin bored tunnels design",
        "Launch, maintenance, and extraction shafts",
        "Traffic management plans",
        "Utility relocations and permits"
      ]
    },
    {
      title: "Bombardier Aircraft Facility",
      value: "$400 Million",
      client: "EXP Services",
      icon: Building2,
      color: "from-[#69532C] to-[#7C3E2E]",
      description: "Delivered EA and 30% roadway designs with swept-path analysis, cost estimates, and stakeholder input across multiple agencies.",
      highlights: [
        "776,645 sq ft facility on 42 acres",
        "Flight test hangar and runway access",
        "Multiple roadway widening projects",
        "Vehicle swept-path analysis (WB-20, LCVs)",
        "Public consultation and EA process"
      ]
    },
    {
      title: "Highway 69 Expansion",
      value: "$169 Million",
      client: "Ministry of Transportation Ontario",
      icon: Navigation,
      color: "from-[#7C3E2E] to-[#69532C]",
      description: "Developed preliminary assessment report and field inventory for major highway expansion project in Northern Ontario.",
      highlights: [
        "Preliminary Assessment Report",
        "Field inventory and data collection",
        "Highway expansion design",
        "Northern Ontario region",
        "MTO standards compliance"
      ]
    },
    {
      title: "Structural Renewal Program",
      value: "$22 Million/year",
      client: "York Region",
      icon: Building2,
      color: "from-[#69532C] to-[#7C3E2E]",
      description: "Led design coordination, procurement, and permitting for annual capital works including culvert and bridge rehabilitation.",
      highlights: [
        "100% annual budget adherence",
        "Bridges, culverts, retaining walls",
        "Full lifecycle project management",
        "Regulatory coordination (MECP, TRCA, DFO)",
        "Multi-disciplinary team leadership"
      ]
    },
    {
      title: "O'Brien Avenue Roadway Project",
      value: "Municipal",
      client: "Town of Stouffville",
      icon: Navigation,
      color: "from-[#7C3E2E] to-[#69532C]",
      description: "Completed full Civil 3D design including storm, sanitary, and watermain networks; integrated feedback from multiple municipal agencies.",
      highlights: [
        "Comprehensive Civil 3D design",
        "3D alignments and profiles",
        "Pipe networks (Storm, SAN, Watermain)",
        "Sub-assemblies and corridors",
        "Multi-agency feedback integration"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D2D2C8_1px,transparent_1px),linear-gradient(to_bottom,#D2D2C8_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#7C3E2E] font-semibold text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212A31] mb-6">Major Project Highlights</h2>
          <div className="w-20 h-1 bg-[#69532C] mx-auto mb-6" />
          <p className="text-xl text-[#212A31]/70 max-w-3xl mx-auto font-light">
            Delivered complex infrastructure projects valued from $22M to $4.6B across transit, municipal, and highway sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl border-2 border-[#D2D2C8] hover:border-[#69532C] overflow-hidden h-full transition-all duration-300 hover:shadow-2xl">
                {/* Header */}
                <div className={`bg-gradient-to-r ${project.color} p-8 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-light opacity-90 mb-1">Project Value</div>
                      <div className="text-2xl font-bold">{project.value}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-light">{project.client}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-[#212A31]/80 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="font-semibold text-[#212A31] mb-3">Key Deliverables:</div>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#69532C] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#212A31]/70 text-sm font-light">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-br from-[#D2D2C8]/50 to-white rounded-3xl p-8 md:p-12 border-2 border-[#D2D2C8]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#7C3E2E] mb-8 text-center">Additional Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white backdrop-blur border-2 border-[#69532C] rounded-2xl p-6 shadow-lg">
              <div className="text-[#7C3E2E] text-sm font-semibold mb-2">Highway Rehabilitation</div>
              <div className="text-[#69532C] font-light text-sm">
                Highway 11, 17, 537 rehabilitation projects ($2M-$35M) including design reviews, quantity verification, and scope definition
              </div>
            </div>
            <div className="bg-white backdrop-blur border-2 border-[#69532C] rounded-2xl p-6 shadow-lg">
              <div className="text-[#7C3E2E] text-sm font-semibold mb-2">Traffic Studies</div>
              <div className="text-[#69532C] font-light text-sm">
                Comprehensive traffic impact studies, turning movement counts, signal timing optimization, and left turn warrants
              </div>
            </div>
            <div className="bg-white backdrop-blur border-2 border-[#69532C] rounded-2xl p-6 shadow-lg">
              <div className="text-[#7C3E2E] text-sm font-semibold mb-2">Environmental Assessments</div>
              <div className="text-[#69532C] font-light text-sm">
                Public consultation management, statutory notices, stakeholder coordination, and Public Information Centres
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}