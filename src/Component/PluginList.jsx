import React, { useEffect, useState } from 'react';

import Loader from '../Utils/Loader';
import { Avatar, Card, Anchor } from 'antd';
const { Meta } = Card;
import {
    Button,
    Layout,
    Typography
} from 'antd';

const { Title, Paragraph  } = Typography;

const { Sider, Content } = Layout;

import {getPluginList} from "../Utils/Data";
import MainHeader from "./MainHeader";

function PluginList() {

    const [ pluginList, setPluginList ] = useState( [] );

    const getThePluginList = async () => {
        const response = await getPluginList();
        const preparedData =  await JSON.parse( response.data );
        await setPluginList( preparedData );
    }

    useEffect(() => {
       getThePluginList();
    }, [] );

    { console.log( pluginList ) }
    return (
        <>
        <Sider style={{ borderRadius: '5px' }}>
            <MainHeader/>
        </Sider>
        <Layout style={{
            position: 'relative',
            height:'85vh',
            padding: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: '15px',
            overflowY: 'auto',

        }}>
            { pluginList.length > 0 ?
                    pluginList.map( ( plugin, index) => (
                        <Card
                            key={index}
                            style={{
                                maxWidth:'calc( ( 100% - calc( 15px * 1 ) ) / 2)',
                                flex: '0 0 calc(( 100% - calc( 15px * 1 ) ) / 2)',
                                alignSelf: 'flex-start'
                            }}
                            actions={[
                                <a className="thickbox open-plugin-details-modal"
                                   href={plugin.TB_iframe}>
                                    <Button type="link" size={`large`}>
                                        Install
                                    </Button>
                                </a>,
                                <a target={`_blank`} href={`#`}>
                                    <Button type="link" size={`large`}>  Visit Website </Button>
                                </a>
                            ]}
                        >
                            <Meta
                                avatar={<a className="thickbox open-plugin-details-modal" href={plugin.TB_iframe}><Avatar
                                    size={130} src={plugin?.icons['2x']}/> </a>}
                                title={<a className="thickbox open-plugin-details-modal" href={plugin.TB_iframe}>
                                        <span dangerouslySetInnerHTML={{__html: plugin.plugin_name}}/>
                                    </a>}
                                description={<span dangerouslySetInnerHTML={{__html: plugin.short_description}}/>}
                            />
                        </Card>
                    )) :  <Loader/>
            }
        </Layout>
        </>
    );
};

export default PluginList;