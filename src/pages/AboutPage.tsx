import Cat from 'lucide-solid/icons/cat';
import MessageCircleHeart from 'lucide-solid/icons/message-circle-heart';
import MessagesSquare from 'lucide-solid/icons/messages-square';
import NotepadText from 'lucide-solid/icons/notepad-text';
import UserRoundPen from 'lucide-solid/icons/user-round-pen';
import Volleyball from 'lucide-solid/icons/volleyball';
import { type Component, For } from 'solid-js';
import { Grid } from 'styled-system/jsx/grid';
import { GridItem } from 'styled-system/jsx/grid-item';
import { HStack } from 'styled-system/jsx/hstack';
import { VStack } from 'styled-system/jsx/vstack';
import avatarImg from '~/assets/avatar.png';
import { Text } from '~/components/ui/text';
import { Tooltip } from '~/components/ui/tooltip';

const AboutPage: Component = () => {
  const aboutItems = [
    {
      icon: <UserRoundPen {...ICON_STYLES} />,
      title: 'About Me',
      content: `Hey there! I'm Vasco Monteiro, a software engineer from Portugal, currently 
        settled in the Netherlands. I enjoy working through technical challenges and 
        am always up for opportunities to learn and develop my skills further.
        I'm passionate about coding and love exploring and trying out new things.`,
    },
    {
      icon: <MessageCircleHeart {...ICON_STYLES} />,
      title: 'Interests',
      content: `Outside of work, I'm at my happiest exploring the outdoors, hiking in 
      the mountains or getting lost in nature. Absolutely love traveling and trying new and 
      tasty foods and learning about new cultures.`,
    },
    {
      icon: <Volleyball {...ICON_STYLES} />,
      title: 'Hobbies',
      content: `I enjoy playing sports like football, basketball, badminton, and table 
        tennis; disclaimer: I'm not good at any of them! I also like playing video games, 
        watching anime, reading comics and listening to music. 
        I'm also a coffee and mechanical keyboard enthusiast.`,
    },
    {
      icon: <Cat {...ICON_STYLES} />,
      title: 'Home Life',
      content: `When at home, my wife and our cuddly tabby cat are always ready for some cozy and 
        fun times.`,
    },
    {
      icon: <NotepadText {...ICON_STYLES} />,
      title: 'Soft Skills',
      content: (
        <VStack gap={1} alignItems="flex-start">
          <For each={softSkills}>
            {(item) => (
              <HStack alignItems="center" justifyContent="flex-start" width="100%">
                <Text
                  as="span"
                  color="var(--colors-accent-text)"
                  textAlign="right"
                  flex="0 0 auto"
                >
                  -
                </Text>
                <Text>{item}</Text>
              </HStack>
            )}
          </For>
        </VStack>
      ),
    },
    {
      icon: <MessagesSquare {...ICON_STYLES} />,
      title: 'Languages',
      content: (
        <VStack gap={1} alignItems="flex-start">
          <For each={languages}>
            {({ language, level }) => (
              <HStack width="100%" alignItems="center" justifyContent="flex-start">
                <Text
                  as="span"
                  color="var(--colors-accent-text)"
                  textAlign="right"
                  flex="0 0 auto"
                >
                  -
                </Text>
                <Text>{language}</Text>
                <Text
                  as="span"
                  color="var(--colors-accent-text)"
                  textAlign="right"
                  flex="1 1 auto"
                  fontSize="0.8em"
                >
                  ({level})
                </Text>
              </HStack>
            )}
          </For>
        </VStack>
      ),
    },
  ] as const;

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
            Software Engineer
          </Text>
        </VStack>
        <img src={avatarImg} alt="me and mochi" width={420} />
      </HStack>
      <Grid padding="5vh 15vw 10vh 15vw" columns={3} gap={10}>
        <For each={aboutItems}>
          {({ icon, title, content }) => (
            <GridItem>
              <Tooltip title={title}>{icon}</Tooltip>
              <Text as="p" textAlign="justify" marginTop={2} wordBreak="break-word">
                {content}
              </Text>
            </GridItem>
          )}
        </For>
      </Grid>
    </>
  );
};

export default AboutPage;

const softSkills: string[] = [
  'Solution-oriented',
  'Collaboration',
  'Communication',
  'Adaptability',
  'User focus',
  'Continuous learning',
  'Supportive mentorship',
] as const;

const languages: { language: string; level: string }[] = [
  { language: 'Portuguese', level: 'Native' },
  { language: 'English', level: 'Fluent + Working Proficiency' },
  { language: 'Spanish', level: 'Fluent' },
  { language: 'French', level: 'Conversational' },
  { language: 'Indonesian', level: 'Conversational' },
  { language: 'Dutch', level: 'Basic' },
  { language: 'Japanese', level: 'Basic' },
] as const;

const ICON_STYLES = { size: 30, color: 'var(--colors-accent-9)' } as const;
