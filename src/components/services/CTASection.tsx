'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  gradient?: string;
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  gradient = "from-primary/20 via-purple-500/20 to-cyan-500/20"
}: CTASectionProps) {
  return (
    <section className={`py-20 bg-gradient-to-r ${gradient} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={primaryCTA.href}>
            <Button size="lg" className="group">
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          
          {secondaryCTA && (
            <Link href={secondaryCTA.href}>
              <Button variant="outline" size="lg">
                {secondaryCTA.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
