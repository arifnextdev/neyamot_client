'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function DomainSearchClient() {
  const [domain, setDomain] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleDomainSearch = async () => {
    if (!domain.trim()) {
      toast.error('Please enter a domain name');
      return;
    }

    setIsSearching(true);
    
    // Simulate domain search API call
    setTimeout(() => {
      const available = Math.random() > 0.5;
      setIsAvailable(available);
      setIsSearching(false);
      
      if (available) {
        toast.success(`${domain} is available!`);
      } else {
        toast.error(`${domain} is already taken`);
      }
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Enter your domain name (e.g., mywebsite.com)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleDomainSearch()}
            className="pl-10 h-12"
          />
        </div>
        <Button 
          onClick={handleDomainSearch} 
          disabled={isSearching}
          size="lg"
          className="h-12 px-8"
        >
          {isSearching ? 'Searching...' : 'Search Domain'}
        </Button>
      </div>

      {isAvailable !== null && (
        <div className={`p-4 rounded-lg border ${
          isAvailable 
            ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' 
            : 'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800'
        }`}>
          <div className="flex items-center gap-2">
            {isAvailable ? (
              <>
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800 dark:text-green-200">
                  {domain} is available!
                </span>
              </>
            ) : (
              <>
                <X className="h-5 w-5 text-red-600" />
                <span className="font-medium text-red-800 dark:text-red-200">
                  {domain} is already taken
                </span>
              </>
            )}
          </div>
          {isAvailable && (
            <Button className="mt-3" size="sm">
              Register Now - ৳1,200/year
            </Button>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {['.com', '.net', '.org', '.info'].map((ext) => (
          <div key={ext} className="text-center p-3 border rounded-lg">
            <div className="font-semibold">{ext}</div>
            <div className="text-sm text-muted-foreground">৳1,200/year</div>
          </div>
        ))}
      </div>
    </div>
  );
}
