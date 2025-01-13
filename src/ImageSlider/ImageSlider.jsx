import React, { useEffect, useState } from 'react'

const ImageSlider = () => {

    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json(); // No arguments needed here
          })
          .then((data) => setImages(data)) // Use the parsed JSON data
          .catch((error) => console.error("Fetch error:", error));
      }, []);
      

    const nextImage = () => {
        setCurrentIndex((prevIndex)=>(prevIndex+1)%images.length)
    }
    const prevImages = () => {
        setCurrentIndex((prevIndex)=>
        prevIndex === 0 ? images.length -1 : prevIndex -1)
    }
    if(images.length  === 0){
        return <p>loading images...</p>
    }
  return (
    <div>
        <button onClick={nextImage}>next</button>
        <img src={images[currentIndex].url}
        alt={images[currentIndex].tittle} />
        <button onClick={prevImages}>prev</button>
        <p>{images[currentIndex].tittle}</p>
    </div>
  )
}

export default ImageSlider