import Woman from "../assets/hero-section/image.png";
import newLogo from "../assets/images/logo.svg";


const HeroSection = () => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 items-end min-h-[60vh] relative mt-36">
        
        {/* Left Content */}
        <div className="bg-green-600 text-white p-20 font-dmSans">
          <h2 className="text-3xl font-bold text-gray-900">
            The human-powered <br /> payments network
          </h2>
          <p className="text-gray-800 mt-4">
            Driven by a team of over 200 global payments experts with absolute dedication to solving our customers’ most complex cross-border payments challenges.
          </p>
          <button className="mt-6 bg-yellow-400 text-black px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-500">
            Learn More <span className="flex justify-center items-center text-center bg-black/75 text-white rounded-[50%] w-5 h-5">&gt;</span>
          </button>
        </div>
  
        {/* Right Image Section */}
        <div className="relative bg-[#0F1D40] flex justify-center items-center md:rounded-tl-[5rem] py-28 px-20 object-cover">
          <img src={Woman} alt="Business Woman" className="h-72 w-72" />
  
          {/* Floating Logo */}
          <img src={newLogo} alt="Company Logo" className="absolute top-5 right-5 w-10" />
        </div>
        
      </section>
    );
  };
  
  export default HeroSection;
  