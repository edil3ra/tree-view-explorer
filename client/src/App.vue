<template>
    <div>
        Semper viverra nam libero justo, laoreet sit amet cursus sit amet, dictum sit amet justo donec? Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque!
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { CollibraApi } from './collibraApi'

const collibirApi = CollibraApi.getInstance()
console.log(collibirApi)
@Options({
    components: {
        
    },
    
    beforeMount() {
        const result = this.getAllNodes()
        console.log(result)
    },

    methods: {
        getAllNodes() {
            return collibirApi.nodes.all()            
        }
    }
})
export default class App extends Vue {}
</script>

<style>

</style>
