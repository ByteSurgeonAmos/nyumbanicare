import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Heart, Pill, Smartphone, Stethoscope, TestTube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si"

const services = [
  { 
    icon: TestTube, 
    name: "At-Home Diagnostics", 
    descption:"Easy-to-use test kits for blood pressure, blood sugar, STIs, malaria, and fertility testing.", 
    points: ["Delivered to your doorstep", "Scan results with your phone", "Private and convenient"] 
  },
  { 
    icon: Stethoscope, 
    name: "Teleconsultations", 
    descption:"Connect with qualified doctors and pharmacists through video or phone consultations.", 
    points: ["24/7 availability", "Qualified healthcare professionals", "Secure and confidential"] 
  },
  { 
    icon: Pill, 
    name: "E-Prescriptions", 
    descption:"Upload prescriptions, request refills, and get medications delivered to your location.", 
    points: ["Digital prescription management", "Home delivery service", "Prescription history tracking"] 
  },
  { 
    icon: FileText, 
    name: "E-Referrals", 
    descption:"Schedule home sample collection, track lab results digitally, receive interpretation and follow-up guidance.", 
    points: ["Schedule home sample collection", "Track lab results digitally", "Receive interpretation and guidance"] 
  }
];

const footerLinks = [
  { 
    category: "Platform",
    links: [
      { name: "At Home", href: "#" },
      { name: "Teleconsultations", href: "#" },
      { name: "Testing Kits", href: "#" },
      { name: "Health Tools", href: "#" },
    ]
  },
  { 
    category: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ]
  },
  { 
    category: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ]
  },
];

const howItWorks = [
  { 
    count: "1", 
    name: "Order Test Kit", 
    description: "Choose from our range of at-home diagnostic kits and have them delivered to you."
  },
  { 
    count: "2", 
    name: "Take Test & Scan", 
    description: "Use CareSense to scan your test results with professional analysis for accurate interpretation." 
  },
  { 
    count: "3", 
    name: "Get Care", 
    description: "Consult with healthcare professionals and receive personalized treatment recommendations." 
  }
];

