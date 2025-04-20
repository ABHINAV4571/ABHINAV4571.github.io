
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const isMobile = useIsMobile();
  
  const navItems = [
    { name: 'About', href: '#' },
    { name: 'Topics', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="py-6 px-4 md:px-8 border-b border-taph-tan/30">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-taph-softBlack flex items-center justify-center">
              <span className="font-serif text-taph-ivory text-lg font-medium">TAPH</span>
            </div>
            <span className="ml-3 font-serif text-taph-softBlack text-xl md:text-2xl hidden sm:inline-block">The Art of Politics & History</span>
          </div>
          
          {/* Navigation */}
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-taph-softBlack" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map(item => (
                    <a key={item.name} href={item.href} className="font-serif text-lg px-2 py-1 nav-link">
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex space-x-8">
              {navItems.map(item => (
                <a key={item.name} href={item.href} className="font-serif text-lg px-2 py-1 nav-link">
                  {item.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
