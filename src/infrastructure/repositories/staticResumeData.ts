import type { Resume } from '@domain/entities/Resume'

// Static data – used for SSG build. Can be swapped with real API call.
export const resumeData: Resume = {
  name: 'Hung Vuong',
  nameVi: 'Vương Hùng',
  title: 'Software Engineer',
  summary:
    'Results-driven Full-Stack Software Engineer with 5+ years of experience in enterprise and freelance environments. Proficient in .NET, Java, and modern JavaScript frameworks (React, Angular, React Native), with a strong track record integrating third-party APIs (AWS, PayPal, Blockchain) and maintaining high-availability systems. Actively applies AI tools and Prompt Engineering to accelerate development and improve code quality.',
  contact: {
    email: 'hungvuongg71@gmail.com',
    linkedin: 'linkedin/vhung71',
    linkedinUrl: 'https://linkedin.com/in/vhung71',
  },
  workExperiences: [
    {
      id: 'dsoft',
      company: 'DSOFT Software',
      location: 'Trung My Tay Ward',
      description:
        'Enterprise software outsourcing, automated systems, and high-availability digital solutions.',
      role: '.NET Developer',
      period: '08/2023 – Current',
      bullets: [
        'Developed automated data synchronization tools using ASP.NET and SQL Server for large-scale data systems.',
        'Architected and implemented features using ABP Framework and Oracle, enhancing internal project efficiency.',
        'Collaborated directly with clients to analyze requirements and propose technical solutions, reducing delivery time.',
        'Integrated automated notification/SMS modules across mobile and social platforms.',
        'Maintained and upgraded legacy systems ensuring 99.9% uptime and zero impact on live operations.',
        'Applied Prompt Engineering and AI tools (ChatGPT/Gemini/Claude) to accelerate development cycles, refactor legacy code, and maintain high-quality documentation for complex .NET and React/Angular architectures.',
      ],
    },
    {
      id: 'tma',
      company: 'TMA Solutions',
      location: 'District 12',
      description: 'Providing outsourcing services to leading companies worldwide.',
      role: 'Software Engineer',
      period: '05/2021 – 07/2023',
      bullets: [
        'Built robust backend systems using Spring Framework and integrated AWS S3, PayPal, and Social Login APIs.',
        'Developed Admin Dashboards with ReactJS, optimizing project architecture for better maintainability.',
        'Built responsive website for CMS systems using Umbraco .NET, supporting multi-language content.',
        'Developed a React Native application with EtherJS for Ethereum blockchain interactions.',
        'Enhanced iOS card recognition modules using Objective-C/C++, achieving >95% accuracy compared to original images.',
      ],
    },
    {
      id: 'vietinfo',
      company: 'VietInfo Corp',
      location: 'Binh Thanh District',
      description:
        'Specializing in enterprise software development and digital transformation services.',
      role: 'UI Engineer | Frontend Developer',
      period: '02/2016 – 08/2020',
      bullets: [
        'Led the frontend development for web and mobile products using Angular, Xamarin .NET, and Ionic.',
        'Designed User Flows and mockups using Figma/Adobe XD to streamline user interaction.',
        'Built dynamic WebForms and templates on ASP.NET MVC and DotNetNuke platforms.',
        'Troubleshot and optimized frontend performance for diverse enterprise clients.',
      ],
    },
  ],
  freelanceProjects: [
    {
      id: 'idac',
      client: 'I-DAC VN Marketing Agency',
      role: 'Web Developer',
      period: '07/2025 – 03/2026',
      description:
        'Mentored and supervised 1 junior developer, conducting code reviews and ensuring delivery standards across multiple landing page projects.',
    },
    {
      id: 'vietcuong',
      client: 'Viet Cuong Dental',
      role: 'Backend Developer',
      period: '08/2025 – 10/2025',
      description:
        'Built a headless CMS using Strapi v5 to manage dental service content and medical professional profiles.',
    },
    {
      id: 'polaris',
      client: 'Polaris English Academy',
      role: 'Wix Developer',
      period: '11/2024 – 11/2025',
      description:
        'Built and optimized an English learning service website on Wix, integrating student registration and course management features.',
    },
    {
      id: 'uxcomic',
      client: 'UX-Comic Web Blog',
      role: 'Web Developer',
      period: '09/2024 – 12/2025',
      description:
        'Designed and maintained a specialized blog platform for sharing professional experiences with an optimized content storage system.',
    },
    {
      id: 'skyline',
      client: 'Skyline VN Logistics',
      role: 'WordPress Developer',
      period: '06/2023 – 09/2023',
      description:
        'Focused on creating an intuitive user interface and high-performance layout to enhance brand credibility and customer engagement.',
    },
  ],
  education: [
    {
      id: 'hutech',
      institution: 'HUTECH University',
      degree: 'Software Development',
      location: 'Binh Thanh District, HCMC',
      period: '09/2017 – 06/2021',
    },
    {
      id: 'fpt',
      institution: 'FPT Polytechnic',
      degree: 'Software Applications',
      location: 'District 3, HCMC',
      period: '09/2013 – 09/2016',
    },
  ],
  skillGroups: [
    {
      category: 'Back-end Frameworks',
      items: [
        { name: 'ASP.NET / .NET Core', years: 5 },
        { name: 'ABP Framework', years: 3 },
        { name: 'Umbraco .NET', years: 2 },
        { name: 'DotNetNuke', years: 2 },
        { name: 'Spring Framework', years: 2 },
        { name: 'NodeJS', years: 2 },
      ],
    },
    {
      category: 'Front-end Frameworks',
      items: [
        { name: 'React / NextJS', years: 4 },
        { name: 'Angular', years: 5 },
        { name: 'Webpack / Vite', years: 3 },
        { name: 'TailwindCSS', years: 3 },
        { name: 'jQuery', years: 5 },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'Oracle', years: 3 },
        { name: 'MySQL', years: 4 },
        { name: 'PostgreSQL', years: 2 },
        { name: 'SQL Server', years: 5 },
      ],
    },
    {
      category: 'Server Environments',
      items: [
        { name: 'Linux, Nginx Server', years: 3 },
        { name: 'Windows, Microsoft IIS', years: 5 },
      ],
    },
    {
      category: 'Tools & AI Productivity',
      items: [
        { name: 'Docker', years: 2 },
        { name: 'Cloudflare', years: 2 },
        { name: 'VS Studio / VS Code', years: 5 },
        { name: 'Figma', years: 3 },
        { name: 'Git / SVN', years: 5 },
        { name: 'ChatGPT / Gemini / Claude', years: 2 },
        { name: 'Antigravity / Codex GPT', years: 1 },
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Analytical Problem Resolving' },
        { name: 'Agile / Scrum' },
        { name: 'Cross-functional Collaboration' },
      ],
    },
  ],
  languages: [
    { name: 'Vietnamese', level: 'Native' },
    { name: 'English', level: 'Pre-Intermediate' },
  ],
}
