import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
          style={{ backgroundImage: "url('/background-image.jpg')" }}
        ></div>
        
        <div className="relative z-10 max-w-6xl mx-auto p-8">
          {/* About Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">ADEN BLOG</h1>
            <p className="text-xl text-gray-900 leading-relaxed mx-auto max-w-3xl">
              Welcome to Aden blog your destination for insightful stories, tech innovations,
              and inspiring narratives. Our mission is to educate, empower, and celebrate the vibrant world of technology.
            </p>
          </section>

          <section className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <Image
                src="/aboutimg.jpg"
                alt="About Us"
                className="w-full h-96 object-cover rounded-lg shadow-xl transform shadow-slate-400 transition-all duration-300"
                width={700}
                height={700}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-900  mb-6">
               Here, I share my journey, ideas, and passion for coding and technology. Join me as I explore the world of web development, personal growth, and much more!
              </p>
              
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
              Join the Journey with ADEN BLOG
            </h2>
            <p className="text-lg text-black text-center mb-8 mx-auto max-w-2xl">
              We are excited to have you on this journey of discovery and innovation. Stay curious, keep exploring,
              and let&apos;s dive into the fascinating world of technology together. Your adventure starts here!
            </p>
            <div className="flex justify-center">
              
              <button className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-105">
                Explore Blog Posts
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}