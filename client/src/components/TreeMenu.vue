<template>
    <aside class="menu">
        <p class="menu-label">instances</p>
        <ul class="menu-list">
            <tree-node
                v-for="node in nodesParent"
                :key="node.id"
                :node="node"
                />
        </ul>
    </aside>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { GET_NODES_PARENT } from '../constants'
import { mapGetters } from 'vuex'
import TreeNode from './TreeNode.vue'

@Options({
    components: {
        'tree-node': TreeNode
    },
    computed: {
        ...mapGetters({
            nodesParent: GET_NODES_PARENT
        })
    },
})
export default class TreeMenu extends Vue {}
</script>

<style>

</style>
