import {encrypt} from './encrypt.js';

var enc = [
  "08a841e996781e9e77d30a4e4420a8f501a280b00624e6d1224bf54aaff73eba",
  "120f6e5b4ea32f65bda68452fcfaaef06b0136e1d0e4a6f60bc3771fa0936dd6",
  "2a6937d721b14cdd7331c1ad1caf6a3cfa37a266650807101d44cdcd0acb132f",
  "ab26f6966ee37fdf3b66775bf6d4f5541ae62ba85301ca534723a68cc7bfeba6",
  "a4c7815e0ca14c6d3d3efcb44385a184ced6740707b91c908ed53e8ea4929a89",
  "8f53dd914ced58d84b4d816958f1442f59387ce7eadb03fa6aed193a512b2e5f",
  "82e695c9e75f5bc67deea8c67acb1c7bce3f633d533f9785804b500206348b89",
  "59cc3cb8a42973019cddacdee59e0aa7746ba6c203af78cefb453cb3a1b6610d",
  "89133bc00e9b3eb8698d9b7660f45f0eb060a8d7272db6c99af712699bfcc71f",
  "a954e93925dca619a33955a410991a9ba133bd5ea18075caf0d6849455c6537e",
  "4aa9e29a67c188acfc166a73cfe6be1fb0234196ae5597f24efff94b3e2c6dc8",
  "2f00c70d5fa9867d7bd2207e0d0b87e35a9ac962a8de36ee1be3944b63b39141",
  "f4f08c8f3bf230d3ed44a22ebefd0abbed2536324ee32f81d3c6ea424bbdcd0d",
  "12e6274e4309293e2d480272b49a6c7c73a6a6b22678ba226b533c67006c17d1",
  "8ea8c84240050ac80d69783611b0672ed5d80a3de464ef4638370cb3a7740ad6",
  "38ba35fc0a4761523023ba8ec3c0ac2029ea86b6f82743abc785b49a0a531605",
  "71471b3c78755ea8a74e788e122dfe75a87b3b6adef70db9acfdedde97f3c13d",
  "06a162bad2ddff1f5e8863b70cc4e14f8e2b1fdf413b7d768446a92fb214c41e",
  "b4fa77f72d7b0b98575fd91b39f4aac215c377fd2458800a7a10ed6baf1795f6",
  "2cb2d1f3fcca238e9f061897f8b6efc9911dcd3fdb4452279a8e30c28d401767",
  "8c4609eae833be24c90286786f5173c4cf3d2b3534fc31679f18759573152f2f",
  "1c4bfd100aa92982e4ab80891ad2dd769ff140df2580c4981c0b79198699f720",
  "f9d0d9b18ae9033a5ea36df19bf279b059e887a9ae785db81117bceaecc95933",
  "972dc444635e8efa466a4cd32ec3c48ae8e42ffa54cb6770f369794b162f639e",
  "62e10cd83647c84bd6bb50805fecde53f4e8d880017aff1013ca0e9f5b7781ba",
  "113f2f9ba72838fc5edfbd0db073f2f4ffd3bfc29c6c33d9f4aaf2356de856b7",
  "d1005af337e678f6f7bb7d8bd9b296894fefc8a71e1a8813adc9a8b035929a11",
  "ad412adb493df95a99a922c23990a35d1a166f6ca5d2b46ea360df8fea92b0a7",
  "5c85efe299462baf306c3d6936f6a18c7bea2a7f55f2eb70fe24d5df4a225852",
  "22f3ae2927952fc2fb44ba2d9e1e6da1ad7098bf02511c8e98155e5574873ceb",
  "2a8301b695937548acfb54200421b34ca7e4fccbaa00cda7936e2e2f1b450002",
  "0e4228b86af918f793b153ffbed9a034b7d379246e50f4129d9af72102ee918c",
  "68c85b220ba24471d7e0bb131a1ea8a1c4d2b3b2ff132fff9d167fd64d39cfae",
  "c40727c66d04b725818d4579040bcc69d5cfd9b430889a1af92f02e2cdb1bde2",
  "1f13cb2f9de32315b6caba3b903a57cc222f2c243ad7263a99f3be3372e67093",
  "6422a9a50e7afd5d165cefaeac8986fdd97a42e2c76b62fcf05022560d1f1191",
  "37a92dbd1131b5503ef48a1527952a3450ef41b0222c00c15a1b9a521f9b9152",
  "357109a518904f768f4291bc91232c4ca706f0eee745f7c65a2fffd5253163af",
  "27a62b68179c96f50c6732760268205441426539e30490d137f1c87ebc35127d",
  "ff26dd28f8d21408965f1869fd1ed3a8078e4426d08e00065da3b238c844efc1",
  "7991d51fe699b9e7da97be2edcc528fc5a364e88e6c0e5d83cc96f4e865a64c2",
  "534a259404f59f4b6119c77a922a8959f952065c3ccb86f643176f1a2496fa84",
  "26cea60bffe5010c144478b528c4cdbf2e68c7e435fef2aba1057e4f88fbb264",
  "1275302e01cef631a7f8180c513d119a4e81fa7c160f337155da254d4f093e7d",
  "3f7351456856a4eecf6cb1d0da9cfab2e8e1b4eb9554c164193067fe09558baa",
  "39beb0aac828d599eb5675cf32c7552290b03b16c55d5db32865361bfc7610ae",
  "e84dde508a606a3efca9e890fc31f60bcb07c796ebb94e1cfaff46bebeaeec8b",
  "3d72ace98964626f8fd6c98ea0f3ba36b6cf74e9d87a6eaae5a462d939173849",
  "49d3bc147609a89b35f614e7d4dea6f156fb2d527f030fc2755ef63e1f18066d",
  "d5957ae1c7e922d929c21daf1a0fd2f3b427e061d706f477501257b7020b30be",
  "a322b4dd3bd08d5a60789f0c72bf8e185a4db0e530649715b9110e77f6f9651c",
  "a40ccba874d287993850065a1cb068e648e6162e5e959b6684a356c14a606faf",
  "d44276bd69e2b7796a0c3672411d82dcfafb041bba6bf80f02662045868cdc0d",
  "118418653f4d41e95b9fccfa1ba353a8e0767718ee31e26092385a407d97e77b",
  "fb9ebf18103e119e819b5ebbd637958db338fe2821156a51e1b691015615e984",
  "4a74e3ecf77300e94f101b0e52734d6c76ef7f97922644421de5d9287de018b5",
  "5e914f64f3a320b64b8466bf89ac9a56a32e9fccf92a1de1de738c6aa906a4b2",
  "3a5a2512949399115565867a73a413ec6ba215c8f2df385f78b33238a6639b7c",
  "b3cec2f6ece2cef2abef927e6a7093e2e37675438ebf6c6f5da0a03c359e8fc3",
  "2ee2702991e669f970c80f8527b0704e109df94f781639a77a3e4e1174898f44",
  "d5ebe71514c411d4780bc4a254376a78deef408f047d9d39aa5c0948181df41d",
  "f2605a9a9ab5557112c6f684eb5ab9d0bf1bf6e559021ef6f067743c24b89860",
  "7137f5b849df1698e4fcc7f262928684ad063ed687a324d58f595df4a39ba38f",
  "1104b8297c44ffacae72ef81f58ac597db00522ca4673310e9ca4053e648e539",
  "df36189e4c49d5ddcc2d655fe0f405b7b6e4f46693e8e5cdbe957b4547670d7f",
  "ed2610a4d44ca858c908bdbe0c05aa76e6cb2b6f24c2c80f4aa105714f75c10e",
  "a4174086c3b0aa30c6edec4c44d4aa5a89f71d64251b025ca7600676769247f0",
  "8ab90bf1f2c716029edeaa7e4a14c81d359b934b193c73578cc62e2a53cd11c4",
  "a206ebd2851126db8dbdd572798e25059322c92b1a5d6c2f3c7e8e6fc19e7a16",
  "ad64e56f214e89dd1b2570e88877c66aa9c90f1d9dc2987a9acc9a85214709fc",
  "56633dc3b269b679481999bb57a9c776e0a7beb53604524cfbe6622536eb3d3a",
  "42ea5be17c3012236efe2e444a4c77d5f57cb799a0a904d930a19067c6ead23d",
  "4c181399ab9b1146ee0ec307dc9ed1c2537af5a4e9e93005c9ebfcd1112d5a2c",
  "cac1f1ca4833f52e3e91836faa13910713a7a40f2379b65c4f5c00b25a67bd6b",
  "5e837769cc5c455c82f193f80f1e3a68292892810c2d45edfaca12a36a911dd3",
  "1a4bdac7066c73e07d76f14b1ac7901e823029a95022ef6a792bdbfc74be1fc3",
  "b226765420cfaaddd4e0f845a9c5a7d284ced60f95b8d4f708f3dc05ad84bec6",
  "40302467fd53c6ca865aa2f0df9b52b39921ad3859e1d499b8b33ffd928d765d",
  "63a0f641d758652a2062b6f4a0b48419fd38a1dbc0e20067760d1ea407eee3d9",
  "f238a3678df338eadb95eaa5d3cee0e2ccfe9669bdbe413677a0144811808cfe",
  "f041e39a964b1af7cf6e07022242654edb6b9170d5fe1c654d21ca0d296daa13",
  "120f6e5b4ea32f65bda68452fcfaaef06b0136e1d0e4a6f60bc3771fa0936dd6",
  "59e63480307345535fb1b421804f5ee409b83e325561bf6b7011ad873d8321cc",
  "1b8b6fa80c00026f61c4613e875d8b7edcc848f00ffdfc4a4f51147ef63bf4f8",
  "9d57436661e1dce7d4506378319b1d62c6677bae3794b9cb048cbb5a9844d478",
  "7ab420913c3a5cf89c31ef9a7219fd8e0c40df8ce9dd245502379f15df76bac6",
  "f64c6fad9c3c8b57627216713feb9d3521b48a3b1ae43fe47be7d19d12d34d98",
  "2198c85f7b0d3a9d92670912b30e5a7af82b5c8fda47207661db630edce08c4b",
  "43508b5c03b8b8cee3ee7ad37cb95aa181c319f129d0bb42de1a1d8f57ec735e",
  "abd2eb5e45e0b93c64c8ec5869bb8740e0e8eb0614516f5b17ed0ce52c0232ad",
  "eb38fd33cf8b8d13c72fdb3a6204792f9abedf2c40689df9c2416bce5c9f114e",
  "8c2af88296ea9a080e2404655d7f8ce9ec060dfcae3761ded3fb58a027537241",
  "96100ccbb1611f9a0b4760137d48ebf780f9325f3884bfa19e3e53b75e6cf3d6",
  "e5ea2c2c9e4887794c2dd36c9933c06f8da81b914dda99bb8d0fc6d7d9467e76",
  "c20363e6868899db8e5e215f09f8d2b1b3571853ef01827901d7d09e6605d382",
  "bb87adf8aa783887f0874a55a7fce06d5fc60f5886a767c88f75fe5a7611074a",
  "2d93e740d65200e3a749b501650e886a6af7194851113e72c98938dfebd8919d",
  "469c0fdb6020d4bffe12ec93e76150a08ef02e116fc856a84b24eb02a1d1a155",
  "711f473ce9b2a27e399154f07433f498aecf59fab1a74bb808b64ededb524a59",
  "3967295dd29361c0c127ad5ab05d5ad30716009e10d93190050168da28971099",
  "443b8dc533a75c597d3fea100b47efa4e8022231b089c7291fe6456585d17d92",
  "2f6499a4c8cd1acf8a1fab3c2b5ff3744ee2a4a4cb6f0244e3d7ec0e637e1512",
  "1af400212a84b192f86172f02d0cd3bc4b850e947ab11711417f35ee0f76c922",
  "d00a3db7315ab70d49e764ac4d540bc28f43664f967253e0877fa0c1adfd1ac7",
  "de5a1adf4fedcce1533915edc60177547f1057b61b7119fd130e1f7428705f73",
  "ad6cacf3af98d07bf48067161281731a33ccc512212cf1ebc3490214efbd98be",
  "da90114c55191a389a1e36c3ed931c007c953b60ae50a6a87c6ae815270ccdf4",
  "43de5202fd037702d20a6993f61487be3302dfaef65b632d3ff85e0b7df5cbac",
  "cc96c4b5b5e5cc299f68297334334dee647986b98540c5aaf0445a1259b11956",
  "62ab5ab7c6052bf5ca776b770460499bef098ff7b5d04c91b969f27d92cee705",
  "13cdb3113165c266d7f51f24cbce59f2a1f0f4806af54b2b1cd0f881da97eb79",
  "c93b44c0cc2a6ef8840eab59e62919397377c47d36212952ee6d24540a9232d7",
  "11e9420772d2c61294766d5a4549880480786d1af1a8712adbeaa6a81159fa83",
  "f90502ffb5e396893f5fef08c15f45fb8dfc6099d15b8b11d1d945f898532113",
  "7e783e7703b4105e6147b3cc706b6a4c612e3849d6a372dee5a0fd18daf4b9a9",
  "eef3bd091670c3447022d619c06ad15de96da72b5a66f28bb8b75d1b1c12a05f",
  "a77ac6b9073428eaab6e1e128e262eb84f97ff7fc8d8df8b85a3f112dce964c5",
  "15551266fa4ff7c4ce9ad70df33963ffe3cf6acf2c1c1821ec9f3abd53500cf3",
  "7a22f570a0d3da028b7f1a424302018977f4cb1cedf16f4947a86142d0418e09",
  "d3e9c03d2bd118d0ddcb91594734a0b46d556d9e562c6fee2d9d68e29cd31153"
];
export function redirectTo404Page(){
var ERR404_PAGE_LINK = "https://checkif.co/404.html";
  window.location.href = ERR404_PAGE_LINK;
}
function isStringLengthValid(str){
  var HEADER_LENGTH_LIMIT =100;
  return str.length < HEADER_LENGTH_LIMIT;
}

