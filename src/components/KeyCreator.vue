<template>
  <div class="key-creator">
    <input v-model="newKey" placeholder="Enter new key" />
    <input v-model="newValue" placeholder="Enter new value" />
    <button @click="addKey">Add Key</button>
  </div>
</template>

<script>
export default {
  name: 'KeyCreator',
  data() {
    return {
      newKey: '',
      newValue: ''
    };
  },
  methods: {
    addKey() {
      if (this.newKey) {
        this.$emit('addKey', { key: this.newKey, value: this.newValue });
        this.newKey = '';
        this.newValue = '';
      }
    }
  }
};
</script>

<style>
.key-creator {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}

.key-creator input {
  width: calc(50% - 10px);
  padding: 5px;
  margin-right: 10px;
}

.key-creator button {
  padding: 5px 10px;
}
</style>
