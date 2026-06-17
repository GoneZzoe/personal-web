'use client'

import { useEffect, useState } from 'react'

export const useScrollSpy = (ids: string[]) => {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-35% 0px -35% 0px',
                threshold: 0,
            }
        )

        const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
        elements.forEach((el) => observer.observe(el))

        const handleScroll = () => {
            if (window.scrollY < 50) {
                setActiveId('home')
            } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
                setActiveId(ids[ids.length - 1])
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [ids])

    return activeId
}
