import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Smartphone, Stethoscope, CheckCircle, TestTube, Pill, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffcf0]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-6 w-6 text-teal-600" />
          <span className="ml-2 text-lg font-bold text-teal-700">NyumbaniCare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Home
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Services
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-teal-600 transition-colors">
            How it works
          </Link>
          <Link href="/login" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Login
          </Link>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full">
            Sign Up
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 mb-2">
                    Revolutionizing healthcare in Africa
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                    Your digital healthcare companion.
                  </h1>
                  <p className="text-xl text-teal-600 font-medium">Accessible, Affordable, Anywhere</p>
                  <p className="text-gray-600 md:text-lg max-w-[600px]">
                    From at-home testing kits, and lab request to prescriptions and tele consultations, Nyumbani Care
                    brings health to your doorstep. Whether you need to test, treat, consult or refill. We are more than
                    a service we're your trusted partner in health, every step of the way right from the comfort of your
                    home.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white rounded-full">
                    Join Beta
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full"
                  >
                    Take Survey
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <Image
                  src="/assets/man_using_app.jpg"
                  width={500}
                  height={400}
                  alt="Person using Nyumbani Care app"
                  className="rounded-tl-lg rounded-br-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CareSense Teaser */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700">
                Introducing CareSense
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Your Smartphone, Your Portable Clinic
              </h2>
              <p className="text-gray-600 md:text-lg max-w-[800px]">
                Scan and interpret rapid tests directly through your smartphone. Get instant results and store them
                securely in your health profile.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="bg-[#e8f5e9] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Instant Scanning</h3>
                    <p className="text-gray-600">Point your camera at any rapid test for immediate analysis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="bg-[#e8f5e9] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
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
                    <div className="bg-[#e8f5e9] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-teal-600" />
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
        <section id="services" className="w-full py-12 md:py-16 bg-[#f0faf5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Comprehensive Healthcare Services
              </h2>
              <p className="text-gray-600 md:text-lg max-w-[800px]">
                From at-home diagnostics to teleconsultations, we bring quality healthcare directly to you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-[#e8f5e9] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <TestTube className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">At-Home Diagnostics</h3>
                  <p className="text-gray-600 mb-4">
                    Easy-to-use test kits for blood pressure, blood sugar, STIs, malaria, and fertility testing.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Delivered to your doorstep</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Scan results with your phone</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Private and convenient</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-[#e8f5e9] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Teleconsultations</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with qualified doctors and pharmacists through video or phone consultations.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>24/7 availability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Qualified healthcare professionals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Secure and confidential</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-[#e8f5e9] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Pill className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">E-Prescriptions</h3>
                  <p className="text-gray-600 mb-4">
                    Upload prescriptions, request refills, and get medications delivered to your location.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Digital prescription management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Home delivery service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Prescription history tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-[#e8f5e9] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">E-Referrals</h3>
                  <p className="text-gray-600 mb-4">
                    Schedule home sample collection, track lab results digitally, receive interpretation and follow-up
                    guidance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Schedule home sample collection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Track lab results digitally</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                      <span>Receive interpretation and guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="w-full py-12 md:py-16">
            <div className="container px-4 md:px-6">
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
        <section id="how-it-works" className="w-full py-12 md:py-16 bg-[#fffcf0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">How Nyumbani Care works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-[#e8f5e9] rounded-full p-6 w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Order Test Kit</h3>
                <p className="text-gray-600">
                  Choose from our range of at-home diagnostic kits and have them delivered to you.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-[#e8f5e9] rounded-full p-6 w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-bold">Take Test & Scan</h3>
                <p className="text-gray-600">
                  Use CareSense to scan your test results with professional analysis for accurate interpretation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-[#e8f5e9] rounded-full p-6 w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Get Care</h3>
                <p className="text-gray-600">
                  Consult with healthcare professionals and receive personalized treatment recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-16 bg-teal-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Ready to Transform Your Healthcare?
                </h2>
                <p className="text-teal-100 md:text-lg">
                  Join thousands of users who are already experiencing the future of healthcare in Africa.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex">
                  <input type="email" placeholder="Enter your email" className="max-w-lg flex-1 bg-white rounded-l-xl px-3 py-2" />
                  <button type="submit" className="text-white bg-green-600 hover:bg-gray-100 rounded-r-xl px-3 py-2">
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
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-teal-600 fill-teal-600" />
                <span className="ml-2 text-lg font-bold text-teal-700">NyumbaniCare</span>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
              <p className="text-sm text-gray-500">© 2023 NyumbaniCare</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    At Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Teleconsultations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Testing Kits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Health Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
