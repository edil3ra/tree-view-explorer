<template>
    <div v-if="!isLoaded">
        loading
    </div>
    <div v-else>
        <tree-menu />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { FETCH_NODES_TYPES, FETCH_NODES, FETCH_COLUMNS, FETCH_TABLES, GET_NODES_PARENT } from './constants'
import { mapGetters } from 'vuex'
import TreeMenu from './components/TreeMenu.vue'


@Options({
    components: {
        'tree-menu': TreeMenu
    },
    data() {
        return {
            isLoaded: false,
        }
    },
    
    
    async beforeMount() {
        this.isLoaded = await Promise.all([
            await this.$store.dispatch(FETCH_NODES_TYPES),
            await this.$store.dispatch(FETCH_NODES),
            await this.$store.dispatch(FETCH_TABLES),
            await this.$store.dispatch(FETCH_COLUMNS),
        ])
    },

    computed: {
        ...mapGetters({
            nodesParent: GET_NODES_PARENT
        })
    },
})
export default class App extends Vue {}
</script>

<style>

</style>
