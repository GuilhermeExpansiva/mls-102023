/// <mls shortName="organismMediaGallery" project="102023" folder="music" enhancement="_100554_enhancementLit" groupName="music" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

@customElement('music--organism-media-gallery-102023')
export class organismMediaGallery extends IcaOrganismBase {
    render(){
        return html`<h2 class="gallery-title" id="music--media-gallery-100000-1">Galeria de Performances</h2>
<div class="gallery-grid" id="music--media-gallery-100000-2">
  <div class="gallery-item" id="music--media-gallery-100000-3">
    <img src="https://images.unsplash.com/photo-1671492329310-4af9c7896776?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGRlJTIwcGlhbm8lMjBhbyUyMHZpdm98ZW58MHx8fHwxNzYzMzg0NzQ4fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Performance de piano ao vivo" id="music--media-gallery-100000-4">
    <div class="lightbox-trigger" onclick="openLightbox('lightbox-1')" id="music--media-gallery-100000-5">🔍</div>
  </div>
  <div class="gallery-item" id="music--media-gallery-100000-6">
    <video controls="" id="music--media-gallery-100000-7">
      <source src="{{gallery-performance-video-1}}" type="video/mp4" id="music--media-gallery-100000-8">
      Seu navegador não suporta vídeo.
    </video>
    <div class="lightbox-trigger" onclick="openLightbox('lightbox-2')" id="music--media-gallery-100000-9">🔍</div>
  </div>
  <div class="gallery-item" id="music--media-gallery-100000-10">
    <img src="https://images.unsplash.com/photo-1542844985-d6ee1fc9b891?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxhdWxhJTIwZGUlMjB2aW9sJUMzJUEzbyUyMGVtJTIwZ3J1cG98ZW58MHx8fHwxNzYzMzg0NzQ4fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Aula de violão em grupo" id="music--media-gallery-100000-11">
    <div class="lightbox-trigger" onclick="openLightbox('lightbox-3')" id="music--media-gallery-100000-12">🔍</div>
  </div>
  <div class="gallery-item" id="music--media-gallery-100000-13">
    <img src="https://images.unsplash.com/photo-1645287024724-76945b77f462?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGRlJTIwY2FudG8lMjBzb2xvfGVufDB8fHx8MTc2MzM4NDc0OXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Performance de canto solo" id="music--media-gallery-100000-14">
    <div class="lightbox-trigger" onclick="openLightbox('lightbox-4')" id="music--media-gallery-100000-15">🔍</div>
  </div>
  <div class="gallery-item" id="music--media-gallery-100000-16">
    <video controls="" id="music--media-gallery-100000-17">
      <source src="{{gallery-performance-video-2}}" type="video/mp4" id="music--media-gallery-100000-18">
      Seu navegador não suporta vídeo.
    </video>
    <div class="lightbox-trigger" onclick="openLightbox('lightbox-5')" id="music--media-gallery-100000-19">🔍</div>
  </div>
  <div class="gallery-item" id="music--media-gallery-100000-20">
    <img src="https://images.unsplash.com/photo-1615779979540-149702d79d52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjb25jZXJ0byUyMGRlJTIwcGlhbm98ZW58MHx8fHwxNzYzMzg0NzQ5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Concerto de piano" id="music--media-gallery-100000-21">
    <div class="lightbox-trigger" onclick="openLightbox('lightbox-6')" id="music--media-gallery-100000-22">🔍</div>
  </div>
</div>
<div id="lightbox-1" class="lightbox" onclick="closeLightbox('lightbox-1')">
  <span class="close-btn" onclick="closeLightbox('lightbox-1')" id="music--media-gallery-100000-23">×</span>
  <div class="lightbox-content" id="music--media-gallery-100000-24">
    <img src="https://images.unsplash.com/photo-1671492329310-4af9c7896776?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGRlJTIwcGlhbm8lMjBhbyUyMHZpdm98ZW58MHx8fHwxNzYzMzg0NzQ4fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Performance de piano ao vivo" id="music--media-gallery-100000-25">
  </div>
</div>
<div id="lightbox-2" class="lightbox" onclick="closeLightbox('lightbox-2')">
  <span class="close-btn" onclick="closeLightbox('lightbox-2')" id="music--media-gallery-100000-26">×</span>
  <div class="lightbox-content" id="music--media-gallery-100000-27">
    <video controls="" id="music--media-gallery-100000-28">
      <source src="{{gallery-performance-video-1}}" type="video/mp4" id="music--media-gallery-100000-29">
      Seu navegador não suporta vídeo.
    </video>
  </div>
</div>
<div id="lightbox-3" class="lightbox" onclick="closeLightbox('lightbox-3')">
  <span class="close-btn" onclick="closeLightbox('lightbox-3')" id="music--media-gallery-100000-30">×</span>
  <div class="lightbox-content" id="music--media-gallery-100000-31">
    <img src="https://images.unsplash.com/photo-1542844985-d6ee1fc9b891?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxhdWxhJTIwZGUlMjB2aW9sJUMzJUEzbyUyMGVtJTIwZ3J1cG98ZW58MHx8fHwxNzYzMzg0NzQ4fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Aula de violão em grupo" id="music--media-gallery-100000-32">
  </div>
</div>
<div id="lightbox-4" class="lightbox" onclick="closeLightbox('lightbox-4')">
  <span class="close-btn" onclick="closeLightbox('lightbox-4')" id="music--media-gallery-100000-33">×</span>
  <div class="lightbox-content" id="music--media-gallery-100000-34">
    <img src="https://images.unsplash.com/photo-1645287024724-76945b77f462?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGRlJTIwY2FudG8lMjBzb2xvfGVufDB8fHx8MTc2MzM4NDc0OXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Performance de canto solo" id="music--media-gallery-100000-35">
  </div>
</div>
<div id="lightbox-5" class="lightbox" onclick="closeLightbox('lightbox-5')">
  <span class="close-btn" onclick="closeLightbox('lightbox-5')" id="music--media-gallery-100000-36">×</span>
  <div class="lightbox-content" id="music--media-gallery-100000-37">
    <video controls="" id="music--media-gallery-100000-38">
      <source src="{{gallery-performance-video-2}}" type="video/mp4" id="music--media-gallery-100000-39">
      Seu navegador não suporta vídeo.
    </video>
  </div>
</div>
<div id="lightbox-6" class="lightbox" onclick="closeLightbox('lightbox-6')">
  <span class="close-btn" onclick="closeLightbox('lightbox-6')" id="music--media-gallery-100000-40">×</span>
  <div class="lightbox-content" id="music--media-gallery-100000-41">
    <img src="https://images.unsplash.com/photo-1615779979540-149702d79d52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjb25jZXJ0byUyMGRlJTIwcGlhbm98ZW58MHx8fHwxNzYzMzg0NzQ5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Concerto de piano" id="music--media-gallery-100000-42">
  </div>
</div>
<script id="music--media-gallery-100000-43">
function openLightbox(id) {
  document.getElementById(id).style.display = 'flex';
}
function closeLightbox(id) {
  document.getElementById(id).style.display = 'none';
}
</script>
`
    }
}