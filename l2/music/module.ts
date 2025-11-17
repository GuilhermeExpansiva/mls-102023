/// <mls shortName="module" project="102023" folder="music" groupName="music" enhancement="_blank" />

export const moduleConfig = {
  theme: "music",
  initialPage: "homePage"
}

export const payload3 = {
  "finalModuleDetails": {
    "userLanguage": "pt",
    "executionRegions": "Brazil",
    "userPrompt": "criar site institucional de professor de musica",
    "moduleGoal": "Criar um site institucional para um professor de música, apresentando suas aulas, biografia e serviços, com foco em alunos e pais interessados em aulas de música.",
    "moduleName": "music",
    "requirements": [
      "must: O site deve suportar papéis como administrador (para o professor gerenciar conteúdo), público (visitantes) e cliente (alunos para inscrição em aulas).",
      "must: O público-alvo principal são alunos interessados em aulas de música (de iniciantes a avançados) e pais que desejam matricular seus filhos.",
      "must: O tom do site deve ser amigável e profissional, transmitindo confiança e entusiasmo pela música, mantendo tudo conciso.",
      "must: O site deve suportar apenas o idioma português.",
      "must: Incluir seções principais como biografia do professor, portfólio de aulas oferecidas e galeria com fotos ou vídeos de performances.",
      "must: Incluir funcionalidades interativas como formulário de contato simples, opção para agendamento de aulas online e links para redes sociais do professor.",
      "must: O design deve ser clean e moderno, com cores vibrantes como azul e amarelo para representar música, e totalmente responsivo para dispositivos móveis e tablets.",
      "must: O professor ensina principalmente piano e violão para iniciantes, mas também oferece aulas de canto para alunos intermediários.",
      "must: As aulas individuais custam R$ 50 por hora, e há pacotes mensais com desconto para 4 aulas semanais.",
      "must: Vamos integrar Instagram e Facebook, com botões para compartilhar posts diretamente do site e um feed embutido das últimas publicações.",
      "must: Usaremos HTTPS, validação de formulários e conformidade com a LGPD, evitando armazenar dados sensíveis desnecessariamente.",
      "must: Prefiro menus hambúrguer em mobile, com imagens otimizadas e botões de ação rápida para contato e agendamento."
    ],
    "userRequestsEnhancements": [
      {
        "description": "O site poderia incluir uma seção de blog com dicas de música para engajar mais visitantes?",
        "priority": "could"
      },
      {
        "description": "Seria desejável adicionar vídeos tutoriais gratuitos para atrair alunos potenciais?",
        "priority": "could"
      },
      {
        "description": "O site poderia ter um sistema de newsletter para atualizações sobre aulas e eventos?",
        "priority": "could"
      },
      {
        "description": "Seria útil incluir depoimentos de alunos na galeria para construir credibilidade?",
        "priority": "could"
      },
      {
        "description": "O site poderia suportar múltiplos idiomas no futuro, como inglês para alunos internacionais?",
        "priority": "could"
      }
    ]
  },
  "pages": [
    {
      "pageSequential": 0,
      "pageName": "homePage",
      "pageGoal": "Página inicial apresentando uma visão geral do professor e seus serviços.",
      "pageRequirements": [
        "Exibir biografia resumida, portfólio de aulas e links para outras seções.",
        "Incluir botões de ação rápida para contato e agendamento."
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "aboutPage",
      "pageGoal": "Página dedicada à biografia detalhada do professor.",
      "pageRequirements": [
        "Apresentar história, experiência e paixão pela música."
      ]
    },
    {
      "pageSequential": 2,
      "pageName": "portfolioPage",
      "pageGoal": "Página mostrando as aulas oferecidas, incluindo piano, violão e canto.",
      "pageRequirements": [
        "Detalhar preços e planos de aulas.",
        "Incluir informações sobre níveis de alunos."
      ]
    },
    {
      "pageSequential": 3,
      "pageName": "galleryPage",
      "pageGoal": "Galeria com fotos e vídeos de performances.",
      "pageRequirements": [
        "Exibir mídia de forma organizada e responsiva."
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "contactPage",
      "pageGoal": "Página com formulário de contato e informações de redes sociais.",
      "pageRequirements": [
        "Incluir integração com Instagram e Facebook.",
        "Garantir segurança com validação e LGPD."
      ]
    },
    {
      "pageSequential": 5,
      "pageName": "schedulePage",
      "pageGoal": "Página para agendamento online de aulas.",
      "pageRequirements": [
        "Formulário para inscrição e agendamento.",
        "Integração com calendário ou sistema de reserva."
      ]
    }
  ],
  "plugins": [
    {
      "pluginSequential": 0,
      "pluginName": "pluginSocialMedia",
      "pluginType": "third-party",
      "pluginGoal": "Integrar feeds e compartilhamento do Instagram e Facebook.",
      "pluginRequirements": [
        "Exibir feed embutido das últimas publicações.",
        "Adicionar botões para compartilhar posts."
      ]
    },
    {
      "pluginSequential": 1,
      "pluginName": "pluginMobileMenu",
      "pluginType": "ui",
      "pluginGoal": "Fornecer menu hambúrguer responsivo para dispositivos móveis.",
      "pluginRequirements": [
        "Otimizar navegação em mobile com botões de ação rápida."
      ]
    }
  ],
  "pagesWireframe": [
    {
      "pageSequential": 0,
      "pageName": "homePage",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-hero></organism-hero>",
        "<organism-summary-about></organism-summary-about>",
        "<organism-summary-portfolio></organism-summary-portfolio>",
        "<organism-cta-buttons></organism-cta-buttons>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "aboutPage",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-biography></organism-biography>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 2,
      "pageName": "portfolioPage",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-lessons-list></organism-lessons-list>",
        "<organism-pricing></organism-pricing>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 3,
      "pageName": "galleryPage",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-media-gallery></organism-media-gallery>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "contactPage",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-contact-form></organism-contact-form>",
        "<organism-social-links></organism-social-links>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 5,
      "pageName": "schedulePage",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-schedule-form></organism-schedule-form>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    }
  ],
  "organism": [
    {
      "organismSequential": 0,
      "organismTag": "organism-nav",
      "planning": {
        "context": "Navegação principal do site, presente em todas as páginas para acesso rápido às seções.",
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
        "constraints": [
          "Deve ser totalmente responsivo.",
          "Usar cores do tema para consistência."
        ]
      }
    },
    {
      "organismSequential": 1,
      "organismTag": "organism-hero",
      "planning": {
        "context": "Seção de destaque na página inicial para capturar atenção.",
        "goal": "Apresentar uma imagem ou vídeo hero com título e chamada para ação.",
        "userStories": [
          {
            "story": "Como pai interessado, quero ver imediatamente o que o professor oferece.",
            "derivedRequirements": [
              {
                "description": "Incluir título atrativo e botão para agendamento."
              }
            ]
          }
        ],
        "constraints": [
          "Otimizar imagens para mobile."
        ]
      }
    },
    {
      "organismSequential": 2,
      "organismTag": "organism-summary-about",
      "planning": {
        "context": "Resumo da biografia na home page.",
        "goal": "Mostrar breve descrição do professor e sua experiência.",
        "userStories": [
          {
            "story": "Como aluno potencial, quero conhecer rapidamente o professor.",
            "derivedRequirements": [
              {
                "description": "Exibir texto conciso e foto."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 3,
      "organismTag": "organism-summary-portfolio",
      "planning": {
        "context": "Resumo das aulas na home page.",
        "goal": "Listar instrumentos ensinados de forma resumida.",
        "userStories": [
          {
            "story": "Como visitante, quero ver quais aulas estão disponíveis.",
            "derivedRequirements": [
              {
                "description": "Incluir ícones ou imagens para piano, violão e canto."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 4,
      "organismTag": "organism-cta-buttons",
      "planning": {
        "context": "Botões de chamada para ação na home.",
        "goal": "Incentivar contato e agendamento.",
        "userStories": [
          {
            "story": "Como pai, quero botões fáceis para entrar em contato ou agendar.",
            "derivedRequirements": [
              {
                "description": "Botões para 'Contato' e 'Agendar Aula'."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 5,
      "organismTag": "organism-footer",
      "planning": {
        "context": "Rodapé do site com informações de contato e links.",
        "goal": "Fornecer links para redes sociais e copyright.",
        "userStories": [
          {
            "story": "Como visitante, quero acessar redes sociais facilmente.",
            "derivedRequirements": [
              {
                "description": "Incluir ícones para Instagram e Facebook."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 6,
      "organismTag": "organism-biography",
      "planning": {
        "context": "Página sobre, detalhando a biografia.",
        "goal": "Apresentar história completa do professor.",
        "userStories": [
          {
            "story": "Como aluno, quero ler a biografia para confiar no professor.",
            "derivedRequirements": [
              {
                "description": "Texto detalhado com fotos."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 7,
      "organismTag": "organism-lessons-list",
      "planning": {
        "context": "Lista de aulas no portfólio.",
        "goal": "Detalhar piano, violão e canto com níveis.",
        "userStories": [
          {
            "story": "Como iniciante, quero ver se há aulas para meu nível.",
            "derivedRequirements": [
              {
                "description": "Separar por instrumento e nível."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 8,
      "organismTag": "organism-pricing",
      "planning": {
        "context": "Preços e planos no portfólio.",
        "goal": "Mostrar custos de aulas individuais e pacotes.",
        "userStories": [
          {
            "story": "Como pai, quero ver preços claros.",
            "derivedRequirements": [
              {
                "description": "Tabela com R$ 50/hora e pacotes mensais."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 9,
      "organismTag": "organism-media-gallery",
      "planning": {
        "context": "Galeria de fotos e vídeos.",
        "goal": "Exibir performances de forma interativa.",
        "userStories": [
          {
            "story": "Como visitante, quero ver exemplos de aulas ou performances.",
            "derivedRequirements": [
              {
                "description": "Grid responsivo com lightbox."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 10,
      "organismTag": "organism-contact-form",
      "planning": {
        "context": "Formulário de contato.",
        "goal": "Permitir envio de mensagens seguras.",
        "userStories": [
          {
            "story": "Como aluno, quero enviar dúvidas via formulário.",
            "derivedRequirements": [
              {
                "description": "Campos para nome, email, mensagem, com validação."
              }
            ]
          }
        ],
        "constraints": [
          "Conformidade com LGPD, não armazenar desnecessariamente."
        ]
      }
    },
    {
      "organismSequential": 11,
      "organismTag": "organism-social-links",
      "planning": {
        "context": "Links para redes sociais.",
        "goal": "Integrar Instagram e Facebook com feed e compartilhamento.",
        "userStories": [
          {
            "story": "Como seguidor, quero ver posts recentes.",
            "derivedRequirements": [
              {
                "description": "Feed embutido e botões de share."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 12,
      "organismTag": "organism-schedule-form",
      "planning": {
        "context": "Formulário de agendamento.",
        "goal": "Permitir inscrição e reserva de aulas.",
        "userStories": [
          {
            "story": "Como aluno, quero agendar aula online.",
            "derivedRequirements": [
              {
                "description": "Campos para data, horário, instrumento, com calendário."
              }
            ]
          }
        ]
      }
    }
  ],
  "visualIdentity": {
    "logoDescription": "An SVG logo featuring musical notes intertwined with a piano key and guitar strings, in a clean, modern style with vibrant blue and yellow accents.",
    "fontFamily": "Charlie Display for headings, serif for secondary elements to evoke musical elegance.",
    "iconStyle": "outline",
    "illustrationStyle": "Flat illustrations with musical motifs, using clean lines and vibrant colors.",
    "colorPalette": {
      "primary": "#1C91CD",
      "secondary": "#FAAD14",
      "text": "#403f3f",
      "background": "#ffffff",
      "border": "#E6E6E6",
      "error": "#FF4D4F",
      "warning": "#FAAD14",
      "success": "#52C41A"
    }
  },
  "tokens": {
    "description": "Tokens ajustados para o tema musical, com azul e amarelo vibrantes, mantendo acessibilidade e suporte a dark mode.",
    "themeName": "music",
    "color": {
      "text-primary-color-lighter": "#535353",
      "text-primary-color-lighter-hover": "#5f5f5f",
      "text-primary-color-lighter-focus": "#4a4a4a",
      "text-primary-color-lighter-disabled": "#696969",
      "text-primary-color": "#403f3f",
      "text-primary-color-hover": "#4b4a4a",
      "text-primary-color-focus": "#353434",
      "text-primary-color-disabled": "#525151",
      "text-primary-color-darker": "#000000",
      "text-primary-color-darker-hover": "#1a1a1a",
      "text-primary-color-darker-focus": "#0d0d0d",
      "text-primary-color-darker-disabled": "#262626",
      "text-secondary-color-lighter": "#408EC8",
      "text-secondary-color-lighter-hover": "#4a9adb",
      "text-secondary-color-lighter-focus": "#377bb0",
      "text-secondary-color-lighter-disabled": "#629fd2",
      "text-secondary-color": "#1C91CD",
      "text-secondary-color-hover": "#2a9edb",
      "text-secondary-color-focus": "#1786b7",
      "text-secondary-color-disabled": "#55b4e1",
      "text-secondary-color-darker": "#0F6FA9",
      "text-secondary-color-darker-hover": "#1b7bb5",
      "text-secondary-color-darker-focus": "#0c6495",
      "text-secondary-color-darker-disabled": "#3a9ec1",
      "bg-primary-color-lighter": "#ffffff",
      "bg-primary-color-lighter-hover": "#f2f2f2",
      "bg-primary-color-lighter-focus": "#e6e6e6",
      "bg-primary-color-lighter-disabled": "#d9d9d9",
      "bg-primary-color": "#ffffff",
      "bg-primary-color-hover": "#f2f2f2",
      "bg-primary-color-focus": "#e6e6e6",
      "bg-primary-color-disabled": "#d9d9d9",
      "bg-primary-color-darker": "#fafafa",
      "bg-primary-color-darker-hover": "#f5f5f5",
      "bg-primary-color-darker-focus": "#eeeeee",
      "bg-primary-color-darker-disabled": "#e0e0e0",
      "bg-secondary-color-lighter": "#F9F9F9",
      "bg-secondary-color-lighter-hover": "#f4f4f4",
      "bg-secondary-color-lighter-focus": "#efefef",
      "bg-secondary-color-lighter-disabled": "#eaeaea",
      "bg-secondary-color": "#E6E6E6",
      "bg-secondary-color-hover": "#d9d9d9",
      "bg-secondary-color-focus": "#cccccc",
      "bg-secondary-color-disabled": "#bfbfbf",
      "bg-secondary-color-darker": "#C0C0C0",
      "bg-secondary-color-darker-hover": "#b3b3b3",
      "bg-secondary-color-darker-focus": "#a6a6a6",
      "bg-secondary-color-darker-disabled": "#999999",
      "grey-color-lighter": "#F9FAFB",
      "grey-color-light": "#F2F2F2",
      "grey-color": "#E6E6E6",
      "grey-color-dark": "#D3D3D3",
      "grey-color-darker": "#C0C0C0",
      "error-color": "#FF4D4F",
      "error-color-hover": "#ff6666",
      "error-color-focus": "#e63e3e",
      "error-color-disabled": "#ff9999",
      "success-color": "#52C41A",
      "success-color-hover": "#66d93f",
      "success-color-focus": "#4ca610",
      "success-color-disabled": "#8cd78e",
      "warning-color": "#FAAD14",
      "warning-color-hover": "#fbbd34",
      "warning-color-focus": "#e09a0e",
      "warning-color-disabled": "#fdd55e",
      "info-color": "#0a6dc9",
      "info-color-hover": "#1b7edb",
      "info-color-focus": "#006ab3",
      "info-color-disabled": "#66a8e1",
      "active-color": "#1890FF",
      "active-color-hover": "#1a99ff",
      "active-color-focus": "#0e80cc",
      "active-color-disabled": "#66b3ff",
      "link-color": "#1890FF",
      "link-color-hover": "#1a99ff",
      "link-color-focus": "#0e80cc",
      "link-color-disabled": "#66b3ff",
      "_dark-text-primary-color-lighter": "#FFFFFF",
      "_dark-text-primary-color-lighter-hover": "#f2f2f2",
      "_dark-text-primary-color-lighter-focus": "#e6e6e6",
      "_dark-text-primary-color-lighter-disabled": "#d9d9d9",
      "_dark-text-primary-color": "#e6edf3",
      "_dark-text-primary-color-hover": "#d1d9e4",
      "_dark-text-primary-color-focus": "#c3cfd8",
      "_dark-text-primary-color-disabled": "#b0b8c4",
      "_dark-text-primary-color-darker": "#8d96a0",
      "_dark-text-primary-color-darker-hover": "#a1aab0",
      "_dark-text-primary-color-darker-focus": "#7a828a",
      "_dark-text-primary-color-darker-disabled": "#b1b7bd",
      "_dark-text-secondary-color-lighter": "#5294c7",
      "_dark-text-secondary-color-lighter-hover": "#63a2d8",
      "_dark-text-secondary-color-lighter-focus": "#4787b2",
      "_dark-text-secondary-color-lighter-disabled": "#78b0e0",
      "_dark-text-secondary-color": "#56a8d1",
      "_dark-text-secondary-color-hover": "#68b8e0",
      "_dark-text-secondary-color-focus": "#4b9cc4",
      "_dark-text-secondary-color-disabled": "#80c4e5",
      "_dark-text-secondary-color-darker": "#bddef3",
      "_dark-text-secondary-color-darker-hover": "#c7e3f5",
      "_dark-text-secondary-color-darker-focus": "#a3c8e5",
      "_dark-text-secondary-color-darker-disabled": "#d3e9f7",
      "_dark-bg-primary-color-lighter": "#666666",
      "_dark-bg-primary-color-lighter-hover": "#7a7a7a",
      "_dark-bg-primary-color-lighter-focus": "#5c5c5c",
      "_dark-bg-primary-color-lighter-disabled": "#808080",
      "_dark-bg-primary-color": "#0d1117",
      "_dark-bg-primary-color-hover": "#1a1f24",
      "_dark-bg-primary-color-focus": "#0a0e13",
      "_dark-bg-primary-color-disabled": "#2b3036",
      "_dark-bg-primary-color-darker": "#262626",
      "_dark-bg-primary-color-darker-hover": "#333333",
      "_dark-bg-primary-color-darker-focus": "#1f1f1f",
      "_dark-bg-primary-color-darker-disabled": "#404040",
      "_dark-bg-secondary-color-lighter": "#636363",
      "_dark-bg-secondary-color-lighter-hover": "#757575",
      "_dark-bg-secondary-color-lighter-focus": "#4e4e4e",
      "_dark-bg-secondary-color-lighter-disabled": "#808080",
      "_dark-bg-secondary-color": "#161b22",
      "_dark-bg-secondary-color-hover": "#1f2329",
      "_dark-bg-secondary-color-focus": "#0f1418",
      "_dark-bg-secondary-color-disabled": "#2c3238",
      "_dark-bg-secondary-color-darker": "#4b3f3f",
      "_dark-bg-secondary-color-darker-hover": "#5b4f4f",
      "_dark-bg-secondary-color-darker-focus": "#3f2f2f",
      "_dark-bg-secondary-color-darker-disabled": "#6a5c5c",
      "_dark-grey-color-lighter": "#2B2B2B",
      "_dark-grey-color-light": "#414141",
      "_dark-grey-color": "#575757",
      "_dark-grey-color-dark": "#6D6D6D",
      "_dark-grey-color-darker": "#969494",
      "_dark-error-color": "#f9676a",
      "_dark-error-color-hover": "#ff7b7f",
      "_dark-error-color-focus": "#e5565e",
      "_dark-error-color-disabled": "#ff9b9e",
      "_dark-success-color": "#63d42b",
      "_dark-success-color-hover": "#75d93d",
      "_dark-success-color-focus": "#55b825",
      "_dark-success-color-disabled": "#8ade5f",
      "_dark-warning-color": "#eead2b",
      "_dark-warning-color-hover": "#f2b73d",
      "_dark-warning-color-focus": "#d69c1f",
      "_dark-warning-color-disabled": "#f5cd5c",
      "_dark-info-color": "#0b81ef",
      "_dark-info-color-hover": "#1a95f6",
      "_dark-info-color-focus": "#0073d8",
      "_dark-info-color-disabled": "#66b3ef",
      "_dark-active-color": "#0b81ef",
      "_dark-active-color-hover": "#1a95f6",
      "_dark-active-color-focus": "#0073d8",
      "_dark-active-color-disabled": "#66b3ef",
      "_dark-link-color": "#0b81ef",
      "_dark-link-color-hover": "#1a95f6",
      "_dark-link-color-focus": "#0073d8",
      "_dark-link-color-disabled": "#66b3ef"
    },
    "global": {
      "breakpoint-small": "544px",
      "breakpoint-medium": "768px",
      "breakpoint-large": "1012px",
      "transition-slow": "0.2s",
      "transition-normal": "0.3s",
      "transition-fast": "0.5s",
      "space-base-unit": "0.25rem",
      "space-8": "calc(@space-base-unit * 2)",
      "space-16": "calc(@space-base-unit * 4)",
      "space-24": "calc(@space-base-unit * 6)",
      "space-32": "calc(@space-base-unit * 8)",
      "space-40": "calc(@space-base-unit * 10)",
      "space-48": "calc(@space-base-unit * 12)",
      "space-64": "calc(@space-base-unit * 16)"
    },
    "typography": {
      "font-base-unit": ".25rem",
      "font-family-primary": "'Charlie Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      "font-family-secondary": "serif",
      "font-size-12": "calc(@font-base-unit * 3)",
      "font-size-16": "calc(@font-base-unit * 4)",
      "font-size-20": "calc(@font-base-unit * 5)",
      "font-size-24": "calc(@font-base-unit * 6)",
      "font-size-40": "calc(@font-base-unit * 10)",
      "font-size-48": "calc(@font-base-unit * 12)",
      "font-size-64": "calc(@font-base-unit * 16)",
      "line-height-base-unit": "1",
      "line-height-small": "calc(@line-height-base-unit * 1.1)",
      "line-height-medium": "calc(@line-height-base-unit * 1.3)",
      "line-height-large": "calc(@line-height-base-unit * 1.5)",
      "font-weight-lighter": "100",
      "font-weight-light": "200",
      "font-weight-normal": "400",
      "font-weight-bold": "700",
      "font-weight-bolder": "900"
    }
  },
  "obs": [
    "O módulo foi projetado para ser totalmente responsivo, com foco em mobile conforme solicitado.",
    "Integrações de terceiros para redes sociais devem ser implementadas via APIs do Instagram e Facebook.",
    "Segurança de dados segue LGPD, com validação client-side e server-side."
  ]
}