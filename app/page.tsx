'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Database, Zap, BookOpen, Youtube, Server, Globe } from 'lucide-react';

export default function Home() {
  const skills = [
    { 
      category: 'AI & ML', 
      items: ['LLMs', 'RAG Pipelines', 'Multi-Agent Systems', 'Azure OpenAI', 'Pinecone', 'LangChain', 'LlamaIndex', 'AutoGPT', 'Vector Databases', 'Prompt Engineering', 'Agentic AI', 'Anthropic Claude', 'Open Source LLMs', 'Semantic Kernel', 'Deep Learning'] 
    },
    { 
      category: 'Data Platforms', 
      items: ['Snowflake', 'Databricks', 'Azure Data Factory', 'Azure Synapse', 'Python', 'SQL', 'ETL', 'Data Lakehouse', 'Spark', 'Delta Lake', 'Azure Purview', 'ADLS', 'Microsoft Fabric'] 
    },
    { 
      category: 'Cloud & DevOps', 
      items: ['Azure Cloud', 'GitHub Actions', 'CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'MLOps', 'Monitoring'] 
    },
  ];

  const projects = [
    {
      id: 'rag-system',
      title: 'Enterprise AI RAG System',
      description: 'Built a Retrieval-Augmented Generation pipeline for enterprise knowledge management using LLMs and Pinecone vector database.',
      tech: ['Python', 'LangChain', 'Pinecone', 'Azure OpenAI'],
      details: 'Implemented a multi-stage RAG pipeline with hybrid search, re-ranking, and citation generation for a Fortune 500 financial client.'
    },
    {
      id: 'multi-agent',
      title: 'Multi-Agent AI Orchestration',
      description: 'Designed and deployed a multi-agent system for automated business process automation with 8+ specialized agents.',
      tech: ['Python', 'Agent Framework', 'Snowflake', 'Azure'],
      details: 'Built an autonomous agent cluster that reduced manual processing time by 70% in insurance claim verification workflows.'
    },
    {
      id: 'healthcare-analytics',
      title: 'Healthcare AI Analytics Platform',
      description: 'Developed a healthcare analytics platform processing 100K+ records daily with predictive insights and real-time dashboards.',
      tech: ['Azure AI', 'Python', 'Snowflake', 'Data Science'],
      details: 'Created predictive models for patient readmission risks using distributed training on Azure Machine Learning Service.'
    },
  ];

  return (
    <div className=\"min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30\">
      {/* Navigation */}
      <nav className=\"sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50\">
        <div className=\"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center\">
          <h1 className=\"text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent underline decoration-cyan-500/30\">Rajesh Kumar</h1>
          <div className=\"hidden md:flex gap-8 text-sm font-medium\">
            <Link href=\"#about\" className=\"hover:text-cyan-400 transition-colors\">About</Link>
            <Link href=\"#projects\" className=\"hover:text-cyan-400 transition-colors\">Projects</Link>
            <Link href=\"#skills\" className=\"hover:text-cyan-400 transition-colors\">Skills</Link>
            <Link href=\"https://hashnode.com/@rz111\" target=\"_blank\" className=\"hover:text-cyan-400 transition-colors flex items-center gap-1\">
              Blogs <ExternalLink size={14} />
            </Link>
            <Link href=\"https://www.youtube.com/@Code2Career_AI\" target=\"_blank\" className=\"hover:text-red-500 transition-colors flex items-center gap-1\">
              YouTube <Youtube size={14} />
            </Link>
            <Link href=\"#contact\" className=\"hover:text-cyan-400 transition-colors\">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className=\"relative py-32 px-6 overflow-hidden\">
        <div className=\"absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full -z-10\"></div>
        <div className=\"max-w-5xl mx-auto text-center\">
          <div className=\"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-10 shadow-lg shadow-cyan-500/5\">
            <Zap size={14} className=\"animate-pulse\" /> Enterprise AI Architect & YouTuber
          </div>
          <h2 className=\"text-6xl md:text-8xl font-black mb-10 tracking-tight leading-[1.1]\">
            Architecting <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Intelligence</span>
          </h2>
          <p className=\"text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium\">
            Senior AI Architect with 8+ years of experience. Building production-grade RAG pipelines, multi-agent systems, and enterprise data lakehouses.
          </p>
          
          <div className=\"flex flex-wrap gap-6 justify-center\">
            <Link href=\"#projects\" className=\"px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl transition-all shadow-xl shadow-cyan-500/20 flex items-center gap-2 transform hover:-translate-y-1 active:scale-95\">
              Explore My Work <ArrowRight size={20} />
            </Link>
            <Link href=\"https://www.youtube.com/@Code2Career_AI\" target=\"_blank\" className=\"px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl transition-all shadow-xl shadow-red-600/20 flex items-center gap-2 transform hover:-translate-y-1 active:scale-95\">
              Code2Career_AI <Youtube size={20} />
            </Link>
            <Link href=\"https://hashnode.com/@rz111\" target=\"_blank\" className=\"px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-xl transition-all border border-slate-700 flex items-center gap-2 transform hover:-translate-y-1 active:scale-95\">
              Technical Blog <BookOpen size={20} />
            </Link>
          </div>

          <div className=\"mt-16 flex gap-8 justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all\">
            <Link href=\"https://github.com/RzLetsCode\" target=\"_blank\" className=\"hover:text-cyan-400 transition-all transform hover:scale-110\">
              <Github size={32} />
            </Link>
            <Link href=\"https://linkedin.com/in/rajesh-kumar-04405962/\" target=\"_blank\" className=\"hover:text-cyan-400 transition-all transform hover:scale-110\">
              <Linkedin size={32} />
            </Link>
            <Link href=\"mailto:rajeshrajrz111@gmail.com\" className=\"hover:text-cyan-400 transition-all transform hover:scale-110\">
              <Mail size={32} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Impact */}
      <section className=\"py-12 px-6\">
        <div className=\"max-w-6xl mx-auto\">
          <div className=\"grid grid-cols-2 md:grid-cols-4 gap-8\">
            {[
              { label: 'Years Experience', val: '8+', color: 'text-cyan-400' },
              { label: 'Production AI', val: '50+', color: 'text-emerald-400' },
              { label: 'Daily Records', val: '1M+', color: 'text-blue-400' },
              { label: 'Uptime SLA', val: '99.9%', color: 'text-purple-400' }
            ].map((stat, i) => (
              <div key={i} className=\"p-8 bg-slate-900/40 border border-slate-800/50 rounded-3xl text-center group hover:border-cyan-500/30 transition-all transform hover:-translate-y-2\">
                <div className={`text-4xl font-black mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.val}</div>
                <div className=\"text-xs text-slate-500 uppercase font-black tracking-[0.2em]\">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id=\"projects\" className=\"py-32 px-6 bg-slate-950\">
        <div className=\"max-w-6xl mx-auto\">
          <div className=\"flex flex-col md:flex-row justify-between items-end mb-20 gap-8\">
            <div>
              <h2 className=\"text-5xl font-black mb-4\">Featured Projects</h2>
              <p className=\"text-slate-400 text-lg max-w-xl\">Deep dive into production-grade AI implementations and enterprise architectures.</p>
            </div>
            <Link href=\"https://github.com/RzLetsCode\" target=\"_blank\" className=\"group flex items-center gap-2 text-cyan-400 font-bold border-b border-cyan-400/0 hover:border-cyan-400 transition-all\">
              See All Repo <ArrowRight size={18} className=\"group-hover:translate-x-1 transition-transform\" />
            </Link>
          </div>
          
          <div className=\"grid md:grid-cols-3 gap-10\">
            {projects.map((project, i) => (
              <div key={i} className=\"group p-8 bg-slate-900/50 border border-slate-800 rounded-[2rem] hover:border-cyan-500/50 transition-all flex flex-col h-full relative overflow-hidden\">
                <div className=\"absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 blur-[80px] -z-10 group-hover:bg-cyan-500/10 transition-all\"></div>
                
                <div className=\"w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform\">
                  {i === 0 ? <Zap /> : i === 1 ? <Server /> : <Globe />}
                </div>
                <h3 className=\"text-2xl font-black mb-4 text-slate-100 group-hover:text-cyan-400 transition-colors leading-tight\">{project.title}</h3>
                <p className=\"text-slate-400 mb-8 flex-grow leading-relaxed font-medium\">{project.description}</p>
                
                <div className=\"mb-8 p-5 bg-slate-950/50 rounded-2xl border border-slate-800/50\">
                  <p className=\"text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3\">Key Impact</p>
                  <p className=\"text-sm text-slate-300 font-medium italic border-l-4 border-cyan-500/40 pl-4 py-1\">
                    {project.details}
                  </p>
                </div>
                <div className=\"flex flex-wrap gap-2 mb-10\">
                  {project.tech.map((t, j) => (
                    <span key={j} className=\"text-[10px] font-black px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg border border-slate-700/50 uppercase tracking-wider\">{t}</span>
                  ))}
                </div>
                
                <Link 
                  href={`/projects/${project.id}`} 
                  className=\"mt-auto inline-flex items-center gap-2 text-cyan-400 font-black hover:text-cyan-300 transition-all group/btn pt-4 border-t border-slate-800\"
                >
                  Learn Project Details <ArrowRight size={18} className=\"group-hover/btn:translate-x-2 transition-transform\" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id=\"skills\" className=\"py-32 px-6 bg-slate-950\">
        <div className=\"max-w-6xl mx-auto\">
          <div className=\"text-center mb-24\">
            <h2 className=\"text-5xl font-black mb-6\">Technical Arsenal</h2>
            <div className=\"w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full\"></div>
          </div>
          <div className=\"grid md:grid-cols-3 gap-16\">
            {skills.map((skillGroup, i) => (
              <div key={i} className=\"relative p-10 bg-slate-900/30 border border-slate-800 rounded-[2.5rem] hover:bg-slate-900/50 transition-all\">
                <h3 className=\"text-sm font-black mb-10 text-cyan-400 uppercase tracking-[0.3em] flex items-center gap-4\">
                  <div className=\"w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center\">
                    {i === 0 ? <Zap size={20} /> : i === 1 ? <Database size={20} /> : <Code size={20} />}
                  </div>
                  {skillGroup.category}
                </h3>
                <div className=\"flex flex-wrap gap-3\">
                  {skillGroup.items.map((skill, j) => (
                    <span key={j} className=\"px-5 py-2.5 bg-slate-800/40 border border-slate-700/50 rounded-xl text-sm font-bold hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-default text-slate-300\">
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
      <section id=\"contact\" className=\"py-20 px-6\">
        <div className=\"max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] border border-slate-800 p-12 text-center relative overflow-hidden\">
          <div className=\"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent\"></div>
          <div className=\"relative z-10\">
            <h2 className=\"text-3xl font-black mb-6 leading-tight\">Ready to build the <span className=\"text-cyan-400 underline decoration-cyan-500/20\">Next Generation</span> of AI?</h2>
            <p className=\"text-lg text-slate-400 mb-12 max-w-xl mx-auto font-medium leading-relaxed\">Let's discuss Enterprise AI Architecture, Databricks pipelines, or Azure Cloud scaling.</p>
            
            <div className=\"flex flex-wrap justify-center gap-6\">
              <Link href=\"mailto:rajeshrajrz111@gmail.com\" className=\"flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl transition-all shadow-xl shadow-cyan-500/10 font-black active:scale-95\">
                <Mail size={20} />
                <span>Email Me</span>
              </Link>
              <Link href=\"https://linkedin.com/in/rajesh-kumar-04405962/\" target=\"_blank\" className=\"flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all border border-slate-700 font-black active:scale-95\">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </Link>
              <Link href=\"https://www.youtube.com/@Code2Career_AI\" target=\"_blank\" className=\"flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl transition-all shadow-xl shadow-red-600/10 font-black active:scale-95\">
                <Youtube size={20} />
                <span>YouTube</span>
              </Link>
            </div>
            
            <div className=\"mt-16 pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-bold tracking-wider text-[10px]\">
              <p>© 2026 RAJESH KUMAR • ENTERPRISE AI ARCHITECT</p>
              <div className=\"flex gap-6\">
                <Link href=\"https://hashnode.com/@rz111\" target=\"_blank\" className=\"hover:text-cyan-400 transition-colors\">BLOGS</Link>
                <Link href=\"https://www.youtube.com/@Code2Career_AI\" target=\"_blank\" className=\"hover:text-red-500 transition-colors\">YOUTUBE</Link>
                <Link href=\"https://github.com/RzLetsCode\" target=\"_blank\" className=\"hover:text-cyan-400 transition-colors\">GITHUB</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
