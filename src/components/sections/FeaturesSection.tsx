import { Badge } from '../ui/badge';
import { 
  Server, 
  Shield, 
  Zap, 
  Globe, 
  Headphones, 
  Database,
  Lock,
  Clock,
  Award,
  Smartphone,
  Code,
  BarChart3
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "99.9% Uptime SLA",
      description: "Enterprise-grade infrastructure with guaranteed uptime and performance monitoring.",
      badge: "Guaranteed"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Speed",
      description: "SSD storage, CDN integration, and optimized servers for maximum performance.",
      badge: "Performance"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Free SSL certificates, DDoS protection, and daily security scans included.",
      badge: "Security"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from certified hosting experts in Bangladesh.",
      badge: "Support"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Automatic Backups",
      description: "Daily automated backups with one-click restore functionality.",
      badge: "Backup"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global CDN",
      description: "Worldwide content delivery network for faster loading across all regions.",
      badge: "Global"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Free SSL & Security",
      description: "Complimentary SSL certificates and advanced security features included.",
      badge: "Free"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Instant Setup",
      description: "Get your website online in minutes with our automated setup process.",
      badge: "Quick"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Optimized",
      description: "Responsive hosting solutions optimized for mobile performance.",
      badge: "Mobile"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Developer Friendly",
      description: "Support for all major programming languages and frameworks.",
      badge: "Dev Tools"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Monitoring",
      description: "Comprehensive analytics and real-time monitoring dashboard.",
      badge: "Analytics"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Money Back Guarantee",
      description: "30-day money-back guarantee with no questions asked policy.",
      badge: "Guarantee"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-3 py-1">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="block text-primary">Succeed Online</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From blazing-fast performance to enterprise-grade security, we provide all the tools 
            and features you need to build and grow your online presence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Feature badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience the difference?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              🎉 Special Launch Offer: 50% Off First Year
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
