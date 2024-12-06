import { CategoriaInterface } from "./CategoriaInterface";

export interface NoticiasInterface{
  id:               number;
  titulo:           string;
  imagenUrl:        string;
  descripcion:      string;
  cuerpo:           string;
  fechaPublicacion: string;
  fuente:           string;
  categoria:        CategoriaInterface;
}


