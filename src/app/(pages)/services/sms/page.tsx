import ServiceHero from '@/components/services/ServiceHero';
import FeatureSection from '@/components/services/FeatureSection';
import TestimonialSection from '@/components/services/TestimonialSection';
import FAQSection from '@/components/services/FAQSection';
import CTASection from '@/components/services/CTASection';
import SmsPlansClient from '@/components/services/SmsPlansClient';
import { MessageSquare, Zap, BarChart3, Shield, Globe, Clock } from 'lucide-react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'SMS Gateway Services - Bulk SMS Solutions Bangladesh',
  description: 'Reliable SMS gateway services from Neyamot Enterprise. Send bulk SMS, marketing campaigns, and notifications with 99% delivery rate. API integration available for Bangladesh businesses.',
  keywords: ['SMS gateway Bangladesh', 'bulk SMS', 'SMS marketing', 'SMS API', 'text messaging service', 'SMS notifications'],
  openGraph: {
    title: 'SMS Gateway Services - Neyamot Enterprise',
    description: 'Reliable bulk SMS services with 99% delivery rate and API integration.',
    url: 'https://neyamotenterprise.com/services/sms',
  },
};

export default function SmsServicePage() {

  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Bulk SMS Sending",
      description: "Send thousands of SMS messages instantly to your customer base with our reliable gateway."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Delivery",
      description: "High-speed message delivery with 99% success rate and instant delivery reports."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Track delivery status, open rates, and engagement metrics with comprehensive reporting."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Compliant",
      description: "GDPR compliant with secure API endpoints and encrypted message transmission."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Coverage",
      description: "Send SMS to 200+ countries with local and international number support."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and API assistance for seamless integration."
    }
  ];

  const testimonials = [
    {
      name: 'Rashid Khan',
      role: 'E-commerce Manager',
      company: 'ShopBD',
      quote: 'Excellent SMS delivery rates. Our order confirmations reach customers instantly.',
      avatar: '/images/vps/testi1.jpg',
      rating: 5
    },
    {
      name: 'Nadia Islam',
      role: 'Marketing Head',
      quote: 'The analytics dashboard is fantastic. We can track every campaign in real-time.',
      avatar: '/images/vps/testi2.jpg',
      rating: 5
    },
    {
      name: 'Omar Faruk',
      role: 'Tech Lead',
      quote: 'Easy API integration and reliable service. Perfect for our notification system.',
      avatar: '/images/vps/testi1.jpg',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How fast are SMS messages delivered?',
      answer: 'Most SMS messages are delivered within seconds. International messages may take up to 30 seconds depending on the destination country.'
    },
    {
      question: 'Do you provide API documentation?',
      answer: 'Yes, we provide comprehensive API documentation with code examples in multiple programming languages including PHP, Python, and Node.js.'
    },
    {
      question: 'Can I send SMS to international numbers?',
      answer: 'Yes, we support SMS delivery to 200+ countries worldwide with competitive international rates.'
    },
    {
      question: 'Is there a minimum purchase requirement?',
      answer: 'No minimum purchase required. You can start with as few as 100 SMS credits and scale up as needed.'
    },
    {
      question: 'Do you offer delivery reports?',
      answer: 'Yes, we provide detailed delivery reports including delivery status, timestamps, and failure reasons for each message.'
    }
  ];

  return (
    <div>
      <ServiceHero
        title="SMS Gateway Services"
        subtitle="Bulk SMS Solutions"
        description="Send SMS messages to your customers with our reliable, fast, and secure SMS gateway. Perfect for marketing campaigns, notifications, and alerts."
        features={[
          "99% delivery success rate",
          "Global SMS coverage",
          "Real-time analytics",
          "Easy API integration"
        ]}
        ctaText="Get Started"
        gradient="from-orange-600/20 via-red-600/20 to-pink-600/20"
      >
        <div className="bg-card/80 backdrop-blur-sm border rounded-2xl p-6 shadow-xl">
          <div className="text-center space-y-4">
            <MessageSquare className="h-16 w-16 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Start Sending SMS</h3>
            <p className="text-muted-foreground">Choose from our flexible SMS packages</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-primary/10 rounded-lg p-3">
                <div className="font-semibold">99%</div>
                <div className="text-muted-foreground">Delivery Rate</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-3">
                <div className="font-semibold">200+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
            </div>
            <Button size="lg" className="w-full">
              View Pricing
            </Button>
          </div>
        </div>
      </ServiceHero>

      <SmsPlansClient />

      <FeatureSection
        title="Why Choose Our SMS Gateway?"
        subtitle="Powerful features for effective communication"
        features={features}
      />

      <TestimonialSection
        title="What Our Customers Say"
        subtitle="Trusted by Bangladesh businesses for reliable SMS delivery"
        testimonials={testimonials}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our SMS gateway"
        faqs={faqs}
      />

      <CTASection
        title="Ready to Start Sending SMS?"
        description="Join thousands of businesses using our reliable SMS gateway for customer communication."
        primaryCTA={{
          text: "Get Started Now",
          href: "#"
        }}
        secondaryCTA={{
          text: "View API Docs",
          href: "/docs"
        }}
        gradient="from-orange-500/20 via-red-500/20 to-pink-500/20"
      />
    </div>
  );
}
