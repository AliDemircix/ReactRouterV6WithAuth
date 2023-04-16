import React from 'react';
import { Button } from '@mui/material/';
import {
    
    Link,
    Outlet,
  } from "react-router-dom";
import { AuthStatus } from './AuthStatus';

function Layout() {
    return (
      <div>
        <AuthStatus/>
  
     
            <Button ><Link to="/">Public Page</Link></Button>
     
            <Button ><Link to="protected">Protected Page</Link></Button>
  
        <Outlet/>
      </div>
    );
  }
export default Layout;
