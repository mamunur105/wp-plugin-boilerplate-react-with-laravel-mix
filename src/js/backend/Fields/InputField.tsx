import React from 'react';
import { Input } from '@/components/ui/input';
import FieldWrapper from '@/backend/CustomizeComponent/FieldWrapper';

interface InputFieldProps {
    wrapperClass?: string;
    label?: string; // Optional label for the field
    desc?: string; // Optional description for the field
    type?: string; // Type of the input (e.g., text, password)
    placeholder?: string; // Placeholder text for the input field
    value?: string; // Current value of the input field
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for changes
    name?: string; // Name of the input field
    className?: string; // Optional CSS class for customization
}

const InputField: React.FC<InputFieldProps> = (props) => { // Pass the props interface here
    return (
        <FieldWrapper wrapperClass={props.wrapperClass}>
            <Input
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                type="text"
                className={props.className}
            />
        </FieldWrapper>
    );
};

export default InputField;