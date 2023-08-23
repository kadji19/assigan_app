import React, { useEffect, useRef, useState } from 'react'
import assiganAccueil from "../../../asset/assiganAccueil.png"
import assiganMan from "../../../asset/man_walk.png"
import assiganPub from "../../../asset/Capture d'écran 2023-08-12 224238.png"
import assiganFormPub from "../../../asset/Capture d'écran 2023-08-12 224424.png"
import filter from "../../../asset/4.svg"
import heart from "../../../asset/5.svg"
import stats from "../../../asset/6.svg"
import "./guide.css"
import 'boxicons'


function Guide() {


  return (
    <div>
        <section>
            <div className='column7'>
                <span> Guides d'utilisation</span>
            </div>
        </section>
         <section >
            <div className='row4'>
              <div className='column2'>
                <img src={assiganMan} alt="" />
              </div>
              <div className='column2'>
                <img src={assiganAccueil} alt="assigan Accueil" />
              </div>
            </div>
        </section>
        <section >
            <div className='row5'>
              <div className='column4'>
              <div class="text-card1">
                    <span className='number'>01</span>
                    <strong>Inscription gratuite</strong>
                    <p>La création d'un compte sur Assiganne vous coutera rien car elle est totalement gratuite.</p>
                </div>
              <div class="text-card1">
                    <span className='number'>02</span>
                    <strong>Créer votre profil</strong>
                    <p>Choisissez le type de profil qui vous convient entre "Particulier" et "Entreprise".</p>
                </div>
              <div class="text-card1">
                    <span className='number'>03</span>
                    <strong>Profitez de l'application</strong>
                    <p>Vous pouvez acheter, vendre ou faire des affaires sur les articles d'occasions, vetements, véhicules, etc ...</p>
                </div>
              </div>
            </div>
        </section>
        <section >
            <div className='row4'>
              <div className='column5'>
                <span>Comment publier un produit ?</span>
                <ul className='list'>
                  <li>Vous cliquez sur "publier"</li>
                  <li>En suite vous choisissez le type de publication que vous voulez faire</li>
                  <li>Découvrez des aubaines incroyables dans votre région !</li>
                  <li>Pas de frais d'inscription ou de transaction !</li>
                  <li>Rendez-vous à proximité pour échanger votre article contrede l'argent !</li>
                  <li>Partagez avec vos amis et la communauté locale avec Facebook, Twitter, WhatsApp, etc.</li>
                </ul>
              </div>
              <div className='column2'>
                <img src={assiganPub} alt="" />
              </div>
            </div>
        </section>
        <section >
            <div className='row form_pub'>
            <div className='column2'>
                <img src={assiganFormPub} alt="" />
              </div>
              <div className='column9'>
                <span>Formulaire de publication</span>
                <ul className='list1'>
                  <li>Vous pouvez ajouter au moins 6 photos</li>
                  <li>Vous avez plusieurs catégories de produits</li>
                  <li>Remplissez le formulaire avec de vraies données puis ajouter le prix et c'est fait</li>
                </ul>
              </div>
            </div>
        </section>
        <section className='section_row5'>
            <div className='row5'>
              <div className='column3'>
                <span>Mettre en avant un produit</span>
              </div>
              <div className='column4'>
              <div class="text-card2">
                    <img src={stats} alt="" />
                    <p>Vous pouvez booster vos produits pour qu'ils soient mis en avant sur la plateforme.</p>
                </div>
              <div class="text-card2">
                    <img src={heart} alt="" />
                    <p>Les utilisateurs peuvent ajouter vos produits comme favoris et les payés plus tard.</p>
                </div>
              <div class="text-card2">
                    <img src={filter} alt="" />
                    <p>Les utilisateurs peuvent filtrer la liste des produits suivant les catégories de leur choix.</p>
                    
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Guide