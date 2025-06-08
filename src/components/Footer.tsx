
const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-blue-400">Risk Pro Technology</h3>
            <p className="text-slate-400 mt-1">Making AI accountable, secure, and context-smart</p>
          </div>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; 2024 Risk Pro Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
