import React from 'react';
import { createPortal } from 'react-dom';

import Drawer from './Drawer.js';

const Backdrop = ({drawer, toggleDrawer}) => {
  if (drawer) {    
    return createPortal(
      <div className="backdrop-container" onClick={toggleDrawer}>
        <Drawer toggleDrawer={toggleDrawer}>Drawer</Drawer>
      </div>, document.getElementById('backdrop-hook')
    );
  }
}

export default Backdrop
