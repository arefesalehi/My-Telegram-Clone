import {  SearchOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Input, Button } from "antd";
import "../assets/styles/sidebar.css";
import LeftSide from "./LeftSide";
import SidebarThread from "./SidebarThread";
import "../assets/styles/sidebarthread.css";

const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Space>
          <LeftSide />
          <Input
            className="sidebar-input"
            allowClear
            placeholder="search"
            prefix={<SearchOutlined className="sidebar-searchIcon" />}
          />
        </Space>
      </div>


      <div className="sidebarthread-content">
        <SidebarThread /> 
      </div>


      <div className="sidebar-bottom">
        <Button ><EditOutlined /></Button>
      </div>
    </div>
  );
};

export default Sidebar;
