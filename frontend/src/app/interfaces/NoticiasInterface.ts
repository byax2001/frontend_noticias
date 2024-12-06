import { CategoriaInterface } from "./CategoriaInterface";

export interface NoticiasInterface{
  id:               number;
  titulo:           string;
  imagenUrl:        string;
  descripcion:      string;
  cuerpo:           string;
  fechaPublicacion: Date;
  fuente:           string;
  categoria:        CategoriaInterface;
}


