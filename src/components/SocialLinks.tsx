import { IconBrandGithub, IconBrandLinkedin, IconFileCv } from '@tabler/icons-solidjs';
import type { Component } from 'solid-js';
import { HStack, type HstackProps } from 'styled-system/jsx/hstack';
import { Link } from './ui/link';
import { Tooltip } from './ui/tooltip';

export const SocialLinks: Component<HstackProps> = ({ ...props }) => {
  return (
    <HStack {...props}>
      <Link href="/cv_vasco_monteiro.pdf" download="cv_vasco_monteiro.pdf">
        <Tooltip title="Download CV PDF">
          <IconFileCv />
        </Tooltip>
      </Link>
      <Link href="https://www.linkedin.com/in/vsmonteiro/" target="_blank">
        <Tooltip title="Visit linkedin page">
          <IconBrandLinkedin />
        </Tooltip>
      </Link>
      <Link href="https://github.com/monthero" target="_blank">
        <Tooltip title="Visit github profile">
          <IconBrandGithub />
        </Tooltip>
      </Link>
    </HStack>
  );
};
