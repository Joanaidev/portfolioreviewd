import React, { useState, useEffect } from 'react';
import { ChevronRight, Target, TrendingUp, Brain, Users, MessageSquare, Download, ExternalLink, Heart, Mail, MapPin, Zap, Shield, Cog, LineChart, Award, Clock, Check, Activity, Linkedin, Globe, Settings, Send, Camera, GraduationCap, Building, Briefcase, Star, Code, Sparkles, ArrowRight, Play, Pause, AlertTriangle, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

const JoanPortfolio = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [automationCount, setAutomationCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(847);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    // Automation counter animation
    const timer = setInterval(() => {
      setAutomationCount(prev => prev < 300 ? prev + 5 : 300);
    }, 50);
    
    // Update time every minute
    const timeTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Simulate visitor counter
    const visitorTimer = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(timeTimer);
      clearInterval(visitorTimer);
    };
  }, []);

  const expertisePillars = [
    {
      title: "Intelligent Automation & AI Operations",
      icon: React.createElement(Brain, { className: "w-8 h-8" }),
      description: "Building predictive systems that surface problems 3-4 weeks before impact",
      achievements: ["300+ AI automations deployed", "98% accuracy in risk prediction", "40% reduction in escalations"]
    },
    {
      title: "Program & Workflow Optimization",
      icon: React.createElement(Cog, { className: "w-8 h-8" }),
      description: "Transforming reactive firefighting into proactive problem-solving",
      achievements: ["80% reduction in manual processes", "35% faster time-to-value", "Cross-functional alignment across 8+ teams"]
    },
    {
      title: "Scalable Customer Success Systems", 
      icon: React.createElement(TrendingUp, { className: "w-8 h-8" }),
      description: "Engineering customer journeys that drive 40-60% MRR growth",
      achievements: ["94% customer satisfaction", "60% MRR growth achieved", "30+ point retention improvements"]
    },
    {
      title: "Cross-Functional Team Leadership",
      icon: React.createElement(Users, { className: "w-8 h-8" }),
      description: "Leading distributed teams while fostering inclusive, high-performing cultures",
      achievements: ["8-person global team leadership", "Mentor to 6+ direct reports", "Inclusive environment builder"]
    },
    {
      title: "Risk Management & Strategic Planning",
      icon: React.createElement(Shield, { className: "w-8 h-8" }),
      description: "Leveraging Master's in Risk Management for enterprise-grade operational frameworks",
      achievements: ["Early warning systems", "100% compliance maintenance", "Strategic risk mitigation"]
    }
  ];

  const caseStudies = [
    {
      title: "Bitwave: Enterprise Crypto Operations at Scale",
      problem: "Managing $3M+ crypto portfolios across 200+ enterprise clients with overwhelming support escalations (40+ daily), manual reconciliation processes taking 8+ hours per portfolio, reactive incident management causing 15-minute average response times, and compliance risks across multiple jurisdictions causing operational chaos and customer dissatisfaction.",
      action: "Engineered comprehensive AI operations platform: (1) GPT-4 integration for intelligent ticket routing and automated responses, (2) Machine learning algorithms analyzing 500+ transaction patterns for anomaly detection, (3) Automated customer health scoring based on 15+ behavioral indicators including usage frequency, support tickets, and engagement metrics, (4) Predictive analytics for regulatory compliance across US/EU/APAC markets, (5) Enterprise workflow orchestration with Slack/Teams integration, (6) Real-time dashboards for executive visibility.",
      result: "Achieved 40% reduction in customer escalations (from 40+ to <25 daily), 98% prediction accuracy for operational issues detected 3-4 weeks in advance, 35% faster client onboarding (from 6 weeks to 4 weeks), $2M+ annual cost savings through automation, zero-downtime platform serving billions in transaction volume with proactive issue resolution before customer impact.",
      metrics: ["300+ Automations", "98% Prediction Accuracy", "$2M+ Cost Savings", "40% ↓ Escalations", "200+ Enterprise Clients"],
      technologies: ["GPT-4 Integration", "Machine Learning", "Slack/Teams APIs", "Blockchain Analytics", "Predictive Modeling", "Real-time Dashboards"],
      challenges: ["Complex crypto regulations across jurisdictions", "High-stakes financial data requiring 99.9% accuracy", "24/7 uptime requirements", "Multi-jurisdiction compliance", "Integration with 15+ blockchain networks"],
      teamStructure: "Led 8-person global operations team across 4 time zones including AI specialists, customer success managers, and compliance analysts",
      timeframe: "Ongoing transformation (18 months)",
      scope: "Enterprise crypto accounting platform serving institutional clients",
      businessImpact: "$3M+ portfolio management, 200+ enterprise clients, billions in transaction volume",
      icon: Zap,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Lato Consulting: SaaS Growth Operations Excellence",
      problem: "Series A-B SaaS companies hitting revenue plateaus with 60%+ manual workflows, $15K+ customer acquisition costs, 25% annual churn rates, inability to scale operations without proportional headcount increases, and lack of expansion revenue identification across multiple verticals including fintech, healthtech, and edtech.",
      action: "Architected end-to-end automation ecosystems: (1) Churn prediction models using customer behavior analytics (login frequency, feature usage, support interactions), (2) Expansion revenue identification through usage pattern analysis and account scoring, (3) Automated onboarding sequences with 12-step nurture campaigns, (4) Intelligent lead scoring combining demographic and behavioral data, (5) Cross-functional workflow optimization connecting sales, marketing, and customer success teams, (6) Revenue forecasting with 90%+ accuracy.",
      result: "Delivered 40-60% MRR growth across client portfolio (average increase from $500K to $800K ARR), 50% reduction in manual operational overhead (from 40 hours/week to 20 hours/week per team), 30+ percentage point retention improvements (from 75% to 95%+ retention), automated expansion revenue programs generating $500K+ additional ARR per client, scalable growth without proportional hiring.",
      metrics: ["60% ↑ MRR Growth", "50% ↓ Manual Work", "$500K+ ARR Impact", "30+ Point Retention", "5+ Client Success Stories"],
      technologies: ["Salesforce Automation", "HubSpot Integration", "Zapier Workflows", "Customer.io", "Mixpanel Analytics", "Amplitude", "Segment"],
      challenges: ["Multi-client customization requirements", "Complex integration architectures", "Change management across organizations", "ROI measurement and attribution", "Cross-functional team alignment"],
      teamStructure: "Cross-functional collaboration with 5+ client teams, coordinating with CEOs, VP Sales, VP Marketing, and Customer Success leaders",
      timeframe: "10-month intensive engagement per client",
      scope: "Multi-client SaaS growth operations (fintech, healthtech, edtech)",
      businessImpact: "Combined client portfolio growth exceeding $2.5M ARR increase",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Translayte: Global B2B Platform Transformation",
      problem: "International B2B SaaS platform suffering from fragmented customer experience across 12+ markets, 6-week average onboarding times causing 30% drop-off rate, reactive support model with 24-hour response times, declining feature adoption rates (35% utilization), and lack of product feedback loops in competitive translation technology space serving Fortune 500 companies.",
      action: "Built comprehensive customer lifecycle management system: (1) Automated multi-language onboarding flows with country-specific customization, (2) AI-powered health scoring considering usage patterns, engagement metrics, and market-specific behaviors, (3) Proactive intervention protocols with automated triggers, (4) Cross-cultural support optimization with 24/7 coverage, (5) Product feedback loop automation connecting customer insights to product roadmap, (6) Global account management workflows.",
      result: "Achieved 94% customer satisfaction scores (up from 78%), reduced onboarding time to 2.5 weeks (58% improvement), increased feature adoption by 65% (from 35% to 58% utilization), established automated product feedback collection driving 12+ feature improvements per quarter, enabled global scale operations supporting Fortune 500 expansion, 40% reduction in support response times.",
      metrics: ["94% Satisfaction", "58% ↓ Onboarding Time", "65% ↑ Feature Adoption", "12+ Features/Quarter", "Fortune 500 Scale"],
      technologies: ["Intercom Automation", "Amplitude Analytics", "Multi-language Workflows", "AI Health Scoring", "Global CRM", "Zendesk", "Salesforce"],
      challenges: ["Cross-cultural operations across 12+ markets", "Multiple time zones (24/7 coverage)", "Language barriers and localization", "Complex B2B workflows", "Fortune 500 compliance requirements"],
      teamStructure: "Managed international operations team across 6 time zones including regional customer success managers, technical specialists, and cultural liaisons",
      timeframe: "4+ years progressive impact and optimization",
      scope: "Global B2B SaaS operations serving Fortune 500 across 12+ markets",
      businessImpact: "Supported platform growth from $5M to $20M ARR with improved unit economics",
      icon: Globe,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Construction Procurement: Operations Excellence Foundation",
      problem: "Complex construction supply chain management involving concrete, scaffolding, and specialized equipment procurement with unpredictable delivery timelines (30% delays), vendor reliability issues causing project delays, cost optimization challenges with 15%+ budget overruns, and quality control inconsistencies in high-pressure project environments serving major infrastructure projects.",
      action: "Developed systematic procurement processes: (1) Vendor performance scoring system tracking delivery times, quality metrics, and cost competitiveness, (2) Predictive inventory management using historical data and project timeline analysis, (3) Cost optimization algorithms comparing multiple suppliers and identifying bulk purchase opportunities, (4) Quality assurance protocols with multi-stage inspection processes, (5) Risk mitigation strategies for supply chain disruptions including backup vendor networks.",
      result: "Consistently delivered projects on time and under budget through strategic procurement optimization, established vendor relationship management system improving delivery reliability by 40%, developed early warning systems for supply chain risks reducing project delays by 60%, created reusable processes adopted across multiple construction projects, achieved 10%+ cost savings through strategic sourcing.",
      metrics: ["On-Time Delivery", "Under Budget (10%+ Savings)", "40% ↑ Vendor Reliability", "60% ↓ Project Delays", "Systematic Process Creation"],
      technologies: ["Supply Chain Management Systems", "Vendor Performance Databases", "Cost Analysis Tools", "Project Management Software", "Risk Assessment Frameworks"],
      challenges: ["Unpredictable supply chains and weather dependencies", "Quality control across multiple vendors", "Budget constraints and cost pressure", "Timeline pressure from project stakeholders", "Regulatory compliance requirements"],
      teamStructure: "Coordinated with project managers, general contractors, specialized suppliers, and quality control inspectors",
      timeframe: "4 years in construction industry across multiple major projects",
      scope: "Large-scale construction procurement for infrastructure and commercial projects",
      businessImpact: "Managed procurement for projects totaling $50M+ in construction value",
      icon: Building2,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Lagos Market Research: Customer Intelligence Foundation",
      problem: "Traditional hardware sales approaches in Nigerian retail market lacked deep customer insights, with retailers making purchasing decisions based on limited product understanding, unclear ROI for technology investments, and sales cycles extending 6+ months due to trust and relationship gaps in competitive West African technology market.",
      action: "Pioneered direct customer research methodology: (1) Door-to-door interviews with iPad-based data collection system, (2) Comprehensive market analysis for hardware needs across different business segments, (3) Relationship building with decision makers at major retailers through consultative selling approach, (4) Development of customer-centric sales presentations with ROI calculations, (5) Creation of customer database tracking preferences, buying patterns, and decision-making processes.",
      result: "Successfully secured hardware contracts with Shoprite, Adidas, and other major Nigerian retailers totaling $200K+ in sales, established sustainable B2B relationships leading to repeat business, developed market intelligence database used for strategic planning, created foundation for customer-first business philosophy that drives current AI operations approach, achieved 40%+ conversion rate from prospect to customer.",
      metrics: ["$200K+ Sales Revenue", "Major Retail Partnerships", "40%+ Conversion Rate", "Customer-First Foundation", "Market Intelligence Database"],
      technologies: ["iPad Data Collection", "Customer Relationship Databases", "Market Analysis Tools", "Sales Presentation Software", "ROI Calculation Models"],
      challenges: ["Cultural navigation in diverse Nigerian market", "Trust building in technology-skeptical environment", "Complex retail decision hierarchies", "Technology adoption barriers", "Economic volatility and currency fluctuations"],
      teamStructure: "Individual contributor building market presence with support from regional distributors and technical specialists",
      timeframe: "Early career foundation (2+ years intensive market development)",
      scope: "Nigerian retail hardware market across Lagos, Abuja, and Port Harcourt",
      businessImpact: "Established market presence for hardware distribution company, contributing to 25%+ regional growth",
      icon: Target,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "AI Operations Innovation: Predictive Excellence Framework",
      problem: "Industry-wide reactive operations model causing unnecessary escalations, customer churn, and operational inefficiencies across technology companies, with lack of predictive capabilities, limited proactive problem-solving approaches, and inability to scale operations efficiently while maintaining quality and customer satisfaction.",
      action: "Developed proprietary predictive operations framework: (1) Machine learning models for pattern recognition analyzing customer behavior, system performance, and operational metrics, (2) Early warning systems for customer health combining usage data, support interactions, and engagement signals, (3) Automated intervention protocols with escalation paths and success tracking, (4) Cross-platform integration strategies connecting CRM, support, product analytics, and communication tools, (5) Scalable methodology documentation for replication across industries.",
      result: "Created reusable methodology that transforms reactive operations into predictive excellence, enabling 3-4 week advance problem identification with 85%+ accuracy, systematic approach to operational optimization reducing manual work by 50%+, scalable framework successfully implemented across 5+ organizations, measurable improvement in customer satisfaction and operational efficiency metrics.",
      metrics: ["3-4 Week Prediction Window", "85%+ Prediction Accuracy", "50%+ Manual Work Reduction", "5+ Organizations Implemented", "Cross-Industry Application"],
      technologies: ["Machine Learning Algorithms", "Predictive Analytics", "Cross-Platform APIs", "Automation Frameworks", "Health Scoring Systems", "Data Pipeline Architecture"],
      challenges: ["Model accuracy and false positive reduction", "Cross-platform integration complexity", "Scalability requirements across different company sizes", "Industry adaptation and customization", "Change management and adoption"],
      teamStructure: "R&D collaboration with global tech teams, data scientists, and operations leaders across multiple organizations",
      timeframe: "Ongoing innovation and refinement (3+ years of development)",
      scope: "Universal operations framework applicable across SaaS, fintech, and enterprise software",
      businessImpact: "Framework adopted by companies managing $100M+ combined ARR with measurable operational improvements",
      icon: Brain,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const realRecommendations = [
    {
      quote: "Joan isn't just a manager, she's an inspiration. Her ability to guide, support and uplift everyone around her is unmatched. She brings clarity to complex problems, always makes time for each team member and creates a positive, high-performing work culture that makes even the toughest days feel manageable.",
      author: "Ahtisham Hussain",
      title: "Solutions Analyst at Bitwave",
      relationship: "Direct Report",
      initials: "AH",
      color: "from-pink-500 to-rose-500"
    },
    {
      quote: "Joan is one of the most thoughtful and reliable people I've worked with. She's great at simplifying complex problems and building systems that actually work across teams. She's quick to spot gaps, always asks smart questions, and finds ways to make things more efficient without overcomplicating.",
      author: "Teslim S. (MBA, PMP, AWS-SAA)",
      title: "Product Leader | AI & Cloud Innovator", 
      relationship: "Senior Colleague",
      initials: "TS",
      color: "from-blue-500 to-purple-500"
    },
    {
      quote: "What immediately stood out to me was how she created a friendly, inclusive environment where everyone feels comfortable asking questions, sharing ideas, and learning from each other. She leads by example in every task, making sure we're aligned, motivated, and clear on our goals.",
      author: "Riaz Ali",
      title: "AI | On-Chain Data Analysis | Crypto Expert",
      relationship: "Direct Report",
      initials: "RA",
      color: "from-emerald-500 to-teal-500"
    },
    {
      quote: "She is brilliant, kind, and a natural motivator who always brings out the best in her team. She listens with empathy, supports everyone wholeheartedly, and creates a positive, collaborative environment. I've learned so much under her leadership.",
      author: "Lovish Malhotra", 
      title: "Customer Support Specialist at Bitwave",
      relationship: "Direct Report",
      initials: "LM",
      color: "from-orange-500 to-red-500"
    },
    {
      quote: "Joan consistently provided insightful guidance and constructive feedback that significantly contributed to my development in customer success and project management. She genuinely invests in their team's growth.",
      author: "Jatin Chitkara",
      title: "Solutions @ Bitwave | Certified Blockchain Professional",
      relationship: "Direct Report",
      initials: "JC",
      color: "from-indigo-500 to-purple-500"
    },
    {
      quote: "She is goal-oriented, focused, a team player and quick to adapt to change. Given her exceptional skills and 'can do' attitude, Joan would be an asset to any organization.",
      author: "Taibat Oluwole",
      title: "Senior Business Analyst",
      relationship: "Team Member",
      initials: "TO",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const handleAIChat = (message) => {
    // Smart portfolio-based responses using all content from the sections
    const responses = {
      "leadership": "I believe in servant leadership - creating environments where teams thrive and feel psychologically safe to innovate. My approach combines empathy with high standards. As Ahtisham said, I try to be 'the heart of the team' while driving exceptional results.",
      "automation": "I've built 300+ automations at Bitwave, but it's not about the technology - it's about solving human problems. My predictive systems surface issues 3-4 weeks early because I understand that prevention is always better than reaction. Every automation I build serves a strategic purpose.",
      "strategy": "My strategic approach is rooted in my Master's in Risk Management and field experience. I see patterns others miss because I've walked the streets of Lagos doing user research and optimized construction procurement. Strategy without execution is just planning - I build systems that work.",
      "team": "I currently lead an 8-person global team and have mentored 6+ direct reports. My philosophy is simple: make people better at their jobs. When Riaz says I create inclusive environments, that's intentional - diverse perspectives drive better solutions.",
      "results": "Numbers tell stories, but context matters. That 40% escalation reduction? It represents thousands of hours saved and happier customers. The 60% MRR growth for clients? That's sustainable business transformation, not just tactics.",
      "vision": "I'm building the future of operations - where AI amplifies human potential, where problems solve themselves before anyone notices, where growth feels effortless. That's what 'invisible operations' means to me.",
      "bitwave": "At Bitwave, I'm transforming how enterprise crypto accounting operates. With 200+ clients managing $3M+ portfolios, precision isn't optional. My systems predict issues weeks before they impact customers, maintaining 98% accuracy while serving billions in transaction volume.",
      "mom": "Being a mom of two has taught me patience, anticipation, and the art of graceful multitasking. If you can handle a toddler tantrum during a board call, you can definitely handle a system outage! My daughters inspire everything I do.",
      "location": "I'm based in Canada and work remotely with global teams. This allows me to serve clients across time zones while maintaining work-life balance as a mom of two. Remote leadership has taught me to be more intentional about communication and building inclusive team cultures.",
      "canada": "I'm based in Canada and work remotely with global teams. This allows me to serve clients across time zones while maintaining work-life balance as a mom of two. Remote leadership has taught me to be more intentional about communication and building inclusive team cultures.",
      "where": "I'm currently based in Canada, leading global operations remotely. This geographic flexibility allows me to work with teams worldwide while being present for my family.",
      "remote": "I lead remote teams from Canada, which has taught me to build systems and processes that work across time zones. Remote leadership requires different skills - more intentional communication, stronger documentation, and trust-based management.",
      "background": "I started by selling hardware to major retailers like Shoprite and Adidas in Lagos, then moved into construction procurement for 4 years. Now I'm in Canada, leading AI operations at Bitwave. Each step taught me something crucial about understanding customers and building systems that work.",
      "education": "I have a Master's in Risk Management from the University of Lagos. This background helps me see patterns and build early warning systems that prevent problems before they impact customers.",
      "contact": "You can reach me at alongejoan@gmail.com or connect with me on LinkedIn at linkedin.com/in/joanalonge. I'm always open to discussing operational transformation and AI automation strategies.",
      "experience": "I have 15+ years of experience across 6 industries. Started selling computers to Shoprite and Adidas in Lagos, did market research door-to-door, worked 4 years in construction procurement, and now lead AI operations at Bitwave with 300+ automations deployed.",
      "lato": "At Lato Consulting, I architected comprehensive automation ecosystems for Series A-B SaaS clients, achieving 40-60% MRR growth and 50% reduction in manual work across multiple client portfolios.",
      "translayte": "At Translayte, I built comprehensive customer lifecycle management systems with automated workflows and health scoring, achieving 94% customer satisfaction and 65% increase in feature adoption.",
      "achievements": "Key achievements include: 300+ AI automations deployed, 98% prediction accuracy, 40% reduction in escalations, $2M+ cost savings, leading 8-person global team, and driving 60% MRR growth for clients.",
      "skills": "My core expertise spans 5 pillars: Intelligent Automation & AI Operations, Program & Workflow Optimization, Scalable Customer Success Systems, Cross-Functional Team Leadership, and Risk Management & Strategic Planning.",
      "projects": "I've led 6 major transformative projects: Bitwave's crypto operations (300+ automations, $2M+ savings), Lato's SaaS growth (60% MRR increase), Translayte's global platform (94% satisfaction), construction procurement (60% delay reduction), Lagos market research (40% conversion rate), and AI operations innovation framework (85% prediction accuracy).",
      "construction": "In construction procurement, I managed $50M+ in project value, developing vendor performance systems that improved delivery reliability by 40% and reduced project delays by 60%. This taught me systematic process optimization under pressure.",
      "frameworks": "I've developed a proprietary AI Operations Framework that enables 3-4 week advance problem prediction with 85%+ accuracy. It's been successfully implemented across 5+ organizations managing $100M+ combined ARR.",
      "technologies": "I work with GPT-4, machine learning algorithms, Salesforce, HubSpot, Slack/Teams APIs, blockchain analytics, predictive modeling, and cross-platform integrations. My tech stack focuses on automation and intelligence.",
      "challenges": "I've overcome complex crypto regulations, 24/7 uptime requirements, cross-cultural operations across 12+ markets, supply chain unpredictability, and change management across organizations. Each challenge strengthened my problem-solving approach."
    };

    // Smart keyword matching with multiple variations
    const messageLower = message.toLowerCase();
    let matchedResponse = null;

    // Check for specific topics with priority order
    if (messageLower.includes('where') || messageLower.includes('location') || messageLower.includes('based') || messageLower.includes('live')) {
      matchedResponse = responses.location;
    } else if (messageLower.includes('canada') || messageLower.includes('canadian')) {
      matchedResponse = responses.canada;
    } else if (messageLower.includes('experience') || messageLower.includes('years')) {
      matchedResponse = responses.experience;
    } else if (messageLower.includes('achievement') || messageLower.includes('accomplish')) {
      matchedResponse = responses.achievements;
    } else if (messageLower.includes('skill') || messageLower.includes('expertise') || messageLower.includes('pillar')) {
      matchedResponse = responses.skills;
    } else if (messageLower.includes('project') || messageLower.includes('work') || messageLower.includes('portfolio')) {
      matchedResponse = responses.projects;
    } else if (messageLower.includes('construction') || messageLower.includes('procurement')) {
      matchedResponse = responses.construction;
    } else if (messageLower.includes('framework') || messageLower.includes('methodology') || messageLower.includes('innovation')) {
      matchedResponse = responses.frameworks;
    } else if (messageLower.includes('technolog') || messageLower.includes('tools') || messageLower.includes('platform')) {
      matchedResponse = responses.technologies;
    } else if (messageLower.includes('challenge') || messageLower.includes('difficult') || messageLower.includes('overcome')) {
      matchedResponse = responses.challenges;
    } else if (messageLower.includes('lato')) {
      matchedResponse = responses.lato;
    } else if (messageLower.includes('translayte')) {
      matchedResponse = responses.translayte;
    } else if (messageLower.includes('remote') || messageLower.includes('work from')) {
      matchedResponse = responses.remote;
    } else if (messageLower.includes('contact') || messageLower.includes('reach') || messageLower.includes('email')) {
      matchedResponse = responses.contact;
    } else if (messageLower.includes('education') || messageLower.includes('degree') || messageLower.includes('university')) {
      matchedResponse = responses.education;
    } else if (messageLower.includes('background') || messageLower.includes('story') || messageLower.includes('journey')) {
      matchedResponse = responses.background;
    } else {
      // Original keyword matching for other topics
      const keyword = Object.keys(responses).find(key => 
        messageLower.includes(key)
      );
      matchedResponse = responses[keyword];
    }
    
    return matchedResponse || "I'm passionate about transforming operational chaos into predictive excellence. Ask me about my leadership philosophy, automation strategy, team building, Bitwave achievements, where I'm located, my experience, or my vision for the future of operations. What interests you most?";
  };

  const sendMessage = () => {
    if (!userMessage.trim()) return;
    
    const userMsg = userMessage;
    setUserMessage('');
    
    // Get instant response from local portfolio data
    const aiResponse = handleAIChat(userMsg);
    
    const newMessages = [
      ...chatMessages,
      { type: 'user', content: userMsg },
      { type: 'ai', content: aiResponse }
    ];
    
    setChatMessages(newMessages);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 font-['Inter']">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Joan Alonge
              </h1>
              <p className="text-sm text-gray-500 font-medium mt-1">AI Operations Leader • Program Manager • Team Builder</p>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'about', label: 'About' },
                { key: 'expertise', label: 'Expertise' },
                { key: 'impact', label: 'Impact Stories' },
                { key: 'leadership', label: 'Leadership' },
                { key: 'connect', label: 'Connect' }
              ].map((item) => (
                <button 
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={`${
                    activeSection === item.key 
                      ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600' 
                      : 'text-gray-600 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-200'
                  } font-medium transition-all duration-200 pb-1`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-slide-up">
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Operations Leader
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Delivering $2M+ annual cost savings through 300+ AI automations. Leading 8-person global teams that drive 60% MRR growth for enterprise clients with 98% prediction accuracy.
              </p>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl mb-10">
                <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  Professional Value Proposition
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5"></div>
                    <span className="text-gray-700"><strong className="text-gray-900">Revenue Impact:</strong> Delivered 60% MRR growth across multiple $500K+ ARR clients</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5"></div>
                    <span className="text-gray-700"><strong className="text-gray-900">Cost Optimization:</strong> $2M+ annual savings through predictive AI systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                    <span className="text-gray-700"><strong className="text-gray-900">Team Leadership:</strong> 8-person global team across 4 time zones</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2.5"></div>
                    <span className="text-gray-700"><strong className="text-gray-900">Enterprise Scale:</strong> 200+ clients, $3M+ portfolio value</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="mailto:alongejoan@gmail.com"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" /> Let's Connect
                </a>
                <a 
                  href="https://linkedin.com/in/joanalonge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-indigo-600 border-2 border-indigo-200 px-8 py-4 rounded-xl font-semibold text-center hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 inline-flex items-center justify-center gap-3"
                >
                  <ExternalLink className="w-5 h-5" /> LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {/* Impact Summary Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">$2M+</div>
                  <div className="text-sm text-gray-600 font-medium">Annual Cost Savings</div>
                  <div className="text-xs text-gray-400 mt-2">Enterprise Impact</div>
                </div>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">$3M+</div>
                  <div className="text-sm text-gray-600 font-medium">Portfolio Value</div>
                  <div className="text-xs text-gray-400 mt-2">Under Management</div>
                </div>
                <div className="metric-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">8</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                  <div className="text-xs text-gray-500 mt-1">Global Leadership</div>
                </div>
                <div className="metric-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{automationCount}</div>
                  <div className="text-sm text-gray-600">AI Automations</div>
                  <div className="text-xs text-gray-500 mt-1">Deployed</div>
                </div>
              </div>
              
              {/* Live Metrics */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-100 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-pink-500" />
                  Live Metrics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Profile Views Today</span>
                    <span className="font-semibold text-gray-900">{visitorCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Time (EST)</span>
                    <span className="font-mono text-sm text-gray-900">
                      {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">AI Prediction Accuracy</span>
                    <span className="font-semibold text-emerald-600">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Me Section */}
      {activeSection === 'about' && (
        <section className="bg-white/50 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The Woman Behind the Automation Magic</h2>
              <p className="text-xl text-gray-600">5 years of AI operations leadership with measurable enterprise impact</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {/* Professional story with timeline */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Enterprise AI Operations Leadership</h3>
                      <p className="text-gray-600 mb-4">Currently leading AI operations at Bitwave, managing 300+ automations across crypto accounting operations serving 200+ enterprise clients. Specialized in predictive systems that solve problems 3-4 weeks before they impact customers.</p>
                      <div className="text-sm text-gray-500">Early Career Foundation</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Construction & Strategic Procurement</h3>
                      <p className="text-gray-600 mb-4">Spent 4 years in construction procurement, managing concrete, scaffolding, and complex supply chains. This experience taught me operational excellence and the importance of predictive planning in high-stakes environments.</p>
                      <div className="text-sm text-gray-500">Operational Excellence Development</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">AI Operations Transformation</h3>
                      <p className="text-gray-600 mb-4">Today, I've built 300+ AI automations at Bitwave, serving 200+ enterprise clients with $3M+ portfolios. My systems predict issues 3-4 weeks before they impact customers, maintaining 98% accuracy while processing billions in transactions.</p>
                      <div className="text-sm text-gray-500">Current Impact at Scale</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Personal highlights */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    Career Progression (Last 5 Years)
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">AI Operations Leader - Bitwave</div>
                        <div className="text-sm text-gray-600">300+ automations, $2M+ cost savings</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Growth Operations - Lato Consulting</div>
                        <div className="text-sm text-gray-600">60% MRR growth for SaaS clients</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Globe className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Global Operations - Translayte</div>
                        <div className="text-sm text-gray-600">94% satisfaction across 12+ markets</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-500" />
                    Key Achievements Distribution
                  </h3>
                  
                  {/* Simple Bar Chart for Achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Automations Built</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <span className="text-sm font-medium">300+</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Cost Savings</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                        <span className="text-sm font-medium">$2M+</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Team Members Led</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '50%'}}></div>
                        </div>
                        <span className="text-sm font-medium">8+</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Enterprise Clients</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-pink-500 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <span className="text-sm font-medium">200+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Prediction Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">60%</div>
                    <div className="text-sm text-gray-600">MRR Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Expertise Section */}
      {activeSection === 'expertise' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Expertise</h2>
              <p className="text-xl text-gray-600">Five Core Pillars of Operational Excellence</p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {expertisePillars.map((pillar, index) => (
                <div key={index} className="expertise-pillar bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{pillar.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{pillar.description}</p>
                  <div className="space-y-2">
                    {pillar.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impact Stories Section */}
      {activeSection === 'impact' && (
        <section className="bg-white/50 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Impact Stories</h2>
              <p className="text-xl text-gray-600">Transformations that drive measurable business outcomes</p>
            </div>
            
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-pink-100">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center`}>
                          <study.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
                          <div className="text-sm text-gray-500">{study.timeframe} • {study.scope}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Problem & Challenge</h4>
                          <p className="text-gray-600 mb-3">{study.problem}</p>
                          {study.businessImpact && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                              <div className="text-sm font-medium text-red-800">Business Impact</div>
                              <div className="text-sm text-red-700">{study.businessImpact}</div>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Strategic Action</h4>
                          <p className="text-gray-600 mb-3">{study.action}</p>
                          {study.teamStructure && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <div className="text-sm font-medium text-blue-800">Team Leadership</div>
                              <div className="text-sm text-blue-700">{study.teamStructure}</div>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Measurable Results</h4>
                          <p className="text-gray-600">{study.result}</p>
                        </div>
                        
                        {study.technologies && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Technologies & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, techIdx) => (
                                <span key={techIdx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {study.challenges && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Challenges Overcome</h4>
                            <div className="space-y-1">
                              {study.challenges.map((challenge, chIdx) => (
                                <div key={chIdx} className="flex items-start gap-2">
                                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">{challenge}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Key Metrics Cards */}
                      <div className="space-y-3">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className={`bg-gradient-to-r ${study.color.replace('500', '50')} rounded-lg p-4 border border-gray-200`}>
                            <div className="text-center">
                              <div className={`text-2xl font-bold ${study.color.includes('pink') ? 'text-pink-600' : study.color.includes('emerald') ? 'text-emerald-600' : study.color.includes('blue') ? 'text-blue-600' : study.color.includes('orange') ? 'text-orange-600' : 'text-purple-600'} mb-1`}>
                                {metric.split(' ')[0]}
                              </div>
                              <div className="text-sm text-gray-600">{metric.split(' ').slice(1).join(' ')}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* ROI Visualization */}
                      {(study.title.includes('Bitwave') || study.title.includes('Lato')) && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm">ROI Timeline</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Month 1-3</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-yellow-500 h-1 rounded-full" style={{width: '30%'}}></div>
                                </div>
                                <span className="text-gray-800">Setup</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Month 4-6</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-orange-500 h-1 rounded-full" style={{width: '70%'}}></div>
                                </div>
                                <span className="text-gray-800">Growth</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Month 6+</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-green-500 h-1 rounded-full" style={{width: '100%'}}></div>
                                </div>
                                <span className="text-gray-800">Scale</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Impact Distribution for Global Projects */}
                      {study.title.includes('Translayte') && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm">Global Impact Distribution</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">North America</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-blue-500 h-1 rounded-full" style={{width: '40%'}}></div>
                                </div>
                                <span className="text-gray-800">40%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Europe</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-green-500 h-1 rounded-full" style={{width: '35%'}}></div>
                                </div>
                                <span className="text-gray-800">35%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">APAC</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-purple-500 h-1 rounded-full" style={{width: '25%'}}></div>
                                </div>
                                <span className="text-gray-800">25%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Efficiency Gains Chart for Operations Projects */}
                      {(study.title.includes('Construction') || study.title.includes('AI Operations')) && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm">Efficiency Improvements</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Process Speed</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-emerald-500 h-1 rounded-full" style={{width: '60%'}}></div>
                                </div>
                                <span className="text-gray-800">+60%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Error Reduction</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-red-500 h-1 rounded-full" style={{width: '80%'}}></div>
                                </div>
                                <span className="text-gray-800">-80%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Cost Savings</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-blue-500 h-1 rounded-full" style={{width: '50%'}}></div>
                                </div>
                                <span className="text-gray-800">50%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Leadership Section */}
      {activeSection === 'leadership' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Through Their Eyes</h2>
              <p className="text-xl text-gray-600">What my team and colleagues say about working with me</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {realRecommendations.map((rec, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${rec.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-semibold">{rec.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{rec.author}</div>
                      <div className="text-sm text-gray-600">{rec.title}</div>
                      <div className={`text-xs ${rec.relationship.includes('Direct') ? 'text-pink-600 bg-pink-50' : 'text-blue-600 bg-blue-50'} px-2 py-1 rounded-full inline-block mt-1`}>
                        {rec.relationship}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic">
                    "{rec.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
            
            {/* Team Consensus */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Consensus</h3>
                <blockquote className="text-xl text-gray-700 italic">
                  "Rare combination of empathy, excellence and impact"
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Connect Section */}
      {activeSection === 'connect' && (
        <section className="bg-white/50 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Build Something Extraordinary</h2>
              <p className="text-xl text-gray-600">Ready to transform your operations with AI-powered excellence?</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* AI Chat Interface */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-pink-500 animate-pulse-glow" />
                  Chat with Joan's AI
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto mb-4">
                  {chatMessages.length === 0 ? (
                    <div className="text-center text-gray-500 text-sm flex flex-col items-center justify-center h-full gap-2">
                      <Sparkles className="w-8 h-8 text-pink-400" />
                      <div>Start a conversation with Joan's AI!</div>
                      <div className="text-xs">Try: "Tell me about your leadership style" or "How do you build AI systems?"</div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {chatMessages.map((message, index) => (
                        <div key={index} className={`${message.type === 'user' ? 'text-right' : ''}`}>
                          <div className={`inline-block max-w-xs p-3 rounded-lg ${
                            message.type === 'user' 
                              ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' 
                              : 'bg-white border border-gray-200 shadow-sm text-gray-700'
                          }`}>
                            {message.isLoading ? (
                              <div className="flex items-center gap-2">
                                <div className="animate-spin w-4 h-4 border-2 border-gray-300 border-t-pink-500 rounded-full"></div>
                                {message.content}
                              </div>
                            ) : (
                              message.content
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input 
                    type="text" 
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about leadership, automation, strategy..." 
                    className="flex-1"
                  />
                  <Button 
                    onClick={sendMessage}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg"
                    disabled={!userMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <a href="mailto:alongejoan@gmail.com" className="text-pink-600 hover:text-pink-700">alongejoan@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">LinkedIn</div>
                        <a href="https://linkedin.com/in/joanalonge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">linkedin.com/in/joanalonge</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Location</div>
                        <div className="text-gray-600">Canada (Remote Global)</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Focus</h3>
                    <p className="text-gray-600 mb-4">Leading operational transformation at Bitwave, building the future of crypto accounting operations with AI-powered predictive systems.</p>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Let's Collaborate
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default JoanPortfolio;
