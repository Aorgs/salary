import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

import Index from './pages/index';

export default function () {
    return (
        <ConfigProvider locale={zhCN}>
            <Index />
        </ConfigProvider>
    )
};