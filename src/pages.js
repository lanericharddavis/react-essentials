import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contacts</Link>
      </nav>
      <h1>[Company Website]</h1>
    </div>
  );
}
export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="services">Services</Link>
        <Link to="history">History</Link>
        <Link to="location">Location</Link>
      </nav>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h2>Our Services</h2>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div>
      <h2>Our Company History</h2>
    </div>
  );
}

export function Location() {
  return (
    <div>
      <h2>Our Company Location</h2>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>[Events]</h1>
    </div>
  );
}
export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}