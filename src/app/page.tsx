import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  const posts = [
    {
      slug: 'generative-ai',
      title: 'Generative AI',
      description: 'How Generative AI is Going to Affect Businesses.',
      image:'/generative ai.webp',
    },
    {
      slug: 'TypeScript',
      title: 'TypeScript',
      description: 'Why TypeScript is Adapting Fast.',
      image: '/type.webp',
    },
    {
      slug: 'JavaScript',
      title: 'JavaScript',
      description: 'What is JavaScript.',
      image: '/java.png',
    },
    {
      slug: 'Python',
      title: 'Python',
      description: 'Why Python is an Excellent Choice.',
      image: '/python.jpg',
    },
    {
      slug: 'Next.js',
      title: 'Next.js',
      description: 'Why Next.js is the Future of Web Development.',
      image: '/nextjs.webp',
    },
    {
      slug: 'Tailwind',
      title: 'Tailwind Css',
      description: 'what is tailwind css.',
      image: '/tailwind.webp',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/background-image.jpg')" }}
      >
        <div className="bg-white bg-opacity-60 text-gray-900 py-12 px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-6">
            ADENBLOG
          </h1>
          <p className="text-xl font-sans mb-6 leading-relaxed max-w-2xl mx-auto">
           Discover the world of blogging. Connect with readers and take your writting to the next level with our cutting-edge blogging platform.
          </p>
          
          <button className="bg-blue-950 px-6 py-3 rounded-md text-white font-bold hover:bg-blue-900 transition">
           Explore blogs
          </button>
        </div>
      </div>

      {/*Blogs Section */}
    
      <div
        id="posts"
        className="py-16 px-6"
        style={{
          backgroundImage: "url('/bg-pink.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">Latest Blogs</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-slate-100 bg-opacity-90">
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-500 transition mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 font-medium">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}