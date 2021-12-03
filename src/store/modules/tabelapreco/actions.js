import Tabelapreco from '@/services/tabelapreco'
import * as types from './mutation-types'

export const getTabelapreco = async ({ commit }) => {
    const request = await Tabelapreco.getTabelapreco()
    commit(types.GET_TABELAPRECO, request.data.tabelapreco)
}
export const setTabelapreco = async (_content, data) => {
    console.log('vuex')
    return Tabelapreco.setTabelapreco(data)
}