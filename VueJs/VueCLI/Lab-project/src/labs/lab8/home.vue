<!--this lab is for drag and drop a file or image to the web site-->
<template>
  <div class="app-con">
    <div id="drop-zone"
      v-on:dragover.prevent="handleDragOver"
      v-on:drop.prevent="handleDrop($event)"
      v-on:dragleave.prevent="handleDragLeave"
      class="upload-body-dragged"
    >
      Drop your files here
    </div>

    <div class="upload-footer">
      <div v-if="status.dropped">
        <!-- Display the information related to the file -->
        <p class="upload-footer-file-name">{{ file.name }}</p>
        <p class="upload-footer-file-size">Size: {{ file.size }} kb</p>
        <i class="fas fa-folder-plus"></i>
      </div>
      <button class="upload-footer-button">{{ "Upload" }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Create a property that holds the file information
      file: {
        name: "",
        size: ""
      },
      // Add the drag and drop status as an object
      status: {
        over: false,
        dropped: false
      }
    };
  },

  methods: {
    handleDragOver() {
      this.status.over = true;
      document.querySelector("#drop-zone").classList.add("drop-zone-hovered");
    },
    handleDrop(evt) {
      console.log(evt.dataTransfer.items[0].getAsFile().name);
      console.log(evt);
      this.status.dropped = true;
      this.status.over = false;
      const fileItem = evt.dataTransfer.items[0].getAsFile();
      this.file = {
        name: fileItem.name,
        size: (fileItem.size / 1000).toFixed(2)
      };
    },
    handleDragLeave() {
      this.status.over = false;
      document.querySelector("#drop-zone").classList.remove("drop-zone-hovered");
    }
    //Stream the file to a server
  }
};
</script>

<style scoped>
.upload-body-dragged {
  margin-top: 10%;
  color: black;
  padding: 30%;
  padding-left: 40%;
  width: 100px;
  height: 10px;
}
.app-con {
  margin-left: 30%;
  color: #fff;
  background-color: #b6d1ec;
  width: 450px;
  height: 350px;
  text-align: center;
  margin-top: 10%;
}
.upload-footer-button {
  margin-top: 30%;
}
.upload-footer-file-name {
  color: black;
}
.upload-footer-file-size {
  color: black;
}
.drop-zone-hovered {
  background-color: yellow;
}
</style>
