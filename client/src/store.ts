import { CollibraApi } from "./collibraApi"
import { InjectionKey } from "vue"
import { createStore, Store } from "vuex"
import {
    SET_COLUMNS,
    SET_NODES,
    SET_NODES_TYPES,
    SET_TABLES,
    FETCH_COLUMNS,
    FETCH_NODES,
    FETCH_NODES_TYPES,
    FETCH_TABLES,
} from './constants'

import {
    FetchedColumn,
    FetchedNode,
    FetchedNodeType,
    FetchedTable,
    NodeType,
    Node,
} from './models'
import { fromServerToClient } from "./helpers"

const collibirApi = CollibraApi.getInstance()



export type FetchedNodeTypes = {
    id: number,
    node_type_name: string,
}

export interface State {
    nodesTypes: Array<any>;
    nodes: Array<any>;
    tables: Array<any>;
    columns: Array<any>;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();



export const store = createStore<State>({
    state: {
        nodesTypes: [],
        nodes: [],
        tables: [],
        columns: []
    },
    actions: {
        async [FETCH_NODES_TYPES]({ commit }) {
            commit(SET_NODES_TYPES, await collibirApi.nodesTypes.all())
        },
        async [FETCH_NODES]({ commit }) {
            commit(SET_NODES, await collibirApi.nodes.all())
        },
        async [FETCH_TABLES]({ commit }) {
            commit(SET_TABLES, await collibirApi.tables.all())
        },
        async [FETCH_COLUMNS]({ commit }) {
            commit(SET_COLUMNS, await collibirApi.columns.all())
        }
    },
    mutations: {
        [SET_NODES_TYPES](state: State, payload: Array<FetchedNodeType>) {
            state.nodesTypes = payload.map((nodeType) => fromServerToClient.nodeType(nodeType))
        },
        [SET_NODES](state: State, payload: Array<FetchedNode>) {
            state.nodes = payload.map((node) => fromServerToClient.node(node))
        },
        [SET_TABLES](state: State, payload: Array<FetchedTable>) {
            state.tables = payload.map((table) => fromServerToClient.table(table))
        },
        [SET_COLUMNS](state: State, payload: Array<FetchedColumn> ) {
            state.columns = payload.map((column) => fromServerToClient.column(column))
        }
    },
    getters: {
        nodesParent(state: State) {
            return state.nodes.filter((node: Node) => {
                return node.idParent === null
            })
        },
        mapNodes(state: State) {
            return new Map(state.nodes.map((node: Node) => {
                return [node.id, node]
            }))
        },
        mapNodesTypes(state: State) {
            return new Map(state.nodesTypes.map((nodeType: NodeType) => {
                return [nodeType.id, nodeType]
            }))
        }
    }
})
