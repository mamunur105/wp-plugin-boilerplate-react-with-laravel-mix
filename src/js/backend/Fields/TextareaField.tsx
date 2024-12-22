import React from "react";
import FieldWrapper from "@/backend/CustomizeComponent/FieldWrapper";
import { Textarea } from "@/components/ui/textarea";

// Props interface for the TextareaField component
interface TextareaFieldProps {
    label?: string; // Optional label for the textarea
    desc?: string; // Optional description for the textarea
    type?: string; // Optional additional class or type for FieldWrapper
    value?: string; // The value of the textarea
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Callback triggered on value change
    placeholder?: string; // Placeholder text for the textarea
    rows?: number; // Number of rows in the textarea
    disabled?: boolean; // Whether the textarea is disabled
    className?: string; // Additional classes for the textarea
}

const TextareaField: React.FC<TextareaFieldProps> = (props) => {
    const {
        label,
        desc,
        type,
        value,
        onChange,
        placeholder,
        rows = 4,
        disabled = false,
        className = "",
    } = props;

    return (
        <FieldWrapper label={label} desc={desc} type={type}>
            <Textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                className={`border-slate-200 ${className}`}
            />
        </FieldWrapper>
    );
};

export default TextareaField;