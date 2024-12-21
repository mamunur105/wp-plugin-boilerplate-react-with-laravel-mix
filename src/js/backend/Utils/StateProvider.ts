import { create } from 'zustand';
import { getOptions, updateOptions } from '@/backend/Utils/Data';

// Utility function for generating unique IDs
export const uid = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Type definitions
interface Notice {
    hasNotice: boolean;
    positionClass: string;
    title: string | null;
    desc: string | null;
}

interface StoreState {
    generalData: Record<string, any>;
    options: Record<string, any>;
    pluginList: any[]; // Adjust this type based on the structure of your plugin list
    notice: Notice;
    setNotice: (theNotice: Partial<Notice>) => void;
    setOptions: (theOption: Record<string, any>) => void;
    getTheOptions: () => Promise<void>;
    saveSettings: () => Promise<void>;
}

// Zustand store
export default create<StoreState>((set, get) => ({
    generalData: {},
    options: {},
    pluginList: [],
    notice: {
        hasNotice: false,
        positionClass: 'bottom-10',
        title: null,
        desc: null,
    },
    setNotice: (theNotice: Partial<Notice>) => {
        set((state) => ({ notice: { ...state.notice, ...theNotice } }));
    },
    setOptions: (theOption: Record<string, any>) => {
        set((state) => ({ options: { ...state.options, ...theOption }, scrollToID: null }));
    },
    getTheOptions: async () => {
        const theOption = await getOptions();
        set(() => ({ options: theOption }));
    },
    saveSettings: async () => {
        const state = get();
        await updateOptions({ ...state.options });
        const theOption = await getOptions();
        set(() => ({ options: theOption }));
        set((state) => ({
            notice: {
                ...state.notice,
                hasNotice: true,
                title: 'Data Saved Successfully',
            },
        }));
    },
}));