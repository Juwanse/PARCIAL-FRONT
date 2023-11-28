import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoDetail } from './curso.detail';
import { CursoService } from './curso.service';


@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html'
})
export class DetalleCursoComponent {
  @Input()
  CursoDetail!: CursoDetail;  
}

