import ServiceHero from '@/components/services/ServiceHero';
import FeatureSection from '@/components/services/FeatureSection';
import TestimonialSection from '@/components/services/TestimonialSection';
import FAQSection from '@/components/services/FAQSection';
import CTASection from '@/components/services/CTASection';
import DomainSearchClient from '@/components/services/DomainSearchClient';
import { Globe, Shield, Zap, Clock, Search, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import PricingCard from '@/components/services/PricingCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Domain Registration - Secure Your Online Identity',
  description: 'Register your domain with Neyamot Enterprise. Fast domain search, competitive pricing, free WHOIS privacy, and expert support. Available extensions: .com, .net, .org, .info, .xyz and more.',
  keywords: ['domain registration Bangladesh', 'buy domain', 'domain search', 'WHOIS privacy', 'domain transfer', 'cheap domains'],
  openGraph: {
    title: 'Domain Registration - Neyamot Enterprise',
    description: 'Register your domain with competitive pricing and free WHOIS privacy protection.',
    url: 'https://neyamotenterprise.com/services/domain',
  },
};

export default function DomainServicePage() {

  const pricing = [
    { 
      tld: '.com', 
      price: 950, 
      features: ['Most popular extension', 'Perfect for businesses', 'Global recognition', 'SEO friendly'],
      popular: true
    },
    { 
      tld: '.net', 
      price: 1100,
      features: ['Great for tech companies', 'Network-focused sites', 'Professional image', 'Alternative to .com']
    },
    { 
      tld: '.org', 
      price: 900,
      features: ['Perfect for organizations', 'Non-profit friendly', 'Trustworthy extension', 'Community focused']
    },
    { 
      tld: '.info', 
      price: 850,
      features: ['Information websites', 'Educational content', 'Resource sites', 'Knowledge sharing']
    },
    { 
      tld: '.xyz', 
      price: 500,
      features: ['Modern extension', 'Creative projects', 'Startups & innovation', 'Budget friendly']
    },
  ];

  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Instant Domain Search",
      description: "Search millions of domain names instantly with our powerful search engine."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Free WHOIS Privacy",
      description: "Protect your personal information with complimentary WHOIS privacy protection."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Registration",
      description: "Register your domain in minutes with our streamlined checkout process."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "DNS Management",
      description: "Easy-to-use DNS management tools to configure your domain settings."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Get help anytime with our round-the-clock customer support team."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Domain Transfer",
      description: "Transfer your existing domains to us with our hassle-free process."
    }
  ];

  const testimonials = [
    {
      name: 'Rahim Uddin',
      role: 'Business Owner',
      quote: 'Super fast and easy domain registration! Everything was done in 5 minutes.',
      avatar: '/images/vps/testi1.jpg',
      rating: 5
    },
    {
      name: 'Maria Khan',
      role: 'Web Developer',
      quote: 'Very affordable and great support when I had issues updating DNS records.',
      avatar: '/images/vps/testi2.jpg',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      role: 'Startup Founder',
      quote: 'Found the perfect domain for my startup. The search tool is incredibly fast!',
      avatar: '/images/vps/testi1.jpg',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How long does domain registration take?',
      answer: 'Domain registration is usually completed within a few minutes after payment confirmation.'
    },
    {
      question: 'Can I transfer my domain later?',
      answer: 'Yes, domains can be transferred anytime after 60 days from registration with proper authorization codes.'
    },
    {
      question: 'Do you provide WHOIS privacy protection?',
      answer: 'Yes, WHOIS privacy protection is included free for all eligible domain extensions.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and local payment methods including bKash and Nagad.'
    },
    {
      question: 'Can I get a refund if I change my mind?',
      answer: 'Domain registrations are generally non-refundable, but we offer a 5-day grace period for cancellations.'
    }
  ];

  return (
    <div className="">
      <ServiceHero
        title="Find Your Perfect Domain"
        subtitle="Domain Registration"
        description="Search and register domain names in seconds. Secure your online identity with our fast, reliable domain registration service."
        features={[
          "Instant domain search",
          "Free WHOIS privacy",
          "24/7 expert support",
          "Easy DNS management"
        ]}
        gradient="from-blue-600/20 via-purple-600/20 to-cyan-600/20"
      >
        <div className="bg-card/80 backdrop-blur-sm border rounded-2xl p-6 shadow-xl">
          <DomainSearchClient />
        </div>
      </ServiceHero>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Domain Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the perfect extension for your website</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pricing.map((plan) => (
              <PricingCard
                key={plan.tld}
                name={plan.tld}
                description="Annual Registration"
                price={plan.price}
                currency="৳"
                period="/year"
                features={plan.features}
                popular={plan.popular}
                ctaText="Register Now"
                ctaLink={`/services/checkout?domain=example${plan.tld}`}
              />
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        title="Why Choose Neyamot Enterprise for Domains?"
        subtitle="Everything you need to establish your online presence"
        features={features}
      />

      <TestimonialSection
        title="What Our Customers Say"
        subtitle="Join hundreds of satisfied customers who trust Neyamot Enterprise with their domains"
        testimonials={testimonials}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about domain registration"
        faqs={faqs}
      />

      <CTASection
        title="Secure Your Domain Today"
        description="Don't miss the perfect name — it may not be available tomorrow!"
        primaryCTA={{
          text: "Search Domains",
          href: "#"
        }}
        secondaryCTA={{
          text: "Contact Support",
          href: "/contact"
        }}
        gradient="from-primary/20 via-blue-500/20 to-purple-500/20"
      />

      {/* CTA */}
      <section className="bg-primary py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Secure Your Domain Today</h2>
        <p className="text-lg mb-6">
          Don’t miss the perfect name — it may not be available tomorrow!
        </p>
        <Link
          href="#"
          className="bg-white text-primary px-6 py-3 font-semibold rounded-lg inline-block hover:bg-primary hover:text-white transition border-2 border-transparent"
        >
          Search Now
        </Link>
        </section>
      </div>
  );
}
