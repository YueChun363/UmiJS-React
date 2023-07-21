import React from 'react';
import styles from './index.less';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const items = [
  {
    label: <Link to="/">首页</Link>,
    icon: <UserOutlined />,
    key: 'index',
  },
  {
    label: <Link to="/pageA">pageA</Link>,
    icon: <VideoCameraOutlined />,
    key: 'pageA',
  },
];

export default (props: any) => (
  <div className={styles.container}>
    <div id="components-layout-demo-responsive">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Link to="/" className={styles.logo}>
            My Logo
          </Link>

          <Menu theme="dark" mode="inline" items={items} defaultSelectedKeys={['index']}></Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {props?.children || '无'}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  </div>
);
