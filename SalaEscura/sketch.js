class Som {
  constructor(tipo, urlAvulsa){
    // determina se vai ou não logar informações ao executar o som
    this.verboso = false;
    // o tipo de som determina qual arquivo de áudio vai ser tocado.
    // caso o tipo não estiver no dicionário, entrega um áudio silencioso
    this.tipo = tipo;
    soundFormats('ogg', 'mp3');
    //determina se o som executa só uma vez ou é contínuo
    this.somEmLooping = false;
    
    this.sonsDic = {
      'aquario':'assets/audio/bubbles.mp3',
      'caixa_musica':'assets/audio/musicbox.mp3',
      'cooler':'assets/audio/cooler.mp3',
      'curto_circuito':'assets/audio/arc2.mp3',
      'gato': 'assets/audio/cat.mp3',
      'gramofone': 'assets/audio/gramofone.mp3',
      'lampada': 'assets/audio/lamp_flicker.mp3',
      'lareira': 'assets/audio/fireplace.mp3',
      'pia':'assets/audio/sink.mp3',
      'porta_abrindo': 'assets/audio/porta_abrindo.mp3',
      'radio':'assets/audio/radio_static.mp3',
      'relogio':'assets/audio/clock.mp3',
      'sintonizar_radio':'assets/audio/tuning_radio.mp3',
      'silencio': 'assets/audio/silencio.mp3',
      'telefone': 'assets/audio/phone.mp3',
      'telefone_pulso': 'assets/audio/phone_pulse2.mp3',
      'torneira_fluxo':'assets/audio/faucet_flow.mp3',
      'torneira_pingo':'assets/audio/faucet_drip.mp3',
      'tv':'assets/audio/tv.mp3',
      
      'Epilogo': './assets/audio/Fase1/Epilogo.mp3',
      'ObjetoBrasaoDescricaoCurta_1': './assets/audio/Fase1/ObjetoBrasaoDescricaoCurta_1.mp3',
      'ObjetoBrasaoDescricaoCurta_2': './assets/audio/Fase1/ObjetoBrasaoDescricaoCurta_2.mp3',
      'ObjetoBrasaoDescricao': './assets/audio/Fase1/ObjetoBrasaoDescricao.mp3',
      'ObjetoEstanteDescricaoCurta_1': './assets/audio/Fase1/ObjetoEstanteDescricaoCurta_1.mp3',
      'ObjetoEstanteDescricaoCurta_2': './assets/audio/Fase1/ObjetoEstanteDescricaoCurta_2.mp3',
      'ObjetoEstanteDescricao': './assets/audio/Fase1/ObjetoEstanteDescricao.mp3',
      'ObjetoLampadaDescricaoCurta_1': './assets/audio/Fase1/ObjetoLampadaDescricaoCurta_1.mp3',
      'ObjetoLampadaDescricaoCurta_2': './assets/audio/Fase1/ObjetoLampadaDescricaoCurta_2.mp3',
      'ObjetoLampadaDescricao': './assets/audio/Fase1/ObjetoLampadaDescricao.mp3',
      'ObjetoPoltronaDescricaoCurta_1': './assets/audio/Fase1/ObjetoPoltronaDescricaoCurta_1.mp3',
      'ObjetoPoltronaDescricaoCurta_2': './assets/audio/Fase1/ObjetoPoltronaDescricaoCurta_2.mp3',
      'ObjetoPoltronaDescricao': './assets/audio/Fase1/ObjetoPoltronaDescricao.mp3',
      'ObjetoPortaDescricaoCurta_1': './assets/audio/Fase1/ObjetoPortaDescricaoCurta_1.mp3',
      'ObjetoPortaDescricaoCurta_2': './assets/audio/Fase1/ObjetoPortaDescricaoCurta_2.mp3',
      'ObjetoPortaDescricao': './assets/audio/Fase1/ObjetoPortaDescricao.mp3',
      'ObjetoQuadroComDica': './assets/audio/Fase1/ObjetoQuadroComDica.mp3',
      'ObjetoQuadroDescricaoCurta_1': './assets/audio/Fase1/ObjetoQuadroDescricaoCurta_1.mp3',
      'ObjetoQuadroDescricaoCurta_2': './assets/audio/Fase1/ObjetoQuadroDescricaoCurta_2.mp3',
      'ObjetoQuadroDescricao': './assets/audio/Fase1/ObjetoQuadroDescricao.mp3',
      'ObjetoRelogioComodaDescricaoCurta_1': './assets/audio/Fase1/ObjetoRelogioComodaDescricaoCurta_1.mp3',
      'ObjetoRelogioComodaDescricaoCurta_2': './assets/audio/Fase1/ObjetoRelogioComodaDescricaoCurta_2.mp3',
      'ObjetoRelogioComodaDescricao': './assets/audio/Fase1/ObjetoRelogioComodaDescricao.mp3',
      'ObjetoTelefoneDescricaoCurta_1': './assets/audio/Fase1/ObjetoTelefoneDescricaoCurta_1.mp3',
      'ObjetoTelefoneDescricaoCurta_2': './assets/audio/Fase1/ObjetoTelefoneDescricaoCurta_2.mp3',
      'ObjetoTelefoneDescricao': './assets/audio/Fase1/ObjetoTelefoneDescricao.mp3',
      'ObjetoTelefoneDialogo': './assets/audio/Fase1/ObjetoTelefoneDialogo.mp3',
      'PainelEstanteDescricaoCurta_1': './assets/audio/Fase1/PainelEstanteDescricaoCurta_1.mp3',
      'PainelEstanteDescricaoCurta_2': './assets/audio/Fase1/PainelEstanteDescricaoCurta_2.mp3',
      'PainelEstanteDescricao': './assets/audio/Fase1/PainelEstanteDescricao.mp3',
      'PainelLampadaDescricaoCurta_1': './assets/audio/Fase1/PainelLampadaDescricaoCurta_1.mp3',
      'PainelLampadaDescricaoCurta_2': './assets/audio/Fase1/PainelLampadaDescricaoCurta_2.mp3',
      'PainelLampadaDescricao': './assets/audio/Fase1/PainelLampadaDescricao.mp3',
      'PainelRelogioDescricaoCurta_1': './assets/audio/Fase1/PainelRelogioDescricaoCurta_1.mp3',
      'PainelRelogioDescricaoCurta_2': './assets/audio/Fase1/PainelRelogioDescricaoCurta_2.mp3',
      'PainelRelogioDescricao': './assets/audio/Fase1/PainelRelogioDescricao.mp3',
      'PainelTelefoneDescricaoCurta_1': './assets/audio/Fase1/PainelTelefoneDescricaoCurta_1.mp3',
      'PainelTelefoneDescricaoCurta_2': './assets/audio/Fase1/PainelTelefoneDescricaoCurta_2.mp3',
      'PainelTelefoneDescricao': './assets/audio/Fase1/PainelTelefoneDescricao.mp3',
      'Prologo': './assets/audio/Fase1/Prologo.mp3',
      'SalaDescricaoCurta': './assets/audio/Fase1/SalaDescricaoCurta.mp3',
      'SalaDescricao': './assets/audio/Fase1/SalaDescricao.mp3',
      'TelaAbertura': './assets/audio/_TelaAbertura/TelaDeAbertura.mp3',
      'tema_birthday': 'assets/audio/_theme/theme_birthday.mp3',
      'tema_main': 'assets/audio/_theme/theme_main.mp3',
      'tema_telefone': 'assets/audio/_theme/theme_get_out_of_here.mp3',
      
      'tutorialEpilogo': 'assets/audio/tutorial/Epilogo.mp3',
      'PainelChaveDescricao': 'assets/audio/tutorial/PainelChaveDescricao.mp3',
      'PainelChaveDescricaoCurta_1': 'assets/audio/tutorial/PainelChaveDescricaoCurta_1.mp3',
      'PainelChaveDescricaoCurta_2': 'assets/audio/tutorial/PainelChaveDescricaoCurta_2.mp3',
      'PainelJanelaDescricao': 'assets/audio/tutorial/PainelJanelaDescricao.mp3',
      'PainelJanelaDescricaoCurta_1': 'assets/audio/tutorial/PainelJanelaDescricaoCurta_1.mp3',
      'PainelJanelaDescricaoCurta_2': 'assets/audio/tutorial/PainelJanelaDescricaoCurta_2.mp3',
      'PainelPortaDescricao': 'assets/audio/tutorial/PainelPortaDescricao.mp3',
      'PainelPortaDescricaoCurta_1': 'assets/audio/tutorial/PainelPortaDescricaoCurta_1.mp3',
      'PainelPortaDescricaoCurta_2': 'assets/audio/tutorial/PainelPortaDescricaoCurta_2.mp3',
      'PainelTVDescricao': 'assets/audio/tutorial/PainelTVDescricao.mp3',
      'PainelTvDescricaoCurta_1': 'assets/audio/tutorial/PainelTvDescricaoCurta_1.mp3',
      'PainelTvDescricaoCurta_2': 'assets/audio/tutorial/PainelTvDescricaoCurta_2.mp3',
      'ObjetoChaveDescricao': 'assets/audio/tutorial/ObjetoChaveDescricao.mp3',
      'ObjetoChaveDescricaoCurta_1': 'assets/audio/tutorial/ObjetoChaveDescricaoCurta_1.mp3',
      'ObjetoChaveDescricaoCurta_2': 'assets/audio/tutorial/ObjetoChaveDescricaoCurta_2.mp3',
      'ObjetoJanelaDescricao': 'assets/audio/tutorial/ObjetoJanelaDescricao.mp3',
      'ObjetoJanelaDescricaoCurta_1': 'assets/audio/tutorial/ObjetoJanelaDescricaoCurta_1.mp3',
      'ObjetoJanelaDescricaoCurta_2': 'assets/audio/tutorial/ObjetoJanelaDescricaoCurta_2.mp3',
      'ObjetoPortaDescricao': 'assets/audio/tutorial/ObjetoPortaDescricao.mp3',
      'ObjetoPortaDescricaoCurta_1': 'assets/audio/tutorial/ObjetoPortaDescricaoCurta_1.mp3',
      'ObjetoPortaDescricaoCurta_2': 'assets/audio/tutorial/ObjetoPortaDescricaoCurta_2.mp3',
      'ObjetoTvDescricao': 'assets/audio/tutorial/ObjetoTvDescricao.mp3',
      'ObjetoTvDescricaoCurta_1': 'assets/audio/tutorial/ObjetoTvDescricaoCurta_1.mp3',
      'ObjetoTvDescricaoCurta_2': 'assets/audio/tutorial/ObjetoTvDescricaoCurta_2.mp3',
      'TutorialPrologo' : 'assets/audio/tutorial/Prologo.mp3',
    }   
    
    if (urlAvulsa) this.arqSom = loadSound(tipo);
    else if (this.sonsDic[tipo] == undefined) this.arqSom = loadSound(this.sonsDic['silencio']);
    else this.arqSom = loadSound(this.sonsDic[tipo]);  
  }
  
  duracao(){
    return this.arqSom.duration() * 1000;
  }
  tocar(){
    this.arqSom.play();
  }
  
  tocarEmLoop(){    
    if(!this.somEmLooping){
      if (this.verboso) console.log(this.tipo + ' tocar em loop');
      this.arqSom.loop();
      this.somEmLooping = true;
    }
  }
  
  ajustarVolume(valor, tempoDeFade){
    this.arqSom.setVolume(valor, tempoDeFade);
  }
  
  definirVerboso(valorBooleano){
    this.verboso=valorBooleano;
  }
  
  parar(){
    this.arqSom.stop();
    this.somEmLooping = false;
  }
  
  // as funções abaixo ajustam o áudio para dar ideia de posicionamento
  aFrente(){
    this.arqSom.pan(0);
    this.arqSom.setVolume(0.5);
  }
  aEsquerda(){
    this.arqSom.pan(-1);
    this.arqSom.setVolume(0.1);
  }
  aDireita(){
    this.arqSom.pan(1);
    this.arqSom.setVolume(0.1);
  }
  atras(){
    this.arqSom.pan(0);
    this.arqSom.setVolume(0.05);
  }
}

