import React from 'react'
import './Home.css';
import './Product'
import Product from './Product';

function Home() {
    return (
        <div className = 'home'>
        <div className = 'home__container'>
        <img className = 'home__image' src = 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'  alt = ''/>
        <div className = 'home__row'>
        <Product title = 'The Lean Startup' id = {1} image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' price = {19.99} rating = {5}/>
        <Product title = 'Kenwood kMix Syand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl' id = {2} price = {239.0} rating = {4} image = 'https://m.media-amazon.com/images/I/71trhOsnpnS._SL1500_.jpg'/>
        </div>
        <div className = 'home__row'>
        <Product title = 'boAt Xtend/Xtend RTL Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, 5 ATM & 7 Days Battery(Sandy Cream)' id = {3} image = 'https://m.media-amazon.com/images/I/61gscZYmaoL._SX679_.jpg' price = {121.95} rating = {3}/>
        <Product title = 'All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor and Alexa| Blue' image = 'https://m.media-amazon.com/images/I/71nnEBYAP1L._SX679_.jpg' id = {4} rating = {4} price = {60.0}/>
        <Product title = 'Apple 2022 12.9-inch iPad Pro (Wi-Fi + Cellular, 512GB) - Silver (6th Generation)' image = 'https://m.media-amazon.com/images/I/41XOG2QviwL._SY445_SX342_QL70_FMwebp_.jpg' rating = {2} id = {5} price = {1823.57}/>
        </div>
        <div className = 'home__row'>
        <Product title = 'MSI Optix G24C4 Curved Gaming Monitor | 23.6 Inch (60 Cm) 1920 X 1080 Pixels | 1ms Response Time, 144Hz | AMD Freesync | Anti-Flicker, Low Blue Light | Frameless Design | Anti-Glare Backit Led | Black' id = {6} image = 'https://m.media-amazon.com/images/I/61N48MmdLML._SX679_.jpg' price = {121.95} rating = {3}/>
        </div>
        </div>
            
        </div>
    )
}

export default Home
