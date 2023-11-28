import { Component, OnInit } from '@angular/core';
import { CursoDetail } from './curso.detail';
import { Curso } from './curso.model';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html'
})
export class ListarCursosComponent implements OnInit {
  cursos: Array<CursoDetail>=[];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe((data) => {
      this.cursos = data;
    });
  }
}