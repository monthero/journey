import { IconCheck, IconChevronDown } from '@tabler/icons-solidjs';
import { type Component, Index, type JSX } from 'solid-js';
import * as ParkUISelect from './styled/select';

export type SelectProps = ParkUISelect.RootProps;

export const Select: Component<
  ParkUISelect.RootProps & {
    label: JSX.Element;
    placeholder?: string;
  }
> = ({ label, collection, placeholder = 'Select an option...', ...restProps }) => {
  return (
    <ParkUISelect.Root
      positioning={{ sameWidth: true }}
      width="2xs"
      {...restProps}
      collection={collection}
    >
      <ParkUISelect.Label>{label}</ParkUISelect.Label>
      <ParkUISelect.Control>
        <ParkUISelect.Trigger>
          <ParkUISelect.ValueText placeholder={placeholder} />
          <IconChevronDown />
        </ParkUISelect.Trigger>
      </ParkUISelect.Control>
      <ParkUISelect.Positioner>
        <ParkUISelect.Content>
          <Index each={collection.items}>
            {(item) => (
              <ParkUISelect.Item item={item()} title={item().title}>
                <ParkUISelect.ItemText>{item().label}</ParkUISelect.ItemText>
                <ParkUISelect.ItemIndicator>
                  <IconCheck size={10} />
                </ParkUISelect.ItemIndicator>
              </ParkUISelect.Item>
            )}
          </Index>
        </ParkUISelect.Content>
      </ParkUISelect.Positioner>
    </ParkUISelect.Root>
  );
};
