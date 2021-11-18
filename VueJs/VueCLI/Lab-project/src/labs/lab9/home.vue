<template>
  <div class="app-con">
    <div class="button">
      <ul style="list-style: none;">
        <li>
          <button xclass="uk-button updateTaskInfoTrigger recd-ctx-menu-trigger" type="button"
            v-on:click.stop="openContextMenu($event)">
            Click Me!
          </button>
        </li>
        <br />
        <br />
        <li>
          <button xclass="uk-button updateTaskInfoTrigger recd-ctx-menu-trigger" type="button"
            v-on:click.stop="openContextMenu($event)">
            Click Me!
          </button>
        </li>
        <br />
        <br />
        <li>
          <button xclass="uk-button updateTaskInfoTrigger recd-ctx-menu-trigger" type="button"
            v-on:click.stop="openContextMenu($event)">
            Click Me!
          </button>
        </li>
        <br />
        <br />
        <li>
          <button xclass="uk-button updateTaskInfoTrigger recd-ctx-menu-trigger" type="button"
            v-on:click.stop="openContextMenu($event)">
            Click Me!
          </button>
        </li>
        <br />
        <br />
        <li>
          <button xclass="uk-button updateTaskInfoTrigger recd-ctx-menu-trigger" type="button"
            v-on:click.stop="openContextMenu($event)">
            Click Me!
          </button>
        </li>
      </ul>
    </div>

    <div id="ctx_menu" class="context-menu">
      <!-- <div style="user-select: none;display: flex;gap: 0px;flex-direction: column;"> -->
      <div id="menu_container" class="menu_container">
        <div id="menu_slider" class="menu_slider">
          <div id="menu" class="menu menu_fixed_height">
            <div>
              <span style="padding-left: 20%;">TaskOne</span>
            </div>
            <div>
              <span style="padding-left: 20%; padding-top: 50px;">TaskTwo</span>
            </div>
            <div>
              <span style="padding-left: 20%; padding-top: 50px;">TaskThree</span>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },

    methods: {
      openContextMenu(evt) {
        document.getElementById("ctx_menu").style.top = "20px";
        if (!document.getElementById("ctx_menu").classList.contains("opened")) {
          // document.getElementById("ctx_menu_" + msgId).style.display = "grid";
          document.getElementById("ctx_menu").style.transform = "scale(1)";
          document.getElementById("ctx_menu").classList.add("opened");
        } else {
          // document.getElementById("ctx_menu_" + msgId).style.display = "none";
          document.getElementById("ctx_menu").style.transform = null;
          document.getElementById("ctx_menu").classList.remove("opened");
        }
        console.log(evt);
        const contextMenu = document.querySelector("#ctx_menu");
        const position = {
          x: evt.clientX,
          y: evt.clientY + 10
        };
        contextMenu.style.left = position.x - 0 + "px";
        contextMenu.style.top = position.y + "px";
      }
    }
  };

</script>

<style scoped>
  .opened {
    opacity: 1;
  }

  .context-menu {
    display: none;
    position: fixed;
    right: 0px;
    top: 10px;
    background-color: #ffffff;
    border: 1px solid #cecece;
    border: 1px solid #cecece;
    border-radius: 3px;
    padding: 10px;
    z-index: 2;
    color: #6b6b6b;
    display: grid;
    right: 0px;
    transform-origin: left top;
    opacity: 1;
    transform: scale(0);
    transition: 0.125s linear;
    min-width: 20px;
    font-size: 0.75rem;
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px 0px;
    width: 200px;
  }
  .menu_container {
    position: relative;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .menu>div,
  .submenu>div>div {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .menu>div:hover,
  .submenu>div>div:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }

  .menu_container ul {
    list-style: none;
  }

  .menu_container li {
    line-height: 25px;
    list-style: none;
  }

  .list-item-menu {
    transition: 0.25s linear;
    background-color: rgb(243 243 243);
    border-radius: 50%;
    padding: 5px;
    transform-origin: 50% 50%;
    z-index: 100000;
  }

  .list-item-menu:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }

</style>
