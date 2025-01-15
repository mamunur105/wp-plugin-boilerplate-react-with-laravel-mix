import React from 'react';
import PageMasterComponent from "@/backend/Pages/PageMasterComponent";
import InputField from "@/backend/Fields/InputField";
import SelectField from "@/backend/Fields/SelectField";
import SwitchField from "@/backend/Fields/SwitchField";
import TextareaField from "@/backend/Fields/TextareaField";
const Settings: React.FC = () => {
    
	return (
        <PageMasterComponent>
            <InputField
                wrapperClass="wrapper-class"
                name="inputname"
                placeholder="Enter your name"
                value="John Doe"
                onChange={(e) => console.log(e.target.value)}
            />
            <SelectField
                label="Choose an option"
                desc="Select an option from the dropdown"
                options={ {
                    option1: 'Option 1',
                    option2: 'Option 2',
                    option3: 'Option 3',
                }}
                defaultValue="Select an option"
            />
            <SwitchField/>
            <TextareaField/>
        </PageMasterComponent>
    )
};

export default Settings;
