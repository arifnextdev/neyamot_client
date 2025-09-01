import '@/app/globals.css';
import type { Metadata } from 'next';
import Header from './_components/sidebar';
import AdminLayouts from '@/components/layout/AdminLayout';

export const metadata: Metadata = {
  title: 'Alpha Net',
  description: 'Alpha Net - Your Ultimate Hosting Solution',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLayouts>
      <div className="flex min-h-screen">
        <Header />
        <main className="flex-1 p-6 pt-10 overflow-auto">
          {children}
        </main>
      </div>
    </AdminLayouts>
  );
}
