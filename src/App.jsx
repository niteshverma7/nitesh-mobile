import React from 'react'
import './App.css'
import Header from './header'
import Card from './card'
import Footer from './footer'
import cover from './assets/cover.webp'
import cover2 from './assets/cover2.webp'
import cover3 from './assets/cover3.webp'
import cover4 from './assets/cover4.webp'
import cover5 from './assets/cover5.webp'
import mcover1 from './assets/mcover1.webp'
import mcover2 from './assets/mcover2.webp'
import mcover3 from './assets/mcover3.webp'
import mcover4 from './assets/mcover4.webp'
import pcover6 from './assets/pcover6.webp'
import pcover7 from './assets/pcover7.webp'
import mcover8 from './assets/mcover8.webp'
import mcover9 from './assets/mcover9.webp'
import mcover10 from './assets/mcover10.webp'
import mcover11 from './assets/mcover11.webp'
import mcover12 from './assets/mcover12.jpg'


export default function App() {
  return (
       <div>
      <Header/>

      <main>
        <div className="cover-img">
          <h3>WELCOME TO NITESH MOBILE</h3>
        <img src={cover} alt="Cover Image 1" />
        <h2>EXPLORE YOUR CAREGORY</h2>
        <img src={cover2} alt="Cover Image 2" />
        <img src={cover3} alt="Cover Image 3" />
        <img src={cover4} alt="Cover Image 4" />
        <img src={cover5} alt="Cover Image 5" />
        </div>
        <div className="cards">
           <h2 className='collection'>TREANDING COLLECTION</h2>
        <div className="card-collection">
          <Card imgsrc={mcover1} name="Radha Krishna Beautiful Eyes Glossy Metal TPU Mobile Back Cover D029" price="$199.00"/>
          <Card imgsrc={mcover2} name="Radha Krishna With Shlock Glosssy Metal TPU Mobile Back Cover D063" price="$199.00"/>  
          <Card imgsrc={mcover3} name="Aesthetic Starry Night Glosssy Metal TPU Mobile Back Cover D001" price="$199.00"/>  
          <Card imgsrc={mcover4} name="Aesthetic Galaxy Glossy Metal TPU Mobile Back Cover D002" price="$199.00"/>  
          <Card imgsrc={pcover6} name="Think Different Quote Mouse Pad D055" price="$199.00"/>  
          <Card imgsrc={pcover7} name="Anime Mouse Pad D068" price="$199.00"/>  
          <Card imgsrc={mcover8} name="Rohit Sharma Glossy Metal TPU Mobile Back Cover" price="$199.00"/>  
          <Card imgsrc={mcover9} name="Rohit Sharma Metal TPU Mobile Back Cover" price="$199.00"/>  
          <Card imgsrc={mcover10} name="Virat Kohli Glossy Metal TPU Mobile Back Cover" price="$199.00"/>  
          <Card imgsrc={mcover11} name="Virat Kohli Collage Metal TPU Mobile Back Cover" price="$199.00"/>  
          <Card  className="card12" imgsrc={mcover12} name="MS Dhoni Glossy Metal TPU Mobile Back Cover" price="$199.00"/> 
          <div/>  
        </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}