import { BUSINESS_INFO } from '@/lib/constants/business';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'LocalBusiness';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: BUSINESS_INFO.name,
          description: BUSINESS_INFO.description,
          url: BUSINESS_INFO.contact.website,
          logo: `${BUSINESS_INFO.contact.website}/logo.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: BUSINESS_INFO.contact.phone,
            contactType: 'customer service',
            availableLanguage: ['English', 'Bengali']
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS_INFO.contact.address.line1,
            addressLocality: 'Khilkhet',
            addressRegion: 'Dhaka',
            postalCode: '1229',
            addressCountry: 'BD'
          },
          founder: {
            '@type': 'Person',
            name: BUSINESS_INFO.owner.name,
            jobTitle: BUSINESS_INFO.owner.title
          },
          sameAs: [
            BUSINESS_INFO.social.facebook,
            BUSINESS_INFO.social.linkedin,
            BUSINESS_INFO.social.twitter
          ]
        };

      case 'WebSite':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: BUSINESS_INFO.name,
          url: BUSINESS_INFO.contact.website,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${BUSINESS_INFO.contact.website}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        };

      case 'LocalBusiness':
        return {
          ...baseData,
          '@type': 'LocalBusiness',
          '@id': `${BUSINESS_INFO.contact.website}/#organization`,
          name: BUSINESS_INFO.name,
          description: BUSINESS_INFO.description,
          url: BUSINESS_INFO.contact.website,
          telephone: BUSINESS_INFO.contact.phone,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS_INFO.contact.address.line1,
            addressLocality: 'Khilkhet',
            addressRegion: 'Dhaka',
            postalCode: '1229',
            addressCountry: 'BD'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 23.8103,
            longitude: 90.4125
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '18:00'
          },
          serviceArea: {
            '@type': 'Country',
            name: 'Bangladesh'
          }
        };

      case 'Service':
        return {
          ...baseData,
          '@type': 'Service',
          name: data?.name || 'Web Hosting Services',
          description: data?.description || 'Professional web hosting and digital solutions',
          provider: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
            url: BUSINESS_INFO.contact.website
          },
          serviceType: data?.serviceType || 'Web Hosting',
          areaServed: {
            '@type': 'Country',
            name: 'Bangladesh'
          }
        };

      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
}
