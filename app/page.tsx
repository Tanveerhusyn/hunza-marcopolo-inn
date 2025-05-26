import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Wifi,
  Car,
  Coffee,
  Mountain,
  Utensils,
  Clock,
  Users,
  Camera,
  ArrowRight,
  Play,
  Compass,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-xl border border-amber-500/20 rounded-full px-8 py-3">
        {/* Circular Logo - Absolute positioned */}
        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-amber-400 shadow-lg shadow-amber-400/20">
            <Image
              src="/marcopolo-logo.jpg"
              alt="Marcopolo Inn Logo"
              width={80}
              height={80}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="flex items-center space-x-8 pl-10">
          <div className="flex items-center">
            <span className="font-bold text-amber-400">
              HUNZA MARCOPOLO INN
            </span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm">
            <Link
              href="#about"
              className="text-white/80 hover:text-amber-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#rooms"
              className="text-white/80 hover:text-amber-400 transition-colors"
            >
              Rooms
            </Link>
            <Link
              href="#dining"
              className="text-white/80 hover:text-amber-400 transition-colors"
            >
              Dining
            </Link>
            <Link
              href="#attractions"
              className="text-white/80 hover:text-amber-400 transition-colors"
            >
              Attractions
            </Link>
          </div>
          <Button
            size="sm"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
          >
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/marcopolo-bg-two.jpg?height=1080&width=1920"
            alt="Hunza Marcopolo Inn with Passu Cones in background"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 z-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-4">
              Gulmit, Hunza Valley
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="block text-white">HUNZA</span>
            <span className="block text-amber-400 text-5xl md:text-7xl">
              MARCOPOLO
            </span>
            <span className="block text-white/60 text-3xl md:text-5xl font-light">
              INN
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience authentic Pakistani hospitality in the heart of Hunza
            Valley, where comfort meets the breathtaking beauty of the Karakoram
            mountains.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-10 py-4 rounded-full"
            >
              <Clock className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white border-2 border-white/30 hover:border-amber-400 hover:text-amber-400 text-lg px-10 py-4 rounded-full backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              +92 346 5431 267
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Discover</span>
            <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
                  Our Story
                </Badge>
                <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                  Where Heritage Meets
                  <span className="block text-amber-400">Modern Comfort</span>
                </h2>
              </div>
              <p className="text-xl text-white/70 leading-relaxed">
                Nestled near the historic Polo Ground in Gulmit, Hunza Marcopolo
                Inn offers guests an authentic Pakistani hospitality experience
                with panoramic views of the iconic Passu Cones and surrounding
                peaks.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Our charming 16-room inn combines traditional Hunza warmth with
                modern amenities, providing the perfect base to explore the
                cultural richness and natural beauty of the legendary Hunza
                Valley.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-400 mb-2">
                    16
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">
                    Comfortable Rooms
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-400 mb-2">
                    24/7
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">
                    Front Desk Service
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-400 mb-2">
                    2
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">
                    Restaurants
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=700&width=600"
                  alt="Hunza Marcopolo Inn exterior with mountain views"
                  width={600}
                  height={700}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-black/40 text-amber-400 border-amber-500/30 mb-2">
                    Gulmit, Hunza Valley
                  </Badge>
                  <p className="text-white/90 text-sm">
                    Your gateway to the cultural heart of Hunza Valley
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Archives Section */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
              Historical Archives
            </Badge>
            <h2 className="text-5xl font-black text-white mb-6">
              Preserving the Legacy of
              <span className="block text-amber-400">Hunza Valley</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Journey through time with our curated collection of historical
              photographs, vintage footage, and precious moments that tell the
              story of Hunza Valley and our inn's heritage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Featured Historical Video */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 border-amber-500/20 overflow-hidden hover:border-amber-500/40 transition-all duration-500 group">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=700"
                    alt="Historical footage of Hunza Valley from the 1960s"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-amber-500/90 hover:bg-amber-500 text-black font-bold rounded-full px-8 py-4"
                    >
                      <Play className="mr-2 h-6 w-6" />
                      Watch Historical Documentary
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-black/60 text-amber-400 border-amber-500/30">
                    1960s Archive Footage
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    The Golden Era of Hunza
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Rare documentary footage showcasing the traditional life,
                    culture, and breathtaking landscapes of Hunza Valley from
                    the 1960s, when the first travelers began discovering this
                    hidden paradise.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Historical Photo Collection */}
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-amber-500/20 overflow-hidden hover:border-amber-500/40 transition-all duration-500 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Vintage photo of Marcopolo Inn construction"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-black/60 text-amber-400 border-amber-500/30 text-xs">
                    1980s
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold text-white mb-1">
                    Inn's Foundation
                  </h4>
                  <p className="text-white/60 text-sm">
                    Construction and early days of Marcopolo Inn
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-amber-500/20 overflow-hidden hover:border-amber-500/40 transition-all duration-500 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Historical photo of Silk Road traders"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-black/60 text-amber-400 border-amber-500/30 text-xs">
                    1920s
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold text-white mb-1">
                    Silk Road Heritage
                  </h4>
                  <p className="text-white/60 text-sm">
                    Ancient trade routes through Hunza Valley
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Historical Timeline */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Historical Timeline
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  year: "13th Century",
                  title: "Marco Polo's Journey",
                  description:
                    "The legendary explorer passes through Hunza Valley on the Silk Road",
                  icon: Compass,
                },
                {
                  year: "1891",
                  title: "British Expedition",
                  description:
                    "First documented Western exploration of the region",
                  icon: Mountain,
                },
                {
                  year: "1980s",
                  title: "Inn Establishment",
                  description:
                    "Marcopolo Inn founded to welcome travelers to Hunza",
                  icon: Users,
                },
                {
                  year: "Present",
                  title: "Modern Heritage",
                  description:
                    "Continuing the tradition of hospitality for global visitors",
                  icon: Star,
                },
              ].map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="bg-amber-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <milestone.icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <div className="text-amber-400 font-bold text-lg mb-2">
                    {milestone.year}
                  </div>
                  <div className="text-white font-semibold mb-2">
                    {milestone.title}
                  </div>
                  <div className="text-white/60 text-sm">
                    {milestone.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
              Accommodations
            </Badge>
            <h2 className="text-5xl font-black text-white mb-6">
              Comfortable Rooms with
              <span className="block text-amber-400">Mountain Views</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each of our 16 well-appointed rooms offers modern amenities and
              stunning views of the Hunza Valley.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Standard Single Room",
                subtitle: "Perfect for Solo Travelers",
                features: [
                  "Single Bed",
                  "Private Bathroom",
                  "Plasma TV",
                  "Free Wi-Fi",
                  "Mountain Views",
                  "Daily Housekeeping",
                ],
                image: "/placeholder.svg?height=400&width=600",
                badge: "Cozy",
              },
              {
                name: "Standard Double/Twin Room",
                subtitle: "Ideal for Couples & Friends",
                features: [
                  "Double or Twin Beds",
                  "Private Bathroom",
                  "Cable TV",
                  "Heating",
                  "Complimentary Toiletries",
                  "Free Wi-Fi",
                ],
                image: "/placeholder.svg?height=400&width=600",
                badge: "Popular",
              },
              {
                name: "Deluxe Double Room",
                subtitle: "Enhanced Comfort & Space",
                features: [
                  "Spacious Layout",
                  "Premium Furnishing",
                  "Enhanced Views",
                  "Superior Amenities",
                  "Extra Comfort",
                  "Priority Service",
                ],
                image: "/placeholder.svg?height=400&width=600",
                badge: "Premium",
              },
            ].map((room, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-amber-500/20 overflow-hidden hover:border-amber-500/40 transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-amber-500 text-black font-bold">
                    {room.badge}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {room.name}
                  </h3>
                  <p className="text-amber-400 text-sm mb-6 uppercase tracking-wider">
                    {room.subtitle}
                  </p>
                  <div className="space-y-3 mb-8">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full">
                    Check Availability
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section
        id="dining"
        className="py-32 bg-gradient-to-b from-slate-800 to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Traditional Pakistani cuisine at Marcopolo Inn restaurant"
                  width={700}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-black/40 text-amber-400 border-amber-500/30 mb-2">
                    Two On-Site Restaurants
                  </Badge>
                  <p className="text-white/90 text-sm">
                    Authentic flavors from Western, Pakistani, and local Hunza
                    cuisine
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
                  Dining Experience
                </Badge>
                <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                  Authentic Flavors of
                  <span className="block text-amber-400">Hunza Valley</span>
                </h2>
              </div>
              <p className="text-xl text-white/70 leading-relaxed">
                Savor the rich culinary heritage of Hunza with our two on-site
                restaurants, offering a delightful blend of Western, Pakistani,
                and traditional local cuisines.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Coffee className="h-5 w-5 text-amber-400" />
                  <span className="text-white/80">
                    Complimentary continental breakfast daily
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Utensils className="h-5 w-5 text-amber-400" />
                  <span className="text-white/80">
                    Fresh local ingredients and traditional recipes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-amber-400" />
                  <span className="text-white/80">
                    Warm Pakistani hospitality and service
                  </span>
                </div>
              </div>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full px-8 py-3">
                View Menu Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Services */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
              Hotel Facilities
            </Badge>
            <h2 className="text-5xl font-black text-white mb-6">
              Modern Amenities &
              <span className="block text-amber-400">Thoughtful Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wifi,
                title: "Free Wi-Fi",
                description: "Stay connected throughout your stay",
              },
              {
                icon: Car,
                title: "Free Parking",
                description: "Complimentary self-parking for all guests",
              },
              {
                icon: Clock,
                title: "24/7 Front Desk",
                description: "Round-the-clock assistance and service",
              },
              {
                icon: Coffee,
                title: "Continental Breakfast",
                description: "Start your day with our complimentary breakfast",
              },
              {
                icon: Users,
                title: "Local Guide Services",
                description: "Expert local guides for valley exploration",
              },
              {
                icon: Mountain,
                title: "Fruit Garden",
                description: "Peaceful garden and picnic area",
              },
              {
                icon: Mail,
                title: "Laundry Service",
                description: "Professional laundry and dry-cleaning",
              },
              {
                icon: MapPin,
                title: "Currency Exchange",
                description: "Convenient currency exchange services",
              },
            ].map((facility, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-amber-500/20 p-6 text-center hover:border-amber-500/40 transition-all duration-500"
              >
                <CardContent className="p-0">
                  <facility.icon className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section
        id="attractions"
        className="py-32 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
              Nearby Attractions
            </Badge>
            <h2 className="text-5xl font-black text-white mb-6">
              Explore the Wonders of
              <span className="block text-amber-400">Hunza Valley</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Museum & Mir's Palace",
                distance: "5-minute walk",
                description:
                  "Discover the rich history and heritage of Hunza's royal family",
                image: "/placeholder.svg?height=300&width=400",
                icon: Camera,
              },
              {
                title: "Attabad Lake",
                distance: "0.5 miles away",
                description:
                  "Stunning turquoise lake perfect for boating and photography",
                image: "/placeholder.svg?height=300&width=400",
                icon: Mountain,
              },
              {
                title: "Sacred Rocks at Hunza",
                distance: "18.2 miles away",
                description:
                  "Ancient petroglyphs and sacred Buddhist inscriptions",
                image: "/placeholder.svg?height=300&width=400",
                icon: MapPin,
              },
              {
                title: "Gulmit Village",
                distance: "Walking distance",
                description:
                  "Explore traditional village life and local crafts",
                image: "/placeholder.svg?height=300&width=400",
                icon: Users,
              },
              {
                title: "Passu Cones",
                distance: "Scenic drive",
                description:
                  "Iconic cathedral-like mountain peaks perfect for photography",
                image: "/placeholder.svg?height=300&width=400",
                icon: Camera,
              },
              {
                title: "Local Festivals",
                distance: "Seasonal events",
                description:
                  "Experience Silk Route Festival and Chineer celebrations",
                image: "/placeholder.svg?height=300&width=400",
                icon: Star,
              },
            ].map((attraction, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-amber-500/20 overflow-hidden hover:border-amber-500/40 transition-all duration-500 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <attraction.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/40 text-amber-400 border-amber-500/30">
                      {attraction.distance}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {attraction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Experiences Section */}
      <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
              Guest Experiences
            </Badge>
            <h2 className="text-5xl font-black text-white mb-6">
              Stories Captured in
              <span className="block text-amber-400">Motion & Memory</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Watch and experience Hunza Valley through the eyes of our guests.
              From sunrise adventures to cultural discoveries, these authentic
              moments showcase the magic that awaits you.
            </p>
          </div>

          {/* Featured Guest Video */}
          <div className="mb-16">
            <Card className="bg-slate-800/50 border-amber-500/20 overflow-hidden hover:border-amber-500/40 transition-all duration-500 group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  alt="Guest video testimonial at sunrise with Rakaposhi view"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-amber-500/90 hover:bg-amber-500 text-black font-bold rounded-full px-10 py-5"
                  >
                    <Play className="mr-3 h-7 w-7" />
                    Watch Guest Stories
                  </Button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-black/60 text-amber-400 border-amber-500/30 mb-2">
                    Featured Guest Experience
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Sunrise at Rakaposhi Base Camp
                  </h3>
                  <p className="text-white/90">
                    "The most incredible sunrise I've ever witnessed" - Sarah &
                    Mike from Canada share their unforgettable Hunza adventure
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Guest Video Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Cultural Immersion",
                guest: "Elena from Spain",
                duration: "3:45",
                thumbnail: "/placeholder.svg?height=250&width=400",
                description:
                  "Experiencing traditional Hunza hospitality and local customs",
                category: "Culture",
              },
              {
                title: "Adventure Trekking",
                guest: "James from UK",
                duration: "5:20",
                thumbnail: "/placeholder.svg?height=250&width=400",
                description: "Epic trek to Attabad Lake and surrounding peaks",
                category: "Adventure",
              },
              {
                title: "Family Vacation",
                guest: "The Ahmed Family",
                duration: "4:15",
                thumbnail: "/placeholder.svg?height=250&width=400",
                description:
                  "Perfect family getaway in the heart of Hunza Valley",
                category: "Family",
              },
              {
                title: "Photography Journey",
                guest: "Marco from Italy",
                duration: "6:30",
                thumbnail: "/placeholder.svg?height=250&width=400",
                description:
                  "Capturing the golden hour magic of Hunza landscapes",
                category: "Photography",
              },
              {
                title: "Solo Travel Story",
                guest: "Aisha from Pakistan",
                duration: "4:50",
                thumbnail: "/placeholder.svg?height=250&width=400",
                description:
                  "Empowering solo journey through Hunza's hidden gems",
                category: "Solo Travel",
              },
              {
                title: "Culinary Adventure",
                guest: "Chef Robert from France",
                duration: "3:30",
                thumbnail: "/placeholder.svg?height=250&width=400",
                description:
                  "Discovering authentic Hunza flavors and cooking traditions",
                category: "Culinary",
              },
            ].map((video, index) => (
              <Card
                key={index}
                className="bg-slate-800/30 border-amber-500/20 overflow-hidden hover:border-amber-500/40 transition-all duration-500 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-amber-500 rounded-full p-3">
                      <Play className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-black/60 text-amber-400 border-amber-500/30 text-xs">
                    {video.duration}
                  </Badge>
                  <Badge className="absolute top-3 right-3 bg-amber-500/80 text-black text-xs font-semibold">
                    {video.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {video.title}
                  </h3>
                  <p className="text-amber-400 text-sm mb-3">{video.guest}</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guest Photo Submissions */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-amber-500/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Guest Photo Gallery
              </h3>
              <p className="text-white/70">
                Stunning moments captured by our guests during their stay
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                >
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Guest Photo ${
                      index + 1
                    }`}
                    alt={`Guest photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full px-8 py-3">
                <Camera className="mr-2 h-5 w-5" />
                View Full Gallery
              </Button>
            </div>
          </div>

          {/* Share Your Experience CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl p-12 border border-amber-500/30">
              <h3 className="text-3xl font-bold text-white mb-4">
                Share Your Hunza Story
              </h3>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Stayed with us? We'd love to feature your photos and videos!
                Share your Hunza Valley experience and inspire future travelers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full px-8 py-3">
                  <Camera className="mr-2 h-5 w-5" />
                  Submit Your Photos
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black rounded-full px-8 py-3"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Share Your Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
              Guest Reviews
            </Badge>
            <h2 className="text-5xl font-black text-white mb-6">
              What Our Guests
              <span className="block text-amber-400">Say About Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                country: "Australia",
                rating: 5,
                comment:
                  "Incredible hospitality and breathtaking views! The staff made our stay unforgettable with their warmth and local knowledge.",
              },
              {
                name: "Ahmed Hassan",
                country: "Pakistan",
                rating: 5,
                comment:
                  "Perfect location to explore Hunza Valley. Clean rooms, delicious food, and the mountain views from our room were spectacular.",
              },
              {
                name: "Marco Silva",
                country: "Italy",
                rating: 5,
                comment:
                  "Authentic Pakistani hospitality at its finest. The breakfast was amazing and the staff helped us plan wonderful day trips.",
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-amber-500/20 p-8 hover:border-amber-500/40 transition-all duration-500"
              >
                <CardContent className="p-0">
                  <div className="flex mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "{review.comment}"
                  </blockquote>
                  <div className="border-t border-amber-500/20 pt-6">
                    <div className="font-bold text-white text-lg">
                      {review.name}
                    </div>
                    <div className="text-amber-400 text-sm">
                      {review.country}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-slate-800 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
            Contact Us
          </Badge>
          <h2 className="text-5xl font-black text-white mb-8">
            Ready to Experience
            <span className="block text-amber-400">Hunza Valley?</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Book your stay at Hunza Marcopolo Inn and discover the perfect blend
            of comfort, culture, and natural beauty in the heart of Pakistan's
            most stunning valley.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-8 w-8 text-amber-400 mx-auto mb-4" />
              <div className="text-white font-semibold">Call Us</div>
              <div className="text-amber-400">+92 346 5431 267</div>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-amber-400 mx-auto mb-4" />
              <div className="text-white font-semibold">Email Us</div>
              <div className="text-amber-400">info@marcopoloinngulmit.com</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-4" />
              <div className="text-white font-semibold">Visit Us</div>
              <div className="text-white/60">Gulmit, Hunza Valley</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-12 py-6 rounded-full"
            >
              <Clock className="mr-3 h-6 w-6" />
              Book Your Stay
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white border-2 border-white/30 hover:border-amber-400 hover:text-amber-400 text-xl px-12 py-6 rounded-full backdrop-blur-sm"
            >
              <Mail className="mr-3 h-6 w-6" />
              Send Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Mountain className="h-8 w-8 text-amber-400" />
                <div>
                  <div className="text-xl font-bold text-white">
                    HUNZA MARCOPOLO INN
                  </div>
                  <div className="text-amber-400 text-sm">
                    Gulmit, Hunza Valley
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm">
                Experience authentic Pakistani hospitality in the heart of Hunza
                Valley.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#rooms"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#dining"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Dining
                  </Link>
                </li>
                <li>
                  <Link
                    href="#attractions"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Attractions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>24/7 Front Desk</li>
                <li>Free Wi-Fi</li>
                <li>Free Parking</li>
                <li>Local Guide Services</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Gulmit, Hunza Valley</p>
                <p>Gilgit-Baltistan, Pakistan</p>
                <p className="text-amber-400">+92 346 5431 267</p>
                <p className="text-amber-400">info@marcopoloinngulmit.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>
              &copy; 2024 Hunza Marcopolo Inn. All rights reserved. | Website:
              marcopoloinngulmit.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
