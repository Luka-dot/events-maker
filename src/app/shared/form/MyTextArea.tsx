import { useField } from 'formik';
import React from 'react';
import { FormField, Label } from 'semantic-ui-react';

interface MyTextProps {
    label: String;
    props: any
}

export default function MyTextArea(props: any) {
    const [field, meta] = useField(props);

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <textarea {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null }
        </FormField>
    )
};