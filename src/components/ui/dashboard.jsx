"use client";

import Link from 'next/link';
import {
  Bell,
  CircleUser,
  LayoutGrid,
  Layers3,
  LineChart,
  Menu,
  MessageSquareDot,
  ScanText,
  SwatchBook,
  KeyRound,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from 'next/image';


export function Dashboard({ children, clientID }) {
  const pathname = usePathname();

  const getMenuItemClass = (path) => {
    const isActive = pathname === path;
    return isActive
      ? 'bg-[#fff] text-black hover:text-black hover:bg-[#fff]'
      : 'text-muted-foreground hover:text-black hover:bg-white';
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden md:block fixed h-full w-[220px] border-r bg-muted/40 lg:w-[280px]">
        <div className="flex flex-col gap-2 h-full">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image 
                src="/logo.svg"
                alt="logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span>kinzzle</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href={`/dashboard`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                  `/dashboard`
                )}`}
              >
                <LayoutGrid className="h-[15px] w-[15px]" />
                Overview
              </Link>
              <Link
                href={`/dashboard/${clientID}/organization`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                  `/dashboard/${clientID}/organization`
                )}`}
              >
                <Layers3 className="h-[15px] w-[15px]" />
                Organization
              </Link>
              <Link
                href={`/dashboard/${clientID}/feedbacks`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                  `/dashboard/${clientID}/feedbacks`
                )}`}
              >
                <MessageSquareDot className="h-4 w-4" />
                Feedbacks
              </Link>
              <Link
                href={`/dashboard/${clientID}/analytics`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                  `/dashboard/${clientID}/analytics`
                )}`}
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href={`/dashboard/${clientID}/logs`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                  `/dashboard/${clientID}/logs`
                )}`}
              >
                <ScanText className="h-4 w-4" />
                Logs
              </Link>
              <Link
                href={`/dashboard/${clientID}/branding`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                  `/dashboard/${clientID}/branding`
                )}`}
              >
                <SwatchBook className="h-4 w-4" />
                Branding
              </Link>
              <Link
                href={`/dashboard/${clientID}/keys`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                  `/dashboard/${clientID}/keys`
                )}`}
              >
                <KeyRound className="h-4 w-4" />
                API keys
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-0 md:ml-[220px] lg:ml-[280px] w-full">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="/" className="flex items-center m-5 gap-2 font-semibold">
                  <Image 
                    src="/favicon.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span>kinzzle</span>
                </Link>
                <Link
                  href={`/dashboard`}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                    `/dashboard`
                  )}`}
                >
                  <LayoutGrid className="h-[15px] w-[15px]" />
                  Overview
                </Link>
                <Link
                  href={`/dashboard/${clientID}/organization`}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                    `/dashboard/${clientID}/organization`
                  )}`}
                >
                  <Layers3 className="h-[15px] w-[15px]" />
                  Organization
                </Link>
                <Link
                  href={`/dashboard/${clientID}/feedbacks`}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                    `/dashboard/${clientID}/feedbacks`
                  )}`}
                >
                  <MessageSquareDot className="h-4 w-4" />
                  Feedbacks
                </Link>
                <Link
                  href={`/dashboard/${clientID}/analytics`}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                    `/dashboard/${clientID}/analytics`
                  )}`}
                >
                  <LineChart className="h-4 w-4" />
                  Analytics
                </Link>
                <Link
                  href={`/dashboard/${clientID}/logs`}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                    `/dashboard/${clientID}/logs`
                  )}`}
                >
                  <ScanText className="h-4 w-4" />
                  Logs
                </Link>
                <Link
                  href={`/dashboard/${clientID}/branding`}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                    `/dashboard/${clientID}/branding`
                  )}`}
                >
                  <SwatchBook className="h-4 w-4" />
                  Branding
                </Link>
                <Link
                  href={`/dashboard/${clientID}/keys`}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${getMenuItemClass(
                    `/dashboard/${clientID}/keys`
                  )}`}
                >
                  <KeyRound className="h-4 w-4" />
                  API keys
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex-1 flex overflow-x-auto">
            <form className="flex-1">
              {/* Add form elements here if needed */}
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                picture
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                given name
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
