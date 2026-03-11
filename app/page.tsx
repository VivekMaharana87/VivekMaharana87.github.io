"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Download, Code2, Database, ShieldCheck, Mail, Linkedin, Github, Trophy, Award } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import data from "@/data/resume.json"; // (Assuming the JSON generated above is placed in data/resume.json)

// Paste the structured JSON object from Step 1 directly here for a single-file drop-in
// if you don't want to create a separate resume.json file.
const resumeData = {
  basics: {
    name: "Vivek Vardhan Maharana",
    title: "Integration Developer & Business Analyst",
    phone: "+91-8249379094",
    email: "vivekvardhan2000@gmail.com",
    linkedin: "vivek-vardhan-maharana",
    github: "VivekMaharana87",
    summary: "Results-driven technology professional with 2+ years of experience in Boomi AtomSphere and UKG WFM integrations, specializing in API development, Groovy scripting, automated testing, and performance-driven delivery. Proven ability to design, build, and deploy scalable interfaces while collaborating with cross-functional and global teams.",
    location: "India"
  },
  experience: [
    {
      company: "Deloitte Consulting",
      role: "Business Analyst",
      dates: "Jan 2024 – Feb 2026",
      location: "Hyderabad, India",
      bullets: [
        "Received Applause Award for leading bi-weekly client solution playbacks.",
        "Delivered end-to-end UKG WFC to UKG Dimensions migration for a 200K+ employee client, developing Boomi integrations and cutting high-volume integration execution time from 8 hours to 48 minutes.",
        "Supported hypercare activities, validated high-volume employee transactions (150K+ records), and resolved integration and data allocation issues using Groovy scripts.",
        "Built comprehensive Boomi integrations including Person Import, Business Structure Import, Accrual Profile import, Prorated Accruals iPack.",
        "Led cross-functional coordination and stakeholder meetings across multiple WFM and HCM implementations for Fortune 500 healthcare, banking, retail, and agriculture clients."
      ]
    },
    {
      company: "Siemens",
      role: "Frontend Development Intern",
      dates: "May 2022 – July 2022",
      location: "Bengaluru, India",
      bullets: [
        "Implemented data source from Grafana Labs API in Python for data extraction from PLC to store and monitor data.",
        "Used Matplotlib and Pandas to sub-sample the data points and visualize the data to display in a single dashboard"
      ]
    },
    {
      company: "Samsung - Reseach & Development",
      role: "Research Intern",
      dates: "June 2021 – Jan 2022",
      location: "Bengaluru, India",
      bullets: [
        "Designed models that allowed for multiple iterations to refine denoising process and improve the overall image quality.",
        "Reduced grain in the optimized enhanced images by implementing various ML techniques"
      ]
    }
  ],
  projects: [
    {
      title: "Image Pre-processing and Noise reduction using MIRNet and Autoencoders",
      context: "Research Paper",
      bullets: [
        "Led a team of 4 incorporating contextual information through attention mechanisms on TM-DIED dataset that combines iterative residual learning and multi-scale feature extraction.",
        "Proposed a CNN + Dual Attention model for the 4-class problem allowing for developing efficient architectures that balances computational complexity and real-time performance, allowing for noise reduction."
      ]
    },
    {
      title: "Survival Prediction in Titanic Ship",
      context: "Kaggle",
      bullets: [
        "Developed prediction algorithm with an accuracy score of 93.02 % (gain of +7.44 % than base paper) in Kaggle dataset.",
        "Received a Silver badge globally for the Efficient proposed approach implementing Logistic Regression using Python."
      ]
    }
  ],
  skills: [
    { category: "Languages", items: ["Python", "Java", "C++", "JavaScript", "Groovy", "Linux", "SQL", "HTML/CSS"] },
    { category: "Developer Tools", items: ["Postman", "Kleopatra", "WinSCP", "VS Code", "Eclipse", "Excel", "Visio", "MySQL"] },
    { category: "Web Technologies/Frameworks", items: ["GitHub", "REST APIs", "Boomi Atomsphere", "XML", "JSON", "EDI"] },
    { category: "Connectors Experience", items: ["Database", "HTTP Client", "SOAP Web Services", "SFTP", "MFT"] },
    { category: "HCM/WFM Platforms", items: ["UKG Pro WFM", "API Management", "XML/JSON Transformation", "Error Handling"] },
    { category: "Automation & AI", items: ["Smartsheet", "Jira", "Conversational AI Agents", "Process Automation", "Workflow Optimization"] }
  ],
  certifications: [
    { title: "Certified Boomi Integration Developer", issuer: "UKG" },
    { title: "Professional Integration Developer", issuer: "Boomi" },
    { title: "Associate Integration Developer", issuer: "Boomi" }
  ],
  achievements: [
    { title: "HacktoberFest by Digital Ocean", description: "Contributed to open-source projects with 6 PRs accepted out of 18 submissions, collaborating with global peers and identifying reported GitHub issues and bugs." },
    { title: "Microsoft Azure Developer League", description: "Earned 240+ badges and 60 medals by completing all 7 Azure Developer League challenges, gaining hands-on experience in identity, governance, privacy, and compliance." },
    { title: "Applause Award", description: "Received Applause Award for leading bi-weekly client solution playbacks at Deloitte Consulting." },
    { title: "Kaggle Silver Badge", description: "Received a Silver badge globally for the Efficient proposed approach implementing Logistic Regression using Python." }
  ],
  education: [
    { degree: "Bachelors of Technology (Computer Science and IT)", institution: "I.T.E.R | SOA", score: "CGPA : 8.4/10", year: "2023" },
    { degree: "12th Science", institution: "DAV Public School, Chandrasekharpur", score: "90 % aggregate", year: "2019" },
    { degree: "10th CBSE", institution: "DAV Public School, Chandrasekharpur", score: "93.1 % aggregate", year: "2017" }
  ]
};

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-6"
        >
          VVM
        </motion.div>
        <div className="w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [expandedExp, setExpandedExp] = useState<number | null>(0);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <AnimatedBackground />

      {!showSplash && (
        <main className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-24 space-y-32">

          {/* 1. HERO SECTION */}
          <section id="hero" className="min-h-[80vh] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-blue-400 font-medium tracking-widest text-sm uppercase mb-3">
                {resumeData.basics.location} • Available for opportunities
              </h2>
              <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6">
                {resumeData.basics.name}
              </h1>
              <h3 className="text-2xl md:text-4xl font-medium text-zinc-300 mb-8 max-w-3xl">
                {resumeData.basics.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl mb-10">
                {resumeData.basics.summary}
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#experience" className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
                  View Experience <ChevronDown className="w-4 h-4" />
                </a>
                <a href="#" className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full font-semibold text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </div>

              <div className="flex gap-6 mt-12 text-zinc-400">
                <a href={`mailto:${resumeData.basics.email}`} className="hover:text-blue-400 transition-colors"><Mail className="w-6 h-6" /></a>
                <a href={`https://linkedin.com/in/${resumeData.basics.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href={`https://github.com/${resumeData.basics.github}`} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><Github className="w-6 h-6" /></a>
              </div>
            </motion.div>
          </section>

          {/* TOP IMPACT STRIP */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: "Execution Time Cut", value: "8h to 48m", sub: "UKG Migration" },
              { label: "Accuracy Score", value: "93.02%", sub: "Kaggle Titanic" },
              { label: "Azure Medals", value: "60+", sub: "Microsoft Developer League" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <h4 className="text-zinc-400 text-sm font-medium mb-1">{stat.label}</h4>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-blue-400 uppercase tracking-wide">{stat.sub}</div>
              </div>
            ))}
          </motion.section>

          {/* 2. EXPERIENCE SECTION */}
          <section id="experience" className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4">
              <Code2 className="w-8 h-8 text-blue-500" /> Experience
            </h2>
            <div className="flex flex-col gap-6">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedExp(expandedExp === index ? null : index)}
                    className="w-full p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="text-blue-400 font-medium">{exp.company} <span className="text-zinc-500">• {exp.location}</span></div>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-400">
                      <span className="font-mono text-sm px-3 py-1 rounded-full bg-white/5">{exp.dates}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedExp === index ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedExp === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 md:px-8 pb-8"
                      >
                        <ul className="space-y-4 text-zinc-300 mt-4 border-l border-white/10 pl-6">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="relative leading-relaxed">
                              <span className="absolute -left-[31px] top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 3. PROJECTS SECTION */}
          <section id="projects" className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4">
              <Database className="w-8 h-8 text-indigo-500" /> Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resumeData.projects.map((proj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">{proj.context}</div>
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{proj.title}</h3>
                  <ul className="space-y-3 text-zinc-400 text-sm">
                    {proj.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-indigo-500 mt-1">▹</span> {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 4. ACHIEVEMENTS & CERTIFICATIONS */}
          <section id="achievements" className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4">
              <Trophy className="w-8 h-8 text-yellow-500" /> Accomplishments
            </h2>

            <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x">
              {resumeData.achievements.map((ach, i) => (
                <div key={i} className="snap-start min-w-[300px] md:min-w-[400px] p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Award className="w-6 h-6 text-yellow-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{ach.title}</h3>
                  <p className="text-sm text-zinc-400">{ach.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {resumeData.certifications.map((cert, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-500" />
                  <div>
                    <h4 className="text-white font-medium text-sm">{cert.title}</h4>
                    <span className="text-zinc-500 text-xs">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. SKILLS & EDUCATION */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
              <div className="space-y-6">
                {resumeData.skills.map((skillGroup, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, j) => (
                        <span key={j} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-sm text-zinc-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Education</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-zinc-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                      <div className="text-blue-400 font-mono text-xs mb-1">{edu.year}</div>
                      <h4 className="text-white font-medium mb-1">{edu.degree}</h4>
                      <div className="text-zinc-400 text-sm">{edu.institution}</div>
                      <div className="text-zinc-500 text-xs mt-2 font-mono">{edu.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}