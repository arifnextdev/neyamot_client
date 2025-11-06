'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, MessageCircle, Headset, Globe, Shield, Copy, Check } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactPage() {
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '' 
  });
  const [copied, setCopied] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setForm({ ...form, subject: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', form);
    // Add API call or email sending here
  };

  const handleCopy = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const supportChannels = [
    // {
    //   icon: <MessageCircle className="h-6 w-6" />,
    //   title: 'Live Chat',
    //   description: 'Instant support for urgent issues',
    //   availability: '24/7 Available',
    //   action: 'Start Chat',
    //   href: '#',
    //   primary: true,
    // },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM (GMT+6)',
      action: 'Call Now',
      href: 'tel:+880961077877',
      primary: false,
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Detailed technical assistance',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      href: 'mailto:support@neyamotenterprise.com',
      primary: false,
    },
  ];

  const contactReasons = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'New Hosting Setup',
      description: 'Get help choosing and setting up your hosting plan',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Technical Issues',
      description: 'Resolve website, email, or server problems',
    },
    {
      icon: <Headset className="h-5 w-5" />,
      title: 'Account Management',
      description: 'Billing, upgrades, and account modifications',
    },
  ];

  return (
    <main className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get Expert Hosting Support
            <span className="text-primary block mt-2">24/7 Available</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Need help with your hosting? Our certified experts are ready to assist you with 
            technical support, sales inquiries, and account management. Choose your preferred 
            contact method below.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl border transition-all duration-300 animate-fade-in ${
                channel.primary
                  ? 'border-primary bg-primary/5 hover:bg-primary/10'
                  : 'border-border bg-card hover:bg-accent/5'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mb-4 ${channel.primary ? 'text-primary' : 'text-primary'}`}>
                {channel.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {channel.title}
              </h3>
              <p className="text-muted-foreground mb-3">
                {channel.description}
              </p>
              <p className="text-sm font-medium text-primary mb-4">
                {channel.availability}
              </p>
              <Button
                variant={channel.primary ? 'default' : 'outline'}
                className="w-full"
                asChild
              >
                <Link href={channel.href}>{channel.action}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card border rounded-xl p-8 animate-slide-in-left">
            <h2 className="text-2xl font-semibold mb-2 text-foreground">
              Send us a Message
            </h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you within 2 hours during business hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    placeholder="John" 
                    value={form.firstName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    placeholder="Doe" 
                    value={form.lastName}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel" 
                  placeholder="+880 1234 567890" 
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="subject">How can we help? *</Label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hosting">Web Hosting Plans</SelectItem>
                    <SelectItem value="vps">VPS Hosting</SelectItem>
                    <SelectItem value="domain">Domain Registration</SelectItem>
                    <SelectItem value="email">Email Hosting</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing & Account</SelectItem>
                    <SelectItem value="migration">Website Migration</SelectItem>
                    <SelectItem value="other">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please provide details about your inquiry or issue..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Quick Help */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Common Inquiries
              </h3>
              <div className="space-y-4">
                {contactReasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary mt-1">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{reason.title}</h4>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                <ContactCard
                  icon={<Phone className="h-5 w-5 text-primary" />}
                  title="Sales & Support"
                  value="+880 1712 345 678"
                  subtitle="Mon-Fri 9AM-6PM (GMT+6)"
                  copied={copied}
                  onCopy={() => handleCopy('Sales & Support', '+880 1712 345 678')}
                />
                <ContactCard
                  icon={<Mail className="h-5 w-5 text-primary" />}
                  title="Email Support"
                  value="support@alphanet.com"
                  subtitle="Response within 2 hours"
                  copied={copied}
                  onCopy={() => handleCopy('Email Support', 'support@alphanet.com')}
                />
                <ContactCard
                  icon={<MapPin className="h-5 w-5 text-primary" />}
                  title="Head Office"
                  value="House 123, Road 456, Gulshan-2, Dhaka 1212, Bangladesh"
                  subtitle=""
                  copied={copied}
                  onCopy={() => handleCopy('Head Office', 'House 123, Road 456, Gulshan-2, Dhaka 1212, Bangladesh')}
                />
                <ContactCard
                  icon={<Clock className="h-5 w-5 text-primary" />}
                  title="Support Hours"
                  value="Technical Support: 24/7 | Sales & Billing: Mon-Fri 9AM-6PM"
                  subtitle="Emergency: 24/7 Available"
                  copied={copied}
                  onCopy={() => handleCopy('Support Hours', 'Technical Support: 24/7 | Sales & Billing: Mon-Fri 9AM-6PM')}
                />
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                Emergency Support
              </h4>
              <p className="text-sm text-red-700 dark:text-red-200 mb-3">
                For critical server issues or security emergencies
              </p>
              <Button variant="destructive" size="sm" asChild>
                <Link href="tel:+8801712345678">Call Emergency Line</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Looking for Quick Answers?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check our comprehensive knowledge base and FAQ section for instant solutions 
            to common hosting questions and technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/support/faq">Browse FAQ</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/support/knowledge-base">Knowledge Base</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  copied: string | null;
  onCopy: () => void;
};

function ContactCard({ icon, title, value, subtitle, copied, onCopy }: ContactCardProps) {
  return (
    <Card className="bg-card border hover:bg-accent/5 transition-colors">
      <CardContent className="p-4 flex items-start gap-4 justify-between">
        <div className="flex gap-4">
          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-foreground">{title}</h4>
            <p className="text-muted-foreground text-sm break-words">{value}</p>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onCopy}
          title="Copy"
          className="text-muted-foreground hover:text-foreground flex-shrink-0"
        >
          {copied === title ? (
            <Check className="text-green-500" size={16} />
          ) : (
            <Copy size={16} />
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
