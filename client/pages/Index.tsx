import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  ShoppingCart,
  RefreshCw,
  Heart,
  Star,
  Quote,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Index() {
  const [currentWeek, setCurrentWeek] = useState(1);

  const featuredBooks = [
    {
      id: 1,
      title: "The Digital Age",
      author: "Sarah Johnson",
      image: "/placeholder.svg",
      rating: 4.8,
      price: "$12.99",
    },
    {
      id: 2,
      title: "Mindful Living",
      author: "David Chen",
      image: "/placeholder.svg",
      rating: 4.6,
      price: "$15.99",
    },
    {
      id: 3,
      title: "Creative Writing",
      author: "Emma Williams",
      image: "/placeholder.svg",
      rating: 4.9,
      price: "$18.99",
    },
    {
      id: 4,
      title: "Tech Revolution",
      author: "Michael Brown",
      image: "/placeholder.svg",
      rating: 4.7,
      price: "$22.99",
    },
  ];

  const weeklyPicks = [
    {
      week: 1,
      books: [
        {
          title: "Modern Philosophy",
          author: "Alex Turner",
          image: "/placeholder.svg",
        },
        {
          title: "Data Science Basics",
          author: "Lisa Park",
          image: "/placeholder.svg",
        },
      ],
    },
    {
      week: 2,
      books: [
        {
          title: "The Art of Code",
          author: "James Wilson",
          image: "/placeholder.svg",
        },
        {
          title: "Sustainable Living",
          author: "Maria Garcia",
          image: "/placeholder.svg",
        },
      ],
    },
    {
      week: 3,
      books: [
        {
          title: "Digital Marketing",
          author: "Robert Kim",
          image: "/placeholder.svg",
        },
        {
          title: "Psychology Today",
          author: "Jennifer Lee",
          image: "/placeholder.svg",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold text-primary">
                AIRBook
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Books
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-paper-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Discover Your Next
                <span className="text-sage-600 block">Great Read</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Welcome to AIRBook, your premier digital bookstore. Explore
                thousands of titles, from bestsellers to hidden gems, all
                curated for the modern reader. Start your literary journey
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Browse Books
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sage-100 to-cream-200 rounded-2xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg"
                  alt="Featured books"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Featured Books
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked selections from our literary experts, featuring the
              latest releases and timeless classics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredBooks.map((book) => (
              <Card
                key={book.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-paper-100 to-cream-100">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2 group-hover:text-sage-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">by {book.author}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>
                    <span className="font-semibold text-primary">
                      {book.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              See More Books
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 to-paper-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-8">
                About AIRBook
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    English
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AIRBook is a revolutionary digital bookstore dedicated to
                    bringing literature to the modern reader. We believe that
                    great stories should be accessible to everyone, everywhere.
                    Our carefully curated collection spans every genre, from
                    contemporary fiction to academic texts.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    Français
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AIRBook est une librairie numérique révolutionnaire dédiée à
                    apporter la littérature au lecteur moderne. Nous croyons que
                    les grandes histoires devraient être accessibles à tous,
                    partout. Notre collection soigneusement sélectionnée couvre
                    tous les genres.
                  </p>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-cream-100 to-paper-100 border-none">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Quote className="h-8 w-8 text-sage-600 flex-shrink-0 mt-1" />
                    <div>
                      <blockquote className="text-lg font-medium text-primary italic mb-2">
                        "AIRBook has completely transformed my reading
                        experience. The selection is incredible and the digital
                        format makes it so convenient."
                      </blockquote>
                      <cite className="text-muted-foreground">
                        — Sarah Mitchell, Avid Reader
                      </cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-paper-100 to-sage-100 rounded-2xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg"
                  alt="About AIRBook"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Why Choose AIRBook?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of reading with our innovative platform
              designed for book lovers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-sage-100 to-cream-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                  Easy Shopping
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse, search, and purchase your favorite books with just a
                  few clicks. Our intuitive interface makes finding your next
                  read effortless.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-sage-100 to-cream-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <RefreshCw className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                  Updated Collection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stay current with the latest releases and trending titles. Our
                  collection is constantly updated with new arrivals and
                  bestsellers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-sage-100 to-cream-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                  Reading Habit Support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track your reading progress, set goals, and discover new
                  genres. We're here to help you build and maintain healthy
                  reading habits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-paper-50 to-cream-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about AIRBook and our services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-semibold text-primary hover:text-sage-600">
                How do I purchase and download books?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Simply browse our collection, add books to your cart, and
                complete the checkout process. Once purchased, you'll receive
                instant access to download your books in multiple formats
                including PDF, EPUB, and MOBI.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-semibold text-primary hover:text-sage-600">
                Can I read books on multiple devices?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! Your purchased books can be accessed on up to 5 devices. We
                support smartphones, tablets, e-readers, and computers. Your
                reading progress syncs across all devices for a seamless
                experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-semibold text-primary hover:text-sage-600">
                Do you offer refunds or exchanges?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We offer a 7-day satisfaction guarantee. If you're not happy
                with your purchase, you can request a full refund within 7 days
                of purchase. No questions asked.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-semibold text-primary hover:text-sage-600">
                Are there subscription plans available?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes, we offer monthly and annual subscription plans that give
                you access to our premium collection with unlimited downloads.
                Subscribers also get early access to new releases and exclusive
                content.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Weekly Picks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Weekly Picks
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our staff's favorite selections, updated every week.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-muted rounded-lg p-1">
              {weeklyPicks.map((week) => (
                <button
                  key={week.week}
                  onClick={() => setCurrentWeek(week.week)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    currentWeek === week.week
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  WEEK {week.week}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {weeklyPicks
              .find((w) => w.week === currentWeek)
              ?.books.map((book, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex space-x-6">
                      <div className="w-24 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-paper-100 to-cream-100 flex-shrink-0">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-sage-600 transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          by {book.author}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          This week's carefully selected title offers readers an
                          exceptional journey through compelling storytelling
                          and profound insights.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <BookOpen className="h-8 w-8" />
                <span className="font-serif text-2xl font-bold">AIRBook</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Your premier destination for digital literature. Discover, read,
                and enjoy thousands of books at your fingertips.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">contact@airbook.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">New York, NY</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold mb-6">
                Categories
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Fiction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Non-Fiction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Mystery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Romance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Science Fiction
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Biography
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Shopping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Payment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Reading Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/80 text-sm">
                © 2024 AIRBook. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
