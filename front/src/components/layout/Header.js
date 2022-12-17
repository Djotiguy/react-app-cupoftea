
const Header = () => {
	return(
        <header>
			<img className="ribbon" src="img/ribbon.svg" alt="élu meilleur thé en 2016" />
			<section id="topbar">Livraison offerte à partir de 65€ d'achat !</section>
			<div className="container">
				<section id="logo">
					<a href="home">
						<img src="img/logo.png" alt="Logo de Cup of Tea" />
					</a>
					<section id="cart">
						<span>Mon panier</span>
						<strong>42,00€</strong>
					</section>
				</section>
				<nav>
					<a href="listing-product.html">Thés</a>
					
					<a href="about.html">Notre histoire</a>
				</nav>
			</div>
		</header>
    )
}

export default Header;