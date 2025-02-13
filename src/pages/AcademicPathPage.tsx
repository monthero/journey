import { IconWorldPin } from '@tabler/icons-solidjs';
import type { Component } from 'solid-js';
import { Divider } from 'styled-system/jsx/divider';
import { VStack } from 'styled-system/jsx/vstack';
import { hstack } from 'styled-system/patterns/hstack';
import { Heading } from '~/components/ui/heading';
import { Link } from '~/components/ui/link';
import { Table } from '~/components/ui/table';
import { Text } from '~/components/ui/text';
import { useLocale } from '~/locales';

const AcademicPathPage: Component = () => {
  const { t } = useLocale();

  return (
    <VStack
      gap={4}
      alignItems="center"
      justifyContent="flex-start"
      padding="5vh 15vw 10vh 15vw"
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
        Academic Path
      </Heading>
      <VStack
        gap="6"
        alignItems="flex-start"
        maxWidth={1024}
        padding="3vh 2vw"
        background="white"
        borderRadius="md"
        boxShadow="md"
      >
        <Table.Root>
          <Table.Head>
            <Table.Row _hover={{ background: 'transparent' }}>
              <Table.Header
                color="var(--colors-accent-text)"
                fontWeight="bold"
                paddingLeft={0}
              >
                Location
              </Table.Header>
              <Table.Header color="var(--colors-accent-text)" fontWeight="bold">
                Timeline
              </Table.Header>
              <Table.Header color="var(--colors-accent-text)" fontWeight="bold">
                Bachelor's Degree
              </Table.Header>
              <Table.Header color="var(--colors-accent-text)" fontWeight="bold">
                Master's Degree
              </Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row _hover={{ background: 'transparent' }}>
              <Table.Cell
                paddingLeft={0}
                class={hstack({
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                })}
              >
                <Link href="https://www.uminho.pt" target="_blank">
                  University of Minho
                </Link>
                <IconWorldPin size={14} color="var(--colors-accent-text)" />
                <Text>Braga, Portugal</Text>
              </Table.Cell>
              <Table.Cell>2007 - 2017</Table.Cell>
              <Table.Cell>
                <Link
                  href="https://www.uminho.pt/EN/education/educational-offer/Cursos-Conferentes-a-Grau/_layouts/15/UMinho.PortalUM.UI/Pages/CatalogoCursoDetail.aspx?itemId=5018&catId=15"
                  target="_blank"
                >
                  Software Engineering
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  href="https://www.uminho.pt/EN/education/educational-offer/Cursos-Conferentes-a-Grau/_layouts/15/UMinho.PortalUM.UI/Pages/CatalogoCursoDetail.aspx?itemId=5018&catId=15"
                  target="_blank"
                >
                  Intelligent Systems and Computer Graphics
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
        <VStack gap="2" alignItems="flex-start">
          <Heading as="h3" color="var(--colors-accent-text)">
            Thesis
          </Heading>
          <Text color="gray.700">Applying Gamification to e-Government</Text>
          <Text textAlign="justify" color="gray.600" lineHeight={1.5} fontSize="sm">
            Developed a geolocation mobile game enabling direct citizen-to-city hall
            communication. Citizens could report urban issues through gameplay focused
            on the city’s points of interest.
          </Text>
        </VStack>

        <VStack gap="2" alignItems="flex-start">
          <Heading as="h3" color="var(--colors-accent-text)">
            Aphelion (Group Project)
          </Heading>
          <Text textAlign="justify" color="gray.600" lineHeight={1.5} fontSize="sm">
            Designed an augmented reality multiplayer mobile shooter. My
            responsibilities included leading the team, managing database design and
            administration, implementing backend and frontend systems, and
            conceptualizing gameplay, lore, and design. These efforts culminated in an
            immersive and competitive gaming experience that blended strategic and
            real-time augmented reality elements.
          </Text>
        </VStack>

        <VStack gap="2" alignItems="flex-start">
          <Heading as="h3" color="var(--colors-accent-text)">
            Smart Walker
          </Heading>
          <Text textAlign="justify" color="gray.600" lineHeight={1.5} fontSize="sm">
            Created a support system for a smart walker to assist patients with mobility
            impairments. This project was a collaboration between the university and
            Braga’s hospital.
          </Text>
        </VStack>

        <Divider />
        <VStack
          gap="3"
          alignItems="flex-start"
          textAlign="justify"
          color="gray.600"
          lineHeight={1.5}
          fontSize="sm"
        >
          <Heading as="h3" fontSize="md" color="var(--colors-accent-text)">
            Finding my way
          </Heading>
          <Text as="p">
            When I first started university, I wasn’t entirely sure what I wanted to do
            professionally. Coming from a more arts-focused background in high school, I
            initially felt unmotivated and out of my depth in the course I had chosen.
            During this time, I took on part-time jobs, exploring different fields and
            gaining real-world experience, but nothing truly clicked.
          </Text>
          <Text as="p">
            That changed when I decided to build a website to modernize my parents’
            business’s online presence. It was my first hands-on project in web
            development, and it opened my eyes to the connections between what I was
            learning in my studies and the creative, technical work I loved doing.
          </Text>
          <Text as="p">
            From that moment, my motivation transformed, and I completed my degree with
            a renewed sense of purpose. That experience marked the start of my journey
            into technology and design, which has since become my passion and career.
          </Text>
          <Text as="p">
            My academic journey spanned several years, during which I explored diverse
            interests and gained practical experience. While the timeline was
            unconventional, it allowed me to discover my passion for web development,
            and from that point onward, I pursued my studies with clarity and purpose.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default AcademicPathPage;