class Objeto {
  // o Objeto encapsula os sons e os comportamentos
  constructor(configs){
    // o nome do objeto determina o som a ser executado
    this.nome = configs['nome'];
    this.verboso = configs['verboso']
    
    if (configs['somCustomizado'] != '') this.som = new Som(configs['somCustomizado']);
    else this.som = new Som(this.nome);    
    this.som.definirVerboso(this.verboso);
    this.somContinuo = configs['somContinuo']; // true|false: indica se é um item que emite som constante
    this.somIntro = configs['somIntro']; // som de apresentação do objeto (uma breve descrição)
    this.sonsFoco = configs['sonsFoco']; // sons que tocam ao entrar em foco. Só relembra o jogador do que se trata
    this.idxSomFocoTocando = -1; // indice do som de foco tocando, para permitir interrupção
    this.tocandoFoco = true; // VER DIREITO O QUE FAZ. NÃO ME LEMBRO XD
    this.status = configs['status'];  // string: indica se o item está em alguma situação relevante
    this.foiVisitado = false;

    // lista de ações especiais a serem executadas quando houver interação
    // modelado da sequinte forma: {'string_requisito_acao': ()=>{}}
    this.comportamentosEspeciais = configs['comportamentosEspeciais'];
  }
  
  posicionarFrente(){ this.som.aFrente();}
  
