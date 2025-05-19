import { useState } from "react";
import { useLocation, useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, User, InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { allLawyers } from "@shared/data";

// Type for booking form data
type BookingFormData = {
  consultationType: "in-person" | "video";
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  caseCategory: string;
  description: string;
  termsAgreed: boolean;
};

const Booking = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  
  // Find lawyer by ID
  const lawyer = allLawyers.find(l => l.id === parseInt(id));
  
  // Current step state
  const [step, setStep] = useState<number>(1);
  
  // Available dates and times (simplified mock data)
  const availableDates = [
    { day: "Mon", date: 10, available: true },
    { day: "Tue", date: 11, available: true },
    { day: "Wed", date: 12, available: true },
    { day: "Thu", date: 13, available: true },
    { day: "Fri", date: 14, available: false },
    { day: "Sat", date: 15, available: true },
    { day: "Sun", date: 16, available: false }
  ];
  
  const availableTimes = [
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: false },
    { time: "5:00 PM", available: true }
  ];
  
  // Form state using react-hook-form
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<BookingFormData>({
    defaultValues: {
      consultationType: "in-person",
      date: "",
      time: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      caseCategory: "",
      description: "",
      termsAgreed: false
    }
  });
  
  // Watch values for summary
  const consultationType = watch("consultationType");
  const selectedDate = watch("date");
  const selectedTime = watch("time");
  
  // Handle form submission
  const onSubmit = (data: BookingFormData) => {
    console.log("Booking form data:", data);
    // Store form data in session storage for confirmation page
    sessionStorage.setItem("bookingData", JSON.stringify({
      ...data,
      lawyer: lawyer
    }));
    setLocation("/confirmation");
  };
  
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

  return (
    <section className="py-8 bg-paklightgray">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <Button 
          variant="link" 
          className="flex items-center text-pakblue hover:text-pakgreen mb-6 p-0"
          onClick={() => setLocation(`/lawyer/${lawyer.id}`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lawyer Profile
        </Button>

        <Card className="bg-white overflow-hidden">
          <CardHeader className="p-6 border-b">
            <h1 className="font-roboto font-bold text-2xl text-pakblue">Book a Consultation</h1>
            <p className="text-pakdarkgray">Complete the form below to schedule your appointment with {lawyer.name}</p>
          </CardHeader>
          
          <div className="md:flex">
            {/* Form Section */}
            <div className="md:w-2/3 p-6 md:border-r">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step Progress */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-semibold ${step >= 1 ? "text-pakblue" : "text-pakdarkgray"}`}>Appointment Details</span>
                    <span className={`font-semibold ${step >= 2 ? "text-pakblue" : "text-pakdarkgray"}`}>Personal Information</span>
                    <span className={`font-semibold ${step >= 3 ? "text-pakblue" : "text-pakdarkgray"}`}>Confirmation</span>
                  </div>
                  <div className="relative">
                    <div className="h-1 bg-gray-200 rounded-full">
                      <div 
                        className="h-1 bg-pakgreen rounded-full" 
                        style={{ width: `${(step / 3) * 100}%` }}
                      ></div>
                    </div>
                    <div className={`absolute top-0 left-0 transform -translate-y-1/2 h-4 w-4 ${step >= 1 ? "bg-pakgreen" : "bg-gray-300"} rounded-full`}></div>
                    <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 ${step >= 2 ? "bg-pakgreen" : "bg-gray-300"} rounded-full`}></div>
                    <div className={`absolute top-0 right-0 transform -translate-y-1/2 h-4 w-4 ${step >= 3 ? "bg-pakgreen" : "bg-gray-300"} rounded-full`}></div>
                  </div>
                </div>

                {step === 1 && (
                  <>
                    {/* Booking Type */}
                    <div className="mb-6">
                      <Label className="block text-pakdarkgray font-semibold mb-2">Consultation Type</Label>
                      <RadioGroup 
                        value={consultationType}
                        onValueChange={(value) => setValue("consultationType", value as "in-person" | "video")}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <Label
                          htmlFor="in-person"
                          className="border rounded-lg p-4 flex items-start cursor-pointer hover:border-pakgreen transition"
                        >
                          <RadioGroupItem 
                            value="in-person" 
                            id="in-person" 
                            className="mt-1"
                            {...register("consultationType")}
                          />
                          <div className="ml-3">
                            <div className="font-semibold text-pakblue">In-person Meeting</div>
                            <p className="text-sm text-pakdarkgray">Face-to-face consultation at the lawyer's office</p>
                          </div>
                        </Label>
                        <Label
                          htmlFor="video"
                          className="border rounded-lg p-4 flex items-start cursor-pointer hover:border-pakgreen transition"
                        >
                          <RadioGroupItem 
                            value="video" 
                            id="video" 
                            className="mt-1"
                            {...register("consultationType")}
                          />
                          <div className="ml-3">
                            <div className="font-semibold text-pakblue">Video Consultation</div>
                            <p className="text-sm text-pakdarkgray">Online meeting via video conferencing</p>
                          </div>
                        </Label>
                      </RadioGroup>
                    </div>

                    {/* Select Date */}
                    <div className="mb-6">
                      <Label className="block text-pakdarkgray font-semibold mb-2">Select Date</Label>
                      <div className="grid grid-cols-7 gap-2 mb-4">
                        {availableDates.map((day, index) => (
                          <div key={index} className="text-center">
                            <div className="text-xs text-pakdarkgray mb-1">{day.day}</div>
                            <Button
                              type="button"
                              variant={selectedDate === `${day.day}-${day.date}` ? "default" : "outline"}
                              className={`w-full py-2 ${
                                !day.available ? "text-gray-400 cursor-not-allowed" : 
                                selectedDate === `${day.day}-${day.date}` ? "bg-pakgreen bg-opacity-10 border-pakgreen text-pakgreen" : 
                                "text-pakdarkgray hover:border-pakgreen hover:text-pakgreen"
                              }`}
                              disabled={!day.available}
                              onClick={() => setValue("date", `${day.day}-${day.date}`)}
                            >
                              {day.date}
                            </Button>
                          </div>
                        ))}
                      </div>
                      {errors.date && (
                        <p className="text-red-500 text-sm mt-1">Please select a date</p>
                      )}
                    </div>

                    {/* Select Time */}
                    <div className="mb-6">
                      <Label className="block text-pakdarkgray font-semibold mb-2">Select Time</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {availableTimes.map((timeSlot, index) => (
                          <Button
                            key={index}
                            type="button"
                            variant={selectedTime === timeSlot.time ? "default" : "outline"}
                            className={`py-2 ${
                              !timeSlot.available ? "text-gray-400 cursor-not-allowed" : 
                              selectedTime === timeSlot.time ? "bg-pakgreen bg-opacity-10 border-pakgreen text-pakgreen" : 
                              "text-pakdarkgray hover:border-pakgreen hover:text-pakgreen"
                            }`}
                            disabled={!timeSlot.available}
                            onClick={() => setValue("time", timeSlot.time)}
                          >
                            {timeSlot.time}
                          </Button>
                        ))}
                      </div>
                      {errors.time && (
                        <p className="text-red-500 text-sm mt-1">Please select a time</p>
                      )}
                    </div>

                    <div className="mt-8">
                      <Button 
                        type="button"
                        className="w-full bg-pakgreen text-white hover:bg-opacity-90"
                        onClick={() => {
                          if (selectedDate && selectedTime) {
                            setStep(2);
                          } else {
                            if (!selectedDate) setValue("date", "", { shouldValidate: true });
                            if (!selectedTime) setValue("time", "", { shouldValidate: true });
                          }
                        }}
                      >
                        Next: Personal Information
                      </Button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    {/* Personal Information */}
                    <div className="mb-6">
                      <h2 className="font-roboto font-semibold text-xl text-pakblue mb-4">Personal Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="block text-pakdarkgray font-semibold mb-1">First Name</Label>
                          <Input 
                            id="firstName"
                            placeholder="Enter your first name"
                            {...register("firstName", { required: "First name is required" })}
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="block text-pakdarkgray font-semibold mb-1">Last Name</Label>
                          <Input 
                            id="lastName"
                            placeholder="Enter your last name"
                            {...register("lastName", { required: "Last name is required" })}
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email" className="block text-pakdarkgray font-semibold mb-1">Email Address</Label>
                          <Input 
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { 
                              required: "Email is required",
                              pattern: { 
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                              }
                            })}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="phone" className="block text-pakdarkgray font-semibold mb-1">Phone Number</Label>
                          <Input 
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            {...register("phone", { required: "Phone number is required" })}
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Case Details */}
                    <div className="mb-8">
                      <h2 className="font-roboto font-semibold text-xl text-pakblue mb-4">Case Details</h2>
                      <div>
                        <Label htmlFor="caseCategory" className="block text-pakdarkgray font-semibold mb-1">Case Category</Label>
                        <Select 
                          onValueChange={(value) => setValue("caseCategory", value)}
                          value={watch("caseCategory")}
                        >
                          <SelectTrigger id="caseCategory" className={errors.caseCategory ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select case category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Select case category</SelectItem>
                            {lawyer.specialties.map((specialty, index) => (
                              <SelectItem key={index} value={specialty}>{specialty}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.caseCategory && (
                          <p className="text-red-500 text-sm mt-1">{errors.caseCategory.message}</p>
                        )}
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="description" className="block text-pakdarkgray font-semibold mb-1">Brief Description of Your Case</Label>
                        <Textarea 
                          id="description"
                          placeholder="Please provide a brief overview of your legal issue..."
                          className={`h-32 ${errors.description ? "border-red-500" : ""}`}
                          {...register("description", { required: "Case description is required" })}
                        />
                        {errors.description && (
                          <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                        )}
                      </div>
                      <div className="mt-4">
                        <div className="flex items-top space-x-2">
                          <Checkbox 
                            id="termsAgreed" 
                            {...register("termsAgreed", { required: "You must agree to the terms" })}
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="termsAgreed"
                              className={`text-sm font-medium leading-none ${
                                errors.termsAgreed ? "text-red-500" : "text-pakdarkgray"
                              }`}
                            >
                              I agree to the <a href="#" className="text-pakblue hover:underline">terms of service</a> and <a href="#" className="text-pakblue hover:underline">privacy policy</a>.
                            </Label>
                            {errors.termsAgreed && (
                              <p className="text-red-500 text-xs">{errors.termsAgreed.message}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <Button 
                        type="button"
                        variant="outline"
                        className="w-full border-pakdarkgray text-pakdarkgray hover:bg-pakdarkgray hover:text-white"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button"
                        className="w-full bg-pakgreen text-white hover:bg-opacity-90"
                        onClick={() => {
                          const result = handleSubmit((data) => {
                            setStep(3);
                          })();
                        }}
                      >
                        Review Booking
                      </Button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="mb-6">
                      <h2 className="font-roboto font-semibold text-xl text-pakblue mb-4">Review Your Booking</h2>
                      
                      <div className="bg-paklightgray p-4 rounded-md mb-6">
                        <h3 className="font-semibold text-pakblue mb-2">Appointment Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-pakdarkgray text-sm">Date:</p>
                            <p className="font-semibold text-pakblue">{selectedDate}</p>
                          </div>
                          <div>
                            <p className="text-pakdarkgray text-sm">Time:</p>
                            <p className="font-semibold text-pakblue">{selectedTime}</p>
                          </div>
                          <div>
                            <p className="text-pakdarkgray text-sm">Type:</p>
                            <p className="font-semibold text-pakblue">
                              {consultationType === "in-person" ? "In-person Meeting" : "Video Consultation"}
                            </p>
                          </div>
                          <div>
                            <p className="text-pakdarkgray text-sm">Case:</p>
                            <p className="font-semibold text-pakblue">{watch("caseCategory")}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-paklightgray p-4 rounded-md mb-6">
                        <h3 className="font-semibold text-pakblue mb-2">Personal Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-pakdarkgray text-sm">Name:</p>
                            <p className="font-semibold text-pakblue">{watch("firstName")} {watch("lastName")}</p>
                          </div>
                          <div>
                            <p className="text-pakdarkgray text-sm">Email:</p>
                            <p className="font-semibold text-pakblue">{watch("email")}</p>
                          </div>
                          <div>
                            <p className="text-pakdarkgray text-sm">Phone:</p>
                            <p className="font-semibold text-pakblue">{watch("phone")}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-4 text-sm text-blue-800 bg-blue-50 border-l-4 border-blue-500">
                        <InfoIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                        <p>Please review all information before confirming your booking. You will receive a confirmation email with the details of your appointment.</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex gap-4">
                      <Button 
                        type="button"
                        variant="outline"
                        className="w-full border-pakdarkgray text-pakdarkgray hover:bg-pakdarkgray hover:text-white"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit"
                        className="w-full bg-pakgreen text-white hover:bg-opacity-90"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </div>

            {/* Summary Section */}
            <div className="md:w-1/3 p-6 bg-paklightgray">
              <h2 className="font-roboto font-semibold text-xl text-pakblue mb-4">Booking Summary</h2>
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-pakblue bg-opacity-20 flex items-center justify-center">
                    <User className="h-6 w-6 text-pakblue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pakblue">{lawyer.name}</h3>
                    <p className="text-sm text-pakgreen">{lawyer.title}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pakdarkgray">Date:</span>
                  <span className="font-semibold text-pakblue">
                    {selectedDate ? selectedDate : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pakdarkgray">Time:</span>
                  <span className="font-semibold text-pakblue">
                    {selectedTime ? selectedTime : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pakdarkgray">Duration:</span>
                  <span className="font-semibold text-pakblue">1 hour</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pakdarkgray">Type:</span>
                  <span className="font-semibold text-pakblue">
                    {consultationType === "in-person" ? "In-person Meeting" : "Video Consultation"}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pakdarkgray">Consultation Fee:</span>
                  <span className="font-semibold text-pakblue">PKR {lawyer.consultationFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pakdarkgray">Tax (5%):</span>
                  <span className="font-semibold text-pakblue">PKR {Math.round(lawyer.consultationFee * 0.05).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2 text-lg">
                  <span className="font-semibold text-pakdarkgray">Total:</span>
                  <span className="font-bold text-pakblue">PKR {Math.round(lawyer.consultationFee * 1.05).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800">
                <p><InfoIcon className="inline-block h-4 w-4 mr-1" /> Payment will be collected at the time of your appointment. Cancellation is free up to 24 hours before your scheduled time.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Booking;
