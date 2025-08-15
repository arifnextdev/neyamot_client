import LoginClient from '@/components/auth/LoginClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - Access Your Account',
  description: 'Sign in to your Neyamot Enterprise account to manage your hosting, domains, email, and digital services. Secure login with social authentication options.',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginClient />;
}
