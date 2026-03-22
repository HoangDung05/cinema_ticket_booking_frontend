import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { DesktopOutlined, FileOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255,255,255,0.2)",
            color: "white",
            textAlign: "center",
          }}
        >
          ADMIN
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <DesktopOutlined />,
              label: "Quản lý phim",
              onClick: () => navigate("/admin/movies"),
            },
            { key: "2", icon: <FileOutlined />, label: "Quản lý lịch chiếu" },
          ]}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, minHeight: 360, background: "white" }}>
            <Outlet /> {/* Nơi các trang của Bạn B hiện ra */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
