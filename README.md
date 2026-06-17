# 🎵 Spotify Clone — React Native
 
Clone da interface do Spotify desenvolvido em **React Native** com **TypeScript** e **Expo**. O projeto replica a experiência visual do app de música com telas de autenticação, home e navegação por abas, além de uma biblioteca de componentes reutilizáveis.
 
---
 
## 📋 Índice
 
- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Navegação](#navegação)
- [Telas](#telas)
- [Componentes](#componentes)
- [Dados Mockados](#dados-mockados)
- [Como Executar](#como-executar)
---
 
## Visão Geral
 
O projeto replica as principais telas do Spotify com foco em fidelidade visual, utilizando tema escuro (`#101010`, `#1B1B1A`) e verde característico (`#24BD48`). Conta com fluxo completo de navegação: Login → Home com bottom tabs. Os componentes são altamente reutilizáveis e aceitam props para customização de estilo.
 
---
 
## Tecnologias
 
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [@react-navigation/native](https://reactnavigation.org/) — navegação entre telas
- [@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/) — navegação em pilha (Stack)
- [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/) — abas inferiores
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) — ícones (FontAwesome, Ionicons)
---
 
## Estrutura do Projeto
 
```
src/
├── pages/
│   ├── Login/
│   │   ├── index.tsx         # Tela de login com inputs e botões sociais
│   │   └── style.ts
│   ├── Home/
│   │   ├── index.tsx         # Tela principal com playlists e recomendações
│   │   └── style.ts
│   ├── Buscar/
│   │   └── index.tsx         # Tela de busca (placeholder)
│   ├── SuaBiblioteca/
│   │   └── index.tsx         # Tela de biblioteca (placeholder)
│   └── Premium/
│       └── index.tsx         # Tela premium (placeholder)
│
├── routes/
│   ├── index.tsx             # Ponto de entrada da navegação
│   ├── stack.tsx             # Navegador Stack (Login → Home)
│   ├── tabs.tsx              # Navegador Tab (abas inferiores)
│   ├── style.ts              # Estilos da barra de abas
│   └── navigation.ts         # Tipagem das rotas (Stack e Tabs)
│
├── components/
│   ├── Botao/
│   │   ├── index.tsx         # Botão principal com ícone opcional
│   │   └── style.ts
│   ├── BotaoCadastro/
│   │   ├── index.tsx         # Link sublinhado para cadastro/recuperação
│   │   └── style.ts
│   ├── BotaoFiltro/
│   │   ├── index.tsx         # Botão de filtro com estado ativo/inativo
│   │   └── style.ts
│   ├── BotaoVerMais/
│   │   ├── index.tsx         # Botão discreto "Ver mais"
│   │   └── style.ts
│   ├── CardFeitoParaVoce/
│   │   ├── index.tsx         # Card vertical com capa, título e subtítulo
│   │   └── style.ts
│   ├── CardPlaylist/
│   │   ├── index.tsx         # Card horizontal compacto de playlist
│   │   └── style.ts
│   └── InputCampo/
│       ├── index.tsx         # Input de texto com suporte a senha
│       └── style.ts
│
├── data/
│   ├── dadosListRecentemente.tsx   # Álbuns tocados recentemente
│   ├── dadosPlayList.tsx           # Playlists do usuário
│   └── dadosRadarList.tsx          # Radar de novidades
│
└── assets/
    ├── fotoPerfil.jpg
    ├── search.png
    ├── facebook.png
    ├── apple.png
    ├── imagemCapaTocadasRecentemente/
    ├── imagensCapaAlbum/
    └── imagensCapaRadar/
```
 
---
 
## Navegação
 
O app usa uma arquitetura de navegação em dois níveis:
 
```
Routers (index.tsx)
└── StackRouters (stack.tsx)
    ├── StackLogin  →  <Login />
    └── StackHome   →  TabsRouters (tabs.tsx)
                        ├── TabsHome          →  <Home />
                        ├── TabsBuscar        →  <Buscar />
                        ├── TabsSuaBiblioteca →  <SuaBiblioteca />
                        └── TabsPremium       →  <Premium />
```
 
A tipagem das rotas é feita em `navigation.ts` com os tipos `ParametrosRotasStack` e `ParametrosRotasTabs`, declarados globalmente no namespace `ReactNavigation` para uso com `useNavigation()` sem cast manual.
 
---
 
## Telas
 
### `Login`
Tela de autenticação com:
- Botões de login social (Google, Facebook, Apple)
- Campos de e-mail/usuário e senha (com toggle de visibilidade)
- Linha divisória entre as seções
- Links para recuperar senha e criar conta
- Ao fazer login, navega para `StackHome`
### `Home`
Tela principal com:
- Header com foto de perfil, saudação, ícone de notificação e histórico
- Filtros por categoria: **Tudo**, **Música**, **Podcasts**
- Grade 2×N de playlists (`CardPlaylist`)
- Seção "Feito para você" com scroll horizontal (`CardFeitoParaVoce`)
- Seção "Tocados recentemente" com scroll horizontal (`CardFeitoParaVoce`)
### `Buscar` / `SuaBiblioteca` / `Premium`
Telas em desenvolvimento — exibem placeholder centralizado.
 
---
 
## Componentes
 
### `Botao`
Botão principal com suporte a ícone lateral e estilos customizáveis.
 
```tsx
<Botao
  placeHolder="Continue with Google"
  source={googleLogo}
  onChange={() => navigate.navigate('StackHome')}
/>
```
 
---
 
### `BotaoCadastro`
Botão de link com texto sublinhado, usado para recuperar senha ou ir ao cadastro.
 
```tsx
<BotaoCadastro placeHolder="Forgot your password?" />
```
 
---
 
### `BotaoFiltro`
Botão de filtro com dois estados visuais: ativo (verde `#24BD48`) e inativo (escuro `#1C1C1C`).
 
```tsx
<BotaoFiltro
  placeHolder="Música"
  estaAtivo={filtroAtivo === "Música"}
  onChange={() => setFiltroAtivo("Música")}
/>
```

---
 
### `BotaoVerMais`
Botão discreto com texto em cinza (`#B0B0AF`), para ações secundárias como "Ver tudo".
 
```tsx
<BotaoVerMais placeHolder="Ver tudo" />
```
 
---
 
### `CardFeitoParaVoce`
Card vertical (140×140px) exibindo capa do álbum, título e subtítulo. Usado nas seções horizontais da Home.
 
```tsx
<CardFeitoParaVoce
  titulo="After Hours"
  subtitulo="Álbum • The Weeknd"
  imagem={capaTocadas1}
/>
```

---
 
### `CardPlaylist`
Card horizontal compacto de playlist, com capa à esquerda (50×50px) e título à direita. Exibido em grade de 2 colunas na Home.
 
```tsx
<CardPlaylist
  titulo="Músicas Curtidas"
  imagem={imagemCapa1}
/>
```
 
---
 
### `InputCampo`
Campo de entrada com label, placeholder customizável, suporte a modo senha com ícone de olho (FontAwesome) para mostrar/ocultar. Herda todas as props nativas do `TextInput`.
 
```tsx
<InputCampo
  textoInput="Email or username"
  placeHolder="Email or username"
/>
 
<InputCampo
  textoInput="Password"
  placeHolder="Password"
  isPassword={true}
  onChangeText={setSenha}
/>
```
 
---
 
## Dados Mockados
 
Os dados de exemplo estão em `src/data/` e simulam respostas de uma API:
 
### `dadosListRecentemente`
Álbuns tocados recentemente — After Hours (The Weeknd), good kid m.A.A.d city (Kendrick Lamar), I Love None Of Summer (Kaash Paige), Free Spirit (Khalid).
 
### `dadosPlayList`
Playlists do usuário — Músicas Curtidas, Daily Mix 1, Rap Brasil, Entardecer, Rock Classics, Pop Chill.
 
### `dadosRadarList`
Radar de novidades — Your Daily Mix 1, Release Radar, Brainstorm, Discover Weekly, Radar de Novidades.
 
---
 
## Como Executar
 
### Pré-requisitos
 
- Node.js >= 18
- Expo CLI
```bash
npm install -g expo-cli
```
 
### Instalação
 
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/spotify-clone.git
 
# Entre na pasta
cd spotify-clone
 
# Instale as dependências
npm install
```
 
### Rodando o projeto
 
```bash
npx expo start
```
 
Escaneie o QR code com o app **Expo Go** (Android ou iOS) ou rode em um emulador.
 
---
 
## 📄 Licença
 
Este projeto foi desenvolvido para fins de estudo e não possui afiliação com o Spotify AB.
 
---
 
## 👨‍💻 Desenvolvedor
 
Desenvolvido por **Pedro Augusto Bastos Dayer**
 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-dayer-4a630b398/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PedroDayer)
 
