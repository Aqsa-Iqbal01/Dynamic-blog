import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h1 className="text-3xl font-bold">ADEN BLOG</h1>
            <p className="text-sm text-white mt-2">
            Your favorite blog for daily insights.❤️ 
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Aqsa-Iqbal01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="www.gmail.com"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <div className="text-white">
            <p className="text-sm">
              © {new Date().getFullYear()} ADENBLOG <br />
              
            </p>
          </div>
        </div>

        <div className="mt-6 border-t bg-gray-900 pt-4 text-center">
          <p className="text-sm text-white">
            Designed & Development by Aqsa Iqbal.
          </p>
        </div>
      </div>
    </footer>
  );
}