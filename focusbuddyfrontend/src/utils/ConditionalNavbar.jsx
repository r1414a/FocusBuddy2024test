// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import DashboardNavbar from '../Components/navbar/DashboardNavbar';

// const ConditionalNavbar = () => {
//   const location = useLocation();

//   // Define the paths where the navbar should not be displayed
//   const hideNavbarPaths = ['/session/test-session','/sessions/:id','/account/plan/','/account/delete'];

//   // Check if the current path is in the list of paths where the navbar should be hidden
//   // const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
//   const shouldHideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith(path));

//   return !shouldHideNavbar ? <DashboardNavbar /> : null;
// };

// export default ConditionalNavbar;


import React from 'react';
import { useLocation } from 'react-router-dom';
import DashboardNavbar from '../Components/navbar/DashboardNavbar';

const ConditionalNavbar = () => {
  const location = useLocation();

  // Define the paths where the navbar should not be displayed
  const hideNavbarPaths = [
    '/session/test-session',
    '/account/plan/',
    '/account/delete'
  ];

  // Check if the current path matches any of the static paths
  const shouldHideNavbar = hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  // Regular expression to match a UUID in the format '/sessions/:id'
  const sessionIdPath = /^\/sessions\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

  // Check if the current path matches the dynamic '/sessions/:id' path
  const isSessionIdPath = sessionIdPath.test(location.pathname);

  // Return the navbar if it's not a hidden path
  return !(shouldHideNavbar || isSessionIdPath) ? <DashboardNavbar /> : null;
};

export default ConditionalNavbar;
