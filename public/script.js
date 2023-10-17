let myVideoStream;
const socket = io("/");
const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:false,
}).then((stream)=>{
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
  
})
socket.emit('join-room',ROOM_ID)
socket.on("user-connected", () => {
    connectToNewUser();
  });
const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    videoGrid.append(video);
  };
  const connectToNewUser = () => {
   
    console.log("user id bblala")
  };