  posicionarDireita(){ this.som.aDireita();}
  
  posicionarEsquerda(){ this.som.aEsquerda();}
  
  posicionarAtras(){ this.som.atras();}
  
  // forcarContinuo permite sobrescrever o comportamento em caso de necessidade
  tocarSom(forcarContinuo){
    if (forcarContinuo || this.somContinuo) this.som.tocarEmLoop();
    else this.som.tocar();
  }

  tocarSomFoco(){
    if (!this.foiVisitado){
      this.somIntro.tocar();
      this.foiVisitado = true;
    }
    else {
      var index = Math.floor(Math.random() * this.sonsFoco.length);
      this.idxSomFocoTocando = index;
      this.sonsFoco[index].tocar();
    }
    this.tocandoFoco = true;
  }

  pararSomFoco(){
    if (this.idxSomFocoTocando != -1) this.sonsFoco[this.idxSomFocoTocando].parar();
    this.idxSomFocoTocando = -1;
    this.somIntro.parar();
    this.tocandoFoco = false;
  }

  entrarEmFoco(){
    if (this.verboso) console.log(this.nome + ": Objeto.entrarEmFoco() executada.");
    if (!this.executarComportamentoEspecial()){
      if (Object.keys(this.comportamentosEspeciais).length == 0) console.log(this.nome + ": Nenhum comportamento especial.");
      else console.log(this.nome + ": Elemento necessário para comportamento especial ausente do inventário.");
      this.tocarSomFoco()
    }
  };
  
  sairDeFoco(){
    if (this.verboso) console.log(this.nome + ": Objeto.sairDeFoco() executada.");
    this.pararSomFoco();
  };

  executarComportamentoEspecial(){
    for (let item in this.comportamentosEspeciais){
      if (inventario.getElementosDisponiveis().indexOf(item) > -1){
        let sucessoNaExecucao = this.comportamentosEspeciais[item]();
        if (sucessoNaExecucao) {
          inventario.consumirElemento(item);
          delete this.comportamentosEspeciais[item];
        }
        if (Object.keys(this.comportamentosEspeciais).length == 0) this.resolvido = true;
        return true;
      }
    }
    return false;
  }

  adicionarComportamentoEspecial(acaoEspecial){
    this.comportamentosEspeciais[acaoEspecial['nome']] = acaoEspecial['funcao']
  }
  
  pararSom() {this.som.parar();}
  
  ajustarVolume(valor){this.som.ajustarVolume(valor);}
  
  alterarSom(novoSom){
    this.som = novoSom;
  }
  
  getListaNomesInteracoes(){
    return Object.keys(this.interacoes);
  }

  definirSomContinuo(tocarSomContinuo){
    this.somContinuo = tocarSomContinuo;
  }
}

class Painel {
  // guarda uma coleção de objetos
  constructor(configs){
    this.nome = configs['nome'];
    this.verboso = configs['verboso'];
    this.objetos = {};
    for (let objeto of configs['objetos']){
      this.objetos[objeto.nome] = objeto;
    }
    this.som = new Som(configs['somPainel']);
    this.somIntro = new Som(configs['somIntro']);
    // permite gravar uma variedade de sons de informação
    // diferentes, pra que não fique repetitivo o mesmo som sempre.
    this.sonsInfo = [];
    for (let nomeSom of configs['sonsInfo']){
      this.sonsInfo.push(new Som(nomeSom));
    }
    this.imagem = loadImage(configs['urlImagem']);
    // indice do Som de informação que está tocando. Ajuda a controlar
    // a navegação, possibilitando parar o áudio que ainda estiver tocando
    this.idxSomInfoTocando = -1;
    // indica qual objeto do painel está em foco durante a interação
    this.nomeObjetoEmFoco = null; //Object.keys(this.objetos)[0];
    // Indica se está executando o áudio de descrição dos objetos
    // no painel. Permite controlar deforma a evitar dois áudios 
    // de informação executando ao mesmo tempo.
    this.tocandoInfo = false;
    // controla se o painel já foi apresentado pela primeira vez.
    // Permite uma descrição mais detalhada da primeira vez
    this.tocouIntroPainel = false;  
  }
  
  // Áudio tocado na primeira vez que o painel é apresentado
  tocarIntroPainel(){
    this.somIntro.tocar();
    this.tocouIntroPainel = true;
    this.tocandoInfo = true;
  }
  // parar Intro antes de encerrar
  pararIntroPainel(){
    this.somIntro.parar();
  }
  
  // Áudio mais breve descrevendo os objetos no painel
  tocarInfoPainel(){
      var index = Math.floor(Math.random() * this.sonsInfo.length);
      this.idxSomInfoTocando = index;
      this.sonsInfo[index].tocar();
      this.tocandoInfo = true;
  }
  // parar info antes de encerrar
  pararInfoPainel(){
    if (this.idxSomInfoTocando != -1) {
      this.sonsInfo[this.idxSomInfoTocando].parar();
      this.idxSomInfoTocando = -1;
    }
  }
  
  moverFocoParaObjeto(nomeObjeto){
    this.pararInfoPainel();
    this.pararIntroPainel();
    if(!this.nomeObjetoEmFoco){
      // entra em foco no novo objeto
      this.nomeObjetoEmFoco = nomeObjeto;
      this.getObjetoEmFoco().entrarEmFoco();
    } else if(this.getObjetoEmFoco().nome !== nomeObjeto){
      // sai de foco do objeto atual
      this.getObjetoEmFoco().sairDeFoco();
    
      // entra em foco no novo objeto
      this.nomeObjetoEmFoco = nomeObjeto;
      this.getObjetoEmFoco().entrarEmFoco();
    } else {
      if (this.verboso) console.log('Foco já está no objeto escolhido ('+nomeObjeto+')');
    }
  }
  
  // Executada cada vez que o jogador escolhe examinar o painel
  entrarEmFoco(){
    for (let nome in this.objetos) this.objetos[nome].ajustarVolume(1);
    if (!this.tocouIntroPainel && !this.tocandoInfo){
      this.tocarIntroPainel();
    } else if (!this.tocandoInfo){
      this.tocarInfoPainel();
    }
    if(this.verboso) console.log('Entrou no Painel ' + this.nome);
  }
  
