const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 absolute bottom-0 w-full mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around ml-20">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-gray-400 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              blandit mauris a tortor vehicula, sed faucibus est hendrerit.
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Email: info@example.com</li>
              <li className="mb-2">Phone: 123-456-7890</li>
              <li className="mb-2">Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-200">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
