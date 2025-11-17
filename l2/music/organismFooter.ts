/// <mls shortName="organismFooter" project="102023" folder="music" enhancement="_100554_enhancementLit" groupName="music" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

@customElement('music--organism-footer-102023')
export class organismFooter extends IcaOrganismBase {
    render(){
        return html`<div class="footer-container" id="music--footer-100000-1">
    <div class="footer-links" id="music--footer-100000-2">
      <a href="#" class="footer-link" id="music--footer-100000-3">Instagram</a>
      <a href="#" class="footer-link" id="music--footer-100000-4">Facebook</a>
    </div>
    <div class="footer-copyright" id="music--footer-100000-5">© 2025 Professor de Música. Todos os direitos reservados.</div>
  </div>
`
    }
}