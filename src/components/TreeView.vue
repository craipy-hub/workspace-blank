<template>
  <div class="tree-view">
    <ul>
      <li v-for="(value, key) in dict" :key="key">
        <span @click="selectKey(key)">{{ key }}</span>
        <TreeView v-if="typeof value === 'object'" :dict="value" @selectKey="selectKey" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TreeView',
  props: {
    dict: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectKey(key) {
      this.$emit('selectKey', key);
    }
  }
};
</script>

<style>
.tree-view {
  border: 1px solid #ccc;
  padding: 10px;
  overflow-y: auto;
}

.tree-view ul {
  list-style-type: none;
  padding-left: 20px;
}

.tree-view li {
  cursor: pointer;
  margin: 5px 0;
}
</style>
