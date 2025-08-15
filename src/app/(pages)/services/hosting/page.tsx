import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Hosting Services - Fast & Secure Hosting Bangladesh',
  description: 'Professional web hosting services from Neyamot Enterprise. NVMe SSD storage, 99.9% uptime, free SSL, daily backups, and 24/7 support. Perfect for businesses in Bangladesh.',
  keywords: ['web hosting Bangladesh', 'shared hosting', 'business hosting', 'fast hosting', 'secure hosting', 'NVMe hosting'],
  openGraph: {
    title: 'Web Hosting Services - Neyamot Enterprise',
    description: 'Fast, secure web hosting with 99.9% uptime guarantee and expert support.',
    url: 'https://neyamotenterprise.com/services/hosting',
  },
};
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HostingPlansClient from '@/components/services/HostingPlansClient';
import { 
  Server, 
  Shield, 
  Zap, 
  Globe, 
  Clock, 
  CheckCircle, 
  Star,
  Headset,
  Database,
  Lock,
  ArrowRight,
  Users,
  Award
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';



export default function HostingServicePage() {

  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'NVMe SSD Storage',
      description: 'Lightning-fast NVMe SSD storage for maximum performance and reliability.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Free SSL & Security',
      description: 'Free SSL certificates, DDoS protection, and malware scanning included.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global CDN',
      description: 'Worldwide content delivery network for faster loading times globally.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '99.9% Uptime',
      description: 'Industry-leading uptime guarantee with 24/7 monitoring.',
    },
    {
      icon: <Headset className="h-8 w-8" />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical support from certified professionals.',
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Free Daily Backups',
      description: 'Automated daily backups with one-click restore functionality.',
    },
  ];

  const useCases = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Small Business',
      description: 'Perfect for business websites, portfolios, and online presence.',
      features: ['Professional email', 'SSL certificate', 'Website builder'],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'E-commerce',
      description: 'Optimized for online stores with high performance and security.',
      features: ['Shopping cart support', 'Payment integration', 'Inventory management'],
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Agencies',
      description: 'Manage multiple client websites with advanced tools.',
      features: ['Multi-site management', 'White-label options', 'Client billing'],
    },
  ];


  return (
    <main className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <Star className="h-4 w-4 mr-1" />
            Most Popular Hosting Solution
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Professional Web Hosting
            <span className="text-primary block mt-2">Built for Performance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Fast, secure, and reliable web hosting with 99.9% uptime guarantee. Perfect for 
            businesses, e-commerce, and professional websites that demand excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#plans">View Hosting Plans</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Free</div>
            <div className="text-sm text-muted-foreground">SSL & Backups</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">30-Day</div>
            <div className="text-sm text-muted-foreground">Money Back</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our hosting platform includes all the essential features to build, 
              secure, and scale your website with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:bg-accent/5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HostingPlansClient />

      {/* Use Cases */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Perfect for Every Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're launching a startup, running an e-commerce store, or managing 
              client websites, our hosting solutions scale with your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:bg-accent/5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-primary/5 border-t border-primary/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Launch Your Website?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Neyamot Enterprise for reliable, fast, 
            and secure web hosting. Get started today with our 30-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#plans">Choose Your Plan</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
