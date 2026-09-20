(function(){
"use strict";

/* ---------- 圖示 ---------- */
var I={
 find:'<path d="M3 9l9-5 9 5"/><path d="M5 9v9M19 9v9M3 19h18"/>',
 mail:'<path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/>',
 pay:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M10 9h4M10 13h4"/>',
 hall:'<path d="M4 10l8-6 8 6v10H4z"/><path d="M9 20v-6h6v6"/>',
 book:'<path d="M5 4h9a2 2 0 012 2v14H7a2 2 0 01-2-2z"/><path d="M16 4h3v16h-3"/>',
 trash:'<path d="M5 7h14"/><path d="M8 7V5h8v2"/><path d="M6 7l1 13h10l1-13"/>',
 heart:'<path d="M12 21s-7-4.5-7-9a4 4 0 017-2.6A4 4 0 0119 12c0 4.5-7 9-7 9z"/>',
 coin:'<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9.5 10h5M9.5 14h5"/>',
 lamp:'<path d="M12 3v2M5 12H3M21 12h-2M6 6L4.5 4.5M18 6l1.5-1.5"/><circle cx="12" cy="13" r="4"/><path d="M10 19h4"/>',
 bus:'<path d="M5 5h14v10H5z"/><path d="M5 15v3M19 15v3M8 8h8"/>'
};
function svg(p,c){return '<svg viewBox="0 0 24 24">'+p+'</svg>';}

/* ---------- 共用片段 ---------- */
function nav(on){
  var items=[['桃園首頁','<path d="M4 11l8-7 8 7v8H4z"/>'],['市府服務','<path d="M4 6h16v13H4z"/><path d="M9 19v-5h6v5"/>'],
             ['市民生活','<path d="M5 8h11v7H5z"/><path d="M16 10h3v3h-3"/>'],['消費優惠','<path d="M5 9h14v10H5z"/><path d="M9 9V6h6v3"/>'],
             ['我的卡證','<path d="M4 7h16v11H4z"/><path d="M4 11h16"/>']];
  return '<div class="app-nav">'+items.map(function(it){
    return '<div class="'+(it[0]===on?'on':'')+'"><div class="ni">'+svg(it[1])+'</div>'+it[0]+'</div>';
  }).join('')+'</div>';
}
function header(title,greet){
  return '<div class="app-top"><h4>'+title+'</h4><span class="bell">🔔</span>'+(greet||'')+'</div>';
}
var GREET='<div class="greet"><div class="avatar"><i></i></div><div class="nm">你好，林立</div>'+
  '<div class="wx"><div>溫度<b>29-32°C</b></div><div>降雨機率<b>0%</b></div><div>空氣品質<b>普通</b></div></div></div>';

/* ---------- 畫面樣板 ---------- */
var T={
 home:function(){
   return '<div class="app">'+header('桃園首頁',GREET)+
     '<div class="app-body"><div class="banner"><div class="b1">桃城智慧行</div>'+
     '<div class="b2">完成任 3 關抽大獎</div><div class="b3">打開 APP 完成報名！</div><div class="b4">廣告</div></div>'+
     '<p class="bcap">「桃城智慧行－任 3 關抽大獎」－第一關：活動輕鬆報</p>'+
     '<div class="sec-t" style="margin-top:12px">常用功能</div><div class="quick">'+
     '<div><div class="qi">'+svg('<path d="M4 7h11v12H4z"/><path d="M8 4h11v12"/>')+'</div>集章活動</div>'+
     '<div><div class="qi">'+svg(I.pay)+'</div>發票紀錄</div>'+
     '<div><div class="qi">'+svg('<path d="M4 20l4-1 11-11-3-3L5 16z"/>')+'</div>手登發票</div>'+
     '<div><div class="qi">'+svg('<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>')+'</div>發票掃描</div>'+
     '</div></div>'+nav('桃園首頁')+'</div>';
 },
 list:function(s){
   return '<div class="app">'+header(s.title)+'<div class="app-body" style="padding-top:12px">'+
     s.items.map(function(it){
       return '<div class="srv'+(it.hot?' hot':'')+'"><div class="si">'+svg(I[it.icon])+'</div>'+
         '<div class="st"><b>'+it.name+'</b><small>'+it.desc+'</small></div><div class="sa">›</div></div>';
     }).join('')+'</div>'+nav(s.nav||'市府服務')+'</div>';
 },
 ext:function(s){
   return '<div class="ext"><div class="ext-bar"><div class="url">🌐 '+s.url+'</div></div>'+
     (s.ad?'<div class="ext-ad"><span>'+s.ad+'</span><span>✕</span></div>':'')+
     '<div class="ext-page"><div class="ext-gov">'+s.gov+'</div>'+
     (s.tabs?'<div class="ext-nav">'+s.tabs.map(function(t){return '<span>'+t+'</span>';}).join('')+'</div>':'')+
     (s.cols?'<div class="ext-cols">'+s.cols.map(function(c){return '<div>'+c+'</div>';}).join('')+'</div>':'')+
     (s.cols2?'<div class="ext-cols">'+s.cols2.map(function(c){return '<div>'+c+'</div>';}).join('')+'</div>':'')+
     (s.note?'<p class="ext-note">'+s.note+'</p>':'')+
     '</div></div>'+(s.pinch?'<span class="pinch">'+s.pinch+'</span>':'');
 },
 extform:function(s){
   return '<div class="ext"><div class="ext-bar"><div class="url">🌐 '+s.url+'</div></div>'+
     (s.ad?'<div class="ext-ad"><span>'+s.ad+'</span><span>✕</span></div>':'')+
     '<div class="ext-page"><div class="ext-gov">'+s.gov+'</div><div class="ext-form">'+
     s.fields.map(function(f){return '<label>'+f+'</label><div class="fi"></div>';}).join('')+
     '<div class="ext-btn">'+(s.btn||'送出')+'</div>'+
     (s.note?'<p class="ext-note">'+s.note+'</p>':'')+
     '</div></div></div>';
 },
 goog:function(s){
   return '<div class="goog"><div class="q">🔍 '+s.q+'</div>'+
     s.rs.map(function(r){return '<div class="r"><em>'+r[0]+'</em><b>'+r[1]+'</b><span>'+r[2]+'</span></div>';}).join('')+
     '</div>';
 },
 store:function(s){
   return '<div class="store"><div style="font-size:11px;color:#888;text-align:left">‹ 返回市民卡</div>'+
     '<div class="ic">♻</div><b>'+s.name+'</b><small>'+s.by+'</small>'+
     '<div class="get">取得</div><p style="font-size:10.5px;color:#9E4A3C;margin-top:18px;line-height:1.7">'+s.note+'</p></div>';
 },
 call:function(s){
   return '<div class="call"><div class="av">☎</div><b>'+s.to+'</b><small>'+s.sub+'</small>'+
     '<div class="hint2">'+s.note+'</div></div>';
 },
 paper:function(s){
   return '<div class="paper"><div class="sheet"><h6>'+s.title+'</h6>'+
     s.fields.map(function(f){return f+'<div class="ln"></div>';}).join('')+
     '</div><p style="font-size:10px;color:#6B5B60;margin:10px 2px 0;line-height:1.6">'+s.note+'</p></div>';
 },
 consent:function(s){
   return '<div class="consent"><div class="consent-bar"><span class="bk">‹</span> 個人資料使用同意</div>'+
     '<div class="consent-body"><div class="consent-card"><div class="consent-head">'+
     '<div class="bub"><svg viewBox="0 0 24 24"><path d="M4 6h16v10H9l-4 4z"/><path d="M8 10h8M8 13h5"/></svg></div>'+
     '<div><h5>'+s.service+'</h5><small>個資使用聲明</small></div></div>'+
     '<p>依據個人資料保護法等相關規定，桃園市政府有義務告知以下事項：</p>'+
     '<p>為提供更快速、便利之服務，您在市民卡 App 內使用「'+s.system+'」時，將透過市民卡單一簽入（SSO）機制，提供您的市民卡會員資料至該系統（主管機關：'+s.dept+'），其個人資料利用之期間、對象、地區及方式，皆以該系統或該單位的「隱私權公告」為主。</p>'+
     '<p><b>本次將提供的資料：</b></p><div class="scope">'+
     s.scopes.map(function(r){
       return '<div class="scope-row"><span class="sw'+(r[2]?' off':'')+'"></span><span class="sl"><b>'+r[0]+'</b><span>'+r[1]+'</span></span></div>';
     }).join('')+'</div>'+
     '<p>本次蒐集之個人資訊，僅限於本次'+s.service+'申辦使用，並遵守個人資料保護法相關規定，保障使用者的個資。</p>'+
     '<p>您可隨時於「我的卡證 → 服務授權管理」查看或撤銷本次授權。撤銷後仍可循原有臨櫃與紙本管道辦理。</p>'+
     '<p>如有使用問題，請撥打 1999 市民熱線。</p></div></div>'+
     '<div class="consent-foot"><div class="agree"><span class="box ck"></span><span>本人已詳閱並同意以上條款個資使用聲明</span></div>'+
     '<div class="btn-lg">同意並繼續</div></div></div>';
 },
 sso:function(s){
   return '<div class="load"><div><div class="ring"></div><b>正在以市民卡身分登入</b>'+
     '<small>'+s.system+'<br>不需要再輸入一次帳號密碼</small>'+
     '<div class="mono">GET /oauth2/authorize?scope=profile<br>→ code → POST /oauth2/token<br>→ id_token · access_token</div></div></div>';
 },
 panel:function(s){
   var bar = s.mode==='webview'
     ? '<div class="wv-bar"><div class="r1"><span class="x">✕</span> '+s.title+'</div><div class="r2">✓ 已以市民卡身分登入　林立</div></div>'
     : '<div class="wv-bar"><div class="r1"><span class="x">‹</span> '+s.title+'</div><div class="r2">✓ 市民卡 App 內原生功能</div></div>';
   return '<div class="wv">'+bar+'<div class="wv-body">'+s.rows.map(row).join('')+
     (s.btn?'<div class="btn-lg" style="margin-top:4px">'+s.btn+'</div>':'')+'</div></div>';
 },
 done:function(s){
   return '<div class="app">'+header(s.title)+'<div class="app-body" style="padding-top:6px"><div class="done">'+
     '<div class="tick'+(s.ok?'':' bad')+'">'+(s.ok?'✓':'!')+'</div>'+
     '<h5>'+s.h+'</h5><p class="sub">'+s.sub+'</p>'+
     (s.push?'<div class="push"><div class="pd"></div><div><b>'+s.push[0]+'</b><span>'+s.push[1]+'</span></div></div>':'')+
     (s.quote?'<div class="push q"><div class="pd"></div><div><b>'+s.quote[0]+'</b><span>'+s.quote[1]+'</span></div></div>':'')+
     '</div></div>'+nav(s.nav||'市府服務')+'</div>';
 },
 notif:function(s){
   return '<div class="app">'+header('通知')+'<div class="app-body scrolly" style="padding-top:12px">'+
     '<div style="font-size:11.5px;color:#8E1B33;margin:0 2px 10px">2026 年 10 月 18 日</div>'+
     s.items.map(function(n){
       return '<div class="ncard"><div class="ttl"><i></i>'+n[0]+'</div><p>'+n[1]+'</p>'+
         (n[2]?'<span class="act">'+n[2]+'</span>':'')+'<span class="when">'+n[3]+'</span></div>';
     }).join('')+
     '<p style="font-size:10.5px;color:#9A8F93;margin:4px 2px 0;line-height:1.7">'+s.foot+'</p>'+
     '</div>'+nav('桃園首頁')+'</div>';
 },
 auth:function(){
   function item(n,d,w){
     return '<div class="card" style="padding:12px"><b style="font-size:14px">'+n+'</b>'+
       '<div style="font-size:11px;color:#6B5B60;margin:4px 0 8px;line-height:1.6">'+d+'<br>最近使用：'+w+'</div>'+
       '<div style="display:flex;gap:8px">'+
       '<span style="flex:1;text-align:center;font-size:11.5px;border:1px solid #E8556E;color:#E8556E;border-radius:8px;padding:5px">撤銷授權</span>'+
       '<span style="flex:1;text-align:center;font-size:11.5px;border:1px solid #E1E5E9;color:#6B5B60;border-radius:8px;padding:5px">調整範圍</span></div></div>';
   }
   return '<div class="app">'+header('我的卡證','<div class="greet"><div class="avatar"><i></i></div><div class="nm">你好，林立<br><span style="font-size:11px;opacity:.9">學生普通卡・卡號 9134 32** **** 1242</span></div></div>')+
     '<div class="app-body scrolly" style="padding-top:12px"><div class="sec-t">服務授權管理</div>'+
     item('公共場地租借系統','民政局｜姓名、身分證字號、手機、電子信箱','2026/10/18')+
     item('圖書館借閱查詢','文化局｜姓名、借閱證號','2026/10/02')+
     item('衛生篩檢預約','衛生局｜姓名、身分證字號、手機','2026/09/26')+
     '<div class="sec-t" style="margin-top:14px">推播分類</div><div class="card" style="padding:12px">'+
     '<div class="scope-row" style="border-color:#F0E4E7"><span class="sw" style="background:#E8556E"></span><span class="sl"><b>福利提醒</b><span>依持有卡別推播，每月上限 4 則</span></span></div>'+
     '<div class="scope-row" style="border-color:#F0E4E7"><span class="sw" style="background:#E8556E"></span><span class="sl"><b>社區活動</b><span>依居住里別推播</span></span></div>'+
     '<div class="scope-row"><span class="sw off"></span><span class="sl"><b>店家優惠</b><span>已關閉</span></span></div>'+
     '</div></div>'+nav('我的卡證')+'</div>';
 }
};

function row(r){
  if(r.t==='field') return '<div class="field"><label>'+r.l+'</label><div class="v"><span>'+r.v+'</span>'+(r.auto?'<small>自動帶入</small>':'')+'</div></div>';
  if(r.t==='slots') return '<div class="field"><label>'+r.l+'</label><div class="slots">'+r.v.map(function(s){
      return '<span class="'+(s[1]||'')+'">'+s[0]+'</span>';}).join('')+'</div></div>';
  if(r.t==='elig') return '<div class="elig"><span class="tag '+r.k+'">'+r.tag+'</span><b>'+r.l+'</b><span>'+r.v+'</span></div>';
  if(r.t==='map') return '<div class="mapbox">'+
      '<div class="road" style="left:0;top:52px;width:100%;height:9px"></div>'+
      '<div class="road" style="left:96px;top:0;width:9px;height:100%"></div>'+
      '<div class="road" style="left:0;top:96px;width:100%;height:6px"></div>'+
      '<div class="pin" style="left:120px;top:32px;background:#2E7D32"><span style="transform:rotate(45deg)">♻</span></div>'+
      '<div class="me" style="left:60px;top:88px"></div>'+
      '<div style="position:absolute;right:7px;bottom:6px;font-size:9.5px;background:rgba(255,255,255,.9);border-radius:5px;padding:2px 7px;color:#2E7D32;font-weight:700">'+r.v+'</div></div>';
  if(r.t==='photo') return '<div class="photo'+(r.has?' has':'')+'">'+r.v+'</div>';
  if(r.t==='note') return '<p style="font-size:10.5px;color:#6B747C;line-height:1.7;margin:2px 0 10px">'+r.v+'</p>';
  if(r.t==='head') return '<div style="font-size:13px;font-weight:700;margin:4px 0 8px">'+r.v+'</div>';
  return '';
}

/* ---------- 各情境的服務清單 ---------- */
var SRV_GOV=function(hot){return {title:'市府服務',nav:'市府服務',items:[
  {icon:'find',name:'找服務',desc:'提供對應桃園 e 指通網站的服務',hot:hot==='find'},
  {icon:'mail',name:'我想陳情',desc:'市政信箱、路燈故障通報、查詢市政信箱案件',hot:hot==='mail'},
  {icon:'pay',name:'我要繳費',desc:'停車費、規費查繳、罰鍰查繳、地方稅即查繳…',hot:hot==='pay'},
  {icon:'hall',name:'場地租借',desc:'桃園場地租借、創新創業場地租借、婦女館…',hot:hot==='hall'}
]};};
var SRV_LIFE=function(hot){return {title:'市民生活',nav:'市民生活',items:[
  {icon:'book',name:'圖書館',desc:'館藏查詢、線上預約、借閱紀錄',hot:hot==='book'},
  {icon:'trash',name:'垃圾車即時位置',desc:'清運路線、到點時間查詢',hot:hot==='trash'},
  {icon:'heart',name:'健康服務',desc:'成人健檢、癌症篩檢、疫苗預約',hot:hot==='heart'},
  {icon:'bus',name:'公車與 Ubike',desc:'即時動態、站點查詢',hot:hot==='bus'}
]};};

/* ---------- 情境資料 ---------- */
var SCN=[
{
 id:'hall', label:'場地租借', sub:'民政局／區公所',
 task:'向區公所線上借用集會所',
 src:'受訪者三（在地里長）：場地租借依規定須以市民卡辦理，但要頻繁跳轉、介面不直覺，實務上多半要靠里辦公處協助才能完成。',
 hdNow:'巢狀跳轉', hdNew:'WebView＋SSO',
 now:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'進入「市府服務」，點選場地租借。',s:{f:'list',d:SRV_GOV('hall')},m:[0,0,0]},
  {t:'跳到外部瀏覽器，網頁沒有手機版，還夾帶廣告。',badge:['bad','已離開 App','tr'],m:[1,0,0],
   s:{f:'ext',d:{url:'booking.example-gov.tw/hall/index.jsp',ad:'廣告｜立即申辦信用卡 享 5% 回饋',gov:'桃園市公共場地租借系統',
      tabs:['首頁','最新消息','場地查詢','線上預約','常見問答','下載專區'],
      cols:['公告：系統將於每週三凌晨進行例行維護。','表單下載：集會所借用申請書（ODT／DOC）','聯絡窗口：各區公所民政課'],
      cols2:['場地查詢','線上預約','預約紀錄'],pinch:'網頁未做手機版，需放大縮小'}}},
  {t:'外部系統帳號與市民卡不互通，必須重新登入。長者久未使用多半已忘記密碼。',badge:['bad','第 1 次重新登入','tr'],m:[1,1,0],
   s:{f:'extform',d:{url:'booking.example-gov.tw/hall/login.jsp',gov:'會員登入',fields:['帳號（身分證字號）','密碼','驗證碼'],btn:'登入',
      note:'※ 本系統帳號與桃園市民卡帳號不互通。'}}},
  {t:'姓名、身分證字號、電話、地址等欄位全部重打一次。',badge:['bad','手動填寫 12 欄','tr'],m:[1,1,12],
   s:{f:'extform',d:{url:'booking.example-gov.tw/hall/apply.jsp',gov:'集會所借用申請',
      fields:['申請人姓名','身分證字號','出生年月日（西元）','行動電話','電子信箱','通訊地址','使用單位','活動名稱／使用人數'],btn:'下一步'}}},
  {t:'要繳費又跳到另一個平台，再登入一次。',badge:['bad','再跳一次＋第 2 次登入','tr'],m:[2,2,12],
   s:{f:'extform',d:{url:'epay.example-gov.tw/pay/order',ad:'廣告｜下載 XX 錢包 APP 新戶送 100 元',gov:'規費線上繳納平台',
      fields:['帳號','密碼'],btn:'登入並繳費',note:'※ 請先登入本平台帳號以完成繳費。'}}},
  {t:'申請完成了，但回到 App 查不到這筆紀錄。',m:[2,2,12],
   s:{f:'done',d:{ok:0,title:'市府服務',h:'申請已送出，但不在 App 裡',
      sub:'案件進度、繳費證明與核准通知都留在外部系統，回到市民卡 App 查不到這筆申辦紀錄。',
      quote:['受訪者三（里長）','「一直跳轉外部網頁非常愚蠢，應該把常使用的功能直接整合在 App 內處理。」']}}}
 ],
 pro:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'進入「市府服務」，點選場地租借。',s:{f:'list',d:SRV_GOV('hall')},m:[0,0,0]},
  {t:'首次使用出現個資使用聲明，寫明提供哪些欄位給哪一個系統，選用欄位可關閉。',badge:['good','首次使用才出現','tr'],m:[0,0,0],
   s:{f:'consent',d:{service:'場地租借',system:'公共場地租借系統',dept:'民政局',
      scopes:[['姓名、身分證字號','驗證申請人身分，必要',0],['手機號碼、電子信箱','接收審核結果，必要',0],['通訊地址','寄送紙本核准函，可關閉',1]]}}},
  {t:'以市民卡身分單一簽入，不必再輸入帳號密碼。',m:[0,0,0],s:{f:'sso',d:{system:'公共場地租借系統'}}},
  {t:'租借系統在 App 內嵌瀏覽器開啟，個人欄位自動帶入，時段即時、可直接線上繳費。',badge:['good','仍在 App 內','tr'],m:[0,0,0],
   s:{f:'panel',d:{mode:'webview',title:'場地租借',btn:'送出申請並繳費',rows:[
      {t:'field',l:'申請人',v:'林　立',auto:1},{t:'field',l:'行動電話',v:'09** *** 128',auto:1},
      {t:'field',l:'使用單位',v:'桃園區義民里辦公處',auto:1},{t:'field',l:'借用場地',v:'義民里集會所'},
      {t:'slots',l:'10 月 18 日 可借用時段（即時）',v:[['09-11','full'],['13-15','pick'],['15-17',''],['19-21','']]},
      {t:'field',l:'規費',v:'新臺幣 300 元',auto:0}]}}},
  {t:'完成申辦，案件進度留在 App「我的申辦」，並推播受理通知。',m:[0,0,0],
   s:{f:'done',d:{ok:1,title:'我的申辦',h:'申請已送出',sub:'案件編號 TY-1141018-0072<br>進度、繳費紀錄與核准通知都留在 App 內。',
      push:['桃園市民卡','您有一則新的服務提醒：義民里集會所借用申請已受理，預計 2 個工作天內完成審核。']}}}
 ]
},
{
 id:'lamp', label:'路燈故障通報', sub:'養工處／市政信箱',
 task:'通報住家巷口的路燈不亮',
 src:'受訪者二：點選「路燈故障通報」會直接跳轉到養工處官網首頁，而不是可以直接輸入燈號定位報修的智慧路燈系統，民眾找不到報修入口。',
 hdNow:'跳錯地方', hdNew:'原生功能／API',
 now:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'進入「市府服務」，點選我想陳情裡的路燈故障通報。',s:{f:'list',d:SRV_GOV('mail')},m:[0,0,0]},
  {t:'跳出去之後落在養工處官網首頁，不是報修系統。',badge:['bad','跳到首頁，不是報修頁','tr'],m:[1,0,0],
   s:{f:'ext',d:{url:'gcd.example-gov.tw/index.php',gov:'桃園市政府養護工程處',
      tabs:['機關介紹','最新消息','業務職掌','便民服務','政府資訊公開','相關連結'],
      cols:['本處辦理道路、橋梁、路燈及排水設施之養護工程。','最新消息：114 年度道路養護工程招標公告','便民服務：表單下載、常見問答'],
      pinch:'桌面版網頁，字很小'}}},
  {t:'在官網裡一層層翻，找不到可以輸入燈號的地方。',badge:['bad','找不到入口','tr'],m:[1,0,0],
   s:{f:'ext',d:{url:'gcd.example-gov.tw/service/list.php',gov:'便民服務',
      cols:['表單下載','常見問答','陳情信箱'],cols2:['道路挖掘','橋梁維護','路燈管理'],
      note:'※「路燈管理」點進去是業務說明頁，沒有報修表單。'}}},
  {t:'最後還是退出來用 Google 搜尋，才找到真正的報修系統。',badge:['bad','第 2 次離開 App','tr'],m:[2,0,0],
   s:{f:'goog',d:{q:'桃園 路燈 報修 燈號',rs:[
      ['smartlight.example-gov.tw','桃園市智慧路燈維修通報系統','輸入燈桿編號即可通報，並查詢修復進度。'],
      ['gcd.example-gov.tw','養護工程處－路燈管理','本市路燈養護作業說明與相關法規。'],
      ['news.example.com','里長怨路燈報修找嘸入口 市府：可撥 1999']]}}},
  {t:'在報修系統再把姓名、電話、地點、燈號打一次。',badge:['bad','手動填寫 6 欄','tr'],m:[2,0,6],
   s:{f:'extform',d:{url:'smartlight.example-gov.tw/report',gov:'智慧路燈維修通報',
      fields:['燈桿編號','故障地點','故障情形','通報人姓名','聯絡電話','電子信箱'],btn:'送出通報'}}},
  {t:'通報完成，案件編號要自己抄下來，App 查不到進度。',m:[2,0,6],
   s:{f:'done',d:{ok:0,title:'市府服務',h:'通報完成，但進度要自己追',
      sub:'案件編號只出現在外部網站的完成畫面，回到市民卡 App 沒有任何紀錄。',
      quote:['受訪者二','「如果只是入口不如用 Google 搜尋。」']}}}
 ],
 pro:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'進入「市府服務」，點選我想陳情裡的路燈故障通報。',s:{f:'list',d:SRV_GOV('mail')},m:[0,0,0]},
  {t:'直接在 App 內開啟通報表單。市政信箱本來就會自動帶入個資，這個做法擴大到所有申辦流程。',badge:['good','同一個 App，免授權','tr'],m:[0,0,0],
   s:{f:'panel',d:{mode:'native',title:'路燈故障通報',btn:'送出通報',rows:[
      {t:'note',v:'同屬市民卡 App 內原生功能，不涉及跨系統授權，不需另行同意。'},
      {t:'field',l:'故障位置（自動定位）',v:'桃園區義民路二段 158 號前',auto:1},
      {t:'field',l:'最近燈桿編號',v:'TY-A03-1172',auto:1},
      {t:'photo',has:1,v:'已附上現場照片'},
      {t:'field',l:'通報人',v:'林　立',auto:1},
      {t:'field',l:'聯絡電話',v:'09** *** 128',auto:1}]}}},
  {t:'通報完成，案件進度留在 App，派工與修復都會推播。',m:[0,0,0],
   s:{f:'done',d:{ok:1,title:'我的申辦',h:'通報已受理',sub:'案件編號 LT-1141018-0311<br>派工與修復完成都會主動通知你。',
      push:['桃園市民卡','您有一則新的服務提醒：您通報的路燈已完成派工，預計 3 個工作天內修復。']}}}
 ]
},
{
 id:'book', label:'圖書館借閱', sub:'文化局',
 task:'預約一本書並查詢借閱紀錄',
 src:'受訪者二：使用圖書館線上預約查詢；受訪者三：跳轉出去的外部系統經常需要重複登入、未與市民卡帳號串聯。',
 hdNow:'另一套帳密', hdNew:'WebView＋SSO',
 now:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'進入「市民生活」，點選圖書館。',s:{f:'list',d:SRV_LIFE('book')},m:[0,0,0]},
  {t:'跳到圖書館的桌面版網站。',badge:['bad','已離開 App','tr'],m:[1,0,0],
   s:{f:'ext',d:{url:'library.example-gov.tw/webpac/',gov:'桃園市立圖書館 館藏查詢',
      tabs:['簡易查詢','進階查詢','新書通報','借閱排行','個人服務'],
      cols:['查詢結果：《照護的邏輯》　中壢分館　在架上','《照顧年邁父母》　龍潭分館　已借出'],
      pinch:'桌面版網頁，需放大縮小'}}},
  {t:'要預約就得登入借閱證帳密，和市民卡不是同一組。',badge:['bad','第 1 次重新登入','tr'],m:[1,1,0],
   s:{f:'extform',d:{url:'library.example-gov.tw/webpac/login',gov:'讀者登入',
      fields:['借閱證號','密碼（預設為生日）','驗證碼'],btn:'登入',
      note:'※ 借閱證號非市民卡卡號，密碼與市民卡帳號不互通。'}}},
  {t:'預約成功，但到期日只寫在網站上。',badge:['bad','手動填寫 4 欄','tr'],m:[1,1,4],
   s:{f:'extform',d:{url:'library.example-gov.tw/webpac/reserve',gov:'預約登記',
      fields:['取書館別','預約到館通知信箱','聯絡電話','備註'],btn:'確認預約'}}},
  {t:'書到期忘記還，App 不會提醒，被罰逾期費。',m:[1,1,4],
   s:{f:'done',d:{ok:0,title:'市民生活',h:'預約成功，之後就沒下文了',nav:'市民生活',
      sub:'到期日與預約到館通知都留在圖書館系統，市民卡 App 不會提醒。',
      quote:['受訪者四','「希望增加主動推播功能，讓民眾能收到與自己相關的活動與訊息通知。」']}}}
 ],
 pro:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'進入「市民生活」，點選圖書館。',s:{f:'list',d:SRV_LIFE('book')},m:[0,0,0]},
  {t:'同意聲明只揭露圖書館真正需要的兩個欄位：姓名與借閱證號。',badge:['good','僅兩個欄位','tr'],m:[0,0,0],
   s:{f:'consent',d:{service:'圖書館借閱',system:'桃園市立圖書館借閱系統',dept:'文化局',
      scopes:[['姓名','核對讀者身分，必要',0],['借閱證號（由市民卡帶出）','查詢與預約館藏，必要',0],['電子信箱','預約到館通知，可關閉',1]]}}},
  {t:'以市民卡身分登入，借閱證號直接由卡片帶出。',m:[0,0,0],s:{f:'sso',d:{system:'桃園市立圖書館借閱系統'}}},
  {t:'在 App 內查詢與預約，借閱中書籍與到期日一起顯示。',badge:['good','仍在 App 內','tr'],m:[0,0,0],
   s:{f:'panel',d:{mode:'webview',title:'圖書館',btn:'預約到中壢分館',rows:[
      {t:'head',v:'《照護的邏輯》'},
      {t:'field',l:'館藏狀態',v:'中壢分館 在架上'},
      {t:'field',l:'讀者',v:'林　立（借閱證 **0412）',auto:1},
      {t:'head',v:'借閱中'},
      {t:'field',l:'《照顧年邁父母》',v:'10/24 到期'},
      {t:'field',l:'《設計的品格》',v:'11/02 到期'}]}}},
  {t:'預約成功，到期前三天與預約到館都會推播。',m:[0,0,0],
   s:{f:'done',d:{ok:1,title:'我的申辦',h:'已完成預約',sub:'取書館別：中壢分館<br>到館與到期提醒都會主動通知。',
      push:['桃園市民卡','您有一則新的服務提醒：您借閱的書籍將於 3 日後到期，可於 App 內線上續借。']}}}
 ]
},
{
 id:'aid', label:'補助資格與申辦', sub:'社會局／衛生局',
 task:'查自己符合哪些補助，並完成申辦',
 src:'受訪者三：民眾對補助申辦資格不清楚，多半還是要打電話詢問、現場填寫紙本，缺乏線上自動比對機制。《桃園親子通》問卷：40.8% 不清楚自己符合哪些補助，30.6% 申請後不知道進度。',
 hdNow:'打電話問', hdNew:'自動資格比對',
 now:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'在「找服務」裡翻，不確定自己符合哪一項。',s:{f:'list',d:SRV_GOV('find')},m:[0,0,0]},
  {t:'跳到局處公告頁，滿滿法規條文，看完還是不確定資格。',badge:['bad','已離開 App','tr'],m:[1,0,0],
   s:{f:'ext',d:{url:'sab.example-gov.tw/news/detail.php?id=4821',gov:'桃園市政府社會局 公告',
      cols:['一、申請人應設籍本市連續六個月以上。','二、家庭總收入平均分配全家人口每人每月未超過…','三、應檢附戶籍謄本、收入證明、存摺封面影本…'],
      pinch:'條文很長，仍不確定自己符不符合'}}},
  {t:'只好打電話問承辦人。',badge:['bad','回到電話與臨櫃','tr'],m:[1,0,0],
   s:{f:'call',d:{to:'區公所社會課',sub:'撥號中…',note:'「民眾對補助申辦資格不清楚，多半還是要打電話詢問。」—— 受訪者三'}}},
  {t:'承辦人請你帶證件到現場填紙本。',m:[1,0,14],badge:['bad','手動填寫 14 欄','tr'],
   s:{f:'paper',d:{title:'桃園市政府補助申請書',fields:['申請人姓名','身分證統一編號','戶籍地址','通訊地址','聯絡電話','家庭成員人數','檢附文件'],
      note:'需另外準備戶籍謄本、收入證明與存摺影本，並親自送件。'}}},
  {t:'送件之後不知道審到哪裡，只能再打電話。',m:[1,0,14],
   s:{f:'done',d:{ok:0,title:'市府服務',h:'送件了，然後呢',
      sub:'《桃園親子通》家長問卷：54.9% 完成一項申請需一天以上，30.6% 申請後不知道進度。',
      quote:['問卷回饋','名額釋出等主動提醒獲 97.0% 支持、零人反對。']}}}
 ],
 pro:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'進入「找服務」裡的我的補助專區。',s:{f:'list',d:SRV_GOV('find')},m:[0,0,0]},
  {t:'依持有卡別與設籍資料自動比對，直接告訴你符合哪些、缺什麼。參考臺北通「福利適算」與新竹市數位申辦平台作法。',badge:['good','自動資格比對','tr'],m:[0,0,0],
   s:{f:'panel',d:{mode:'native',title:'我的補助',btn:'申辦育兒津貼',rows:[
      {t:'note',v:'依您已綁定的一生好運卡與設籍資料比對，資料來源限於您已提供給市府的資訊。'},
      {t:'elig',k:'y',tag:'符合',l:'育兒津貼（0-5 歲）',v:'每月 5,000 元，可直接線上申辦'},
      {t:'elig',k:'y',tag:'符合',l:'兒童發育篩檢補助',v:'幼兒滿 6 個月，可預約鄰近合約院所'},
      {t:'elig',k:'m',tag:'需補件',l:'中低收入戶生活補助',v:'尚需上傳最近一年所得證明'},
      {t:'elig',k:'n',tag:'不符合',l:'敬老愛心卡加值',v:'未達 65 歲，不再向您推播此類訊息'}]}}},
  {t:'申辦表單自動帶入，佐證文件直接拍照上傳。',badge:['good','免重複輸入','tr'],m:[0,0,0],
   s:{f:'panel',d:{mode:'webview',title:'育兒津貼申辦',btn:'送出申請',rows:[
      {t:'field',l:'申請人',v:'林　立',auto:1},{t:'field',l:'身分證字號',v:'A12***4567',auto:1},
      {t:'field',l:'戶籍地址',v:'桃園市桃園區義民路二段',auto:1},{t:'field',l:'受益幼兒',v:'林小○（6 個月）',auto:1},
      {t:'photo',has:1,v:'已上傳 存摺封面影本'}]}}},
  {t:'送出後每一個階段都會推播，進度留在 App。',m:[0,0,0],
   s:{f:'done',d:{ok:1,title:'我的申辦',h:'申請已受理',sub:'目前狀態：已收件 → 審核中 → 核准撥款<br>每個階段變更都會通知你。',
      push:['桃園市民卡','您有一則新的服務提醒：您的申請已進入審核階段，預計 7 個工作天內完成。']}}}
 ]
},
{
 id:'trash', label:'垃圾車位置', sub:'環保局',
 task:'看垃圾車到哪裡了',
 src:'受訪者二：垃圾車即時位置功能點進去後，是叫使用者「另外下載」垃圾車 App，相當不方便。',
 hdNow:'叫你下載另一支 App', hdNew:'原生功能／API',
 now:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'進入「市民生活」，點選垃圾車即時位置。',s:{f:'list',d:SRV_LIFE('trash')},m:[0,0,0]},
  {t:'跳出去之後，畫面是要你再下載一支 App。',badge:['bad','已離開 App','tr'],m:[1,0,0],
   s:{f:'store',d:{name:'桃園垃圾車即時通',by:'桃園市政府環境保護局',note:'※ 市民卡 App 內只有連結，實際功能要另外安裝一支 App。'}}},
  {t:'手機裡多一支只用來看垃圾車的 App，多數人裝了就忘。',m:[1,0,0],
   s:{f:'done',d:{ok:0,title:'市民生活',nav:'市民生活',h:'又多一支 App',
      sub:'市民要記得哪個功能在哪一支 App 裡，這正是單一入口要解決的問題。',
      quote:['受訪者二','「App 應該定位為一站式服務平台，而非只是導向外部系統的入口。」']}}}
 ],
 pro:[
  {t:'開啟市民卡 App。',s:{f:'home'},m:[0,0,0]},
  {t:'進入「市民生活」，點選垃圾車即時位置。',s:{f:'list',d:SRV_LIFE('trash')},m:[0,0,0]},
  {t:'環保局提供 API，地圖直接在 App 內顯示，不必再裝一支 App。',badge:['good','原生功能','tr'],m:[0,0,0],
   s:{f:'panel',d:{mode:'native',title:'垃圾車即時位置',btn:'開啟到點提醒',rows:[
      {t:'map',v:'約 5 分鐘後到達'},
      {t:'field',l:'您的收運點',v:'義民路二段 158 號前',auto:1},
      {t:'field',l:'今日收運時間',v:'19:10 － 19:25'},
      {t:'note',v:'到點提醒屬「社區活動」推播分類，可隨時關閉。'}]}}},
  {t:'到點前五分鐘主動提醒，不必站在路邊等。',m:[0,0,0],
   s:{f:'done',d:{ok:1,title:'市民生活',nav:'市民生活',h:'已開啟到點提醒',sub:'收運車接近你的收運點時會主動通知。',
      push:['桃園市民卡','您有一則新的服務提醒：垃圾車預計 5 分鐘後抵達義民路二段收運點。']}}}
 ]
}
];

