class Som {
  constructor(tipo){
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
      'lampada': 'assets/audio/lamp_flicker.mp3',
      'pia':'assets/audio/sink.mp3',
      'radio':'assets/audio/radio_static.mp3',
      'relogio':'assets/audio/clock.mp3',
      'sintonizar_radio':'assets/audio/tuning_radio.mp3',
      'silencio': 'assets/audio/silencio.mp3',
      'telefone': 'assets/audio/phone.mp3',
      'telefone_pulso': 'assets/audio/phone_pulse2.mp3',
      'torneira_fluxo':'assets/audio/faucet_flow.mp3',
      'torneira_pingo':'assets/audio/faucet_drip.mp3',
      'tv':'assets/audio/tv.mp3',
      
      'Dialogo': 'DialogoFone.mp3',
      'tema_birthday': 'assets/audio/_theme/theme_birthday.mp3',
      'tema_main': 'assets/audio/_theme/theme_main.mp3',
      
      'PainelRelogioIntro': 'assets/audio/_paineis/PainelRelogioIntro.mp3',
      'PainelTelefoneIntro': 'assets/audio/_paineis/PainelTelefoneIntro.mp3',
      'PainelEstanteIntro': 'assets/audio/_paineis/PainelEstanteIntro.mp3',
      'PainelLampadaIntro': 'assets/audio/_paineis/PainelLampadaIntro.mp3',
      
      'p_est.1': 'assets/audio/_paineis/p_est.1.mp3',
      'p_est.2': 'assets/audio/_paineis/p_est.2.mp3',
      'p_est.3': 'assets/audio/_paineis/p_est.3.mp3',
      'p_lamp.1': 'assets/audio/_paineis/p_lamp.1.mp3',
      'p_lamp.2': 'assets/audio/_paineis/p_lamp.2.mp3',
      'p_lamp.3': 'assets/audio/_paineis/p_lamp.3.mp3',
      'p_reloj.1': 'assets/audio/_paineis/p_reloj.1.mp3',
      'p_reloj.2': 'assets/audio/_paineis/p_reloj.2.mp3',
      'p_reloj.3': 'assets/audio/_paineis/p_reloj.3.mp3',
      'p_telef.1': 'assets/audio/_paineis/p_telef.1.mp3',
      'p_telef.2': 'assets/audio/_paineis/p_telef.2.mp3',
      'p_telef.3': 'assets/audio/_paineis/p_telef.3.mp3',
    }  
    if (this.sonsDic[tipo] == undefined) this.arqSom = loadSound(this.sonsDic['silencio']); 
    else  this.arqSom = loadSound(this.sonsDic[tipo]);  
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
  
