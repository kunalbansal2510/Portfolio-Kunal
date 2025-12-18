import React, { useState, useEffect } from 'react';
import { 
  Github, X, Linkedin, Download, Menu, X as CloseIcon, 
  Code, Palette, Cpu, Sparkles, ArrowRight, ChevronDown, 
  Mail, Phone, MapPin, GraduationCap, BookOpen, Award, 
  Calendar, School, ExternalLink, Star
} from 'lucide-react';

export default function EnhancedPortfolio() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
    
    const words = ['Developer', 'Designer', 'Creator', 'Problem Solver'];
    
    const socialLinks = [
        { 
            name: "GitHub", 
            icon: <Github className="w-5 h-5" />, 
            link: "https://github.com", 
            color: "hover:text-gray-100",
            glow: "hover:shadow-gray-500/50",
            bg: "bg-gray-900"
        },
        { 
            name: "LinkedIn", 
            icon: <Linkedin className="w-5 h-5" />, 
            link: "https://linkedin.com", 
            color: "hover:text-blue-300",
            glow: "hover:shadow-blue-500/50",
            bg: "bg-blue-700"
        },
        { 
            name: "X", 
            icon: <X className="w-5 h-5" />, 
            link: "https://x.com", 
            color: "hover:text-black",
            glow: "hover:shadow-black/50",
            bg: "bg-black"
        }
    ];

    const skills = [
        { icon: <Code className="w-6 h-6" />, name: "Full Stack Dev", level: 95, color: "from-blue-500 to-cyan-500" },
        { icon: <Palette className="w-6 h-6" />, name: "UI/UX Design", level: 90, color: "from-purple-500 to-pink-500" },
        { icon: <Cpu className="w-6 h-6" />, name: "System Design", level: 85, color: "from-green-500 to-emerald-500" },
        { icon: <Sparkles className="w-6 h-6" />, name: "Creative Solutions", level: 92, color: "from-orange-500 to-red-500" }
    ];

    const projects = [
        { title: "E-Commerce Platform", desc: "Full-stack with React & Node.js", tags: ["React", "Node.js", "MongoDB"], color: "bg-gradient-to-br from-blue-50 to-cyan-50" },
        { title: "AI Analytics Dashboard", desc: "Real-time data visualization", tags: ["AI/ML", "D3.js", "Python"], color: "bg-gradient-to-br from-purple-50 to-pink-50" },
        { title: "Mobile Banking App", desc: "Secure financial application", tags: ["React Native", "Firebase", "Security"], color: "bg-gradient-to-br from-green-50 to-emerald-50" }
    ];

    // Education Data
    const education = [
        {
            degree: "Bachelor Of Commerce",
            institution: "Kurukshetra University",
            location: "Haryana, IN",
            duration: "2025-Appering",
            icon: <GraduationCap className="w-8 h-8" />,
            color: "from-purple-500 to-pink-500",
        },
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Indian Institute of Technology, Delhi",
            location: "New Delhi, India",
            duration: "2016 - 2020",
            gpa: "8.5/10.0",
            icon: <School className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            highlights: [
                "Graduated with First Class Honors",
                "President of Computer Science Society",
                "Winner of National Hackathon 2019",
                "Summer Intern at Google (2019)"
            ],
            courses: ["Data Structures", "Algorithms", "Database Systems", "Web Technologies"]
        },
        {
            degree: "High School Diploma",
            institution: "Delhi Public School",
            location: "New Delhi, India",
            duration: "2014 - 2016",
            gpa: "95%",
            icon: <BookOpen className="w-8 h-8" />,
            color: "from-green-500 to-emerald-500",
            highlights: [
                "School Topper in Computer Science",
                "Captain of School Basketball Team",
                "Organized National Science Fair 2015",
                "Gold Medalist in National Math Olympiad"
            ],
            courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
        }
    ];

    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2023",
            credential: "Credential ID: AWS-12345",
            icon: <Award className="w-6 h-6" />
        },
        {
            name: "Google Professional Data Engineer",
            issuer: "Google Cloud",
            date: "2022",
            credential: "Credential ID: GCP-67890",
            icon: <Award className="w-6 h-6" />
        },
        {
            name: "React Developer Certification",
            issuer: "Meta (Facebook)",
            date: "2022",
            credential: "Credential ID: REACT-54321",
            icon: <Award className="w-6 h-6" />
        }
    ];

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = ['home', 'about', 'education', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typing animation
    useEffect(() => {
        let currentText = '';
        let isDeleting = false;
        let typingSpeed = 100;

        const type = () => {
            const currentWord = words[currentWordIndex];
            
            if (isDeleting) {
                currentText = currentWord.substring(0, currentText.length - 1);
                typingSpeed = 50;
            } else {
                currentText = currentWord.substring(0, currentText.length + 1);
                typingSpeed = 100;
            }

            setTypedText(currentText);

            if (!isDeleting && currentText === currentWord) {
                typingSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        };

        const timer = setTimeout(type, 1000);
        return () => clearTimeout(timer);
    }, [currentWordIndex]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Enhanced Navigation Bar */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/20' 
                    : 'bg-transparent'
            }`}>
                <nav className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
                    {/* Logo with enhanced animation */}
                    <div className='flex items-center gap-4'>
                        <div 
                            className='relative group cursor-pointer'
                            onClick={() => scrollToSection('home')}
                        >
                            <div className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 hover:scale-110 ${
                                isScrolled ? 'text-3xl' : 'text-4xl'
                            }`}>
                                KB
                            </div>
                            
                            {/* Animated border */}
                            <div className='absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:scale-110 -z-10'></div>
                            
                            {/* Pulse effect */}
                            <div className='absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 animate-ping transition-all duration-1000 -z-20'></div>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className={`hidden lg:flex gap-8 ml-8 transition-all duration-500 ${
                            isScrolled ? 'opacity-100' : 'opacity-90'
                        }`}>
                            {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 capitalize ${
                                        activeSection === section
                                            ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                                >
                                    {section}
                                    {activeSection === section && (
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Navigation - Right Side */}
                    <div className='hidden lg:flex gap-6 items-center backdrop-blur-md px-8 py-3 rounded-full border border-white/20 shadow-lg bg-white/50'>
                        {/* Download Resume Button */}
                        <button className='group relative flex items-center gap-3 text-lg font-medium px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden'>
                            <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            <Download className="w-5 h-5 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                            <span className='relative z-10'>Download Resume</span>
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </button>
                        
                        {/* Social Icons */}
                        <div className='flex gap-3'>
                            {socialLinks.map((item, ind) => (
                                <a 
                                    key={ind} 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative p-3 rounded-full ${item.bg} transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 ${item.color} ${item.glow} hover:scale-110 hover:shadow-lg`}
                                    aria-label={item.name}
                                >
                                    <div className="relative z-10 text-white transition-all duration-300 group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    
                                    {/* Ring effect */}
                                    <div className='absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current group-hover:scale-125 transition-all duration-300 opacity-0 group-hover:opacity-60'></div>
                                    
                                    {/* Pulse effect */}
                                    <div className={`absolute inset-0 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-20 transition-all duration-500 ${item.bg}`}></div>
                                    
                                    {/* Tooltip */}
                                    <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap'>
                                        {item.name}
                                        <div className='absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45'></div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='lg:hidden p-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/20 hover:bg-white transition-all duration-300 hover:scale-105'
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>
                </nav>
            </div>

            {/* Page 1: Hero Section with Blue Gradient Background */}
            <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                    <div className="absolute inset-0 opacity-10"
                         style={{
                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                         }}
                    ></div>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/20">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-600">Available for opportunities</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                                <span className="block text-gray-900">Hi, I'm</span>
                                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">Kunal Bansal</span>
                            </h1>
                            
                            <div className="text-2xl md:text-3xl text-gray-600 min-h-[40px]">
                                <span className="font-semibold text-gray-700">I'm a </span>
                                <span className="text-blue-600 font-bold">{typedText}</span>
                                <span className='animate-pulse text-blue-600'>|</span>
                            </div>
                            
                            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                                Crafting digital experiences with cutting-edge technology and 
                                innovative design solutions. Passionate about building scalable 
                                applications that make an impact.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <button 
                                    onClick={() => scrollToSection('projects')}
                                    className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                    View My Work
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </button>
                                
                                <button 
                                    onClick={() => scrollToSection('contact')}
                                    className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                                >
                                    Get In Touch
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Visual */}
                        <div className="relative">
                            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
                                
                                {/* Floating Elements */}
                                <div className="absolute top-10 left-10 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg animate-float">
                                    <GraduationCap className="w-10 h-10 text-blue-600" />
                                    <div className="mt-2 font-semibold text-gray-800">Stanford MS</div>
                                </div>
                                
                                <div className="absolute bottom-10 right-10 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg animate-float animation-delay-1000">
                                    <Code className="w-10 h-10 text-purple-600" />
                                    <div className="mt-2 font-semibold text-gray-800">Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                        <button 
                            onClick={() => scrollToSection('about')}
                            className="animate-bounce p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/20 hover:bg-white transition-all duration-300"
                        >
                            <ChevronDown className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Page 2: About Section with Green Gradient Background */}
            <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Passionate developer with expertise in modern web technologies
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Skills Section */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-800">My Skills</h3>
                            {skills.map((skill, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                                                {skill.icon}
                                            </div>
                                            <span className="font-medium text-gray-700">{skill.name}</span>
                                        </div>
                                        <span className="font-bold text-gray-800">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Experience & Info */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience & Expertise</h3>
                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                        <h4 className="font-semibold text-gray-800">5+ Years Experience</h4>
                                    </div>
                                    <p className="text-gray-600 mt-2">Building scalable applications for startups and enterprises</p>
                                </div>
                                
                                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                        <h4 className="font-semibold text-gray-800">50+ Projects</h4>
                                    </div>
                                    <p className="text-gray-600 mt-2">Successfully delivered web and mobile applications</p>
                                </div>
                                
                                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                        <h4 className="font-semibold text-gray-800">Full Stack Developer</h4>
                                    </div>
                                    <p className="text-gray-600 mt-2">Expert in React, Node.js, and cloud technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page 3: Education Section with Indigo Gradient Background */}
            <section id="education" className="min-h-screen py-20 bg-gradient-to-br from-indigo-50 to-violet-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Education & <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Qualifications</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Academic journey and professional certifications
                        </p>
                    </div>

                    {/* Education Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 h-full w-1 md:w-2 bg-gradient-to-b from-indigo-300 to-violet-300 transform md:-translate-x-1/2"></div>
                        
                        {education.map((edu, index) => (
                            <div 
                                key={index} 
                                className={`relative mb-16 md:mb-20 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'}`}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} transform -translate-x-1/2 z-10`}>
                                    <div className="absolute inset-1 bg-white rounded-full"></div>
                                </div>
                                
                                {/* Education Card */}
                                <div className="ml-10 md:ml-0 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100/50">
                                    <div className="p-8">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                            <div className="flex items-center gap-4 mb-4 md:mb-0">
                                                <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} text-white`}>
                                                    {edu.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                                                    <p className="text-gray-600">{edu.institution}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{edu.duration}</span>
                                                </div>
                                                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100">
                                                    <span className="font-bold text-indigo-700">GPA: {edu.gpa}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 text-gray-600 mb-6">
                                            <MapPin className="w-4 h-4" />
                                            <span>{edu.location}</span>
                                        </div>
                                        
                                        {/* Highlights */}
                                        <div className="mb-8">
                                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                <Star className="w-4 h-4 text-yellow-500" />
                                                Key Highlights & Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {edu.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                                        <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 flex-shrink-0"></div>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {/* Relevant Courses */}
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-3">Relevant Coursework</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.courses.map((course, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-700 text-sm font-medium border border-indigo-100"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Gradient Border Bottom */}
                                    <div className={`h-1 bg-gradient-to-r ${edu.color}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications Section */}
                    <div className="mt-24">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Professional <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Certifications</span>
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Industry-recognized credentials that validate my expertise
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {certifications.map((cert, index) => (
                                <div 
                                    key={index}
                                    className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500">
                                            {cert.icon}
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-700 text-sm font-medium">
                                            {cert.date}
                                        </span>
                                    </div>
                                    
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h4>
                                    <p className="text-gray-600 mb-4">Issued by {cert.issuer}</p>
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 font-mono">{cert.credential}</span>
                                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
                                    </div>
                                    
                                    {/* Hover effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/5 group-hover:to-violet-500/5 transition-all duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Page 4: Projects Section with Purple Gradient Background */}
            <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Some of my recent work and contributions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className={`group relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${project.color}`}
                            >
                                <div className="p-8">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center mb-6">
                                        <Sparkles className="w-6 h-6 text-purple-600" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-6">{project.desc}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex}
                                                className="px-3 py-1 rounded-full bg-white/80 text-sm font-medium text-gray-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <button className="group/btn flex items-center gap-2 text-purple-600 font-semibold">
                                        View Details
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                    </button>
                                </div>
                                
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Page 5: Contact Section with Orange Gradient Background */}
            <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get In <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Touch</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Let's discuss your project and build something amazing together
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm">
                                    <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-700">Email</div>
                                        <div className="text-gray-600">hello@kunalbansal.dev</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm">
                                    <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-700">Phone</div>
                                        <div className="text-gray-600">+1 (555) 123-4567</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm">
                                    <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-700">Location</div>
                                        <div className="text-gray-600">San Francisco, CA</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Project inquiry"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea 
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='lg:hidden fixed inset-0 z-50 bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl'>
                    <div className='flex flex-col h-full p-6'>
                        {/* Header */}
                        <div className='flex justify-between items-center mb-12'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                                KB
                            </div>
                            <button 
                                className='p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/20 hover:bg-white transition-colors duration-300 hover:scale-105'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <CloseIcon className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className='flex-1 flex flex-col items-center justify-center space-y-6'>
                            {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`text-2xl font-medium px-8 py-4 rounded-full w-full max-w-xs transition-all duration-300 ${
                                        activeSection === section
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                            : 'text-gray-700 hover:bg-white/50'
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            ))}

                            {/* Download Button */}
                            <button className='mt-8 group flex items-center gap-3 text-lg font-medium px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full max-w-xs justify-center'>
                                <Download className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                                <span>Download Resume</span>
                            </button>

                            {/* Social Icons */}
                            <div className='flex gap-4 mt-8'>
                                {socialLinks.map((item, ind) => (
                                    <a 
                                        key={ind} 
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 rounded-full ${item.bg} text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.glow}`}
                                        aria-label={item.name}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                                KB
                            </div>
                            <p className="text-gray-400">
                                Building the future with code and creativity.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {['home', 'about', 'education', 'projects', 'contact'].map((link) => (
                                    <li key={link}>
                                        <button 
                                            onClick={() => scrollToSection(link)}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 capitalize"
                                        >
                                            {link}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-white mb-4">Education</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Kurukshetra University</li>
                                <li>HBSE</li>
                                <li>Certifications</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-white mb-4">Connect</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((item, ind) => (
                                    <a 
                                        key={ind} 
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg ${item.bg} text-white hover:scale-110 transition-all duration-300`}
                                        aria-label={item.name}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Kunal Bansal. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            Crafted with passion and precision
                        </p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .md\\:pr-1\\/2 {
                    padding-right: 50%;
                }
                
                .md\\:pl-1\\/2 {
                    padding-left: 50%;
                }
            `}</style>
        </div>
    );
}