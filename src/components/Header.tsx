'use client';

import { ChevronDown, Menu, Moon, Sun, X, Server, Globe, Mail, Cloud, HardDrive, Smartphone } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants/business';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLogoutMutation } from '@/lib/services/auth';
import { setAuth } from '@/lib/slices/authSlice';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const menuData = [
  {
    title: 'Hosting',
    href: '/services/hosting',
    icon: <Server className="h-4 w-4" />,
    description: 'Fast, reliable web hosting solutions',
    items: [
      { title: 'Shared Hosting', href: '/services/hosting', description: 'Perfect for small websites' },
      { title: 'WordPress Hosting', href: '/services/hosting', description: 'Optimized for WordPress' },
      { title: 'Business Hosting', href: '/services/hosting', description: 'Professional hosting plans' },
    ],
  },
  {
    title: 'VPS',
    href: '/services/vps',
    icon: <HardDrive className="h-4 w-4" />,
    description: 'Virtual Private Servers with full control',
    items: [
      { title: 'Linux VPS', href: '/services/vps', description: 'Flexible Linux servers' },
      { title: 'Windows VPS', href: '/services/vps', description: 'Windows-based servers' },
      { title: 'Managed VPS', href: '/services/vps', description: 'Fully managed solutions' },
    ],
  },
  {
    title: 'Domain',
    href: '/services/domain',
    icon: <Globe className="h-4 w-4" />,
    description: 'Register and manage your domains',
    items: [
      { title: 'Domain Registration', href: '/services/domain', description: 'Register new domains' },
      { title: 'Domain Transfer', href: '/services/domain', description: 'Transfer existing domains' },
      { title: 'Domain Management', href: '/services/domain', description: 'Manage your domains' },
    ],
  },
  {
    title: 'Email',
    href: '/services/email',
    icon: <Mail className="h-4 w-4" />,
    description: 'Professional email solutions',
    items: [
      { title: 'Business Email', href: '/services/email', description: 'Professional email hosting' },
      { title: 'Email Security', href: '/services/email', description: 'Advanced security features' },
    ],
  },
  {
    title: 'SMS',
    href: '/services/sms',
    icon: <Smartphone className="h-4 w-4" />,
    description: 'Bulk SMS gateway services',
    items: [
      { title: 'Bulk SMS', href: '/services/sms', description: 'Send bulk SMS campaigns' },
      { title: 'SMS API', href: '/services/sms', description: 'Integrate SMS into your apps' },
    ],
  },
];

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const authUser = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout()
      .unwrap()
      .then(() => {
        router.push('/');
        dispatch(setAuth({ token: null, user: null }));
      });
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="mx-auto container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Server className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-foreground">{BUSINESS_INFO.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {menuData.map((menu) => (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {menu.icon}
                      <span>{menu.title}</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-foreground">{menu.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{menu.description}</p>
                      </div>
                      <div className="grid gap-2">
                        {menu.items.map((item) => (
                          <NavigationMenuLink key={item.title} asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4 ml-6">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {authUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={authUser.avatar || '/placeholder.svg'} alt={authUser.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {authUser.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{authUser.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {authUser.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href={
                      authUser.roles.includes('ADMIN')
                        ? `/admin/dashboard`
                        : `/users/${authUser.id}`
                    }
                  >
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/users/${authUser.id}`}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Sign in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-8 w-8"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-8 w-8"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
                  <Server className="h-4 w-4" />
                </div>
                <span className="font-bold">{BUSINESS_INFO.name}</span>
              </Link>
            </div>

            <nav className="flex-1 space-y-6 py-6">
              {menuData.map((menu) => (
                <div key={menu.title} className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm font-medium">
                    {menu.icon}
                    <span>{menu.title}</span>
                  </div>
                  <div className="space-y-2 pl-6">
                    {menu.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="space-y-3 pt-6 border-t">
                <Link
                  href="/about"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>

            {!authUser && (
              <div className="space-y-2 pt-6 border-t">
                <Button className="w-full" asChild>
                  <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/auth/register" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
