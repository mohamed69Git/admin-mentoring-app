import { Breadcrumb, Layout, Menu, theme } from "antd";
import "../Header.css";
const { Header, Content, Footer } = Layout;
const HeaderPage: React.FC = () => {
  return (
    <Header
      className="header-top"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
  );
};
export default HeaderPage;
