import App from '../App';

const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
const video = r => require.ensure([], () => r(require('../page/video/index')), 'video')
const newcar = r => require.ensure([], () => r(require('../page/newcar/newcar')), 'newcar')
const industry = r => require.ensure([], () => r(require('../page/industry/industry')), 'industry')
const guid = r => require.ensure([], () => r(require('../page/guid/guid')), 'guid')
const mp = r => require.ensure([], () => r(require('../page/mp/index')), 'mp')
const usecar = r => require.ensure([], () => r(require('../page/usecar/index')), 'usecar')
const area = r => require.ensure([], () => r(require('../page/area/index')), 'area')


// export default [{
//   path:'/wangze/vuebuild/',
//   component:App,
//   children: [
//     {
//       path: '',
//       redirect: '/wangze/vuebuild/index'
//     },
//     /*首页*/
//     {
//       path: '/wangze/vuebuild/index',
//       component: index
//     },
//     /*视频列表*/
//     {
//       path:'/wangze/vuebuild/video',
//       component: video
//     }
//   ]
// }]


export default [{
  path: '/wangze/vuebuild/',
  component: App,
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
      path: '/video',
      component: video
    },
    /*新车*/
    {
      path: '/newcar',
      component: newcar
    },
    /*行业*/
    {
      path: '/industry',
      component: industry
    },
    /*导购*/
    {
      path: '/guid',
      component: guid
    },
    /*头条客*/
    {
      path: '/mp',
      component: mp
    },
    /*用车*/
    {
      path: '/usecar',
      component: usecar
    },
    /*地区*/
    {
      path: '/area',
      component: area
    }
  
  ]
}]
