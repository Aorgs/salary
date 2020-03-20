import React, { Component } from 'react';
import { Layout, DatePicker } from 'antd';

import Style from './index.module.css';

const { Header, Sider, Content } = Layout;

class App extends Component {
    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className={Style.app}>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <DatePicker />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default App;
