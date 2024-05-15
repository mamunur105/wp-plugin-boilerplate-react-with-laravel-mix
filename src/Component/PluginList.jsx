// Usable Plugin List: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[author]=tinysolution

import React from 'react';

import useStore from '../Utils/StateProvider';

import Loader from '../Utils/Loader';

import {
    Form,
    Input,
    Layout,
    Button,
    Divider,
    Checkbox,
    Typography
} from 'antd';

const { Content } = Layout;

const { Title, Paragraph  } = Typography;

function PluginList() {

    const {
        options,
        generalData,
        saveType,
        dispatch
    } = useStore();

    return (
        <Layout style={{ position: 'relative' }}>
            <Content style={{
                padding: '150px',
                background: 'rgb(255 255 255 / 35%)',
                borderRadius: '5px',
                boxShadow: 'rgb(0 0 0 / 1%) 0px 0 20px',
            }}>
               Use Full Plugin List APi : Usable Plugin List: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[author]=tinysolution
            </Content>
        </Layout>

    );
};

export default PluginList;