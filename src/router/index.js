import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import EventsView from '../views/EventsView.vue'
import AddOrFollowEventView from '../views/AddOrFollowEventView.vue'
import EventDetailView from '../views/EventDetailView.vue'
import CreateEventView from '../views/CreateEventView.vue'
import FollowUp from '../views/FollowUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },   
    {
      path: '/add-or-follow',
      name: 'addOrFollow',
      component: AddOrFollowEventView
    },
    {
      path: '/event-detail/:id',
      name: 'eventDetail',
      component: EventDetailView
    },
    {
      path: '/event-create',
      name: 'CreateEvent',
      component: CreateEventView
    },
    {
      path: '/followup',
      name: 'followup',
      component: FollowUp
    },
     
  ]
})

export default router
