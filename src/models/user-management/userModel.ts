export interface UserRequest {
    uid?: string;
    nombre: string;
    apellido: string;
    tipoIdentificacion: string;
    numeroIdentificacion: number | string;
    telefono: number | string;
    email: string;
    direccion: string;
    fechaNacimiento: string | Date;
    urlFoto: string;
    rol: string;
    pais: string;
    departamento: string;
    ciudad: string;
    genero: string;
    discapacidad: string;
    estadoCivil: string;
    ocupacion: string;
}

export interface UserList {
    uid: string;
    nombre: string;
    apellido: string;
    telefono: number | string;
    email: string;
}