import { Button } from '@material-ui/core';
import React, { FC } from 'react';

const NotificationButton: FC = () => {
  const { handleOnClick } = useNotificationButton();

  return (
    <Button variant="contained" color="primary" onClick={handleOnClick}>
      Notification
    </Button>
  );
};

const useNotificationButton = () => {
  const handleOnClick = () => {
    console.log('aaa');
  };

  return { handleOnClick };
};

export default NotificationButton;
