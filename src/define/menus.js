const MENUS = {
  M1UCS: {
    title: 'M1UCS',
    url: '/m1ucs',
  },
  PRODUCT: {
    title: 'PRODUCT',
    url: '/product',
    sub: [
      {
        title: 'M1 EdgeHub',
        url: '/edgeHub',
      },
      {
        title: 'M1 Winch for Drone',
        url: '/winchForDrone',
      },
      {
        title: 'JI-HO V2',
        url: '/jiHoV2',
      },
      {
        title: 'SVMAX',
        url: '/SVMax',
      },
    ],
  },
  SERVICE: {
    title: 'SERVICE',
    url: '/service',
    sub: [
      {
        title: 'Wide Range Survey',
        url: '/survey',
      },
      {
        title: 'AeroLens',
        url: '/aerolens',
      },
    ],
  },
  COMPANY: {
    title: 'COMPANY',
    url: '/company',
  },
  NEWS: {
    title: 'NEWS',
    url: '/news',
  },
};

export default Object.values(MENUS);
