import { Link } from '@tanstack/react-router';
import { LucideOrigami, MoonIcon, SunIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar';
import { Container } from '@/components/atoms/containter';
import { useTheme } from '@/components/providers/theme-provider';
import { Button } from '@/components/atoms/button';

function HeaderMenu() {
  return (
    <nav>
      <ul className="flex justify-center gap-8">
        <li>
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function HeaderUser() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex justify-end items-center gap-4">
      <Button
        className="[&_svg:not([class*='size-'])]:size-6 cursor-pointer"
        variant="ghost"
        size="icon"
        onClick={() => toggleTheme()}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
      <Avatar className="w-10 h-10">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className="object-cover"
        />
        <AvatarFallback>UA</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function TopHeader() {
  return (
    <Container>
      <header className="grid grid-cols-3 items-center border ring-1 ring-muted px-4 py-2 rounded-2xl mt-2">
        <LucideOrigami />
        <HeaderMenu />
        <HeaderUser />
      </header>
    </Container>
  );
}
