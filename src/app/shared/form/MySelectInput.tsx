import { useField } from 'formik';
import React from 'react';
import { FormField, Label, Select } from 'semantic-ui-react';

export default function MySelectInput(props: any) {
    const [field, meta, helpers] = useField(props);

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Select 
                clearable
                value={props.field}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                {...props}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null }
        </FormField>
    )
};