import { ColorSwatch, Combobox, Group, Input, InputBase, Text, useCombobox } from '@mantine/core';
import { useThemePrimaryColor } from '@/providers/state';

const PrimaryColorSelect = () => {
    const { themePrimaryColor, setThemePrimaryColor, availableColors } = useThemePrimaryColor();

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = availableColors.map((item) => (
        <Combobox.Option value={item} key={item}>
            <Group>
                <ColorSwatch size={18} color={`var(--mantine-color-${item}-5)`} />
                <Text tt={'capitalize'}>{item}</Text>
            </Group>
        </Combobox.Option>
    ));

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={(val) => {
                setThemePrimaryColor(val);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    label='Select Theme Primary Color'
                    component='button'
                    type='button'
                    pointer
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents='none'
                    onClick={() => combobox.toggleDropdown()}
                >
                    {themePrimaryColor ? (
                        <Group>
                            <ColorSwatch size={18} color={`var(--mantine-color-${themePrimaryColor}-5)`} />
                            <Text tt={'capitalize'}>{themePrimaryColor}</Text>
                        </Group>
                    ) : (
                        <Input.Placeholder>Pick a color</Input.Placeholder>
                    )}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
                    {options}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default PrimaryColorSelect;
