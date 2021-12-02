import React from "react";
import "antd/dist/antd.css";
import "../css/center.css";
import { Layout, Menu } from "antd";
import {FaBook, FaBookmark } from "react-icons/fa";
import {GoMailRead } from "react-icons/go";
import {  GiBullHorns, GiCow, GiMilkCarton, GiOpenedFoodCan, GiPayMoney } from "react-icons/gi";
import { ImUserPlus} from "react-icons/im";
import { AiFillDollarCircle} from "react-icons/ai";
import { BsBucketFill } from "react-icons/bs";
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import Hodim from "./Hodim";
import Sut from './Sut'
import Tree from './Tree'
import Astatka from "./Astatka";
import Mollar from "./Mollar";
import Ozuqalar from "./Ozuqalar";
import Taxrirlash from "./Taxrirlash";
import Xabar from "./Xabar";
import Sotuv from "./Sotuv";
import Arxiv from "./Arxiv";

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

                <Menu.Item key="8" icon={<GoMailRead/>}>
                <Link to='/admin/xabar'>Xabarlar</Link>
                </Menu.Item>
                <Menu.Item key="9" icon={<GiPayMoney/>}>
                <Link to='/admin/sotuv'>Sotuv</Link>
                </Menu.Item>
                <Menu.Item key="10" icon={<FaBook/>}>
                <Link to='/admin/arxiv'>Arxiv</Link>
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
        <Routes>
      <Route exact path="/admin/hodim" element={ <Hodim />}/>
      <Route exact path="/admin/astatka" element={<Astatka />}/>
      <Route exact path="/admin/mollar" element={<Mollar />}/>
      <Route exact path="/admin/ozuqalar" element={<Ozuqalar />}/>
      <Route exact path="/admin/" element={ <Taxrirlash />}/>
      <Route path="/admin/sut" element={<Sut />}/>
      <Route path="/admin/tree" element={<Tree />}/>
<Route path="/admin/xabar" element={<Xabar />}/>
<Route path="/admin/sotuv" element={<Sotuv />}/>
<Route path="/admin/arxiv" element={<Arxiv />}/>


    </Routes>
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