  // Executado quando o jogador decide abandonar o painel e retornar ao
  // panorama geral.
  sairDeFoco(){
    this.pararInfoPainel();
    this.pararIntroPainel();
    if (this.getObjetoEmFoco()) this.getObjetoEmFoco().sairDeFoco();
    for (let nome in this.objetos) this.objetos[nome].ajustarVolume(0.5);
    this.tocandoInfo = false;
    this.nomeObjetoEmFoco = null;
    if(this.verboso) console.log('Saiu do Painel ' + this.nome);
  }
  
  getListaNomesObjetos(){
    return Object.keys(this.objetos);
  }
  
  getObjetoEmFoco(){
    return this.objetos[this.nomeObjetoEmFoco]
  }
  
  alterarSom(nomeSom){
    this.som = new Som(nomeSom);
  }
  
  iniciarSons(){
    for (let nome in this.objetos) this.objetos[nome].tocarSom();
  }

  pararSons(){
    for (let nome in this.objetos) this.objetos[nome].pararSom();
  }
  
  posicionarFrente(){
    for (let nome in this.objetos) this.objetos[nome].posicionarFrente();
  } 
  
  posicionarDireita(){
    for (let nome in this.objetos) this.objetos[nome].posicionarDireita();
  } 
  
  posicionarEsquerda(){
    for (let nome in this.objetos) this.objetos[nome].posicionarEsquerda();
  } 
  
  posicionarAtras(){
    for (let nome in this.objetos) this.objetos[nome].posicionarAtras();
  }
}

class VisaoCenario {
  // Simula a visão o jogador: a câmera, por assim dizer.
  constructor(paineis, tema, configs){
    this.verboso = true;
    this.paineis = paineis;
    // música de fundo. Precisa dosar para não cobrir os outros sons.
    this.tema = tema;
    this.painelFoco = 0;
    // índice do painel sendo que está na frente do jogador   
    this.ajustarPaineis();
    this.audioIniciado = false;
    this.mostrandoInfo = false;

    if (configs){
      this.somIntro = configs['somIntro'];
      this.sonsInfo = configs['sonsInfo'];
    }
  }
  
  // ajusta os sons e as direções, emulando uma virada que o jogador dá
  ajustarPaineis(){
    switch (this.painelFoco){
      case 0:
        this.paineis[0].posicionarFrente();
        this.paineis[1].posicionarDireita();
        this.paineis[2].posicionarAtras();
        this.paineis[3].posicionarEsquerda();
        break;
      case 1:
        this.paineis[1].posicionarFrente();
        this.paineis[2].posicionarDireita();
        this.paineis[3].posicionarAtras();
        this.paineis[0].posicionarEsquerda();
        break;
      case 2:
        this.paineis[2].posicionarFrente();
        this.paineis[3].posicionarDireita();
        this.paineis[0].posicionarAtras();
        this.paineis[1].posicionarEsquerda();
        break;
      case 3: 
        this.paineis[3].posicionarFrente();
        this.paineis[0].posicionarDireita();
        this.paineis[1].posicionarAtras();
        this.paineis[2].posicionarEsquerda();
        break;
    }
    if (!this.audioIniciado){
      this.iniciarAudio();
    }
  }
  
  iniciarAudio(){
    this.audioIniciado = true;
    for (let painel of this.paineis) painel.iniciarSons();
    // valores maiores que 0.02 para o som de fundo fica alto demais
    this.tema.ajustarVolume(0.2);
    this.tema.tocarEmLoop();  
  }

  pararAudio(){
    for (let painel of this.paineis) painel.pararSons();
    this.tema.parar();
  }
  
  virarDireita(){
    this.paineis[this.painelFoco].sairDeFoco();
    this.painelFoco = (this.painelFoco + 1) % 4;
    this.ajustarPaineis();
    if(this.verboso) console.log('Virou à direita. Agora está de frente para o painel ' + this.paineis[this.painelFoco].nome);
  }
  
  virarEsquerda(){
    this.paineis[this.painelFoco].sairDeFoco();
    this.painelFoco = (this.painelFoco - 1 + 4) % 4;
    this.ajustarPaineis();
    if(this.verboso) console.log('Virou à esquerda. Agora está de frente para o painel ' + this.paineis[this.painelFoco].nome);
  }
  
  entrarPainelEmFoco(){
    for (let painel of this.paineis) painel.posicionarAtras();
    this.paineis[this.painelFoco].entrarEmFoco();
    this.mostrandoInfo = true;
  }
  
  sairPainelEmFoco(){
    if(this.paineis[this.painelFoco].sonsInfo.length > 0) {
      this.paineis[this.painelFoco].sonsInfo[Math.floor(Math.random() * this.paineis[this.painelFoco].sonsInfo.length)].tocar();
    }
    this.paineis[this.painelFoco].sairDeFoco();
    this.mostrandoInfo = false;
    this.ajustarPaineis();
  }
  
  getPainelFoco(){
    return this.paineis[this.painelFoco];
  }
  
  mostrarImagemPainelFoco(){
    return this.paineis[this.painelFoco].imagem;
  } 
}

class Fase {
  constructor (nome, paineis, audioIntro, audioTema, inventario, concluida, funcaoExecutarAoIniciar, funcaoExecutarAoEncerrar){
    this.nome = nome;
    this.paineis = paineis;
    this.audioIntro = audioIntro;
    this.tema = audioTema;
    this.inventario = inventario;
    this.concluida = concluida;
    this.executarAoIniciar = funcaoExecutarAoIniciar;
    this.executarAoEncerrar = funcaoExecutarAoEncerrar;
  }
}

class Controle {
  constructor(comandos){
    if (comandos){
      this.comandos = comandos;
    } else {
      this.comandos = {
        'navegarPaineis': (opcao) => {
          switch (opcao) {
            case 'direita':
              // dar foco ao painel à direita
              vCenario.virarDireita();
              break;
            case 'esquerda':
              // dar foco ao painel à esquerda
              vCenario.virarEsquerda();
              break;
            case 'examinar':
              // examinar painel em foco
              // alterar próximo comando do controle para navegar objetos do painel
              controle.selecionarComando('navegarObjetos');
              vCenario.entrarPainelEmFoco();
              break;
            case 'sair':
              // definir o que fazer
              break;
          }
        },
        'navegarObjetos': (opcao) => {
          if (opcao == 'voltar'){
            // voltar para navegação entre paineis
            if (this.verboso) console.log('Escolheu voltar para navegação entre paineis')
            controle.selecionarComando('navegarPaineis');
            vCenario.sairPainelEmFoco();
          } else {
            for (let nomeObjeto of vCenario.getPainelFoco().getListaNomesObjetos()){
              if (opcao == nomeObjeto){
                vCenario.getPainelFoco().moverFocoParaObjeto(nomeObjeto);
                break;
              }          
            }
          }   
        },
      }
    }
    this.comandoSelecionado = 'navegarPaineis';
  }
  
