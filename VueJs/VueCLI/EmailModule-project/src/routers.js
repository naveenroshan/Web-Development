import emailDisplay from '../labs/lab1/EmailDisplay.vue';
import emailHome from '../labs/lab2/EmailHome.vue';
//import emailHomeEventBus from './labs/lab3/EmailHome.vue';

export default [{
    path: '/lab1/home.vue',
    component: emailDisplay
  },
  {
    path: '/lab2/home.vue',
    component: emailHome
  },
  {
  //  path: '/lab2/home.vue',
  //  component: emailHomeEventBus
  }
]
