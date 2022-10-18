console.log(process.argv);
let b = Buffer.from([0x41, 0x42, 0x43]); // <Buffer 41 42 43>
console.log(b.toString()); // => "ABC"; default "utf8"
console.log(b.toString("hex")); // => "414243"
let computer = Buffer.from("IBM3111", "ascii"); // Convert string to Buffer
for (let i = 0; i < computer.length; i++) { // Use Buffer as byte array
    computer[i]--; // Buffers are mutable
}
console.log(computer.toString("ascii"));
// => "HAL2000"
computer.subarray(0, 3).map(x => x + 1).toString() // => "IBM"
// Create new "empty" buffers with Buffer.alloc()
let zeros = Buffer.alloc(1024); // 1024 zeros
let ones = Buffer.alloc(128, 1); // 128 ones
let dead = Buffer.alloc(1024, "DEADBEEF", "hex"); // Repeating pattern of bytes
// Buffers have methods for reading and writing multi-byte values
// from and to a buffer at any specified offset.
dead.readUInt32BE(0) // => 0xDEADBEEF
dead.readUInt32BE(1) // => 0xADBEEFDE
dead.readBigUInt64BE(6) // => 0xBEEFDEADBEEFDEADn
dead.readUInt32LE(1020) // => 0xEFBEADDE


