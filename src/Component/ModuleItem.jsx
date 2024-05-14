import React, { useEffect, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Switch, Tooltip } from 'antd';
import useStore from "../Utils/StateProvider";
import * as Types from "../Utils/actionType";
const { Meta } = Card;
const ModuleItem = ( props ) => {

    const {
        options,
        generalData,
        saveType,
        dispatch
    } = useStore();
    const { modules } = options;
    const {
        name,
        icon,
        description,
        tollTips,
        id
    } = props;

    const onChange = (checked) => {
        dispatch({
            type: Types.UPDATE_MODULES,
            modules: {
                ...modules,
                [id] : {
                    ...modules?.[id],
                    active: !!checked
                }
            }
        });
    };

    const showDrawer = () => {
        dispatch({
            type: Types.GENERAL_DATA,
            generalData:{
                ...generalData,
                module : id,
                showDrawer : true,
                drawerLoading: true
            }
        });
        onChange( modules?.[id]?.active );
    };

    const theTollTips = tollTips ? tollTips : name;

    return(
        <Card
            style={{
                flex: ' 0 0 calc(33.33% - 15px)'
            }}
            actions={[
                <SettingOutlined
                    key="setting"
                    onClick={showDrawer}
                    style={{ fontSize: '20px' }}
                />,
                <Tooltip placement="top" title={ theTollTips } >
                    <Switch onChange={onChange} />
                </Tooltip>,
            ]}
        >
            <Meta
                avatar={icon ? <icon.type {...icon.props} /> : null}
                title={name}
                description={ description }
            />
        </Card>
    )
};
export default ModuleItem;