export const en = {
  header: {
    nav: {
      aboutMe: 'About me',
      workExperience: 'Work experience',
      studies: 'Studies',
    },
  },
  role: 'Software Engineer',
  pageTitles: {
    about: 'About Me',
    workExperience: 'Work',
    studies: 'Studies',
  },
  aboutItems: {
    about: {
      title: 'About Me',
      text: `Hey there! I'm Vasco Monteiro, a software engineer from Portugal, currently 
        settled in the Netherlands. I enjoy working through technical challenges and 
        am always up for opportunities to learn and develop my skills further.
        I'm passionate about coding and love exploring and trying out new things.`,
    },
    interests: {
      title: 'Interests',
      text: `Outside of work, I'm at my happiest exploring the outdoors, hiking in
        the mountains or getting lost in nature. Absolutely love traveling and trying new and
        tasty foods and learning about new cultures.`,
    },
    hobbies: {
      title: 'Hobbies',
      text: `I enjoy playing sports like football, basketball, badminton, and table
        tennis; disclaimer: I'm not good at any of them! I also like playing video games,
        watching anime, reading comics and listening to music.
        I'm also a coffee and mechanical keyboard enthusiast.`,
    },
    homeLife: {
      title: 'Home Life',
      text: `When at home my wife and our cuddly tabby cat are always ready for some cozy and
        fun times.`,
    },
    softSkills: {
      title: 'Soft Skills',
      values: [
        'Solution-oriented',
        'Collaboration',
        'Communication',
        'Adaptability',
        'User focus',
        'Continuous learning',
        'Supportive mentorship',
      ],
    },
    languages: {
      title: 'Languages',
      items: {
        pt: { name: 'Portuguese', level: 'Native' },
        en: { name: 'English', level: 'Fluent + Working Proficiency' },
        es: { name: 'Spanish', level: 'Fluent' },
        fr: { name: 'French', level: 'Conversational' },
        id: { name: 'Indonesian', level: 'Conversational (learning)' },
        nl: { name: 'Dutch', level: 'Basic' },
        jp: { name: 'Japanese', level: 'Basic (learning)' },
      },
    },
  },
  workXP: {
    bloomon: {
      role: 'Software Engineer',
      company: 'bloomon',
      location: 'Amsterdam, Netherlands',
      startDate: 'September 2021',
      endDate: 'Today',
      description: [
        `Currently part of the production and procurement team, where I design and
          develop internal services to streamline warehouse operations. Collaborating
          with a small, highly skilled team, I help manage up to 12 services and take
          ownership of two key projects, guiding their direction to align with business
          objectives and the team's technical goals.`,
        `I create end-to-end solutions by integrating Python-based backends (Django,
          FastAPI) with React UIs, delivering efficient and user-focused applications. I
          also mentor teammates, fostering collaboration and skill development within
          the team.`,
      ],
      // TODO: Add highlights
      highlights: [],
    },
    mediaMonks: {
      role: 'Backend Developer',
      company: 'MediaMonks',
      location: 'Hilverum, Netherlands',
      startDate: 'January 2020',
      endDate: 'September 2021',
      description: [
        `Focused exclusively on backend development using Python, working on a variety
          of projects ranging from small-scale initiatives to highly complex systems.
          Primarily utilized Django and Flask, with some contributions in FastAPI. Key
          projects included:`,
      ],
      highlights: [
        {
          title: 'Tokyo Olympics Broadcasting Platform',
          description: `
            Contributed to video
            thumbnail generation, mobile push notification logic, and other supporting
            features.
          `,
        },
        {
          title: 'Google Landing Page Generator',
          description: `
            Developed a tool to
            dynamically generate landing pages for showcasing Google’s products,
            adhering to their styling guides and integrating with their internal CMS for
            content management.
          `,
        },
      ],
    },
    eurotrol: {
      role: 'Full Stack Developer',
      company: 'Eurotrol B.V.',
      location: 'Ede, Netherlands',
      startDate: 'March 2018',
      endDate: 'December 2019',
      description: [
        `Worked primarily with Django and jQuery to develop the new company 
        website, including a webshop integrated with Stripe for payment processing. 
        This platform also laid the groundwork for a digital solution enabling clinics, 
        hospitals, and laboratories to share and manage results using the company's 
        products, modernizing quality control processes and expanding their global reach.
      `,
      ],
      // TODO: Add highlights
      highlights: [],
    },
    freelancer: {
      role: 'Full Stack Developer',
      location: 'Portugal',
      startDate: '~2011',
      endDate: 'February 2018',
      description: [
        `Worked on a variety of projects for small businesses, delivering tailored web
          solutions to meet their unique needs, including:`,
        `A web app with a management control area for a local gym. The app not only
          listed available services and classes but also allowed trainers to customize
          training plans for clients and track their progress.`,
        `Developed several product catalog-style websites for a construction company, a
          furniture business, an electrical appliance company, and a few others. While
          most of these projects are no longer online due to their age, one exception is
          the website for Ibercell, a company specializing in batteries, CDs, DVDs, and 
          other consumables.`,
        `This work provided me with early experience in end-to-end project development,
          from gathering requirements to deploying and maintaining functional,
          user-friendly websites.`,
      ],
      // TODO: Add highlights
      highlights: [],
    },
  },
};
