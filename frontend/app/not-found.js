import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { Home } from 'react-feather';
const Custom404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="text-center p-8 rounded-lg bg-white shadow-md relative">
      <h1 className="text-6xl font-bold text-gray-800">
        <div className="absolute top-0 left-0 w-full h-full "style={{ marginLeft: '60px', marginTop: '15px'}}>
          <Image
            src="/enterprise-icon.png" // Update with the correct path
            alt="Enterprise Icon"
            width={100} // Adjust width as needed
            height={80} // Adjust height as needed
          />
        </div>
        404</h1>
        <p className="text-2xl text-gray-700 mb-8">
          Oops! This page could not be found.</p>
        <Link href="/">
          <button className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white
           rounded-md text-lg hover:bg-blue-600 transition duration-300 ease-in-out mt-4">
            <Home className="mr-2" />
            <span>Go Back Home</span>
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Custom404;
