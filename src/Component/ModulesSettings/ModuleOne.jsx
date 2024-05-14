import React from 'react';

import useStore from '../../Utils/StateProvider';

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

const ModuleOne = ( props ) => {
    const {
        options,
        generalData,
        saveType,
        dispatch
    } = useStore();

    return (
        <>
           <Button> Button </Button>
        </>

    );
};

export default ModuleOne;