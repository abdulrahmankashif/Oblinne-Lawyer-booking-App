import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  MapPin, 
  FileText, 
  Download, 
  CalendarPlus, 
  Check, 
  User 
} from "lucide-react";
import { allLawyers } from "@shared/data";

// Type for booking data
type BookingConfirmationData = {
  consultationType: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  caseCategory: string;
  description: string;
  lawyer: typeof allLawyers[0];
};

const Confirmation = () => {
  const [, setLocation] = useLocation();
  const [bookingData, setBookingData] = useState<BookingConfirmationData | null>(null);
  
  // Confirmation number
  const confirmationNumber = `LB${Math.floor(10000 + Math.random() * 90000)}`;
  
  // Get booking data from session storage
  useEffect(() => {
    const storedData = sessionStorage.getItem("bookingData");
    if (storedData) {
      setBookingData(JSON.parse(storedData));
    } else {
      // Redirect to home if no booking data found
      setLocation("/");
    }
  }, [setLocation]);
  
  // If no booking data, show loading
  if (!bookingData) {
    return (
      <section className="py-8 bg-paklightgray">
        <div className="container mx-auto px-4">
          <Card className="p-8 text-center">
            <p className="text-pakdarkgray">Loading confirmation details...</p>
          </Card>
        </div>
      </section>
    );
  }
  
  // Calculate total fee
  const consultationFee = bookingData.lawyer.consultationFee;
  const tax = Math.round(consultationFee * 0.05);
  const totalFee = consultationFee + tax;

  return (
    <section className="py-8 bg-paklightgray">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white overflow-hidden">
            <div className="bg-pakgreen bg-opacity-10 p-8 text-center">
              <div className="w-20 h-20 bg-pakgreen rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h1 className="font-roboto font-bold text-2xl text-pakblue mb-2">Booking Confirmed!</h1>
              <p className="text-pakdarkgray">Your appointment has been successfully scheduled</p>
            </div>

            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-pakblue bg-opacity-20 flex items-center justify-center mr-4">
                    <User className="h-8 w-8 text-pakblue" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-pakblue text-lg">{bookingData.lawyer.name}</h2>
                    <p className="text-pakgreen">{bookingData.lawyer.title}</p>
                  </div>
                </div>
                <div className="bg-blue-100 text-pakblue px-4 py-1 rounded-full text-sm font-semibold">
                  Confirmation #{confirmationNumber}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-pakblue mb-3">Appointment Details</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-pakgreen mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-pakdarkgray">{bookingData.date}, 2023</p>
                        <p className="text-sm text-pakdarkgray">{bookingData.time} - {incrementTime(bookingData.time)}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-pakgreen mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-pakdarkgray">
                          {bookingData.consultationType === "in-person" ? "In-person Consultation" : "Video Consultation"}
                        </p>
                        {bookingData.consultationType === "in-person" ? (
                          <p className="text-sm text-pakdarkgray">
                            {bookingData.lawyer.name} Law Associates, {bookingData.lawyer.address}, {bookingData.lawyer.city}
                          </p>
                        ) : (
                          <p className="text-sm text-pakdarkgray">
                            You'll receive a video link via email before the appointment
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 text-pakgreen mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-pakdarkgray">Case Category</p>
                        <p className="text-sm text-pakdarkgray">{bookingData.caseCategory}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-pakblue mb-3">Payment Information</h3>
                  <div className="bg-paklightgray p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-pakdarkgray">Consultation Fee:</span>
                      <span className="font-semibold text-pakblue">PKR {consultationFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-pakdarkgray">Tax (5%):</span>
                      <span className="font-semibold text-pakblue">PKR {tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-semibold text-pakdarkgray">Total:</span>
                      <span className="font-bold text-pakblue">PKR {totalFee.toLocaleString()}</span>
                    </div>
                    <div className="mt-3 text-sm text-pakdarkgray">
                      <p>Payment to be made at the time of consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <h3 className="font-semibold text-yellow-800 mb-1">Appointment Instructions</h3>
                <ul className="text-sm text-yellow-800 list-disc list-inside">
                  <li>Please arrive 15 minutes before your scheduled time</li>
                  <li>Bring identification and any relevant documents</li>
                  <li>If you need to reschedule, please do so at least 24 hours in advance</li>
                  <li>Parking is available at the office location</li>
                </ul>
              </div>

              <div className="text-center space-y-4">
                <div>
                  <Button className="bg-pakblue text-white hover:bg-opacity-90">
                    <Download className="mr-1 h-4 w-4" /> Download Confirmation
                  </Button>
                  <Button variant="outline" className="ml-2 border-pakblue text-pakblue hover:bg-pakblue hover:text-white">
                    <CalendarPlus className="mr-1 h-4 w-4" /> Add to Calendar
                  </Button>
                </div>
                <Button 
                  variant="link" 
                  className="text-pakgreen hover:underline"
                  onClick={() => setLocation("/")}
                >
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Helper function to increment time by 1 hour
function incrementTime(timeString: string): string {
  const isPM = timeString.includes("PM");
  const hour = parseInt(timeString.split(":")[0]);
  
  let newHour = hour + 1;
  if (newHour === 12 && !isPM) {
    return `${newHour}:00 PM`;
  } else if (newHour === 12 && isPM) {
    return `${newHour}:00 AM`;
  } else if (newHour > 12) {
    newHour = newHour - 12;
    return `${newHour}:00 ${isPM ? "AM" : "PM"}`;
  }
  
  return `${newHour}:00 ${isPM ? "PM" : "AM"}`;
}

export default Confirmation;
