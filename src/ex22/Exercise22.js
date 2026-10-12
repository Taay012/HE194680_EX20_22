import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomNavbar from './CustomNavbar.jsx';

const Home = () => <div className="text-center">Home Component</div>;
const About = () => <div className="text-center">About Component</div>;
const Contact = () => <div className="text-center">Contact Component</div>;

const Profile = () => <div className="text-center">Profile Component</div>;

export default function Exercise22() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
