import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => (
  <div>
    <Link to="/tasks">tasks log</Link>
    <Link to="/graph">tasks chart</Link>
  </div>
);

export default Tabs;
