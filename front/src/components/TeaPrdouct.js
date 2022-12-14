const TeaPrdouct = () => {
    return(
    <>
        <main className="container">
        <section id="product">
            <section id="product-detail">
                <div id="product-name">
                    <h1>Blue of London</h1>
                    <h2>Thé noir à la bergamote</h2>
                    <p>Ref : 133742</p>
                </div>
                <div id="rating">
                    <i class="gold fa fa-star" aria-hidden="true"></i>
                    <i class="gold fa fa-star" aria-hidden="true"></i>
                    <i class="gold fa fa-star" aria-hidden="true"></i>
                    <i class="gold fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <a href="#">Voir les 56 avis clients</a>
                </div>
            </section>
            <section id="product-quantity">
                <img src="img/product/product3_big.jpg" alt="" />
                <div className="price">
                    <select name="quantity">
                        <option>Pochette de 100gr</option>
                        <option>Pochette de 500gr</option>
                        <option>Pochette de 1kg</option>
                    </select>
                    <h3>9,00€</h3>
                    <a className="btn" href="#">Ajouter au panier</a>
                    <a id="wishlist" href="#">Ajouter à ma liste d'envie</a>
                </div>
            </section>
            <section id="product-description">
                <p>Blue of London est un Earl Grey d'exception qui associe un des meilleurs thés noirs au monde, le Yunnan, et une bergamote fraîche et délicate. Un mélange remarquable d'équilibre et de finesse.</p>
                <p>Le Earl Grey est un grand classique anglais, depuis que Charles Grey, comte (earl en anglais) de Falodon et Ministre des Affaires étrangères du Royaume britannique au milieu du XIX ème siècle, reçut d'un mandarin chinois une vieille recette consistant à aromatiser son thé avec de la bergamote.</p>
                <p><strong>Profitez d'une remise de 5% sur la pochette de 500g (prix déjà remisé).</strong></p>
                <p><strong>Profitez d'une remise de 10% sur le lot de 2 pochettes de 500g (prix déjà remisé).</strong></p>
            </section>
        </section>
        </main>
     </>
    )
}

export default TeaPrdouct;