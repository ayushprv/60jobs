import React, { useState } from 'react';
import { Check, Menu, X, Star, Zap, Crown, Gift } from 'lucide-react';

const PricingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pricingPlans = [
    {
      name: 'Weekly',
      price: 25,
      duration: '/week',
      icon: <Gift className="w-6 h-6" />,
      color: 'from-green-400 to-blue-500',
      features: [
        'Daily job alerts',
        'Basic interview questions',
        'Email support',
        'Mobile notifications'
      ],
      popular: false
    },
    {
      name: 'Fortnightly',
      price: 45,
      duration: '/2 weeks',
      icon: <Star className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-500',
      features: [
        'Bi-weekly premium alerts',
        'Advanced interview prep',
        'Priority support',
        'Job application tracking',
        'Resume tips'
      ],
      popular: false
    },
    {
      name: 'Monthly',
      price: 89,
      duration: '/month',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-400 to-red-500',
      features: [
        'Daily premium job alerts',
        'Complete interview database',
        'Live chat support',
        'Salary insights',
        'Company reviews',
        'Career guidance'
      ],
      popular: true
    },
    {
      name: 'Quarterly',
      price: 239,
      duration: '/3 months',
      icon: <Crown className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      features: [
        'Everything in Monthly',
        'One-on-one career coaching',
        'Resume review service',
        'Mock interview sessions',
        'Industry insider tips',
        'Networking opportunities',
        'Job guarantee program'
      ],
      popular: false
    }
  ];

  const handleSubscribe = (plan) => {
    // This will integrate with Razorpay later
    alert(`Subscribing to ${plan.name} plan for ₹${plan.price}${plan.duration}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                60Jobs.in
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="index.tsx" className="text-gray-300 hover:text-white transition-colors duration-200">All Jobs</a>
                <a href="/interviewquestions.tsx" className="text-gray-300 hover:text-white transition-colors duration-200">Interview Questions</a>
                <a href="pricing.tsx" className="text-white font-semibold border-b-2 border-purple-400">Pricing</a>
              </div>
            </div>

            {/* Subscribe Button - Always visible */}
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-white"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-lg border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">All Jobs</a>
              <a href="/interviewquestions" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Interview Questions</a>
              <a href="/pricing" className="text-white font-semibold block px-3 py-2 text-base border-l-4 border-purple-400">Pricing</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-cyan-800/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Career Path</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get exclusive access to premium job opportunities, interview insights, and career guidance. 
              Choose the plan that fits your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${plan.color} mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-2">
                  ₹{plan.price}
                  <span className="text-lg font-normal text-gray-300">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan)}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black/20 backdrop-blur-lg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose 60Jobs.in?</h2>
            <p className="text-gray-300 text-lg">Premium features that accelerate your career growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Alerts</h3>
              <p className="text-gray-300">Get notified immediately when jobs matching your profile are posted</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-300">Access to industry experts and personalized career advice</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Access</h3>
              <p className="text-gray-300">Exclusive job opportunities not available on other platforms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 60Jobs.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
