import { 
  lawyers as lawyersTable, 
  specializations as specializationsTable,
  bookings as bookingsTable,
  reviews as reviewsTable,
  type Lawyer, 
  type InsertLawyer,
  type Specialization,
  type InsertSpecialization,
  type Booking,
  type InsertBooking,
  type Review,
  type InsertReview,
  users as usersTable, 
  type User, 
  type InsertUser 
} from "@shared/schema";
import { allLawyers, legalServices } from "@shared/data";

// Interface for storage operations
export interface IStorage {
  // Existing user methods from template
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Lawyer related methods
  getAllLawyers(): Promise<Lawyer[]>;
  getLawyer(id: number): Promise<Lawyer | undefined>;
  createLawyer(lawyer: InsertLawyer): Promise<Lawyer>;
  
  // Specialization methods
  getAllSpecializations(): Promise<Specialization[]>;
  getSpecialization(id: number): Promise<Specialization | undefined>;
  
  // Booking methods
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookingsByLawyerId(lawyerId: number): Promise<Booking[]>;
  getBookingsByUserId(userId: number): Promise<Booking[]>;
  getAllBookings(): Promise<Booking[]>;
  
  // Review methods
  createReview(review: InsertReview): Promise<Review>;
  getReviewsByLawyerId(lawyerId: number): Promise<Review[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private lawyers: Map<number, Lawyer>;
  private specializations: Map<number, Specialization>;
  private bookings: Map<number, Booking>;
  private reviews: Map<number, Review>;
  
  userCurrentId: number;
  lawyerCurrentId: number;
  specializationCurrentId: number;
  bookingCurrentId: number;
  reviewCurrentId: number;

  constructor() {
    this.users = new Map();
    this.lawyers = new Map();
    this.specializations = new Map();
    this.bookings = new Map();
    this.reviews = new Map();
    
    this.userCurrentId = 1;
    this.lawyerCurrentId = allLawyers.length + 1; // Start after the mock data
    this.specializationCurrentId = legalServices.length + 1;
    this.bookingCurrentId = 1;
    this.reviewCurrentId = 1;
    
    // Initialize with mock data
    this.initializeMockData();
  }
  
  private initializeMockData() {
    // Add mock lawyers
    allLawyers.forEach(lawyer => {
      this.lawyers.set(lawyer.id, lawyer as Lawyer);
    });
    
    // Add mock specializations
    legalServices.forEach((service, index) => {
      this.specializations.set(index + 1, {
        id: index + 1,
        name: service.name,
        description: service.description,
        icon: service.icon
      });
    });
  }

  // User methods (from template)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Lawyer methods
  async getAllLawyers(): Promise<Lawyer[]> {
    return Array.from(this.lawyers.values());
  }
  
  async getLawyer(id: number): Promise<Lawyer | undefined> {
    return this.lawyers.get(id);
  }
  
  async createLawyer(insertLawyer: InsertLawyer): Promise<Lawyer> {
    const id = this.lawyerCurrentId++;
    const lawyer: Lawyer = { ...insertLawyer, id };
    this.lawyers.set(id, lawyer);
    return lawyer;
  }
  
  // Specialization methods
  async getAllSpecializations(): Promise<Specialization[]> {
    return Array.from(this.specializations.values());
  }
  
  async getSpecialization(id: number): Promise<Specialization | undefined> {
    return this.specializations.get(id);
  }
  
  // Booking methods
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.bookingCurrentId++;
    const booking: Booking = { ...insertBooking, id };
    this.bookings.set(id, booking);
    return booking;
  }
  
  async getBookingsByLawyerId(lawyerId: number): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      booking => booking.lawyerId === lawyerId
    );
  }
  
  async getBookingsByUserId(userId: number): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      booking => booking.userId === userId
    );
  }
  
  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }
  
  // Review methods
  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = this.reviewCurrentId++;
    const review: Review = { ...insertReview, id };
    this.reviews.set(id, review);
    return review;
  }
  
  async getReviewsByLawyerId(lawyerId: number): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(
      review => review.lawyerId === lawyerId
    );
  }
}

export const storage = new MemStorage();
