import Color from "../Color/Color";

export class Categoria {
    categoriaId?: number;
    nombre?: string;
    descripcion?: string;
    createdAt?: Date;
    updatedAt?: Date;
    color?: Color;

    constructor(
        categoria: Categoria
      ) {
        this.categoriaId = categoria.categoriaId;
        this.nombre = categoria.nombre;
        this.descripcion = categoria.descripcion;
        this.createdAt = categoria.createdAt;
        this.updatedAt = categoria.updatedAt;
        this.color = categoria.color;
      }
}