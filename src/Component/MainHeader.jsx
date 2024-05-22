import React from "react";

import {Link, useLocation} from "react-router-dom";

import { Menu, Layout } from 'antd';

import { SettingOutlined, ContactsOutlined } from '@ant-design/icons';

import useStore from "../Utils/StateProvider";

import * as Types from "../Utils/actionType";

const { Header } = Layout;


function MainHeader() {

    let { pathname } = useLocation();

    const {
        options,
        generalData,
        saveType,
        dispatch
    } = useStore();

    const menuItemStyle = {
        borderRadius: 0,
        paddingInline: '10px',
    }
    console.log( pathname )
    return (

        <Header className="header" style={{
            paddingInline: 0,
        }}>
            <div className="logo" style={{
                height: '40px',
                margin: '10px',
                background: 'rgba(255, 255, 255, 0.2)'
            }}/>
            <Menu
                style={{
                    borderRadius: '0px',
                }}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[ pathname ]}
                items={[
                    {
                        key: '/',
                        label: <Link to={`/`}> Modules </Link>,
                        icon: <SettingOutlined />,
                        style: menuItemStyle
                    },
                    {
                        key: '/usefulPlugins',
                        label: <Link to={`/usefulPlugins`}> Useful Plugins </Link>,
                        icon: <ContactsOutlined />,
                        style: menuItemStyle,
                    },
                    {
                        key: '/support',
                        label: <Link to={`/support`}> Support </Link>,
                        icon: <ContactsOutlined />,
                        style: menuItemStyle,
                    }
                ]}
            />
        </Header>
    );
}

export default MainHeader;