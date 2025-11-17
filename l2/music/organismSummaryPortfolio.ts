/// <mls shortName="organismSummaryPortfolio" project="102023" folder="music" enhancement="_100554_enhancementLit" groupName="music" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

@customElement('music--organism-summary-portfolio-102023')
export class organismSummaryPortfolio extends IcaOrganismBase {
    render(){
        return html`<div class="portfolio-container" id="music--summary-portfolio-100000-1">
    <h2 class="portfolio-title" id="music--summary-portfolio-100000-2">Aulas Oferecidas</h2>
    <div class="portfolio-list" id="music--summary-portfolio-100000-3">
      <div class="portfolio-item" id="music--summary-portfolio-100000-4">
        <img src="https://images.unsplash.com/photo-1713256137855-5335010af96a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwcGlhbm8lMjBtJUMzJUJBc2ljYXxlbnwwfHx8fDE3NjMzODQ2NTV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone de Piano" class="portfolio-icon" id="music--summary-portfolio-100000-5">
        <div class="portfolio-name" id="music--summary-portfolio-100000-6">Piano</div>
      </div>
      <div class="portfolio-item" id="music--summary-portfolio-100000-7">
        <img src="https://images.unsplash.com/photo-1603959418770-5e45cb3fc874?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwdmlvbCVDMyVBM28lMjBtJUMzJUJBc2ljYXxlbnwwfHx8fDE3NjMzODQ2NTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone de Violão" class="portfolio-icon" id="music--summary-portfolio-100000-8">
        <div class="portfolio-name" id="music--summary-portfolio-100000-9">Violão</div>
      </div>
      <div class="portfolio-item" id="music--summary-portfolio-100000-10">
        <img src="https://images.unsplash.com/photo-1652626627227-acc5ce198876?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwY2FudG8lMjBtJUMzJUJBc2ljYXxlbnwwfHx8fDE3NjMzODQ2NTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone de Canto" class="portfolio-icon" id="music--summary-portfolio-100000-11">
        <div class="portfolio-name" id="music--summary-portfolio-100000-12">Canto</div>
      </div>
    </div>
  </div>
`
    }
}