'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaAction?: () => void;
  children?: ReactNode;
  gradient?: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  features,
  ctaText = "Get Started",
  ctaAction,
  children,
  gradient = "from-blue-600/20 via-purple-600/20 to-cyan-600/20"
}: ServiceHeroProps) {
  return (
    <section className={`relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br ${gradient} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                {subtitle}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {description}
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={ctaAction}
                className="group"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Custom Content */}
          <div className="lg:pl-8">
            {children}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float hidden lg:block">
        <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 text-sm">
          ⚡ 99.9% Uptime
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float-delayed hidden lg:block">
        <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-lg px-4 py-2 text-sm">
          ✅ 24/7 Support
        </div>
      </div>
    </section>
  );
}
