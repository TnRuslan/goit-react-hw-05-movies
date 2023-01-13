import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Loyout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
