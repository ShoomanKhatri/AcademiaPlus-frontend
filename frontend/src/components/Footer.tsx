import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">AcademiaPlus</h2>
            <p className="text-gray-300">Enhancing academic management experiences.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/about">
              <span className="hover:text-gray-300 cursor-pointer">About Us</span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-gray-300 cursor-pointer">Contact</span>
            </Link>
            <Link href="/privacy">
              <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
