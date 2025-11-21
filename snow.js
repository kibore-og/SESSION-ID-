// Simple snow effect
const snowflakes = 100;
const body = document.body;
const {makeid} = require('./id');
for (let i = 0; i < snowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    body.appendChild(snowflake);
}

const snowflakeStyle = `
    position: absolute;
    width: 5px;
    height: 5px;
    background: white;
    border-radius: 50%;
    animation: fall linear infinite;
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerHTML = `
  .snowflake { ${snowflakeStyle} }
  @keyframes fall {
      0% { transform: translateY(0); }
      100% { transform: translateY(100vh); }
  }
`;
document.head.appendChild(wasipage.html);
