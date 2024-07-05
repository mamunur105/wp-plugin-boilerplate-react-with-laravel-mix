import React, { useEffect } from 'react';

import useStore from '../Utils/StateProvider';

import Loader from '../Utils/Loader';

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

import DigitalItem from './DigitalItem';
import MainHeader from "./MainHeader";
function DigitalItems() {

    const {
        options,
        fetchOptions,
        generalData,
        modulesList
    } = useStore();

    useEffect(() => {
        fetchOptions();
    }, []);

    return (
        <><MainHeader/>
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
                            return <DigitalItem key={ index } {...item} />;
                        } )
                    }
                    </>
                }
            </Content>
        </Layout>
        </>

    );
};

export default DigitalItems;