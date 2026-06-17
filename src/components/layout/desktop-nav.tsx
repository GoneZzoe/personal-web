'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { routes } from '@/data'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export const DesktopNav = () => {
    const pathname = usePathname()
    const activeSection = useScrollSpy(['home', 'resume', 'about', 'projects', 'contact'])

    const isActive = (path: string) => {
        if (pathname !== '/') {
            return pathname === path
        }
        const hash = path.split('#')[1]
        return activeSection === hash
    }

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
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
        <div className="hidden items-center space-x-4 md:flex">
            <nav className="flex space-x-6 font-medium">
                {routes.map((route) => (
                    <NextLink
                        key={route.path}
                        href={route.path}
                        onClick={(e) => handleNavClick(e, route.path)}
                        className={`transition-colors hover:text-primary ${isActive(route.path) ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                        {route.label}
                    </NextLink>
                ))}
            </nav>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center space-x-1">
                <ModeToggle />
                <NextLink
                    href="https://github.com/GoneZzoe"
                    target="_blank"
                    aria-label="GitHub repository"
                >
                    <Button variant="ghost" size="icon" aria-label="GitHub repository">
                        <span className="icon-[tabler--brand-github] size-5" />
                    </Button>
                </NextLink>
            </div>
        </div>
    )
}

