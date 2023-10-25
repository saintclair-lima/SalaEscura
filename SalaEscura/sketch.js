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
      
      'Dialogo': 'assets/audio/DialogoFone.mp3',
      'tema_birthday': 'assets/audio/_theme/theme_birthday.mp3',
      'tema_main': 'assets/audio/_theme/theme_main.mp3',
      'tema_telefone': 'assets/audio/_theme/theme_get_out_of_here.mp3',
      
      'PainelRelogioIntro': 'assets/audio/_paineis/PainelRelogioIntro.mp3',
      'PainelTelefoneIntro': 'assets/audio/_paineis/PainelTelefoneIntro.mp3',
      'PainelEstanteIntro': 'assets/audio/_paineis/PainelEstanteIntro.mp3',
      'PainelLampadaIntro': 'assets/audio/_paineis/PainelLampadaIntro.mp3',
      
      'Fase1Prologo': 'assets/audio/_fases/Fase1Prologo.mp3',
      'Fase1Epilogo': 'assets/audio/_fases/Fase1Epilogo.mp3',
      'Fase1ChaveNoQuadro': 'assets/audio/_fases/Fase1ChaveNoQuadro.mp3',
      
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
    
    if (urlAvulsa) this.arqSom = loadSound(tipo);
    else if (this.sonsDic[tipo] == undefined) this.arqSom = loadSound(this.sonsDic['silencio']);
    else this.arqSom = loadSound(this.sonsDic[tipo]);  
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
    this.somFoco = configs['somFoco']; // som que toca ao entrar em foco (uma breve descrição pra ajudar a lembrar o que é)

    this.status = configs['status'];  // string: indica se o item está em alguma situação relevante

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

  entrarEmFoco(){
    console.log(this.nome + ": Objeto.entrarEmFoco() executada.");
    if (!this.executarComportamentoEspecial()){
      if (Object.keys(this.comportamentosEspeciais).length == 0) console.log(this.nome + ": Nenhum comportamento especial.");
      else console.log(this.nome + ": Elemento necessário para comportamento especial ausente do inventário.");
      this.somFoco.tocar();
    }
  };
  
  sairDeFoco(){
    console.log(this.nome + ": Objeto.sairDeFoco() executada.");
    this.somFoco.parar();
  };

  executarComportamentoEspecial(){
    for (let item in this.comportamentosEspeciais){
      if (inventario.getElementosDisponiveis().indexOf(item) > -1){
        inventario.consumirElemento(item);
        this.comportamentosEspeciais[item]();
        delete this.comportamentosEspeciais[item];
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
      console.log('Foco já está no objeto escolhido ('+nomeObjeto+')');
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
    for (let nome in this.objetos) this.objetos[nome].ajustarVolume(0.5);
    this.tocandoInfo = false;
    this.nomeObjetoEmFoco = null;
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
    for (let painel of this.paineis) painel.iniciarSons();
    // valores maiores que 0.02 para o som de fundo fica alto demais
    this.tema.ajustarVolume(0.02);
    this.tema.tocarEmLoop();  
  }

  pararAudio(){
    for (let painel of this.paineis) painel.pararSons();
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

class Fase {
  constructor (nome, paineis, audioIntro, audioTema, inventario, concluida, funcaoExecutarAoIniciar){
    this.nome = nome;
    this.paineis = paineis;
    this.audioIntro = audioIntro;
    this.tema = audioTema;
    this.inventario = inventario;
    this.concluida = concluida;
    this.executarAoIniciar = funcaoExecutarAoIniciar;
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

function criarFase1(){
  // em cada um dos objetos, após criar, precisa incluir os sons a serem executados
  // quando o objeto entra em foco e os comportamentos especiais dos que tiverem. Usa-se o método
  // adicionarComportamentoEspecial, passando um objeto no seguinte formato: 
  //      {'nomeDoItemNecessarioParaExecutar': ()=> {açõesARealizar()},
  //        'nomeDaCondiçãoNecessariaParaExecutar: ()=> {açõesARealizar()}}

  // ITEMS DA FASE 1
  let somFocoRelogio = new Som('foco_relogio');
  let relogio = new Objeto({
    'nome': 'relogio',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somFoco': somFocoRelogio,
    'status':'',
    'comportamentosEspeciais': {},
  });
  let somTemaTelefone = new Som('tema_telefone');
  let somEpilogo = new Som('Fase1Epilogo');
  let somFocoPorta = new Som('foco_porta');
  let porta = new Objeto({
    'nome': 'porta',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'somFoco': somFocoPorta,
    'status':'fechada',
    'comportamentosEspeciais': {
      'telefoneNaoTocando': ()=>{
        console.log('porta: percebeu que a porta está fechada. Telefone vai tocar em 5 segundos...');
        telefone.alterarSom(somTelefoneTocando);
        telefone.posicionarDireita();
        setTimeout(function() {
          // aguarda 5 segundos e coloca o telefone pra tocar
          inventario.adicionarElemento('telefoneTocando');
          vCenario.tema.parar();
          somTemaTelefone.ajustarVolume(0.2);
          somTemaTelefone.tocarEmLoop();
          telefone.tocarSom();
        }, 5000);
      },
      'chavePorta': ()=>{
        console.log('porta: usou a chave para abrir. Tocar áudio de sucesso e encerrar fase.');
        porta.status = 'aberta';
        fases['fase1']['concluida'] = true;
        vCenario.pararAudio();
        somEpilogo.tocar();
        fases.fase1.audioIntro.tocar();
      }
    },
  });
  
  let somFocoLampada = new Som('foco_lampada');
  let lampada = new Objeto({
    'nome': 'lampada',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somFoco': somFocoLampada,
    'status':'',
    'comportamentosEspeciais': {}
  });
  let somChaveNoQuadro = new Som('Fase1ChaveNoQuadro');
  let somFocoQuadro = new Som('foco_quadro');
  let quadro = new Objeto({
    'nome': 'quadro',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'somFoco': somFocoQuadro,
    'status':'',
    'comportamentosEspeciais': {'dicaQuadro': ()=>{
      console.log('quadro: encontrada uma chave. Tocar áudio descrevendo');
      somChaveNoQuadro.tocar();
      inventario.adicionarElemento('chavePorta');
    }}
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
      console.log('prateleira: machucou o dedo. Tocar áudio descrevendo');
      inventario.adicionarElemento('dedoMachucado');
    }}
  });
  
  let somFocoEstante = new Som('foco_estante');
  let estante = new Objeto({
    'nome': 'estante',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': true,
    'somFoco': somFocoEstante,
    'status':'',
    'comportamentosEspeciais': {'dedoMachucado': ()=>{
      console.log('estante: manchou livro com sangue. Ver se vale a pena colocar alguma coisa aqui');
      inventario.adicionarElemento('livroManchadoComSangue');
    }}
  });
  let somFocoBrasao = new Som('foco_brasao');
  let brasao = new Objeto({
    'nome': 'brasao',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'somFoco': somFocoBrasao,
    'status':'',
    'comportamentosEspeciais': {}
  });
  
  let dialogoTelefone = new Som('Dialogo');
  let somTelefoneTocando = new Som('telefone');
  let somFocoTelefone = new Som('foco_telefone');
  let telefone  = new Objeto({
    'nome': 'telefone',
    'verboso': verboso,
    'somCustomizado': 'silencio',
    'somContinuo': true,
    'somFoco': somFocoTelefone,
    'status':'',
    'comportamentosEspeciais': {'telefoneTocando': ()=>{
      console.log('telefone: recebe dica da chave no quadro. Gravar áudio explicando');
      telefone.pararSom();
      somTemaTelefone.parar();
      vCenario.tema.tocar();
      telefone.alterarSom(dialogoTelefone);
      telefone.definirSomContinuo(false);
      telefone.tocarSom();
      inventario.adicionarElemento('dicaQuadro');
    }}
  });
  let somFocoPoltrona = new Som('foco_poltrona');
  let poltrona  = new Objeto({
    'nome': 'poltrona',
    'verboso': verboso,
    'somCustomizado': '',
    'somContinuo': false,
    'somFoco': somFocoPoltrona,
    'status':'',
    'comportamentosEspeciais': {}
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
    'objetos': [lampada, quadro, prateleira],
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
  
  let somPrologo = new Som('Fase1Prologo');
  let fase1 = new Fase(
    'fase1',
    [painel1, painel2, painel3, painel4],
    new Som('tema_main'),
    new Som('tema_birthday'),
    new Inventario(['naoMachucado', 'telefoneNaoTocando']),
    false,
    () => {
      fases.fase1.audioIntro.tocar();
      somPrologo.tocar();
      setTimeout(function(){
        fases.fase1.audioIntro.parar();
        vCenario = new VisaoCenario(fases.fase1.paineis, fases.fase1.tema);
        inventario = fases.fase1.inventario;
      }, 30000);
    },
  );

  return fase1;
}

function criarFases() {
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
let faseAtual = 'fase1'

let imgBotoes;

function preload() {
  imgBotoes = loadImage('./assets/imgs/botoes.jpg');
  criarFases();
}

function setup(){
  fases[faseAtual].executarAoIniciar();
  controle = new Controle();  
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
  49: 'objeto1',
  50: 'objeto2',
  52: 'voltar'
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
    case 49:
      return painel.getListaNomesObjetos()[0];
    case 50:
      return painel.getListaNomesObjetos()[1];
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
