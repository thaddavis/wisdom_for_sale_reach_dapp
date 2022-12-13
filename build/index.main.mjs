// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v27, from: v64 } = txn1;
  ;
  const v71 = stdlib.protect(ctc1, await interact.confirmPurchase(v65), {
    at: './index.rsh:26:71:application',
    fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:15:function exp)'],
    msg: 'confirmPurchase',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v71],
    evt_cnt: 1,
    funcNum: 1,
    lct: v66,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v73], secs: v75, time: v74, didSend: v40, from: v72 } = txn2;
      
      ;
      if (v73) {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v40, from: v72 } = txn2;
  ;
  if (v73) {
    return;
    }
  else {
    stdlib.protect(ctc2, await interact.reportCancellation(), {
      at: './index.rsh:30:55:application',
      fs: ['at ./index.rsh:30:13:application call to [unknown function] (defined at: ./index.rsh:30:25:function exp)'],
      msg: 'reportCancellation',
      who: 'Buyer'
      });
    
    return;
    }
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  
  
  const v61 = stdlib.protect(ctc0, interact.price, 'for Seller\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v61],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v65], secs: v67, time: v66, didSend: v27, from: v64 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v27, from: v64 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.reportReady(v65), {
    at: './index.rsh:23:27:application',
    fs: ['at ./index.rsh:23:27:application call to [unknown function] (defined at: ./index.rsh:23:27:function exp)', 'at ./index.rsh:23:27:application call to "liftedInteract" (defined at: ./index.rsh:23:27:application)'],
    msg: 'reportReady',
    who: 'Seller'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v40, from: v72 } = txn2;
  ;
  if (v73) {
    return;
    }
  else {
    stdlib.protect(ctc1, await interact.reportCancellation(), {
      at: './index.rsh:30:55:application',
      fs: ['at ./index.rsh:30:13:application call to [unknown function] (defined at: ./index.rsh:30:25:function exp)'],
      msg: 'reportCancellation',
      who: 'Seller'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByACAAEmAQAiNQAxGEEA4yhkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAADIjEkQjNAESRDQESSISTDQCEhFESTUFFzX/gAQPv8Y0NP8WUQcIULA0/0EAA0IANkIAM0iBoI0GiACYIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v108","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T2","name":"v110","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x61071c60806001600160401b03601f1938849003601f81018216840190848210848311176102a757808591604097889485528339810103126102bd578351848101818110848211176102a7578552835181526020809401519084810191825243600355855190858201828110868211176102a7578752600080925260049260ff8454166102905760607f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f9189519033825284518a830152518a820152a1518015908115610284575b501561026d573461025657600194858255438655865192828285015281845287840184811087821117610243578852835195861161023057600254908782811c92168015610226575b838310146102135750601f81116101cc575b508093601f86116001146101695750509183949184939461015e575b50501b916000199060031b1c1916176002555b5161045990816102c38239f35b01519250388061013e565b600283528183209493928692918316915b888383106101b25750505010610199575b505050811b01600255610151565b015160001960f88460031b161c1916905538808061018b565b85870151885590960195948501948793509081019061017a565b60028352818320601f870160051c810191838810610209575b601f0160051c019087905b8281106101fe575050610122565b8481550187906101f0565b90915081906101e5565b634e487b7160e01b845260229052602483fd5b91607f1691610110565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b905060015414386100c7565b875163100960cb60e01b8152600781860152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001f575b505050361561001d57005b005b600092833560e01c9182631e93b0f114610283575081632a460710146100e75750806383230757146100c95763ab53f2c61461005b5780610012565b346100c557816003193601126100c55781546100756102d9565b91805193849283526020828185015284518093850152815b8381106100ae57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161008d565b5080fd5b50346100c557816003193601126100c5576020906001549051908152f35b8383806003193601126100c55780516020936001600160401b0391858101838111828210176102705784528490528251918284019081118382101761025d578352803582526024359182151583036102275785810192835260ff825416610246577f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1606085513381528351898201528551151587820152a1600185540361022f576101906102d9565b868180518101031261022b57860151801515036102275751801590811561021b575b501561020457346101ed575051156101d957818055816001556101d36103a4565b51908152f35b818055816001556101e86103a4565b6101d3565b602490600d84519163100960cb60e01b8352820152fd5b602490600c84519163100960cb60e01b8352820152fd5b905060015414866101b2565b8480fd5b8580fd5b835163100960cb60e01b8152600b81840152602490fd5b835163100960cb60e01b8152600a81840152602490fd5b634e487b7160e01b855260418252602485fd5b634e487b7160e01b865260418352602486fd5b8490346100c557816003193601126100c5576020906003548152f35b90600182811c921680156102cf575b60208310146102b957565b634e487b7160e01b600052602260045260246000fd5b91607f16916102ae565b6040519060006002546102eb8161029f565b808552600191808316908115610385575060011461033f575b5050829003601f01601f191682016001600160401b0381118382101761032957604052565b634e487b7160e01b600052604160045260246000fd5b6002600090815260209350918360008051602061042d8339815191525b83851061037157505050508301013880610304565b80548886018301529301928490820161035c565b919250506020925060ff191682850152151560051b8301013880610304565b6103af60025461029f565b806103b75750565b601f81116001146103ca57506000600255565b6002600090815290600190601f0160051c60008051602061042d833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b81811061042257505050602081208160025555565b838155820161040d56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 1820,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:33:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:29:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller": Seller
  };
export const _APIs = {
  };
