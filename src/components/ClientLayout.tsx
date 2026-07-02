"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { ContactModal } from "@/components/ContactModal";

type ContactContextValue = {
  openContact: () => void;
  closeContact: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact deve ser usado dentro de <ClientLayout>.");
  }
  return context;
}

export function ClientLayout({ children }: { children: ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <ContactContext.Provider value={{ openContact, closeContact }}>
      {children}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </ContactContext.Provider>
  );
}
