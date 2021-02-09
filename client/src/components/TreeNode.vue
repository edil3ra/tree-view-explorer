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

@Options({
  props: {
    label: String,
    nodes: Array,
  }
})
export default class TreeNode extends Vue {
  label!: string
  nodes!: Array<any>
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
