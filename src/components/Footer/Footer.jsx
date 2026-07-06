import './Footer.css'

export const Footer = ()=>{

    return(
        <footer className="footer">
            <div className="footer-top">

                <div className="footer-column">
                    <h2>Velora</h2>
                    <p>
                        Produtos de qualidade, entrega rápida e preços que cabem no seu bolso.
                    </p>

                    <div className="footer-social">
                        <a href="#"><i className="ri-instagram-line"></i></a>
                        <a href="#"><i className="ri-facebook-circle-line"></i></a>
                        <a href="#"><i className="ri-twitter-x-line"></i></a>
                        <a href="#"><i className="ri-youtube-line"></i></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Institucional</h3>

                    <a href="#">Quem somos</a>
                    <a href="#">Trabalhe conosco</a>
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos de Uso</a>
                </div>

                <div className="footer-column">
                    <h3>Ajuda</h3>

                    <a href="#">Central de Atendimento</a>
                    <a href="#">Trocas e Devoluções</a>
                    <a href="#">Rastrear Pedido</a>
                    <a href="#">Perguntas Frequentes</a>
                </div>

                <div className="footer-column">
                    <h3>Contato</h3>

                    <p><i className="ri-mail-line"></i> contato@velora.com</p>
                    <p><i className="ri-phone-line"></i> (11) 4000-0000</p>
                    <p><i className="ri-map-pin-line"></i> São Paulo - SP</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Velora. Todos os direitos reservados.</p>

                <div className="footer-payment">
                    <i className="ri-visa-line"></i>
                    <i className="ri-mastercard-line"></i>
                    <i className="ri-bank-card-line"></i>
                    <i className="ri-secure-payment-line"></i>
                </div>
            </div>
        </footer>
    )
}