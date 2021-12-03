import Vue from 'vue'
import Vuex from 'vuex'

import carro from './modules/carro'
import clientes from './modules/clientes'
import endereco from './modules/endereco'
import tabelapreco from './modules/tabelapreco'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        carro,
        clientes,
        endereco,
        tabelapreco
    }
})

export default store