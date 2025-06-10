import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Smartphone, Stethoscope, CheckCircle, Mail, MapPin, Activity, TestTube, Pill } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-xl font-bold text-green-800">Nyumbani Care</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-green-600 transition-colors">
            Services
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
            How It Works
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">
                    Revolutionizing Healthcare in Africa
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Your Digital Health Companion
                  </h1>
                  <p className="text-xl text-green-700 font-medium">Accessible, Affordable, Anywhere</p>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Experience preventive healthcare through at-home diagnostics, teleconsultations, and AI-powered
                    health monitoring. Healthcare that comes to you.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Join Beta
                  </Button>
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Join Waitlist
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                    Take Survey →
                  </Button>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                    Partner with Us →
                  </Button>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                    Explore Care →
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Smartphone className="w-32 h-32 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                    <TestTube className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CareSense Teaser */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Introducing CareSense
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Your Smartphone, Your Portable Clinic
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Scan and interpret rapid tests directly through your smartphone using camera-based AI. Get instant
                  results and store them securely in your health profile.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 rounded-full p-2">
                      <Smartphone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Instant Scanning</h3>
                      <p className="text-gray-600">
                        Point your camera at any rapid test for immediate AI-powered analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 rounded-full p-2">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Accurate Results</h3>
                      <p className="text-gray-600">
                        Get reliable interpretations with confidence scores and recommendations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 rounded-full p-2">
                      <Activity className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Health Tracking</h3>
                      <p className="text-gray-600">
                        Store results in your digital health profile for long-term monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    width={300}
                    height={400}
                    alt="CareSense App Interface"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Comprehensive Healthcare Services
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From at-home diagnostics to teleconsultations, we bring quality healthcare directly to you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TestTube className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>At-Home Diagnostics</CardTitle>
                  <CardDescription>
                    Easy-to-use test kits for blood pressure, blood sugar, STIs, malaria, fertility, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Delivered to your doorstep</li>
                    <li>• Scan results with your phone</li>
                    <li>• Private and convenient</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Stethoscope className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>Teleconsultations</CardTitle>
                  <CardDescription>
                    Connect with qualified doctors and pharmacists through video or phone consultations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 24/7 availability</li>
                    <li>• Qualified healthcare professionals</li>
                    <li>• Secure and confidential</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Pill className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>E-Prescriptions</CardTitle>
                  <CardDescription>
                    Upload prescriptions, request refills, and get medications delivered to your location.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digital prescription management</li>
                    <li>• Home delivery service</li>
                    <li>• Prescription history tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  How Nyumbani Care Works
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple steps to better health management
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-green-100 rounded-full p-6">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Order Test Kit</h3>
                <p className="text-gray-600">
                  Choose from our range of at-home diagnostic kits and have them delivered to you.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-green-100 rounded-full p-6">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-bold">Take Test & Scan</h3>
                <p className="text-gray-600">
                  Use CareSense to scan your test results with AI-powered analysis for instant interpretation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-green-100 rounded-full p-6">
                  <span className="text-2xl font-bold text-green-600">3</span>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Transform Your Healthcare?
                </h2>
                <p className="max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who are already experiencing the future of healthcare in Africa.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 bg-white" />
                  <Button type="submit" className="bg-white text-green-600 hover:bg-gray-100">
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-green-100">Get updates on our launch and early access opportunities.</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Join Beta Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  Partner with Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white"
      >
        <div className="flex items-center gap-4">
          <Heart className="h-6 w-6 text-green-600" />
          <span className="font-bold text-green-800">Nyumbani Care</span>
        </div>
        <div className="sm:ml-auto flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="h-4 w-4" />
            <Link href="mailto:hello@nyumbanicare.com" className="hover:text-green-600">
              hello@nyumbanicare.com
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>nyumbanicare.app</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
