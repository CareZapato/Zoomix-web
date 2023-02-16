import { Categoria } from "../Categoria/Categoria";
import { Jugador } from "../Jugador/Jugador";

export class Pregunta {
    preguntaId?: number;
    texto?: string;
    likes?: number;
    activo?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    categoria?: Categoria;
    jugador?: Jugador;
    link?: string;
    colorOpenAI?: string;
    explicacionColorOpenAI?: string;
    concecuencia?: string;
    respuesta?: string;

    constructor(
        pregunta?: Pregunta
    ) {
        this.preguntaId = pregunta?.preguntaId;
        this.texto = pregunta?.texto;
        this.likes = pregunta?.likes;
        this.activo = pregunta?.activo;
        this.createdAt = pregunta?.createdAt;
        this.updatedAt = pregunta?.updatedAt;
        this.categoria = pregunta?.categoria;
        this.jugador = pregunta?.jugador;
        this.link = pregunta?.link;
        this.colorOpenAI = pregunta?.colorOpenAI;
        this.explicacionColorOpenAI = pregunta?.explicacionColorOpenAI;
        this.concecuencia = pregunta?.concecuencia;
        this.respuesta = pregunta?.respuesta;
    }
}
