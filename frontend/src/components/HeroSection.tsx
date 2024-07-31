import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to AcademiaPlus</h1>
        <p className="text-lg md:text-xl mb-6">
          Simplifying academic management for students, teachers, and administrators.
        </p>
        <Link href="/register">
          <div className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-lg">Get Started</div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
