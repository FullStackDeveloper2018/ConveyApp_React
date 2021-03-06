import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

if (typeof window !== `undefined`) {
  console.log("%c Built & Managed     \n by GATSBOY          \n https://gatsboy.com ", "background: #062484; color: #fff; font-size: normal; padding: 10px;");
}

function Layout({ children }) {
  return (
    <div className="w-full mx-auto flex-col font-lora-regular text-gray-900 text-base">
      <div className="fixed bg-white shadow w-full">
        <Header />
      </div>

      <main className="flex-1 bg-mainBack w-full text-color min-h-screen mx-auto z-10">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
