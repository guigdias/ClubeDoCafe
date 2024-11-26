import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mensagemBemVindo!: void;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const ultimoUsuario = this.tarefaService.getUltimoUsuario();
    if (ultimoUsuario) {
      this.mensagemBemVindo = alert(`Bem-vindo, ${ultimoUsuario.nome}!`);
    }

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

}
