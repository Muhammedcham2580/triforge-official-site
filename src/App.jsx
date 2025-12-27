import { useState, useEffect } from "react";
import sefynaLogo from "/src/assets/images/sefyna-logo.png";



export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div id="home"
      className={`w-full min-h-screen overflow-x-hidden font-sans transition-colors duration-300 ${
        darkMode ? "bg-[#0b0f1a] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur border-b ${
          darkMode
            ? "bg-[#0b0f1a]/90 border-white/10"
            : "bg-white/90 border-black/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide text-cyan-400">
            TRIFORGE
          </h1>

          <div className="hidden md:flex items-center gap-6 ml-auto">
            <ul className="flex gap-8 text-sm">
            {["Home", "Services", "Projects", "About"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    relative cursor-pointer transition
                    hover:text-cyan-400

                    after:absolute after:left-1/2 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-cyan-400
                    after:-translate-x-1/2

                    after:transition-[width] after:duration-300
                    hover:after:w-full
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>



            {/* CONTACT US BUTTON */}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition"
            >
              Contact Us
            </a>
          </div>



          <div className="flex items-center gap-4">
            {/* THEME TOGGLE
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded border text-sm border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              {darkMode ? "🌙" : "🌑"}
            </button> */}

            {/* HAMBURGER / CLOSE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl p-2 transition-transform"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6">
            <ul className="flex flex-col items-center text-center gap-6 text-lg">
              {["Home", "Services", "Projects", "About"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}

              {/* Contact Button */}
              <li className="mb-8 mt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}

      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              We Build{" "}
              <span className="text-cyan-400">Modern</span> <br />
              Digital Products
            </h2>

            <p className="mt-6 opacity-70 max-w-md">
              TRIFORGE is a tech-driven company focused on software, web apps,
              and scalable digital solutions.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition">
                Get Started
              </button>
              {/* <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition">
                View Work
              </button> */}
            </div>

          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5"
              alt="hero"
              className="relative rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <div className="h-[2px] w-[40%] max-w-xs bg-cyan-600 mx-auto mt-5 opacity-60" />

      {/* ABOUT US */}
      <section id="about" className="py-20 px-6">

        <div className="mb-16 text-center mx-auto md:col-span-3">
          <p className="text-l uppercase tracking-widest text-cyan-400 mb-2">
            About Us
          </p>

          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            Forging Ideas into <span className="text-cyan-400">Digital Experiences</span>
          </h3>
        </div>

        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">OUR STORY</h3>
            <p className="opacity-80 leading-relaxed">
              TRIFORGE started with a simple belief: great digital experiences shouldn’t be complicated.
              What began as a passion for design and development grew into a mission to build clean,
              scalable, and meaningful digital products.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">OUR APPROACH</h3>
            <p className="opacity-80 leading-relaxed">
              We fuse creativity, technology, and strategy to create solutions that are clear,
              performant, and built for long-term impact.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">OUR GOAL</h3>
            <p className="opacity-80 leading-relaxed">
              Our goal is to help ideas become reality through thoughtful design and modern development.
              We don’t just build products — we forge digital experiences that last.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services"
        className={`py-20 px-6 ${
          darkMode ? "bg-[#0f1525]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h3 className=" text-3xl font-bold mb-12 text-center">
            What We Do
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Web Development",
              "Software Systems",
              "UI / UX Design",
              "Web Applications",
              "Automation",
              "Tech Consulting",
            ].map((service) => (
              <div
                key={service}
                className={`p-6 rounded-xl border transition ${
                  darkMode
                    ? "bg-[#0b0f1a] border-white/10 hover:border-cyan-400"
                    : "bg-gray-100 border-black/10 hover:border-cyan-500"
                }`}
              >
                <h4 className="text-lg font-semibold mb-3">
                  {service}
                </h4>
                <p className="text-sm opacity-70">
                  Clean, scalable, high-performance solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-l max-w-2xl mx-auto mb-2 text-cyan-400">
            RECENT PROJECTS
          </p>
          <h3 className="text-3xl font-bold mb-8 text-center max-w-3xl mx-auto">
            A glimpse into some of the <span className="text-cyan-400">digital solutions we’ve crafted with care and precision.</span>
          </h3>


          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Enterprise Web Platform",
                desc: "Built for performance and scale.",
                image: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
              },
              {
                title: "E-Commerce Website",
                desc: "Modern online store with secure payments.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
              },
              {
                title: "Sefyna Mart POS",
                desc: "Data-driven admin dashboard.",
                image: "/src/assets/images/sefyna.png",
              },
              {
                title: "Mobile Banking App",
                desc: "Secure and intuitive financial app.",
                image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
              },
              {
                title: "Espace Motors Website",
                desc: "Decent Auto Dealership.",
                image: "/src/assets/images/espace.png",
              },
              {
                title: "Portfolio Website",
                desc: "Personal branding and showcase platform.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
              },
            ].map((project, i) => (
              <div
                key={i}
                className={`group rounded-[15px] overflow-hidden border transition ${
                  darkMode
                    ? "border-white/10 hover:border-cyan-400"
                    : "border-black/10 hover:border-cyan-500"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="group-hover:scale-105 transition duration-500 rounded-t-[15px]"
                />
                <div className="p-6">
                  <h4 className="font-semibold text-lg">
                    {project.title}
                  </h4>
                  <p className="text-sm opacity-70 mt-2">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY / PARTNERS */}
      <section
        className={`py-20 px-6 ${
          darkMode ? "bg-[#0f1525]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Label */}
          <p className="text-cyan-400 tracking-widest text-l mb-3">
            TRUSTED BY
          </p>

          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Brands That <span className="text-cyan-400">Trust Us</span>
          </h3>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-l sm:text-base opacity-70 mb-14">
            We’ve partnered with ambitious brands across different industries,
            helping them build reliable, scalable, and impactful digital solutions.
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            <div className="h-24 flex items-center justify-center">
              <img
                src={sefynaLogo}
                alt="Sefyna Mart"
                className="max-h-20 max-w-[150px]"
              />
            </div>
            <div className="h-24 flex items-center justify-center">
              <img
                src={sefynaLogo}
                alt="Sefyna Mart"
                className="max-h-20 max-w-[150px]"
              />
            </div>
            <div className="h-24 flex items-center justify-center">
              <img
                src={sefynaLogo}
                alt="Sefyna Mart"
                className="max-h-20 max-w-[150px]"
              />
            </div>
            <div className="h-24 flex items-center justify-center">
              <img
                src={sefynaLogo}
                alt="Sefyna Mart"
                className="max-h-20 max-w-[150px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className={`py-20 px-6 ${
          darkMode ? "bg-[#0f1525]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-400 tracking-widest text-l mb-2">
            TESTIMONIALS
          </p>

          <h3 className="text-3xl sm:text-4xl font-bold mb-14">
            Trusted by <span className="text-cyan-400">Clients</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Serra Bah",
                role: "Founder & CEO of Sefyna Mart",
                text: "Their professionalism and attention to detail exceeded our expectations. Everything was delivered perfectly and on time.",
                image: "/src/assets/images/serra-bah.png",
              },
              {
                name: "Khadija",
                role: "Founder Khadija's MiniMarket",
                text: "Outstanding communication and execution. I would absolutely recommend TRIFORGE for serious, scalable projects.",
                image: "https://i.pravatar.cc/100?img=5",
              },
            ].map((t, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border text-left transition ${
                  darkMode
                    ? "bg-[#0b0f1a] border-white/10 hover:border-cyan-400"
                    : "bg-gray-100 border-black/10 hover:border-cyan-500"
                }`}
              >
                {/* Stars */}
                <div className="flex items-center gap-2 text-yellow-400 mb-4">
                  ★★★★★ <span className="text-sm text-white">5.0</span>
                </div>

                <h4 className="text-xl font-semibold mb-3">
                  A Wonderful Experience!
                </h4>

                <p className="opacity-70 leading-relaxed mb-6">
                  {t.text}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-cyan-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            <span className="w-8 h-2 bg-cyan-400 rounded-full"></span>
            <span className="w-2 h-2 bg-white/30 rounded-full"></span>
            <span className="w-2 h-2 bg-white/30 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <TeamSection darkMode={darkMode} />

      {/* CTA */}
      <section
        id="contact"
        className={`py-24 px-6 ${
          darkMode ? "bg-[#0b0f1a] text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <p className="text-cyan-400 text-l tracking-widest mb-3">
              CONTACT US
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Let’s Build <span className="text-cyan-400">Something Powerful</span>
            </h3>

            <p className="opacity-70 max-w-md leading-relaxed mb-5">
              Have an idea, a project, or a challenge you’d like help with? Give a call or 
              fill out the form and our team will get back to you shortly.
            </p>

            <p className="max-w-md leading-relaxed">
              <a href="tel:+2207721900">Tel: <span className="text-cyan-400">+220 772 1900</span></a><br/>
              <a href="tel:+2205886147">Tel: <span className="text-cyan-400">+220 588 6147</span></a><br/>
              <a href="tel:+2203777194">Tel: <span className="text-cyan-400">+220 377 7194</span></a><br/>
              <a href="tel:+2205296007">Tel: <span className="text-cyan-400">+220 529 6007</span></a><br/>
            </p>
          </div>

          {/* CONTACT FORM */}
          <form
            className={`p-8 rounded-[20px] border ${
              darkMode
                ? "bg-[#0f1525] border-white/10"
                : "bg-white border-black/10"
            }`}
          >
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-[15px] outline-none transition ${
                  darkMode
                    ? "bg-[#0b0f1a] text-white placeholder-gray-400 border border-white/10 focus:border-cyan-400"
                    : "bg-gray-100 border border-black/10 focus:border-cyan-500"
                }`}
              />

              <input
                type="email"
                placeholder="Email Address"
                className={`w-full px-4 py-3 rounded-[15px] outline-none transition ${
                  darkMode
                    ? "bg-[#0b0f1a] text-white placeholder-gray-400 border border-white/10 focus:border-cyan-400"
                    : "bg-gray-100 border border-black/10 focus:border-cyan-500"
                }`}
              />

              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className={`w-full px-4 py-3 rounded-[15px] outline-none resize-none transition ${
                  darkMode
                    ? "bg-[#0b0f1a] text-white placeholder-gray-400 border border-white/10 focus:border-cyan-400"
                    : "bg-gray-100 border border-black/10 focus:border-cyan-500"
                }`}
              />

              <button
                type="submit"
                className="mt-2 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-[15px] hover:bg-cyan-300 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`py-10 px-6 border-t ${
          darkMode ? "border-white/10 text-white" : "border-black/10 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 items-center gap-6">

          {/* LEFT */}
          <h1 className="text-2xl font-bold tracking-wide text-cyan-400 md:justify-self-start">
            TRIFORGE
          </h1>

          {/* CENTER */}
          <p className="text-sm opacity-50 text-center">
            © {new Date().getFullYear()} TRIFORGE. All rights reserved.
          </p>

          {/* RIGHT */}
          <ul className="flex gap-6 text-sm md:justify-self-end">
            {["About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </footer>

    </div>
  );
}

// Team Section Component
function TeamSection({ darkMode }) {
  const teamMembers = [
    {
      name: "Victor Aremo",
      title: "Chief Executive Officer",
      image: "/src/assets/images/profilephoto.jpg",
    },
    {
      name: "Muhammed Cham",
      title: "Chief Technology Officer",
      image: "/src/assets/images/profilephoto.jpg",
    },
    {
      name: "Gibril Suwareh",
      title: "IT Project Manager",
      image: "/src/assets/images/profilephoto.jpg",
    },
    {
      name: "Modou Lamin Ceesay",
      title: "Lead Developer",
      image: "/src/assets/images/profilephoto.jpg",
    },
  ];

  return (
    <section className={`py-20 px-6 ${darkMode ? "bg-[#0f1525]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 tracking-widest text-l mb-2">
            OUR TEAM
          </p>
          <h3 className="text-3xl font-bold mb-8 text-center max-w-3xl mx-auto">
            Meet Our <span className="text-cyan-400">Dedicated Team focused on Quality, Innovation, and Results.</span>
          </h3>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <TeamCard
              key={idx}
              member={member}
              darkMode={darkMode}
              isActive
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Card Component
function TeamCard({ member, isActive, darkMode }) {
  const [showSocial, setShowSocial] = useState(false);

  const socialIcons = [
    { name: 'facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
    { name: 'twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
    { name: 'linkedin', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
    { name: 'instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z' }
  ];

  return (
    <div className={`rounded-[15px] overflow-hidden border transition-all duration-300 sm:rounded-[15px]
 ${
      darkMode 
        ? "bg-[#0b0f1a] border-white/10 hover:border-cyan-400" 
        : "bg-gray-100 border-black/10 hover:border-cyan-500"
    } ${isActive ? 'scale-105 shadow-2xl' : 'shadow-lg'}`}>
      {/* Image Container */}
      <div 
        className="relative h-80 sm:h-72 lg:h-80 overflow-hidden bg-gray-200"
        onMouseEnter={() => setShowSocial(true)}
        onMouseLeave={() => setShowSocial(false)}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        {/* Social Icons Overlay */}
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-opacity duration-300 ${
          showSocial ? 'opacity-100' : 'opacity-0'
        }`}>
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              href="#"
              className={`p-2.5 rounded-full backdrop-blur-sm transition-all duration-200 ${
                darkMode 
                  ? "bg-[#0b0f1a]/80 hover:bg-cyan-400 text-white hover:text-black border border-white/20" 
                  : "bg-white/80 hover:bg-cyan-500 text-gray-700 hover:text-white"
              }`}
              onClick={(e) => e.preventDefault()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h4 className="text-xl sm:text-2xl font-bold mb-2">{member.name}</h4>
        <p className={`text-sm sm:text-base ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{member.title}</p>
        <div className="mt-4 h-1 w-16 bg-cyan-400 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}
