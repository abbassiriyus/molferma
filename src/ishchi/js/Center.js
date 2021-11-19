import React from "react";
import "antd/dist/antd.css";
import "../css/center.css";
import { Layout, Menu } from "antd";
import {FaBookmark } from "react-icons/fa";
import {  GiBullHorns, GiCow, GiMilkCarton, GiOpenedFoodCan } from "react-icons/gi";
import { ImUserPlus} from "react-icons/im";
import { AiFillDollarCircle} from "react-icons/ai";
import { BsBucketFill } from "react-icons/bs";
import { BrowserRouter,Switch,Route, Link } from "react-router-dom";
import Hodim from "./Hodim";
import Sut from './Sut'
import Tree from './Tree'
import Astatka from "./Astatka";
import Mollar from "./Mollar";
import Ozuqalar from "./Ozuqalar";
import Taxrirlash from "./Taxrirlash";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Center extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => 
  {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" icon={<FaBookmark />}>
                 <Link to='/admin/'>Tahrirlash </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<GiOpenedFoodCan />}>
                <Link to='/admin/ozuqalar'>  Ozuqalar</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ImUserPlus />}>
                  <Link to='/admin/hodim'>Xodimdimlarimiz</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<GiMilkCarton/>}>
                <Link to='/admin/sut'>  Sut maxsuloti </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<BsBucketFill/>}>
                <Link to='/admin/astatka'> Astatka</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<GiBullHorns/>}>
                <Link to='/admin/mollar'>  Mollar</Link>
                </Menu.Item>
                <Menu.Item key="7" icon={<AiFillDollarCircle/>}>
                <Link to='/admin/tree'>Mablagimiz</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="header">
                <Menu

theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["2"]}
                ></Menu>
              </Header>
              <Content style={{ margin: "0 16px" }}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: "80vh" }}
                >
        <Switch>
      <Route exact path="/admin/hodim">
      <Hodim />
      </Route>
      <Route exact path="/admin/astatka">
      <Astatka />
      </Route>
      <Route exact path="/admin/mollar">
      <Mollar />
      </Route>
      <Route exact path="/admin/ozuqalar">
      <Ozuqalar />
      </Route>
      <Route exact path="/admin/">
      <Taxrirlash />
      </Route>
      <Route path="/admin/sut">
          <Sut />
      </Route>
      <Route path="/admin/tree">
          <Tree />
      </Route>
    </Switch>
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                ©2021 Created by Abbas
              </Footer>
            </Layout>
          </Layout>


        </BrowserRouter>

        
      </div>
    );
  }
}
