import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, MapPin, ArrowRight, Search, User, Calendar, Building, Scale } from "lucide-react";
import { legalServices, featuredLawyers } from "@shared/data";

const Home = () => {
  const [, setLocation] = useLocation();
  const [serviceType, setServiceType] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    const queryParams = [];
    if (serviceType) queryParams.push(`specialization=${serviceType}`);
    if (city) queryParams.push(`location=${city}`);
    
    const queryString = queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
    setLocation(`/lawyers${queryString}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 bg-cover bg-center relative" style={{ backgroundColor: 'rgba(0, 80, 158, 0.8)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative">
            <div className="max-w-2xl text-white">
              <h1 className="font-roboto font-bold text-4xl md:text-5xl mb-4">
                Find the Right Legal Help in Pakistan
                <span className="block font-urdu text-2xl mt-2">پاکستان میں قانونی مدد حاصل کریں</span>
              </h1>
              <p className="font-opensans text-lg mb-8">
                Connect with experienced lawyers specializing in Pakistani law for consultations, representation, and legal advice.
              </p>
              <Card className="bg-white p-4 rounded-lg shadow-lg">
                <CardContent className="p-0 pt-4">
                  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                    <div className="flex-1">
                      <label className="block text-pakdarkgray text-sm font-semibold mb-1">Legal Service</label>
                      <Select onValueChange={setServiceType} value={serviceType}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select area of law" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All areas of law</SelectItem>
                          {legalServices.map(service => (
                            <SelectItem key={service.id} value={service.id}>{service.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-pakdarkgray text-sm font-semibold mb-1">Location</label>
                      <Select onValueChange={setCity} value={city}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All cities</SelectItem>
                          <SelectItem value="karachi">Karachi</SelectItem>
                          <SelectItem value="lahore">Lahore</SelectItem>
                          <SelectItem value="islamabad">Islamabad</SelectItem>
                          <SelectItem value="peshawar">Peshawar</SelectItem>
                          <SelectItem value="quetta">Quetta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      onClick={handleSearch}
                      className="bg-pakgreen text-white font-semibold hover:bg-opacity-90 flex items-center justify-center"
                    >
                      <Search className="mr-2 h-4 w-4" /> Find Lawyers
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-roboto font-bold text-3xl text-pakblue">Our Legal Services</h2>
            <p className="mt-2 text-pakdarkgray">Comprehensive legal solutions for all your needs</p>
            <div className="w-20 h-1 bg-pakgreen mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legalServices.slice(0, 3).map((service) => (
              <Card key={service.id} className="bg-paklightgray shadow-sm hover:shadow-md transition">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-pakblue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    {service.icon === 'team' && <User className="h-6 w-6 text-pakblue" />}
                    {service.icon === 'building' && <Building className="h-6 w-6 text-pakblue" />}
                    {service.icon === 'scales' && <Scale className="h-6 w-6 text-pakblue" />}
                  </div>
                  <h3 className="font-roboto font-bold text-xl text-pakblue mb-2">{service.name}</h3>
                  <p className="text-pakdarkgray mb-4">{service.description}</p>
                  <Button 
                    variant="link" 
                    className="p-0 text-pakgreen font-semibold hover:underline flex items-center"
                    onClick={() => setLocation(`/lawyers?specialization=${service.id}`)}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              onClick={() => setLocation("/lawyers")}
              className="bg-pakblue text-white font-semibold hover:bg-opacity-90"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Lawyers */}
      <section className="py-12 bg-paklightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-roboto font-bold text-3xl text-pakblue">Featured Lawyers</h2>
            <p className="mt-2 text-pakdarkgray">Top legal professionals across Pakistan</p>
            <div className="w-20 h-1 bg-pakgreen mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLawyers.map((lawyer) => (
              <Card key={lawyer.id} className="bg-white overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-64 bg-pakblue bg-opacity-20 flex items-center justify-center">
                  <User className="h-24 w-24 text-pakblue opacity-30" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-roboto font-bold text-xl text-pakblue">{lawyer.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="text-pakdarkgray ml-1">{lawyer.rating}</span>
                    </div>
                  </div>
                  <p className="text-pakgreen font-semibold mb-2">{lawyer.title}</p>
                  <div className="flex items-center text-sm text-pakdarkgray mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{lawyer.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {lawyer.specialties.map((specialty, index) => (
                      <span key={index} className="bg-blue-100 text-pakblue text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-pakblue text-white hover:bg-opacity-90"
                    onClick={() => setLocation(`/lawyer/${lawyer.id}`)}
                  >
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              onClick={() => setLocation("/lawyers")}
              className="bg-pakgreen text-white font-semibold hover:bg-opacity-90"
            >
              View All Lawyers
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-roboto font-bold text-3xl text-pakblue">Client Testimonials</h2>
            <p className="mt-2 text-pakdarkgray">What our clients say about our services</p>
            <div className="w-20 h-1 bg-pakgreen mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-paklightgray shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-pakdarkgray italic mb-4">
                  "The lawyer I found through Oblinne was extremely knowledgeable and helped me navigate a complex property dispute. The consultation booking process was smooth and efficient."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                    <span className="text-pakblue font-semibold">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pakblue">Muhammad Rizwan</h4>
                    <p className="text-sm text-pakdarkgray">Karachi, Sindh</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-paklightgray shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <Star className="h-4 w-4 fill-current text-yellow-500 opacity-50" />
                  </div>
                </div>
                <p className="text-pakdarkgray italic mb-4">
                  "I needed urgent legal advice for a family matter and was able to book an appointment with a skilled lawyer the same day through this platform. Highly recommend their services."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                    <span className="text-pakblue font-semibold">SA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pakblue">Saima Ali</h4>
                    <p className="text-sm text-pakdarkgray">Lahore, Punjab</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-paklightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-roboto font-bold text-3xl text-pakblue">How It Works</h2>
            <p className="mt-2 text-pakdarkgray">Simple steps to connect with the right lawyer</p>
            <div className="w-20 h-1 bg-pakgreen mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-pakblue rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-roboto font-bold text-xl text-pakblue mb-2">Search</h3>
                  <p className="text-pakdarkgray">Find lawyers based on your specific legal needs and location across Pakistan.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pakblue rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-roboto font-bold text-xl text-pakblue mb-2">Select</h3>
                  <p className="text-pakdarkgray">Compare profiles, reviews, and expertise to choose the best lawyer for your case.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pakblue rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-roboto font-bold text-xl text-pakblue mb-2">Book</h3>
                  <p className="text-pakdarkgray">Schedule a consultation online or in-person at a time that works for you.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button 
              onClick={() => setLocation("/lawyers")}
              className="bg-pakgreen text-white font-semibold hover:bg-opacity-90"
            >
              Find a Lawyer Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
