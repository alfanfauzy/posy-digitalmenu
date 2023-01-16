import React from 'react'
import CardMenuList from '@/molecules/card/menu/list'

const menus = [
  {
    category: 'Food',
    menus: [
      {
        name: 'Fried Cap cai 1',
        price: '12.000',
      },
      {
        name: 'Fried Cap cai 2',
        price: '12.000',
      },
      {
        name: 'Fried Cap cai 3',
        price: '12.000',
      },
      {
        name: 'Fried Cap cai 4',
        price: '12.000',
      },
    ],
  },
  {
    category: 'Drinks',
    menus: [
      {
        name: 'Teh Tarik 1',
        price: '6.000',
      },
      {
        name: 'Teh Tarik 2',
        price: '6.000',
      },
      {
        name: 'Teh Tarik 3',
        price: '6.000',
      },
      {
        name: 'Teh Tarik 4',
        price: '6.000',
      },
      {
        name: 'Teh Tarik',
        price: '6.000',
      },
    ],
  },
  {
    category: 'Dessert',
    menus: [
      {
        name: 'Desserts 1',
        price: '6.000',
      },
      {
        name: 'Desserts 2',
        price: '6.000',
      },
      {
        name: 'Desserts 3',
        price: '6.000',
      },
      {
        name: 'Desserts 4',
        price: '6.000',
      },
      {
        name: 'Desserts',
        price: '6.000',
      },
    ],
  },
]

const MoleculesSectionListMenu = () => (
  <>
    {menus.map((el) => (
      <section key={el.category} className="mt-6" id={el.category.toLowerCase()}>
        <aside className="px-4 mb-2">
          <p className="text-xxl-semibold">{el.category}</p>
        </aside>
        {el.menus.map((menu, idx) => (
          <CardMenuList key={menu.name} soldOut={idx % 2 === 0} />
        ))}
      </section>
    ))}
  </>
)

export default MoleculesSectionListMenu
