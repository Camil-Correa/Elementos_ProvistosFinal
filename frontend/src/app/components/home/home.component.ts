import { datos, Grado, Situacion, armas, calibre, est_func, modelo, tipo, marca, Chaleco, MarcasChalecos, ModelosChaleco, NivelprotList, TallesChalecos } from './../../Interfaces/Requests';
import { EmpleadoService } from './../../services/empleado.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private EmpleadoService : EmpleadoService) { }

  ngOnInit(): void {
  }
  NI :number = 0;

  gradoemp : Grado ={
    jerarquia : ""
  }

  situacionemp : Situacion = {
    situacion : ""
  }

  calibrearma : calibre = {
    calibre : ""
  }

  est_funcarma : est_func = {
    est_func : ""
  }

  marcaarma : marca = {
    marca : ""
  }

  modeloarma : modelo = {
    modelo : ""
  }

  tipoarma : tipo ={
    tipo : ""
  }

  MarcasChalecosemp : MarcasChalecos = {
    marca : ""
  }

  ModelosChalecoemp : ModelosChaleco= {
    modelo : ""
  }

  NivelprotListemp : NivelprotList = {
    niv_prot : ""
  }

  TallesChalecosemp : TallesChalecos = {
    talle : ""
  }

  chalecobalemp : Chaleco ={
    fechaFab : "",
    marcasChalecos : this.MarcasChalecosemp,
    modelosChalecos : this.ModelosChalecoemp,
    nivelprotList : this.NivelprotListemp,
    numSerie : 0,
    tallesChalecos : this.TallesChalecosemp
  }

  armasemp : armas ={
    calibrearmas : this.calibrearma,
    estfunarmas : this.est_funcarma,
    marcasarmas : this.marcaarma,
    modeloarmas : this.modeloarma,
    numeracion : "",
    remarque : "",
    tipoarmas : this.tipoarma,
  }

  datosemp : datos = {
    ni : 0,
    nombres : "",
    apellidos : "",
    dni : 0,
    grado : this.gradoemp,
    situacionEmp : this.situacionemp,
    armas : this.armasemp,
    chalecoBal : this.chalecobalemp
  }



  getEmp() : void {
    const ni = this.NI
    this.EmpleadoService.getEmp(ni)
    .subscribe(
      {next:(datos:datos) => {
        this.datosemp = datos;
        console.log(this.datosemp)
        console.log(this.datosemp.situacionEmp)
        this.gradoemp = this.datosemp.grado;
        this.situacionemp = this.datosemp.situacionEmp;

        //asignar arma
        this.armasemp = this.datosemp.armas;

        this.calibrearma = this.armasemp.calibrearmas;
        this.est_funcarma = this.armasemp.estfunarmas;
        this.marcaarma = this.armasemp.marcasarmas;
        this.modeloarma = this.armasemp.modeloarmas;
        this.tipoarma = this.armasemp.tipoarmas;

        //asignar chaleco
        this.chalecobalemp = this.datosemp.chalecoBal;

        this.MarcasChalecosemp = this.chalecobalemp.marcasChalecos;
        this.ModelosChalecoemp = this.chalecobalemp.modelosChalecos;
        this.NivelprotListemp = this.chalecobalemp.nivelprotList;
        this.TallesChalecosemp = this.chalecobalemp.tallesChalecos;
      }
      })
    // this.EmpleadoService.getEmp(nI)
    // .subscribe(empleado => this.datosemp = empleado);
    // console.log(this.datosemp)
  }

  buscar(nI : number){
    console.log(nI);
    this.NI = nI;
    this.getEmp();
  }

}
