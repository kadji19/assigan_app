import React from 'react'
import assiganMan from "../../../asset/man_walk.png"
import home from "../../../asset/7.svg"
import tab from "../../../asset/8.svg"
import envelop from "../../../asset/9.svg"
import "./contact.css"

function Contact() {
  return (
    <div>
        <section className='contact'>
            <div className='column7'>
                <span>Nous contacter </span>
            </div>
        </section>
        <section className='contact'>
           <div className='row6'>
           <div className='column11'>
                    <span>Get in touch</span>
                 <form action="">
                    <textarea name="" id="" cols="81" rows="13"></textarea>
                    <div className='column12'>
                        <div className='form_control'>
                        <input type="text" name="nom" />
                            <label htmlFor="" className='label'>Enter your name</label>
                        </div>
                        <div className='form_control'>
                        <input type="email" name="email"  />
                        <label htmlFor="" className='label'>Enter email address</label>
                        </div>
                    </div>
                    <div className='form_control'>
                    <input type="text" name="autreChamp" />
                    <label htmlFor="" className='label'>Enter Subjet</label>
                    </div>
                </form>
                <button>send</button>
            </div>
            <div className='column13'>
                <div className='column14'>
                <img src={home} alt="" />
                <span>
                    <strong>Buttonwood, California.</strong> <br /> Rosemead, CA 91770
                </span>
                </div>
                <div className='column14'>
                <img src={tab} alt="" />
                <span>
                    <strong>+1 253 565 2365</strong> <br /> Mon to Fri 9am to 6pm
                </span>
                </div>
                <div className='column14'>
                <img src={envelop} alt="" />
                <span>
                    <strong>support@colorlib.com</strong> <br /> Send us your query <br /> anytime!
                </span>
                </div>
              </div>
           </div>
        </section>
    </div>
  )
}

export default Contact