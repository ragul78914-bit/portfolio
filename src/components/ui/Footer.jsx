export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white inline-block mb-2">
            Ragul<span className="text-gradient">S</span>
          </a>
          <p className="text-sm text-slate-400">
            Building digital products, brands, and experience.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="https://github.com/ragul78914-bit" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ragul-s-8a3930305?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:ragul78914@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/5 text-center text-sm text-slate-500">
        <p>&copy; {currentYear} Ragul S. All rights reserved.</p>
      </div>
    </footer>
  );
}
