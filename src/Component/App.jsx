import React, { useEffect } from "react";
import { Layout } from 'antd';
import useStore from '../Utils/StateProvider';

import {
    getOptions,
    updateOptins
} from "../Utils/Data";

import {HashRouter, Navigate, Route, Routes} from "react-router-dom";

import DigitalItems from "./DigitalItems";
import NeedSupport from "./NeedSupport";
import SettingsDrawer from "./SettingsDrawer";
import PluginList from "./PluginList";

function App() {
    const {
        options,
        pluginList,
        saveType,
        dispatch
    } = useStore();

    return (
        <Layout className="tttme-App" style={{
            padding: '10px',
            background: '#fff',
            borderRadius: '5px',
            boxShadow: '0 4px 40px rgb(0 0 0 / 5%)',
            height: 'calc( 100vh - 110px )',
        }}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<DigitalItems/>}/>
                    <Route path="/plugins" element={<PluginList/>}/>
                    <Route path="/support" element={<NeedSupport/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </HashRouter>
            <SettingsDrawer/>
        </Layout>
    );
}

export default App