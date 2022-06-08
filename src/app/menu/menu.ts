import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'dashboard',
    title: 'MENU.DASHBOARD',
    translate: 'MENU.DASHBOARD',
    role: ['SuperAdmin'],
    type: 'item',
    icon: 'home',
    
    // url: 'admin/dashboard',
   
  },
  // {
  //   id: 'setting',
  //   type: 'section',
  //   title: 'Setting',
  //   translate: 'MENU.SETTING.SETTING_MENU',
  //   role: ['SuperAdmin'],
  //   icon: 'package',
  //   disabled: true,
  //   children: [
  //     {
  //       id: 'userMenu',
  //       title: 'User',
  //       translate: 'MENU.SETTING.USER',
  //       type: 'item',
  //       icon: 'user',
  //       url: 'admin/setting/user',
  //     },
  //     {
  //       id: 'logMenu',
  //       title: 'Loging',
  //       translate: 'MENU.SETTING.LOING',
  //       type: 'item',
  //       icon: 'user',
  //       url: 'admin/setting/logging',
  //     },
    
  //   ]
  // },
  {
    id: 'sale-person',
    type: 'section',
    title: 'MENU.SALE_PERSON.SALE_PERSON',
    translate: 'MENU.SALE_PERSON.SALE_PERSON',
    icon: 'package',
    children: [
      {
        id: 'CustomerMenu',
        title: 'MENU.SALE_PERSON.SALE_PERSON',
        translate: 'MENU.SALE_PERSON.SALE_PERSON',
        type: 'item',
        icon: 'user',
        url: 'admin/sale-person',
      },
      
    
    ]
  },
  
]
