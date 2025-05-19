import { useState } from "react";
import { useLocation, Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, Star, MapPin } from "lucide-react";
import { allLawyers } from "@shared/data";

const LawyerProfile = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  
  // Find lawyer by ID
  const lawyer = allLawyers.find(l => l.id === parseInt(id));
  
  // If lawyer not found, show error
  if (!lawyer) {
    return (
      <section className="py-8 bg-paklightgray">
        <div className="container mx-auto px-4">
          <Card className="p-8 text-center">
            <h2 className="text-pakblue font-bold text-2xl mb-4">Lawyer Not Found</h2>
            <p className="text-pakdarkgray mb-6">We couldn't find the lawyer you're looking for.</p>
            <Button 
              className="bg-pakblue text-white hover:bg-opacity-90"
              onClick={() => setLocation("/lawyers")}
            >
              Back to Lawyers
            </Button>
          </Card>
        </div>
      </section>
    );
  }
  
  // Build availability data
  const availability = [
    { day: "Mon", status: "Available" },
    { day: "Tue", status: "Available" },
    { day: "Wed", status: "Available" },
    { day: "Thu", status: "Available" },
    { day: "Fri", status: "Court Day" },
    { day: "Sat", status: "Limited" },
    { day: "Sun", status: "Closed" }
  ];

  return (
    <section className="py-8 bg-paklightgray">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <Button 
          variant="link" 
          className="flex items-center text-pakblue hover:text-pakgreen mb-6 p-0"
          onClick={() => setLocation("/lawyers")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lawyers
        </Button>

        {/* Lawyer Profile Header */}
        <Card className="bg-white overflow-hidden mb-6">
          <div className="md:flex">
            <div className="md:w-1/3 lg:w-1/4 bg-pakblue bg-opacity-20 h-56 md:h-auto flex items-center justify-center">
              <div className="text-pakblue opacity-30">
                {lawyer.gender === "male" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                )}
              </div>
            </div>
            <CardContent className="p-6 md:w-2/3 lg:w-3/4">
              <div className="md:flex justify-between items-start">
                <div>
                  <div className="flex items-center flex-wrap">
                    <h1 className="font-roboto font-bold text-2xl md:text-3xl text-pakblue">{lawyer.name}</h1>
                    <div className="ml-3 flex">
                      {[...Array(Math.floor(lawyer.rating))].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                      ))}
                      {lawyer.rating % 1 !== 0 && (
                        <Star className="h-4 w-4 fill-current text-yellow-500 opacity-50" />
                      )}
                      <span className="ml-1 text-pakdarkgray">({lawyer.reviewCount})</span>
                    </div>
                  </div>
                  <p className="text-pakgreen font-semibold mt-1">{lawyer.title}</p>
                  <div className="flex items-center text-sm text-pakdarkgray mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{lawyer.court}, {lawyer.city}, {lawyer.province}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                  <Button 
                    className="bg-pakgreen text-white hover:bg-opacity-90"
                    onClick={() => setLocation(`/booking/${lawyer.id}`)}
                  >
                    Book Appointment
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-pakblue text-pakblue hover:bg-pakblue hover:text-white"
                  >
                    <MessageSquare className="mr-1 h-4 w-4" /> Message
                  </Button>
                </div>
              </div>

              <div className="border-t border-b py-4 my-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-pakdarkgray text-sm">Experience</p>
                  <p className="font-semibold text-pakblue">{lawyer.yearsOfExperience}+ Years</p>
                </div>
                <div>
                  <p className="text-pakdarkgray text-sm">Consultation Fee</p>
                  <p className="font-semibold text-pakblue">PKR {lawyer.consultationFee.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-pakdarkgray text-sm">Languages</p>
                  <p className="font-semibold text-pakblue">{lawyer.languages.join(", ")}</p>
                </div>
                <div>
                  <p className="text-pakdarkgray text-sm">Success Rate</p>
                  <p className="font-semibold text-pakblue">{lawyer.successRate}%</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {lawyer.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-pakblue hover:bg-blue-200">
                    {specialty}
                  </Badge>
                ))}
              </div>

              <p className="text-pakdarkgray">{lawyer.bio}</p>
            </CardContent>
          </div>
        </Card>

        {/* Lawyer Profile Tabs */}
        <Card className="bg-white overflow-hidden">
          <Tabs defaultValue="about">
            <div className="border-b">
              <TabsList className="h-auto p-0">
                <TabsTrigger 
                  value="about"
                  className="px-6 py-3 font-semibold data-[state=active]:border-b-2 data-[state=active]:border-pakgreen data-[state=active]:text-pakgreen rounded-none"
                >
                  About
                </TabsTrigger>
                <TabsTrigger 
                  value="experience"
                  className="px-6 py-3 font-semibold data-[state=active]:border-b-2 data-[state=active]:border-pakgreen data-[state=active]:text-pakgreen rounded-none"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger 
                  value="education"
                  className="px-6 py-3 font-semibold data-[state=active]:border-b-2 data-[state=active]:border-pakgreen data-[state=active]:text-pakgreen rounded-none"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews"
                  className="px-6 py-3 font-semibold data-[state=active]:border-b-2 data-[state=active]:border-pakgreen data-[state=active]:text-pakgreen rounded-none"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger 
                  value="faqs"
                  className="px-6 py-3 font-semibold data-[state=active]:border-b-2 data-[state=active]:border-pakgreen data-[state=active]:text-pakgreen rounded-none"
                >
                  FAQs
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="about" className="p-6">
              <h2 className="font-roboto font-bold text-xl text-pakblue mb-4">Professional Background</h2>
              <p className="text-pakdarkgray mb-4">{lawyer.background}</p>
              <p className="text-pakdarkgray mb-4">{lawyer.additionalInfo}</p>
              
              <h2 className="font-roboto font-bold text-xl text-pakblue mt-6 mb-4">Areas of Expertise</h2>
              <ul className="list-disc list-inside text-pakdarkgray mb-6 space-y-2">
                {lawyer.expertiseAreas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>

              <h2 className="font-roboto font-bold text-xl text-pakblue mt-6 mb-4">Practice Philosophy</h2>
              <p className="text-pakdarkgray mb-4">{lawyer.philosophy}</p>
              
              <h2 className="font-roboto font-bold text-xl text-pakblue mt-6 mb-4">Availability</h2>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-6">
                {availability.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="font-semibold text-pakdarkgray mb-1">{day.day}</div>
                    <div className={`rounded py-1 text-sm ${
                      day.status === "Available" ? "bg-green-100 text-green-800" : 
                      day.status === "Limited" ? "bg-yellow-100 text-yellow-800" : 
                      "bg-red-100 text-red-800"
                    }`}>
                      {day.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button 
                  className="bg-pakgreen text-white hover:bg-opacity-90"
                  onClick={() => setLocation(`/booking/${lawyer.id}`)}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="experience" className="p-6">
              <h2 className="font-roboto font-bold text-xl text-pakblue mb-4">Professional Experience</h2>
              
              {lawyer.experience.map((exp, index) => (
                <div key={index} className="mb-6 pb-6 border-b last:border-0">
                  <h3 className="font-semibold text-pakblue text-lg">{exp.position}</h3>
                  <p className="text-pakgreen">{exp.company}</p>
                  <p className="text-sm text-pakdarkgray mb-2">{exp.duration}</p>
                  <p className="text-pakdarkgray">{exp.description}</p>
                </div>
              ))}
              
              <div className="mt-8 text-center">
                <Button 
                  className="bg-pakgreen text-white hover:bg-opacity-90"
                  onClick={() => setLocation(`/booking/${lawyer.id}`)}
                >
                  Book a Consultation
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="p-6">
              <h2 className="font-roboto font-bold text-xl text-pakblue mb-4">Education & Certifications</h2>
              
              {lawyer.education.map((edu, index) => (
                <div key={index} className="mb-6 pb-6 border-b last:border-0">
                  <h3 className="font-semibold text-pakblue text-lg">{edu.degree}</h3>
                  <p className="text-pakgreen">{edu.institution}</p>
                  <p className="text-sm text-pakdarkgray">{edu.year}</p>
                </div>
              ))}
              
              <h2 className="font-roboto font-bold text-xl text-pakblue mt-6 mb-4">Bar Admissions</h2>
              <ul className="list-disc list-inside text-pakdarkgray mb-6">
                {lawyer.barAdmissions.map((admission, index) => (
                  <li key={index}>{admission}</li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <Button 
                  className="bg-pakgreen text-white hover:bg-opacity-90"
                  onClick={() => setLocation(`/booking/${lawyer.id}`)}
                >
                  Schedule Now
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-roboto font-bold text-xl text-pakblue">Client Reviews</h2>
                <div className="flex items-center">
                  <div className="mr-2">
                    <strong className="text-2xl text-pakblue">{lawyer.rating}</strong>
                    <span className="text-pakdarkgray"> / 5</span>
                  </div>
                  <div className="flex">
                    {[...Array(Math.floor(lawyer.rating))].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                    {lawyer.rating % 1 !== 0 && (
                      <Star className="h-5 w-5 fill-current text-yellow-500 opacity-50" />
                    )}
                  </div>
                </div>
              </div>
              
              {lawyer.reviews.map((review, index) => (
                <div key={index} className="mb-6 pb-6 border-b last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-pakblue bg-opacity-10 flex items-center justify-center mr-3">
                        <span className="text-pakblue font-semibold">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-pakblue">{review.name}</h4>
                        <p className="text-xs text-pakdarkgray">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-pakdarkgray">{review.comment}</p>
                </div>
              ))}
              
              <div className="mt-8 text-center">
                <Button 
                  className="bg-pakgreen text-white hover:bg-opacity-90"
                  onClick={() => setLocation(`/booking/${lawyer.id}`)}
                >
                  Book This Lawyer
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="faqs" className="p-6">
              <h2 className="font-roboto font-bold text-xl text-pakblue mb-4">Frequently Asked Questions</h2>
              
              {lawyer.faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-pakblue mb-2">{faq.question}</h3>
                  <p className="text-pakdarkgray">{faq.answer}</p>
                </div>
              ))}
              
              <div className="mt-8 text-center">
                <Button 
                  className="bg-pakgreen text-white hover:bg-opacity-90"
                  onClick={() => setLocation(`/booking/${lawyer.id}`)}
                >
                  Book a Consultation
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default LawyerProfile;
