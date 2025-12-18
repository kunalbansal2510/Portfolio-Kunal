import React, { useState, useEffect } from 'react';
import { 
  Github, X, Linkedin, Download, Menu, X as CloseIcon, 
  Shield, Lock, Key, Cpu, Zap, Eye, Terminal, Database,
  Code, Palette, Sparkles, ArrowRight, ChevronDown, 
  Mail, Phone, MapPin, GraduationCap, BookOpen, Award, 
  Calendar, School, ExternalLink, Users, Target, Bug,
  Network, AlertTriangle, Fingerprint, Search, FileCode,
  Server, Cloud, WifiOff, Globe, ShieldCheck, Clock
} from 'lucide-react';

export default function CyberSecurityPortfolio() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
    const [activeTab, setActiveTab] = useState('education');
    
    const words = ['Security Developer', 'Penetration Tester', 'Threat Analyst', 'Cyber Security Engineer'];
    
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
        { icon: <Shield className="w-6 h-6" />, name: "Application Security", level: 95, color: "from-green-500 to-emerald-500" },
        { icon: <Lock className="w-6 h-6" />, name: "Cryptography", level: 90, color: "from-blue-500 to-cyan-500" },
        { icon: <Terminal className="w-6 h-6" />, name: "Penetration Testing", level: 92, color: "from-purple-500 to-pink-500" },
        { icon: <Database className="w-6 h-6" />, name: "Secure Architecture", level: 88, color: "from-orange-500 to-red-500" },
        { icon: <Bug className="w-6 h-6" />, name: "Vulnerability Analysis", level: 94, color: "from-indigo-500 to-violet-500" },
        { icon: <Network className="w-6 h-6" />, name: "Network Security", level: 85, color: "from-yellow-500 to-amber-500" }
    ];

    const projects = [
        { 
            title: "Secure Banking Platform", 
            desc: "End-to-end encrypted banking application with zero-knowledge proofs", 
            tags: ["React", "Node.js", "AES-256", "Zero Trust"], 
            color: "bg-gradient-to-br from-green-50 to-emerald-50",
            icon: <Lock className="w-8 h-8" />
        },
        { 
            title: "Threat Intelligence Dashboard", 
            desc: "Real-time threat monitoring and anomaly detection system", 
            tags: ["Python", "Elasticsearch", "ML", "SIEM"], 
            color: "bg-gradient-to-br from-blue-50 to-cyan-50",
            icon: <Shield className="w-8 h-8" />
        },
        { 
            title: "Vulnerability Scanner", 
            desc: "Automated security assessment tool for web applications", 
            tags: ["Go", "Docker", "OWASP", "API Security"], 
            color: "bg-gradient-to-br from-purple-50 to-pink-50",
            icon: <Search className="w-8 h-8" />
        }
    ];

    // Enhanced Education Data for Cyber Security
    const education = [


        {
            degree: "Higher Secondary School",
            institution: "S.S Bal Sadan Sr. Sec. School",
            location: "Kaithal, Haryana",
            duration: "2023-2025",
            gpa: "70 %",
            icon: <Terminal className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
            badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
            rank: "Security Focus",
            achievements: [
            ]
        },
        {
            degree: "Bachelor of Commerce",
            institution: "Kurukshetra University",
            location: "Kaithal, Haryana",
            duration: "2025-Appering",
            gpa: "8.7/10.0",
            icon: <Terminal className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
            badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
            rank: "Security Focus",
            achievements: [
            ]
        },
        {
            degree: "Advanced Diploma in Ethical Hacking",
            institution: "Hartron Training Center",
            location: "Kaithal",
            duration: "2025",
            gpa: "A+",
            icon: <Bug className="w-8 h-8" />,
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
            badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
            rank: "Certified",
            achievements: [
                "CEH Certified",
                "Practical Penetration Testing",
                "Vulnerability Assessment Expert"
            ]
        }
    ];

    // Security Certifications
    const certifications = [
        {
            name: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            date: "2022",
            credential: "ECC-123456",
            icon: <Bug className="w-8 h-8" />,
            level: "Expert",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
        },
        {
            name: "CISSP - Certified Information Systems Security Professional",
            issuer: "ISC2",
            date: "2021",
            credential: "CISSP-789012",
            icon: <Shield className="w-8 h-8" />,
            level: "Professional",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
        },
        {
            name: "OSCP - Offensive Security Certified Professional",
            issuer: "Offensive Security",
            date: "2022",
            credential: "OSCP-345678",
            icon: <Terminal className="w-8 h-8" />,
            level: "Advanced",
            color: "from-red-500 to-orange-500",
            bgColor: "bg-gradient-to-br from-red-50 to-orange-50"
        },
        {
            name: "AWS Security Specialist",
            issuer: "Amazon Web Services",
            date: "2023",
            credential: "AWS-SEC-901234",
            icon: <Cloud className="w-8 h-8" />,
            level: "Specialist",
            color: "from-orange-500 to-yellow-500",
            bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50"
        }
    ];

    // Security Tools & Technologies
    const securityTools = [
        {
            category: "Penetration Testing",
            tools: [
                { name: "Metasploit", proficiency: 95 },
                { name: "Burp Suite", proficiency: 92 },
                { name: "Nmap", proficiency: 90 },
                { name: "Wireshark", proficiency: 88 },
                { name: "John the Ripper", proficiency: 85 }
            ],
            icon: <Terminal className="w-6 h-6" />
        },
        {
            category: "Development Security",
            tools: [
                { name: "SAST/DAST Tools", proficiency: 94 },
                { name: "Dependency Scanning", proficiency: 92 },
                { name: "Container Security", proficiency: 89 },
                { name: "API Security Testing", proficiency: 91 },
                { name: "Code Review", proficiency: 96 }
            ],
            icon: <FileCode className="w-6 h-6" />
        }
    ];

    // Security Stats
    const securityStats = [
        { label: "Vulnerabilities Found", value: "500+", icon: <Bug className="w-5 h-5" /> },
        { label: "Security Audits", value: "50+", icon: <ShieldCheck className="w-5 h-5" /> },
        { label: "CTF Competitions", value: "25+", icon: <Target className="w-5 h-5" /> },
        { label: "Security Patches", value: "200+", icon: <Lock className="w-5 h-5" /> }
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
            {/* Enhanced Navigation Bar - Dark Theme */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-700/20' 
                    : 'bg-transparent'
            }`}>
                <nav className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
                    {/* Logo with enhanced animation */}
                    <div className='flex items-center gap-4'>
                        <div 
                            className='relative group cursor-pointer'
                            onClick={() => scrollToSection('home')}
                        >
                            <div className={`text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500 hover:scale-110 ${
                                isScrolled ? 'text-3xl' : 'text-4xl'
                            }`}>
                                CS
                            </div>
                            
                            {/* Animated border */}
                            <div className='absolute -inset-2 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:scale-110 -z-10'></div>
                            
                            {/* Pulse effect */}
                            <div className='absolute -inset-1 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 opacity-0 group-hover:opacity-30 animate-ping transition-all duration-1000 -z-20'></div>
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
                                            ? 'text-gray-900 bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg'
                                            : 'text-gray-300 hover:text-green-400 hover:bg-gray-800/50'
                                    }`}
                                >
                                    {section}
                                    {activeSection === section && (
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Navigation - Right Side */}
                    <div className='hidden lg:flex gap-6 items-center backdrop-blur-md px-8 py-3 rounded-full border border-gray-700/20 shadow-lg bg-gray-800/50'>
                        {/* Download Resume Button */}
                        <button className='group relative flex items-center gap-3 text-lg font-medium px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-gray-900 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden'>
                            <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
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
                                    className={`group relative p-3 rounded-full ${item.bg} transition-all duration-300 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-cyan-500/20 ${item.color} ${item.glow} hover:scale-110 hover:shadow-lg`}
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
                                    <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-700'>
                                        {item.name}
                                        <div className='absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-t border-l border-gray-700'></div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='lg:hidden p-3 rounded-full bg-gray-800/80 backdrop-blur-md border border-gray-700/20 hover:bg-gray-700 transition-all duration-300 hover:scale-105'
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6 text-gray-300" />
                    </button>
                </nav>
            </div>

            {/* Page 1: Hero Section with Dark Gradient Background */}
            <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                    <div className="absolute inset-0 opacity-10"
                         style={{
                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                         }}
                    ></div>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

                {/* Matrix Rain Effect Container */}
                <div className="absolute inset-0 overflow-hidden opacity-5">
                    <div className="matrix-rain"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-green-500/20">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-green-400">Available for Security Consulting</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                                <span className="block text-gray-300">I'm</span>
                                <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mt-2">Kunal Bansal</span>
                            </h1>
                            
                            <div className="text-2xl md:text-3xl text-gray-400 min-h-[40px] font-mono">
                                <span className="font-semibold text-gray-300">Cyber Security </span>
                                <span className="text-green-400 font-bold">{typedText}</span>
                                <span className='animate-pulse text-green-400'>|</span>
                            </div>
                            
                            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                                Building secure digital fortresses and defending against evolving cyber threats. 
                                Specializing in application security, penetration testing, and secure architecture design.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <button 
                                    onClick={() => scrollToSection('projects')}
                                    className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-gray-900 font-semibold hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                    View Security Projects
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </button>
                                
                                <button 
                                    onClick={() => scrollToSection('contact')}
                                    className="px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 font-semibold hover:border-green-500 hover:text-green-400 hover:bg-gray-800/50 transition-all duration-300"
                                >
                                    Security Audit Request
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Visual */}
                        <div className="relative">
                            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-cyan-900/30 to-gray-900 animate-gradient"></div>
                                
                                {/* Circuit Board Pattern */}
                                <div className="absolute inset-0 opacity-20"
                                     style={{
                                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff00' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                                     }}
                                ></div>
                                
                                {/* Floating Security Elements */}
                                <div className="absolute top-10 left-10 p-6 bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-lg animate-float border border-green-500/30">
                                    <Shield className="w-10 h-10 text-green-400" />
                                    <div className="mt-2 font-semibold text-gray-300">Security</div>
                                </div>
                                
                                <div className="absolute bottom-10 right-10 p-6 bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-lg animate-float animation-delay-1000 border border-cyan-500/30">
                                    <Lock className="w-10 h-10 text-cyan-400" />
                                    <div className="mt-2 font-semibold text-gray-300">Encryption</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Stats Bar */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {securityStats.map((stat, index) => (
                            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                        <button 
                            onClick={() => scrollToSection('about')}
                            className="animate-bounce p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/20 hover:bg-gray-700 transition-all duration-300"
                        >
                            <ChevronDown className="w-6 h-6 text-gray-300" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Page 2: About Section with Dark Green Gradient */}
            <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-green-500/30 mb-6">
                            <Shield className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-medium text-green-400">Security Expertise</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Cyber Security <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Specialist</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Protecting digital assets with cutting-edge security solutions and threat intelligence
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Skills Section */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Security Skills</h3>
                            {skills.map((skill, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                                                {skill.icon}
                                            </div>
                                            <span className="font-medium text-gray-300">{skill.name}</span>
                                        </div>
                                        <span className="font-bold text-white">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Experience & Approach */}
                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-white mb-6">Security Methodology</h3>
                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-green-500/20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <h4 className="font-semibold text-white">Proactive Defense</h4>
                                    </div>
                                    <p className="text-gray-400 mt-2">Implementing security measures before threats materialize</p>
                                </div>
                                
                                <div className="p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                                        <h4 className="font-semibold text-white">Zero Trust Architecture</h4>
                                    </div>
                                    <p className="text-gray-400 mt-2">Never trust, always verify approach to security</p>
                                </div>
                                
                                <div className="p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-emerald-500/20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                        <h4 className="font-semibold text-white">Secure Development</h4>
                                    </div>
                                    <p className="text-gray-400 mt-2">Security-first approach to software development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page 3: Enhanced Education & Certifications Section */}
            <section id="education" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-green-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Security <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Qualifications</span>
                        </h2>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Advanced education and industry-recognized certifications in cyber security
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex rounded-2xl bg-gray-800/80 backdrop-blur-sm p-2 border border-gray-700/50">
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    activeTab === 'education'
                                        ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-gray-900 shadow-lg'
                                        : 'text-gray-400 hover:text-green-400'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5" />
                                    Education
                                </div>
                            </button>
                            <button
                                onClick={() => setActiveTab('certifications')}
                                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    activeTab === 'certifications'
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 shadow-lg'
                                        : 'text-gray-400 hover:text-cyan-400'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    Certifications
                                </div>
                            </button>
                            <button
                                onClick={() => setActiveTab('tools')}
                                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    activeTab === 'tools'
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-gray-900 shadow-lg'
                                        : 'text-gray-400 hover:text-blue-400'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-5 h-5" />
                                    Tools & Tech
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Education Content */}
                    {activeTab === 'education' && (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {education.map((edu, index) => (
                                <div 
                                    key={index}
                                    className={`group relative ${edu.bgColor} rounded-3xl p-8 border border-gray-700/50 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                                >
                                    {/* Badge */}
                                    <div className={`absolute -top-4 right-6 px-4 py-2 rounded-full ${edu.badgeColor} text-white text-sm font-bold shadow-lg`}>
                                        {edu.rank}
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className={`p-4 rounded-2xl ${edu.bgColor} border border-gray-600/50 w-16 h-16 flex items-center justify-center mb-6`}>
                                        <div className={`text-2xl bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                                            {edu.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Degree & Institution */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                                        <School className="w-4 h-4" />
                                        <span className="font-medium">{edu.institution}</span>
                                    </div>
                                    
                                    {/* Location & Duration */}
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4" />
                                            <span>{edu.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.duration}</span>
                                        </div>
                                    </div>
                                    
                                    {/* GPA */}
                                    <div className="mb-8">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                                            GPA: {edu.gpa}
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full bg-gradient-to-r ${edu.color}`}
                                                style={{ width: `${parseFloat(edu.gpa) / 4 * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    
                                    {/* Achievements */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <Award className="w-4 h-4 text-yellow-500" />
                                            Security Achievements
                                        </div>
                                        <ul className="space-y-2">
                                            {edu.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                                    <ShieldCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Hover Effect */}
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Certifications Content */}
                    {activeTab === 'certifications' && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {certifications.map((cert, index) => (
                                <div 
                                    key={index}
                                    className={`group relative ${cert.bgColor} rounded-3xl p-8 border border-gray-700/50 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                                >
                                    {/* Level Badge */}
                                    <div className={`absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-bold shadow-lg`}>
                                        {cert.level}
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white w-14 h-14 flex items-center justify-center mb-6`}>
                                        {cert.icon}
                                    </div>
                                    
                                    {/* Name & Issuer */}
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h4>
                                    <p className="text-gray-600 mb-4">By {cert.issuer}</p>
                                    
                                    {/* Credential ID */}
                                    <div className="mb-6">
                                        <div className="text-sm text-gray-500 mb-1">Credential ID</div>
                                        <div className="font-mono text-sm text-gray-800 bg-white/50 px-3 py-2 rounded-lg border border-gray-300">
                                            {cert.credential}
                                        </div>
                                    </div>
                                    
                                    {/* Date */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">{cert.date}</span>
                                        </div>
                                        <button className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors duration-300">
                                            <ExternalLink className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>
                                    
                                    {/* Hover Effect */}
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tools Content */}
                    {activeTab === 'tools' && (
                        <div className="grid lg:grid-cols-2 gap-8">
                            {securityTools.map((category, index) => (
                                <div 
                                    key={index}
                                    className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-xl"
                                >
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 text-white">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        {category.tools.map((tool, idx) => (
                                            <div key={idx} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium text-gray-300">{tool.name}</span>
                                                    <span className="font-bold text-white">{tool.proficiency}%</span>
                                                </div>
                                                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-1000 ease-out"
                                                        style={{ width: `${tool.proficiency}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Security Assurance */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 border border-green-500/30 max-w-2xl mx-auto">
                            <ShieldCheck className="w-12 h-12 text-green-400" />
                            <h3 className="text-2xl font-bold text-white">Security Assurance</h3>
                            <p className="text-gray-400">
                                Committed to maintaining the highest standards of security and privacy
                            </p>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-gray-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                            >
                                Request Security Audit
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page 4: Security Projects Section */}
            <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Security <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Real-world security solutions and defense implementations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className={`group relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${project.color} border border-gray-700/50`}
                            >
                                <div className="p-8">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center mb-6">
                                        {project.icon}
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
                                    
                                    <button className="group/btn flex items-center gap-2 text-green-600 font-semibold">
                                        View Security Details
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                    </button>
                                </div>
                                
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-cyan-500/0 group-hover:from-green-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Page 5: Contact Section */}
            <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Security <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Contact</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            For security consultations, audits, or secure development projects
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white">Secure Communication</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-green-500/30">
                                    <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-300">Encrypted Email</div>
                                        <div className="text-gray-400">bansalkunal2510@gmail.com</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-green-500/30">
                                    <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500">
                                        <Key className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-300">PGP Key</div>
                                        <div className="text-gray-400">Available upon request</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-green-500/30">
                                    <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-300">Security Protocols</div>
                                        <div className="text-gray-400">End-to-end encrypted communication</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                                            placeholder="secure@email.com"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Security Need</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300">
                                        <option value="">Select security service</option>
                                        <option value="audit">Security Audit</option>
                                        <option value="pentest">Penetration Testing</option>
                                        <option value="consulting">Security Consulting</option>
                                        <option value="development">Secure Development</option>
                                        <option value="training">Security Training</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea 
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Describe your security requirements..."
                                    ></textarea>
                                </div>
                                
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                    <Lock className="w-4 h-4" />
                                    <span>All communications are encrypted and confidential</span>
                                </div>
                                
                                <button 
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 text-gray-900 font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Send Secure Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='lg:hidden fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-xl'>
                    <div className='flex flex-col h-full p-6'>
                        {/* Header */}
                        <div className='flex justify-between items-center mb-12'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent'>
                                CS
                            </div>
                            <button 
                                className='p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/20 hover:bg-gray-700 transition-colors duration-300 hover:scale-105'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <CloseIcon className="w-6 h-6 text-gray-300" />
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
                                            ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-gray-900 shadow-lg'
                                            : 'text-gray-300 hover:bg-gray-800/50'
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            ))}

                            {/* Download Button */}
                            <button className='mt-8 group flex items-center gap-3 text-lg font-medium px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-gray-900 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full max-w-xs justify-center'>
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
            <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 border-t border-gray-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                                CS
                            </div>
                            <p className="text-gray-400">
                                Securing the digital world through expert security solutions and continuous innovation.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-white mb-4">Security Services</h4>
                            <ul className="space-y-2">
                                <li><button className="text-gray-400 hover:text-green-400 transition-colors duration-300">Penetration Testing</button></li>
                                <li><button className="text-gray-400 hover:text-green-400 transition-colors duration-300">Security Audits</button></li>
                                <li><button className="text-gray-400 hover:text-green-400 transition-colors duration-300">Secure Development</button></li>
                                <li><button className="text-gray-400 hover:text-green-400 transition-colors duration-300">Incident Response</button></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-white mb-4">Certifications</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" />
                                    CEH Certified
                                </li>
                                <li className="flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    CISSP
                                </li>
                                <li className="flex items-center gap-2">
                                    <Terminal className="w-4 h-4" />
                                    OSCP
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-white mb-4">Secure Connect</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((item, ind) => (
                                    <a 
                                        key={ind} 
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-full ${item.bg} text-white hover:scale-110 transition-all duration-300 hover:shadow-lg border border-gray-700`}
                                        aria-label={item.name}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Kunal Bansal - Cyber Security Specialist. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            Built with security-first principles
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
                
                @keyframes matrixRain {
                    0% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 0 1000px;
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
                
                .matrix-rain {
                    position: absolute;
                    top: -100%;
                    left: 0;
                    width: 100%;
                    height: 300%;
                    background: linear-gradient(to bottom, transparent 0%, rgba(0, 255, 0, 0.03) 2%, transparent 5%);
                    background-size: 100% 10px;
                    animation: matrixRain 20s linear infinite;
                }
            `}</style>
        </div>
    );
}