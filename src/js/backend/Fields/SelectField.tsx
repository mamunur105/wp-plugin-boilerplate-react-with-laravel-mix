import React from 'react';
import FieldWrapper from '@/backend/CustomizeComponent/FieldWrapper';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// Props interface for the SelectField component
interface SelectFieldProps {
    label?: string; // Optional label for the select field
    desc?: string; // Optional description for the select field
    type?: string; // Optional additional class or type for FieldWrapper
    options: Record<string, string>; // Object containing options as key-value pairs
    defaultValue?: string; // Default placeholder or preselected value
    onChange?: (value: string) => void; // Callback triggered when a value is selected
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
    const { label, desc, type, options, defaultValue, onChange } = props;

    return (
        <FieldWrapper label={label} desc={desc} type={type}>
            <Select
                defaultValue={defaultValue}
                onValueChange={(value) => {
                    if (onChange) onChange(value); // Trigger the onChange callback if provided
                }}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={defaultValue} />
                </SelectTrigger>
                <SelectContent className="z-99 bg-slate-50">
                    {Object.keys(options).map((value) => (
                        <SelectItem key={value} value={value}>
                            {options[value]}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </FieldWrapper>
    );
};

export default SelectField;