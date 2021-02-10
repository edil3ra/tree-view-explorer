<template>
    <li class="tree-menu">
        <a @click.prevent="() => hidden = !hidden">
            <i class="fas fa-folder-open"></i>
            {{ node.name }}
        </a>
        <template v-if="node.children.length > 0">
            <ul class="menu-list"
                :class="{'is-hidden': hidden}">
                <tree-node
                    v-for="child in getNodeFromIds"
                    :key="child.id"
                    :node="child"
                    />
            </ul>
        </template>
        <template v-if="node.tables.length > 0">
            <ul class="menu-list"
                :class="{'is-hidden': hidden}">
                <tree-table
                    v-for="table in getTableFromIds"
                    :key="table.id"
                    :table="table"
                    />
            </ul>
        </template>
    </li>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { mapGetters } from "vuex"
import { GET_MAP_NODES_TYPES, GET_MAP_NODES, GET_MAP_TABLES } from "../constants"
import { Node, Table } from '../models'
import TreeTable from './TreeTable.vue'


@Options({
    components: {
        'tree-table': TreeTable,
    },
    props: {
        node: Node,
        level: Number
    },
    data() {
        return {
            hidden: true
        }
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
        // console.log(this.getNodeFromIds)
        // console.log(this.getTableFromIds)
        // console.log(this.mapNodes)
    },
})
export default class TreeNode extends Vue {
    node!: Node
    level!: number
}
</script>


<style scoped></style>
