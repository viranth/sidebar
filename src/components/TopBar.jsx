import React from 'react'
import NmsLogo from "../Assets/nms.png"

export default function TopBar() {
  return (
    <div>
      <div className="Topbar">
        <img src={NmsLogo} alt="" style={{width:'80px'}}/>
      </div>
    </div>
  )
}
