/// <mls shortName="organismBiography" project="102023" folder="music" enhancement="_100554_enhancementLit" groupName="music" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

@customElement('music--organism-biography-102023')
export class organismBiography extends IcaOrganismBase {
    render(){
        return html`<div class="biography-container" id="music--biography-100000-1">
    <div class="biography-text" id="music--biography-100000-2">
      <h2 id="music--biography-100000-3">Sobre o Professor</h2>
      <p id="music--biography-100000-4">Olá! Sou o Professor [Nome], apaixonado por música desde criança. Comecei minha jornada aos 5 anos aprendendo piano, e ao longo dos anos, expandi meu conhecimento para incluir violão e canto. Com mais de 15 anos de experiência ensinando, ajudei centenas de alunos a descobrirem sua voz e talento musical.</p>
      <p id="music--biography-100000-5">Minha abordagem é personalizada, focando em iniciantes que querem aprender os fundamentos do piano e violão, bem como alunos intermediários interessados em aprimorar suas habilidades de canto. Acredito que a música é uma forma de expressão e alegria, e meu objetivo é tornar o aprendizado acessível e divertido.</p>
      <p id="music--biography-100000-6">Ofereço aulas individuais por R$ 50 por hora, com pacotes mensais com desconto para 4 aulas semanais. Vamos juntos criar melodias incríveis!</p>
    </div>
    <div class="biography-images" id="music--biography-100000-7">
      <img src="https://images.unsplash.com/photo-1680070568461-0342ba529988?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBkZSUyMG0lQzMlQkFzaWNhJTIwdG9jYW5kbyUyMHBpYW5vfGVufDB8fHx8MTc2MzM4NDcwN3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Professor tocando piano" id="music--biography-100000-8">
      <img src="https://images.unsplash.com/photo-1589946477793-c327bb10f47e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBkZSUyMG0lQzMlQkFzaWNhJTIwY29tJTIwYWx1bm9zJTIwZW0lMjBhdWxhJTIwZGUlMjB2aW9sJUMzJUEzb3xlbnwwfHx8fDE3NjMzODQ3MDh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Professor com alunos em aula de violão" id="music--biography-100000-9">
    </div>
  </div>
`
    }
}