'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Database, Zap, BookOpen, MessageSquare } from 'lucide-react';

export default function Home() {
  const skills = [
    { category: 'AI & ML', items: ['LLMs', 'RAG Pipelines', 'Multi-Agent Systems', 'Azure OpenAI', 'Pinecone'] },
    { category: 'Data Platforms', items: ['Snowflake', 'Python', 'SQL', 'ETL', 'Data Engineering'] },
    { category: 'Cloud & DevOps', items: ['Azure Cloud', 'GitHub Actions', 'CI/CD', 'Docker', 'Kubernetes'] },
  ];

  const projects = [
    {
      title: 'Enterprise AI RAG System',
      description: 'Built a Retrieval-Augmented Generation pipeline for enterprise knowledge management using LLMs and Pinecone vector database. This system allows for semantic search and contextual answering over private document sets.',
      tech: ['Python', 'LangChain', 'Pinecone', 'Azure OpenAI'],
      link: '#',
      details: 'Implemented a multi-stage RAG pipeline with hybrid search, re-ranking, and citation generation for a Fortune 500 financial client.'
    },
    {
      title: 'Multi-Agent AI Orchestration',
      description: 'Designed and deployed a multi-agent system for automated business process automation with 8+ specialized agents. Orchestrates complex workflows across different LLM providers.',
      tech: ['Python', 'Agent Framework', 'Snowflake', 'Azure'],
      link: '#',
      details: 'Built an autonomous agent cluster that reduced manual processing time by 70% in insurance claim verification workflows.'
    },
    {
      title: 'Healthcare AI Analytics Platform',
      description: 'Developed a healthcare analytics platform processing 100K+ records daily with predictive insights and real-time dashboards for clinical decision support.',
      tech: ['Azure AI', 'Python', 'Snowflake', 'Data Science'],
      link: '#',
      details: 'Created predictive models for patient readmission risks using distributed training on Azure Machine Learning Service.'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Rajesh Kumar</h1>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
            <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
            <Link href="#skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
            <Link href="https://hashnode.com/@rz111" target="_blank" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              Blog <ExternalLink size={14} />
            </Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            <Zap size={14} /> Enterprise AI Architect
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Building <span className="text-cyan-400">Production-Grade</span> AI Systems
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Enterprise AI Architect with 8+ years of experience building scalable solutions for healthcare, finance, and enterprise domains.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#projects" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 transform hover:-translate-y-1">
              View Projects <ArrowRight size={18} />
            </Link>
            <Link href="https://hashnode.com/@rz111" target="_blank" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all border border-slate-700 flex items-center gap-2 transform hover:-translate-y-1">
              Read Blog <BookOpen size={18} />
            </Link>
          </div>

          <div className="mt-12 flex gap-6 justify-center">
            <Link href="https://github.com/RzLetsCode" target="_blank" className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
              <Github size={24} />
            </Link>
            <Link href="https://linkedin.com/in/rajesh-kumar-04405962/" target="_blank" className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:rajeshrajrz111@gmail.com" className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                About Me
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                I specialize in designing and implementing robust AI architectures that solve real-world business challenges. My focus is on the intersection of Data Engineering, LLM orchestration, and Cloud-Native scaling.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 h-fit"><Code size={20} /></div>
                  <div>
                    <h4 className="font-bold mb-1 text-slate-200">System Design</h4>
                    <p className="text-sm text-slate-400 italic">Designing scalable, resilient enterprise AI infrastructures.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 h-fit"><Database size={20} /></div>
                  <div>
                    <h4 className="font-bold mb-1 text-slate-200">Data Mastery</h4>
                    <p className="text-sm text-slate-400 italic">Expertise in Snowflake and modern data lakehouse patterns.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-slate-800/30 border border-slate-700/30 rounded-2xl text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Years Exp</div>
              </div>
              <div className="p-8 bg-slate-800/30 border border-slate-700/30 rounded-2xl text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Deployments</div>
              </div>
              <div className="p-8 bg-slate-800/30 border border-slate-700/30 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100k</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Daily Records</div>
              </div>
              <div className="p-8 bg-slate-800/30 border border-slate-700/30 rounded-2xl text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400">Deep dive into my recent technical implementations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl -z-10 group-hover:bg-cyan-500/20 transition-all"></div>
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Impact Details</p>
                  <p className="text-sm text-slate-300 italic mb-4 border-l-2 border-cyan-500/30 pl-3">
                    {project.details}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] font-bold px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">{t}</span>
                  ))}
                </div>
                
                <Link href={project.link} className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors group/btn">
                  Learn Project Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Technical Arsenal</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {skills.map((skillGroup, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold mb-6 text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  {i === 0 ? <Zap size={18} /> : i === 1 ? <Database size={18} /> : <Code size={18} />}
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, j) => (
                    <span key={j} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm font-medium hover:border-cyan-500/30 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-3xl border border-slate-700 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Let's Build the Future</h2>
            <p className="text-slate-400 mb-12 text-lg">Discussing AI architecture, RAG pipelines, or multi-agent systems?</p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="mailto:rajeshrajrz111@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all">
                <Mail className="text-cyan-400" />
                <span className="font-bold">Email Me</span>
              </Link>
              <Link href="https://linkedin.com/in/rajesh-kumar-04405962/" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all">
                <Linkedin className="text-cyan-400" />
                <span className="font-bold">LinkedIn</span>
              </Link>
            </div>
            
            <div className="mt-12 pt-12 border-t border-slate-700/50 text-slate-500 text-sm">
              <p>© 2026 Rajesh Kumar • Enterprise AI Architect • Pune, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
