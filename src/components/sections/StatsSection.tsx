import { Badge } from '../ui/badge';
import { TrendingUp, Users, Server, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "10,000+",
      label: "Happy Customers",
      description: "Businesses trust us with their online presence",
      color: "text-blue-500"
    },
    {
      icon: <Server className="h-8 w-8" />,
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable hosting with enterprise-grade infrastructure",
      color: "text-green-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "50TB+",
      label: "Data Transferred",
      description: "Monthly bandwidth across all our services",
      color: "text-purple-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "5 Years",
      label: "Industry Experience",
      description: "Serving Bangladesh's digital transformation",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-3 py-1">
            Our Impact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Thousands
            <span className="block text-primary">Across Bangladesh</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since our inception, we've been committed to providing world-class hosting services 
            that help businesses thrive in the digital landscape.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-300 hover:scale-105"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-background/50 ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/20 rounded-full group-hover:bg-accent/40 transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom testimonial */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Neyamot Enterprise has been instrumental in our digital transformation. 
              Their reliable hosting and exceptional support have helped us scale our business across Bangladesh."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">MR</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Mohammad Rahman</div>
                <div className="text-sm text-muted-foreground">CEO, TechBD Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
