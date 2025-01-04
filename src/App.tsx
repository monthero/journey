import { useLocation, useNavigate } from '@solidjs/router';
import type { LucideProps } from 'lucide-solid';
import Code from 'lucide-solid/icons/code';
import GraduationCap from 'lucide-solid/icons/graduation-cap';
import UserRound from 'lucide-solid/icons/user-round';
import type { Component, ParentComponent } from 'solid-js';
import { Index, createEffect, createSignal } from 'solid-js';
import { css } from 'styled-system/css';
import { hstack } from 'styled-system/patterns/hstack';
import { SegmentGroup } from '~/components/ui/segment-group';
import { SocialLinks } from './components/SocialLinks';

export const App: ParentComponent = (props) => (
  <>
    <Header />
    {props.children}
  </>
);

const Header: Component = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSegment, setActiveSegment] = createSignal(location.pathname);

  createEffect(() => setActiveSegment(location.pathname));

  return (
    <header
      class={hstack({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--colors-bg-default)',
        position: 'relative',
      })}
    >
      <SegmentGroup.Root
        orientation="horizontal"
        value={activeSegment()}
        alignItems="center"
        justifyContent="center"
        borderColor="var(--colors-border-default)"
        marginX="auto"
        gap={10}
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
                {navItem().label}
              </SegmentGroup.ItemText>
              <SegmentGroup.ItemControl />
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          )}
        </Index>
      </SegmentGroup.Root>
      <SocialLinks
        class={css({
          position: 'absolute',
          right: 5,
          '& a.link': {
            '& svg': {
              width: '20px',
              height: '20px',
              fill: 'var(--colors-accent-7)',
            },

            '&:hover svg': {
              fill: 'var(--colors-accent-10)',
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
    label: 'About me',
    getIcon: (iconProps: LucideProps) => <UserRound {...iconProps} />,
  },
  {
    to: '/professional',
    label: 'Professional',
    getIcon: (iconProps: LucideProps) => <Code {...iconProps} />,
  },
  {
    to: '/academic',
    label: 'Academic',
    getIcon: (iconProps: LucideProps) => <GraduationCap {...iconProps} />,
  },
] as const;
