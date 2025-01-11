import type { JSX } from 'solid-js';
import { Link } from '~/components/ui/link';
import type { ExperienceItemProps } from './ExperienceItem';

export const FIELD_EXPERIENCE_ITEMS: ExperienceItemProps[] = [
  {
    position: 'Software Engineer',
    company: (
      <Link href="https://www.bloomandwild.com/" target="_blank">
        Bloom & Wild Group
      </Link>
    ),
    location: 'Amsterdam, Netherlands',
    startDate: 'September 2021',
    endDate: undefined,
    description: (
      <>
        <p>
          Here I am part of the production and procurement team, focused on building
          internal services to manage warehouse operations as part of a small, highly
          skilled team overseeing up to 12 services with diverse responsibilities across
          the domain.
        </p>
        <p>
          Develop end-to-end solutions to address user challenges, ensuring seamless
          integration of backend and frontend systems, utilizing Python-based backends
          (primarily Django and FastAPI) alongside React UIs to create efficient,
          user-focused applications.
        </p>
      </>
    ),
    keyTechnology: [
      'Python',
      'Django',
      'FastAPI',
      'PostgresSQL',
      'Docker',
      'GCP',
      'TypeScript',
      'React',
    ],
  },
  {
    position: 'Back End Developer',
    company: (
      <Link href="https://www.monks.com/" target="_blank">
        Media.Monks
      </Link>
    ),
    location: 'Hilversum, Netherlands',
    startDate: 'January 2020',
    endDate: 'September 2021',
    description: (
      <>
        <p>
          Focused exclusively on backend development using Python, working on a variety
          of projects ranging from small-scale initiatives to highly complex systems.
          Primarily utilized Django and Flask, with some contributions in FastAPI. Key
          projects included:
        </p>
        <ul>
          <li>
            <strong>Tokyo Olympics Broadcasting Platform</strong>: Contributed to video
            thumbnail generation, mobile push notification logic, and other supporting
            features.
          </li>
          <li>
            <strong>Google Landing Page Generator</strong>: Developed a tool to
            dynamically generate landing pages for showcasing Google’s products,
            adhering to their styling guides and integrating with their internal CMS for
            content management.
          </li>
        </ul>
      </>
    ),
    keyTechnology: [
      'Python',
      'Django',
      'Flask',
      'FastAPI',
      'PostgresSQL',
      'GCP',
      'Firebase',
      'Docker',
      'ffmpeg',
      'RabbitMQ',
      'Kafka',
      'Redis',
    ],
  },
  {
    position: 'Full-stack Developer',
    company: (
      <Link href="https://www.eurotrol.com" target="_blank">
        Eurotrol
      </Link>
    ),
    location: 'Ede, Netherlands',
    startDate: 'March 2018',
    endDate: 'December 2019',
    description: `Worked primarily with Django and jQuery to develop the new company 
      website, including a webshop integrated with Stripe for payment processing. 
      This platform also laid the groundwork for a digital solution enabling clinics, 
      hospitals, and laboratories to share and manage results using the company's 
      products, modernizing quality control processes and expanding their global reach.
    `,
    keyTechnology: [
      'Python',
      'Django',
      'PostgresSQL',
      'HTML',
      'CSS',
      'Javascript',
      'jQuery',
      'Stripe',
    ],
  },
  {
    position: 'Full-stack Developer',
    company: 'Freelancer',
    location: 'Porto, Portugal',
    startDate: '2011',
    endDate: 'March 2018',
    keyTechnology: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    description: (
      <>
        <p>
          Worked on a variety of projects for small businesses, delivering tailored web
          solutions to meet their unique needs, including:
        </p>
        <p>
          A web app with a management control area for a local gym. The app not only
          listed available services and classes but also allowed trainers to customize
          the variety of classes scheduled throughout the month. Additionally, it
          enabled them to monitor which users signed up for each class.
        </p>
        <p>
          Developed several product catalog-style websites for a construction company, a
          furniture business, an electrical appliance company, and a few others. While
          most of these projects are no longer online due to their age, one exception is
          the website for{' '}
          <Link href="https://ibercell.com" target="_blank">
            Ibercell
          </Link>
          , a company specializing in batteries, CDs, DVDs, and other consumables.
        </p>
        <p>
          This work provided me with early experience in end-to-end project development,
          from gathering requirements to deploying and maintaining functional,
          user-friendly websites.
        </p>
      </>
    ),
  },
] as const;

export const SOFT_SKILLS: {
  intro: string;
  sections: Record<string, string | JSX.Element>[];
  outro: string;
} = {
  intro: `Soft skills like communication, teamwork, and problem-solving are just as
    important as technical skills, and my experiences in sports and e-sports have been
    instrumental in shaping these abilities.`,
  sections: [
    {
      title: 'Sports',
      description: `For more than 15 years, I played football, futsal and basketball, at
        certain moments at the same time, where I developed strong teamwork and
        communication skills by collaborating with teammates, understanding roles, and
        achieving shared goals in high-pressure environments.`,
    },
    {
      title: 'E-Sports',
      description: (
        <>
          <p>
            In addition to traditional sports, I also spent several years playing video
            games competitively, which turned out to be a great way to learn about
            teamwork and leadership. As the leader of a competitive Counter-Strike team
            for over seven years, I handled tasks like arranging sponsorships,
            developing strategies for high-pressure matches, and mentoring a group of
            five to six teenagers. It was a fast-paced environment, and keeping everyone
            on the same page was both challenging and rewarding.
          </p>
          <p>
            I also led a 25-member international guild in <i>World of Warcraft</i> for a
            few years. This involved coordinating roles, planning tactics, and
            encouraging cooperation to tackle some pretty complex group challenges. It
            taught me a lot about communication and getting people, with different skill
            sets, to work together toward a shared goal.
          </p>
        </>
      ),
    },
  ],
  outro: `These experiences helped me develop skills in organization, mentoring, and
            leadership that I still rely on today in all kinds of situations.`,
} as const;

export const OTHER_EXPERIENCES: string[] = [
  `Before I started working as a software engineer, I held a few part-time jobs
    in cafes, bars, restaurants, and at a cinema. I handled tasks such as
    serving customers, preparing orders, and managing ticket sales, gaining
    hands-on experience in fast-paced environments.`,
  `While these jobs were less complex than my current work, they taught me
    valuable skills that I still rely on today. I developed a strong sense of
    responsibility, learned to coordinate effectively with colleagues, and honed
    my organization and time management abilities.`,
  `These experiences shaped my approach to teamwork and prepared me to handle
    more complex responsibilities in my professional career.`,
];
