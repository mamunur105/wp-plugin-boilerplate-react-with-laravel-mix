import React from "react";
import { Menu, Layout } from 'antd';
import { SettingOutlined, ContactsOutlined, LikeOutlined } from '@ant-design/icons';
import {Link, useLocation} from "react-router-dom";
import useStore from "../Utils/StateProvider";
const { Header } = Layout;

function MainHeader() {

    const {
        options,
        generalData,
        saveType,
        dispatch
    } = useStore();

    let { pathname } = useLocation();

    const menuItemStyle = {
        borderRadius: 0,
        paddingInline: '25px',
        display: 'inline-flex',
        alignItems: 'center',
        fontSize:'15px'
    }

    const iconStyle = {
        fontSize: '18px',
    }

    return (

        <Header className="header" style={{
            paddingInline: 0,
        }}>
            <Menu
                style={{
                    borderRadius: '0px',
                    height: '100%',
                    display: 'flex',
                    flex: 1,
                }}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[ pathname ]}
                items={[
                    {
                        key: '/',
                        label: <Link to={`/`}> Digital Items </Link>,
                        icon: <SettingOutlined style={iconStyle} />,
                        style: menuItemStyle
                    },
                    {
                        key: '/plugins',
                        label: <Link to={`/plugins`}> Useful Plugins</Link>,
                        icon: <LikeOutlined style={iconStyle}/>,
                        style: menuItemStyle,
                    },
                    {
                        key: '/support',
                        label: <Link to={`/support`}> Contacts Support</Link>,
                        icon: <ContactsOutlined style={iconStyle} />,
                        style: menuItemStyle,
                    },

                ]}
            />
        </Header>
    );
}

export default MainHeader;