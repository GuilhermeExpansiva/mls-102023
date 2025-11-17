/// <mls shortName="organismNav" project="102023" folder="music" groupName="music" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 100000,
    "folder": "music",
    "shortName": "organismNav",
    "type": "organism",
    "devFidelity": "scaffold",
    "group": "music",
    "tags": [
      "lit",
      "organism"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "Navegação principal do site, presente em todas as páginas para acesso rápido às seções.",
    "goal": "Exibir menu de navegação com links para páginas principais, adaptável para mobile com menu hambúrguer.",
    "userStories": [
      {
        "story": "Como visitante, quero navegar facilmente entre as seções do site em qualquer dispositivo.",
        "derivedRequirements": [
          {
            "description": "Implementar menu responsivo com hambúrguer em mobile."
          },
          {
            "description": "Incluir links para Home, Sobre, Portfólio, Galeria, Contato e Agendamento."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Deve ser totalmente responsivo.",
      "Usar cores do tema para consistência."
    ]
  }
}
