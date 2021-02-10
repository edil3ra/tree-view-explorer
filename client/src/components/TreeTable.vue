<template>
    <div>
        <div v-for="column in table">
            
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { mapGetters } from "vuex"
import { GET_MAP_NODES_TYPES, GET_MAP_NODES } from "../constants"
import { Table } from '../models'

@Options({
    props: {
        table: Object
    },
    computed: {
        ...mapGetters({
            mapNodes: GET_MAP_NODES,
            mapNodesTypes: GET_MAP_NODES_TYPES,
        })
    },
})
export default class TreeNode extends Vue {
    table: Table
}
</script>


<style scoped></style>
