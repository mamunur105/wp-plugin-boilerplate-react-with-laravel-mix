import React from 'react';

import useStore from '../Utils/StateProvider';

import Loader from '../Utils/Loader';

import {modulesList} from '../Utils/modules';

import {
    Form,
    Layout,
    Button,
    Input,
    Divider,
    Typography
} from 'antd';

const { TextArea } = Input;

const { Content } = Layout;

const { Title, Text } = Typography;

import * as Types from "../Utils/actionType";

import ModuleItem from './ModuleItem';

function Modules() {

    const {
        options,
        generalData,
        saveType,
        dispatch
    } = useStore();

    return (
        <Layout style={{ position: 'relative' }}>
            <Content style={{
                padding: '15px',
                background: 'rgb(255 255 255 / 35%)',
                borderRadius: '5px',
                boxShadow: 'rgb(0 0 0 / 1%) 0px 0 20px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                alignItems: 'start',
                flex: '0'
            }}>
                { options.isLoading ? <Loader/> :
                    <>
                    {
                        modulesList.map( (item, index) =>  {
                            return <ModuleItem  key={ index } {...item} />;
                        } )
                    }
                    </>
                }
            </Content>

        </Layout>

    );
};

export default Modules;