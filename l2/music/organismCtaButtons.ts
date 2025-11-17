/// <mls shortName="organismCtaButtons" project="102023" folder="music" enhancement="_100554_enhancementLit" groupName="music" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

@customElement('music--organism-cta-buttons-102023')
export class organismCtaButtons extends IcaOrganismBase {
    render(){
        return html`<div class="cta-container" id="music--cta-buttons-100000-1">
    <h2 class="cta-title" id="music--cta-buttons-100000-2">Entre em Contato</h2>
    <div class="cta-buttons" id="music--cta-buttons-100000-3">
      <button class="cta-button" id="music--cta-buttons-100000-4">Contato</button>
      <button class="cta-button" id="music--cta-buttons-100000-5">Agendar Aula</button>
    </div>
  </div>
`
    }
}