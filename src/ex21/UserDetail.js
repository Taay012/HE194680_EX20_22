import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../data/users.js';

export default function UserDetail() {
  const { userId } = useParams();
  const user = /^\d+$/.test(userId) ? users[Number(userId)] : undefined;
  if (!user) return <div>User not found.</div>;
  return <div>{user.firstName} {user.lastName} : {user.age}</div>;
}