const socials = [
  { name: "Facebook", href: "#", image: SiFacebook },
  { name: "X", href: "#", image: SiX },
  { name: "Instagram", href: "https://www.instagram.com/nyumbanicare.app/", image: SiInstagram },
  { name: "LinkedIn", href: "#", image: SiLinkedin },
];

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 lg:py-16">
          <div className="mx-8 px-4 lg:px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="inline-block rounded-full bg-[#CBF8CB] px-3 py-1 text-xs lg:text-sm text-[#00796B] lg:ml-10 mb-2">
                      Revolutionizing healthcare in Africa
                    </p>
                    <h1 className="text-4xl text-center font-bold tracking-tighter lg:text-7xl text-gray-900 py-2">
                      Your digital healthcare companion.
                    </h1>
                  </div>
                  <h2 className="text-2xl lg:text-5xl text-teal-600 font-bold">Accessible, Affordable, Anywhere</h2>
                  <p className="text-black text-lg lg:text-2xl font-medium max-w-[600px] text-center">
                    From at-home testing kits, and lab request to prescriptions and tele consultations, Nyumbani Care
                    brings health to your doorstep. Whether you need to test, treat, consult or refill. We are more than
                    a service we're your trusted partner in health, every step of the way right from the comfort of your
                    home.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:items-start">
                  <Link href="/contact" className="bg-[#00796B] flex justify-center items-center text-xl lg:text-2xl hover:bg-teal-700 text-white rounded-full text-center px-3 py-2 lg:w-[200px] lg:h-[72px]">
                    Join Beta
                  </Link>
                  <button
                    className="outline outline-[#14AF14] text-[#14AF14] text-xl lg:text-2xl hover:bg-teal-50 bg-white rounded-full px-3 py-2 lg:w-[200px] lg:h-[72px]"
                  >
                    Take Survey
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end mt-12">
                <Image
                  src="/assets/man_using_app.jpg"
                  width={600}
                  height={600}
                  alt="Person using Nyumbani Care app"
                  className="rounded-tl-lg rounded-br-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CareSense Teaser */}
        <section className="w-full py-12 lg:py-16">
          <div className="mx-8 px-4 lg:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="inline-block rounded-full bg-[#CBF8CB] px-3 py-1 text-sm text-teal-700">
                Introducing CareSense
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-7xl">
                Your Smartphone, Your Portable Clinic
              </h2>
              <p className="lg:text-2xl max-w-[800px]">
                Scan and interpret rapid tests directly through your smartphone. Get instant results and store them
                securely in your health profile.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="bg-[#CBF8CB] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Smartphone className="w-12 h-12 text-teal-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Instant Scanning</h3>
                    <p className="text-gray-600">Point your camera at any rapid test for immediate analysis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="bg-[#CBF8CB] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-teal-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Accurate Results</h3>
                    <p className="text-gray-600">
                      Get reliable interpretations with confidence scores and recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="bg-[#CBF8CB] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Heart className="w-12 h-12 text-teal-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Health Tracking</h3>
                    <p className="text-gray-600">
                      Store results in your digital health profile for long-term monitoring.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/assets/animated_using_app.jpg"
                  width={400}
                  height={400}
                  alt="CareSense App Interface"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 lg:py-16 bg-[#EBFEEB]">
          <div className="container px-4 lg:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-4xl font-bold tracking-tighter lg:text-7xl text-gray-900">
                Comprehensive Healthcare Services
              </h2>
              <p className="text-gray-600 lg:text-xl max-w-[800px]">
                From at-home diagnostics to teleconsultations, we bring quality healthcare directly to you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-[#e8f5e9] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <service.icon className="w-12 h-12 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-xl mb-4">{service.descption}</p>
                  {service.points.map((point, index) => (
                    <ul key={index} className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                        <span className="text-[16px]">{point}</span>
                      </li>
                    </ul>
                  ))}
                </CardContent>
              </Card>
              ))}
            </div>
          </div>

          <div className="w-full py-12 lg:py-16">
            <div className="container px-4 lg:px-6">
              <div className="flex justify-center">
                <Image
                  src="/assets/woman_using_app.jpg"
                  width={800}
                  height={400}
                  alt="Woman using Nyumbani Care services"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 lg:py-16">
          <div className="container px-4 lg:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tighter lg:text-7xl text-gray-900">How Nyumbani Care works</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-[#CBF8CB] rounded-full p-6 w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                    <span className="text-7xl font-bold text-teal-600">{item.count}</span>
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-bold">{item.name}</h3>
                  <p className="text-gray-600 text-lg lg:text-2xl max-w-[400px]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 lg:py-16 bg-teal-600">
          <div className="container px-4 lg:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter lg:text-7xl text-white">
                  Ready to Transform Your Healthcare?
                </h2>
                <p className="text-teal-100 lg:text-2xl">
                  Join thousands of users who are already experiencing the future of healthcare in Africa.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex">
                  <input type="email" placeholder="Enter your email" className="max-w-lg flex-1 text-xl bg-white rounded-l-lg px-3 py-2 w-[500px] outline-none" />
                  <button type="submit" className="text-white text-xl bg-green-600 rounded-r-lg px-3 py-2">
                    Join Waitlist!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-white border-t">
        <div className="mx-8 px-4 lg:px-6">
          <div className="flex flex-col lg:justify-between lg:flex-row gap-8">
            <div className="">
              <div className="hidden lg:flex items-center">
                <Heart className="h-10 w-10 text-teal-700" />
                <h1 className="ml-2 text-4xl font-bold text-teal-700">NyumbaniCare</h1>
              </div>
              <div className="text-[#4E4E4E] text-xl ml-2 py-4">Follow Us</div>
              <div className="flex space-x-4">
                {socials.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-500 ml-3 hover:text-teal-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.image size={24} />
                    <span className="sr-only">{item.name}</span>
                  </a>
                ))}
              </div>
              <h3 className="hidden lg:block text-xl text-gray-500 mt-8">© 2025 NyumbaniCare</h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              {footerLinks.map((link, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">{link.category}</h3>
                  <ul className="space-y-2 text-xl">
                    {link.links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="text-gray-600 hover:text-teal-600">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="lg:hidden flex items-center">
              <Heart className="h-10 w-10 text-teal-700" />
              <h1 className="ml-2 text-4xl font-bold text-teal-700">NyumbaniCare</h1>
            </div>

            <h3 className="block lg:hidden text-xl text-gray-500 -mt-4">© 2025 NyumbaniCare</h3>
          </div>
        </div>
      </footer>
    </div>
  )
}
