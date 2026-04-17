import React from 'react'
import './App.css'
import Header from './header'
import Card from './card'
import Footer from './footer'

export default function App() {
  return (
       <div>
      <Header/>

      <main>
        <div className="cover-img">
          <h3>WELCOME TO NITESH MOBILE</h3>
        <img src="cover.webp" alt="Cover Image 1" />
        <h2>EXPLORE YOUR CAREGORY</h2>
        <img src="cover2.webp" alt="Cover Image 2" />
        <img src="cover3.webp" alt="Cover Image 3" />
        <img src="cover4.webp" alt="Cover Image 4" />
        <img src="cover5.webp" alt="Cover Image 5" />
        </div>
        <div className="cards">
           <h2 className='collection'>TREANDING COLLECTION</h2>
        <div className="card-collection">
          <Card imgsrc="src/assets/mcover1.webp" name="Radha Krishna Beautiful Eyes Glossy Metal TPU Mobile Back Cover D029" price="$199.00"/>
          <Card imgsrc="src/assets/mcover2.webp" name="Radha Krishna With Shlock Glosssy Metal TPU Mobile Back Cover D063" price="$199.00"/>  
          <Card imgsrc="src/assets/mcover3.webp" name="Aesthetic Starry Night Glosssy Metal TPU Mobile Back Cover D001" price="$199.00"/>  
          <Card imgsrc="src/assets/mcover4.webp" name="Aesthetic Galaxy Glossy Metal TPU Mobile Back Cover D002" price="$199.00"/>  
          <Card imgsrc="src/assets/pcover6.webp" name="Think Different Quote Mouse Pad D055" price="$199.00"/>  
          <Card imgsrc="src/assets/pcover7.webp" name="Anime Mouse Pad D068" price="$199.00"/>  
          <Card imgsrc="src/assets/mcover8.webp" name="Rohit Sharma Glossy Metal TPU Mobile Back Cover" price="$199.00"/>  
          <Card imgsrc="src/assets/mcover9.webp" name="Rohit Sharma Metal TPU Mobile Back Cover" price="$199.00"/>  
          <Card imgsrc="src/assets/mcover10.webp" name="Virat Kohli Glossy Metal TPU Mobile Back Cover" price="$199.00"/>  
          <Card imgsrc="src/assets/mcover11.webp" name="Virat Kohli Collage Metal TPU Mobile Back Cover" price="$199.00"/>  
          <Card  className="card12" imgsrc="src/assets/mcover12.jpg" name="MS Dhoni Glossy Metal TPU Mobile Back Cover" price="$199.00"/> 
          <div/>  
        </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}