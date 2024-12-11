<template>
  <div id="app">
    <MenuBar @createDict="createDict" @loadFile="loadFile" @saveFile="saveFile" />
    <div class="container">
      <TreeView :dict="dict" @selectKey="selectKey" />
      <KeyValueEditor :selectedKey="selectedKey" :dict="dict" @updateDict="updateDict" />
      <KeyCreator @addKey="addKey" />
      <NestedKeyCreator @createNestedKey="createNestedKey" />
    </div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import TreeView from './components/TreeView.vue';
import KeyValueEditor from './components/KeyValueEditor.vue';
import KeyCreator from './components/KeyCreator.vue';
import NestedKeyCreator from './components/NestedKeyCreator.vue';
import { loadFile, saveFile } from './utils/fileUtils';
import { createKey, editKey, deleteKey } from './utils/dictUtils';

export default {
  name: 'App',
  components: {
    MenuBar,
    TreeView,
    KeyValueEditor,
    KeyCreator,
    NestedKeyCreator
  },
  data() {
    return {
      dict: {},
      selectedKey: null
    };
  },
  methods: {
    selectKey(key) {
      this.selectedKey = key;
    },
    updateDict(newDict) {
      this.dict = newDict;
    },
    addKey({ key, value }) {
      this.dict = { ...this.dict, [key]: value };
    },
    createNestedKey(nestedKey) {
      this.dict = createKey(this.dict, nestedKey, '');
    },
    createDict() {
      this.dict = {};
    },
    loadFile(content) {
      const fileType = content.trim().startsWith('{') ? 'json' : 'yaml';
      this.dict = loadFile(content, fileType);
    },
    saveFile() {
      const fileType = 'json'; // or 'yaml', depending on your preference
      const content = saveFile(this.dict, fileType);
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `dict.${fileType}`;
      link.click();
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.container {
  display: flex;
  flex: 1;
}

.container > * {
  flex: 1;
  padding: 10px;
}
</style>
