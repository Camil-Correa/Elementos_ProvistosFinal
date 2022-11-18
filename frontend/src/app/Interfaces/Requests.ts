export interface datos{
  ni : number;
  nombres : string;
  apellidos : string;
  dni : number;
  grado : Grado;
  situacionEmp : Situacion;
  armas : armas;
  chalecoBal : Chaleco;
}

export interface Grado{
  jerarquia : string;
}

export interface Situacion{
  situacion : string;
}

export interface Chaleco{
  fechaFab : string;
  marcasChalecos : MarcasChalecos;
  modelosChalecos : ModelosChaleco;
  nivelprotList : NivelprotList;
  numSerie : number;
  tallesChalecos : TallesChalecos;
}

export interface MarcasChalecos{
  marca : string;
}

export interface ModelosChaleco{
  modelo : string;
}

export interface NivelprotList{
  niv_prot : string;
}

export interface TallesChalecos{
  talle : string
}
// ----------------------------------------------------

export interface armas{
  calibrearmas : calibre,
  estfunarmas : est_func,
  marcasarmas : marca,
  modeloarmas : modelo,
  numeracion : string,
  remarque : string,
  tipoarmas : tipo,
}

export interface calibre{
  calibre : string;
}

export interface est_func{
  est_func : string;
}

export interface marca{
  marca : string;
}

export interface modelo{
  modelo : string;
}

export interface tipo{
  tipo : string;
}

