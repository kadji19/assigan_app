import React, { useEffect, useRef, useState } from 'react'
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import assiganAccueil from "../../../asset/assiganAccueil.png";
import assiganDeal from "../../../asset/2.svg";
import assiganInscrip from "../../../asset/1.svg";
import assiganArticle from "../../../asset/3.svg";
import assiganBoutique from "../../../asset/assiganBoutique.png"
import assiganIcon from "../../../asset/Capture d'écran 2023-08-11 120600.png"
import play from "../../../asset/play.svg"
import './accueil.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function Accueil() {

  const slideInTop = (elem, delay, ) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: 2,    
        ease: "ease", 
        stagger: 0.33,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const slideInTop1 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: 2,    
        ease: "ease", 
        stagger: 0.33,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const slideInTop2 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: 2,    
        ease: "ease", 
        stagger: 0.33,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

   const slideInRight = (elem, delay, duration)  => {
    gsap.fromTo(
      elem,
    {
      opacity: 0,  // Opacité initiale
      x: 200,      // Position en dehors de l'écran à droite
    },
    {
      opacity: 1,  // Opacité finale
      x: 0,        // Position initiale
      delay: delay || 0.4,
      duration: 2, // Durée de l'animation en secondes
      ease: "power2.out", // Fonction d'accélération (ease) de l'animation
      scrollTrigger: {
        trigger: ".slideInRight", // Déclencheur de l'animation
        start: "top center",     // Point de départ du déclencheur
        end: "center center",    // Point d'arrivée du déclencheur
        toggleActions: "play none none reverse", // Actions de déclenchement (play, pause, resume, reverse)
      }
    })
  }

   const slideInRight1 = (elem, delay, duration)  => {
    gsap.fromTo(
      elem,
    {
      opacity: 0,  // Opacité initiale
      x: 200,      // Position en dehors de l'écran à droite
    },
    {
      opacity: 1,  // Opacité finale
      x: 0,        // Position initiale
      delay: delay || 0.4,
      duration: 2, // Durée de l'animation en secondes
      ease: "power2.out", // Fonction d'accélération (ease) de l'animation
      scrollTrigger: {
        trigger: ".slideInRight", // Déclencheur de l'animation
        start: "top center",     // Point de départ du déclencheur
        end: "center center",    // Point d'arrivée du déclencheur
        toggleActions: "play none none reverse", // Actions de déclenchement (play, pause, resume, reverse)
      }
    })
  }

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: 2,    
        ease: "ease", 
        stagger: 0.33,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const slideInLeft1 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: 2,    
        ease: "ease", 
        stagger: 0.33,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }


  useEffect(() => {
    slideInTop("#box1");
  }, [])
  useEffect(() => {
    slideInTop1("#box2");
  }, [])
  useEffect(() => {
    slideInLeft("#box3");
  }, [])
  useEffect(() => {
    slideInLeft1("#box6");
  }, [])
  useEffect(() => {
    slideInRight("#box4");
  }, [])
  useEffect(() => {
    slideInRight1("#box7");
  }, [])
  useEffect(() => {
    slideInTop2("#box5");
  }, [])
  

  return (
    <div>
        <section className='section1' >
            <div className='row'>
              <div className='column1'>
                <span>Assigan <br /> Marketplace</span>
                <p>Achetez et vendez en quelques secondes !</p>
                {/* <a href="">assigan-market.com</a> */}
                <div >
                <button className='btn'>Commencez</button>
            </div>
              </div>
              <div className='column2'>
                <img src={assiganAccueil} alt="assigan Accueil" />
              </div>
            </div>
        </section>
        <section >
            <div id='box1' className='row1'>
              <div id='box3' className='column3'>
                <span>Achetez et vendez avec Assigan</span>
              </div>
              <div  className='column4'>
              <div id='box3' class="text-card">
                    <img className='assigan_icon_svg deal' src={assiganDeal} alt="" />
                    <p>Faites des deals incroyables dans votre région</p>
                    
                </div>
              <div id='box3' class="text-card">
                    <img className='assigan_icon_svg inscrip' src={assiganInscrip} alt="" />
                    <p>Pas de frais d'inscription ou de transaction</p>
                    
                </div>
              <div id='box3' class="text-card">
                    <img className='assigan_icon_svg article' src={assiganArticle} alt="" />
                    <p>Echanger votre article contre de l'argent</p>
                    
                </div>
              </div>
            </div>
        </section>
        <section >
            <div id='box2'  className='row4'>
              <div id='box6' className='column5'>
                <span>Pourquoi Assigan ?</span>
                <ul className='list'>
                  <li>Simple et facile à utiliser</li>
                  <li>Achetez et vendez en quelques secondes !</li>
                  <li>Découvrez des aubaines incroyables dans votre région !</li>
                  <li>Pas de frais d'inscription ou de transaction !</li>
                  <li>Rendez-vous à proximité pour échanger votre article contrede l'argent !</li>
                  <li>Partagez avec vos amis et la communauté locale avec Facebook, Twitter, WhatsApp, etc.</li>
                </ul>
              </div>
              <div id='box7' className='column2'>
                <img src={assiganBoutique} alt="" />
              </div>
            </div>
        </section>
        <section className='container_blue' >
            <div id='box5' className='row2'>
              <div className='column6'>
                <span>Commencez dès maintenant et faites de bon deals</span>
              </div>
              <div className='column2'>
               <a href=""> <img src={play} alt="" /> </a>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Accueil