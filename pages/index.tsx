import React, { useState, useEffect } from 'react';
import { Menu, X, Search, MapPin, Clock, IndianRupee, Filter, Briefcase, Star, ArrowRight } from 'lucide-react';

const JobsWebsite = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');

  // Sample jobs data
  const allJobs = [
    {
      id: 1,
      title: "Senior Java Developer",
      company: "TechCorp Solutions",
      location: "Bangalore",
      experience: "3-5 years",
      salary: "8-15 LPA",
      type: "Full-time",
      posted: "2 days ago",
      skills: ["Java", "Spring Boot", "Microservices"],
      description: "Looking for experienced Java developer to work on enterprise applications."
    },
    {
      id: 2,
      title: "Data Engineer",
      company: "DataFlow Analytics",
      location: "Hyderabad",
      experience: "2-4 years",
      salary: "6-12 LPA",
      type: "Full-time",
      posted: "1 day ago",
      skills: ["Python", "Apache Spark", "AWS"],
      description: "Build and maintain data pipelines for large-scale analytics."
    },
    {
      id: 3,
      title: "Project Manager",
      company: "InnovateTech",
      location: "Mumbai",
      experience: "5-8 years",
      salary: "12-20 LPA",
      type: "Full-time",
      posted: "3 days ago",
      skills: ["Agile", "Scrum", "Leadership"],
      description: "Lead cross-functional teams and deliver projects on time."
    },
    {
      id: 4,
      title: "React.js Developer",
      company: "WebCraft Studios",
      location: "Pune",
      experience: "1-3 years",
      salary: "4-8 LPA",
      type: "Full-time",
      posted: "1 day ago",
      skills: ["React", "JavaScript", "Node.js"],
      description: "Develop modern web applications using React ecosystem."
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudMasters",
      location: "Chennai",
      experience: "3-6 years",
      salary: "10-18 LPA",
      type: "Full-time",
      posted: "4 days ago",
      skills: ["Docker", "Kubernetes", "CI/CD"],
      description: "Manage cloud infrastructure and deployment pipelines."
    },
    {
      id: 6,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Delhi",
      experience: "2-5 years",
      salary: "5-10 LPA",
      type: "Full-time",
      posted: "2 days ago",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      description: "Create intuitive and beautiful user experiences."
    },
    {
      id: 7,
      title: "Machine Learning Engineer",
      company: "AI Innovations",
      location: "Bangalore",
      experience: "3-7 years",
      salary: "15-25 LPA",
      type: "Full-time",
      posted: "1 day ago",
      skills: ["Python", "TensorFlow", "PyTorch"],
      description: "Develop and deploy ML models for production systems."
    },
    {
      id: 8,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Gurgaon",
      experience: "4-7 years",
      salary: "18-30 LPA",
      type: "Full-time",
      posted: "3 days ago",
      skills: ["Strategy", "Analytics", "Roadmapping"],
      description: "Drive product strategy and execution for our core platform."
    }
  ];

  // Filter jobs based on search and filters
  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesExperience = !experienceFilter || job.experience.includes(experienceFilter);
    const matchesJobType = !jobTypeFilter || job.type === jobTypeFilter;
    
    return matchesSearch && matchesLocation && matchesExperience && matchesJobType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                60Jobs.in
              </div>
            </div>

            {/* Desktop Navigation - Always Visible */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 transition-all duration-300 hover:scale-105">All Jobs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Interview Questions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Desktop Subscribe Button */}
            <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
              Subscribe
            </button>

            {/* Mobile: Subscribe + Hamburger Menu */}
            <div className="md:hidden flex items-center space-x-3">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                Subscribe
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-blue-600 font-semibold px-4 py-2 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-2">All Jobs</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-2">Interview Questions</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-2">Pricing</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Job</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover thousands of job opportunities from top companies across India
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full md:w-48 pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Filter className="text-gray-600 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-gray-900">Filter Jobs</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
              >
                <option value="">Experience Level</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-8">5-8 years</option>
                <option value="8+">8+ years</option>
              </select>
              
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                value={salaryFilter}
                onChange={(e) => setSalaryFilter(e.target.value)}
              >
                <option value="">Salary Range</option>
                <option value="0-5">0-5 LPA</option>
                <option value="5-10">5-10 LPA</option>
                <option value="10-15">10-15 LPA</option>
                <option value="15-25">15-25 LPA</option>
                <option value="25+">25+ LPA</option>
              </select>
              
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                value={jobTypeFilter}
                onChange={(e) => setJobTypeFilter(e.target.value)}
              >
                <option value="">Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              
              <button
                onClick={() => {
                  setExperienceFilter('');
                  setSalaryFilter('');
                  setJobTypeFilter('');
                  setLocationFilter('');
                  setSearchTerm('');
                }}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Jobs <span className="text-blue-600">({filteredJobs.length})</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 p-6 border border-gray-100 group">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-300">{job.posted}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{job.title}</h3>
                <p className="text-blue-600 font-semibold mb-3 group-hover:text-purple-600 transition-colors duration-300">{job.company}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                  <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300">
                    <IndianRupee size={16} className="mr-1" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">{job.description}</p>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center justify-center group">
                  Apply Now
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                60Jobs.in
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                India's fastest growing job portal. Connect with top employers and find your dream career.
              </p>
              
              {/* Social Media */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/50">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </div>
                </div>
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/50">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                  </div>
                </div>
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-700/50">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                </div>
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-red-500/50">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.219 1.037 1.037 0 .631-.402 1.578-.608 2.456-.173.731.367 1.328 1.086 1.328 1.301 0 2.301-1.375 2.301-3.35 0-1.75-1.258-2.974-3.059-2.974-2.084 0-3.309 1.563-3.309 3.176 0 .631.242 1.328.547 1.699.06.073.069.136.051.21-.056.227-.18.731-.205.832-.033.136-.107.166-.246.1-1.24-.576-2.017-2.288-2.017-3.689 0-2.304 1.674-4.419 4.83-4.419 2.535 0 4.506 1.805 4.506 4.219 0 2.516-1.587 4.534-3.79 4.534-.74 0-1.438-.387-1.676-.852 0 0-.367 1.402-.456 1.75-.166.631-.615 1.42-.916 1.902.689.213 1.414.324 2.167.324C18.624 24.001 24 18.634 24 12.017 24 5.384 18.641.017 12.017.017z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl mb-8 text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {['All Jobs', 'Interview Questions', 'Pricing', 'About Us', 'Contact Us'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group text-lg">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Job Categories */}
            <div>
              <h4 className="font-bold text-xl mb-8 text-white relative">
                Popular Categories
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {['Software Development', 'Data Science & AI', 'Product Management', 'UI/UX Design', 'Digital Marketing'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group text-lg">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-xl mb-8 text-white relative">
                Stay Connected
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
              </h4>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Get weekly job alerts, career tips, and exclusive opportunities delivered to your inbox.
              </p>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-lg backdrop-blur-sm"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 font-semibold text-lg">
                  Subscribe Now
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm mb-2">Trusted by 50,000+ job seekers</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-lg">
                  &copy; 2025 <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">60Jobs.in</span>. All rights reserved.
                </p>
                <p className="text-gray-400 text-sm mt-1">Made with ❤️ in India • Empowering careers since 2024</p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-end space-x-8 text-lg">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Help Center'].map((item, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:underline underline-offset-4">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobsWebsite;
