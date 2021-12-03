import Endereco from '@/services/endereco'
import * as types from './mutation-types'

export const getEndereco = async ({ commit }) => {
    const request = await Endereco.getEndereco()
    commit(types.GET_ENDERECO, request.data.endereco)
}
export const setEndereco = async (_content, data) => {
    console.log('vuex')
    return Endereco.setEndereco(data)
}