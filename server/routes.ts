import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just log the message and store it
      console.log(`New contact message from ${message.email}: ${message.message}`);
      
      // Simulate email sending to prof@miguel.academy
      // In production, integrate with nodemailer or similar service
      
      res.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Retornaremos em breve." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos",
          errors: error.errors 
        });
      } else {
        console.error("Error sending contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Get all contact messages (admin endpoint)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Erro interno do servidor" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
