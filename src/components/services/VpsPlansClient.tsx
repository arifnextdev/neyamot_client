'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { totalPrice } from '@/lib/calculate';
import { useGetProductsQuery } from '@/lib/services/productsApi';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

export default function VpsPlansClient() {
  const { data, isLoading } = useGetProductsQuery({
    page: 1,
    limit: 10,
    type: 'VPS',
    status: 'ACTIVE',
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can I upgrade my VPS resources anytime?',
      answer: 'Yes, you can easily upgrade your CPU, RAM, and storage resources through our control panel with minimal downtime. Upgrades are processed instantly.',
    },
    {
      question: 'Is DDoS protection included with all VPS plans?',
      answer: 'Yes, all VPS plans include basic DDoS protection. We also offer advanced DDoS protection for high-risk applications at an additional cost.',
    },
    {
      question: 'Do you provide full root access?',
      answer: 'Absolutely! You get full root access with every VPS, allowing you to install any software, configure settings, and manage your server completely.',
    },
    {
      question: 'Which operating systems do you support?',
      answer: 'We support Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux, and Windows Server. You can also upload custom ISO images for specialized setups.',
    },
    {
      question: 'How do backups work for VPS hosting?',
      answer: 'We provide automated daily backups with point-in-time recovery. You can also create manual snapshots and restore your VPS to any backup point.',
    },
    {
      question: 'What level of support do you provide?',
      answer: 'We offer 24/7 technical support via live chat, phone, and email. Our team includes Linux administrators and cloud infrastructure specialists.',
    },
  ];

  return (
    <>
      {/* VPS Plans */}
      <section id="plans" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Choose Your VPS Configuration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All VPS plans include NVMe SSD storage, DDoS protection, full root access, and 24/7 support.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Loading VPS plans...</p>
              </div>
            ) : (
              data?.products &&
              data.products.map((plan) => {
                const isPopular = plan.grade === 'PREMIUM';

                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-xl p-6 border transition-all duration-300 animate-fade-in ${
                      isPopular
                        ? 'border-primary bg-primary/5 shadow-lg scale-105'
                        : 'border-border bg-card hover:bg-accent/5'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Perfect for demanding applications
                      </p>
                      <div className="flex justify-center items-baseline gap-1">
                        <span className="text-sm text-muted-foreground line-through">
                          ৳{plan.price}
                        </span>
                        <span className="text-3xl font-bold text-foreground">
                          ৳{totalPrice(plan.price, plan.discount)}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {plan.billingCycle === 'MONTHLY' ? '/month' : '/year'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {plan.description.split('\n').map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full"
                      variant={isPopular ? 'default' : 'outline'}
                      size="lg"
                      asChild
                    >
                      <Link href={`/services/checkout/${plan.id}`}>
                        Deploy VPS
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our VPS hosting services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-xl bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full text-left p-6 font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <span>{faq.question}</span>
                    <ArrowRight 
                      className={`h-5 w-5 transition-transform duration-200 ${
                        activeFaq === index ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
