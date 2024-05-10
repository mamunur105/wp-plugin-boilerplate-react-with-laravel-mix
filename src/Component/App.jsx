import React, { useEffect } from "react";
import { Layout } from 'antd';
import useStore from '../Utils/StateProvider';
import * as Types from "../Utils/actionType";

import {
    getOptions,
    updateOptins
} from "../Utils/Data";

const { Sider } = Layout;

import Settings from "./Settings";
import NeedSupport from "./NeedSupport";
import MainHeader from "./MainHeader";

function App() {
    const {
        options,
        generalData,
        saveType,
        dispatch
    } = useStore(state => state);

    const getTheOptins = async () => {
        const response = await getOptions();
        const preparedData =  await JSON.parse( response.data );
        await dispatch({
            type: Types.UPDATE_OPTIONS,
            options: {
                ...preparedData,
                isLoading: false,
            }
        });
        console.log( 'getOptions' );
    }

    const handleUpdateOption = async () => {
       const response = await updateOptins( options );
       if( 200 === parseInt( response.status ) ){
           await getTheOptins();
       }
       console.log( 'handleUpdateOption' );
    }

    const handleSave = () => {
        switch ( saveType ) {
            case Types.UPDATE_OPTIONS:
                    handleUpdateOption();
                break;
            default:
        }
    }

    useEffect(() => {
        handleSave();
    }, [ saveType ] );

    useEffect(() => {
        getTheOptins();
    }, [] );

    return (
        <Layout className="tttme-App" style={{
            padding: '10px',
            background: '#fff',
            borderRadius: '5px',
            boxShadow: '0 4px 40px rgb(0 0 0 / 5%)',
            height: 'calc( 100vh - 110px )',
        }}>
            <Sider style={{ borderRadius: '5px' }}>
                <MainHeader/>
            </Sider>
            <Layout className="layout" style={{ padding: '10px', overflowY: 'auto' }} >
                { 'settings' === generalData.selectedMenu && <Settings/>  }
                { 'needsupport' === generalData.selectedMenu && <NeedSupport/> }
            </Layout>
        </Layout>
    );
}

export default App