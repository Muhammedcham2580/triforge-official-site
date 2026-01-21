import { useState, useEffect } from "react";
import sefynaLogo from "/src/assets/images/sefyna-logo.png";
import easyRideLogo from "/src/assets/images/easy-ride-logo.png";
import khadijaLogo from "/src/assets/images/khadija-logo.png";
import seySoweLogo from "/src/assets/images/seysowe-logo.png";


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
            {["Home", "About Us", "Services", "Projects",].map((item) => (
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
                  className="px-6 py-3 bg-cyan-400 text-black  rounded-full hover:bg-cyan-300 transition"
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
              <span className="text-cyan-400">Modern </span> <br /> <span className="text-cyan-400">Digital </span>
               Products
            </h2>

            <p className="mt-6 opacity-70 max-w-md">
              TRIFORGE is a tech-driven company focused on software, web apps,
              and scalable digital solutions.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition"
              >
                Get Started
              </a>

              {/* <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition">
                View Work
              </button> */}
            </div>

          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>
            <video
              loop
              muted
              autoPlay
              playsInline
              src="/src/assets/images/hero-video2.mp4"
              alt="hero"
              className="relative rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* BAR */}
      <div className="h-[2px] w-[40%] max-w-xs bg-cyan-600 mx-auto mt-5 opacity-60" />

      {/* ABOUT US */}
      <section id="about us" className="py-20 px-6">

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
              TRIFORGE was born from a simple belief: great digital experiences shouldn’t be complicated.
              What started as a passion for design and development became a mission to build clean,
              meaningful, and scalable products. Guided by the tireless mentorship of <span className="text-cyan-400 font-bold">Omar Jasseh, Founder & Instructor at JCC</span>, we were pushed to grow, believe, and excel — shaping who we are today.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">OUR APPROACH</h3>
            <p className="opacity-80 leading-relaxed">
              We fuse creativity, technology, and strategy to craft digital solutions that are thoughtful,
              high-performing, and built for long-term impact. Every project is guided by clarity,
              innovation, and a deep focus on solving real-world problems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">OUR GOAL</h3>
            <p className="opacity-80 leading-relaxed">
              Our goal is to turn ideas into reality through thoughtful design and modern development.
              We don’t just build products — we forge digital experiences that are purposeful,
              impactful, and built to stand the test of time.
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
          <div className="mb-16 text-center mx-auto md:col-span-3">
            <p className="text-l uppercase tracking-widest text-cyan-400 mb-2">
              What We Do
            </p>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Designing, Building & <span className="text-cyan-400">Scaling Digital Solutions</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Modern, responsive websites built for speed and reliability.",
              },
              {
                title: "Software Systems",
                desc: "Robust systems designed to streamline and scale operations.",
              },

              {
                title: "Web & Mobile Applications",
                desc: "Powerful apps tailored to solve real business problems.",
              },
              {
                title: "Digital Solutions",
                desc: "Custom digital tools built to solve real business problems.",
              },
              {
                title: "System Maintenance & Support",
                desc: "Ongoing technical support to keep systems secure, stable, and up to date.",
              },
              {
                title: "Hosting & Deployment Management",
                desc: "Secure, reliable hosting with smooth deployments to keep your systems fast and online.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`p-6 rounded-xl border transition ${
                  darkMode
                    ? "bg-[#0b0f1a] border-white/10 hover:border-cyan-400"
                    : "bg-gray-100 border-black/10 hover:border-cyan-500"
                }`}
              >
                <h4 className="text-lg font-semibold mb-3">
                  {service.title}
                </h4>
                <p className="text-sm opacity-70">
                  {service.desc}
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


          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                title: "Easy Ride Rentals",
                desc: "A professional Car Rental service in The Gambia.",
                image: "/src/assets/images/easy-ride.png",
                url: "https://easy-riderental.com/",
              },
              {
                title: "Seysowe Branding Collection",
                desc: "A thoughtfully crafted branding collection inspired by modern femininity and timeless elegance.",
                image: "/src/assets/images/seysowe-brand.jpeg",
                url: "#",
              },
              {
                title: "Sefyna Mart POS System",
                desc: "Data-driven admin dashboard.",
                image: "/src/assets/images/sefyna.png",
                url: "#",
              },
              {
                title: "Espace Motors Website",
                desc: "Espace Motors is a leading car dealership in The Gambia, delivering quality vehicles you can trust..",
                image: "/src/assets/images/espace.png",
                url: "#",
              },
            ].map((project, i) => (
              <div
                key={i}
                onClick={() => window.open(project.url, '_blank')}
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
                src={easyRideLogo}
                alt="Esay Ride Rental"
                className="max-h-20 max-w-[150px]"
              />
            </div>
            <div className="h-24 flex items-center justify-center">
              <img
                src={khadijaLogo}
                alt="Khadija's Mini Market"
                className="max-h-20 max-w-[150px]"
              />
            </div>
            <div className="h-24 flex items-center justify-center">
              <img
                src={seySoweLogo}
                alt="Seysowe Branding Collection"
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
              <a href="tel:+2207721900">Tel 📞: <span className="text-cyan-400"><span className="hover:underline">+220 772 1900</span></span></a><br/>
              <a href="tel:+2205886147">Tel 📞: <span className="text-cyan-400"><span className="hover:underline">+220 588 6147</span></span></a><br/>
              <a href="tel:+2203777194">Tel 📞: <span className="text-cyan-400"><span className="hover:underline">+220 377 7194</span></span></a><br/>
              <a href="tel:+2205296007">Tel 📞: <span className="text-cyan-400"><span className="hover:underline">+220 529 6007</span></span></a><br/>
            </p>
          </div>

          {/* CONTACT FORM */}
          <form
          
            className={`p-8 rounded-[20px] border ${
              darkMode
                ? "bg-[#0f1525] border-white/10"
                : "bg-white border-black/10"
            }`} 
            action="https://formly.email/submit"
            method="post"
            encType="application/x-www-form-urlencoded"
          >
            <input type="hidden" name="access_key" value="9627f94e64ff407798885fe5b0cfb706"></input>
            <input type="hidden" name="redirect" value="http://localhost:5173"></input>
            <div className="grid gap-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name (required)"
                className={`w-full px-4 py-3 rounded-[15px] outline-none transition ${
                  darkMode
                    ? "bg-[#0b0f1a] text-white placeholder-gray-400 border border-white/10 focus:border-cyan-400"
                    : "bg-gray-100 border border-black/10 focus:border-cyan-500"
                }`}
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address (required)"
                className={`w-full px-4 py-3 rounded-[15px] outline-none transition ${
                  darkMode
                    ? "bg-[#0b0f1a] text-white placeholder-gray-400 border border-white/10 focus:border-cyan-400"
                    : "bg-gray-100 border border-black/10 focus:border-cyan-500"
                }`}
              />

              <textarea
                rows="4"
                name="message"
                required
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
            {["About Us", "Services", "Projects", "Contact Us"].map((item) => (
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
      title: "Co Founder & CEO",
      image: "/src/assets/images/Victor.jpg",
      socials: {
        facebook: "https://m.me/victor.aremo.35",
        website: "https://easylink-beryl.vercel.app",
        linkedin:
          "https://www.linkedin.com/in/victor-oluwaseun-aremo-ba9581356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/itsbigvic5?utm_source=qr&igsh=am44OHFmYXM4azJ1",
      },
    },
    {
      name: "Muhammed Cham",
      title: "Co Founder & CTO",
      image: "/src/assets/images/Cham.jpg",
      socials: {
        facebook: "https://www.facebook.com/profile.php?id=100072271521254",
        website: "https://my-dev-portfolio-fz8x.vercel.app/",
        linkedin: "https://www.linkedin.com/in/muhammed-cham-53a976347/",
        instagram: "http://instagram.com/muhammadcham23/",
      },
    },
    {
      name: "Gibril Suwareh",
      title: "Co Founder & Operations Manager",
      image: "/src/assets/images/Gibril.jpg",
      socials: {
        facebook: "https://facebook.com/victor",
        website: "https://twitter.com/victor",
        linkedin: "https://linkedin.com/in/victor",
        instagram: "https://instagram.com/victor",
      },
    },
    {
      name: "Modou Lamin Ceesay",
      title: "Co Founder &  Lead Developer",
      image: "/src/assets/images/Modou.jpg",
      socials: {
        facebook: "https://www.facebook.com/lily.champion.58",
        website: "https://my-dev-portfolio-dun.vercel.app/",
        linkedin: "https://www.linkedin.com/in/modou-lamin-ceesay-b8b810321/",
        instagram: "https://www.instagram.com/tee_wizzy99/",
      },
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
    {
      name: "facebook",
      path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
    {
      name: "website",
      path: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 0c2.5 2.7 4 6.1 4 10s-1.5 7.3-4 10m0-20c-2.5 2.7-4 6.1-4 10s1.5 7.3 4 10m-8-10h16",
    },
    {
      name: "linkedin",
      path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    },
    {
      name: "instagram",
      path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
    },
  ];

  return (
    <div
      className={`rounded-[15px] overflow-hidden border transition-all mb-5 duration-300 ${
        darkMode
          ? "bg-[#0b0f1a] border-white/10 hover:border-cyan-400"
          : "bg-gray-100 border-black/10 hover:border-cyan-500"
      } ${isActive ? "scale-105 shadow-2xl" : "shadow-lg"}`}
    >
      {/* Image Container */}
      <div
        className="relative aspect-[4/5] sm:aspect-[3/4] lg:h-80 lg:aspect-auto overflow-hidden bg-gray-200"
        onMouseEnter={() => setShowSocial(true)}
        onMouseLeave={() => setShowSocial(false)}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />

        {/* Social Icons Overlay */}
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-opacity duration-300 ${
            showSocial ? "opacity-100" : "opacity-0"
          }`}
        >
          {socialIcons.map((icon) => {
            const url = member.socials?.[icon.name];
            if (!url) return null;

            return (
              <a
                key={icon.name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.name}
                className={`p-2.5 rounded-full backdrop-blur-sm transition-all duration-200 ${
                  darkMode
                    ? "bg-[#0b0f1a]/80 hover:bg-cyan-400 text-white hover:text-black border border-white/20"
                    : "bg-white/80 hover:bg-cyan-500 text-gray-700 hover:text-white"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d={icon.path} />
                </svg>
              </a>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h4 className="text-xl sm:text-2xl font-bold mb-2">
          {member.name}
        </h4>
        <p
          className={`text-sm sm:text-base ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {member.title}
        </p>
        <div className="mt-4 h-1 w-16 bg-cyan-400 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}