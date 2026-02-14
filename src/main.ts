const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <h1>Hello TypeScripT!</h1>
    <p>The current time is: <strong>${new Date().toLocaleTimeString()}</strong></p>
    <p>Status: <span style="color: green;">Deployment Successful</span></p>
  `;
}

console.log("TypeScript is running successfully!");
