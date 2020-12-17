import { GridList, GridListTile } from '@material-ui/core';
import React, { FC } from 'react';
import NotificationButton from '../components/NotificationButton';

const TopPage: FC = () => {
  return (
    <GridList>
      <GridListTile>
        <NotificationButton />
      </GridListTile>
    </GridList>
  );
};

export default TopPage;
