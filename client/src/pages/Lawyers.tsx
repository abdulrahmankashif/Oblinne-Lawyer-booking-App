import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Filter, ArrowUpDown } from "lucide-react";
import { allLawyers } from "@shared/data";

// Type for filtered options
type Filters = {
  specializations: string[];
  location: string;
  experience: string;
  rating: string;
  languages: string[];
};

const Lawyers = () => {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(location.split("?")[1] || "");
  
  // Initialize filters from URL
  const initialSpecialization = searchParams.get("specialization") || "";
  const initialLocation = searchParams.get("location") || "";
  
  // Set up filter state
  const [filters, setFilters] = useState<Filters>({
    specializations: initialSpecialization ? [initialSpecialization] : [],
    location: initialLocation,
    experience: "",
    rating: "",
    languages: []
  });
  
  // Filtered lawyers state
  const [filteredLawyers, setFilteredLawyers] = useState(allLawyers);
  
  // Apply filters effect
  useEffect(() => {
    let results = [...allLawyers];
    
    // Filter by specializations
    if (filters.specializations.length > 0) {
      results = results.filter(lawyer => 
        filters.specializations.some(spec => 
          lawyer.specializationIds.includes(spec)
        )
      );
    }
    
    // Filter by location
    if (filters.location) {
      results = results.filter(lawyer => 
        lawyer.city.toLowerCase() === filters.location.toLowerCase()
      );
    }
    
    // Filter by experience
    if (filters.experience) {
      const [min, max] = filters.experience.split("-").map(Number);
      if (max) {
        results = results.filter(lawyer => 
          lawyer.yearsOfExperience >= min && lawyer.yearsOfExperience <= max
        );
      } else {
        results = results.filter(lawyer => 
          lawyer.yearsOfExperience >= min
        );
      }
    }
    
    // Filter by rating
    if (filters.rating) {
      const minRating = Number(filters.rating);
      results = results.filter(lawyer => 
        lawyer.rating >= minRating
      );
    }
    
    // Filter by languages
    if (filters.languages.length > 0) {
      results = results.filter(lawyer => 
        filters.languages.every(lang => 
          lawyer.languages.includes(lang)
        )
      );
    }
    
    setFilteredLawyers(results);
  }, [filters]);

  // Handle checkbox change for specializations
  const handleSpecializationChange = (specialization: string, checked: boolean) => {
    setFilters(prev => {
      if (checked) {
        return {
          ...prev,
          specializations: [...prev.specializations, specialization]
        };
      } else {
        return {
          ...prev,
          specializations: prev.specializations.filter(s => s !== specialization)
        };
      }
    });
  };

  // Handle checkbox change for languages
  const handleLanguageChange = (language: string, checked: boolean) => {
    setFilters(prev => {
      if (checked) {
        return {
          ...prev,
          languages: [...prev.languages, language]
        };
      } else {
        return {
          ...prev,
          languages: prev.languages.filter(l => l !== language)
        };
      }
    });
  };

  // Handle radio change
  const handleRadioChange = (name: keyof Filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      specializations: [],
      location: "",
      experience: "",
      rating: "",
      languages: []
    });
    setLocation("/lawyers");
  };

  return (
    <section className="py-8 bg-paklightgray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="font-roboto font-bold text-3xl text-pakblue mb-2">Find Lawyers in Pakistan</h1>
            <p className="text-pakdarkgray">Search and filter from our extensive network of legal professionals</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button variant="outline" className="border-pakblue text-pakblue hover:bg-pakblue hover:text-white">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
            <Button variant="outline" className="border-pakblue text-pakblue hover:bg-pakblue hover:text-white">
              <ArrowUpDown className="h-4 w-4 mr-2" /> Sort
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-roboto font-semibold text-pakblue border-b pb-2 mb-4">Filters</h3>
            
            {/* Legal Specialization */}
            <div className="mb-6">
              <h4 className="font-semibold text-pakdarkgray mb-2">Legal Specialization</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox 
                    id="family" 
                    checked={filters.specializations.includes("family")}
                    onCheckedChange={(checked) => handleSpecializationChange("family", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="family" className="ml-2 text-pakdarkgray">Family Law</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="corporate" 
                    checked={filters.specializations.includes("corporate")}
                    onCheckedChange={(checked) => handleSpecializationChange("corporate", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="corporate" className="ml-2 text-pakdarkgray">Corporate Law</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="criminal" 
                    checked={filters.specializations.includes("criminal")}
                    onCheckedChange={(checked) => handleSpecializationChange("criminal", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="criminal" className="ml-2 text-pakdarkgray">Criminal Defense</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="property" 
                    checked={filters.specializations.includes("property")}
                    onCheckedChange={(checked) => handleSpecializationChange("property", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="property" className="ml-2 text-pakdarkgray">Property Law</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="tax" 
                    checked={filters.specializations.includes("tax")}
                    onCheckedChange={(checked) => handleSpecializationChange("tax", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="tax" className="ml-2 text-pakdarkgray">Tax Law</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="immigration" 
                    checked={filters.specializations.includes("immigration")}
                    onCheckedChange={(checked) => handleSpecializationChange("immigration", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="immigration" className="ml-2 text-pakdarkgray">Immigration Law</Label>
                </div>
              </div>
            </div>
            
            {/* Location */}
            <div className="mb-6">
              <h4 className="font-semibold text-pakdarkgray mb-2">Location</h4>
              <Select 
                value={filters.location} 
                onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Cities</SelectItem>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="peshawar">Peshawar</SelectItem>
                  <SelectItem value="quetta">Quetta</SelectItem>
                  <SelectItem value="multan">Multan</SelectItem>
                  <SelectItem value="faisalabad">Faisalabad</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Experience */}
            <div className="mb-6">
              <h4 className="font-semibold text-pakdarkgray mb-2">Experience</h4>
              <RadioGroup 
                value={filters.experience}
                onValueChange={(value) => handleRadioChange("experience", value)}
                className="space-y-2"
              >
                <div className="flex items-center">
                  <RadioGroupItem value="" id="exp-any" className="text-pakgreen" />
                  <Label htmlFor="exp-any" className="ml-2 text-pakdarkgray">Any Experience</Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="1-5" id="exp-1-5" className="text-pakgreen" />
                  <Label htmlFor="exp-1-5" className="ml-2 text-pakdarkgray">1-5 years</Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="5-10" id="exp-5-10" className="text-pakgreen" />
                  <Label htmlFor="exp-5-10" className="ml-2 text-pakdarkgray">5-10 years</Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="10-100" id="exp-10+" className="text-pakgreen" />
                  <Label htmlFor="exp-10+" className="ml-2 text-pakdarkgray">10+ years</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Rating */}
            <div className="mb-6">
              <h4 className="font-semibold text-pakdarkgray mb-2">Rating</h4>
              <RadioGroup 
                value={filters.rating}
                onValueChange={(value) => handleRadioChange("rating", value)}
                className="space-y-2"
              >
                <div className="flex items-center">
                  <RadioGroupItem value="" id="rating-any" className="text-pakgreen" />
                  <Label htmlFor="rating-any" className="ml-2 text-pakdarkgray">Any Rating</Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="4" id="rating-4" className="text-pakgreen" />
                  <Label htmlFor="rating-4" className="ml-2 text-pakdarkgray">4★ & above</Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="3" id="rating-3" className="text-pakgreen" />
                  <Label htmlFor="rating-3" className="ml-2 text-pakdarkgray">3★ & above</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Language */}
            <div className="mb-6">
              <h4 className="font-semibold text-pakdarkgray mb-2">Language</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox 
                    id="english" 
                    checked={filters.languages.includes("English")}
                    onCheckedChange={(checked) => handleLanguageChange("English", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="english" className="ml-2 text-pakdarkgray">English</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="urdu" 
                    checked={filters.languages.includes("Urdu")}
                    onCheckedChange={(checked) => handleLanguageChange("Urdu", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="urdu" className="ml-2 text-pakdarkgray">Urdu</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="punjabi" 
                    checked={filters.languages.includes("Punjabi")}
                    onCheckedChange={(checked) => handleLanguageChange("Punjabi", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="punjabi" className="ml-2 text-pakdarkgray">Punjabi</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="sindhi" 
                    checked={filters.languages.includes("Sindhi")}
                    onCheckedChange={(checked) => handleLanguageChange("Sindhi", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="sindhi" className="ml-2 text-pakdarkgray">Sindhi</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="pashto" 
                    checked={filters.languages.includes("Pashto")}
                    onCheckedChange={(checked) => handleLanguageChange("Pashto", checked === true)}
                    className="text-pakgreen"
                  />
                  <Label htmlFor="pashto" className="ml-2 text-pakdarkgray">Pashto</Label>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-pakgreen text-white hover:bg-opacity-90"
              onClick={() => {
                // Update URL with filters
                const queryParams = [];
                if (filters.specializations.length === 1) queryParams.push(`specialization=${filters.specializations[0]}`);
                if (filters.location) queryParams.push(`location=${filters.location}`);
                
                const queryString = queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
                setLocation(`/lawyers${queryString}`);
              }}
            >
              Apply Filters
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-pakdarkgray text-pakdarkgray mt-2 hover:bg-gray-100"
              onClick={resetFilters}
            >
              Reset
            </Button>
          </div>
          
          {/* Lawyers List */}
          <div className="w-full md:w-3/4">
            {filteredLawyers.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredLawyers.map((lawyer) => (
                  <Card key={lawyer.id} className="bg-white overflow-hidden shadow-md hover:shadow-lg transition flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 h-48 md:h-auto bg-pakblue bg-opacity-20 flex items-center justify-center">
                      <div className="text-pakblue opacity-30">
                        {lawyer.gender === "male" ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-roboto font-bold text-lg text-pakblue">{lawyer.name}</h3>
                          <p className="text-pakgreen font-semibold text-sm">{lawyer.title}</p>
                        </div>
                        <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span className="text-pakdarkgray text-sm ml-1">{lawyer.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-pakdarkgray mt-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{lawyer.city}, {lawyer.province}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {lawyer.specialties.slice(0, 3).map((specialty, index) => (
                          <span key={index} className="bg-blue-100 text-pakblue text-xs px-2 py-0.5 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-pakdarkgray">
                        <p>Experience: <span className="font-semibold">{lawyer.yearsOfExperience} years</span></p>
                        <p>Languages: <span className="font-semibold">{lawyer.languages.join(", ")}</span></p>
                        <p>Consultation Fee: <span className="font-semibold">PKR {lawyer.consultationFee.toLocaleString()}</span></p>
                      </div>
                      <div className="mt-3">
                        <Link href={`/lawyer/${lawyer.id}`}>
                          <Button size="sm" className="bg-pakblue text-white hover:bg-opacity-90">
                            View Profile
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <h3 className="text-pakblue font-semibold mb-2">No lawyers found</h3>
                <p className="text-pakdarkgray">Please try different filter criteria.</p>
                <Button 
                  variant="link" 
                  className="text-pakgreen mt-4"
                  onClick={resetFilters}
                >
                  Clear all filters
                </Button>
              </Card>
            )}
            
            {/* Pagination */}
            {filteredLawyers.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-1">
                  <Button variant="outline" size="icon" className="border-pakdarkgray text-pakdarkgray hover:bg-pakdarkgray hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  <Button variant="outline" className="bg-pakblue text-white border-pakblue">1</Button>
                  <Button variant="outline" className="border-pakdarkgray text-pakdarkgray hover:bg-pakdarkgray hover:text-white">2</Button>
                  <Button variant="outline" className="border-pakdarkgray text-pakdarkgray hover:bg-pakdarkgray hover:text-white">3</Button>
                  <Button variant="outline" className="border-pakdarkgray text-pakdarkgray hover:bg-pakdarkgray hover:text-white">4</Button>
                  <Button variant="outline" className="border-pakdarkgray text-pakdarkgray hover:bg-pakdarkgray hover:text-white">5</Button>
                  <Button variant="outline" size="icon" className="border-pakdarkgray text-pakdarkgray hover:bg-pakdarkgray hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lawyers;
