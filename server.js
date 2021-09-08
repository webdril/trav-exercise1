
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

export SERVER_SPEED = 7000
const serverSpeed = process.env.SERVER_SPEED;

console.log(`The current speed of our server is ${serverSpeed}`);

main();
