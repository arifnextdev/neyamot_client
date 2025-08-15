import RegisterClient from '@/components/auth/RegisterClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account - Join Neyamot Enterprise',
  description: 'Create your Neyamot Enterprise account to access web hosting, domain registration, email hosting, and digital services. Join hundreds of satisfied customers in Bangladesh.',
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return <RegisterClient />;
}
