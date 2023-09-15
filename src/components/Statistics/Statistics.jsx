import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({label, percentage}) => {
    <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="statList">
    <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
  </ul>
</section>
  
};

