//socket in the clients will connect to our root path
const socket = io("/");

socket.emit("join-room", ROOM_ID, 10);

socket.on("user-connected", (userId) => {
  console.log("user connectd" + userId);
});
