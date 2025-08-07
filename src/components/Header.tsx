'use client';

import { ChevronDown, Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

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
    items: [
      { title: 'Shared Hosting', href: '/shared-hosting' },
      { title: 'WordPress Hosting', href: '/wordpress-hosting' },
    ],
  },
  {
    title: 'Domain',
    href: '/services/domain',
    items: [
      { title: 'Register Domain', href: '/register-domain' },
      { title: 'Transfer Domain', href: '/transfer-domain' },
    ],
  },
  {
    title: 'Email',
    href: '/services/email',
    items: [
      { title: 'Business Email', href: '/business-email' },
      { title: 'Zimbra Mail', href: '/zimbra-mail' },
    ],
  },
  {
    title: 'VPS',
    href: '/services/vps',
    items: [
      { title: 'Linux VPS', href: '/linux-vps' },
      { title: 'Windows VPS', href: '/windows-vps' },
    ],
  },
  {
    title: 'Dedicated Server',
    href: '/services/dedicated-server',
    items: [
      { title: 'USA Server', href: '/usa-server' },
      { title: 'BD Server', href: '/bd-server' },
    ],
  },
  {
    title: 'Cloud',
    href: '/services/cloud',
    items: [
      { title: 'Cloud Hosting', href: '/cloud-hosting' },
      { title: 'Cloud VPS', href: '/cloud-vps' },
    ],
  },
];

const Header = () => {
  const { setTheme, theme } = useTheme();

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
    <header className="border-b bg-background sticky top-0 z-50 ">
      <div className="mx-auto container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Alpha Net
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {menuData.map((menu) => (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuTrigger>
                    <Link className="text-md" href={menu.href}>
                      {menu.title}{' '}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      {menu.items.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block p-2 text-sm hover:bg-muted rounded"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="px-3 py-2 text-sm hover:text-primary"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="px-3 py-2 text-sm hover:text-primary"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {authUser ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center  ">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={authUser.avatar || '/placeholder.svg'}
                      />
                      <AvatarFallback className="bg-blue-600">
                        {authUser.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 ">
                  <DropdownMenuLabel className="">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="" />
                  <DropdownMenuItem className=" ">
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
                  <DropdownMenuItem className="">
                    <Link href={`/users/${authUser.id}`}>Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="" />
                  <DropdownMenuItem className="" onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="block text-foreground hover:text-primary"
            >
              Login
            </Link>
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[260px]">
              <div className="mt-4 flex flex-col gap-4">
                {menuData.map((menu) => (
                  <div key={menu.title}>
                    <p className="font-semibold text-sm">{menu.title}</p>
                    <ul className="pl-2 mt-1 space-y-1">
                      {menu.items.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href="/about" className="text-sm mt-2">
                  About
                </Link>
                <Link href="/contact" className="text-sm">
                  Contact
                </Link>
                <Button className="mt-4 w-full" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
