import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../data/users.js';

export default function UserList() {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <Link to={`/ex21/users/${index}`}>
            {user.firstName} {user.lastName}
          </Link>
        </div>
      ))}
    </div>
  );
}
