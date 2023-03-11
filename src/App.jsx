import "./App.css";
import Activites from "./components/Activites/Activites";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import rafting from "../src/assets/images/rafting.jpg";
import hiking from "../src/assets/images/hiking.jpg";
import biking from "../src/assets/images/biking.jpg";
import gallery_image1 from "../src/assets/images/gallery_image1.jpg";
import gallery_image2 from "../src/assets/images/gallery_image2.jpg";
import gallery_image3 from "../src/assets/images/gallery_image3.jpg";
import gallery_image4 from "../src/assets/images/gallery_image4.jpg";
import gallery_image5 from "../src/assets/images/gallery_image5.jpg";
import gallery_image6 from "../src/assets/images/gallery_image6.jpg";
import gallery_image7 from "../src/assets/images/gallery_image7.jpg";
import gallery_image8 from "../src/assets/images/gallery_image8.jpg";


import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  let activites = [
    {
      id: 0,
      name: "Hiking",
      image: hiking,
      description: "Hiking is a perfect blend of exercise, adventure, and relaxation. It lets you explore nature, disconnect from daily life, and improve your health. So, grab your gear and hit the trails!",
    },
    {
      id: 1,
      name: "Biking",
      image: biking,
      description: "Biking is a great way to exercise, explore, and enjoy the outdoors. It's low-impact, improves fitness and cardiovascular health, and can be a fun social activity.",
    },
    {
      id: 2,
      name: "Rafting",
      image: rafting,
      description: "Rafting is an exciting outdoor activity that involves navigating through rough waters on an inflatable raft. It requires teamwork and communication, making it a great bonding experience for families and friends. Rafting is a thrilling adventure that offers a unique and unforgettable experience.",
    },
  ];

  let images = [
    {
      id: 0,
      src: gallery_image1,
    },
    {
      id: 1,
      src: gallery_image2,
    },
    {
      id: 2,
      src: gallery_image3,
    },
    {
      id: 3,
      src: gallery_image4,
    },
    {
      id: 4,
      src: gallery_image5,
    },
    {
      id: 5,
      src: gallery_image6,
    },
    {
      id: 6,
      src: gallery_image7,
    },
    {
      id: 7,
      src: gallery_image8,
    },
  ];

  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Activites activites={activites} />
      <Gallery images={images} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
