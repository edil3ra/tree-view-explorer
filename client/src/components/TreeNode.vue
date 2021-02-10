<template>
    <div class="tree-menu">
        <div :style="indent">
            {{ node.name }}
        </div>
        <template v-if="node.children.length > 0">
            <tree-node
                v-for="child in getNodeFromIds"
                :key="child.id"
                :node="child"
                />
        </template>

        <template v-if="node.tables.length > 0">
            <tree-table
                v-for="table in getTableFromIds"
                :key="table.id"
                :table="table"
                />
        </template>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from "vue-class-component"
import { mapGetters } from "vuex"
import { GET_MAP_NODES_TYPES, GET_MAP_NODES, GET_MAP_TABLES } from "../constants"
import { Node, Table } from '../models'

@Options({
    props: {
        node: Node,
    },
    computed: {
        ...mapGetters({
            mapNodes: GET_MAP_NODES,
            mapTables: GET_MAP_TABLES,
        }),
        getNodeFromIds(): Array<Node> {
            return this.node.children.map((nodeId: number) => {
                return this.mapNodes.get(nodeId)
            })
        },
        getTableFromIds(): Array<Table> {
            return this.node.tables.map((nodeId: number) => {
                return this.mapTables.get(nodeId)
            })
        }
    },
    
    async beforeMount() {
        console.log(this.getNodeFromIds)
        console.log(this.getTableFromIds)
        console.log(this.mapNodes)
    },
})
export default class TreeNode extends Vue {
    node!: Node
}
</script>


<style scoped></style>
