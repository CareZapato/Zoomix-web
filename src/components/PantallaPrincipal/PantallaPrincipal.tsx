import {useState, useEffect} from 'react';
import './PantallaPrincipal.css';

type Props = {
    categoriaSel: (cat:number) => void;
}

const PantallaPrincipal = ({categoriaSel}: Props) => {

    const [categoria, setCategoria ] = useState(0);

    const handleClickCat = (cat:number) => {
        setCategoria(cat);
        categoriaSel(cat);
    }

    return (
        <div className="game-screen">
            <div className="content-container">
                <h1 className="game-title">Zoomix</h1>
                <div className="category-container">
                  <button className="category-button button1" onClick={() => handleClickCat(1)}>Categoria 1</button>
                  <button className="category-button button2" onClick={() => handleClickCat(2)}>Categoria 2</button>
                  <button className="category-button button3" onClick={() => handleClickCat(3)}>Categoria 3</button>
                </div>
            </div>
        </div>
    );
};

export default PantallaPrincipal;