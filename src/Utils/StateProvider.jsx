import { create } from 'zustand'
import {getOptions, getPluginList} from "./Data";
import {Avatar} from "antd";
export default create((set) => ({
    generalData:{
        module: false,
        showDrawer : false,
        drawerLoading: true
    },
    options: {
        isLoading: false,
        modules: [],
    },
    pluginList: [],
    modulesList: [
        {
            name: 'Module One',
            id: 'module_one',
            icon: <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />,
            description: 'Description 1'
        },
        {
            name: 'Module Two',
            id: 'module_two',
            icon: <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />,
        }
    ],
    updateGeneralData: async ( data ) => {
        set((state) => ({  generalData: { ...state.generalData, ...data } }));
    },
    fetchOptions: async (pond) => {
        const getTheOptions = await getOptions();
        const preparedOptionsData =  JSON.parse( getTheOptions.data );
        set((state) => ({  options: { ...state.options, preparedOptionsData } }));
    },
    fetchPluginList: async (pond) => {
         const pluginList = await getPluginList();
        const preparedPluginListData =  await JSON.parse( pluginList.data );
        set({  pluginList: preparedPluginListData });
    }
}))