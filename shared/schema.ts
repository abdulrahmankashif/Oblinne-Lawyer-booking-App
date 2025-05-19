import { pgTable, text, serial, integer, boolean, date, time, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (existing from template)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Lawyers table
export const lawyers = pgTable("lawyers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  gender: text("gender").notNull(),
  city: text("city").notNull(),
  province: text("province").notNull(),
  court: text("court"),
  address: text("address"),
  rating: integer("rating").notNull(),
  reviewCount: integer("review_count").notNull(),
  yearsOfExperience: integer("years_of_experience").notNull(),
  consultationFee: integer("consultation_fee").notNull(),
  successRate: integer("success_rate"),
  languages: json("languages").notNull().$type<string[]>(),
  specialties: json("specialties").notNull().$type<string[]>(),
  specializationIds: json("specialization_ids").notNull().$type<string[]>(),
  availability: json("availability").notNull().$type<Record<string, boolean>>(),
});

// Legal specializations table
export const specializations = pgTable("specializations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
});

// Bookings table
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  lawyerId: integer("lawyer_id").notNull(),
  userId: integer("user_id"),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  bookingDate: date("booking_date").notNull(),
  bookingTime: time("booking_time").notNull(),
  consultationType: text("consultation_type").notNull(),
  caseCategory: text("case_category").notNull(),
  caseDescription: text("case_description").notNull(),
  status: text("status").notNull(),
  confirmationNumber: text("confirmation_number").notNull(),
  createdAt: date("created_at").notNull(),
});

// Reviews table
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  lawyerId: integer("lawyer_id").notNull(),
  userId: integer("user_id"),
  name: text("name").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
  date: date("date").notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLawyerSchema = createInsertSchema(lawyers).omit({
  id: true,
});

export const insertSpecializationSchema = createInsertSchema(specializations).omit({
  id: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertLawyer = z.infer<typeof insertLawyerSchema>;
export type Lawyer = typeof lawyers.$inferSelect;

export type InsertSpecialization = z.infer<typeof insertSpecializationSchema>;
export type Specialization = typeof specializations.$inferSelect;

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;
