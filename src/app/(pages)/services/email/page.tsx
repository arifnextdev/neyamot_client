import ServiceHero from '@/components/services/ServiceHero';
import FeatureSection from '@/components/services/FeatureSection';
import TestimonialSection from '@/components/services/TestimonialSection';
import FAQSection from '@/components/services/FAQSection';
import CTASection from '@/components/services/CTASection';
import EmailPlansClient from '@/components/services/EmailPlansClient';
import { Mail, Shield, Zap, Users, Globe, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Professional Email Hosting - Business Email Solutions',
  description: 'Get professional email hosting with your domain from Neyamot Enterprise. Secure business email, spam protection, mobile sync, and 24/7 support. Perfect for businesses in Bangladesh.',
  keywords: ['professional email hosting', 'business email Bangladesh', 'email hosting', 'corporate email', 'secure email', 'email solutions'],
  openGraph: {
    title: 'Professional Email Hosting - Neyamot Enterprise',
    description: 'Secure business email hosting with spam protection and mobile sync.',
    url: 'https://neyamotenterprise.com/services/email',
  },
};

export default function EmailServicePage() {

  const features = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Professional Email",
      description: "Get a professional email address with your own domain name for credibility."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Built-in spam protection, virus scanning, and encryption for secure communication."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "High-performance email servers with 99.9% uptime guarantee."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Shared calendars, contacts, and collaborative tools for your team."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Access",
      description: "Access your email from anywhere with webmail, mobile, and desktop apps."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Easy Migration",
      description: "Free migration service to transfer your existing emails seamlessly."
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Business Owner',
      company: 'Tech Solutions BD',
      quote: 'Professional email hosting that actually works. Great uptime and excellent support.',
      avatar: '/images/vps/testi1.jpg',
      rating: 5
    },
    {
      name: 'Karim Hassan',
      role: 'Marketing Director',
      quote: 'The spam protection is excellent. Our team productivity has increased significantly.',
      avatar: '/images/vps/testi2.jpg',
      rating: 5
    },
    {
      name: 'Fatima Khan',
      role: 'Startup Founder',
      quote: 'Easy setup and migration. Professional email at an affordable price.',
      avatar: '/images/vps/testi1.jpg',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Can I use my existing domain?',
      answer: 'Yes, you can use any domain you own. We provide easy setup instructions for all major domain providers.'
    },
    {
      question: 'How much storage do I get?',
      answer: 'Storage varies by plan, starting from 10GB for basic plans up to unlimited storage for enterprise plans.'
    },
    {
      question: 'Is there mobile app support?',
      answer: 'Yes, our email works with all major email clients including Outlook, Apple Mail, and Gmail mobile apps.'
    },
    {
      question: 'Do you provide migration assistance?',
      answer: 'Yes, we offer free migration service to help you transfer your existing emails and settings.'
    },
    {
      question: 'What about spam protection?',
      answer: 'All plans include advanced spam filtering, virus protection, and phishing detection to keep your inbox clean.'
    }
  ];

  return (
    <div>
      <ServiceHero
        title="Professional Email Hosting"
        subtitle="Business Email Solutions"
        description="Get a professional email address with your own domain. Secure, reliable, and feature-rich email hosting for businesses of all sizes."
        features={[
          "Professional email addresses",
          "Advanced spam protection",
          "99.9% uptime guarantee",
          "24/7 expert support"
        ]}
        ctaText="Get Started"
        gradient="from-green-600/20 via-blue-600/20 to-purple-600/20"
      >
        <div className="bg-card/80 backdrop-blur-sm border rounded-2xl p-6 shadow-xl">
          <div className="text-center space-y-4">
            <Mail className="h-16 w-16 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
            <p className="text-muted-foreground">Choose from our flexible email hosting plans</p>
            <Button size="lg" className="w-full">
              View Plans
            </Button>
          </div>
        </div>
      </ServiceHero>

      <EmailPlansClient />

      <FeatureSection
        title="Why Choose Our Email Hosting?"
        subtitle="Everything you need for professional communication"
        features={features}
      />

      <TestimonialSection
        title="What Our Customers Say"
        subtitle="Join hundreds of businesses using Neyamot Enterprise email hosting"
        testimonials={testimonials}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our email hosting"
        faqs={faqs}
      />

      <CTASection
        title="Ready to Get Professional Email?"
        description="Start building trust with your customers using professional email addresses."
        primaryCTA={{
          text: "Get Started Now",
          href: "#"
        }}
        secondaryCTA={{
          text: "Contact Sales",
          href: "/contact"
        }}
        gradient="from-green-500/20 via-blue-500/20 to-purple-500/20"
      />
    </div>
  );
}
