import React from 'react';

const Link = ({route}) => {
  return (
    <div>
      <ul className="flex">
        {
          <li className="px-4 lg:mr-10 hover:bg-amber-400 cursor-pointer">
            <a href={route.path}>{route.name}</a>
          </li>
        }
      </ul>
    </div>
  );
};

export default Link;