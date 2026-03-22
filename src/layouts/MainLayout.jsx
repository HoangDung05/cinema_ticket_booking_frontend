import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{ display: "flex", alignItems: "center", background: "#001529" }}
      >
        <div style={{ color: "red", fontWeight: "bold", marginRight: 20 }}>
          CINEMA LOGO
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", label: "Trang chủ", onClick: () => navigate("/") },
            { key: "2", label: "Lịch chiếu" },
          ]}
        />
      </Header>
      <Content style={{ padding: "20px 50px" }}>
        <Outlet /> {/* Nơi các trang của Bạn A hiện ra */}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Cinema Booking ©2026 Created by Your Team
      </Footer>
    </Layout>
  );
};
export default MainLayout;
