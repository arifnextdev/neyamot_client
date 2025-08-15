import { Button } from '../ui/button';
import { Server, Shield, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

const DynamicHero = () => {
  return (
    <section className="relative isolate px-6 lg:px-8 pt-14 pb-20 sm:pt-20 sm:pb-32">
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-accent/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Announcement banner */}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center animate-fade-in">
          <div className="relative rounded-full px-4 py-2 text-sm ring-1 ring-primary/20 hover:ring-primary/30 bg-primary/5 transition-all duration-300">
            <span className="text-primary font-medium">🚀 99.9% Uptime Guarantee</span>
            <Link href="/about" className="font-semibold text-primary ml-2 hover:underline">
              <span className="absolute inset-0" aria-hidden="true" />
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl animate-fade-in">
            Reliable Web Hosting
            <span className="text-primary block mt-2">Built for Growth</span>
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Power your website with lightning-fast hosting, 24/7 support, and enterprise-grade security. 
            From startups to enterprises, we've got the perfect hosting solution for you.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in">
            <Button size="lg" className="px-8 py-3 text-base font-semibold" asChild>
              <Link href="#services">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base font-semibold" asChild>
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in">
            <p className="text-sm font-medium text-muted-foreground mb-8">
              Trusted by 10,000+ businesses worldwide
            </p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-2xl mx-auto">
              <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card transition-colors">
                <Server className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card transition-colors">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">SSL Security</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card transition-colors">
                <Zap className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">Fast Loading</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 hover:bg-card transition-colors">
                <Globe className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">Global CDN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-accent/20 to-primary/30 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
};

export default DynamicHero;
