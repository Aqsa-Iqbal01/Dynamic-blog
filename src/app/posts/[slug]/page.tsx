
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CommentSection from '@/app/components/CommentSection'

const posts = {
  'generative-ai': {
    title: 'How Generative AI is Going to Affect Businesses',
    image: '/generative ai.webp',
    content: `
     Generative AI is a branch of artificial intelligence that can create new content or data from scratch, such as images, text, music, code, and more. This technology has many potential applications and benefits for businesses, such as enhancing creativity, improving productivity, reducing costs, and generating insights. However, generative AI also poses some challenges and risks, such as ethical, legal, and social implications, quality and reliability issues, and security and privacy concerns. In this blog post, we will explore some of the ways that generative AI is going to affect businesses in the near future, and how businesses can prepare for and leverage this emerging technology.
      <br /><br />
      Generative AI is one of the most exciting and innovative fields of artificial intelligence, as it can produce new and original content or data from scratch, without relying on existing data or templates. Generative AI can use various techniques, such as deep learning, natural language processing, computer vision, and generative adversarial networks, to create realistic and diverse outputs, such as images, text, music, code, and more.

      <br /><br />
     Enhancing creativity: Generative AI can help businesses generate new ideas, designs, products, services, and solutions, by providing inspiration, suggestions, variations, and alternatives. For example, generative AI can help fashion designers create new styles and patterns, graphic designers create new logos and icons, marketers create new slogans and headlines, and engineers create new prototypes and models.

      <br /><br />
     Improving productivity: Generative AI can help businesses automate and optimize various tasks and processes, by reducing human effort, time, and resources. For example, generative AI can help journalists write news articles and summaries, teachers create quizzes and exercises, lawyers draft contracts and documents, and programmers write code and tests.
    `,
  },
  'TypeScript': {
    title: 'TypeScript',
    image: '/type.webp',
    content: `
      TypeScript is rapidly becoming one of the most popular programming languages for web developers. Its growth can be attributed to several key advantages that make it a valuable tool for modern development.
      <br /><br />
      Stronger Code with Static Typing:

TypeScript adds static typing to JavaScript, helping catch errors early and improving code quality. This makes your code more predictable and easier to maintain.


      <br /><br />
     Improved Developer Experience:

With features like autocompletion and inline documentation, TypeScript makes coding faster and easier. Developers get real-time feedback, reducing the chances of bugs.
<br/><br/>
 Works Well with JavaScript:

TypeScript is a superset of JavaScript, so it can easily be added to existing JavaScript projects without a complete rewrite. This gradual adoption makes it a smooth transition for many teams.
<br/> <br/>
 Strong Community and Ecosystem:

With increasing support from major frameworks like React, Angular, and Vue, TypeScript’s ecosystem is growing fast. Developers can easily find resources, tools, and community support.
    `,
  },
  'JavaScript': {
    title: 'JavaScript',
    image: '/java.png',
    content: `
      Women are increasingly taking the lead in **artificial intelligence (AI)**, contributing groundbreaking research and solutions to some of the world’s most complex challenges. From AI ethics to machine learning and robotics, women are shaping the future of AI and creating technologies that will impact society for years to come.
      <br /><br />
      Historically, women have been underrepresented in AI, but that’s rapidly changing. Leading AI researchers like **Fei-Fei Li**, who pioneered the **ImageNet** project, and **Timnit Gebru**, co-founder of **Black in AI**, have been at the forefront of advancing the field. These women have demonstrated that diversity is crucial for the development of ethical, inclusive, and innovative AI systems.
      <br /><br />
      Women in AI are addressing some of the most pressing challenges, including **algorithmic bias**, **AI accountability**, and the **ethical implications** of machine learning. Their contributions are ensuring that AI technologies are developed in ways that benefit everyone, not just a select few. By bringing a diverse set of experiences and viewpoints to the table, they’re laying the foundation for more fair and equitable AI systems.
      <br /><br />
      As the field continues to evolve, it’s essential to support and promote more female voices in AI to inspire the next generation of women to enter this critical field and lead the way toward a more inclusive and innovative future.
    `,
  },
  'Python': {
    title: 'Python',
    image: '/python.jpg',
    content: `
      Python has become one of the most widely used programming languages in the world today. Known for its simplicity, versatility, and ease of use, Python is a great choice for both beginners and experienced developers. In this blog, we’ll explore why Python is a top choice for many.
      <br /><br />
     Python's syntax is simple and clean, making it an ideal language for beginners. You don't have to worry about complex rules or syntax, which makes learning Python easier and faster compared to many other programming languages.
      <br /><br />
     Wide Range of Applications:

Python is incredibly versatile and can be used for various purposes, from web development to data analysis, automation, artificial intelligence, and more. It’s used by professionals across different fields, including software development, finance, and science.
      <br /><br />
       Large Community and Rich Libraries:

Python has a vast and active community of developers who continuously contribute to a rich collection of libraries and frameworks. These libraries, such as Django for web development and Pandas for data analysis, help developers perform complex tasks with ease.
    `,
  },
  'Next.js': {
    title: 'Next.js',
    image: '/nextjs.webp',
    content: `
      Next.js is rapidly becoming one of the most popular frameworks for web development, and for good reason. If you're already familiar with React, you'll love Next.js. It takes React to the next level by providing features that make web development faster, more efficient, and more powerful.
      <br /><br />
       SEO-Friendly:

Next.js enables server-side rendering (SSR) out of the box. This means that your web pages are rendered on the server and then sent to the browser, which is great for SEO (Search Engine Optimization). Unlike single-page applications (SPAs) built with React alone, which can struggle with SEO, Next.js ensures your site ranks better in search engines.
      <br /><br />
      Fast Performance:

Next.js optimizes your website's performance by offering automatic code splitting. This means that only the necessary code for the page is loaded, reducing the initial load time and making your website faster. Faster websites lead to better user experiences and improved search engine rankings.
      <br /><br />
      Simpler Routing:

Next.js simplifies routing compared to React. In React, you have to set up routing manually using React Router. In Next.js, the routing is based on the file structure, meaning that each page corresponds to a file in the pages directory. This convention-over-configuration approach makes it easier to organize and navigate your application.
    `,
  },
  'Tailwind': {
    title: 'Tailwind Css',
    image: '/tailwind.webp',
    content: `
     Tailwind CSS is revolutionizing the way developers approach styling. Instead of writing long CSS classes or using pre-designed components, Tailwind gives you full control over your design with utility-first classes.
      <br /><br />
     Customization:

Even though Tailwind uses utility classes, it’s highly customizable. You can configure the colors, spacing, typography, and more to match your project's specific design requirements. This makes it flexible and adaptable to your needs.
      <br /><br />
      Great Community and Ecosystem:

Tailwind has a large and active community. There are also many tools, plugins, and templates available to speed up your development process. Whether you’re working on a small project or a large-scale web application, Tailwind’s ecosystem can support you.
      <br /><br />
       Rapid Prototyping:

Tailwind makes it easy to rapidly prototype and design websites. Since the classes are already pre-defined, you don’t need to spend time writing custom styles. You can quickly put together a layout and adjust it as needed, all without writing CSS from scratch.
    `,
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) return <div>Post not found</div>;

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">{post.title}</h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto sm:h-96 object-cover rounded-xl shadow-lg mb-8"
        />
        <div className="prose lg:prose-xl text-gray-800 font-serif" dangerouslySetInnerHTML={{ __html: post.content }} />
        <CommentSection />
      </div>
      <Footer />
    </div>
  );
}