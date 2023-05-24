import { Layout, Menu } from "antd";
import { Image } from "react-bootstrap";
import "../../styles/sidebar.css";
import { SidebarData } from "./SidebarData";

const { Sider } = Layout;

const Sidebar = () => {
  console.log(SidebarData);
  return (
    <>
      <Sider width={200}>
        <div className="logo-vertical">
          <Image src="./images/Logo.png" className="logo-main" />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {SidebarData.map((item) => (
            <Menu.Item
              key={item.id}
              icon={<i className={item.icon}></i>}
              style={{ backgroundColor: "#ded4fc", color: "#8970d6" }}
            >
              {item.title}
            </Menu.Item>
          ))}

          {/* <Menu.Item key="2" icon={<i className="ri-bookmark-2-line"></i>}>
            Courses
          </Menu.Item>
          <Menu.Item key="3" icon={<i className="ri-chat-3-line"></i>}>
            Chats
          </Menu.Item>
          <Menu.Item key="4" icon={<i className="ri-bar-chart-box-line"></i>}>
            Grades
          </Menu.Item>
          <Menu.Item key="5" icon={<i className="ri-calendar-2-line"></i>}>
            Schedule
          </Menu.Item>
          <Menu.Item key="6" icon={<i className="ri-home-gear-line"></i>}>
            Settings
          </Menu.Item> */}
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
