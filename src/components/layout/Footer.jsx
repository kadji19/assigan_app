import React from 'react'
import "./footer.css"
import logoAssigan from "../../asset/assigan.png";
import 'boxicons'

function Footer() {
  return (
    <footer>			
    <div class="container_footer">

        <div class="inner-container">
            <div className='logo'>
                <img className='logo_img' src={logoAssigan} alt="logo assigan" />
            </div>
             <span>Votre plateforme de petites annonces <br /> gratuites.</span>
             <ul class="social-icons">
              <li class="social-icon social-facebook">
                  <a href="#" class="icon">
                  <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
                  </a>
              </li>
              <li class="social-icon social-twitter">
                  <a href="#" class="icon">
                  <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
                  </a>
              </li>
              <li class="social-icon social-instagram">
                  <a href="#" class="icon">
                  <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
                  </a>
              </li>

          </ul>
        </div>

        <div class="inner-container">
            <span class="block-heading">Liens Utiles</span>
                <ul class="list-block categories">
                    <li>Accueil</li>
                    <li>Nos condition d'utilisation </li>
                    <li>Contact</li>
                </ul>
        </div>

        <div class="inner-container">
            <span class="block-heading">Obtenir L'application</span>
                  <a href="./uncategorized.html">Télécharger sur Play Store</a>
        </div>
    </div>

    <div class="footer_bottom">
        <p id="footer-info">Assigan ©2023 All rights reserved| Développé par <a href="">HilExpertiz</a> <box-icon name='heart' color='#ffffff' ></box-icon></p>
    </div>
</footer>

  )
}

export default Footer