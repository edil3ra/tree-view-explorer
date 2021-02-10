<template>
    <li>
        <a @click.prevent="() => handleTableClicked(table)"
           :class="{'is-active': isTableSelected(table)}">
            <i class="fas fa-table"></i>
            {{ table.name }}
        </a>
    </li>
    <ul>
        <li v-for="column in getColumnFromIds"
            :key="column.id">
            <a @click.prevent="() => handleColumnClicked(column)"
               :class="{'is-active': isColumnSelected(column)}">
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
        handleTableClicked(table: Table) {
            this.$store.dispatch(SELECT_ITEM, {
                id: table.id,
                category: 'table',
                name: table.name,
                description: table.description,
            })
        },
        handleColumnClicked(column: Column) {
            this.$store.dispatch(SELECT_ITEM, {
                id: column.id,
                category: 'column',
                name: column.name,
                description: column.description,
            })
        },

        isTableSelected(table: Table): boolean {
            return this.$store.state.selectedItem !== null &&
                this.$store.state.selectedItem.id === table.id &&
                this.$store.state.selectedItem.category === 'table' 
        },
        
        isColumnSelected(column: Table): boolean {
            return this.$store.state.selectedItem !== null &&
                this.$store.state.selectedItem.id === column.id &&
                this.$store.state.selectedItem.category === 'column' 
        },

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
