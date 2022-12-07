export const site_map = [
    {
        id: 1,
        name: 'Dashboard',
        icon: '/images/Sidebar/dashboard.svg',
        activeIcon: '/images/Sidebar/dashboard-green.svg',
        active: false,
        extendable: false,
        subItems: [],
        link: "/",
        sublinks: []
    },
    {
        id: 2,
        name: 'Marketplace',
        icon: '/images/Sidebar/marketplace.svg',
        activeIcon:'/images/Sidebar/marketplace-active.svg',
        active: true,
        extendable: true,
        subItems: [
            {
                id: 1,
                name: "Discover",
                link: "/"
            },
            {
                id: 2,
                name: "Rankings",
                link: "/rankings"
            },
            {
                id: 3,
                name: "Create",
                link: "/create_nft"
            }
        ],
        sublinks: ["/", "/rankings", "/create_nft"]
    },
    {
        id: 3,
        name: 'User Profile',
        icon: '/images/Sidebar/user-profile.svg',
        activeIcon:'/images/Sidebar/user-profile-active.svg',
        active: false,
        extendable: true,
        subItems: [
            {
                id: 1,
                name: "My Profile",
                link: "/profile"
            },
            {
                id: 2,
                name: "Activites",
                link: "/activities"
            },
            {
                id: 3,
                name: "Settings",
                link: "/settings"
            }
        ],
        sublinks: ["/profile", "/activities", "/settings"],
    },
    {
        id: 4,
        name: 'More Products',
        icon: '/images/Sidebar/menu.svg',
        activeIcon:'/images/Sidebar/menu-active.svg',
        active: false,
        extendable: true,
        subItems: ["Search", "Rankings", "Create"],
        sublinks: []
    },
]