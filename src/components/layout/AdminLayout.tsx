'use client';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const AdminLayouts = ({ children }: { children: React.ReactNode }) => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authUser !== undefined) {
      if (
        !authUser ||
        !authUser.roles?.some((role: string) =>
          ['ADMIN', 'MODERATOR'].includes(role),
        )
      ) {
        toast.error('You do not have permission to access this page.');
        router.replace('/');
      }
      setIsLoading(false);
    }
  }, [authUser, router]);

  // Show loading state
  if (isLoading || !authUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Check user roles
  const hasAccess = authUser.roles?.some((role: string) =>
    ['ADMIN', 'MODERATOR'].includes(role),
  );

  if (!hasAccess) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Redirecting...</p>
      </div>
    );
  }

  return <div className="min-h-screen">{children}</div>;
};

export default AdminLayouts;
