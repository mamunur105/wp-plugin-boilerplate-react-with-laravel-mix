import React, { useEffect, useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import * as Types from "../Utils/actionType";
import useStore from "../Utils/StateProvider";
import {modulesList} from '../Utils/modules';

const SettingsDrawer = () => {

    const {
        options,
        generalData,
        dispatch
    } = useStore();

    const { modules } = options;

    const onClose = () => {
        dispatch({
            type: Types.GENERAL_DATA,
            generalData:{
                ...generalData,
                module: false,
                showDrawer : false,
                drawerLoading: true
            }
        });
    };

    const afterOpenChange = ( visible ) => {
        setTimeout(() => {
            dispatch({
                type: Types.GENERAL_DATA,
                generalData:{
                    ...generalData,
                    drawerLoading: ! visible
                }
            });
        }, 300);
    };

    const findById = (id) => {
        return modulesList.find(module => module.id === id);
    };

   const Module = generalData.module ? findById(generalData.module) : {};

    return (
        <>
            <Drawer
                width={720}
                zIndex={99999}
                title="Basic Drawer"
                placement="right"
                closable={true}
                onClose={onClose}
                open={generalData?.showDrawer}
                loading={generalData?.drawerLoading}
                afterOpenChange={afterOpenChange}
                className='mfwoo-drawer-wrapper'
                footer={
                    <Button
                        type="primary"
                        onClick={onClose}
                        style={{
                            height: '55px',
                            margin: '15px 0',
                            minWidth: '200px'
                        }}
                    >
                        Save Settings
                    </Button>
                }
            >
                { generalData.showDrawer ? <>
                    {
                        generalData?.module ? <Module.settings.type {...Module?.settings.props} /> : 'No Setting'
                    }
                </> : 'No Settings' }
            </Drawer>
        </>
    );
};

export default SettingsDrawer;