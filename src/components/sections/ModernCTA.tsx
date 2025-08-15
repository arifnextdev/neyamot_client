import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import Link from 'next/link';

const ModernCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Special offer badge */}
        <div className="flex justify-center mb-8">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
            <Star className="h-4 w-4 mr-2" />
            Limited Time Offer - 50% Off First Year
          </Badge>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Launch Your
          <span className="block">Dream Website?</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of successful businesses that trust Neyamot Enterprise 
          for their hosting needs. Get started today with our premium hosting solutions.
        </p>

        {/* Features list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center text-primary-foreground/90">
            <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
            <span>99.9% Uptime Guarantee</span>
          </div>
          <div className="flex items-center text-primary-foreground/90">
            <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
            <span>24/7 Expert Support</span>
          </div>
          <div className="flex items-center text-primary-foreground/90">
            <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
            <span>Free SSL & Migration</span>
          </div>
          <div className="flex items-center text-primary-foreground/90">
            <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
            <span>30-Day Money Back</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold group"
            asChild
          >
            <Link href="/services/hosting">
              <Zap className="mr-2 h-5 w-5" />
              Start Hosting Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            asChild
          >
            <Link href="/contact">
              Talk to Sales
            </Link>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-300" />
            <span>4.9/5 Customer Rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div>10,000+ Happy Customers</div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div>5+ Years Experience</div>
        </div>

        {/* Urgency message */}
        <div className="mt-8 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
          <p className="text-sm text-primary-foreground/90">
            🔥 <strong>Special Launch Pricing:</strong> Save 50% on your first year. 
            Offer expires in <span className="font-semibold">7 days</span>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernCTA;
