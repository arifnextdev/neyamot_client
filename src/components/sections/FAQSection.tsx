'use client';

import { useState } from 'react';
import { Badge } from '../ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Neyamot Enterprise different from other hosting providers?",
      answer: "We specialize in the Bangladesh market with local servers, 24/7 Bengali support, and pricing in BDT. Our infrastructure is optimized for the region with 99.9% uptime guarantee and enterprise-grade security features."
    },
    {
      question: "Do you offer free website migration?",
      answer: "Yes! We provide free website migration for all new customers. Our technical team will handle the entire migration process to ensure zero downtime and data integrity."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including bKash, Nagad, Rocket, bank transfers, and international credit/debit cards. We also offer flexible payment terms for enterprise customers."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Absolutely! We offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied with our service, we'll refund your money with no questions asked."
    },
    {
      question: "Do you provide SSL certificates?",
      answer: "Yes, we provide free SSL certificates with all hosting plans. We also offer premium SSL certificates for enhanced security and validation for e-commerce websites."
    },
    {
      question: "How quickly can I get my website online?",
      answer: "Your hosting account is activated instantly after payment confirmation. You can have your website online within minutes using our one-click installers or by uploading your files."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support through live chat, email, and phone. Our support team consists of certified hosting experts who can assist you in both English and Bengali."
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer: "Yes, you can upgrade your hosting plan at any time. The upgrade process is seamless and there's no downtime. You'll only pay the prorated difference for the remaining billing period."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-3 py-1">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked
            <span className="block text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our hosting services and support.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">
              📞 +880-1234-567890
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              📧 support@neyamotenterprise.com
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
