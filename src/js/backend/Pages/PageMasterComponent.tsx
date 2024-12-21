import React, { useEffect, useState, ReactNode } from 'react';
import MainHeader from '@/backend/Pages/MainHeader';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import AnimateSpain from '@/backend/CustomizeComponent/AnimateSpain';
import useStore from '@/backend/Utils/StateProvider';

interface PageMasterComponentProps {
    children: ReactNode; // Define children prop type
}

const PageMasterComponent: React.FC<PageMasterComponentProps> = ({ children }) => {
    const { setOptions, options, getTheOptions, saveSettings } = useStore();
    const [isSaveButtonLoading, setButtonLoading] = useState<boolean>(false); // State for save button loading
    const [isAddNewButtonLoading, setAddNewButtonLoading] = useState<boolean>(false); // State for add new button loading

    useEffect(() => {
        getTheOptions();
    }, [isSaveButtonLoading]);

    return (
        <>
            <MainHeader />
            <ScrollArea className="bg-white h-lvh scroll-smooth p-6">
                <div className="scroll-childran">{children}</div>
            </ScrollArea>
            <div className="sticky bottom-0 z-10 ">
                <div className="bg-white py-2 pl-6 pr-6 border-t flex justify-between items-center ">
                    <Button
                        variant="outline"
                        onClick={async () => {
                            setButtonLoading(true);
                            await saveSettings();
                            setTimeout(() => setButtonLoading(false), 200);
                        }}
                        className="text-white hover:text-white h-12 w-48 px-3 py-3 bg-sky-500 border-sky-500"
                    >
                        {isSaveButtonLoading ? (
                            <AnimateSpain />
                        ) : (
                            'Save All Changes'
                        )}
                    </Button>
                </div>
            </div>
        </>
    );
}

export default PageMasterComponent;