"use client";
import React, { useState, useEffect } from "react";
import {
  Heart,
  Smartphone,
  Brain,
  Users,
  MapPin,
  Clock,
  Shield,
  Stethoscope,
  Activity,
  MessageCircle,
  Video,
  Calendar,
  FileText,
  ChevronRight,
  Play,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Globe,
  Zap,
  Target,
  Award,
  Mail,
  Phone,
  Info,
} from "lucide-react";

const NyumbaniCareLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "info" | "success" | "warning";
  }>({
    show: false,
    message: "",
    type: "info",
  });

  const showToast = (
    message: string,
    type: "info" | "success" | "warning" = "info"
  ) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const handleJoinBeta = () => {
    window.open(
      "mailto:contact@nyumbanicare.com?subject=Beta%20Program%20Interest&body=Hi%20Nyumbani%20Care%20Team,%0A%0AI%27m%20interested%20in%20joining%20your%20beta%20program.%20Please%20send%20me%20more%20information.%0A%0AThank%20you!",
      "_blank"
    );
    showToast("Opening email client to join beta program...", "success");
  };

  const handleDaktariOnline = () => {
    showToast(
      "🩺 Daktari Online - Coming soon! We'll notify you when teleconsultation is available.",
      "info"
    );
  };

  const handleOrderTestKits = () => {
    showToast(
      "🧪 Test kit ordering feature coming soon! Join our beta to be the first to know.",
      "info"
    );
  };

  const handleRequestPrescription = () => {
    showToast(
      "💊 Prescription request feature coming soon! We're working hard to make this available.",
      "info"
    );
  };

  const handleScheduleConsultation = () => {
    showToast(
      "📅 Consultation scheduling coming soon! Stay tuned for updates.",
      "info"
    );
  };

  const handleLearnMore = (solutionTitle: string) => {
    showToast(
      `📖 Learn more about ${solutionTitle} - Detailed information coming soon!`,
      "info"
    );
  };

  const handleFooterLink = (section: string) => {
    switch (section) {
      case "AI Triage":
        scrollToSection("features");
        break;
      case "Teleconsultations":
        handleDaktariOnline();
        break;
      case "Testing Kits":
        handleOrderTestKits();
        break;
      case "Health Hubs":
        scrollToSection("solutions");
        break;
      case "About Us":
        scrollToSection("about");
        break;
      case "Careers":
        window.open(
          "mailto:contact@nyumbanicare.com?subject=Career%20Inquiry",
          "_blank"
        );
        showToast("Opening email for career inquiries...", "success");
        break;
      case "Press":
        window.open(
          "mailto:contact@nyumbanicare.com?subject=Press%20Inquiry",
          "_blank"
        );
        showToast("Opening email for press inquiries...", "success");
        break;
      case "Partners":
        window.open(
          "mailto:contact@nyumbanicare.com?subject=Partnership%20Inquiry",
          "_blank"
        );
        showToast("Opening email for partnership inquiries...", "success");
        break;
      case "Help Center":
        window.open(
          "mailto:contact@nyumbanicare.com?subject=Help%20Request",
          "_blank"
        );
        showToast("Opening email for help requests...", "success");
        break;
      case "Contact Us":
        window.open(
          "mailto:contact@nyumbanicare.com?subject=Contact%20Inquiry",
          "_blank"
        );
        showToast("Opening email to contact us...", "success");
        break;
      case "Privacy Policy":
        showToast(
          "📋 Privacy Policy - Coming soon! We take your privacy seriously.",
          "info"
        );
        break;
      case "Terms of Service":
        showToast(
          "📄 Terms of Service - Coming soon! Please contact us for current terms.",
          "info"
        );
        break;
      default:
        showToast(
          `ℹ️ ${section} - Coming soon! We're working on this feature.`,
          "info"
        );
        break;
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Triage System",
      description:
        "Chat-based symptom checker that guides users and reduces unnecessary hospital visits",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "At-Home Testing",
      description:
        "Collect samples yourself and receive digital results with AI-powered interpretation",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Teleconsultations",
      description:
        "Video/audio consultations with qualified general practitioners and specialists",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "E-Prescriptions",
      description:
        "Integrated with local pharmacies and lab networks for seamless care delivery",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "CareSense Insights",
      description:
        "Smart interpretation and insights from test results for proactive healthcare",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description:
        "AI-powered appointment booking with real-time wait estimates and optimization",
      color: "from-teal-500 to-green-500",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Users on Beta",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "At-Home Test Kits",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Daktari Online Support",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Privacy Guaranteed",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const solutions = [
    {
      title: "Digital Front Door",
      description:
        "Web app as one-stop health platform with AI triage, testing, and consultations",
      features: [
        "AI Triage System",
        "At-home Testing",
        "Teleconsultations",
        "E-prescriptions",
        "EMR System",
      ],
    },
    {
      title: "AI & Nurse-Led Health Hubs",
      description:
        "Community-level micro clinics with trained nurses supported by AI diagnostic tools",
      features: [
        "Basic Checkups",
        "Remote Doctor Access",
        "Point-of-care Testing",
        "Vaccinations",
        "Chronic Disease Monitoring",
      ],
    },
    {
      title: "Virtual Hospital Access",
      description:
        "Centralized specialists team providing complex case reviews and consultations",
      features: [
        "Specialist Consultations",
        "Second Opinions",
        "AI-assisted Diagnostics",
        "Complex Case Reviews",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Dr. Amina Hassan",
      role: "General Practitioner, Nairobi",
      content:
        "Nyumbani Care has transformed how I deliver healthcare. The AI support helps me make better decisions.",
      rating: 5,
    },
    {
      name: "Sarah Kiprotich",
      role: "Community Health Worker",
      content:
        "The platform makes it easy to reach patients in remote areas and provide quality care.",
      rating: 5,
    },
    {
      name: "John Mwangi",
      role: "Patient",
      content:
        "Getting healthcare has never been this convenient. I can test at home and consult doctors online.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const FloatingCard = ({
    children,
    className = "",
    delay = 0,
  }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }) => (
    <div
      className={`transform transition-all duration-1000 hover:scale-105 hover:-translate-y-2 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  const Toast = () => {
    if (!toast.show) return null;

    const getToastStyles = () => {
      switch (toast.type) {
        case "success":
          return "bg-green-500 border-green-600";
        case "warning":
          return "bg-yellow-500 border-yellow-600";
        default:
          return "bg-blue-500 border-blue-600";
      }
    };

    const getIcon = () => {
      switch (toast.type) {
        case "success":
          return <CheckCircle className="w-5 h-5" />;
        case "warning":
          return <Clock className="w-5 h-5" />;
        default:
          return <Info className="w-5 h-5" />;
      }
    };

    return (
      <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-300">
        <div
          className={`${getToastStyles()} text-white px-6 py-4 rounded-lg shadow-2xl border-l-4 max-w-md`}
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
            <div className="flex-1">
              <p className="text-sm font-medium leading-relaxed">
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => setToast((prev) => ({ ...prev, show: false }))}
              className="flex-shrink-0 ml-2 hover:opacity-75 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Toast Notification */}
      <Toast />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Nyumbani Care
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={handleJoinBeta}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Join Beta
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block py-2 text-gray-700 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block py-2 text-gray-700 w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="block py-2 text-gray-700 w-full text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block py-2 text-gray-700 w-full text-left"
              >
                About
              </button>
              <button
                onClick={handleJoinBeta}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-full mt-2"
              >
                Join Beta
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>AI-Powered Healthcare Revolution</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Own Your Health —
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {" "}
                    From Home
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  From At-Home Testing Kits, Lab Requests, Prescriptions &
                  Teleconsultation. Nyumbani Care makes it easier to stay on top
                  of your wellness - private, convenient, and built around your
                  wellbeing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleJoinBeta}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span className="font-semibold">Join 500+ Beta Users</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleDaktariOnline}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
                >
                  <Stethoscope className="w-5 h-5" />
                  <span className="font-semibold">Daktari Online</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <FloatingCard key={index} delay={index * 200}>
                    <div className="text-center">
                      <div className="flex justify-center mb-2 text-blue-600">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </FloatingCard>
                ))}
              </div>
            </div>

            <div className="relative">
              <FloatingCard className="relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Health Check Complete
                        </h3>
                        <p className="text-sm text-gray-600">
                          AI analysis shows normal results
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Blood Pressure
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          Normal
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Glucose Level
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          Optimal
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Next Checkup
                        </span>
                        <span className="text-sm font-semibold text-purple-600">
                          In 30 days
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handleScheduleConsultation}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl hover:shadow-lg transition-all"
                    >
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </FloatingCard>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Updated to match current site */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Personalized
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Care
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take charge of your wellness with Nyumbani Care — access testing
              kits, request prescriptions, lab work, or talk to a doctor, all
              from the comfort of your home.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <FloatingCard delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  At-Home Testing Kits & Lab Work
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Order from over 500+ accurate kits for STIs, HIV, diabetes,
                  pregnancy, and more. Delivered with privacy. Labeled with fun,
                  coded names for comfort.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>500+ Test Kit Options</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Private & Discreet Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Lab Work Requests</span>
                  </div>
                </div>
                <button
                  onClick={handleOrderTestKits}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl hover:shadow-lg transition-all"
                >
                  Order Test Kits
                </button>
              </div>
            </FloatingCard>

            <FloatingCard delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Prescription Requests & Refills
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Request medications or repeat prescriptions online. We handle
                  the rest - from processing to delivery, making your medication
                  management effortless.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Online Prescription Requests</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automatic Refill Reminders</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Pharmacy Network Integration</span>
                  </div>
                </div>
                <button
                  onClick={handleRequestPrescription}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl hover:shadow-lg transition-all"
                >
                  Request Prescription
                </button>
              </div>
            </FloatingCard>

            <FloatingCard delay={400}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Teleconsultation (Daktari Online)
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Speak to a certified doctor via call or video. No waiting
                  rooms. Just professional medical support when you need it
                  most.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Certified Medical Doctors</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Video & Audio Consultations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>24/7 Availability</span>
                  </div>
                </div>
                <button
                  onClick={handleDaktariOnline}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl hover:shadow-lg transition-all"
                >
                  Talk to Daktari
                </button>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Privacy & Comfort Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              You Deserve Privacy. You Deserve Comfort.
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                You Deserve Control.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FloatingCard delay={0}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Know Your Health Status
                </h3>
                <p className="text-gray-600 text-sm">
                  Without the hospital trip
                </p>
              </div>
            </FloatingCard>

            <FloatingCard delay={100}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Avoid Stigma
                </h3>
                <p className="text-gray-600 text-sm">
                  And awkward conversations
                </p>
              </div>
            </FloatingCard>

            <FloatingCard delay={200}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Safe, Fast Deliveries
                </h3>
                <p className="text-gray-600 text-sm">To your door</p>
              </div>
            </FloatingCard>

            <FloatingCard delay={300}>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Speak to Doctors
                </h3>
                <p className="text-gray-600 text-sm">On your terms</p>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Features for
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Smarter Healthcare
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind our simple interface lies powerful AI technology that makes
              healthcare more accessible, accurate, and personalized for
              everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FloatingCard key={index} delay={index * 100}>
                <div
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.color} text-white hover:shadow-2xl transition-all`}
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute top-4 right-4 opacity-20">
                    <div className="w-16 h-16 rounded-full bg-white/20"></div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Healthcare
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our three-tier approach ensures comprehensive healthcare delivery
              from community level to specialist care.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <FloatingCard key={index} delay={index * 200}>
                <div
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>

                      <div className="space-y-3">
                        {solution.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleLearnMore(solution.title)}
                        className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all flex items-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-12 text-center">
                        <div className="text-6xl mb-4">
                          {index === 0 ? "🏥" : index === 1 ? "👩‍⚕️" : "🔬"}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800">
                          {solution.title}
                        </h4>
                      </div>

                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Healthcare Professionals
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              See what our users say about their experience with Nyumbani Care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FloatingCard key={index} delay={index * 150}>
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of patients and healthcare providers who trust
            Nyumbani Care for accessible, AI-powered healthcare solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              Join Beta Today - It's Free!
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Talk to Daktari Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Nyumbani Care</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming healthcare delivery across Kenya and Tanzania with
                AI-powered solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-gray-400">
                <button
                  onClick={() => handleFooterLink("AI Triage")}
                  className="block hover:text-white transition-colors text-left"
                >
                  AI Triage
                </button>
                <button
                  onClick={() => handleFooterLink("Teleconsultations")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Teleconsultations
                </button>
                <button
                  onClick={() => handleFooterLink("Testing Kits")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Testing Kits
                </button>
                <button
                  onClick={() => handleFooterLink("Health Hubs")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Health Hubs
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <button
                  onClick={() => handleFooterLink("About Us")}
                  className="block hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleFooterLink("Careers")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Careers
                </button>
                <button
                  onClick={() => handleFooterLink("Press")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Press
                </button>
                <button
                  onClick={() => handleFooterLink("Partners")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Partners
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <button
                  onClick={() => handleFooterLink("Help Center")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Help Center
                </button>
                <button
                  onClick={() => handleFooterLink("Contact Us")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => handleFooterLink("Privacy Policy")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => handleFooterLink("Terms of Service")}
                  className="block hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Nyumbani Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NyumbaniCareLanding;
