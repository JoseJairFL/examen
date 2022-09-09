import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IPokemonResponse } from '../interfaces/ipokemonResponse';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {
  //Columnas que se muestran de la tabla de angular material
  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;

 public pokemons:IPokemonResponse[] = [];

public range = 100

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  async getPokemons() {
    try {
      this.pokemons = await this.pokemonService.getPokemons(this.range);
      console.log(this.pokemons)
     
    } catch (error) {
      console.log(error);
    }

  }
  listarSiguientes(){
    this.range += 100;

  }
  //Filtro para el paginador
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  //Obtiene elemento seleccionado
  // getRow(row){
  //   //console.log(row);
  //   this.router.navigateByUrl(`/pokeDetail/${row.position}`)
  // }

}
