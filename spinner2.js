const spinArr = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
for (let i = 0; i < spinArr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinArr[i]}   `);
  }, i * 300);
}

setTimeout(() => {
  process.stdout.write('\n');
}, (spinArr.length - 1) * 300);