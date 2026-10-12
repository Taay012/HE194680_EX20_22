import React from 'react';
import { Routes } from 'react-router-dom';
import NavigationMenu from './NavigationMenu.jsx';
import { renderRoutes } from './routes.js';

export default function Exercise20() {
  return (
    <>
      <NavigationMenu />
      <Routes>{renderRoutes()}</Routes>
    </>
  );
}
