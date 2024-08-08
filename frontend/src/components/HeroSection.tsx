import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white pb-20 pt-48">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          Welcome to AcademiaPlus
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-300">
          Simplifying academic management for students, teachers, and administrators.
        </p>
        <Link href="/register">
          <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-green-600 text-white py-3 px-8 rounded-full text-lg shadow-lg transition-all transform hover:scale-105">
            Get Started
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
