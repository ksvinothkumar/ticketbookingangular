<template>
  <div class="popup">
    <div class="header">Auto Apply<span class="close-icon" @click="closePopup">&#10005;</span></div>
    <hr class="header-line">
    <div class="content">
      <h3>Settings:</h3>
      <ul>
        <li style="color: black;">
          <i class="fas fa-check" style="color: green;"></i> Option 1
        </li>
        <li style="color: black;">
          <i class="fas fa-check" style="color: green;"></i> Option 2
        </li>
        <li style="color: black;">
          <i class="fas fa-check" style="color: green;"></i> Option 3
        </li>
      </ul>
    </div>
    <div class="footer">
      <button class="close-btn" @click="closePopup">Close</button>
      <button class="setting-btn" @click="viewSettings">View Settings</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      // Close popup logic
    },
    viewSettings() {
      // View settings logic
    }
  }
}
</script>

<style scoped>
.popup {
  width: 300px; /* Adjust width as needed */
  background-color: white;
  border: 1px solid purple;
  border-radius: 5px;
  padding: 20px;
}

.header {
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  position: relative; /* to make close-icon positioning relative to header */
}

.header-line {
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
}

.close-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.content {
  margin-bottom: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.close-btn, .setting-btn {
  flex: 1;
  padding: 10px 20px;
  border: 1px solid purple;
  background-color: transparent;
  color: purple;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
}

.setting-btn {
  background-color: purple;
  color: white;
}

.close-btn:hover, .setting-btn:hover {
  background-color: purple;
  color: white;
}
</style>
