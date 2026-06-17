import { Typography } from '@/components/typography'
import { education, experience } from '@/data'

export const About = () => {
    return (
        <section id="about" className="flex flex-col space-y-8 py-4 scroll-mt-24">
            <Typography variant="h1" underline>
                📝 About Me
            </Typography>
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Summary</Typography>
                <p className="text-lg text-muted-foreground">
                    I am a Computer Science graduate from the University of Toronto (Class of 2025), specializing in low-level systems and backend infrastructure. As an incoming/aspiring systems engineer, I bridge the gap between academic theory and high-performance software engineering.  My technical foundation is built on implementing core infrastructure from scratch, including a disk-oriented DBMS storage engine (C++20, MVCC, concurrent B+Tree) and a linearizable Raft consensus service (Go). Combined with my industry internship experience, I am equipped with the theoretical depth and practical skills to tackle complex, large-scale concurrent backend systems from day one
                </p>
            </div>
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Education</Typography>
                <div className="flex flex-col gap-3">
                    {education.map((item) => (
                        <div key={item.title} className="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                            <Typography variant="h3">{item.title}</Typography>
                            <p className="text-md text-muted-foreground">{item.subtitle}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Work Experience</Typography>
                <div className="flex flex-col gap-3">
                    {experience.map((item) => (
                        <div key={item.title} className="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                            <Typography variant="h3">{item.title}</Typography>
                            <p className="text-md text-muted-foreground font-medium">{item.subtitle}</p>
                            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                {item.description.map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Beyond Code</Typography>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>🎮 Gaming: Competing in high-rank matchmaking, I achieved Immortal in Dota2 ~6k MMR and Master Rank in League of Legends. I enjoy highly competitive games.</li>
                    <li>🍳 I am trying to learn how to cook, still trying to not burn the house down.</li>
                </ul>
            </div>
        </section>
    )
}
