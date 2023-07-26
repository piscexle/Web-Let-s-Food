export const adminMenu = [
    { //quản lý người dùng
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },

            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin'
            },
            { //quản lý kế hoạch đơn hàng

                name: 'menu.seller.manage-schedule', link: '/seller/manage-schedule'

            },
        ]
    },
    { //quản lý thông tin quán ăn
        name: 'menu.admin.eatery',
        menus: [
            {
                name: 'menu.admin.manage-eatery', link: '/system/manage-eatery'
            },
            {
                name: 'menu.admin.manage-menu', link: '/system/manage-menu'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage',  },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
        ]
    },
    { //quản lý chuyên mục
        name: 'menu.admin.kind',
        menus: [
            {
                name: 'menu.admin.manage-kind', link: '/system/manage-kind'
            },
        ]
    },
    { //quản lý nhận xét 
        name: 'menu.admin.comment',
        menus: [
            {
                name: 'menu.admin.manage-comment', link: '/system/manage-comment'
            },
        ]
    },
];

export const sellerMenu = [
    {
        name: 'menu.admin.manage-user',
        menus: [
            { //quản lý kế hoạch đơn hàng

                name: 'menu.seller.manage-schedule', link: '/seller/manage-schedule'

            }
        ]

    }

];