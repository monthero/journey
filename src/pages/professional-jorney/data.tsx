import type { JSX } from 'solid-js';
import type { ExperienceItemProps } from './ExperienceItem';

export const FIELD_EXPERIENCE_ITEMS: ExperienceItemProps[] = [
  {
    contentKey: 'bloomon',
    companyName: 'Bloomon (Bloom & Wild Group)',
    companyUrl: 'https://www.bloomon.nl/',
    keyTechnology: [
      'Python',
      'Django',
      'FastAPI',
      'PostgresSQL',
      'TypeScript',
      'React',
      'Docker',
      'GCP',
    ],
  },
  {
    contentKey: 'mediaMonks',
    companyName: 'MediaMonks',
    companyUrl: 'https://www.mediamonks.com/',
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
    contentKey: 'eurotrol',
    companyName: 'Eurotrol B.V.',
    companyUrl: 'https://www.eurotrol.com/',
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
    contentKey: 'freelancer',
    keyTechnology: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
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
