'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Server, Cpu, Layout, ChevronDown } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { icon: <Code className="w-6 h-6" />, name: 'Programming', items: ['Python', 'JavaScript', 'Java', 'C++'] },
    { icon: <Database className="w-6 h-6" />, name: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    { icon: <Globe className="w-6 h-6" />, name: 'Web Development', items: ['React', 'Node.js', 'HTML/CSS'] },
    { icon: <Server className="w-6 h-6" />, name: 'DevOps', items: ['Git', 'Docker', 'AWS'] },
    { icon: <Cpu className="w-6 h-6" />, name: 'Systems', items: ['Linux', 'Networking', 'Security'] },
    { icon: <Layout className="w-6 h-6" />, name: 'Tools', items: ['VS Code', 'Postman', 'Figma'] }
  ];

  const projects = [
    {
      title: "E-Learning Platform",
      description: "A full-stack web application for online learning with video courses, quizzes, and progress tracking.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800"
    },
    {
      title: "Smart Home IoT System",
      description: "IoT project for home automation using Raspberry Pi and custom sensors.",
      tech: ["Python", "MQTT", "React Native"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800"
    },
    {
      title: "Inventory Management System",
      description: "Desktop application for managing retail inventory with barcode scanning.",
      tech: ["Java", "MySQL", "JavaFX"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a192f] text-gray-100">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#0a192f]/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:scale-105 transition-transform">
              Khushal Singh
            </h1>
            <div className="flex items-center gap-6">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-gray-300 hover:text-purple-400 hover:scale-105 transition-all"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-400 mb-4 animate-fade-in">Hello, I'm</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-title">
              IT Student & Developer
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              Passionate about building innovative solutions and learning new technologies.
              Currently pursuing a Bachelor's in Computer Application.
            </p>
            <div className="flex justify-center gap-6 animate-fade-in-up">
              <Button className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all">
                <Mail className="mr-2 h-5 w-5" /> Contact Me
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 transform hover:scale-105 transition-all">
                <Github className="mr-2 h-5 w-5" /> View GitHub
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-[#112240]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="bg-[#0a192f] border border-gray-800 p-8 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">{skill.name}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-[#112240] border-0 overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/0 transition-all duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#112240]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all"
              >
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 transform hover:scale-105 transition-all"
              >
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 transform hover:scale-105 transition-all"
              >
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}