"use client";

import { type ReactNode } from "react";
import { useContact } from "@/components/ClientLayout";

type ContactButtonProps = {
  className?: string;
  children: ReactNode;
};

export function ContactButton({ className, children }: ContactButtonProps) {
  const { openContact } = useContact();

  return (
    <button type="button" onClick={openContact} className={className}>
      {children}
    </button>
  );
}