  executarComando(nomeComando, parametros) {
    this.comandos[nomeComando](parametros);
  }
  
  executarComandoSelecionado(parametros){
    this.comandos[this.comandoSelecionado](parametros);
  }
  
  adicionarComando(parametros){
    this.comandos[parametros['nome']] = parametros['funcao']
  }
  
  definirConjuntoDeComandos(comandos){
    this.comandos = comandos;
    this.comandoSelecionado = Object.keys(comandos)[0];
  }
  
  selecionarComando(nomeComando){
    this.comandoSelecionado = nomeComando;
  }
}

class Inventario {
  constructor(itensIniciais){
    if (itensIniciais) this.elementosDisponiveis = itensIniciais; // armazena como string todos os itens obtidos e acoes desbloqueadas
    else this.elementosDisponiveis = [];
  }

  adicionarElemento(elemento){
    this.elementosDisponiveis.push(elemento);
  }

  consumirElemento(elemento){
    let idx = this.elementosDisponiveis.indexOf(elemento);
    return this.elementosDisponiveis.splice(idx, 1);
  }

  getElementosDisponiveis(){
    return this.elementosDisponiveis;
  }
}

function criarTelaAbertura(){
  // CRIA O AMBIENTE DA TELA DE ABERTURA
  let silencio = new Som('silencio');

  let gramofone = new Objeto({
    'nome': 'gramofone',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somIntro': silencio,
    'sonsFoco': [],
    'status':'',
    'comportamentosEspeciais': {},
  });
  
  let lareira = new Objeto({
    'nome': 'lareira',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somIntro': silencio,
    'sonsFoco': [],
    'status':'',
    'comportamentosEspeciais': {},
  });
  
  let painelGramofone = new Painel({
    'nome': 'painelGramofone',
    'verboso': verboso,
    'objetos': [gramofone],
    'somPainel': '',
    'somIntro': '',
    'sonsInfo': [''],
    'urlImagem': 'assets/imgs/TelaAbertura/painelGramofone.jpg',
  });
  
  let painelFrente = new Painel({
    'nome': 'painelVazio',
    'verboso': verboso,
    'objetos': [],
    'somPainel': '',
    'somIntro': '',
    'sonsInfo': [''],
    'urlImagem': 'assets/imgs/TelaAbertura/painelFrente.jpg',
  });
  
  let painelCostas = new Painel({
    'nome': 'painelVazio',
    'verboso': verboso,
    'objetos': [],
    'somPainel': '',
    'somIntro': '',
    'sonsInfo': [''],
    'urlImagem': 'assets/imgs/TelaAbertura/painelCostas.jpg',
  });
  
  let painelLareira = new Painel({
    'nome': 'painelLareira',
    'verboso': verboso,
    'objetos': [lareira],
    'somPainel': '',
    'somIntro': '',
    'sonsInfo': [''],
    'urlImagem': 'assets/imgs/TelaAbertura/painelLareira.jpg',
  });


  let somPortaAbrindo = new Som('porta_abrindo');
  let comandosControle = {
    'navegarPaineis': (opcao) => {
      switch (opcao) {
        case 'direita':
          // dar foco ao painel à direita
          vCenario.virarDireita();
          break;
        case 'esquerda':
          // dar foco ao painel à esquerda
          vCenario.virarEsquerda();
          break;
        case 'examinar':
          // examinar painel em foco
          // alterar próximo comando do controle para navegar objetos do painel

          let painelEmFoco = vCenario.getPainelFoco().nome;
          if (painelEmFoco == 'painelLareira' || painelEmFoco == 'painelGramofone'){
            vCenario.entrarPainelEmFoco();
            setTimeout(function(){
              somPortaAbrindo.tocar();
              setTimeout(function(){
                vCenario.pararAudio();
                for (let painel of vCenario.paineis){
                  painel.imagem = imgInterludio;
                }
                controle.definirConjuntoDeComandos({'navegarPaineis': (opcao) => {}, 'navegarObjetos': (opcao) => {}});
                faseAtual = 'Tutorial';
                setup();
              }, 4000);
            }, 2000);
          }
          break;
        case 'sair':
          // definir o que fazer
          break;
      }
    },
    'navegarObjetos': ()=>{}
  };

  let telaAbertura = new Fase(
    'telaAbertura',
    [painelFrente, painelLareira, painelCostas, painelGramofone],
    // Áudio intro
    new Som('TelaAbertura'),
    // Áudio tema
    new Som(''),
    // inventário vazio
    new Inventario([]),
    // concluída
    false,
    // funcaoExecutarAoIniciar
    () => {
      fases.telaAbertura.audioIntro.ajustarVolume(1);
      fases.telaAbertura.audioIntro.tocar();
      setTimeout(function(){
        vCenario = new VisaoCenario(fases.telaAbertura.paineis, fases.telaAbertura.tema);
        controle = new Controle(comandosControle);
        inventario = fases.telaAbertura.inventario;
        fases.telaAbertura.audioIntro.parar();
      },fases.telaAbertura.audioIntro.duracao());
    },    
    // funcaoExecutarAoEncerrar 
    () => {}
  );

  return telaAbertura;
}

