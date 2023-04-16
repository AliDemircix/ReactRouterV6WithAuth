import React, { useContext } from "react";
import {  useNavigate} from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Alert,Button } from "@mui/material";
import AlertTitle from '@mui/material/AlertTitle';

export function useAuth() {
    return useContext(AuthContext);
  }

export function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();
  
    if (!auth.user) {
      return <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          You are not logged in.
          </Alert>;
    }
  
    return (
      <Alert>
       <AlertTitle>Welcome</AlertTitle>
        Welcome {auth.user}!{" "}
        <Button
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
        >
          Sign out
        </Button>
      </Alert>
    );
  }