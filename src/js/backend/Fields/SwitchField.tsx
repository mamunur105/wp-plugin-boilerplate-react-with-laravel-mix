import React from "react";
import { Switch } from "@/components/ui/switch";
import FieldWrapper from "@/backend/CustomizeComponent/FieldWrapper";

// Props interface for the SwitchField component
interface SwitchFieldProps {
    label?: string; // Optional label for the switch
    desc?: string; // Optional description for the switch
    type?: string; // Optional additional class or type for FieldWrapper
    checked?: boolean; // State of the switch (on/off)
    onChange?: (checked: boolean) => void; // Callback triggered when the switch state changes
}

const SwitchField: React.FC<SwitchFieldProps> = (props) => {
    const { label, desc, type, checked, onChange } = props;

    return (
        <FieldWrapper label={label} desc={desc} type={type}>
            <Switch
                checked={checked}
                onCheckedChange={(value) => {
                    if (onChange) onChange(value);
                }}
            />
        </FieldWrapper>
    );
};

export default SwitchField;