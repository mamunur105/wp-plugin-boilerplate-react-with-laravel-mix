import React, { useEffect, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Switch, Tooltip } from 'antd';
import useStore from "../Utils/StateProvider";
const { Meta } = Card;
const DigitalItem = (props ) => {

    const {
        options,
        generalData,
        updateGeneralData
    } = useStore();
    const { modules } = options;
    const {
        name,
        icon,
        description,
        tollTips,
        id
    } = props;

    const theTollTips = tollTips ? tollTips : name;

    const onChange = (checked) => {
        updateGeneralData({
            modules: {
                ...generalData.modules,
                [id] : {
                    ...generalData.modules?.[id],
                    active: !!checked
                }
            }
        });
    };

    const showDrawer = () => {
        updateGeneralData({
            ...generalData,
            module : id,
            showDrawer : true,
            drawerLoading: true
        });
        onChange( modules?.[id]?.active );
    };

    return(
        <Card
            className={`category-list-wrapper`}
            actions={[
                <><SettingOutlined
                    key="setting"
                    onClick={showDrawer}
                    style={{ fontSize: '20px' }}
                /> Report </>,
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
export default DigitalItem;