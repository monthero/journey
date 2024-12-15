import type { JSX, ParentComponent } from 'solid-js';
import * as ArkTooltip from './styled/tooltip';

export const Tooltip: ParentComponent<
  {
    title: JSX.Element | string;
    children: JSX.Element;
  } & ArkTooltip.RootProps
> = ({ title, children, ...restProps }) => {
  return (
    <ArkTooltip.Root {...restProps} unmountOnExit>
      <ArkTooltip.Trigger>{children}</ArkTooltip.Trigger>
      <ArkTooltip.Positioner>
        <ArkTooltip.Content>
          <ArkTooltip.Arrow
            style={{
              '--arrow-size': '8px',
              '--arrow-background': 'black',
            }}
          >
            <ArkTooltip.ArrowTip />
          </ArkTooltip.Arrow>
          {title}
        </ArkTooltip.Content>
      </ArkTooltip.Positioner>
    </ArkTooltip.Root>
  );
};
