import { NavLink } from "react-router-dom";

const Header = () => {
	return(
        <header>
			<img className="ribbon" src="img/ribbon.svg" alt="élu meilleur thé en 2016" />
			<section id="topbar">Livraison offerte à partir de 65€ d'achat !</section>
			<div className="container">
				<section id="logo">
				<NavLink to="/">
					<img src="img/logo.png" alt="Logo de Cup of Tea" />
				</NavLink>
					<section id="cart">
						<span>Mon panier</span>
						<strong>42,00€</strong>
					</section>
				</section>
				<nav>
				<NavLink to="/tea">
				Thés
				</NavLink>

				<NavLink to="/about">
				Notre histoire
				</NavLink>							
					
				</nav>
			</div>
		</header>
    )
}

export default Header;