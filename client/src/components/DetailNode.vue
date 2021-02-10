<template>
    <div>
        <p>Detail</p>
    </div>
</template>

<script lang="ts">


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
export default class DetailNode extends Vue {}
</script>

<style>

</style>
