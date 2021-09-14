<template>
    <div v-if="!isLoaded">
        loading
    </div>
    <div v-else>
        <nav class="navbar mb-5 has-background-dark" >
            <div class="navbar-brand  ">
                <a class="navbar-item has-text-white">
                    TREE VIEWER
                </a>
            </div>
        </nav>
        
        <div class="columns">
            <div class="column p-5 has-background-light">
                <tree-menu />
            </div>
            <div class="column is-7 ml-4 has-background-light">
                <detail-node />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { FETCH_NODES_TYPES, FETCH_NODES, FETCH_COLUMNS, FETCH_TABLES, GET_NODES_PARENT } from './constants'
import { mapGetters } from 'vuex'
import TreeMenu from './components/TreeMenu.vue'
import DetailNode from './components/DetailNode.vue'


@Options({
    components: {
        'tree-menu': TreeMenu,
        'detail-node': DetailNode,
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
