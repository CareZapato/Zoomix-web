import Color from "../Color/Color";

export class Categoria {
    categoriaId?: number;
    nombre?: string;
    descripcion?: string;
    createdAt?: Date;
    updatedAt?: Date;
    color?: Color;

    constructor(
        categoriaId?: number,
        nombre?: string,
        descripcion?: string,
        createdAt?: Date,
        updatedAt?: Date,
        color?: Color
      ) {
        this.categoriaId = categoriaId;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.color = color;
      }
}