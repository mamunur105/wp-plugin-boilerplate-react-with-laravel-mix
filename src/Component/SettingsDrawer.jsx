import React, { useEffect, useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import useStore from "../Utils/StateProvider";

const SettingsDrawer = () => {

    const {
        options,
        generalData,
        modulesList,
        updateGeneralData
    } = useStore();


    const { modules } = options;

    const onClose = () => {
        updateGeneralData({
            ...generalData,
            showDrawer : false,
            drawerLoading: true
        });
    };

    const afterOpenChange = ( visible ) => {
        setTimeout(() => {
            updateGeneralData({
                ...generalData,
                drawerLoading: ! visible
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
                width={900}
                zIndex={99999}
                title="Basic Drawer"
                placement="right"
                closable={true}
                onClose={onClose}
                open={generalData?.showDrawer}
                loading={generalData?.drawerLoading}
                afterOpenChange={afterOpenChange}
                className='mfwoo-drawer-wrapper'

            >
                Lorem Text
            </Drawer>
        </>
    );
};

export default SettingsDrawer;