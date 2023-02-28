let videos = [
  "https://www.youtube.com/embed/psEN4PHRjLM?&autoplay=1",
  "https://www.youtube.com/embed/NRQRC_0ZQ00?&autoplay=1",
  "https://www.youtube.com/embed/8Rq6dVpEUS4?&autoplay=1",
  "https://www.youtube.com/embed/LfbsI3lAmk4?&autoplay=1",
  "https://www.youtube.com/embed/Uux4nEufkNY?&autoplay=1",
  "https://www.youtube.com/embed/Tk4MbE4lyRM?&autoplay=1",
  "https://www.youtube.com/embed/5kNcWhjWrJQ?&autoplay=1",
  "https://www.youtube.com/embed/RXsJuQWX1mE?&autoplay=1",
  "https://www.youtube.com/embed/JzMFzMQ3hqc?&autoplay=1",
  "https://www.youtube.com/embed/7MRNWxCuIrI?&autoplay=1",
  "https://www.youtube.com/embed/RvfyN2NwnEE?&autoplay=1",
  "https://www.youtube.com/embed/kv4UD4ICd_0?&autoplay=1",
];

function changeVideo() {
  var video = document.getElementById("video");
  video.src = videos[rng(0, 11)];
  video.console.log("Video changed");
}

function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
