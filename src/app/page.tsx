import { Layout } from '@/components/layout'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Projects } from '@/components/sections/projects'
import { Resume } from '@/components/sections/resume'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'

const HomePage = () => {
    return (
        <Layout>
            <section id="home" className="flex flex-col items-center py-12 text-center lg:items-start lg:text-left">
                <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left max-w-3xl">
                    <div className="flex items-baseline space-x-1 space-y-6 lg:flex-col lg:space-x-0">
                        <Typography variant="h1">👋</Typography>
                        <Typography
                            variant="h1"
                            className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold leading-none tracking-tight"
                        >
                            Hi, I&apos;m <span className="text-primary">HaoLi</span>
                        </Typography>
                    </div>
                    <p className="text-md text-muted-foreground">
                        I&apos;m a Computer Science graduate from the University of Toronto (Class of 2025). I am deeply interested in building scalable distributed systems and systems programming.
                    </p>
                    <div className="flex space-x-4">
                        <NextLink href="/#projects">
                            <Button className="text-primary-foreground" aria-label="View Projects">
                                View Projects
                            </Button>
                        </NextLink>
                        <NextLink href="/#contact">
                            <Button variant="outline" className="gap-2" aria-label="Contact Me">
                                Contact Me
                                <span className="icon-[tabler--mail-fast] size-6" />
                            </Button>
                        </NextLink>
                    </div>
                </div>
            </section>
            <Resume />
            <About />
            <Projects featured />
            <Contact />
        </Layout>
    )
}

export default HomePage
