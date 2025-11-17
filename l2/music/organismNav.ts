/// <mls shortName="organismNav" project="102023" folder="music" enhancement="_100554_enhancementLit" groupName="music" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

@customElement('music--organism-nav-102023')
export class organismNav extends IcaOrganismBase {
  
    render(){
        return html`<div class="nav-container" id="music--nav-100000-1">
    <div class="logo" id="music--nav-100000-2">Professor de Música</div>
    <nav id="music--nav-100000-3">
      <ul class="menu" id="music--nav-100000-4">
        <li class="menu-item" id="music--nav-100000-5"><a href="#" class="menu-link" id="music--nav-100000-6">Home</a></li>
        <li class="menu-item" id="music--nav-100000-7"><a href="#" class="menu-link" id="music--nav-100000-8">Sobre</a></li>
        <li class="menu-item" id="music--nav-100000-9"><a href="#" class="menu-link" id="music--nav-100000-10">Portfólio</a></li>
        <li class="menu-item" id="music--nav-100000-11"><a href="#" class="menu-link" id="music--nav-100000-12">Galeria</a></li>
        <li class="menu-item" id="music--nav-100000-13"><a href="#" class="menu-link" id="music--nav-100000-14">Contato</a></li>
        <li class="menu-item" id="music--nav-100000-15"><a href="#" class="menu-link" id="music--nav-100000-16">Agendamento</a></li>
      </ul>
    </nav>
    <div class="hamburger" id="music--nav-100000-17">
      <span class="hamburger-line" id="music--nav-100000-18"></span>
      <span class="hamburger-line" id="music--nav-100000-19"></span>
      <span class="hamburger-line" id="music--nav-100000-20"></span>
    </div>
  </div>
`
    }
}