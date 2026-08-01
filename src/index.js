const {
  sidebar,
  event,
  console,
  menu,
} = iina;

console.log("Plugin is running");



event.on("iina.window-loaded", () => {
  sidebar.loadFile("ui/sidebar/index.html");
});