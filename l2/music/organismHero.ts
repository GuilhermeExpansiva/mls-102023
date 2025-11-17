/// <mls shortName="organismHero" project="102023" folder="music" enhancement="_100554_enhancementLit" groupName="music" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

@customElement('music--organism-hero-102023')
export class organismHero extends IcaOrganismBase {
    render(){
        return html`<div class="hero-container" id="music--hero-100000-1">
    <div class="hero-overlay" id="music--hero-100000-2"></div>
    <div class="hero-content" id="music--hero-100000-3">
      <h1 class="hero-title" id="music--hero-100000-4">Bem-vindo às Aulas de Música!</h1>
      <p class="hero-subtitle" id="music--hero-100000-5">Descubra o prazer de tocar piano, violão ou cantar com um professor experiente.</p>
      <button class="hero-button" id="music--hero-100000-6">Agendar Aula</button>
    </div>
  </div>
`
    }
}