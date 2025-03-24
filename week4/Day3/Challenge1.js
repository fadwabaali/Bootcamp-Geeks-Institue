// Define the Video class
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
  }
  
  // Create two Video instances and call watch() method
  const video1 = new Video("js", "dev", 600);
  const video2 = new Video("Python", "john", 1200);
  
  video1.watch();
  video2.watch();
  
  // Bonus: Store data for five Video instances in an array
  const videoData = [
    { title: "HTML", uploader: "John", time: 300 },
    { title: "CSS", uploader: "fadwa", time: 450 },
    { title: "React", uploader: "Michael", time: 700 },
    { title: "Node", uploader: "noone", time: 900 },
    { title: "Full-Stack MERN App", uploader: "David", time: 1500 }
  ];
  
  // Loop through the array to instantiate Video objects
  const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));
  
  // Call watch() for each instance
  videos.forEach(video => video.watch());
  