import CadastroPage from '@/views/CadastroPage.vue'
import EditarPage from '@/views/EditarPage.vue'
import HomePage from '@/views/HomePage.vue'
import IndexPage from '@/views/IndexPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import MyAccount from '@/views/MyAccount.vue'
import NewUser from '@/views/NewUser.vue'
import SairPage from '@/views/SairPage.vue'
import SobrePage from '@/views/SobrePage.vue'
import UserAtualizar from '@/views/UserAtualizar.vue'
import UsersForms from '@/views/UsersForms.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    component: HomePage,
    meta: { layout: 'navbar' } 
  },
  {
    path: '/login',
    component: LoginPage,
    meta: { layout: 'navbar' } 
  },
  {
    path: '/cadastrar',
    component: CadastroPage,
    meta: { layout: 'navbar' } 
  },
  {
    path: '/sobre',
    component: SobrePage,
    meta: { layout: 'default' } 
  },
  {
    path: '/conta',
    component: UsersForms,
    meta: { layout: 'navbar' } 
  },
  {
  path: "/conteudo/:id",
  name: "ConteudoPage",
  component: () => import("@/views/ConteudoPage.vue"),
  props: true, // Isso permite passar o ID como prop
  meta: { layout: 'navbar' } 
},
  {
    path: '/',
    component: IndexPage,
    meta: { layout: 'default' } 
  },
  {
    path: '/',
    component: SairPage,
    meta: { layout: 'navbar' } 
  },
  
  {
    path: '/editar',
    component: UserAtualizar,
    meta: { layout: 'navbar' }
  },

  {
    path: '/user',
    component: NewUser,
    meta: { layout: 'navbar' }
  },

  {
    path: '/minhaconta',
    component: MyAccount,
    meta: { layout: 'navbar' } 
  },

  {
    path: '/edit',
    component: EditarPage,
    meta: { layout: 'navbar' }
  },
  
  
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
