import React from "react";
import '../../css/sidebar/SidebarItem.css';

function SidebarItem({ menu, isActive }) {
  return isActive === true ? (
    <div className="sidebar-item active">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div className="sidebar-item">
      <p className="name">{menu.name}</p>
    </div>
  );
}

export default SidebarItem;