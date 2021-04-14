import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from "react-icons/gr"

export function Footer() {
    return (
      <div className="footer">
        <footer />
        <div className="footer-container">
          <div className="footer-description">
            <span className="footer__logo">Movia</span>
            <p className="footer__text">
              Movia es la plataforma líder mundial para que los amantes del cine
              compartan y visualicen películas y series.
            </p>
            <div className="social-media-icons">
              <button className="button"><GrFacebook/></button>
              <button className="button"><GrInstagram/></button>
              <button className="button"><GrTwitter/></button>
              <button className="button"><GrYoutube/></button>
            </div>
          </div>
  
          <div className="footer__links">
            <ul className="footer__links-box">
              <p className="footer__links-title">Compañia</p>
              <li className="footer__links-item">Zona de prensa</li>
              <li className="footer__links-item">Privacidad</li>
              <li className="footer__links-item">Aviso legales</li>
              <li className="footer__links-item">Trabaja con nosotros</li>
              <li className="footer__links-item">Contacto</li>
            </ul>
  
            <ul className="footer__links-box">
              <p className="footer__links-title">Compañia</p>
              <li className="footer__links-item">Series</li>
              <li className="footer__links-item">Películas</li>
              <li className="footer__links-item">Watchlist</li>
            </ul>
          </div>
  
          <div className="subscribe">
            <p className="subscribe__title">Suscríbete</p>
            <p className="subscribe__text">
              Dejanos tu email y te mantedremos al día de todas la novedades.
            </p>
            <input className="input input--footer" type="email" placeholder="Email" />
            <div className="subscribe__checkbox-box">
              <input
                className="subscribe__checkbox"
                type="checkbox"
                id="label-checkbox"
              />
              <label className="subscribe__label" for="label-checkbox">
                Acepto la política de privacidad
              </label>
            </div>
  
            <button className="button button--blue subscribe__btn" type="button">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    );
  }