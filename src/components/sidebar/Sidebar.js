import React from "react";
import '../../css/sidebar/Sidebar.css'
import { Link, useLocation } from "react-router-dom";
import confetti from 'canvas-confetti';
import HOME from '../../images/HOME.jpg';
import AirPlane from '../../images/AIRPLAN.png';
import RESTURANT from '../../images/RESTURANT.jpg';
import COUPLE from '../../images/COUPLE.png';
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const pathName = useLocation().pathname;
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
  });
  const menus = [
    { name: <img className='icon' src={HOME} alt='home-img'/>,path: "/" },
    { name: <img className='icon' src={AirPlane} alt='airplane-img'/>,path: "/trip" },
    { name: <img className='icon' src={RESTURANT} alt='resturant-img'/>,path: "/food" },
    { name: <img className='icon' src={COUPLE} alt='couple-img'/>,path: "/board" },
  ];
  return (
    <div className="sidebar">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              onClick={()=>randomInRange} 
              menu={menu}
              isActive={pathName === menu.path ? true : false}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
            />
          </Link>
        );
      })}

    </div>
  );
}

export default Sidebar;