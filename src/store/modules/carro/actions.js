import Carro from '@/services/carro'
import * as types from './mutation-types'

export const getCarro = async ({ commit }) => {
    const request = await Carro.getCarro()
    commit(types.GET_CARRO, request.data.carro)
}
export const setCarro = async (_content, data) => {
    console.log('vuex')
    return Carro.setCarro(data)
}