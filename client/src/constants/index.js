import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Marketplace',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Notifications',
    imgUrl: createCampaign,
    link: '/notification',
  },
  {
    name: 'Create campaign',
    imgUrl: payment,
    link: '/create-campaign',
    // disabled: true,
  },
  {
    name: 'Claims',
    imgUrl: withdraw,
    link: '/claim',
    // disabled: true,
  },
  {
    name: 'User Space',
    imgUrl: profile,
    link: '/profile',
  },
  // {
  //   name: 'logout',
  //   imgUrl: logout,
  //   link: '/',
    // disabled: true,
  // },
];
