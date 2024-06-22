import { Outlet } from "react-router-dom";
import { Layout } from "../../layouts";
import { useState } from "react";

const LayoutOutlet = () => {
  const [chat, setChat] = useState([]);
  return (
    <>
      <Layout>
        <Outlet context={{ chat, setChat }} />
      </Layout>
    </>
  );
};

export default LayoutOutlet;
