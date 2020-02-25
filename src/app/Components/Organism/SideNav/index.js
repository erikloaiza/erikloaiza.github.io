import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function SideNav(props) {
  const [opened, setOpened] = useState(0);
  return (
    <div className="sidenav">
      <button className="d-md-none" onClick={() => setOpened(!opened)}>
      <GiHamburgerMenu/>
      </button>
      <div className={"content pt-md-0 pt-5 "+(opened?"show":"")} onClick={() => setOpened(!opened)}>
        {props.children}
      </div>
      <div className={"sidenav--shadow "+(opened?"show":"")} onClick={() => setOpened(!opened)}></div>
    </div>
  );
}
export default SideNav;
