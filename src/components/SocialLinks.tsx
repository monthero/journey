import FileUser from 'lucide-solid/icons/file-user';
import Github from 'lucide-solid/icons/github';
import Linkedin from 'lucide-solid/icons/linkedin';
import type { Component } from 'solid-js';
import { HStack, type HstackProps } from 'styled-system/jsx/hstack';
import { Link } from './ui/link';
import { Tooltip } from './ui/tooltip';

export const SocialLinks: Component<HstackProps> = ({ ...props }) => {
  return (
    <HStack {...props}>
      <Link href="/cv_vasco_monteiro.pdf" download="cv_vasco_monteiro.pdf">
        <Tooltip title="Download CV PDF">
          <FileUser />
        </Tooltip>
      </Link>
      <Link href="https://www.linkedin.com/in/vsmonteiro/" target="_blank">
        <Tooltip title="Visit linkedin page">
          <Linkedin />
        </Tooltip>
      </Link>
      <Link href="https://github.com/monthero" target="_blank">
        <Tooltip title="Visit github profile">
          <Github />
        </Tooltip>
      </Link>
    </HStack>
  );
};
