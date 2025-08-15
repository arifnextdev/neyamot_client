'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  currency?: string;
  period?: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaLink?: string;
  productId?: string;
}

export default function PricingCard({
  name,
  description,
  price,
  currency = "৳",
  period = "/month",
  features,
  popular = false,
  ctaText = "Choose Plan",
  ctaLink,
  productId
}: PricingCardProps) {
  const href = ctaLink || (productId ? `/services/checkout?product=${productId}` : '#');

  return (
    <div className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      popular 
        ? 'border-primary shadow-lg bg-gradient-to-b from-primary/5 to-transparent' 
        : 'border-border hover:border-primary/50 bg-card'
    }`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
          <Star className="w-3 h-3 mr-1" />
          Most Popular
        </Badge>
      )}

      <div className="text-center space-y-4">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>

        <div className="py-4">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl font-bold">{currency}{price}</span>
            <span className="text-muted-foreground">{period}</span>
          </div>
        </div>

        <div className="space-y-3 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <Link href={href} className="block">
          <Button 
            className={`w-full ${popular ? 'bg-primary hover:bg-primary/90' : ''}`}
            variant={popular ? 'default' : 'outline'}
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
