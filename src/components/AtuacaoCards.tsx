"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { InfoCard } from "@/components/InfoCard";

type WorkArea = {
  title: string;
  description: string;
};

export function AtuacaoCards({ items }: { items: WorkArea[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`h-full transition-all duration-[600ms] ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {index === 1 ? (
            <Link
              href="/atuacao/apoio-familiares"
              className="block h-full cursor-pointer"
            >
              <InfoCard
                index={index + 1}
                title={item.title}
                description={item.description}
              />
            </Link>
          ) : (
            <InfoCard
              index={index + 1}
              title={item.title}
              description={item.description}
            />
          )}
        </div>
      ))}
    </div>
  );
}
