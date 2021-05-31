import React, { useEffect } from "react";
import { Alert } from "reactstrap";

function Notify({notification, setNotification}) {
  useEffect(()=> {
     var visibleTimeOut = null;
     if (notification.isOpen){
        visibleTimeOut = setTimeout(()=>{
            setNotification({
                ...notification,
                isOpen : false
            })
         }, 3000);
     }
     return ()=>{
        clearTimeout(visibleTimeOut);
     }
  }, [notification]);
  return (
    <Alert color={notification.color} isOpen={notification.isOpen}>
      {notification.content}
    </Alert>
  );
}

export default Notify;
