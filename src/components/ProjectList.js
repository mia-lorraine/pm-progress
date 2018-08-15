import React from 'react';
import { Link } from 'react-router-dom';
import {Project} from './Projects';
import '../styles/App.css';
import '../styles/table.css';



export const ProjectList = ( {match, days}) => {
  const filter = match.params.filter;
  const projects = filter ? days.filter( project => project.manager === filter) : days;
  return (
    <div className = "project-list">
    <h3>{filter ? filter : 'All'} Current Projects </h3>
    <table class ="table">
      <thead>
        <tr>
            <th> name </th>
            <th> manager </th>
            <th> date </th>
        </tr>
      </thead>
      <tbody>
        {
          projects.map((project, i) =>
              <Project
                  key={i}
                  {...project}
                />
              )
        }
        </tbody>
      </table>
      <div className="filters">
                    Filter by:
                    <Link to="/list">
                        All
    				</Link>
                    &#9679;
                    <Link to="/list/Greg-VonRhyder">
                          Greg
    				</Link>
                    &#9679;
                    <Link to="/list/David-Holt">
                        Dave
    				</Link>
                    &#9679;
                    <Link to="/list/NA">
                        Not Claimed
    				</Link>
                </div>
                </div>
        )
    }
