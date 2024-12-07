import React, { useState, useEffect, useRef } from "react";
import GroupAccordion from "@/components/CustomizeComponent/GroupAccordion";
import useStore from "@/js/backend/Utils/StateProvider";
import SwitchField from "@/components/Fields/SwitchField";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import {ItemForwardRef} from "@/components/CustomizeComponent/ItemForwardRef";
import InputField from "@/components/Fields/InputField";
import {Button} from "@/components/ui/button";
import FieldOptions from "@/js/backend/FieldOptions";

/**
 * SortableItem component to make each group draggable.
 * SettingsPage Component with DnD support.
 */
function GroupFields( props ) {
    const {
        setOptions,
        updateFields,
        addNewField,
        options,
        scrollToID
    } = useStore();

    const { id } = props;
    const allFields = options?.allFields || {}; // Will Object

    const fields = allFields[id] ? allFields[id] : [] ;// Will array of object
    //console.log( 'fields', fields);
    const [sortableFields, setSortableFields] = useState(fields);

    const newItemRef = useRef(null);
    useEffect(() => {
        if (scrollToID && newItemRef.current) {
            newItemRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [sortableFields, scrollToID]);

    useEffect(() => {
        if ( fields.length > 0 ){
            setSortableFields(fields);
        }
    }, [fields]);

    const onChangeField = async (fieldId, key, val) => {
        const fieldsData = sortableFields.map((field) => {
            if (field.id === fieldId) {
                return { ...field, [key]: val };
            }
            return field;
        });
        await setSortableFields(fieldsData);
    };

    const deleteField = async (groupId) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete?");
        if (confirmDeletion) {
            const fieldsData = sortableFields.filter((grp) => grp.id !== groupId);
            await setSortableFields(fieldsData);
        }
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = sortableFields.findIndex((item) => item.id === active.id);
            const newIndex = sortableFields.findIndex((item) => item.id === over.id);
            const newOrder = arrayMove(sortableFields, oldIndex, newIndex);
            setSortableFields(newOrder);
        }
    };

    useEffect(() => {
        updateFields( id, sortableFields );
    }, [sortableFields]);

    return (
        <>
            <h4 className='border border-l-4 p-4 border-l-sky-500 font-bold text-xl	mb-4 mt-8'>Fields</h4>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={sortableFields} strategy={verticalListSortingStrategy}>
                    {sortableFields.length > 0
                        ? sortableFields.map((item, index ) => {
                            const ref = item.id === scrollToID ? newItemRef : null;
                            return (
                                <ItemForwardRef key={item.id} id={item.id} ref={ref}>
                                    <GroupAccordion
                                        key={item.id}
                                        id={item.id}
                                        Accordion={{ ...item }}
                                        onDelete={() => deleteField(item.id)}
                                        isActive={item.enable_field}
                                        expandedItem={scrollToID}
                                        nested={'second'}
                                    >
                                        <SwitchField
                                            label="Enable Group"
                                            desc="Group Enable Or disable"
                                            checked={item.enable_field}
                                            onCheckedChange={(value) => onChangeField(item.id, "enable_field", value)}
                                        />
                                        <InputField
                                            label="Field Name"
                                            defaultValue={item.title}
                                            onChange={(e) => onChangeField(item.id, "title", e.target.value)}
                                        />
                                        <FieldOptions fieldId={item} opt={ item?.options || [] }/>
                                    </GroupAccordion>
                                </ItemForwardRef> ) }) : null}
                </SortableContext>
            </DndContext>
            <div className='flex justify-end mt-4'>
                <Button
                    variant="outline"
                    onClick={async () => {
                        await addNewField(id);
                    }}
                    className="text-white hover:text-white h-12 w-48 px-3 py-3 bg-sky-500 border-sky-500"
                >
                    Add Field
                </Button>
            </div>
        </>
    );
}

export default GroupFields;
