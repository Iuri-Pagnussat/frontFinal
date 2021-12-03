import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../components/main.vue'
import login from '../components/login.vue'
import clientes from '../components/clientes.vue'
import endereco from '../components/endereco.vue'
import carro from '../components/carro.vue'
import tabelapreco from '../components/tabelapreco.vue'
import listacarro from '../components/listacarro.vue'
import listaclientes from '../components/listaclientes.vue'
import listaendereco from '../components/listaendereco.vue'
import listatabelapreco from '../components/listatabelapreco.vue'

Vue.use(VueRouter)


const routes = [
    { path: '/main', name: 'Main', component: main},
    { path: '/login', name: 'Login', component: login},
    { path: '/clientes', name: 'Clientes', component: clientes},
    { path: '/endereco', name: 'Endereco', component: endereco},
    { path: '/carro', name: 'Carro', component: carro},
    { path: '/tabelapreco', name: 'TabelaPreco', component: tabelapreco},
    { path: '/listaclientes', name: 'listaClientes', component: listaclientes},
    { path: '/listaendereco', name: 'listaEndereco', component: listaendereco},
    { path: '/listacarro', name: 'listaCarro', component: listacarro},
    { path: '/listatabelapreco', name: 'listaTabelaPreco', component: listatabelapreco},
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router