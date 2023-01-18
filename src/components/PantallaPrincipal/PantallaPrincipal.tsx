import {useState, useEffect} from 'react';
import { Categoria } from '../../models/Categoria/Categoria';
import './PantallaPrincipal.css';
import { getListaCategorias } from '../../Services/CategoriaServices';

type Props = {
    categoriaSel: (cat:number) => void;
}

const PantallaPrincipal = ({categoriaSel}: Props) => {

    const [categoria, setCategoria ] = useState(0);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const handleClickCat = (cat:number) => {
        setCategoria(cat);
        categoriaSel(cat);
    }

    const fetchCategorias = async () => {
        const data = await getListaCategorias();
        if(data){
          setCategorias(data);
        }
    };

    useEffect(() => {
        console.log("categorias:",categorias);
        if(categorias){
            fetchCategorias();
        }else{
          console.log("cambiar useEffect");
        }
      }, []);

    const botones = [];
    for (let i = 1; i <= categorias.length; i++) {
        botones.push(<button className="category-button" onClick={() => handleClickCat(i)} style={{ 
            backgroundColor: categorias[i-1].color?.nombre
        }}>{categorias[i-1].nombre} </button>);
    }

    return (
        <div className="game-screen">
            <div className="content-container">
                <h1 className="game-title">Zoomix</h1>
                {botones}
            </div>
        </div>
    );
};

export default PantallaPrincipal;