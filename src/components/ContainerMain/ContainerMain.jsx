import React from "react";
import { Layout } from 'antd';
import {NavLink} from "react-router-dom";
import MyHead from '../../components/header/MyHeader'
const { Header, Footer, Sider, Content } = Layout;
export default function leftNav(){
    return(
        <div>
            <Layout className="Content_item">
                <Header className="header_top">
                    <MyHead></MyHead>
                </Header>


            </Layout></div>
    )

}