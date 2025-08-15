import { Globe, Headset, Server, Shield, Award, Users, Clock, Zap } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Alpha Net - Leading Web Hosting Provider in Bangladesh',
  description:
    'Learn about Alpha Net - Bangladesh\'s premier web hosting provider. Reliable hosting solutions, 99.9% uptime, 24/7 support, and cutting-edge technology since 2015.',
  keywords: 'Alpha Net, web hosting Bangladesh, hosting provider, reliable hosting, 24/7 support',
};

export default function AboutPage() {
  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: <Users className="h-6 w-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Server className="h-6 w-6" /> },
    { number: '24/7', label: 'Expert Support', icon: <Headset className="h-6 w-6" /> },
    { number: '9+ Years', label: 'Industry Experience', icon: <Award className="h-6 w-6" /> },
  ];

  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Enterprise-Grade Infrastructure',
      description: 'NVMe SSD storage, LiteSpeed servers, and redundant network architecture ensure maximum performance and reliability.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Advanced Security',
      description: 'Multi-layered security with DDoS protection, free SSL certificates, malware scanning, and automated backups.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Network',
      description: 'Strategically located data centers in Bangladesh, USA, Singapore, and Europe for optimal performance worldwide.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Optimized servers with built-in caching, CDN integration, and performance monitoring for blazing-fast websites.',
    },
    {
      icon: <Headset className="h-8 w-8" />,
      title: 'Expert Support',
      description: 'Round-the-clock technical support from certified professionals via live chat, phone, and email.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Proven Reliability',
      description: '99.9% uptime SLA backed by redundant systems, monitoring, and proactive maintenance.',
    },
  ];

  return (
    <main className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Powering Digital Growth
            <span className="text-primary block mt-2">Since 2015</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Alpha Net is Bangladesh's leading web hosting provider, trusted by over 10,000 businesses 
            worldwide. We deliver reliable, secure, and high-performance hosting solutions that help 
            your business thrive online.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3 text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower businesses of all sizes with reliable, scalable, and secure web hosting 
                solutions. We believe every business deserves enterprise-grade infrastructure without 
                the complexity or cost barriers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to simplify web hosting technology, making it accessible and 
                affordable while maintaining the highest standards of performance, security, and support.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To be the most trusted and innovative web hosting provider in South Asia, 
                recognized globally for our commitment to customer success and technological excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where every business, from startups to enterprises, 
                has access to world-class hosting infrastructure that scales with their growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the features and benefits that make Alpha Net the preferred choice 
              for businesses seeking reliable web hosting solutions.
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

      {/* Company Story */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                Founded in 2015 in Dhaka, Bangladesh, Alpha Net began with a simple mission: 
                to provide reliable and affordable web hosting solutions for local businesses 
                looking to establish their online presence.
              </p>
              <p className="mb-6">
                What started as a small team of passionate technologists has grown into 
                Bangladesh's leading hosting provider, serving over 10,000 customers across 
                50+ countries. Our journey has been marked by continuous innovation, 
                unwavering commitment to customer success, and strategic expansion.
              </p>
              <p>
                Today, Alpha Net operates state-of-the-art data centers across multiple 
                continents, offering a comprehensive suite of hosting services backed by 
                24/7 expert support and industry-leading uptime guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Alpha Net for their web hosting needs. 
              Experience the difference of reliable, fast, and secure hosting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/services/hosting">View Hosting Plans</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