function doesStringHaveProfanity(str){

let formatedControlString = formatString(str);
let normalSubstrings      = getAllSubstrings(formatedControlString);
let shortenedSubstrings   = getAllSubstrings(shortenString(formatedControlString));

for(let sub of normalSubstrings){
  let validation = validateString(sub);
  if(!validation)
     return true;
}
for(let sub of shortenedSubstrings){
  let validation = validateString(sub);
  if(!validation)
     return true;
}
return false;
}

function removeTrickies(str){
  str = str.replace(/!/g, 'i');
  str = str.replace(/@/g, 'a');
  str = str.replace(/0/g, 'o');
  return str;
}

function removeSpaces(str){
  return str.replace(/\s+/g, '');
}

function shortenString(str){
  let lastLetter = str.charAt(0);
  let currentLetter;
  let result = str;
  for(let i=1; i<result.length;i++){
      currentLetter = result.charAt(i);
    if(currentLetter == lastLetter){
       result = (i == result.length-1) ?  result.substring(0,i)  :  result.substring(0,i) + result.substring(i+1);
       i--;
    }else{
      lastLetter = currentLetter;
    }
  }
  return result;
}
function formatString(str){
  let noSpaceString   = removeSpaces(str);
  let formatedString  = noSpaceString.toLowerCase();
  let trickiesRemovedString = removeTrickies(formatedString);
  return trickiesRemovedString;
}

function validateString(str){
  let encryptedString = encrypt(str);
  return !enc.includes(encryptedString);
}

function getAllSubstrings(str){
  let substrArr = [];
  for(let i = 0; i<str.length;i++){
    let j = i+1;
    for(;j<str.length;j++){
      substrArr.push(str.substring(i,j));
    }
  }
  substrArr.push(str);
  console.log(substrArr);
  return substrArr;
}

export function validateHeader(header) {
  let isValid = isStringLengthValid(header) ;
  if(!isValid)
    redirectTo404Page();
}