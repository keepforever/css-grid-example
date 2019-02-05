import React from 'react';
import { Link } from 'react-router-dom';

const linksConfig = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/alpha',
    text: 'Alpha'
  },
  {
    to: '/beta',
    text: 'Beta'
  },
  {
    to: '/theta',
    text: 'Theta'
  }
]

export default ( {children} ) => {
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        {linksConfig.map(l => {
          return (
            <Link key={l.text} to={l.to}>
              {l.text}
            </Link>
          )
        })}
      </div>

      {children}
    </div>
  )
};
