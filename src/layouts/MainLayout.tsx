import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <p>main layout</p>
      {children}
    </div>
  );
};

export default MainLayout;