  ajustarVolume(valor){
    this.arqSom.setVolume(valor);
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
    this.itemExigido = configs['itemExigido']; // string: nome do item necessário para ficar resolvido
    this.resolvido = configs['resolvido'];  // true|false: indica se o item tem algo pra ser feito
    this.status = configs['status'];  // string: indica se o item está em alguma situação relevante
    this.interacoes = {}; // lista com funções que representam os tipos de interação com o objeto
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
  
  entrarEmFoco(){
    console.log(this.nome + ": Objeto.entrarEmFoco() executada. Precisa implementar")
  };
  
  sairDeFoco(){
    console.log(this.nome + ": Objeto.sairDeFoco() executada. Precisa implementar")
  };
  
  entrarExaminar(){
    console.log(this.nome + ": Objeto.entrarExaminar() executada. Precisa implementar")
  };
  
  sairExaminar(){
    console.log(this.nome + ": Objeto.sairExaminar() executada. Precisa implementar")
  };
  
  pararSom() {this.som.parar();}
  
  ajustarVolume(valor){this.som.ajustarVolume(valor);}
  
  alterarSom(nomeSom){
    this.som = new Som(nomeSom);
  }
  
  getListaNomesInteracoes(){
    return Object.keys(this.interacoes);
  }

  adicionarInteracao(interacao){
    this.interacoes[interacao['nome']] = interacao['funcao'];
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
    this.nomeObjetoEmFoco = Object.keys(this.objetos)[0];
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
    if(this.getObjetoEmFoco().nome != nomeObjeto){
      // sai de foco do objeto atual
      this.getObjetoEmFoco().sairDeFoco();
    
      // entra em foco no novo objeto
      this.nomeObjetoEmFoco = nomeObjeto;
      this.getObjetoEmFoco().entrarEmFoco();
    } else {
      console.log('Foco já está no objeto escolhido ('+nomeObjeto+')');
    }
  }
  
  examinarObjetoEmFoco(){
    this.getObjetoEmFoco().entrarExaminar()
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
    for (let nome in this.objetos) this.objetos[nome].ajustarVolume(0.5);
    this.tocandoInfo = false;
    if(this.verboso) console.log('Saiu do Painel ' + this.nome);
  }
  
  getListaNomesObjetos(){
    return Object.keys(this.objetos);
  }
  
  getObjetoEmFoco(){
    // REMOVER LOG
    return this.objetos[this.nomeObjetoEmFoco]
  }
  
  alterarSom(nomeSom){
    this.som = new Som(nomeSom);
  }
  
  iniciarSons(){
    for (let nome in this.objetos) this.objetos[nome].tocarSom();
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
  constructor(paineis, tema){
    this.verboso = true;
    this.paineis = paineis;
    // música de fundo. Precisa dosar para não cobrir os outros sons.
    this.tema = tema;
    this.painelFoco = 0;
    // índice do painel sendo que está na frente do jogador   
    this.ajustarPaineis();
    this.audioIniciado = false;
    this.mostrandoInfo = false;
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
    this.paineis[0].iniciarSons();
    this.paineis[1].iniciarSons();
    this.paineis[2].iniciarSons();
    this.paineis[3].iniciarSons();
    // valores maiores que 0.02 para o som de fundo fica alto demais
    tema.ajustarVolume(0.02);
    tema.tocarEmLoop();  
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

class Controle {
  constructor(comandos){
    this.comandos = comandos;
    this.comandoSelecionado = Object.keys(comandos)[0];
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
  }
  
  selecionarComando(nomeComando){
    this.comandoSelecionado = nomeComando;
  }
}

let verboso=true;
let carregouCenario = false;
let paineis;
let tema;
let vCenario;
let controle;
let imgBotoes;

function preload() {
  imgBotoes = loadImage('./assets/imgs/botoes.jpg');
  // em cada um dos objetos, após criar, precisa incluir as funções de 
  // interação, incluindo os sons a serem executados. Usa-se o método
  // adicionarInteracao, passando um objeto {'nomeDaInteracao': ()=> {açõesARealizar}}
  let relogio = new Objeto({
    'nome': 'relogio',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'itemExigido': '',
    'resolvido': true,
    'status':'',
  });
  let porta = new Objeto({
    'nome': 'porta',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'itemExigido': '',
    'resolvido': false,
    'status':'',
  });
  
  let lampada = new Objeto({
    'nome': 'lampada',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'itemExigido': '',
    'resolvido': true,
    'status':'',
  });
  let quadro = new Objeto({
    'nome': 'quadro',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'itemExigido': '',
    'resolvido': false,
    'status':'',
  });
  let prateleira = new Objeto({
    'nome': 'prateleira',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'itemExigido': '',
    'resolvido': false,
    'status':'',
  });
   
  let estante = new Objeto({
    'nome': 'estante',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'itemExigido': '',
    'resolvido': true,
    'status':'',
  }); 
  let brasao = new Objeto({
    'nome': 'brasao',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'itemExigido': '',
    'resolvido': true,
    'status':'',
  });
  
  let telefone  = new Objeto({
    'nome': 'telefone',
    'verboso': verboso,
    'somCustomizado': 'telefone_pulso',
    'somContinuo': true,
    'itemExigido': '',
    'resolvido': false,
    'status':'',
  });
  let poltrona  = new Objeto({
    'nome': 'poltrona',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'itemExigido': '',
    'resolvido': true,
    'status':'',
  });
  
  let painel1 = new Painel({
    'nome': 'telaRelogio',
    'verboso': verboso,
    'objetos': [relogio, porta],
    'somPainel': '',
    'somIntro': 'PainelRelogioIntro',
    'sonsInfo': ['p_reloj.1','p_reloj.2','p_reloj.3'],
    'urlImagem': 'assets/imgs/clock.jpg',
  });
  let painel2 = new Painel({
    'nome': 'telaTelefone',
    'verboso': verboso,
    'objetos': [telefone, poltrona],
    'somPainel': '',
    'somIntro': 'PainelTelefoneIntro',
    'sonsInfo': ['p_telef.1','p_telef.2','p_telef.3'],
    'urlImagem': 'assets/imgs/phone.jpg',
  });
  let painel3 = new Painel({
    'nome': 'telaLampada',
    'verboso': verboso,
    'objetos': [lampada, quadro],
    'somPainel': '',
    'somIntro': 'PainelLampadaIntro',
    'sonsInfo': ['p_lamp.1','p_lamp.2','p_lamp.3'],
    'urlImagem': 'assets/imgs/lamp.jpg',
  });
  let painel4 = new Painel({
    'nome': 'telaEstante',
    'verboso': verboso,
    'objetos': [estante, brasao],
    'somPainel': '',
    'somIntro': 'PainelEstanteIntro',
    'sonsInfo': ['p_est.1','p_est.2','p_est.3'],
    'urlImagem': 'assets/imgs/books.jpg',
  });
  
  paineis = [painel1, painel2, painel3, painel4]
  tema = new Som('tema_birthday');
}

function setup(){
  vCenario = new VisaoCenario(paineis, tema);
  // criando o controle e definindo comandos iniciais
  controle = new Controle({});
  
  comandos = {
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
      if (opcao == 'examinar'){
        // examinar objeto em foco
        // implementar
        console.log('Escolheu examinar ', vCenario.getPainelFoco().getObjetoEmFoco().nome, '. Falta Implementar');
        controle.selecionarComando('navegarInteracoes');
      } else if (opcao == 'voltar'){
        // voltar para navegação entre paineis
        console.log('Escolheu voltar para navegação entre paineis')
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
    'navegarInteracoes': (opcao) => {
      switch (opcao) {
        case 'acao1':
          // dar foco à acao1
          // implementar
          break;
        case 'acao2':
          // dar foco à acao2
          // implementar
          break;
        case 'escolherAcao':
          // escolher acao em foco
          // implementar
          controle.selecionarComando('navegarObjetos');
          break;
        case 'voltar':
          // voltar para navegação entre paineis
          controle.selecionarComando('navegarObjetos');
          vCenario.getPainelFoco().getObjetoEmFoco().getSairExaminar();;
          break;
      }
    } 
  }
  
  controle.definirConjuntoDeComandos(comandos);
  controle.selecionarComando('navegarPaineis');
  
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
    controle.executarComandoSelecionado(keyCodeParaComando(49));
  } else if ((mouseX >= 50 && mouseX < 100) && mouseY > 100){
    controle.executarComandoSelecionado(keyCodeParaComando(50));
  } else if ((mouseX >= 100 && mouseX < 150) && mouseY > 100){
    controle.executarComandoSelecionado(keyCodeParaComando(51));
  } else if ((mouseX >= 150 && mouseX <= 200) && mouseY > 100){
    controle.executarComandoSelecionado(keyCodeParaComando(52));
  }
}

// Temporário. Adaptar para receber comandos de voz
// 49, 50, 51 e 52 são os keyCode para as teclas 1, 2, 3 e 4 do teclado, respectivamente
let mapaComandosNavegarPaineis = {
  49: 'esquerda',
  50: 'direita',
  51: 'examinar',
  52: 'sair'
}
let mapaComandosNavegarObjetos = {
  49: '',
  50: '',
  51: 'examinar',
  52: 'voltar'
}
let mapaComandosNavegarInteracoes = {
  49: 'acao1',
  50: 'acao2',
  51: 'ecolherAcao',
  52: 'voltar'
}

function keyCodeParaComando(codigo){
  switch (controle['comandoSelecionado']){
    case 'navegarPaineis':
      return mapaComandosNavegarPaineis[codigo];
    case 'navegarObjetos':
      return keyCodeParaObjeto(codigo, vCenario.getPainelFoco());
    case 'navegarInteracoes':
      return keyCodeParaInteracao(codigo, vCenario.getPainelFoco().getObjetoEmFoco());
  }
}

function keyCodeParaObjeto(codigo, painel){
  switch (codigo) {
    case 49:
      return painel.getListaNomesObjetos()[0];
    case 50:
      return painel.getListaNomesObjetos()[1];
    case 51:
      return 'examinar';
    case 52:
      return 'voltar';
  }
}

function keyCodeParaInteracao(codigo, objeto){
  switch (codigo) {
    case 49:
      return objeto.getListaNomesInteracoes()[0];
    case 50:
      return objeto.getListaNomesInteracoes()[1];
    case 51:
      return 'escolherAcao';
    case 52:
      return 'voltar';
  }
}

function keyPressed() {
  let comando = keyCodeParaComando(keyCode)
  if (comando != undefined) {
    controle.executarComandoSelecionado(comando);
  }
  if (keyCode == 80) {
    // quando pression "P"
    console.log('Próximo comando esperado: ',controle.comandoSelecionado);
    console.log('Painel em Foco: ', vCenario.getPainelFoco());
  }
  
  if (keyCode == 76) {
    // quando pression "L"
    console.log();
  }
}
