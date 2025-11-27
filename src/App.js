import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import logo from "./Assets/CarterOilLogo.svg";
import Leads from "./Pages/Leads/Leads";
import { AiFillProduct } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { MdSpaceDashboard, MdOutlineDoubleArrow } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import SubscribedUsers from "./Pages/Subscribed/SubscribedUsers";

const App = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeitems, setActiveitems] = useState(null);
  const [isOpen, setIsOpen] = useState(true); 

  const allItems = [
    { id: 1, name: "Leads", route: "/leads", icon: <IoMdContacts /> },
    { id: 2, name: "Subscribers", route: "/subscribed-users", icon: <AiFillProduct /> },
  ];
  useEffect(() => {
    const currentItem = allItems.find(
      (item) => item.route === location.pathname
    );
    setActiveitems(currentItem?.id || null);
  }, [location.pathname]);
  const handleitemsClick = (item) => {
    setActiveitems(item.id);
    navigate(item.route);
  };
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <div className={`app-side-bar ${isOpen ? "open" : "closed"}`}>
      <div className="opencloseicon" onClick={toggleMenu}>
  <MdOutlineDoubleArrow className={isOpen ? "rotated" : ""} />
</div>
<img
          src={logo}
          className="logo"
          alt="digitalaura Logo"
        />
        <ul>
          {allItems.map((item) => (
            <li
              key={item.id}
              className={activeitems === item.id ? "selected-item" : "unselected"}
              onClick={() => handleitemsClick(item)}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </li>
          ))}
          <li className="unselected" onClick={onLogout}>
            <IoLogOut />
            {isOpen && <span>Logout</span>}
          </li>
        </ul>
      </div>

      <div className="app-right">
        <Routes>
          <Route path="/leads" element={<Leads />} />
          <Route path="/subscribed-users" element={<SubscribedUsers />} />
          <Route path="*" element={<Navigate to="/leads" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
