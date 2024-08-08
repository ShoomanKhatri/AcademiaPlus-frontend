import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white pb-20 pt-48">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
          Welcome to AcademiaPlus
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-300">
          Simplifying academic management for students, teachers, and administrators.
        </p>
        <Link href="/register">
          <div className="inline-block bg-gradient-to-tl from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-400 text-white py-3 px-8 rounded-full text-lg shadow-md shadow-purple-300 hover:shadow-xl
          hover:shadow-purple-300 transition-all transform hover:scale-105">
            Get Started
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
