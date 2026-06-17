'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { routes } from '@/data'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const MobileNav = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const activeSection = useScrollSpy(['home', 'resume', 'about', 'projects', 'contact'])

    const isActive = (path: string) => {
        if (pathname !== '/') {
            return pathname === path
        }
        const hash = path.split('#')[1]
        return activeSection === hash
    }

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        setOpen(false)
        if (pathname === '/' && path.startsWith('/#')) {
            e.preventDefault()
            const id = path.split('#')[1]
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                window.history.pushState(null, '', `#${id}`)
            }
        }
    }

    return (
        <div className="flex items-center md:hidden space-x-1">
            <ModeToggle />
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <span className="icon-[tabler--align-right] size-5" />
                        <span className="sr-only">Dropdown Menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[150px]">
                    {routes.map((route) => (
                        <NextLink 
                            key={route.path} 
                            href={route.path}
                            onClick={(e) => handleNavClick(e, route.path)}
                        >
                            <DropdownMenuItem className={`cursor-pointer ${isActive(route.path) ? 'text-primary font-medium' : ''}`}>
                                {route.label}
                            </DropdownMenuItem>
                        </NextLink>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <NextLink
                            href="https://github.com/GoneZzoe"
                            target="_blank"
                            aria-label="GitHub repository"
                            onClick={() => setOpen(false)}
                            className="cursor-pointer"
                        >
                            View on GitHub
                        </NextLink>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

