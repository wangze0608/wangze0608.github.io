import App from '../App';

const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
const video = r => require.ensure([], () => r(require('../page/video/index')), 'video')


export default [{
  path:'https://wangze0608.github.io/',
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
    },
    /*视频列表*/
    {
      path:'/video',
      component: video
    }
  ]
}]
