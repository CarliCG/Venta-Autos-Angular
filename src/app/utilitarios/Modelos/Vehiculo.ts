export interface Vehiculo {
    codigo: string;
    marca: string;
    color?: string;
    modelo: string;
    kilometraje?:number;
    precio?:number;
    foto?:string|null;
    ano?:number;
    calificacion?:number|undefined;

}