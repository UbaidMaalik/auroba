import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9477ea",
        },
      }}
    >
      {/* <Login /> */}
      <Layout />
    </ConfigProvider>
  );
}

export default App;
