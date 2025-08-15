'use client';

import { Button } from '@/components/ui/button';
import { IProduct, useGetProductsQuery } from '@/lib/services/productsApi';
import PricingCard from '@/components/services/PricingCard';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function EmailPlansClient() {
  const { data, isLoading } = useGetProductsQuery({
    limit: 10,
    status: 'ACTIVE',
    type: 'EMAIL',
  });

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Professional Email Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect email hosting plan for your business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading email plans...</p>
            </div>
          ) : (
            data?.products &&
            data.products.map((plan: IProduct) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                description="Professional Email Hosting"
                price={plan.price}
                currency="৳"
                period={plan.billingCycle === 'MONTHLY' ? '/month' : '/year'}
                features={plan.description.split('\n')}
                popular={plan.grade === 'PREMIUM'}
                ctaText="Get Started"
                ctaLink={`/services/checkout/${plan.id}`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
