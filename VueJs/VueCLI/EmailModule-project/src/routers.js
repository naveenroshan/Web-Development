import emailDisplay from './labs/lab1/EmailDisplay.vue';
import emailHome from './labs/lab2/EmailHome.vue';
import emailHomeEventBus from './labs/lab3/EmailHome.vue';

export default [{
  path: '/lab1',
  component: emailDisplay
},
{
  path: '/lab2',
  component: emailHome
},
{
  path: '/lab3',
  component: emailHomeEventBus
}
]
