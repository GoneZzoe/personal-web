'use client'

import { useState } from 'react'
import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'

export const Resume = () => {
    const [showPreview, setShowPreview] = useState(false)

    return (
        <section id="resume" className="flex flex-col space-y-8 py-4 scroll-mt-24">
            <div className="flex items-center justify-between border-b pb-4">
                <Typography variant="h1">📄 Resume</Typography>
                <div className="flex space-x-4">
                    <Button 
                        variant="outline" 
                        onClick={() => setShowPreview(!showPreview)}
                        className="flex items-center justify-center gap-2"
                    >
                        {showPreview ? (
                            <span className="icon-[tabler--eye-off] size-5 shrink-0" />
                        ) : (
                            <span className="icon-[tabler--eye] size-5 shrink-0" />
                        )}
                        <span>{showPreview ? 'Hide Preview' : 'Preview Resume'}</span>
                    </Button>
                    <a href="/Resume-HL.pdf" download="HaoLi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button className="flex items-center justify-center gap-2 text-primary-foreground">
                            <span className="icon-[tabler--download] size-5 shrink-0" />
                            <span>Download PDF</span>
                        </Button>
                    </a>
                </div>
            </div>
            {showPreview && (
                <div className="w-full aspect-[8.5/11] max-w-4xl mx-auto border rounded-xl overflow-hidden shadow-lg bg-card">
                    <iframe
                        src="/Resume-HL.pdf"
                        className="w-full h-full border-0 min-h-[600px] lg:min-h-[800px]"
                        title="HaoLi Resume Preview"
                    />
                </div>
            )}
        </section>
    )
}

