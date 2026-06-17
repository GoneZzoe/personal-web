/* 
title: 'Project Title' - The title of the project.
description: 'Project description.' - The description of the project.
image: '/images/projects/project-image.webp' - The path to the project image.
status: {
    text: 'Status' - The status of the project. (e.g. View Source, Coming Soon, Private Repository)
    link: 'Link' - The link to the project status. (e.g. GitHub Repository, Website)
    icon: 'icon-class' - The icon for the status. https://icon-sets.iconify.design/tabler/?query=mail&prefixes=tabler
}
note: 'Note' - A note for the project. (e.g. In development, Coming Soon)
isFeatured: true - Show the project in the featured section.
isFullWidth: true - Make the project image full width.
*/

export const projects = [
    {
        title: 'High-Concurrency LLM Gateway | Go, Redis',
        description: [
            'A high-concurrency, streaming-first API gateway engineered in Go, specifically optimized for proxying and managing Large Language Model (LLM) providers.',
            'Streaming Reverse Proxy: Designing a high-performance reverse proxy utilizing Server-Sent Events (SSE) to handle long-lived, asynchronous LLM streaming responses efficiently.',
            'Concurrency & Resource Management: Implementing robust connection pooling, dynamic rate limiting, and request queueing mechanisms in Go to optimize throughput and mitigate upstream throttling.',
            'Resilience: Integrating circuit breaking and automated fallback strategies across multiple LLM provider endpoints to ensure high availability.'
        ],
        status: {
            text: '',
        },
        note: "In development",
        isFeatured: true,
    },
    {
        title: 'BusTub Storage Engine (CMU 15-445 Self-Study) | C++',
        description: [
            'Built core components of a disk-oriented DBMS in C++ 20,including a thread-safe buffer pool manager, ARC page replacement policy, asynchronous disk scheduler, and RAII-based page guards for concurrent page access.',
            'Implemented a concurrent B+Tree index supporting insertion, deletion, point lookup, iterator-based range scan, page split/merge redistribution, and latch crabbing for fine-grained concurrency control.',
            'Developed vectorized query execution components and query optimizations, including aggregation, join executors, index scan optimization, external merge sort, and hash join execution in a relational query engine.',
            'Implemented MVCC transaction processing with snapshot isolation and optimistic concurrency control (OCC), including undo-log version chains, tuple reconstruction, serializable validation, and concurrent index maintenance.'
        ],
        status: {
            text: '',
        },
        isFeatured: true,
    },
    {
        title: 'MiniC Compiler | C ++',
        description: [
            'Built a full MiniC compiler in C++ with LLVM, implementing grammar parsing (ANTLR4), AST generation, semantic analysis, and LLVM IR code generation.',
            'Designed and implemented custom LLVM passes to perform register promotion and common subexpression elimination (CSE), improving the runtime performance of the generated code.'
        ],
        status: {
            text: '',
        },
        isFeatured: true,
    },
    {
        title: 'Fault-tolerant Key/Value Service | Go',
        description: [
            'Implemented the full Raft consensus algorithm in Go, including leader election, log replication, and crash recovery through persistent state, ensuring fault-tolerant replication across distributed nodes.',
            'Developed a linearizable key-value storage system backed by Raft, supporting fault tolerance, leader re-election, and client request deduplication under network partitions and node crashes.'
        ],
        status: {
            text: '',
        },
        isFeatured: true,
    },
    {
        title: 'Scriptorium : Online Code Execution Platform | NextJs,TypeScript, React, Node.js',
        description: [
            'Built and deployed a responsive full-stack web application using Next.js, Prisma, React, Tailwind CSS, and RESTful APIs on AWS Lightsail. Created a user-friendly interface with color theme switch and seamless front-end validations.',
            'Developed online code editing with syntax highlighting, real-time execution & Output, and secure sandboxing via Docker, supporting 10+ programming languages.',
            'Implemented user authentication (JWT), profile management, and features for saving, searching, editing, and sharing code templates, including template forking.',
            'Developed a blog platform with post creation, comments, upvotes/downvotes, reporting functionality, and dynamic interactions with code templates.'
        ],
        status: {
            text: 'View Source',
            link: 'https://github.com/GoneZzoe/Scriptorium',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },
]
