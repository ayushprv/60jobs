import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Mail, Briefcase, MessageCircle, Star, TrendingUp } from 'lucide-react';

const InterviewQuestionsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openQuestions, setOpenQuestions] = useState({});
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleQuestion = (index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with Google Sheets API and Razorpay
      console.log('Subscribing email:', email);
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const interviewQuestions = [
    {
      question: "Tell me about yourself",
      answer: "This is your elevator pitch. Keep it concise, professional, and relevant to the job. Structure it around your current role, key achievements, and what you're looking for next. Aim for 2-3 minutes maximum."
    },
    {
      question: "What are your greatest strengths?",
      answer: "Choose 2-3 strengths that directly relate to the job requirements. Provide specific examples of how you've used these strengths to achieve results. Always back up your claims with concrete evidence."
    },
    {
      question: "What is your biggest weakness?",
      answer: "Choose a real weakness that won't disqualify you from the role. Explain what you're doing to improve it. Show self-awareness and commitment to personal development."
    },
    {
      question: "Why do you want to work here?",
      answer: "Research the company thoroughly. Mention specific aspects of their mission, values, products, or culture that attract you. Show genuine interest and explain how you can contribute."
    },
    {
      question: "Where do you see yourself in 5 years?",
      answer: "Show ambition while staying realistic. Align your goals with potential career progression at the company. Demonstrate that you're thinking long-term about your career development."
    },
    {
      question: "Why are you leaving your current job?",
      answer: "Stay positive and focus on what you're moving toward, not what you're running from. Mention growth opportunities, new challenges, or better alignment with your career goals."
    },
    {
      question: "Describe a challenging situation and how you handled it",
      answer: "Use the STAR method (Situation, Task, Action, Result). Choose an example that shows problem-solving skills, leadership, or resilience. Focus on your specific actions and the positive outcome."
    },
    {
      question: "What motivates you?",
      answer: "Be genuine and specific. Connect your motivation to aspects of the role or company. Examples could include solving complex problems, helping customers, continuous learning, or working in teams."
    },
    {
      question: "How do you handle stress and pressure?",
      answer: "Provide specific strategies you use to manage stress. Give examples of high-pressure situations you've successfully navigated. Show that you can maintain performance under pressure."
    },
    {
      question: "What are your salary expectations?",
      answer: "Do your research on market rates. Provide a range rather than a specific number. You can also deflect by saying you're open to discussion based on the full compensation package."
    },
    {
      question: "Do you have any questions for us?",
      answer: "Always have thoughtful questions prepared. Ask about company culture, growth opportunities, team dynamics, or current challenges. This shows genuine interest and engagement."
    },
    {
      question: "Describe your ideal work environment",
      answer: "Describe an environment that aligns with the company's culture. Be flexible and adaptable. Mention elements like collaboration, learning opportunities, and clear communication."
    },
    {
      question: "How do you prioritize your work?",
      answer: "Explain your system for managing tasks and deadlines. Mention tools you use (like to-do lists, project management software). Give examples of how you've successfully juggled multiple priorities."
    },
    {
      question: "Tell me about a time you failed",
      answer: "Choose a real failure that won't disqualify you. Focus on what you learned and how you applied that learning going forward. Show accountability and growth mindset."
    },
    {
      question: "How do you work in a team?",
      answer: "Describe your collaboration style with specific examples. Mention how you communicate, resolve conflicts, and contribute to team success. Show that you're both a team player and can lead when needed."
    },
    {
      question: "What's your management style?",
      answer: "If applying for a leadership role, describe your approach to managing people. Include examples of how you've motivated teams, handled difficult conversations, and developed others."
    },
    {
      question: "How do you stay updated in your field?",
      answer: "Show commitment to continuous learning. Mention specific resources like industry publications, courses, conferences, or professional networks you engage with regularly."
    },
    {
      question: "Describe your problem-solving process",
      answer: "Walk through your systematic approach to solving problems. Include steps like defining the problem, gathering information, analyzing options, implementing solutions, and evaluating results."
    },
    {
      question: "What's your communication style?",
      answer: "Describe how you adapt your communication to different audiences. Give examples of written and verbal communication successes. Mention how you ensure clarity and understanding."
    },
    {
      question: "How do you handle criticism?",
      answer: "Show that you're open to feedback and can use it constructively. Provide an example of how you've received and acted on criticism to improve your performance."
    },
    {
      question: "What's your approach to learning new skills?",
      answer: "Describe your learning methodology with specific examples. Mention how you've successfully acquired new skills in the past and applied them in your work."
    },
    {
      question: "How do you ensure quality in your work?",
      answer: "Explain your quality control processes. Mention attention to detail, peer reviews, testing procedures, or other methods you use to maintain high standards."
    },
    {
      question: "Describe a time you had to meet a tight deadline",
      answer: "Use the STAR method to describe a specific situation. Focus on your time management, prioritization skills, and any creative solutions you used to meet the deadline successfully."
    },
    {
      question: "How do you handle disagreements with colleagues?",
      answer: "Show emotional intelligence and conflict resolution skills. Describe your approach to finding common ground and maintaining professional relationships despite disagreements."
    },
    {
      question: "What's your experience with remote work?",
      answer: "If relevant, describe your remote work setup, communication practices, and how you maintain productivity. Show that you can be self-motivated and collaborative virtually."
    },
    {
      question: "How do you measure success?",
      answer: "Connect your definition of success to both personal satisfaction and business results. Mention specific metrics or outcomes that matter in your field."
    },
    {
      question: "Describe your leadership experience",
      answer: "Even if you haven't had formal leadership roles, describe times you've taken initiative, influenced others, or led projects. Focus on results and team impact."
    },
    {
      question: "What's your experience with data analysis?",
      answer: "Describe specific tools and techniques you've used. Give examples of insights you've generated from data and how they've influenced business decisions."
    },
    {
      question: "How do you approach innovation?",
      answer: "Describe your creative process and give examples of innovative solutions you've developed. Show how you balance creativity with practical business needs."
    },
    {
      question: "What's your experience with agile methodologies?",
      answer: "If relevant to the role, describe your experience with Scrum, Kanban, or other agile frameworks. Mention specific roles you've played in agile teams and results achieved."
    },
    {
      question: "How do you handle multiple projects simultaneously?",
      answer: "Describe your project management approach, tools you use, and how you communicate status to stakeholders. Give specific examples of successful multi-project management."
    },
    {
      question: "What's your approach to customer service?",
      answer: "Emphasize empathy, active listening, and problem-solving. Give examples of how you've gone above and beyond for customers and the impact it had."
    },
    {
      question: "How do you stay organized?",
      answer: "Describe your organizational systems and tools. Explain how these methods help you stay productive and meet deadlines consistently."
    },
    {
      question: "What's your experience with budget management?",
      answer: "If relevant, describe your experience managing budgets, controlling costs, and making financial decisions. Include specific examples and results achieved."
    },
    {
      question: "How do you handle ambiguity?",
      answer: "Show that you can work effectively without complete information. Describe how you gather context, make reasonable assumptions, and adapt as more information becomes available."
    },
    {
      question: "What's your approach to mentoring others?",
      answer: "Describe your philosophy on developing others. Give examples of how you've helped colleagues grow and the satisfaction you get from their success."
    },
    {
      question: "How do you build relationships with stakeholders?",
      answer: "Emphasize communication, trust-building, and understanding different perspectives. Give examples of successful stakeholder management and relationship building."
    },
    {
      question: "What's your experience with cross-functional collaboration?",
      answer: "Describe how you work effectively with different departments. Give examples of successful cross-functional projects and how you navigated different priorities and perspectives."
    },
    {
      question: "How do you approach risk management?",
      answer: "Describe your process for identifying, assessing, and mitigating risks. Give examples of how proactive risk management has prevented problems or minimized impact."
    },
    {
      question: "What's your experience with performance metrics?",
      answer: "Describe key metrics you've tracked in your role and how you've used them to drive improvements. Show understanding of both leading and lagging indicators."
    },
    {
      question: "How do you ensure continuous improvement?",
      answer: "Describe your approach to identifying improvement opportunities and implementing changes. Give examples of processes or systems you've improved and the results achieved."
    },
    {
      question: "What's your approach to training and development?",
      answer: "Describe how you stay current with skills and help others develop. Mention specific training programs, certifications, or learning initiatives you've been involved with."
    },
    {
      question: "How do you handle competing priorities?",
      answer: "Describe your decision-making framework for prioritization. Give examples of how you've successfully managed competing demands from different stakeholders."
    },
    {
      question: "What's your experience with digital transformation?",
      answer: "If relevant, describe your role in implementing new technologies or processes. Focus on change management, stakeholder buy-in, and measurable improvements achieved."
    },
    {
      question: "How do you approach networking?",
      answer: "Describe your networking philosophy and activities. Mention professional associations, industry events, or online communities you participate in and how they've benefited your career."
    },
    {
      question: "What questions do you have about the role?",
      answer: "Always have 3-5 thoughtful questions prepared. Ask about expectations, challenges, team dynamics, company direction, or growth opportunities. This shows genuine interest and preparation."
    },
    {
      question: "How do you handle feedback from multiple sources?",
      answer: "Describe how you synthesize different perspectives and prioritize feedback. Give examples of how you've used diverse input to improve your work or approach."
    },
    {
      question: "What's your approach to work-life balance?",
      answer: "Show that you can be dedicated while maintaining personal well-being. Describe boundaries you set and how you recharge to maintain peak performance."
    },
    {
      question: "How do you contribute to company culture?",
      answer: "Give specific examples of how you've positively influenced workplace culture. Mention initiatives you've led, team-building activities, or ways you've supported colleagues."
    },
    {
      question: "What would you do in your first 90 days if hired?",
      answer: "Show that you've thought strategically about the role. Outline a plan for learning, relationship building, and early wins. Demonstrate understanding of role expectations and company needs."
    },
    {
      question: "Why should we hire you over other candidates?",
      answer: "Summarize your unique value proposition. Highlight specific skills, experiences, and qualities that make you the ideal fit. Be confident but not arrogant, and focus on what you can contribute."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                60Jobs.in
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/index.tsx" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">All Jobs</a>
              <a href="/interviewquestions.tsx" className="text-blue-600 font-medium border-b-2 border-blue-600">Interview Questions</a>
              <a href="/pricing.tsx" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Subscribe
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-colors">All Jobs</a>
                <a href="/interviewquestions" className="text-blue-600 font-medium px-4 py-2 border-l-4 border-blue-600">Interview Questions</a>
                <a href="pricing" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-colors">Pricing</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <MessageCircle className="h-12 w-12 text-blue-200" />
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Interview</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive collection of interview questions with detailed answers to help you land your dream job
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">50+ Questions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">Expert Answers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-white shadow-lg border-t-4 border-blue-600 -mt-12 relative z-10 mx-4 sm:mx-8 lg:mx-16 rounded-xl">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated with Latest Questions</h3>
            <p className="text-gray-600">Get weekly interview insights delivered to your inbox</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Subscribe
              </button>
            </div>
            {isSubscribed && (
              <p className="text-green-600 text-center mt-3 font-medium">✅ Successfully subscribed!</p>
            )}
          </div>
        </div>
      </div>

      {/* Interview Questions Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interview Questions & Answers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully curated questions with detailed, actionable answers to help you succeed in your next interview
          </p>
        </div>

        <div className="grid gap-6">
          {interviewQuestions.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      {item.question}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {openQuestions[index] ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              
              {openQuestions[index] && (
                <div className="px-6 pb-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 ml-12">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Ace Your Interview?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for more interview tips, job alerts, and career guidance
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Get Premium Access
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">60Jobs.in</span>
            </div>
            <p className="text-gray-400 mb-6">Your gateway to career success</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 text-sm mt-6">© 2025 60Jobs.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InterviewQuestionsPage;
