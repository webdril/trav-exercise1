const serverSpeed = process.env.SERVER_SPEED;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`The current speed of our server is ${serverSpeed}`);
    await sleep(5000);
  }
}



main();
