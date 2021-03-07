import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormField, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import { parseISO, format } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

export default function MyDateInput(props) {
    const {setFieldValue} = useFormikContext();
    const [field, meta] = useField(props);

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <DatePicker 
            {...field}
            {...props}
            onChange={(value) => setFieldValue(field.name, value)}
            selected={(field.value && new Date(field.value)) || null}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null }
        </FormField>
    )
};