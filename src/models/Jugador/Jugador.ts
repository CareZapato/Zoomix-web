export class Jugador {
    jugadorId?: number;
    nombre?: string;
    nick?: string;
    facebookId?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
    
    constructor(
      jugadorId?: number,
      nombre?: string,
      nick?: string,
      facebookId?: string | null,
      createdAt?: Date,
      updatedAt?: Date
    ) {
      this.jugadorId = jugadorId;
      this.nombre = nombre;
      this.nick = nick;
      this.facebookId = facebookId;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }