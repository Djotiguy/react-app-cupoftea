import {useState} from 'react';

const Formulaire = ({cupOfTeas, setCupOfTeas}) => {


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [prix, setPrix] = useState("");
    const [ stock, setStock] = useState("");
    const [date, setDate] = useState("");

 

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeDesc = (e) => {
        setDesc(e.target.value);
    }

    const changeCategory = (e) => {
        setCategory(e.target.value);
    }

    const ChangePrix = (e) => {
        setPrix(e.target.value);
    }
    const ChangeStock = (e) => {
        setStock(e.target.value);
    }

    const changeDate = (e) => {
        setDate(e.target.value);
    }

    const add = () => {
        let infoForm = {
            title: title,
            desc:desc,
            category:category,
            prix:prix,
            stock: stock,
            date:date
        }
    
        let req = new Request('http://localhost:8080/form', {
            method:'POST',
            body: JSON.stringify(infoForm),
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            }
            
        });
    
        fetch(req);
    }

    return(
        <form style={{ width:'50%', margin:'0 auto'}}>
            <div>
                <label htmlFor="titre">Titre</label>
                <input id="titre" type="text" value={title} onChange={changeTitle}/>
            </div>
            <div>
                <label htmlFor="Description">Description</label>
                <input id="desc" type="text" value={desc} onChange={changeDesc} />
            </div>
            <div>
                <label htmlFor="tel">Catégorie</label>
                <input id="category" type="text" value={category} onChange={changeCategory} />
            </div>
            <div>
                <label htmlFor="Prix">Prix</label>
                <input id="prix" type="text" value={prix} onChange={ChangePrix} />
            </div>
            <div>
                <label htmlFor="stock">Stock</label>
                <input id="stock" type="text" value={stock} onChange={ChangeStock} />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input id="date" type="text" value={date} onChange={changeDate} />
            </div>
            <button type="button" onClick={add}  style={{ marginTop:"20px" }}>Ajouter</button>
        </form>
    )
}

export default Formulaire;