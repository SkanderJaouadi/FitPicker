
import  Button from "@/components/PrimaryButton"
import Layout from "@/Layouts/Layout"
import { Head, Link, usePage } from "@inertiajs/react"
import { ShirtIcon, PinIcon as PantsIcon, FootprintsIcon as ShoesIcon, Brain, Calendar, Camera } from "lucide-react"

export default function WelcomePage() {
    
  return (
    <Layout >
        <Head title="Welcome" />
    <div className="bg-white p-8 rounded-lg shadow-lg">
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white rounded-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to FIT<span className="text-purple-600">P</span>ICKER
          </h1>
          <p className="text-xl text-gray-600">Your AI-powered personal stylist and wardrobe manager</p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Discover Your Perfect Style</h2>
            <p className="text-lg text-gray-700 mb-6">
              FITPICKER uses advanced AI to help you create stunning outfits from your existing wardrobe. Say goodbye to
              the "I have nothing to wear" dilemma!
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-purple-600 hover:bg-purple-100">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="/placeholder.svg?height=300&width=400&text=AI+Outfit+Suggestion"
              alt="AI Outfit Suggestion"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <ShirtIcon className="h-10 w-10 text-purple-600" />,
              title: "Wardrobe Management",
              description: "Easily catalog and organize your entire wardrobe",
            },
            {
              icon: <Brain className="h-10 w-10 text-purple-600" />,
              title: "AI Recommendations",
              description: "Get personalized outfit suggestions based on your style and preferences",
            },
            {
              icon: <Camera className="h-10 w-10 text-purple-600" />,
              title: "Virtual Try-On",
              description: "Visualize outfits without physically trying them on",
            },
            {
              icon: <Calendar className="h-10 w-10 text-purple-600" />,
              title: "Outfit Planning",
              description: "Plan your outfits for the week or for special occasions",
            },
            {
              icon: <PantsIcon className="h-10 w-10 text-purple-600" />,
              title: "Style Analytics",
              description: "Gain insights into your fashion choices and trends",
            },
            {
              icon: <ShoesIcon className="h-10 w-10 text-purple-600" />,
              title: "Outfit Sharing",
              description: "Share your favorite looks with friends or get community feedback",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <footer className="text-center">
          <p className="text-gray-600">Ready to revolutionize your wardrobe?</p>
          <Button asChild size="lg" className="mt-4 bg-purple-600 hover:bg-purple-700">
            <Link href="/register">Join FITPICKER Today</Link>
          </Button>
        </footer>
      </div>
    </div>
    </div>
    </Layout>
  )
}

