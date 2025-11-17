/// <mls shortName="organismSummaryAbout" project="102023" folder="music" enhancement="_100554_enhancementLit" groupName="music" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

@customElement('music--organism-summary-about-102023')
export class organismSummaryAbout extends IcaOrganismBase {
    render(){
        return html`<div class="about-container" id="music--summary-about-100000-1">
    <div class="about-text" id="music--summary-about-100000-2">
      <h2 class="about-title" id="music--summary-about-100000-3">Sobre o Professor</h2>
      <p class="about-description" id="music--summary-about-100000-4">Sou Guilherme, professor de música com anos de experiência ensinando piano, violão e canto. Meu objetivo é tornar a música acessível e divertida para alunos de todos os níveis, desde iniciantes até avançados.</p>
    </div>
    <div class="about-photo" id="music--summary-about-100000-5">
      <img src="https://images.unsplash.com/photo-1637081877549-16c05a220892?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBtJUMzJUJBc2ljYSUyMEd1aWxoZXJtZXxlbnwwfHx8fDE3NjMzODQ2NTV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Foto do Professor Guilherme" id="music--summary-about-100000-6">
    </div>
  </div>
`
    }
}