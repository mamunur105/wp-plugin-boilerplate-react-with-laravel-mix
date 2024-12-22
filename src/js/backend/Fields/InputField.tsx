import React from 'react';
import { Input } from '@/components/ui/input';
import FieldWrapper from '@/backend/CustomizeComponent/FieldWrapper';

interface InputFieldProps {
    label?: string; // Optional label for the field
    desc?: string; // Optional description for the field
    type?: string; // Optional additional type or class information
    placeholder?: string; // Placeholder text for the input field
    value?: string; // Current value of the input field
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for changes
    name?: string; // Name of the input field
    className?: string; // Optional CSS class for customization
}

const InputField: React.FC = (props:InputFieldProps) => {
    return (
        <FieldWrapper {...props}>
            <Input {...props} />
        </FieldWrapper>
    );
};

export default InputField;