import { Typography } from '@/components/typography'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { projects } from '@/data'
import NextLink from 'next/link'

export interface ProjectsSectionProps {
    featured?: boolean
}

export const Projects = ({ featured }: ProjectsSectionProps) => {
    return (
        <section id="projects" className="flex flex-col space-y-8 py-4 scroll-mt-24">
            <div className="flex items-center justify-between border-b pb-4">
                <Typography variant="h1">🚀 Projects</Typography>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>View on GitHub</TooltipTrigger>
                        <TooltipContent aria-label="View on GitHub">
                            <NextLink
                                href="https://github.com/GoneZzoe"
                                className="flex items-center space-x-2"
                                target="_blank"
                                aria-label="View on GitHub"
                            >
                                <p className="hidden text-sm md:block">View on GitHub</p>
                                <span className="icon-[tabler--arrow-right] size-6" />
                            </NextLink>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <h2 className="text-lg text-muted-foreground">
                Here are some of the projects I&apos;ve worked on. You can find more on my GitHub profile.
            </h2>
            <div className="flex flex-col gap-4 w-full">
                {projects
                    .filter((project) => (featured ? project.isFeatured : true))
                    .map((project) => (
                        <Card key={project.title} className="w-full">
                            <div className="flex h-full flex-col justify-between">
                                <div>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <CardTitle>{project.title}</CardTitle>
                                        {project.note && (
                                            <Badge variant="secondary" className="rounded-full">
                                                {project.note}
                                            </Badge>
                                        )}
                                    </CardHeader>
                                    <CardContent className="pb-4">
                                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                            {project.description.map((bullet, idx) => (
                                                <li key={idx}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        {project.status.link ? (
                                            <NextLink
                                                href={project.status.link}
                                                target="_blank"
                                                className="flex items-center space-x-2 hover:underline"
                                            >
                                                <p>{project.status.text}</p>
                                                {project.status.icon && <span className={project.status.icon} />}
                                            </NextLink>
                                        ) : (
                                            <>
                                                <p>{project.status.text}</p>
                                                {project.status.icon && <span className={project.status.icon} />}
                                            </>
                                        )}
                                    </CardFooter>
                                </div>
                            </div>
                        </Card>
                    ))}
            </div>
        </section>
    )
}

