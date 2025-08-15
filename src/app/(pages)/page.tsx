import ModernHero from '@/components/sections/ModernHero';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import FeaturesSection from '@/components/sections/FeaturesSection';
import StatsSection from '@/components/sections/StatsSection';
import Testimonials from '@/components/sections/Testimonials';
import FAQSection from '@/components/sections/FAQSection';
import ModernCTA from '@/components/sections/ModernCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neyamot Enterprise - Premium Web Hosting & Digital Solutions in Bangladesh',
  description: 'Experience lightning-fast web hosting, VPS, domain registration, email hosting, and SMS services. 99.9% uptime guarantee, 24/7 support, and enterprise-grade security. Perfect for businesses in Bangladesh.',
  keywords: ['web hosting Bangladesh', 'VPS hosting', 'domain registration', 'email hosting', 'SMS gateway', 'digital solutions Bangladesh'],
  openGraph: {
    title: 'Neyamot Enterprise - Premium Web Hosting & Digital Solutions',
    description: 'Lightning-fast hosting with 99.9% uptime guarantee and 24/7 support in Bangladesh.',
    url: 'https://neyamotenterprise.com',
    siteName: 'Neyamot Enterprise',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Neyamot Enterprise - Web Hosting Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neyamot Enterprise - Premium Web Hosting Solutions',
    description: 'Lightning-fast hosting with 99.9% uptime guarantee and 24/7 support in Bangladesh.',
    images: ['/og-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ModernHero />
      <ServicesShowcase />
      <FeaturesSection />
      <StatsSection />
      <Testimonials />
      <FAQSection />
      <ModernCTA />
    </main>
  );
}
