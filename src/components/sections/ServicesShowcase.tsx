'use client';

import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { 
  Server, 
  Globe, 
  Mail, 
  MessageSquare, 
  Database,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const ServicesShowcase = () => {
  const services = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Web Hosting",
      description: "Lightning-fast hosting with 99.9% uptime guarantee",
      features: ["SSD Storage", "Free SSL", "24/7 Support", "Bangladesh Servers"],
      price: "৳299",
      period: "/month",
      popular: true,
      href: "/services/hosting",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "VPS Hosting",
      description: "Dedicated resources for high-performance applications",
      features: ["Full Root Access", "SSD NVMe", "DDoS Protection", "Scalable"],
      price: "৳1,999",
      period: "/month",
      popular: false,
      href: "/services/vps",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Domain Registration",
      description: "Secure your perfect domain name today",
      features: ["Free WHOIS Privacy", "DNS Management", "Easy Transfer", "Auto Renewal"],
      price: "৳1,200",
      period: "/year",
      popular: false,
      href: "/services/domain",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Hosting",
      description: "Professional email solutions for your business",
      features: ["Custom Domain", "Spam Protection", "Mobile Sync", "Large Storage"],
      price: "৳199",
      period: "/month",
      popular: false,
      href: "/services/email",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "SMS Gateway",
      description: "Reliable bulk SMS service for marketing campaigns",
      features: ["99% Delivery Rate", "API Integration", "Global Coverage", "Analytics"],
      price: "৳0.50",
      period: "/SMS",
      popular: false,
      href: "/services/sms",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-3 py-1">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Digital Solutions
            <span className="block text-primary">For Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From web hosting to SMS services, we provide everything you need to establish 
            and grow your online presence in Bangladesh and beyond.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                service.popular 
                  ? 'border-primary shadow-lg ring-2 ring-primary/20' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  <Star className="inline h-3 w-3 mr-1" />
                  Most Popular
                </div>
              )}

              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

              <CardHeader className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-4 w-fit`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-4">
                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-baseline space-x-1 pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-foreground">{service.price}</span>
                  <span className="text-sm text-muted-foreground">{service.period}</span>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full group/btn ${
                    service.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  asChild
                >
                  <Link href={service.href}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experts can help you design the perfect hosting solution for your specific needs. 
              Get personalized recommendations and enterprise-grade support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Talk to Our Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