function criarFaseTutorial(){
  // ITENS DA FASE TUTORIAL
  let somIntroTv= new Som('ObjetoTvDescricao');
  let sonsFocoTv = [
    new Som('ObjetoTvDescricaoCurta_1'),
    new Som('ObjetoTvDescricaoCurta_2'),
  ];
  let tvTutorial = new Objeto({
    'nome': 'tv',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somIntro': somIntroTv,
    'sonsFoco': sonsFocoTv,
    'status':'',
    'comportamentosEspeciais': {},
  });
  let somIntroJanela= new Som('ObjetoJanelaDescricao');
  let sonsFocoJanela = [
    new Som('ObjetoJanelaDescricaoCurta_1'),
    new Som('ObjetoJanelaDescricaoCurta_2'),
  ];
  let janelaTutorial = new Objeto({
    'nome': 'janelaTutorial',
    'verboso': verboso,
    'somCustomizado': 'ventoJanela',
    'somContinuo': true,
    'somIntro': somIntroJanela,
    'sonsFoco': sonsFocoJanela,
    'status':'',
    'comportamentosEspeciais': {},
  });

  let somIntroPorta= new Som('PainelPortaDescricao');
  let sonsFocoPorta = [
    new Som('PainelPortaDescricaoCurta_1'),
    new Som('PainelPortaDescricaoCurta_2'),
  ];
  let somTutorialPrologo = new Som('TutorialPrologo')
  let portaTutorial = new Objeto({
    'nome': 'portaTutorial',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somIntro': somIntroPorta,
    'sonsFoco': sonsFocoPorta,
    'status':'fechada',
    'comportamentosEspeciais': {
      'chavePorta': ()=>{
        if (this.verboso) console.log('porta: usou a chave para abrir, encerrar fase.');
        portaTutorial.status = 'aberta';
        fases['Tutorial']['concluida'] = true;
        vCenario.pararAudio();
        somTutorialPrologo.tocar();
        setTimeout(function(){
          vCenario.pararAudio();
          for (let painel of vCenario.paineis){
            painel.imagem = imgInterludio;
          }
          controle.definirConjuntoDeComandos({'navegarPaineis': (opcao) => {}, 'navegarObjetos': (opcao) => {}});
          faseAtual = 'fase1';
          setup();
        }, somTutorialPrologo.duracao() + 4000);
        return true;
      }
    },
  });
  let somIntroChave= new Som('ObjetoChaveDescricao');
  let sonsFocoChave = [
    new Som('ObjetoChaveDescricaoCurta_1'),
    new Som('ObjetoChaveDescricaoCurta_2'),
  ];
  let chaveTutorial = new Objeto({
    'nome': 'chaveTutorial',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somIntro': somIntroChave,
    'sonsFoco': sonsFocoChave,
    'status':'',
    'comportamentosEspeciais': {
      'encontrarChave': ()=>{
        if (this.verboso) console.log('chave: encontrada uma chave.');
        sonsFocoChave[1].tocar();
        inventario.adicionarElemento('chavePorta');
        return true
      },
    },
  });
  // PAINÉIS DA FASE TUTORIAL
  let painel1Tutorial = new Painel({
    'nome': 'telaTv',
    'verboso': verboso,
    'objetos': [tvTutorial],
    'somPainel': '',
    'somIntro': 'PainelTVDescricao',
    'sonsInfo': ['PainelTvDescricaoCurta_1', 'PainelTvDescricaoCurta_2'],
    'urlImagem': 'assets/imgs/TvTutorial.jpg',
  });
  let painel2Tutorial = new Painel({
    'nome': 'telaChave',
    'verboso': verboso,
    'objetos': [chaveTutorial],
    'somPainel': '',
    'somIntro': 'PainelChaveDescricao',
    'sonsInfo': ['PainelChaveDescricaoCurta_1', 'PainelChaveDescricaoCurta_2'],
    'urlImagem': 'assets/imgs/keyTutorial.jpg',
  });
  let painel3Tutorial = new Painel({
    'nome': 'telaWindow',
    'verboso': verboso,
    'objetos': [janelaTutorial],
    'somPainel': '',
    'somIntro': 'PainelJanelaDescricao',
    'sonsInfo': ['PainelJanelaDescricaoCurta_1', 'PainelJanelaDescricaoCurta_2'],
    'urlImagem': 'assets/imgs/windowTutorial.jpg',
  });
  let painel4Tutorial = new Painel({
    'nome': 'telaPorta',
    'verboso': verboso,
    'objetos': [portaTutorial],
    'somPainel': '',
    'somIntro': 'PainelPortaDescricao',
    'sonsInfo': ['PainelPortaDescricaoCurta_1', 'PainelPortaDescricaoCurta_2'],
    'urlImagem': 'assets/imgs/doorTutorial.jpg',
  });
  let somPrologo = new Som('tutorialEpilogo');
    
    let faseTutorial = new Fase(
      'Tutorial',
      [painel1Tutorial,painel2Tutorial, painel3Tutorial,painel4Tutorial],
      new Som('tema_main'),
      new Som('tema_birthday'),
      new Inventario(['naoMachucado', 'telefoneNaoTocando']),
      false,
      () => {
        fases.Tutorial.audioIntro.ajustarVolume(0.5);
        fases.Tutorial.audioIntro.tocar();
        somPrologo.tocar();
        setTimeout(function(){
          fases.Tutorial.audioIntro.parar();
          vCenario = new VisaoCenario(fases.Tutorial.paineis, fases.Tutorial.tema);
          inventario = fases.Tutorial.inventario;
          inventario.adicionarElemento('encontrarChave')
        }, 40000);
      },
    );
    return faseTutorial;
}

