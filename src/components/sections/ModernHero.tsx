import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Server, Shield, Zap, Globe, ArrowRight, Play, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ModernHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px] dark:bg-grid-white/[0.02]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Announcement banner */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
            🚀 New: 99.9% Uptime SLA with 24/7 Support
            <ArrowRight className="ml-2 h-3 w-3" />
          </Badge>
        </div>

        <div className="text-center space-y-8">
          {/* Main headline with gradient text */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Powerful Web Hosting</span>
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Built for Success
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Experience lightning-fast hosting with enterprise-grade security, 24/7 expert support, 
              and 99.9% uptime guarantee. Perfect for businesses of all sizes in Bangladesh and beyond.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button size="lg" className="px-8 py-4 text-base font-semibold group" asChild>
              <Link href="/services/hosting">
                Start Your Website Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-base font-semibold group" asChild>
              <Link href="#demo">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Trust indicators with stats */}
          <div className="mt-16 animate-fade-in">
            <p className="text-sm font-medium text-muted-foreground mb-8">
              Trusted by 10,000+ businesses across Bangladesh
            </p>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">&lt;200ms</div>
                  <div className="text-sm text-muted-foreground">Load Time</div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">SSL</div>
                  <div className="text-sm text-muted-foreground">Free Security</div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 animate-fade-in">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free Migration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Bangladesh Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
