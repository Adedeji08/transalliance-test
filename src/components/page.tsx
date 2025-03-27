import React from 'react';

const TransalliancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Transalliance Group.</div>
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Solutions', 'News & Insights', 'Contact Us'].map((item) => (
            <a key={item} href="#" className="hover:text-blue-300">{item}</a>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full font-medium">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-blue-300 mb-4">Simplified cross-border payments</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            We are the <br />
            <span className="text-blue-400">payments people</span>
          </h1>
          <p className="text-lg mb-8 leading-relaxed">
            Transalliance Group's cross-border payments solutions connect
            organisations and communities globally to the network they need
            to thrive. Together, we make money move.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-medium">
            Discover More
          </button>
        </div>
      </section>

      {/* Money Transfer Section */}
      <section className="bg-blue-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Send and Receive Money from all over with ease.
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['888', 'Cl M B', 'nuveli', 'MoneyGram', 'YRAKBANK'].map((logo) => (
              <div key={logo} className="text-2xl font-bold bg-blue-700 p-4 rounded-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-blue-300 mb-2">ABOUT US</p>
          <h2 className="text-4xl font-bold">Payment pathways, built for you</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              Transalliance Group. Money Out and Money In solutions give
              our customers the ability to complete cross-border, multi-
              currency transactions securely and at speed. And with a
              single provider for both payouts and pay-ins, say goodbye to
              the operational headaches of multi-supplier management.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { title: '90+ currencies served', value: '$12,524' },
                { title: 'SEPA Instant, SEPA & SWIFT', value: 'Danish FSA regulated' },
                { title: 'Customer portal for live transaction monitoring', value: 'Money Out' },
              ].map((item, index) => (
                <div key={index} className="bg-blue-800 p-4 rounded-lg">
                  <p className="text-blue-300 text-sm">{item.title}</p>
                  <p className="font-bold mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-800 h-80 rounded-xl"></div>
        </div>
      </section>

      {/* Human-Powered Network Section */}
      <section className="bg-blue-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The human-powered payments network
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Driven by a team of over 200 global payments experts with absolute dedication
                to solving our customers' most complex cross-border payments challenges.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-medium">
                Learn More
              </button>
            </div>
            <div className="flex justify-center">
              <div className="bg-blue-700 w-64 h-64 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold">200+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">The Transalliance Group. difference</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'We are your trusted partner',
              content: 'We are a dedicated and diligent team of payments specialists that\'s committed to helping you unlock opportunity, create value and make payments happen, together'
            },
            {
              title: 'We provide the network you need',
              content: 'We open access to a resilient global network spanning 90+ countries that\'s built to simplify complex challenges and move money at speed'
            },
            {
              title: 'We bring certainty through compliance',
              content: 'We were born with compliance at our heart. Licensed by the globally trusted Danish FSA, when we move money you can be confident that it gets to the right place with absolute accuracy.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-blue-800 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-blue-200">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors Section */}
      <section className="bg-blue-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Sectors we serve</h2>
          <p className="text-center max-w-3xl mx-auto mb-16">
            We simplify the complexities of cross-border payments in some of the world's most
            demanding sectors. Learn more about who we serve and how we add value below.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['iGaming', 'Financial Services', 'NGOs', 'Corporates'].map((sector) => (
              <div key={sector} className="bg-blue-700 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-4">{sector}</h3>
                <button className="text-blue-300 hover:text-blue-200">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto bg-blue-800 p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-8">Speak to Sales</h2>
          
          <form>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">Email</label>
                <input type="email" className="w-full bg-blue-700 border border-blue-600 rounded-lg px-4 py-3" />
              </div>
              <div>
                <label className="block mb-2">First Name</label>
                <input type="text" className="w-full bg-blue-700 border border-blue-600 rounded-lg px-4 py-3" />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input type="text" className="w-full bg-blue-700 border border-blue-600 rounded-lg px-4 py-3" />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea className="w-full bg-blue-700 border border-blue-600 rounded-lg px-4 py-3 h-full"></textarea>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <input type="checkbox" id="consent" className="mt-1 mr-2" />
              <label htmlFor="consent" className="text-sm">
                I agree to receiving payment news and trends from Inpay, including updates to our
                products and services. I am aware that I can withdraw this consent at any time by
                contacting Inpay or unsubscribing via email. I agree to Inpay processing my
                personal data in accordance with its Privacy Policy.
              </label>
            </div>
            
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-medium w-full">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Offices</h3>
              <p className="mb-2">Denmark:</p>
              <p className="text-blue-300 mb-4">Toldbodgade 55B<br />1253, Copenhagen</p>
              
              <p className="mb-2">United Kingdom:</p>
              <p className="text-blue-300">1Poultry<br />EC2R 8EJ, London</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Solutions</h3>
              <ul className="space-y-2">
                {['Money Out', 'Money In'].map((item) => (
                  <li key={item}><a href="#" className="text-blue-300 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Sectors</h3>
              <ul className="space-y-2">
                {['Financial Services', 'Corporates', 'NGOs', 'iGaming'].map((item) => (
                  <li key={item}><a href="#" className="text-blue-300 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Other</h3>
              <ul className="space-y-2">
                {['About Us', 'Compliance', 'Careers', 'News & Insights', 'Contact us'].map((item) => (
                  <li key={item}><a href="#" className="text-blue-300 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>info@inpay.com</p>
              <p>Phone: +45 88 610 600</p>
            </div>
            <div className="flex space-x-4">
              {['f', 'y', 'in', 't'].map((icon) => (
                <a key={icon} href="#" className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TransalliancePage;