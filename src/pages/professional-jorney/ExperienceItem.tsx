import CalendarRangeIcon from 'lucide-solid/icons/calendar-range';
import MapPinHouseIcon from 'lucide-solid/icons/map-pin-house';
import { type Component, For } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';
import { Divider } from 'styled-system/jsx/divider';
import { HStack } from 'styled-system/jsx/hstack';
import { VStack } from 'styled-system/jsx/vstack';
import { Heading } from '~/components/ui/heading';
import { Text } from '~/components/ui/text';

export type ExperienceItemProps = {
  position: string;
  company: JSX.Element | string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: JSX.Element | string;
  keyTechnology: string[];
};

export const ExperienceItem: Component<
  ExperienceItemProps & { useDivider: boolean }
> = ({
  position,
  company,
  location,
  startDate,
  endDate,
  description,
  keyTechnology,
  useDivider,
}) => {
  return (
    <VStack gap={3} alignItems="flex-start">
      <HStack gap={2} alignItems="baseline">
        <Heading
          as="h3"
          fontSize="1.6em"
          color="var(--colors-accent-text)"
          lineHeight="1"
        >
          {position}
        </Heading>
        <Text as="p" fontSize="0.9em" lineHeight="0.9" color="var(--colors-sage-10)">
          {company === 'Freelancer' ? 'as' : 'at'}
        </Text>
        <Text as="p" fontSize="1.1em" lineHeight="1">
          {company}
        </Text>
      </HStack>
      <HStack alignItems="center">
        {location && (
          <>
            <MapPinHouseIcon size={14} />
            <Text as="p" fontSize="0.8em" lineHeight="1" color="var(--colors-accent-8)">
              {location}
            </Text>
          </>
        )}
        <CalendarRangeIcon size={14} />
        <Text as="p" fontSize="0.7em" color="var(--colors-accent-8)">
          {startDate} → {endDate ?? 'Today'}
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
        {description}
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
