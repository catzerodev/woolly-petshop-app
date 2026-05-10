const Layout = ({ children }) => {
  return (
    <div
      className="
        overflow-x-hidden
        bg-white
        min-h-screen
      "
    >
      {children}
    </div>
  );
};

export default Layout;