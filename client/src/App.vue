<template>
<div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { CollibraApi } from './collibraApi'
import TreeNode from './components/TreeNode.vue'
import { FETCH_NODES_TYPES, FETCH_NODES, FETCH_COLUMNS, FETCH_TABLES } from './constants'

const collibirApi = CollibraApi.getInstance()
@Options({
    components: {
        'tree-node': TreeNode
    },
    data() {
        return {
            isLoaded: false,
            nodesTypes: [],
            nodes: [],
            tables: [],
            columns: [],
        }
    },
    
    
    async beforeMount() {
        await Promise.all([
            await this.$store.dispatch(FETCH_NODES_TYPES),
            await this.$store.dispatch(FETCH_NODES),
            await this.$store.dispatch(FETCH_TABLES),
            await this.$store.dispatch(FETCH_COLUMNS),
        ])
    },

    methods: {
        getNodesTypes() {
            return collibirApi.nodesTypes.all()

        },
        
        getNodes() {
            return collibirApi.nodes.all()            
        },

        getTables() {
            return collibirApi.tables.all()            
        },

        getColumns() {
            return collibirApi.columns.all()            
        },
    },
    
    computed: {
        nodesParent() {
            return this.nodes.filter((node: any) => {
                return node.parent === null
            })
        },
        mapNodes() {
            return new Map(this.nodes.map((node: any) => {
                return [node.id, node]
            }))
        },
        mapNodesTypes() {
            return new Map(this.nodesTypes.map((nodeType: any) => {
                return [nodeType.id, nodeType]
            }))
        }
    },
})
export default class App extends Vue {}
</script>

<style>

</style>
