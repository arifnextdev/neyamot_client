import React from 'react';
import Link from 'next/link';
import { Server, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants/business';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Server className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-foreground">{BUSINESS_INFO.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              {BUSINESS_INFO.description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Hosting Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/hosting" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link href="/services/vps" className="text-muted-foreground hover:text-primary transition-colors">
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link href="/services/domain" className="text-muted-foreground hover:text-primary transition-colors">
                  Domain Registration
                </Link>
              </li>
              <li>
                <Link href="/services/email" className="text-muted-foreground hover:text-primary transition-colors">
                  Business Email
                </Link>
              </li>
              <li>
                <Link href="/services/sms" className="text-muted-foreground hover:text-primary transition-colors">
                  SMS Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Support & Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-muted-foreground hover:text-primary transition-colors">
                  System Status
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  {BUSINESS_INFO.contact.address.line1}<br />
                  {BUSINESS_INFO.contact.address.line2}<br />
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {BUSINESS_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.contact.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {BUSINESS_INFO.contact.email}
                </a>
              </li>
            </ul>

            {/* Trust Badge */}
            <div className="mt-6 p-3 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-primary">99.9% Uptime Guaranteed</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">24/7 Expert Support</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex flex-col space-y-2 text-center md:flex-row md:space-y-0 md:space-x-6 md:text-left">
              <p className="text-xs text-muted-foreground">
                © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span>Powered by</span>
              <span className="font-medium text-primary">Next.js</span>
              <span>&</span>
              <span className="font-medium text-primary">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
