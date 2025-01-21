import {
  IconChartHistogram,
  IconHomeHeart,
  IconLanguage,
  IconMoodWink,
  IconMountainFilled,
  IconPingPong,
} from '@tabler/icons-solidjs';
import { type Component, For, type JSX } from 'solid-js';
import { Grid } from 'styled-system/jsx/grid';
import { GridItem } from 'styled-system/jsx/grid-item';
import { HStack } from 'styled-system/jsx/hstack';
import { VStack } from 'styled-system/jsx/vstack';
import avatarImg from '~/assets/avatar.png';
import { Text } from '~/components/ui/text';
import { useLocale } from '~/locales';

const AboutPage: Component = () => {
  const { t } = useLocale();

  const getSectionContent = (
    code: 'about' | 'interests' | 'hobbies' | 'homeLife' | 'softSkills' | 'languages'
  ): string | JSX.Element => {
    if (['about', 'interests', 'hobbies', 'homeLife'].includes(code)) {
      return t(
        `aboutItems.${code as 'about' | 'interests' | 'hobbies' | 'homeLife'}.text`
      ) as string;
    }

    if (code === 'softSkills') {
      return (
        <VStack gap={1} alignItems="flex-start">
          <For each={softSkills}>
            {(_item, index) => (
              <HStack alignItems="center" justifyContent="flex-start" width="100%">
                <Text
                  as="span"
                  color="var(--colors-accent-text)"
                  textAlign="right"
                  flex="0 0 auto"
                >
                  -
                </Text>
                <Text>{t(`aboutItems.softSkills.values.${index()}`)}</Text>
              </HStack>
            )}
          </For>
        </VStack>
      );
    }

    if (code === 'languages') {
      return (
        <VStack gap={1} alignItems="flex-start">
          <For each={languages}>
            {(item) => (
              <HStack width="100%" alignItems="center" justifyContent="flex-start">
                <Text
                  as="span"
                  color="var(--colors-accent-text)"
                  textAlign="right"
                  flex="0 0 auto"
                >
                  -
                </Text>
                <Text>{t(`aboutItems.languages.items.${item}.name`)}</Text>
                <Text
                  as="span"
                  color="var(--colors-accent-text)"
                  textAlign="right"
                  flex="1 1 auto"
                  fontSize="0.8em"
                >
                  ({t(`aboutItems.languages.items.${item}.level`)})
                </Text>
              </HStack>
            )}
          </For>
        </VStack>
      );
    }

    return '';
  };

  return (
    <>
      <HStack
        width="100%"
        paddingX="15vw"
        paddingY="8vh"
        alignItems="center"
        gap={10}
        backgroundColor="var(--colors-accent-8)"
      >
        <VStack
          gap={5}
          flex="0 0 50%"
          textAlign="right"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Text as="h1" fontSize="5.5em" lineHeight={0.9}>
            <Text as="span" fontWeight="lighter" color="var(--colors-accent-text)">
              Vasco
            </Text>
            <Text
              as="span"
              fontWeight="bold"
              display="block"
              color="var(--colors-accent-fg)"
            >
              Monteiro
            </Text>
          </Text>
          <Text
            as="h2"
            fontSize="1.4em"
            fontWeight="light"
            textTransform="uppercase"
            color="var(--colors-accent-text)"
          >
            {t('role')}
          </Text>
        </VStack>
        <img src={avatarImg} alt="me and mochi" width={420} />
      </HStack>
      <Grid padding="5vh 15vw 10vh 15vw" columns={3} gap={10}>
        <For each={aboutItems}>
          {({ code, icon }) => (
            <GridItem>
              <HStack gap={2} alignItems="center">
                {icon}
                <Text as="span" fontWeight="bold">
                  {t(`aboutItems.${code}.title`)}
                </Text>
              </HStack>
              <Text as="p" marginTop={2} wordBreak="break-word">
                {getSectionContent(code)}
              </Text>
            </GridItem>
          )}
        </For>
      </Grid>
    </>
  );
};

export default AboutPage;

const ICON_STYLES = { size: 30, color: 'var(--colors-accent-9)' } as const;
const aboutItems = [
  { code: 'about', icon: <IconMoodWink {...ICON_STYLES} /> },
  { code: 'interests', icon: <IconMountainFilled {...ICON_STYLES} /> },
  { code: 'hobbies', icon: <IconPingPong {...ICON_STYLES} /> },
  { code: 'homeLife', icon: <IconHomeHeart {...ICON_STYLES} /> },
  { code: 'softSkills', icon: <IconChartHistogram {...ICON_STYLES} /> },
  { code: 'languages', icon: <IconLanguage {...ICON_STYLES} /> },
] as const;

const softSkills: string[] = [
  'Solution-oriented',
  'Collaboration',
  'Communication',
  'Adaptability',
  'User focus',
  'Continuous learning',
  'Supportive mentorship',
] as const;

const languages = ['pt', 'en', 'es', 'fr', 'id', 'nl', 'jp'] as const;
