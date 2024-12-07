import React, { useState, useEffect, useRef } from "react";
import useStore, { uid } from "@/js/backend/Utils/StateProvider";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { ItemForwardRef } from "@/components/CustomizeComponent/ItemForwardRef";
import InputField from "@/components/Fields/InputField";
import { Button } from "@/components/ui/button";
import SwitchField from "@/components/Fields/SwitchField";
import { Trash2, Grip } from "lucide-react";

/**
 * SortableItem: A child component that handles individual item sorting logic.
 */
const SortableItem = ({ item, scrollToID, newItemRef, onChangeField, deleteOpt }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: item.id,
    });

    return (
        <ItemForwardRef ref={item.id === scrollToID ? newItemRef : null} id={item.id}>
            <div
                className="flex items-center py-2 px-4 field-option-wrapper"
                ref={setNodeRef}
                style={{
                    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
                    transition,
                }}
            >

                <Grip
                    {...attributes}
                    {...listeners}
                    className=" mr-2 h-4 w-4 text-rose-600 shrink-0 transition-transform duration-200"/>

                <InputField
                    label="Label"
                    defaultValue={item.label || ""}
                    onChange={(e) => onChangeField(item.id, "label", e.target.value)}
                />
                <InputField
                    label="Value"
                    defaultValue={item.value || ""}
                    onChange={(e) => onChangeField(item.id, "value", e.target.value)}
                />
                <InputField
                    label="Price"
                    defaultValue={item.price || ""}
                    onChange={(e) => onChangeField(item.id, "price", e.target.value)}
                />
                <SwitchField
                    label="Set As Default"
                    type="switch"
                    checked={item.isDefault}
                    onCheckedChange={(value) => onChangeField(item.id, "isDefault", value)}
                />

                <Trash2
                    className=" ml-2 cursor-pointer text-red-600 hover:text-red-800"
                    onClick={() => deleteOpt(item.id)}
                />

            </div>
        </ItemForwardRef>
    );
};

function FieldOptions(props) {
    const {setOptions, updateFields, addNewField, options, scrollToID} = useStore();
    const {opt, fieldId} = props;

    const [sortableOptions, setSortableOptions] = useState(opt);
    const newItemRef = useRef(null);

    useEffect(() => {
        if (scrollToID && newItemRef.current) {
            newItemRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scrollToID]);

    useEffect(() => {
        if (opt.length > 0) {
            setSortableOptions(opt);
        }
    }, [opt]);

    const onChangeField = (optId, key, val) => {
        const updatedOptions = sortableOptions.map((option) => {
            if (option.id === optId) {
                return { ...option, [key]: val };
            }
            return option;
        });
        setSortableOptions(updatedOptions);
    };

    const addNewOption = () => {
        const newOptionId = uid();
        const updatedOptions = [
            ...sortableOptions,
            {
                id: newOptionId,
                label: "Label",
                value: "Value",
                price: "",
                isDefault: false,
            },
        ];
        setSortableOptions(updatedOptions);
    };

    const deleteOpt = (optId) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete?");
        if (confirmDeletion) {
            const updatedOptions = sortableOptions.filter((option) => option.id !== optId);
            setSortableOptions(updatedOptions);
        }
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = sortableOptions.findIndex((item) => item.id === active.id);
            const newIndex = sortableOptions.findIndex((item) => item.id === over.id);
            const reorderedOptions = arrayMove(sortableOptions, oldIndex, newIndex);
            setSortableOptions(reorderedOptions);
        }
    };

    return (
        <>
            <h4 className="border border-l-4 p-2.5 border-l-sky-500 font-bold text-xl mb-4 mt-8">Options</h4>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={sortableOptions} strategy={verticalListSortingStrategy}>
                    {sortableOptions.map((item) => (
                        <SortableItem
                            key={item.id}
                            item={item}
                            scrollToID={scrollToID}
                            newItemRef={newItemRef}
                            onChangeField={onChangeField}
                            deleteOpt={deleteOpt}
                        />
                    ))}
                </SortableContext>
            </DndContext>
            <div className="flex justify-start mt-4">
                <Button
                    variant="outline"
                    onClick={addNewOption}
                    className="text-white hover:text-white h-12 w-48 px-3 py-3 bg-sky-500 border-sky-500"
                >
                    Add Option
                </Button>
            </div>
        </>
    );
}

export default FieldOptions;