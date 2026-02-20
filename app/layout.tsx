import Link from 'next/link';
import { Github, Youtube, BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6">
        
        {/* Social & Content Links */}
        <div className="flex items-center gap-6 text-slate-400">
          <a 
            href="https://youtube.com/@code2career_ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
          >
            <Youtube size={18} />
            <span>YouTube</span>
          </a>
          <a 
            href="https://code2careerai.hashnode.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
          >
            <BookOpen size={18} />
            <span>Articles</span>
          </a>
          <a 
            href="https://github.com/RzLetsCode" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Copyright & Tagline */}
        <div className="text-center">
          <p className="text-slate-500 text-sm tracking-wide">
            &copy; {currentYear} code2career_ai &bull; ----- Where boundaries break, breakthroughs happen......  
          </p>
        </div>

      </div>
    </footer>
  );
}
