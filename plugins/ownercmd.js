const _0x3df0b3=_0x44d2;(function(_0x3613b5,_0x16c1c7){const _0x4ecb99=_0x44d2,_0x4c20d3=_0x3613b5();while(!![]){try{const _0x49502a=-parseInt(_0x4ecb99(0x11d))/0x1+-parseInt(_0x4ecb99(0x103))/0x2+-parseInt(_0x4ecb99(0x10c))/0x3*(-parseInt(_0x4ecb99(0x113))/0x4)+parseInt(_0x4ecb99(0x118))/0x5+-parseInt(_0x4ecb99(0x110))/0x6*(-parseInt(_0x4ecb99(0x11f))/0x7)+-parseInt(_0x4ecb99(0x11e))/0x8+-parseInt(_0x4ecb99(0x121))/0x9*(-parseInt(_0x4ecb99(0x10a))/0xa);if(_0x49502a===_0x16c1c7)break;else _0x4c20d3['push'](_0x4c20d3['shift']());}catch(_0x5ce21f){_0x4c20d3['push'](_0x4c20d3['shift']());}}}(_0x41d0,0xdaee6));function _0x44d2(_0x58a40c,_0x3baaf4){const _0x41d032=_0x41d0();return _0x44d2=function(_0x44d211,_0x52b5ba){_0x44d211=_0x44d211-0xfe;let _0x29ecee=_0x41d032[_0x44d211];return _0x29ecee;},_0x44d2(_0x58a40c,_0x3baaf4);}const {cmd}=require(_0x3df0b3(0x116)),{exec}=require(_0x3df0b3(0x106)),config=require('../config');cmd({'pattern':_0x3df0b3(0x112),'desc':_0x3df0b3(0x119),'category':_0x3df0b3(0x109),'react':'🚫','filename':__filename},async(_0x4d72d1,_0x50319b,_0x380c27,{from:_0x47dd54,isOwner:_0x4d4ec8,quoted:_0x31c8cf,reply:_0x1df85a})=>{const _0x294c10=_0x3df0b3;if(!_0x4d4ec8)return _0x1df85a(_0x294c10(0x115));if(!_0x31c8cf)return _0x1df85a('❌\x20Please\x20reply\x20to\x20the\x20user\x20you\x20want\x20to\x20block.');const _0x4619f8=_0x31c8cf['sender'];try{await _0x4d72d1[_0x294c10(0x107)](_0x4619f8,'block'),_0x1df85a(_0x294c10(0x104)+_0x4619f8+'\x20blocked\x20successfully.');}catch(_0x57eb0f){_0x1df85a('❌\x20Error\x20blocking\x20user:\x20'+_0x57eb0f[_0x294c10(0x11c)]);}}),cmd({'pattern':'unblock','desc':_0x3df0b3(0x102),'category':_0x3df0b3(0x109),'react':'✅','filename':__filename},async(_0x315417,_0x28b974,_0x35e540,{from:_0x3a99c7,isOwner:_0x2f043f,quoted:_0x2f8cbd,reply:_0x57168a})=>{const _0x45c5c9=_0x3df0b3;if(!_0x2f043f)return _0x57168a(_0x45c5c9(0x115));if(!_0x2f8cbd)return _0x57168a('❌\x20Please\x20reply\x20to\x20the\x20user\x20you\x20want\x20to\x20unblock.');const _0x56303e=_0x2f8cbd[_0x45c5c9(0x122)];try{await _0x315417[_0x45c5c9(0x107)](_0x56303e,_0x45c5c9(0xfe)),_0x57168a('✅\x20User\x20'+_0x56303e+'\x20unblocked\x20successfully.');}catch(_0x41bc5a){_0x57168a(_0x45c5c9(0x100)+_0x41bc5a[_0x45c5c9(0x11c)]);}}),cmd({'pattern':'clearchats','desc':_0x3df0b3(0x101),'category':_0x3df0b3(0x109),'react':'🧹','filename':__filename},async(_0x2811e4,_0x2e0679,_0xe04924,{from:_0xb03114,isOwner:_0x298972,reply:_0x1fb931})=>{const _0x1bac91=_0x3df0b3;if(!_0x298972)return _0x1fb931(_0x1bac91(0x115));try{const _0x53e49f=_0x2811e4[_0x1bac91(0x11a)]['all']();for(const _0x36ca7a of _0x53e49f){await _0x2811e4[_0x1bac91(0x10d)](_0x36ca7a[_0x1bac91(0x120)],_0x1bac91(0x11b));}_0x1fb931(_0x1bac91(0x114));}catch(_0x378147){_0x1fb931(_0x1bac91(0xff)+_0x378147['message']);}}),cmd({'pattern':_0x3df0b3(0x120),'desc':_0x3df0b3(0x111),'category':_0x3df0b3(0x109),'react':'🤖','filename':__filename},async(_0x12a28f,_0x308938,_0x24f5d8,{from:_0x2e6bba,isOwner:_0x2f141a,reply:_0x2a1b54})=>{const _0x455a83=_0x3df0b3;if(!_0x2f141a)return _0x2a1b54('❌\x20You\x20are\x20not\x20the\x20owner!');_0x2a1b54(_0x455a83(0x123)+_0x12a28f[_0x455a83(0x105)][_0x455a83(0x120)]);}),cmd({'pattern':_0x3df0b3(0x108),'desc':_0x3df0b3(0x10e),'category':_0x3df0b3(0x109),'react':'📝','filename':__filename},async(_0x5e929e,_0x14408b,_0x47014c,{from:_0x128864,isOwner:_0x1066c2,reply:_0x522ae2})=>{const _0x3ee757=_0x3df0b3;if(!_0x1066c2)return _0x522ae2(_0x3ee757(0x115));const _0x3e3cf1=await _0x5e929e[_0x3ee757(0x10f)](),_0xf0e6a7=Object[_0x3ee757(0x117)](_0x3e3cf1)['join']('\x0a');_0x522ae2(_0x3ee757(0x10b)+_0xf0e6a7);});function _0x41d0(){const _0x1d2398=['child_process','updateBlockStatus','gjid','owner','1987850osnasW','📝\x20*Group\x20JIDs:*\x0a\x0a','3279345WJAKVf','modifyChat','Get\x20the\x20list\x20of\x20JIDs\x20for\x20all\x20groups\x20the\x20bot\x20is\x20part\x20of.','groupFetchAllParticipating','6ZjDXjt','Get\x20the\x20bot\x27s\x20JID.','block','4ftFzEu','🧹\x20All\x20chats\x20cleared\x20successfully!','❌\x20You\x20are\x20not\x20the\x20owner!','../command','keys','98710NqlXyY','Block\x20a\x20user.','chats','delete','message','1533701DCcueR','11794864YZJjVX','903791lBpdqY','jid','180eCtjQQ','sender','🤖\x20*Bot\x20JID:*\x20','unblock','❌\x20Error\x20clearing\x20chats:\x20','❌\x20Error\x20unblocking\x20user:\x20','Clear\x20all\x20chats\x20from\x20the\x20bot.','Unblock\x20a\x20user.','2625738zwsfqw','🚫\x20User\x20','user'];_0x41d0=function(){return _0x1d2398;};return _0x41d0();}
