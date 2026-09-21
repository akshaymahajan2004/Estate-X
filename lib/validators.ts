import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  preferredLocation: z.string().min(1, "Preferred location is required"),
  propertyType: z.string().min(1, "Property type is required"),
  budget: z.string().min(1, "Budget is required"),
  intent: z.enum(["BUY", "RENT"]).default("BUY"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  propertyId: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

export const visitSchema = z.object({
  propertyId: z.string().min(1, "Property selection is required"),
  date: z.string().min(1, "Please select a date"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  notes: z.string().optional(),
});

export type VisitFormValues = z.infer<typeof visitSchema>;

export const propertyFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(20, "Description must be detailed"),
  price: z.coerce.number().positive("Price must be positive"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  type: z.enum(["APARTMENT", "VILLA", "PENTHOUSE", "FAMILY_HOME", "COMMERCIAL", "NEW_DEVELOPMENT"]),
  status: z.enum(["FOR_SALE", "FOR_RENT", "SOLD", "RESERVED"]),
  bedrooms: z.coerce.number().int().min(0),
  bathrooms: z.coerce.number().min(0),
  areaSqFt: z.coerce.number().positive("Area is required"),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  locationId: z.string().min(1, "Location is required"),
  agentId: z.string().min(1, "Agent is required"),
  imageUrl: z.string().url("Valid image URL required"),
});

export type PropertyFormValues = z.infer<typeof propertyFormSchema>;
