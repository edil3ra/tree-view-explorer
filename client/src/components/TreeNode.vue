<template>
    <div class="tree-menu">
        <div :style="indent">
            {{ label }}
        </div>
        <template v-if="nodes.children.length > 0">
            <tree-menu
                v-for="node in nodes.children"
                :key="node.id"
                :label="node.name"
                :nodes="node.children"
                />
        </template>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { mapGetters } from "vuex"
import { GET_MAP_NODES_TYPES, GET_MAP_NODES } from "../constants"

@Options({
    props: {
        label: String,
        nodes: Array,
    },
    computed: {
        ...mapGetters({
            mapNodes: GET_MAP_NODES,
            mapNodesTypes: GET_MAP_NODES_TYPES,
        })
    },
})
export default class TreeNode extends Vue {
    label!: string
    nodes!: Array<any>    
}
</script>


<style scoped></style>
