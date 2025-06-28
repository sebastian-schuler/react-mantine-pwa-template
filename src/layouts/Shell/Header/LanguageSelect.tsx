import { Combobox, Input, InputBase, useCombobox } from '@mantine/core';
import { APP_LANGUAGES } from '@/providers/i18n/config';
import { useLanguage } from '@/providers/i18n/use-language';

const LanguageSelect = () => {
    const { changeLanguage, language } = useLanguage();

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = APP_LANGUAGES.map((item) => (
        <Combobox.Option value={item.key} key={item.key}>
            {item.label}
        </Combobox.Option>
    ));

    const activeLabel = APP_LANGUAGES.find((l) => l.key === language)?.label;

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={(val) => {
                changeLanguage(val);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    component='button'
                    type='button'
                    pointer
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents='none'
                    onClick={() => combobox.toggleDropdown()}
                >
                    {activeLabel || <Input.Placeholder>Pick value</Input.Placeholder>}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default LanguageSelect;
