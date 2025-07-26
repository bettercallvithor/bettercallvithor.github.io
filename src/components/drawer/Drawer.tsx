import RightSideBar from "../right-side-bar/RightSideBar";
import './drawer.css';

interface DrawerProps {
    children?: React.ReactNode;
}

function Drawer({ children }: DrawerProps) {
  return (
    <div className="drawer">
      <RightSideBar />

      <div className="drawer-content">
        {children}
      </div>
    </div>
  );
}

export default Drawer;