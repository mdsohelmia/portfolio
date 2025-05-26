import { Icons } from '@/components/icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
  name: 'Sohel Mia',
  initials: 'SM',
  url: 'https://www.sohel.pro',
  location: 'Dhaka, Bangladesh',
  locationLink: 'https://g.co/kgs/B2gXqhs',
  description:
    'Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.',
  summary:
    'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
  avatarUrl: '/me.jpg',
  skills: [
    'Go',
    'PHP',
    'React',
    'Next.js',
    'Typescript',
    'Postgres',
    'MYSQL',
    'TiDB',
    'Clickhouse',
    'Docker',
    'Kubernetes',
    'Java',
    'C++',
    'CDN',
    'VOD Encoding',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'sohel.biz@gmail.com',
    tel: '+8801736548286',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://dub.sh/dillion-github',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://dub.sh/dillion-linkedin',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/sohelcse1999',
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: 'Youtube',
        url: 'https://dub.sh/dillion-youtube',
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Nusratech Pte Ltd.',
      href: 'https://www.gotipath.com',
      badges: [],
      location: 'Remote',
      title: 'Tech Lead',
      logoUrl: '/atomic.png',
      start: 'May 2021',
      end: 'Oct 2022',
      description:
        'Leading a high-performing engineering team focused on building international-grade video streaming platforms for both local and global audiences. Spearheading the design and development of scalable video pipelines and infrastructure for major OTT platforms, including Chorki (by Transcom Group) and Bioscope (by Grameenphone). Overseeing end-to-end system architecture—from backend services in Go and PHP to advanced CDN and Multi-CDN delivery strategies—ensuring seamless content delivery, optimized performance, and global reach.',
    },
    {
      company: 'Kodeeo Limited',
      badges: [],
      href: 'https://www.kodeeo.com',
      location: 'Remote',
      title: 'Software Engineer',
      logoUrl: '/shopify.svg',
      start: 'January 2021',
      end: 'April 2021',
      description:
        'Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.',
    },
    {
      company: 'Lets Learn Coding Ltd.',
      href: 'https://klassroom.xyz',
      badges: [],
      location: 'Santa Clara, CA',
      title: 'Software Engineer',
      logoUrl: '/nvidia.png',
      start: 'January 2020',
      end: 'April 2020',
      description:
        'Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.',
    },
  ],
  education: [
    {
      school: 'Bangladesh University (BU)',
      href: 'https://bu.edu.bd',
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: '/bu.png',
      start: '2016',
      end: '2021',
    },
    {
      school: 'Patuakhali Government Polytechnic Institute',
      href: 'https://patuakhali.polytech.gov.bd',
      degree: 'Diploma in Computer Science and Engineering',
      logoUrl: '/logo.png',
      start: '2012',
      end: '2016',
    },
  ],
  projects: [
    {
      title: 'Chat Collect',
      href: 'https://chatcollect.com',
      dates: 'Jan 2024 - Feb 2024',
      active: true,
      description:
        'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Stripe',
        'Shadcn UI',
        'Magic UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://chatcollect.com',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
    },
    {
      title: 'Magic UI',
      href: 'https://magicui.design',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Designed, developed and sold animated UI components for developers.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Stripe',
        'Shadcn UI',
        'Magic UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://magicui.design',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/magicuidesign/magicui',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: 'https://cdn.magicui.design/bento-grid.mp4',
    },
    {
      title: 'llm.report',
      href: 'https://llm.report',
      dates: 'April 2023 - September 2023',
      active: true,
      description:
        'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://llm.report',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/dillionverma/llm.report',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: 'https://cdn.llm.report/openai-demo.mp4',
    },
    {
      title: 'Automatic Chat',
      href: 'https://automatic.chat',
      dates: 'April 2023 - March 2024',
      active: true,
      description:
        'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://automatic.chat',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4',
    },
  ],
  hackathons: [],
} as const
