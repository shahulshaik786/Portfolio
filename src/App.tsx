import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Menu, X, ChevronUp, Instagram } from 'lucide-react';
import emailjs from "@emailjs/browser";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 relative">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gradient">My Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`hover:text-indigo-400 transition-all ${activeSection === 'home' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}>Home</a>
            <a href="#about" className={`hover:text-indigo-400 transition-all ${activeSection === 'about' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}>About</a>
            <a href="#skills" className={`hover:text-indigo-400 transition-all ${activeSection === 'skills' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}>Skills</a>
            <a href="#projects" className={`hover:text-indigo-400 transition-all ${activeSection === 'projects' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}>Projects</a>
            <a href="#certifications" className={`hover:text-indigo-400 transition-all ${activeSection === 'certifications' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}>Certifications</a>
            <a href="#contact" className={`hover:text-indigo-400 transition-all ${activeSection === 'contact' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}>Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm animate-fadeInUp">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a 
                href="#home" 
                className={`hover:text-indigo-400 transition-all ${activeSection === 'home' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`hover:text-indigo-400 transition-all ${activeSection === 'about' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className={`hover:text-indigo-400 transition-all ${activeSection === 'skills' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className={`hover:text-indigo-400 transition-all ${activeSection === 'projects' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className={`hover:text-indigo-400 transition-all ${activeSection === 'contact' ? 'text-indigo-400 font-medium' : 'text-gray-300'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Header/Hero Section */}
      <header id="home" className="bg-gradient-to-r from-indigo-600 to-purple-600 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/20 animate-pulse-glow"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-fadeInUp">
              Shaik Fyroz Shahul
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 animate-fadeInUp animate-delay-200">
              Full Stack Web Developer | DevOps Enthusiast
            </p>
            <div className="flex justify-center gap-4 animate-fadeInUp animate-delay-300">
              <a 
                href="#projects" 
                className="btn-primary"
              >
                Explore My Work
              </a>
              <a 
                href="#contact" 
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 relative animate-fadeInLeft">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse-glow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-600 p-1 bg-gray-900 z-10 transition-transform duration-500 hover:scale-105">
   
              

              <img 
    src="https://i.ibb.co/4DZN7Q4/image3.jpg" 
    alt="Shaik Fyroz Shahul" 
    className="rounded-full w-full h-full object-cover cursor-pointer" 
/>



              </div>
            </div>
            <div className="max-w-2xl animate-fadeInRight">
              <h2 className="section-title">
                About Me
              </h2>
              <p className="text-lg mb-6">
              Highly motivated Computer Science undergraduate with a CGPA of 9.51, specializing in automation, cloud
 infrastructure, and DevOps. Skilled in building scalable systems, streamlining deployments, and leveraging CI/CD
 pipelines for operational efficiency. Adaptable and quick learner with strong analytical, problem-solving, and
 communication skills. Eager to contribute to dynamic, technology-driven environments by delivering innovative
 solutions and optimizing processes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="btn-primary"
                >
                  <Mail size={18} /> Contact Me
                </a>
                <a  
  href="https://kluniversityin-my.sharepoint.com/:b:/g/personal/2200031100_kluniversity_in/ERl56oiJvwlLtrM_ouQNS80B1U7naVi69tyaetSGxxQ1Lw?e=OFgAge"  
  className="btn-secondary"  
  onClick={(e) => {  
    e.preventDefault();  
    window.open(  
      "https://kluniversityin-my.sharepoint.com/:b:/g/personal/2200031100_kluniversity_in/ERl56oiJvwlLtrM_ouQNS80B1U7naVi69tyaetSGxxQ1Lw?e=OFgAge",  
      "ResumePopup",  
      "width=800,height=1000,resizable=yes,scrollbars=yes"  
    );  
  }}  
>  
  <Download size={18} /> View & Download Resume  
</a>  

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mx-auto">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="skill-card animate-fadeInUp">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="skill-card animate-fadeInUp animate-delay-100">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            
            <div className="skill-card animate-fadeInUp animate-delay-200">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">AWS</span>
              </div>
            </div>
            
            <div className="skill-card animate-fadeInUp animate-delay-300">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
              </div>
            </div>
            
            <div className="skill-card animate-fadeInUp animate-delay-400">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>
            
            <div className="skill-card animate-fadeInUp animate-delay-500">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Tools & Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">JIRA</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Postman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 bg-gray-900">
  <div className="container mx-auto px-6">
    <h2 className="section-title text-center mx-auto">
      Featured Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Loan Management System FIRST with Featured */}
      <div className="project-card group animate-fadeInLeft">
        <div className="h-48 bg-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80')] bg-cover bg-center opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 relative">
          <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 transform translate-y-[-50%] rounded-full">
            Featured
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">Loan Management System</h3>
          <p className="text-gray-300 mb-4">Designed a secure loan processing system with advanced search functionality, document management, and approval workflows.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">Spring Boot</span>
            <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">Java</span>
            <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">PostgreSQL</span>
            <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">Thymeleaf</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/shahulshaik786/LMS_Frontend.git" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-all duration-300 hover:translate-x-1">
              <Github size={16} /> Code
            </a>
            <a href="https://loanmanagementsystemlms.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-all duration-300 hover:translate-x-1">
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Learning Management System SECOND WITHOUT Featured */}
      <div className="project-card group animate-fadeInRight">
        <div className="h-48 bg-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 relative">
          {/* Featured badge removed here */}
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">Learning Management System</h3>
          <p className="text-gray-300 mb-4">Developed a robust LMS with role-based authentication, content management, and responsive UI using the MERN stack.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">React</span>
            <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">Node.js</span>
            <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">Express</span>
            <span className="px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">MongoDB</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-all duration-300 hover:translate-x-1">
              <Github size={16} /> Code
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-all duration-300 hover:translate-x-1">
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* Certifications Section */}
<section id="certifications" className="mt-16 flex justify-center">
  <div className="container mx-auto px-6 text-center">
    <h2 className="section-title">Certifications</h2>

    {/* Certification Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
      
      {/* AWS Certification */}
      <div className="skill-card">
        <div className="flex justify-center">
          <img src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" width={250} height={200} alt="AWS Certification" />
        </div>
        <h3 className="text-xl font-semibold">AWS Certified Cloud Practitioner</h3>
        <p className="text-gray-400">Issued by AWS Organization</p>
        <a href="https://www.credly.com/badges/07095883-1a33-4bd0-badc-38e69c11ee26/public_url" target="_blank" rel="noopener noreferrer">View</a>
      </div>

      {/* Red Hat Certification */}
      <div className="skill-card">
        <div className="flex justify-center">
          <img src="https://images.credly.com/size/680x680/images/ae7dd2bd-1d04-43d9-b148-1ef79ec45129/image.png" width={300} height={200} alt="Red Hat Certification" />
        </div>
        <h3 className="text-xl font-semibold">Red Hat Certified Enterprise Application Developer</h3>
        <p className="text-gray-400">Issued by Red Hat Academy</p>
        <a href="https://www.credly.com/badges/7b44fbdd-b7d0-4ec7-b3c4-61e48ff0c379/public_url" target="_blank" rel="noopener noreferrer">View</a>
      </div>

      {/* Salesforce Certification */}
      <div className="skill-card">
        <div className="flex justify-center">
          <img src="https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BEqgH&oid=00DF0000000gZsu&lastMod=1693557495000" width={400} height={200} alt="Salesforce AI Associate" />
        </div>
        <h3 className="text-xl font-semibold">Salesforce AI Associate</h3>
        <p className="text-gray-400">Issued by Salesforce</p>
        <a href="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=S3ihqv+eZSwpqtFobdkKQB6BpoUJTQFEMxE7udNZ2IM8YdbwrZ1Gwy8pimo1h50V" target="_blank" rel="noopener noreferrer">View</a>
      </div>

      {/* Oracle Certification */}
      <div className="skill-card">
        <div className="flex justify-center">
          <img src="https://brm-workforce.oracle.com/pdf/certview/images/OU_Generic_Badge.png" width={225} height={200} alt="Oracle Certification" />
        </div>
        <h3 className="text-xl font-semibold">Oracle Cloud Infrastructure Generative AI Certified Professional</h3>
        <p className="text-gray-400">Issued by Oracle</p>
        <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=88CBEF8C15C16F59FB1679A01B607B6FB04DBBBE01955C575DE093E132E6B28D" target="_blank" rel="noopener noreferrer">View</a>
      </div>

      {/* RPA Certification */}
      <div className="skill-card">
        <div className="flex justify-center">
          <img src="https://pathfinder.automationanywhere.com/images/image-training-start.svg" width={225} height={200} alt="RPA Certification" />
        </div>
        <h3 className="text-xl font-semibold">Automation Anywhere Certified Essentials RPA Professional (Automation 360) - 2023</h3>
        <p className="text-gray-400">Issued by Automation Anywhere</p>
        <a href="https://certificates.automationanywhere.com/7ca60134-c8d1-4592-af2b-baf08a5136ea#acc.wMA2VNyD" target="_blank" rel="noopener noreferrer">View</a>
      </div>

      {/* ACE Multicloud Network Associate */}
      <div className="skill-card">
        <div className="flex justify-center">
          <img src="https://images.credly.com/size/220x220/images/e3c001fd-161d-433a-a7a4-049556d6112d/blob" width={225} height={200} alt="ACE Multicloud Network Associate" />
        </div>
        <h3 className="text-xl font-semibold">Aviatrix Certified Engineer Multicloud Network Associate</h3>
        <p className="text-gray-400">Issued by Aviatrix</p>
        <a href="https://www.credly.com/badges/ae3cd2c4-5583-4ce8-92cb-e5f0e4356d21/public_url" target="_blank" rel="noopener noreferrer">View</a>
      </div>

    </div>
  </div>
</section>


      {/* Contact Section */}
<section id="contact" className="py-20 bg-gray-800">
  <div className="container mx-auto px-6">
    <h2 className="section-title text-center mx-auto">Get In Touch</h2>
    
    <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-indigo-500/20 hover:-translate-y-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="animate-fadeInLeft">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
          <div className="space-y-4">
            <a href="mailto:2200031100cseh@gmail.com" className="contact-link">
              <Mail className="text-indigo-500" size={20} />
              <span>2200031100cseh@gmail.com</span>
            </a>
            <a href="tel:8977799007" className="contact-link">
              <Phone className="text-indigo-500" size={20} />
              <span>8977799007</span>
            </a>
            <a href="https://www.linkedin.com/in/shaik-fyroz-shahul-b0158b295/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin className="text-indigo-500" size={20} />
              <span>Shaik Fyroz Shahul</span>
            </a>
            <a href="https://github.com/shahulshaik786" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github className="text-indigo-500" size={20} />
              <span>shahulshaik786</span>
            </a>
            <a 
  href="https://www.instagram.com/shahul_shaik_786?igsh=MXU5MzBqbXY0azdkZA%3D%3D&utm_source=qr" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="contact-link"
>
  <Instagram className="text-indigo-500" size={20} />
  <span>shahul_shaik_786</span>
</a>

          </div>
        </div>
        
        {/* Contact Form */}
        <div className="animate-fadeInRight">
          <h3 className="text-xl font-semibold mb-4 text-white">Send a Message</h3>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              emailjs
                .sendForm(
                  "service_etzxgf9",  // Replace with your EmailJS Service ID
                  "template_61tlqkr",  // Replace with your EmailJS Template ID
                  form,
                  "mpARcKbXPGGlx3a9l"    // Replace with your EmailJS Public Key
                )
                .then(
                  () => {
                    alert("Message Sent Successfully!");
                    form.reset();
                  },
                  (error: any) => {
                    console.error("EmailJS Error:", error);
                    alert("Failed to send message. Try again!");
                  }
                );
            }} 
            className="space-y-4"
          >
           <div className="group">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            className="form-input group-hover:border-indigo-500"
            required
          />
        </div>
        <div className="group">
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            className="form-input group-hover:border-indigo-500"
            required
          />
        </div>
        <div className="group">
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows={4}
            className="form-input group-hover:border-indigo-500"
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn-primary w-full justify-center"
        >
          Send Message
        </button>
      </form>
    </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/shahulshaik786" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-all transform hover:scale-150">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shaik-fyroz-shahul-b0158b295/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-all transform hover:scale-150">
              <Linkedin size={20} />
            </a>
            <a href="mailto:2200031100cseh@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-all transform hover:scale-150">
              <Mail size={20} />
            </a>
            <a 
  href="https://www.instagram.com/shahul_shaik_786?igsh=MXU5MzBqbXY0azdkZA%3D%3D&utm_source=qr" 
  className="text-gray-400 hover:text-indigo-400 transition-all transform hover:scale-150"
>
  <Instagram size={20} />
</a>

          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Shaik Fyroz Shahul. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}

export default App;