function criarFase1(){
  // em cada um dos objetos, após criar, precisa incluir os sons a serem executados
  // quando o objeto entra em foco e os comportamentos especiais dos que tiverem. Usa-se o método
  // adicionarComportamentoEspecial, passando um objeto no seguinte formato: 
  //      {'nomeDoItemNecessarioParaExecutar': ()=> {açõesARealizar()},
  //        'nomeDaCondiçãoNecessariaParaExecutar: ()=> {açõesARealizar()}}

  // ITEMS DA FASE 1
  let somIntroRelogio = new Som('ObjetoRelogioComodaDescricao');
  let sonsFocoRelogio = [
    new Som('ObjetoRelogioComodaDescricaoCurta_1'),
    new Som('ObjetoRelogioComodaDescricaoCurta_2'),
  ];
  let relogio = new Objeto({
    'nome': 'relogio',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somIntro': somIntroRelogio,
    'sonsFoco': sonsFocoRelogio,
    'status':'',
    'comportamentosEspeciais': {},
  });
  let somTemaTelefone = new Som('tema_telefone');
  let somEpilogo = new Som('Epilogo');
  let somIntroPorta = new Som('ObjetoPortaDescricao');
  let sonsFocoPorta = [
    new Som('ObjetoPortaDescricaoCurta_1'),
    new Som('ObjetoPortaDescricaoCurta_2'),
  ];
  let porta = new Objeto({
    'nome': 'porta',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'somIntro': somIntroPorta,
    'sonsFoco': sonsFocoPorta,
    'status':'fechada',
    'comportamentosEspeciais': {
      'telefoneNaoTocando': ()=>{
        porta.tocarSomFoco();
        if (quadro.foiVisitado){
          if (this.verboso) console.log('porta: percebeu que a porta está fechada. Telefone vai tocar após o tempo do audio de intro...');
          telefone.alterarSom(somTelefoneTocando);
          telefone.posicionarDireita();
          setTimeout(function() {
            if (this.verboso) console.log('agora pode atender o telefone')
            // aguarda o tempo de duração do áudio de introdução e coloca o telefone pra tocar
            inventario.adicionarElemento('telefoneTocando');
            vCenario.tema.parar();
            vCenario.tema = somTemaTelefone;
            vCenario.tema.tocarEmLoop();
            telefone.tocarSom();
          }, 60000);
          return true;
        }
        return false;
      },
      'chavePorta': ()=>{
        if (this.verboso) console.log('porta: usou a chave para abrir. Tocar epílogo de sucesso e encerrar fase.');
        porta.status = 'aberta';
        fases['fase1']['concluida'] = true;
        vCenario.pararAudio();
        vCenario.tema.parar();
        for (let painel of vCenario.paineis){
          painel.imagem = imgEncerramento;
        }
        controle.definirConjuntoDeComandos({'navegarPaineis': (opcao) => {}, 'navegarObjetos': (opcao) => {}});
        somEpilogo.tocar();
        return true;
      }
    },
  });
  
  let somIntroLampada = new Som('ObjetoLampadaDescricao');
  let sonsFocoLampada = [
    new Som('ObjetoLampadaDescricaoCurta_1'),
    new Som('ObjetoLampadaDescricaoCurta_2'),
  ];
  let lampada = new Objeto({
    'nome': 'lampada',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somIntro': somIntroLampada,
    'sonsFoco': sonsFocoLampada,
    'status':'',
    'comportamentosEspeciais': {}
  });
  let somIntroQuadro = new Som('ObjetoQuadroDescricao');
  let sonsFocoQuadro = [
    new Som('ObjetoQuadroDescricaoCurta_1'),
    new Som('ObjetoQuadroDescricaoCurta_2'),
  ];
  let somChaveNoQuadro = new Som('ObjetoQuadroComDica');
  let quadro = new Objeto({
    'nome': 'quadro',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'somIntro': somIntroQuadro,
    'sonsFoco': sonsFocoQuadro,
    'status':'',
    'comportamentosEspeciais': {
      'dicaQuadro': ()=>{
        if (this.verboso) console.log('quadro: encontrada uma chave.');
        somChaveNoQuadro.tocar();
        inventario.adicionarElemento('chavePorta');
        return true
      },
      'telefoneNaoTocando': ()=>{
        quadro.tocarSomFoco();
        if (porta.foiVisitado){
          if (this.verboso) console.log('quadro: Telefone vai tocar após o tempo do audio de intro...');
          telefone.alterarSom(somTelefoneTocando);
          telefone.posicionarEsquerda();
          setTimeout(function() {
            if (this.verboso) console.log('agora pode atender o telefone')
            // aguarda o tempo de duração do áudio de introdução e coloca o telefone pra tocar
            inventario.adicionarElemento('telefoneTocando');
            vCenario.tema.parar();
            vCenario.tema = somTemaTelefone;
            vCenario.tema.tocarEmLoop();
            telefone.tocarSom();
          }, 40000);
          return true;
        }
        return false;
      } 
    }
  });
  let somFocoPrateleira = new Som('foco_prateleira');
  let prateleira = new Objeto({
    'nome': 'prateleira',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'somFoco': somFocoPrateleira,
    'status':'',
    'comportamentosEspeciais': {'naoMachucado': ()=>{
      if (this.verboso) console.log('prateleira: machucou o dedo. Falta gravar áudio descrevendo');
      inventario.adicionarElemento('dedoMachucado');
      return true;
    }}
  });
  
  let somIntroEstante = new Som('ObjetoEstanteDescricao');
  let sonsFocoEstante = [
    new Som('ObjetoEstanteDescricaoCurta_1'),
    new Som('ObjetoEstanteDescricaoCurta_2'),
  ];
  let estante = new Objeto({
    'nome': 'estante',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somIntro': somIntroEstante,
    'sonsFoco': sonsFocoEstante,
    'status':'',
    'comportamentosEspeciais': {'dedoMachucado': ()=>{
      if (this.verboso) console.log('estante: manchou livro com sangue. Ver se vale a pena colocar alguma coisa aqui');
      inventario.adicionarElemento('livroManchadoComSangue');
      return true;
    }}
  });
  let somIntroBrasao = new Som('ObjetoBrasaoDescricao');
  let sonsFocoBrasao = [
    new Som('ObjetoBrasaoDescricaoCurta_1'),
    new Som('ObjetoBrasaoDescricaoCurta_2'),
  ];
  let brasao = new Objeto({
    'nome': 'brasao',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'somIntro': somIntroBrasao,
    'sonsFoco': sonsFocoBrasao,
    'status':'',
    'comportamentosEspeciais': {}
  });
  
  let dialogoTelefone = new Som('ObjetoTelefoneDialogo');
  let somTelefoneTocando = new Som('telefone');
  let temaBirthDayFone = new Som('tema_birthday');
  let somIntroTelefone = new Som('ObjetoTelefoneDescricao');
  let sonsFocoTelefone = [
    new Som('ObjetoTelefoneDescricaoCurta_1'),
    new Som('ObjetoTelefoneDescricaoCurta_2'),
  ];
  let telefone  = new Objeto({
    'nome': 'telefone',
    'verboso': verboso,
    'somCustomizado': 'silencio',
    'somContinuo': true,
    'somIntro': somIntroTelefone,
    'sonsFoco': sonsFocoTelefone,
    'status':'',
    'comportamentosEspeciais': {'telefoneTocando': ()=>{
      if (this.verboso) console.log('telefone: Recebida a dica da chave no quadro.');
      telefone.pararSom();
      telefone.alterarSom(dialogoTelefone);
      telefone.definirSomContinuo(false);
      telefone.tocarSom();
      setTimeout(function (){
        vCenario.tema.ajustarVolume(0, 4);
        setTimeout(function () {
          vCenario.tema.parar();
          vCenario.tema = temaBirthDayFone;
          vCenario.tema.ajustarVolume(0.2);
          vCenario.tema.tocar();
          inventario.adicionarElemento('dicaQuadro');
        }, 4000);
      }, 67000);
      return true;
    }}
  });
  let somIntroPoltrona = new Som('ObjetoPoltronaDescricao');
  let sonsFocoPoltrona = [
    new Som('ObjetoPoltronaDescricaoCurta_1'),
    new Som('ObjetoPoltronaDescricaoCurta_2'),
  ];
  let poltrona  = new Objeto({
    'nome': 'poltrona',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'somIntro': somIntroPoltrona,
    'sonsFoco': sonsFocoPoltrona,
    'status':'',
    'comportamentosEspeciais': {}
  });
  
  let painel1 = new Painel({
    'nome': 'telaRelogio',
    'verboso': verboso,
    'objetos': [relogio, porta],
    'somPainel': '',
    'somIntro': 'PainelRelogioDescricao',
    'sonsInfo': ['PainelRelogioDescricaoCurta_1', 'PainelRelogioDescricaoCurta_2'],
    'urlImagem': 'assets/imgs/clock.jpg',
  });
  let painel2 = new Painel({
    'nome': 'telaTelefone',
    'verboso': verboso,
    'objetos': [telefone, poltrona],
    'somPainel': '',
    'somIntro': 'PainelTelefoneDescricao',
    'sonsInfo': ['PainelTelefoneDescricaoCurta_1', 'PainelTelefoneDescricaoCurta_2'],
    'urlImagem': 'assets/imgs/phone.jpg',
  });
  let painel3 = new Painel({
    'nome': 'telaLampada',
    'verboso': verboso,
    'objetos': [lampada, quadro, prateleira],
    'somPainel': '',
    'somIntro': 'PainelLampadaDescricao',
    'sonsInfo': ['PainelLampadaDescricaoCurta_1', 'PainelLampadaDescricaoCurta_2'],
    'urlImagem': 'assets/imgs/lamp.jpg',
  });
  let painel4 = new Painel({
    'nome': 'telaEstante',
    'verboso': verboso,
    'objetos': [estante, brasao],
    'somPainel': '',
    'somIntro': 'PainelEstanteDescricao',
    'sonsInfo': ['PainelEstanteDescricaoCurta_1', 'PainelEstanteDescricaoCurta_2'],
    'urlImagem': 'assets/imgs/books.jpg',
  });
  
  let somPrologo = new Som('Prologo');
  let somIntroSala = new Som('SalaDescricao');
  let fase1 = new Fase(
    'fase1',
    [painel1, painel2, painel3, painel4],
    new Som('tema_main'),
    new Som('tema_birthday'),
    new Inventario(['naoMachucado', 'telefoneNaoTocando']),
    false,
    // funcaoExecutarAoIniciar
    () => {
      fases.fase1.audioIntro.ajustarVolume(0.5);
      fases.fase1.audioIntro.tocar();
      somPrologo.tocar();
      setTimeout(function(){
        fases.fase1.audioIntro.parar();
        somIntroSala.tocar();
        let configs = {'sonsInfo':[new Som('SalaDescricaoCurta')]}
        vCenario = new VisaoCenario(fases.fase1.paineis, fases.fase1.tema, configs);
        inventario = fases.fase1.inventario;
      }, 54000); // ou somPrologo.duration()
    },    
    // funcaoExecutarAoEncerrar 
    () => {}
  );

  return fase1;
}

