<template>
  <div class="nested-key-creator">
    <div v-for="(key, index) in keys" :key="index">
      <input v-model="keys[index]" placeholder="Enter key" />
      <button @click="removeKey(index)">Remove</button>
    </div>
    <button @click="addKey">Add Key</button>
    <button @click="createNestedKey">Create Nested Key</button>
  </div>
</template>

<script>
export default {
  name: 'NestedKeyCreator',
  data() {
    return {
      keys: ['']
    };
  },
  methods: {
    addKey() {
      this.keys.push('');
    },
    removeKey(index) {
      this.keys.splice(index, 1);
    },
    createNestedKey() {
      const nestedKey = this.keys.join('.');
      this.$emit('createNestedKey', nestedKey);
      this.keys = [''];
    }
  }
};
</script>

<style>
.nested-key-creator {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}

.nested-key-creator input {
  width: calc(50% - 10px);
  padding: 5px;
  margin-right: 10px;
}

.nested-key-creator button {
  padding: 5px 10px;
  margin-right: 10px;
}
</style>
