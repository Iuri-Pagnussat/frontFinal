import * as types from './mutation-types'

export default {
    [types.GET_CARRO] (state, payload) {
        state.carro = payload
    }
}