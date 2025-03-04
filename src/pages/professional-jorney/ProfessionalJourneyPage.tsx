import { type Component, For, type ParentComponent } from 'solid-js';
import { VStack } from 'styled-system/jsx/vstack';
import { vstack } from 'styled-system/patterns';
import { Heading } from '~/components/ui/heading';
import { Tabs } from '~/components/ui/tabs';
import { Text } from '~/components/ui/text';
import { useLocale } from '~/locales';
import { ExperienceItem, type ExperienceItemProps } from './ExperienceItem';

const ProfessionalJourneyPage: Component = () => {
  const { t } = useLocale();
  const options = [
    { key: 'field-experience', label: 'Field Experience' },
    { key: 'other-experience', label: 'Other Experience' },
    { key: 'soft-skills-building', label: 'Soft Skills Building' },
  ];

  return (
    <VStack
      gap={4}
      alignItems="center"
      justifyContent="flex-start"
      padding="5vh 15vw"
      backgroundColor="var(--colors-accent-3)"
      width="100%"
      flex="1 1 auto"
    >
      <Heading
        as="h1"
        fontWeight="bold"
        fontSize="2em"
        textAlign="center"
        color="var(--colors-accent-10)"
      >
        {t('pageTitles.workExperience')}
      </Heading>
      <Tabs.Root defaultValue={'field-experience'} variant="outline">
        <Tabs.List>
          <For each={options}>
            {(option) => <Tabs.Trigger value={option.key}>{option.label}</Tabs.Trigger>}
          </For>
          <Tabs.Indicator />
        </Tabs.List>
        <TabContent value="field-experience">
          <For each={FIELD_EXPERIENCE_ITEMS}>
            {(experience, index) => (
              <ExperienceItem
                {...experience}
                useDivider={index() < FIELD_EXPERIENCE_ITEMS.length - 1}
              />
            )}
          </For>
        </TabContent>
        <TabContent value="other-experience">
          <For each={t('otherXP') ?? []}>
            {(experience) => (
              <Text as="p" lineHeight={1.75} textAlign="justify">
                {experience}
              </Text>
            )}
          </For>
        </TabContent>
        <TabContent value="soft-skills-building">
          <Text as="p" textAlign="justify">
            {t('softSkills.intro')}
          </Text>
          <For each={t('softSkills.sections') ?? []}>
            {({ title, description }) => (
              <VStack gap={3} alignItems="flex-start">
                <Heading
                  as="h3"
                  fontSize="1.6em"
                  color="var(--colors-accent-text)"
                  lineHeight="1"
                >
                  {title}
                </Heading>
                <For each={description}>
                  {(paragraph) => (
                    <Text as="p" textAlign="justify">
                      {paragraph}
                    </Text>
                  )}
                </For>
              </VStack>
            )}
          </For>
          <Text as="p" textAlign="justify">
            {t('softSkills.outro')}
          </Text>
        </TabContent>
      </Tabs.Root>
    </VStack>
  );
};

export default ProfessionalJourneyPage;

const TabContent: ParentComponent<{ value: string }> = ({ value, children }) => {
  return (
    <Tabs.Content
      value={value}
      class={vstack({
        gap: 4,
        flex: 1,
        alignItems: 'flex-start',
        paddingX: 20,
        paddingY: 10,
      })}
    >
      {children}
    </Tabs.Content>
  );
};

const FIELD_EXPERIENCE_ITEMS: ExperienceItemProps[] = [
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