/* ---------- 渲染 ---------- */
function build(step){
  var s=step.s, html=T[s.f](s.d||{});
  var badge = step.badge ? '<span class="mark mark-'+step.badge[0]+' '+(step.badge[2]||'tr')+'">'+step.badge[1]+'</span>' : '';
  return '<div class="notch"></div>'+badge+'<div style="position:absolute;inset:0">'+html+'</div>';
}

var si=0, i=0;
var $=function(id){return document.getElementById(id);};
var picker=$('picker');

SCN.forEach(function(sc,k){
  var b=document.createElement('button');
  b.type='button'; b.className='pk'; b.setAttribute('aria-pressed', k===0?'true':'false');
  b.innerHTML=sc.label+'<small>'+sc.sub+'</small>';
  b.addEventListener('click',function(){ si=k; i=0; syncPicker(); render(); });
  picker.appendChild(b);
});
function syncPicker(){
  var bs=picker.children;
  for(var k=0;k<bs.length;k++) bs[k].setAttribute('aria-pressed', k===si?'true':'false');
}

function render(){
  var sc=SCN[si];
  var MAX=Math.max(sc.now.length, sc.pro.length);
  if(i>MAX-1) i=MAX-1;
  var a=Math.min(i, sc.now.length-1), b=Math.min(i, sc.pro.length-1);

  $('taskTitle').textContent='情境：'+sc.task;
  $('taskSrc').textContent=sc.src;
  $('hdNow').textContent=sc.hdNow;
  $('hdNew').textContent=sc.hdNew;
  $('subNow').textContent=sc.now[a].t;
  $('subNew').textContent=sc.pro[b].t;
  $('scrNow').innerHTML=build(sc.now[a]);
  $('scrNew').innerHTML=build(sc.pro[b]);

  var mn=sc.now[a].m, mp=sc.pro[b].m;
  $('tn1').textContent=mn[0]; $('tn2').textContent=mn[1]; $('tn3').textContent=mn[2];
  $('tp1').textContent=mp[0]; $('tp2').textContent=mp[1]; $('tp3').textContent=mp[2];

  var d=$('dots'); d.innerHTML='';
  for(var k=0;k<MAX;k++){ var x=document.createElement('i'); if(k<=i) x.className='on'; d.appendChild(x); }
  $('stepNo').textContent=i+1; $('stepAll').textContent=MAX;
  $('btnPrev').disabled = i===0;
  $('btnNext').disabled = i===MAX-1;
}

