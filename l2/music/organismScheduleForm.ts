/// <mls shortName="organismScheduleForm" project="102023" folder="music" enhancement="_100554_enhancementLit" groupName="music" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

@customElement('music--organism-schedule-form-102023')
export class organismScheduleForm extends IcaOrganismBase {
    render(){
        return html`<h2 class="form-title" id="music--schedule-form-100000-1">Agende sua Aula de Música</h2>
  <form action="/submit-schedule" method="post" id="music--schedule-form-100000-2">
    <div class="form-group" id="music--schedule-form-100000-3">
      <label for="name" id="music--schedule-form-100000-4">Nome Completo</label>
      <input type="text" id="name" name="name" required="">
    </div>
    <div class="form-group" id="music--schedule-form-100000-5">
      <label for="email" id="music--schedule-form-100000-6">E-mail</label>
      <input type="email" id="email" name="email" required="">
    </div>
    <div class="form-group" id="music--schedule-form-100000-7">
      <label for="phone" id="music--schedule-form-100000-8">Telefone</label>
      <input type="tel" id="phone" name="phone" required="">
    </div>
    <div class="form-group" id="music--schedule-form-100000-9">
      <label for="instrument" id="music--schedule-form-100000-10">Instrumento</label>
      <select id="instrument" name="instrument" required="">
        <option value="" id="music--schedule-form-100000-11">Selecione um instrumento</option>
        <option value="piano" id="music--schedule-form-100000-12">Piano</option>
        <option value="violao" id="music--schedule-form-100000-13">Violão</option>
        <option value="canto" id="music--schedule-form-100000-14">Canto</option>
      </select>
    </div>
    <div class="form-group" id="music--schedule-form-100000-15">
      <label for="date" id="music--schedule-form-100000-16">Data da Aula</label>
      <input type="date" id="date" name="date" required="">
    </div>
    <div class="form-group" id="music--schedule-form-100000-17">
      <label for="time" id="music--schedule-form-100000-18">Horário da Aula</label>
      <input type="time" id="time" name="time" required="">
    </div>
    <div class="form-group" id="music--schedule-form-100000-19">
      <label for="message" id="music--schedule-form-100000-20">Mensagem Adicional (Opcional)</label>
      <textarea id="message" name="message" rows="4" style="width: 100%; padding: @space-8; font-family: @font-family-primary; font-size: @font-size-16; border: 1px solid @grey-color; border-radius: 4px; background-color: @bg-primary-color; color: @text-primary-color; resize: vertical;"></textarea>
    </div>
    <button type="submit" class="submit-button" id="music--schedule-form-100000-21">Agendar Aula</button>
  </form>
`
    }
}