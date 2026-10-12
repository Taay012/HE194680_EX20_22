import React from 'react';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <h1>User Profile: {userId}</h1>;
}

export const routes = [
  { path: '/', component: () => <h1>Home Page</h1> },
  { path: '/products', component: () => <h1>Products Page</h1> },
  { path: '/about', component: () => <h1>About Page</h1> },
  { path: '/contact', component: () => <h1>Contact Page</h1> },
  { path: '/users/:userId?', component: UserProfile },
];

export function renderRoutes() {
  return routes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));
}