function criarFases() {
  let telaAbertura = criarTelaAbertura();
  fases['telaAbertura'] = telaAbertura;

  let faseTutorial = criarFaseTutorial();
  fases['Tutorial'] = faseTutorial;

  let fase1 = criarFase1();
  fases['fase1'] = fase1;
}

let verboso=true;
let carregouCenario = false;
let paineis;
let tema;
let vCenario;
let controle;
let inventario;
let fases = {};
let faseAtual = 'telaAbertura'

let imgBotoes;
let imgInterludio;
let imgEncerramento

function preload() {
  imgBotoes = loadImage('./assets/imgs/botoes.jpg');
  imgInterludio = loadImage('./assets/imgs/carregando.jpg');
  imgEncerramento = loadImage('./assets/imgs/paisagem_noir.jpeg');
  criarFases();
}

function setup(){
  controle = new Controle();
  fases[faseAtual].executarAoIniciar();
}

function carregarVisaoCenario(){
  carregouCenario = true;
  vCenario.ajustarPaineis();
  vCenario.iniciarAudio();
}

function draw() {
  let cnv = createCanvas(200, 125);
  cnv.mousePressed(canvasPressed);
  background(220);
  if (vCenario && verboso) {
    image(vCenario.mostrarImagemPainelFoco(), 0, 0, 200, 100);    
    image(imgBotoes,  0, 100, 200, 25);
  }
}

// substituir essa mecânica por comandos de voz.
// Ou pode manter, como uma forma secundária de jogar :)
function canvasPressed(){
  if (!carregouCenario){
    carregarVisaoCenario();
  }
  if(mouseX < 50  && mouseY > 100){
    controle.executarComandoSelecionado(keyCodeParaComando(37));
  } else if ((mouseX >= 50 && mouseX < 100) && mouseY > 100){
    controle.executarComandoSelecionado(keyCodeParaComando(39));
  } else if ((mouseX >= 100 && mouseX < 150) && mouseY > 100){
    controle.executarComandoSelecionado(keyCodeParaComando(38));
  } else if ((mouseX >= 150 && mouseX <= 200) && mouseY > 100){
    controle.executarComandoSelecionado(keyCodeParaComando(40));
  }
}

// Temporário. Adaptar para receber comandos de voz
// 37, 39, 38 e 40 são os keyCode para as teclas de seta no teclado
let mapaComandosNavegarPaineis = {
  37: 'esquerda',
  39: 'direita',
  38: 'examinar',
  40: 'sair'
}
let mapaComandosNavegarObjetos = {
  37: 'objeto1',
  39: 'objeto2',
  40: 'voltar'
}

function keyCodeParaComando(codigo){
  switch (controle['comandoSelecionado']){
    case 'navegarPaineis':
      return mapaComandosNavegarPaineis[codigo];
    case 'navegarObjetos':
      return keyCodeParaObjeto(codigo, vCenario.getPainelFoco());
  }
}

function keyCodeParaObjeto(codigo, painel){
  switch (codigo) {
    case 37:
      return painel.getListaNomesObjetos()[0];
    case 39:
      return painel.getListaNomesObjetos()[1];
    case 40:
      return 'voltar';
  }
}

function keyPressed() {
  let comando = keyCodeParaComando(keyCode)
  if (comando != undefined) {
    controle.executarComandoSelecionado(comando);
  }
  
  // comandos abaixo usados para debugar
  if (keyCode == 80) {
    // quando pression "P"
    console.log(controle)
  }
  
  if (keyCode == 76) {
    // quando pression "L"
  }
}
