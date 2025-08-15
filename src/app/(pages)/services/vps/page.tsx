import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VPS Hosting - High Performance Virtual Private Servers',
  description: 'Powerful VPS hosting from Neyamot Enterprise. Dedicated resources, full root access, NVMe SSD storage, and enterprise-grade infrastructure. Perfect for developers and businesses in Bangladesh.',
  keywords: ['VPS hosting Bangladesh', 'virtual private server', 'dedicated resources', 'root access', 'NVMe VPS', 'cloud VPS'],
  openGraph: {
    title: 'VPS Hosting - Neyamot Enterprise',
    description: 'High-performance VPS with dedicated resources and full root access.',
    url: 'https://neyamotenterprise.com/services/vps',
  },
};
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import VpsPlansClient from '@/components/services/VpsPlansClient';
import { 
  Server, 
  Shield, 
  Zap, 
  Settings, 
  Clock, 
  CheckCircle, 
  Star,
  Database,
  Lock,
  ArrowRight,
  Monitor,
  HardDrive,
  Cpu
} from 'lucide-react';

export default function VpsServicePage() {

  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Dedicated Resources',
      description: 'Guaranteed CPU, RAM, and storage resources exclusively for your applications.',
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: 'NVMe SSD Storage',
      description: 'Ultra-fast NVMe SSD storage for lightning-quick data access and performance.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Full Root Access',
      description: 'Complete control over your server with full root access and custom configurations.',
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Custom OS Support',
      description: 'Choose from multiple Linux distributions or upload your own custom ISO.',
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Advanced Monitoring',
      description: 'Real-time server monitoring with detailed performance metrics and alerts.',
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'DDoS Protection',
      description: 'Built-in DDoS protection and advanced security features for your peace of mind.',
    },
  ];

  const useCases = [
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Web Applications',
      description: 'Host high-traffic web applications with dedicated resources and scalability.',
      features: ['Load balancing', 'Auto-scaling', 'Database optimization'],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Development & Testing',
      description: 'Perfect environment for development, staging, and testing applications.',
      features: ['Multiple environments', 'Version control', 'CI/CD integration'],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Game Servers',
      description: 'Low-latency gaming servers with high performance and reliability.',
      features: ['Low ping', 'Custom configurations', '24/7 uptime'],
    },
  ];

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
    <main className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <Server className="h-4 w-4 mr-1" />
            Enterprise-Grade Infrastructure
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Powerful VPS Hosting
            <span className="text-primary block mt-2">Built for Performance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Get dedicated resources, full root access, and enterprise-grade infrastructure 
            with our high-performance VPS hosting solutions. Perfect for developers, 
            businesses, and demanding applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#plans">View VPS Plans</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Talk to Expert</Link>
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">NVMe</div>
            <div className="text-sm text-muted-foreground">SSD Storage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Full</div>
            <div className="text-sm text-muted-foreground">Root Access</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Enterprise Features for Every VPS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get enterprise-grade features and performance with every VPS plan, 
              designed for maximum reliability and scalability.
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

      <VpsPlansClient />

      {/* Use Cases */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Perfect for Every Use Case
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're developing applications, hosting websites, or running game servers, 
              our VPS solutions provide the power and flexibility you need.
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
            Ready to Deploy Your VPS?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with high-performance VPS hosting in minutes. Full root access, 
            enterprise features, and 24/7 expert support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#plans">Choose Your VPS</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Talk to Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}