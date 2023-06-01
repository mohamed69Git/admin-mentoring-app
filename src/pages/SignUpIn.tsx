import { Layout, Breadcrumb, theme } from "antd";
import "../Header.css";
const { Content } = Layout;
const SignUpIn: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-content"
        style={{ background: colorBgContainer }}
      >
        <p className="container-text">
          Content Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quasi assumenda quaerat cum, laudantium quam, debitis placeat hic
          tempore possimus sit voluptates similique ab sint fugit delectus odit
          harum, atque autem? "hello! hello!, here some quick characters"
          "hello! hello!, here some quick characters""hello! hello!, here some
          quick characters""hello! hello!, here some quick characters" Content
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          assumenda quaerat cum, laudantium quam, debitis placeat hic tempore
          possimus sit voluptates similique ab sint fugit delectus odit harum,
          atque autem? "hello! hello!, here some quick characters" "hello!
          hello!, here some quick characters""hello! hello!, here some quick
          characters""hello! hello!, here some quick characters" Content Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Quasi assumenda
          quaerat cum, laudantium quam, debitis placeat hic tempore possimus sit
          voluptates similique ab sint fugit delectus odit harum, atque autem?
          "hello! hello!, here some quick characters" "hello! hello!, here some
          quick characters""hello! hello!, here some quick characters""hello!
          hello!, here some quick characters" Content Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Quasi assumenda quaerat cum,
          laudantium quam, debitis placeat hic tempore possimus sit voluptates
          similique ab sint fugit delectus odit harum, atque autem? "hello!
          hello!, here some quick characters" "hello! hello!, here some quick
          characters""hello! hello!, here some quick characters""hello! hello!,
          here some quick characters" Content Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quasi assumenda quaerat cum, laudantium
          quam, debitis place Content Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quasi assumenda quaerat cum, laudantium quam,
          debitis placeat hic tempore possimus sit voluptates similique ab sint
          fugit delectus odit harum, atque autem? "hello! hello!, here some
          quick characters" "hello! hello!, here some quick characters""hello!
          hello!, here some quick characters""hello! hello!, here some quick
          characters"at hic tempore possimus sit voluptates similique ab sint
          fugit delectus odit harum, atque autem? "hello! hello!, here some
          quick characters" "hello! hello!, here some quick characters""hello!
          hello!, here some quick characters""hello! hello!, here some quick
          characters" Content Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quasi assumenda quaerat cum, laudantium quam,
          debitis placeat hic tempore possimus sit voluptates similique ab sint
          fugit delectus odit harum, atque autem? "hello! hello!, here some
          quick characters" "hello! hello!, here some quick characters""hello!
          hello!, here some quick characters""hello! hello!, here some quick
          characters" Content Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quasi assumenda quaerat cum, laudantium quam,
          debitis placeat hic tempore possimus sit voluptates similique ab sint
          fugit delectus odit harum, atque autem? "hello! hello!, here some
          quick characters" "hello! hello!, here some quick characters""hello!
          hello!, here some quick characters""hello! hello!, here some quick
          characters"
        </p>
      </div>
    </Content>
  );
};

export default SignUpIn;
