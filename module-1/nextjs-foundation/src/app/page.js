'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiGraphql, SiDocker } from 'react-icons/si';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      title: "AI Content Generator",
      description: "Platform leveraging OpenAI API to generate marketing content",
      tags: ["Python", "FastAPI", "React", "OpenAI"],
      link: "#",
      github: "#"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <FaReact className="text-3xl" />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: <FaNodeJs className="text-3xl" />, items: ["Node.js", "Express", "Python", "FastAPI"] },
    { name: "Database", icon: <FaDatabase className="text-3xl" />, items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
    { name: "DevOps", icon: <SiDocker className="text-3xl" />, items: ["Docker", "AWS", "CI/CD", "GitHub Actions"] }
  ];

  return (
    <>
      <Head>
        <title>John Doe | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">JD</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  {item}
                </button>
              ))}
              <a href="/resume.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 hover:text-blue-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left ${activeSection === item ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {item}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="block px-3 py-2 rounded-md text-base font-medium text-center bg-blue-600 text-white hover:bg-blue-700"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Hi, I'm <span className="text-blue-600">John Doe</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
                Full Stack Developer
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                I build exceptional digital experiences with modern technologies.
                Currently specializing in React, Next.js, and Node.js applications.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    <img src='/assets/shahriar-2025-no-bg.png' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                      <img src='/assets/shahriar-2025-no-bg.png' />
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                A passionate developer based in San Francisco
              </h3>
              <p className="text-gray-600 mb-6">
                With over 5 years of experience in web development, I've worked on a variety of projects
                ranging from small business websites to large-scale enterprise applications. I specialize in
                creating efficient, scalable, and user-friendly solutions.
              </p>
              <p className="text-gray-600 mb-6">
                My approach combines technical expertise with a keen eye for design, ensuring that the applications
                I build are not only functional but also provide an exceptional user experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Education</h4>
                  <p className="text-gray-600">B.S. in Computer Science</p>
                  <p className="text-gray-500 text-sm">Stanford University, 2018</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Experience</h4>
                  <p className="text-gray-600">Senior Developer</p>
                  <p className="text-gray-500 text-sm">TechCorp (2019-Present)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            I've worked with a wide range of technologies in the web development world.
            Here are some of my core competencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-blue-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-5xl text-gray-800" />
                <span className="mt-2 text-gray-600">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-5xl text-blue-500" />
                <span className="mt-2 text-gray-600">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-5xl text-blue-600" />
                <span className="mt-2 text-gray-600">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-5xl text-cyan-500" />
                <span className="mt-2 text-gray-600">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-5xl text-green-600" />
                <span className="mt-2 text-gray-600">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGraphql className="text-5xl text-pink-600" />
                <span className="mt-2 text-gray-600">GraphQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiDocker className="text-5xl text-blue-400" />
                <span className="mt-2 text-gray-600">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Here are some of my recent projects. Each one was built to solve specific problems
            and deliver real value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{project.title.split(' ')[0]}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <FiGithub className="mr-1" /> Code
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <FiExternalLink className="mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiMail className="text-blue-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <a href="mailto:john.doe@example.com" className="text-gray-600 hover:text-blue-600">
                        john.doe@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 mt-1 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Location</h4>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
                  >
                    <FiGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
                  >
                    <FiLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
                  >
                    <FiTwitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">John Doe</span>
              <p className="text-gray-400 mt-1">Full Stack Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FiTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}