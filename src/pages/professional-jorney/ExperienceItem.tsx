import { IconCalendarWeekFilled, IconWorldPin } from '@tabler/icons-solidjs';
import { type Component, For } from 'solid-js';
import { Divider } from 'styled-system/jsx/divider';
import { HStack } from 'styled-system/jsx/hstack';
import { VStack } from 'styled-system/jsx/vstack';
import { Heading } from '~/components/ui/heading';
import { Link } from '~/components/ui/link';
import { Text } from '~/components/ui/text';
import { type RawLocaleDictionary, useLocale } from '~/locales';

export type ExperienceItemProps = {
  contentKey: keyof RawLocaleDictionary['workXP'];
  companyName?: string;
  companyUrl?: string;
  keyTechnology: string[];
};

export const ExperienceItem: Component<
  ExperienceItemProps & { useDivider: boolean }
> = ({ contentKey, companyName, companyUrl, keyTechnology, useDivider }) => {
  const { t } = useLocale();

  return (
    <VStack gap={3} alignItems="flex-start">
      <HStack gap={2} alignItems="baseline">
        <Heading
          as="h3"
          fontSize="1.6em"
          color="var(--colors-accent-text)"
          lineHeight="1"
        >
          {t(`workXP.${contentKey}.role`)}
        </Heading>
        {companyName != null && (
          <>
            <Text
              as="p"
              fontSize="0.9em"
              lineHeight="0.9"
              color="var(--colors-sage-10)"
            >
              @
            </Text>
            <Text as="p" fontSize="1.1em" lineHeight="1">
              <Link href={companyUrl} target="_blank">
                {companyName}
              </Link>
            </Text>
          </>
        )}
      </HStack>
      <HStack alignItems="center">
        <IconWorldPin size={14} color="var(--colors-accent-10)" />
        <Text as="p" fontSize="0.8em" lineHeight="1" color="var(--colors-accent-8)">
          {t(`workXP.${contentKey}.location`)}
        </Text>
        <IconCalendarWeekFilled size={14} color="var(--colors-accent-10)" />
        <Text as="p" fontSize="0.7em" color="var(--colors-accent-8)">
          {t(`workXP.${contentKey}.startDate`)} → {t(`workXP.${contentKey}.endDate`)}
        </Text>
      </HStack>
      <VStack
        gap={3}
        textAlign="justify"
        alignItems="flex-start"
        marginY={5}
        fontSize="0.96em"
        color="var(--colors-sage-11)"
        lineHeight={1.75}
      >
        <For each={t(`workXP.${contentKey}.description`) ?? []}>
          {(paragraph) => <Text as="p">{paragraph}</Text>}
        </For>
        <For each={t(`workXP.${contentKey}.highlights`) ?? []}>
          {({ title, description }) => (
            <VStack gap={1} alignItems="flex-start">
              <Text
                as="p"
                fontSize="1em"
                fontWeight="bold"
                lineHeight={1.5}
                color="var(--colors-accent-text)"
              >
                {title}
              </Text>
              <Text as="p" fontSize="0.9em" lineHeight={1.5}>
                {description}
              </Text>
            </VStack>
          )}
        </For>
      </VStack>
      <HStack
        gap={1}
        alignItems="center"
        paddingBottom={2}
        alignSelf="flex-end"
        fontSize="0.7em"
      >
        <For each={keyTechnology}>
          {(tech) => (
            <Text
              as="span"
              paddingX={2}
              paddingY={0.5}
              borderRadius="30px"
              backgroundColor="var(--colors-accent-3)"
              color="var(--colors-accent-10)"
            >
              {tech}
            </Text>
          )}
        </For>
      </HStack>
      {useDivider && (
        <Divider
          orientation="horizontal"
          color="var(--colors-accent-8)"
          marginBottom={4}
        />
      )}
    </VStack>
  );
};
