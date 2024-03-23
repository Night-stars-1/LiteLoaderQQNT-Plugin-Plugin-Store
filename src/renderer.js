// src/renderer/src/main.ts
var pluginPath = LiteLoader.plugins.pluginStore.path.plugin;
async function onSettingWindowCreated() {
  document.querySelectorAll(".nav-item.liteloader").forEach((node) => {
    if (node.textContent === "\u63D2\u4EF6\u5546\u5E97") {
      node.classList.add("store");
      const htmlicon = '<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="100 -900 700 847" width="16" fill="currentColor"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg>';
      node.querySelector(".q-icon.icon").insertAdjacentHTML("afterbegin", htmlicon);
      node.addEventListener("click", async () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `local:///${pluginPath}/src/assets/css/index.css`;
        document.head.appendChild(link);
        const mainLink = document.createElement("link");
        mainLink.rel = "stylesheet";
        mainLink.href = `local:///${pluginPath}/src/assets/css/main.css`;
        document.head.appendChild(mainLink);
        const vue = document.createElement("script");
        vue.type = "module";
        vue.src = `local:///${pluginPath}/src/assets/js/main.js`;
        document.head.appendChild(vue);
      });
    }
  });
}
export {
  onSettingWindowCreated
};
