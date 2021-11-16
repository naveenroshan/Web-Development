<template>
  <div class="app-con">
    <div>
      <button xclass="uk-button updateTaskInfoTrigger recd-ctx-menu-trigger" type="button"
        v-on:click.stop="openContextMenu($event)">Click Me!</button>
    </div>

    <div id="ctx_menu" class="context-menu">
      <div style="user-select: none;display: flex;gap: 0px;flex-direction: column;">
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
      </div>
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
        document.getElementById("ctx_menu").style.top = '10px';
        if (!document.getElementById("ctx_menu").classList.contains('opened')) {
          // document.getElementById("ctx_menu_" + msgId).style.display = "grid";
          document.getElementById("ctx_menu").style.transform = 'scale(1)';
          document.getElementById("ctx_menu").classList.add('opened');
        } else {
          // document.getElementById("ctx_menu_" + msgId).style.display = "none";
          document.getElementById("ctx_menu").style.transform = null;
          document.getElementById("ctx_menu").classList.remove('opened');
        }
      }
    }
  };

</script>

<style scoped>
  .scaleZero {
    transform: scale(0);
  }

  .updateTaskInfoTrigger {
    background: rgb(243 243 243);
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;
    line-height: 0px;
  }

  .updateTaskInfoTrigger:hover {
    background: #e4e4e4;
  }

  .opened {
    opacity: 1;
  }
  .context-menu {
    display: none;
    position: relative;
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
  }


  .context-menu>div>div {
    padding: 5px;
    border-radius: 1px;
  }

  /* Context sliding menu */

  .menu_container {
    position: relative;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .menu_slider {
    position: absolute;
    display: flex;
    flex-direction: row;
    left: 0px;
    transition: 0.25s linear;
    width: 100%;
    box-sizing: border-box;
  }

  .menu {
    xbackground: yellow;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    border: 0px solid red;
    box-sizing: border-box;
  }

  .submenu {
    xbackground: greenyellow;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    border: 0px solid black;
    box-sizing: border-box;
    padding-top: 10px;
  }

  .menu_fixed_height {
    height: 250px;
    overflow-y: auto;
  }

  .submenu_container {
    display: flex;
    flex-direction: column;
    min-width: 100%;
  }

  .submenu_category {
    display: flex;
    flex-direction: column;
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
