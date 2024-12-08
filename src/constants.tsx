// header top links 
interface ILinks {
    id : number,
    title:string
    link: string

}

export const toplinks : ILinks[] = [
    {
     id : 1,
    title: 'Eng',
    link: '/'
},
{
    id : 2,
   title: 'Faqs',
   link: '/'
},
{
    id : 3,
   title: 'Need Help',
   link: '/'
},
]

export const navlinks : ILinks[] = [
    {
     id : 1,
    title: 'Home',
    link: '/'
},
{
    id : 2,
   title: 'Shop',
   link: '/shop'
},
{
    id : 3,
   title: 'Product',
   link: '/product'
},
{
    id : 4,
   title: 'Pages',
   link: '/'
},
{
    id : 5,
   title: 'About',
   link: '/about'
}
]

    