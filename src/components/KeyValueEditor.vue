<template>
  <div class="key-value-editor">
    <div v-if="selectedKey">
      <h3>Editing: {{ selectedKey }}</h3>
      <input v-model="value" @input="updateValue" />
      <button @click="deleteKey">Delete Key</button>
    </div>
    <div v-else>
      <h3>Select a key to edit</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeyValueEditor',
  props: {
    selectedKey: {
      type: String,
      required: false
    },
    dict: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value: this.selectedKey ? this.dict[this.selectedKey] : ''
    };
  },
  watch: {
    selectedKey(newKey) {
      this.value = newKey ? this.dict[newKey] : '';
    }
  },
  methods: {
    updateValue() {
      this.$emit('updateDict', { ...this.dict, [this.selectedKey]: this.value });
    },
    deleteKey() {
      const newDict = { ...this.dict };
      delete newDict[this.selectedKey];
      this.$emit('updateDict', newDict);
    }
  }
};
</script>

<style>
.key-value-editor {
  border: 1px solid #ccc;
  padding: 10px;
}

.key-value-editor input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.key-value-editor button {
  padding: 5px 10px;
}
</style>
