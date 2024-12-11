<template>
  <div class="menu-bar">
    <button @click="createDict">Create Dict</button>
    <input type="file" @change="loadFile" />
    <button @click="saveFile">Save File</button>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  methods: {
    createDict() {
      this.$emit('createDict');
    },
    loadFile(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target.result;
          this.$emit('loadFile', content);
        };
        reader.readAsText(file);
      }
    },
    saveFile() {
      this.$emit('saveFile');
    }
  }
};
</script>

<style>
.menu-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}

.menu-bar button {
  margin-right: 10px;
}
</style>
