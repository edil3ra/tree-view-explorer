<template>
    <li>
        <a @click.prevent="() => handleItemClicked(table)">
            <i class="fas fa-table"></i>
            {{ table.name }}
        </a>
    </li>
    <ul>
        <li v-for="column in getColumnFromIds"
            :key="column.id">
            <a @click.prevent="() => handleItemClicked(column)">
                <i class="fas fa-columns"></i>
                {{column.name}}
            </a>
        </li>
        </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { mapGetters } from "vuex"
import { GET_MAP_NODES_TYPES, GET_MAP_NODES, GET_MAP_COLUMNS, SELECT_ITEM } from "../constants"
import { Column, Item, Table } from '../models'

@Options({
    props: {
        table: Object
    },
    computed: {
        ...mapGetters({
            mapColumns: GET_MAP_COLUMNS,
        }),
        getColumnFromIds(): Array<Column> {
            return this.table.columns.map((columnId: number) => {
                return this.mapColumns.get(columnId)
            })
        },
    },
    
    methods: {
        handleItemClicked(item: Item) {
            this.$store.dispatch(SELECT_ITEM, item)
        }
    },
    
    async beforeMount() {
        // console.log(this.table)
    },



})
export default class TreeTable extends Vue {
    table!: Table
}
</script>


<style scoped></style>
