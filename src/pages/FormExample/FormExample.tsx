import { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import {
    ActionIcon,
    Anchor,
    Box,
    Button,
    Code,
    Fieldset,
    Group,
    Space,
    Stack,
    Switch,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { Helmet } from '@dr.pogodin/react-helmet';
import { zod4Resolver } from 'mantine-form-zod-resolver';
import { z } from 'zod/v4';
import Breadcrumbs from '@/components/Breadcrumbs';

const schema = z.strictObject({
    adminName: z.string().min(2).max(60),
    adminEmail: z.email(),
    employees: z.array(
        z.strictObject({
            name: z.string().min(2).max(60),
            active: z.boolean(),
            key: z.string(),
        }),
    ),
});

function FormExample() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            adminName: '',
            adminEmail: '',
            employees: [{ name: '', active: false, key: randomId() }],
        },
        validate: zod4Resolver(schema),
        validateInputOnChange: true,
    });

    const [formattedData, setFormattedData] = useState(JSON.stringify(form.getInitialValues(), undefined, 4));

    const fields = form.getValues().employees.map((item, index) => (
        <Group key={item.key} mt='xs'>
            <TextInput
                placeholder='John Doe'
                withAsterisk
                style={{ flex: 1 }}
                key={form.key(`employees.${index}.name`)}
                {...form.getInputProps(`employees.${index}.name`)}
            />
            <Switch
                label='Active'
                key={form.key(`employees.${index}.active`)}
                {...form.getInputProps(`employees.${index}.active`, { type: 'checkbox' })}
            />
            <ActionIcon
                color='red'
                onClick={() => form.removeListItem('employees', index)}
                aria-label='Delete employee'
            >
                <FiTrash size={16} />
            </ActionIcon>
        </Group>
    ));

    return (
        <>
            <Helmet title='Form Example' />
            <Stack h={'100%'}>
                <Breadcrumbs />
                <Title>Form Example</Title>
                <Text>
                    This is an example uncontrolled form using Zod 4 for validation. Learn more about how to build
                    performant forms here:{' '}
                    <Anchor href='https://mantine.dev/form/package/' target='_blank'>
                        Mantine form
                    </Anchor>
                    .
                </Text>
                <Box maw={600} w={'50%'} miw={300} mx='auto'>
                    <Fieldset legend='Admin'>
                        <TextInput
                            label='Admin Name'
                            placeholder='admin'
                            key={form.key('adminName')}
                            {...form.getInputProps('adminName')}
                        />
                        <TextInput
                            mt='sm'
                            label='Admin Email'
                            placeholder='admin@email.com'
                            key={form.key('adminEmail')}
                            {...form.getInputProps('adminEmail')}
                        />
                    </Fieldset>
                    <Space h={'md'} />
                    <Fieldset legend='Employees'>
                        {fields.length > 0 ? (
                            <Group mb='xs'>
                                <Text fw={500} size='sm' style={{ flex: 1 }}>
                                    User Name
                                </Text>
                                <Text fw={500} size='sm' pr={90}>
                                    Status
                                </Text>
                            </Group>
                        ) : (
                            <Text c='dimmed' ta='center'>
                                No one here...
                            </Text>
                        )}

                        {fields}

                        <Group justify='center' mt='md'>
                            <Button
                                onClick={() =>
                                    form.insertListItem('employees', { name: '', active: false, key: randomId() })
                                }
                            >
                                Add employee
                            </Button>
                        </Group>
                    </Fieldset>
                </Box>

                <Group>
                    <Button
                        variant='outline'
                        onClick={() => setFormattedData(JSON.stringify(form.getValues(), undefined, 4))}
                    >
                        Update displayed form values
                    </Button>
                </Group>
                <Code block>{formattedData}</Code>
            </Stack>
        </>
    );
}

export default FormExample;
