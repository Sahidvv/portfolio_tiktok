import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section = ({ id, title, children }: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen pt-12 md:pt-16 pb-8 md:pb-12 transition-all duration-1000 ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20'
      }`}
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-purple-500 text-center md:text-left">{title}</h2>
      {children}
    </section>
  );
};