$('btnNext').addEventListener('click',function(){ var M=Math.max(SCN[si].now.length,SCN[si].pro.length); if(i<M-1){i++;render();} });
$('btnPrev').addEventListener('click',function(){ if(i>0){i--;render();} });
$('btnReset').addEventListener('click',function(){ i=0; render(); });
document.addEventListener('keydown',function(e){
  var M=Math.max(SCN[si].now.length,SCN[si].pro.length);
  if(e.key==='ArrowRight'&&i<M-1){i++;render();}
  if(e.key==='ArrowLeft'&&i>0){i--;render();}
});

/* 手機版切換 */
function seg(which){
  var isNow=which==='now';
  $('segNow').setAttribute('aria-pressed',String(isNow));
  $('segNew').setAttribute('aria-pressed',String(!isNow));
  $('laneNow').classList.toggle('show',isNow);
  $('laneNew').classList.toggle('show',!isNow);
}
$('segNow').addEventListener('click',function(){seg('now');});
$('segNew').addEventListener('click',function(){seg('new');});

/* 先初始化互動情境：避免後面的靜態示範區任何單一錯誤影響「下一步」 */
render();

/* 靜態示範畫面 */
$('consentDemo').innerHTML=T.consent({service:'場地租借',system:'公共場地租借系統',dept:'民政局',
  scopes:[['姓名、身分證字號','驗證申請人身分，必要',0],['手機號碼、電子信箱','接收審核結果，必要',0],['通訊地址','寄送紙本核准函，可關閉',1]]});
