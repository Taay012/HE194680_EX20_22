import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UserList from './UserList.jsx';
import UserDetail from './UserDetail.jsx';
import DishList from './DishList.jsx';
import DishDetail from './DishDetail.jsx';

export default function Exercise21() {
  return (
    <>
      <nav className="example-menu" aria-label="Ex21 navigation">
        <Link to="/ex21/users">Users</Link>
        <Link to="/ex21/dishes">Dishes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/dishes" element={<DishList />} />
        <Route path="/dishes/:dishId" element={<DishDetail />} />
      </Routes>
    </>
  );
}
