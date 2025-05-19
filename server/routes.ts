import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the lawyer booking application
  const apiRouter = app.route("/api");
  
  // Get all lawyers
  app.get("/api/lawyers", async (req, res) => {
    try {
      const lawyers = await storage.getAllLawyers();
      res.json(lawyers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching lawyers" });
    }
  });
  
  // Get lawyer by ID
  app.get("/api/lawyers/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const lawyer = await storage.getLawyer(id);
      
      if (!lawyer) {
        return res.status(404).json({ message: "Lawyer not found" });
      }
      
      res.json(lawyer);
    } catch (error) {
      res.status(500).json({ message: "Error fetching lawyer" });
    }
  });
  
  // Get all legal specializations
  app.get("/api/specializations", async (req, res) => {
    try {
      const specializations = await storage.getAllSpecializations();
      res.json(specializations);
    } catch (error) {
      res.status(500).json({ message: "Error fetching specializations" });
    }
  });
  
  // Create a booking
  app.post("/api/bookings", async (req, res) => {
    try {
      const { 
        lawyerId,
        firstName,
        lastName,
        email,
        phone,
        bookingDate,
        bookingTime,
        consultationType,
        caseCategory,
        caseDescription
      } = req.body;
      
      const booking = await storage.createBooking({
        lawyerId,
        firstName,
        lastName,
        email,
        phone,
        bookingDate,
        bookingTime,
        consultationType,
        caseCategory,
        caseDescription,
        status: "confirmed",
        confirmationNumber: `LB${Math.floor(10000 + Math.random() * 90000)}`,
        createdAt: new Date(),
      });
      
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Error creating booking" });
    }
  });
  
  // Get bookings for a user (would use authentication in a real app)
  app.get("/api/bookings", async (req, res) => {
    try {
      // For prototype, we'll just return all bookings
      // In a real app, this would filter by authenticated user
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Error fetching bookings" });
    }
  });
  
  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
