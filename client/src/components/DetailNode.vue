<template>
    <div >
        <div v-if="!this.$store.state.selectedItem">
            <p>No Item selected</p>
        </div>
        <div v-else>
            <h2 class="title">{{ this.$store.state.selectedItem.name }}</h2>
            <p>{{ this.$store.state.selectedItem.description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    
})
export default class DetailNode extends Vue {}
</script>

<style>

</style>
