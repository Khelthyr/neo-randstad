import React from "react";

import { ReactComponent as IconDown} from "../assets/chevron-down.svg";

//Function to create URL for OAuth2
export const getURLWithQueryParams = (base, params) => {
    const query = Object
      .entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&')
      
    return `${base}?${query}`
}
// URL for OAuth2
export const LINKEDIN_STATE = 'DCEeFWf45A53sdfKef424'
const LINKEDIN_SCOPE = 'r_liteprofile r_emailaddress'
const LINKEDIN_REDIRECT = 'http://localhost:3000'
const LINKEDIN_CLIENT_ID = '8611igirv8nck4'
export const LINKEDIN_URL = getURLWithQueryParams('https://www.linkedin.com/oauth/v2/authorization',{
    response_type: "code",
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: LINKEDIN_REDIRECT,
    state: LINKEDIN_STATE,
    scope: LINKEDIN_SCOPE
})

// export const signInWithLinkedin = () => {
//     this.popup = window.open(LINKEDIN_URL, '_blank', 'width=600,height=600')
//     window.addEventListener('message', this.receiveLinkedInMessage)
// }

const fetchData = () => {
    return fetch("https://api.linkedin.com/v2/me")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => console.log(error));
}

const Inscription = () =>{
    return (
        <div className="block bg-variant-white">
            <div className="block__wrapper wrapper">
                <div className="block__header">
                    <h2 className="block__title">Inscription</h2>
                </div>
                <div className="block__content">
                    <ul className="link-list link-list--single accordion">
                        <li className="link-list__item">
                            <div className="collapsible__trigger" data-rs-collapsible="" role="button" tabIndex="0" data-rs-toggable="">
                                <h3 className="link-list__link">
                                    Inscription par CV
                                    <span className="hidden--from-l toggle-arrow icon">
                                        <svg>
                                            <IconDown />
                                        </svg>
                                    </span>
                                    <span className="hidden--until-l toggle-arrow icon icon--l">
                                        <svg>
                                            <IconDown/>
                                        </svg>
                                    </span>
                                </h3>
                            </div>
                            {/* Content pour ajouter le CV */}
                            <div className="block__wrapper wrapper">
                                <div className="block__content">
                                    <div className="form-group form-group--upload ">
                                        <label className="form-group__label">
                                            Ajouter votre CV !
                                            <span className="form-group__optional"></span>
                                        </label>
                                        <div className="form-group__input">
                                            <div className="upload" data-rs-upload="">
                                                <input type="file" title=""/>
                                                <div className="upload__content">
                                                    <div className="upload__text">
                                                        <span className="icon icon--inline">
                                                            <svg>
                                                                <use xlinkHref="human-forward/assets/image/icons.svg#attachment"></use>
                                                            </svg>
                                                        </span>
                                                        <a className="upload__add" href="#">add files</a>
                                                        <span className="hidden--until-l"> or drop files here</span>
                                                    </div>
                                                    <p>.pdf, .docx, .jpg / max. 2Mo</p>
                                                </div>
                                                <div className="upload__content upload__content--drop">
                                                    <span>drop files here</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group__message">Inserez votre CV pour créer votre compte avec les informations de votre CV</div>
                                    </div>
                                </div>
                            </div>
                            {/* FIN CV */}
                            <div className="collapsible__content body-copy" data-rs-collapsible-content="">
                                <div className="collapsible__content--wrapper">
                                    <p>You can change your details easily. To change your profile:</p>
                                    
                                    <div className="button button--m">show login page</div>
                                </div>
                            </div>
                        </li>

                        <li className="link-list__item">
                            <div className="collapsible__trigger" data-rs-collapsible="" role="button" aria-expanded="false" tabIndex="0" data-rs-toggable="">
                                <h3 className="link-list__link">
                                    Inscription Linkedin
                                    <span className="hidden--from-l toggle-arrow icon">
                                        <svg>
                                            
                                        </svg>
                                    </span>
                                    <span className="hidden--until-l toggle-arrow icon icon--l">
                                        <svg>
                                            
                                        </svg>
                                    </span>
                                </h3>
                            </div>
                            {/* Début Content Login Linkedin */}
                            <div className="block__wrapper wrapper">
                                <div className="block__content">
                                    <a href={LINKEDIN_URL} className="button button--m button--social social-btn--linkedin">
                                    <span className="icon icon--inline">
                                        <svg className="icon-linkedin">
                                            <use xlinkHref="human-forward/assets/image/components.svg#social-btn-linkedin"></use>
                                        </svg>
                                    </span>
                                    Sign up with Linkedin
                                    </a>        
                                </div>
                            </div>
                            {/* Fin Content Login Linkedin */}
                            <div className="collapsible__content body-copy" data-rs-collapsible-content="">
                                <div className="collapsible__content--wrapper">
                                    <p>Your consultant knows you and is the best person to help you or give you advice. On your contract sheet and your salary sheet you can find their email address. Contact them right away!</p>
                                </div>
                            </div>
                        </li>
                        <li className="link-list__item">
                            <div className="collapsible__trigger" data-rs-collapsible="" role="button" aria-expanded="false" tabIndex="0" data-rs-toggable="">
                                <h3 className="link-list__link">
                                    Inscription standard
                                    <span className="hidden--from-l toggle-arrow icon">
                                        <svg>
                                            
                                        </svg>
                                    </span>
                                    <span className="hidden--until-l toggle-arrow icon icon--l">
                                        <svg>
                                            
                                        </svg>
                                    </span>
                                </h3>
                            </div>
                            {/* Début formulaire inscription Standard */}
                            <div className="form-group">
                                <form>
                                    <fieldset>
                                    <label className="form-group__label" htmlFor="email-1">Adresse Mail*</label>
                                    <div className="form-group__input">
                                        <input type="email" name="email-1" id="email-1" required="required" placeholder="design@randstad.com"/>
                                    </div>
                                    <div className="flex">
                                        <label className="form-group__label flex-shrink-0" htmlFor="password-1">Mot de passe*</label>
                                    </div>
                                    <div className="form-group__input form-group__input--button password-validator" data-rs-password-visibility="">
                                        <input type="password" name="password-1" id="password-1" required="required"/>
                                        <button type="button" data-rs-password-visibility-trigger="" className="button--icon-only show-password" aria-label="show password">
                                            <span className="icon">
                                                <svg>
                                                    <use xlinkHref="human-forward/assets/image/icons.svg#eye"></use>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex">
                                        <label className="form-group__label flex-shrink-0" htmlFor="password-1">Confirmation du mot de passe*</label>
                                    </div>
                                    <div className="form-group__input form-group__input--button password-validator" data-rs-password-visibility="">
                                        <input type="password" name="password-1" id="password-1" required="required"/>
                                        <button type="button" data-rs-password-visibility-trigger="" className="button--icon-only show-password" aria-label="show password">
                                            <span className="icon">
                                                <svg>
                                                    <use xlinkHref="human-forward/assets/image/icons.svg#eye"></use>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    </fieldset>
                                
                                    <fieldset>
                                        <h5>Vos informations personnelles</h5>
                                        <label className="form-group__label" htmlFor="dropdown-1">Civilité*</label>
                                        <div className="form-group__input">
                                            <select id="dropdown-1" className="untouched" required="required" data-rs-untouched="">
                                                <option value="">- Civilité -*</option>
                                                <option value="M">M.</option>
                                                <option value="Mme">Mme</option>
                                                <option value="Mlle">Mlle</option>
                                            </select>
                                            <span className="select-arrow icon">
                                                <svg>
                                                    <use xlinkHref="human-forward/assets/image/icons.svg#chevron-down"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <label className="form-group__label" htmlFor="nom-1">Nom*</label>
                                        <div className="form-group__input">
                                            <input type="text" name="nom-1" id="nom-1" required="required"/>
                                        </div>
                                        <label className="form-group__label" htmlFor="prenom-1">Prénom*</label>
                                        <div className="form-group__input">
                                            <input type="text" name="prenom-1" id="prenom-1" required="required"/>
                                        </div>
                                        <label className="form-group__label" htmlFor="tel-1">Numéro de téléphone</label>
                                        <div className="form-group__input">
                                            <input type="tel" name="tel-1" id="tel-1"/>
                                        </div>
                                        <div className="row">
                                            <div className="column col">
                                                <label className="form-group__label" htmlFor="cp-1">Code Postal*</label>
                                                <div className="form-group__input">
                                                    <input type="text" name="cp-1" id="cp-1"/>
                                                </div>
                                            </div>
                                            <div className="column col">
                                                <label className="form-group__label" htmlFor="dropdown-1">Ville</label>
                                                <div className="form-group__input">
                                                    <select id="dropdown-1" className="untouched" required="required" data-rs-untouched="">
                                                        
                                                    </select>
                                                    <span className="select-arrow icon">
                                                        <svg>
                                                            <use xlinkHref="human-forward/assets/image/icons.svg#chevron-down"></use>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>                          
                                    </fieldset>
                                </form>
                            </div>
                            {/* Fin formulaire inscription Standard */}
                            <div className="collapsible__content body-copy" data-rs-collapsible-content="">
                                <div className="collapsible__content--wrapper">
                                    <p>
                                        In our web section "about randstad", you find more information about an
                                        <a href="#">internship</a>
                                        at Randstad
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Inscription;