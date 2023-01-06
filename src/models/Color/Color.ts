class Color {
    colorId: number;
    nombre: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(colorId: number, nombre: string, descripcion: string, createdAt: Date, updatedAt: Date) {
        this.colorId = colorId;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
    
export default Color;