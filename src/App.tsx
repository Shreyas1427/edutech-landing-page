import React, { useState, useEffect } from 'react';
import { Bolt, Calculator, FlaskRound as Flask, BookOpen, GraduationCap as UserGraduate, Clock, Video, Rocket, Users, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'benefits', 'mastery', 'faq', 'testimonials', 'contact'];
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Reusable Logo Component
  const Logo = () => (
    <span className="text-2xl font-bold">
      <span style={{ color: 'black' }}>scor</span>
      <span style={{ color: '#00A383' }}>eazy</span>
    </span>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'mastery', label: "What You'll Master" },
                { id: 'faq', label: 'FAQ' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Enroll Now' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-gray-900 hover:text-black font-medium transition-colors relative ${
                    activeSection === id ? 'text-black' : ''
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'mastery', label: "What You'll Master" },
                { id: 'faq', label: 'FAQ' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Enroll Now' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block text-gray-700 hover:text-black font-medium transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                Master Your Class 10 Finals{' '}
                <span style={{ backgroundColor: '#00A383' }} className=" bg-clip-text text-transparent">
                  in Just One Week
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join our intensive revision bootcamp designed to boost your confidence and elevate your scores in Math, Science, and English.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  style={{ backgroundColor: '#00A383' }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 text-white font-semibold rounded-lg hover:bg-black hover:text-black transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enroll Now for ₹2,499
                </button>
                <button
                  style={{ backgroundColor: '#00A383' }} 
                  onClick={() => scrollToSection('benefits')}
                  className="px-8 py-4 text-white font-semibold rounded-lg hover:bg-black hover:text-black transform hover:-translate-y-1 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students studying together for exams"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '7', label: 'Days of Learning' },
              { number: '3', label: 'Core Subjects' },
              { number: '100%', label: 'Doubt Resolution' }
            ].map((stat, index) => (
              <div key={index} style={{ backgroundColor: '#00A383' }} className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-black font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Our Bootcamp?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A student-first approach to make scoring easier</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Your Final Revision, Perfected</h3>
              <p className="text-gray-600 leading-relaxed">
                This one-week bootcamp is designed to give you the ultimate edge for your Class 10 board exams. We focus on high-impact revision, covering the most important topics and problem-solving techniques.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our expert educators blend proven teaching methods with personalized attention to ensure every student masters key concepts and builds unshakable confidence before walking into the exam hall.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Rocket className="h-6 w-6 text-green-600" />,
                    title: 'Expert-Led Sessions',
                    description: 'Learn from top educators who simplify complex topics.'
                  },
                  {
                    icon: <Users className="h-6 w-6 text-green-600" />,
                    title: 'Comprehensive Notes',
                    description: 'Get exam-focused notes and mind maps for quick revision.'
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-green-600" />,
                    title: 'Daily Doubt Solving',
                    description: 'Get your questions answered in dedicated daily sessions.'
                  }
                ].map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 mt-1">{highlight.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Teacher mentoring a student"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Master Section */}
      <section id="mastery" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Master</h2>
            <p className="text-xl text-gray-600">Covering the core subjects to ensure you are fully prepared</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calculator className="h-8 w-8 text-white" />,
                title: 'Mathematics',
                description: 'Strengthen your foundation in key areas to solve problems with speed and accuracy.',
                features: ['Algebra & Equations', 'Geometry & Theorems', 'Trigonometry']
              },
              {
                icon: <Flask className="h-8 w-8 text-white" />,
                title: 'Science',
                description: 'Master the essential concepts of Physics, Chemistry, and Biology for a holistic understanding.',
                features: ['Physics Laws & Numericals', 'Chemistry Reactions', 'Biology Diagrams & Concepts']
              },
              {
                icon: <BookOpen className="h-8 w-8 text-white" />,
                title: 'English',
                description: 'Sharpen your language and literature skills to write high-scoring answers.',
                features: ['Grammar Rules & Application', 'Literature Summary', 'Writing Skills Practice']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-4 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div style={{ backgroundColor: '#00A383' }} className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about the bootcamp</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Student raising hand to ask a question"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: <UserGraduate className="h-6 w-6 text-white" />,
                  question: 'Who is this for?',
                  answer: 'Class 10 students from any board (CBSE, ICSE, etc.) wanting a final, structured revision.'
                },
                {
                  icon: <Clock className="h-6 w-6 text-white" />,
                  question: 'What is the daily duration?',
                  answer: '3 hours of live classes each day for 7 days, followed by a 1-hour doubt-solving session.'
                },
                {
                  icon: <Video className="h-6 w-6 text-white" />,
                  question: 'Will I get recordings?',
                  answer: 'Yes, recordings of all live sessions will be available until your board exams are over.'
                }
              ].map((faq, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-4">
                  <div style={{ backgroundColor: '#00A383' }} className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    {faq.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real feedback from successful students</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                content: 'The bootcamp was a game-changer! My confidence in Math shot up, and the revision notes were incredibly helpful.',
                author: 'Aisha Sharma',
                role: 'Class 10 Student',
                avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                content: 'As a parent, I saw a real difference in my son\'s approach. The structured schedule made revision easy for him.',
                author: 'Rajesh Kumar',
                role: 'Parent',
                avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                content: 'The doubt-solving sessions were the best part. No question was too small, and the teachers were very patient.',
                author: 'Priya Singh',
                role: 'Class 10 Student',
                avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ backgroundColor: '#00A383' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enroll in the Bootcamp</h2>
            <p className="text-xl text-gray-900">Limited seats available to ensure personalized attention. Book your spot today!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Ready to Make Scoring Easy?</h3>
              <p className="text-gray-900 leading-relaxed">
                Fill out the form to secure your spot. Our team will get in touch with you to complete the enrollment process.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <Mail className="h-5 w-5 text-white" />, label: 'Email', value: 'hello@scoreazy.com' },
                  { icon: <Phone className="h-5 w-5 text-white" />, label: 'Phone', value: '+91 123-456-7890' },
                  { icon: <MapPin className="h-5 w-5 text-white" />, label: 'Location', value: 'Online Bootcamp' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{contact.label}</h4>
                      <p className="text-gray-900">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <form className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Subject"
                    defaultValue="Bootcamp Enrollment"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors resize-vertical"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-lg hover:from-gray-800 hover:to-black transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Secure Your Spot
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Logo />
              </div>
              <p className="text-gray-900 leading-relaxed">
                Blending educational psychology, technology, and AI to deliver personalized learning for every student.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Offerings</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Counseling & Mentorship</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Microcourses</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Skill Boosters</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blueprints</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Scoreazy Edutech Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;