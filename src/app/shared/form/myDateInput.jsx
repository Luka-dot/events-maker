import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormField, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import { parseISO, format } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

export default function MyDateInput(props) {
    const {setFieldValue} = useFormikContext();
    const [field, meta] = useField(props);

    // const handleDateSelect = () => {
    //     let pickedDate = (field.value && Date(field.value)) || null
    // }

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <DatePicker 
                {...field}
                {...props}
                selected={(field.value && parseISO(Date(field.value))) || null}
                onChange= {value => setFieldValue(field.name, value)}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null }
        </FormField>
    )
};