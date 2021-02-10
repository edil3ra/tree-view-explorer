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
    GET_MAP_NODES,
    GET_MAP_NODES_TYPES,
    GET_NODES_PARENT,
    GET_MAP_TABLES,
    GET_MAP_COLUMNS,
    SELECT_ITEM,
    SET_SELECTED_ITEM
} from './constants'

import {
    FetchedColumn,
    FetchedNode,
    FetchedNodeType,
    FetchedTable,
    NodeType,
    Node,
    Table,
    Column,
    Item,
} from './models'
import { fromServerToClient } from "./helpers"

const collibirApi = CollibraApi.getInstance()



export type FetchedNodeTypes = {
    id: number,
    node_type_name: string,
}

export interface State {
    selectedItem: Item | null
    nodesTypes: Array<NodeType>
    nodes: Array<Node>
    tables: Array<Table>
    columns: Array<Column>
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();



export const store = createStore<State>({
    state: {
        selectedItem: null,
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
        },
        [SELECT_ITEM]({ commit}, payload: Item) {
            commit(SET_SELECTED_ITEM, payload)
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
        },
        [SET_SELECTED_ITEM](state: State, payload: Item ) {
            state.selectedItem = payload
        }
    },
    getters: {
        [GET_NODES_PARENT](state: State) {
            return state.nodes.filter((node: Node) => {
                return node.idParent === null
            })
        },
        [GET_MAP_NODES](state: State) {
            return new Map(state.nodes.map((node: Node) => {
                return [node.id, node]
            }))
        },
        [GET_MAP_TABLES](state: State) {
            return new Map(state.tables.map((table: Table) => {
                return [table.id, table]
            }))
        },
        [GET_MAP_COLUMNS](state: State) {
            return new Map(state.columns.map((column: Column) => {
                return [column.id, column]
            }))
        },
        [GET_MAP_NODES_TYPES](state: State) {
            return new Map(state.nodesTypes.map((nodeType: NodeType) => {
                return [nodeType.id, nodeType]
            }))
        }
    }
})
