import {useState, useEffect} from 'react';
import { Categoria } from '../../models/Categoria/Categoria';
import './PantallaPrincipal.css';
import { getListaCategorias } from '../../Services/CategoriaServices';
import { version, appName } from '../../const';

type Props = {
    categoriaSel: (cat:number) => void;
}

const PantallaPrincipal = ({categoriaSel}: Props) => {

    const [categoria, setCategoria ] = useState(0);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [isHovered, setIsHovered] = useState<Boolean[]>([]);

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

    const onMouseEnter = (key: number, valor: boolean) => {
        const newIsHovered = [...isHovered];
        newIsHovered[key] = valor;
        setIsHovered(newIsHovered);
    }

    const onMouseLeave = (key: number, valor: boolean) => {
        const newIsHovered = [...isHovered];
        newIsHovered[key] = valor;
        setIsHovered(newIsHovered);
    }

    function valorEntre(min:number, max:number) {
        const val = Math.random() * (max - min) + min;
        return val;
    }

    useEffect(() => {
        if(categorias){
            fetchCategorias();
        }
    }, []);
    
    const botonesCategorias = () => {
        const botones = [];
        for (let i = 1; i <= categorias.length; i++) {
            botones.push(
                <button 
                    key={i}
                    className= {isHovered[i] ? "category-button-mouse-hovered" : "category-button"}
                    onClick={() => handleClickCat(i)} 
                    style={{ 
                        backgroundColor: categorias[i-1].color?.nombre,
                        
                    }}
                    onMouseEnter={() => onMouseEnter(i, true)} 
                    onMouseLeave={() => onMouseLeave(i, false)}
                >{categorias[i-1].nombre} </button>
            );
        }
        return botones;
    }

    return (
        <div className="game-screen">
            <div className="content-container">
                <h1 className="game-title">Zoomix</h1>
                {botonesCategorias()}
                <div className="footer-version">
                    CareZapato © {appName} - v{version}
                </div>
            </div>
        </div>
    );
};

export default PantallaPrincipal;