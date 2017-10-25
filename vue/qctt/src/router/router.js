import App from '../App';

const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')


export default [{
  path:'/',
  component:App,
  children: [
    {
      path: '',
      redirect: '/index'
    },
    /*首页*/
    {
      path: '/index',
      component: index
    }
  ]
}]
