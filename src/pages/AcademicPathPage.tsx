import { IconWorldPin } from '@tabler/icons-solidjs';
import { type Component, For } from 'solid-js';
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
        {t('pageTitles.studies')}
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
                {t('studies.university.title')}
              </Table.Header>
              <Table.Header color="var(--colors-accent-text)" fontWeight="bold">
                {t('studies.timeline')}
              </Table.Header>
              <Table.Header color="var(--colors-accent-text)" fontWeight="bold">
                {t('studies.bachelors.title')}
              </Table.Header>
              <Table.Header color="var(--colors-accent-text)" fontWeight="bold">
                {t('studies.masters.title')}
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
                  {t('studies.university.name')}
                </Link>
                <IconWorldPin size={14} color="var(--colors-accent-text)" />
                <Text>{t('studies.university.location')}</Text>
              </Table.Cell>
              <Table.Cell>2007 - 2017</Table.Cell>
              <Table.Cell>
                <Link
                  href="https://www.uminho.pt/EN/education/educational-offer/Cursos-Conferentes-a-Grau/_layouts/15/UMinho.PortalUM.UI/Pages/CatalogoCursoDetail.aspx?itemId=5018&catId=15"
                  target="_blank"
                >
                  {t('studies.bachelors.value')}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  href="https://www.uminho.pt/EN/education/educational-offer/Cursos-Conferentes-a-Grau/_layouts/15/UMinho.PortalUM.UI/Pages/CatalogoCursoDetail.aspx?itemId=5018&catId=15"
                  target="_blank"
                >
                  {t('studies.masters.title')}
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
        <For each={t('studies.sections') ?? []}>
          {({ title, subtitle, description }) => (
            <VStack gap="2" alignItems="flex-start">
              <Heading as="h3" color="var(--colors-accent-text)">
                {title}
              </Heading>
              {subtitle && (
                <Heading as="h5" color="var(--colors-accent-text)">
                  {subtitle}
                </Heading>
              )}
              <Text textAlign="justify" color="gray.600" lineHeight={1.5} fontSize="sm">
                {description}
              </Text>
            </VStack>
          )}
        </For>
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
            {t('studies.outro.title')}
          </Heading>
          <For each={t('studies.outro.paragraphs') ?? []}>
            {(paragraph) => <Text as="p">{paragraph}</Text>}
          </For>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default AcademicPathPage;