$('authDemo').innerHTML=T.auth();

$('push1').innerHTML=T.notif({items:[
  ['公托名額釋出','您所在的桃園區有 2 處公設民營托嬰中心於 10/25 開放抽籤登記，幼兒滿 2 歲前可先加入候補。','查看登記方式','上午 9:12'],
  ['兒童發育篩檢','幼兒已滿 6 個月，可預約鄰近合約院所進行發育篩檢與早療評估，費用由市府補助。','預約院所','上午 9:12'],
  ['育兒津貼','您符合育兒津貼請領資格，可於 App 內線上申辦，免備戶籍謄本。','立即申辦','昨天']
],foot:'本頁依您持有的一生好運卡與設籍資料推播。可於「我的卡證 → 推播分類」隨時退訂。'});

$('push2').innerHTML=T.notif({items:[
  ['長者健康促進課程','義民里關懷據點 10/22 開辦防跌運動班，持敬老愛心卡免費參加，尚餘 6 個名額。','報名','上午 9:12'],
  ['敬老愛心卡點數','本季點數尚有 480 點未使用，可用於搭乘市區公車與特約市場消費，12/31 到期。','查看使用方式','上午 9:12'],
  ['長照資源','您設籍的里別新增 1 處日間照顧中心，提供交通接送服務。','查看','前天']
],foot:'不推播育兒與托育資訊。依受訪者三建議，65 歲以上僅推播長者用得到的福利。'});

$('push3').innerHTML=T.notif({items:[
  ['中壢區社區活動','您居住的里別本週六有免費手機教學課程，可協助家中長輩報名。','查看','上午 9:12'],
  ['成人健檢','年滿 30 歲可預約成人預防保健服務，市府補助全額費用。','預約','上午 9:12']
],foot:'未持福利卡者僅收到一般性市政與社區資訊，不會收到與自己無關的福利通知。'});

/* 深淺色 */
var tb=$('themeBtn');
function label(){
  var cur=document.documentElement.getAttribute('data-theme');
  var dark = cur ? cur==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  tb.textContent = dark ? '淺色' : '深色';
  return dark;
}
label();
tb.addEventListener('click',function(){
  var dark=label();
  document.documentElement.setAttribute('data-theme', dark?'light':'dark');
  label();
});

})();
