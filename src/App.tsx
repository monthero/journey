import { createListCollection } from '@ark-ui/solid/collection';
import { useLocation, useNavigate } from '@solidjs/router';
import { IconCode, type IconProps, IconSchool, IconUser } from '@tabler/icons-solidjs';
import type { Component, ParentComponent } from 'solid-js';
import { Index, createEffect, createSignal } from 'solid-js';
import { css } from 'styled-system/css';
import { hstack } from 'styled-system/patterns/hstack';
import { SegmentGroup } from '~/components/ui/segment-group';
import { SocialLinks } from './components/SocialLinks';
import { Select, type SelectProps } from './components/ui/select';
import {
  type Locale,
  type LocaleOption,
  LocaleProvider,
  localeOptions,
  useLocale,
} from './locales';

export const App: ParentComponent = (props) => {
  return (
    <LocaleProvider initialLocale="en">
      <Header />
      {props.children}
    </LocaleProvider>
  );
};

const Header: Component = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSegment, setActiveSegment] = createSignal(location.pathname);
  const { t } = useLocale();
  createEffect(() => setActiveSegment(location.pathname));

  return (
    <header
      class={hstack({
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'var(--colors-bg-default)',
        position: 'relative',
        paddingX: 5,
        borderBottom: '1px solid var(--colors-border-default)',
      })}
    >
      <LanguageSelector />
      <SegmentGroup.Root
        orientation="horizontal"
        value={activeSegment()}
        alignItems="center"
        justifyContent="center"
        borderBottom="none"
        marginX="auto"
        gap={0}
        width="100%"
      >
        <SegmentGroup.Indicator />
        <Index each={navItems}>
          {(navItem) => (
            <SegmentGroup.Item
              value={navItem().to}
              onClick={() => navigate(navItem().to)}
            >
              <SegmentGroup.ItemText
                color={`var(--colors-grey-${navItem().to === activeSegment() ? '8' : '1'})`}
                class={hstack({
                  alignItems: 'center',
                  gap: 3,
                  flexWrap: 'nowrap',
                  paddingX: 5,
                  paddingTop: 4,
                })}
              >
                {navItem().getIcon({
                  size: 18,
                  strokeWidth: 2,
                  color:
                    navItem().to === activeSegment()
                      ? 'var(--colors-accent-10)'
                      : 'grey',
                })}
                {t(navItem().labelKey) as string}
              </SegmentGroup.ItemText>
              <SegmentGroup.ItemControl />
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          )}
        </Index>
      </SegmentGroup.Root>
      <SocialLinks
        class={css({
          '& a.link': {
            '& svg': {
              cursor: 'pointer',
              width: '20px',
              height: '20px',
              stroke: 'var(--colors-accent-8)',
            },

            '&:hover svg': {
              stroke: 'var(--colors-accent-10)',
            },
          },
        })}
        gap={5}
      />
    </header>
  );
};

const navItems = [
  {
    to: '/about',
    labelKey: 'header.nav.aboutMe',
    getIcon: (iconProps: IconProps) => <IconUser {...iconProps} />,
  },
  {
    to: '/professional',
    labelKey: 'header.nav.workExperience',
    getIcon: (iconProps: IconProps) => <IconCode {...iconProps} />,
  },
  {
    to: '/academic',
    labelKey: 'header.nav.studies',
    getIcon: (iconProps: IconProps) => <IconSchool {...iconProps} />,
  },
] as const;

const LanguageSelector: Component<Omit<SelectProps, 'collection'>> = (props) => {
  const { locale, setLocale } = useLocale();
  const collection = createListCollection<LocaleOption>({
    items: localeOptions,
    itemToString: (item) => item.value.toUpperCase(),
    isItemDisabled: (item) => item.disabled ?? false,
  });

  return (
    <Select
      label={undefined}
      immediate
      collection={collection}
      onValueChange={(e) => setLocale((e.value as Locale[])[0])}
      value={[locale()]}
      variant="ghost"
      {...props}
    />
  );
};
