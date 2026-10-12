/* Generado por seo/build_de.py desde src.html. No editar a mano. */
(function(){
/* ============ BOTTLE ============ */
  var CAP = {bordeaux:['#24060d','#5A1020','#9a3448','#c9899a'], black:['#030304','#17161a','#3a383f','#7a777f'], gold:['#4e3a12','#B9A477','#eadcb2','#fff7dc'], green:['#081310','#18352F','#3e6a5b','#8fb3a5'], cream:['#6e5e42','#d9cba6','#f4ecd4','#fffaf0']};
  var GLASS = {
    dark:[[0,'#020304'],[.06,'#0a1310'],[.16,'#0c1611'],[.3,'#111b15'],[.42,'#1f2d23'],[.5,'#18251c'],[.62,'#0d1610'],[.8,'#080d0a'],[.93,'#0b140f'],[1,'#020302']],
    amber:[[0,'#120801'],[.08,'#3a1f06'],[.2,'#5a300b'],[.36,'#8a4f16'],[.48,'#ad6a22'],[.6,'#7d4512'],[.78,'#3d2007'],[.92,'#2a1605'],[1,'#0e0601']],
    rose:[[0,'#1c0b10'],[.1,'#6b2b3e'],[.26,'#a34b62'],[.42,'#d2768d'],[.52,'#c26680'],[.66,'#8f3d56'],[.84,'#4a1d2c'],[1,'#1a0910']]
  };
  function stops(arr){ return arr.map(function(s){ return '<stop offset="'+s[0]+'" stop-color="'+s[1]+'"/>'; }).join(''); }
  function bottle(o){
    var id = o.id, shape = o.shape || 'bordeaux', cap = CAP[o.capsule || 'bordeaux'], glass = GLASS[o.glass || 'dark'];
    var body, L, shoulder;
    if (shape === 'burgundy'){ body = "M83 0 H117 V22 H115 V150 C115 202 164 214 164 292 V574 A18 18 0 0 1 146 592 H54 A18 18 0 0 1 36 574 V292 C36 214 85 202 85 150 V22 H83 Z"; L = {x:50,y:330,w:100,h:160}; shoulder = [150,300]; }
    else if (shape === 'champagne'){ body = "M80 0 H120 V26 H118 V140 C118 204 166 214 166 300 V572 A20 20 0 0 1 146 592 H54 A20 20 0 0 1 34 572 V300 C34 214 82 204 82 140 V26 H80 Z"; L = {x:52,y:326,w:96,h:150}; shoulder = [140,310]; }
    else { body = "M82 0 H118 V22 H116 V168 C116 198 160 202 160 238 V574 A16 16 0 0 1 144 590 H56 A16 16 0 0 1 40 574 V238 C40 202 84 198 84 168 V22 H82 Z"; L = {x:54,y:300,w:92,h:168}; shoulder = [168,246]; }
    var lab = o.label || {}, lines = lab.name || [], cx = L.x + L.w/2;
    var vb = o.reflect ? '-40 -10 280 850' : '-40 -10 280 640';
    var s = '<svg class="bottle" viewBox="'+vb+'" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
    s += '<defs>';
    s += '<clipPath id="'+id+'-c"><path d="'+body+'"/></clipPath>';
    s += '<linearGradient id="'+id+'-g" x1="0" x2="1" y1="0" y2="0">'+stops(glass)+'</linearGradient>';
    s += '<linearGradient id="'+id+'-cap" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="'+cap[0]+'"/><stop offset=".2" stop-color="'+cap[1]+'"/><stop offset=".34" stop-color="'+cap[2]+'"/><stop offset=".4" stop-color="'+cap[3]+'"/><stop offset=".47" stop-color="'+cap[2]+'"/><stop offset=".62" stop-color="'+cap[1]+'"/><stop offset=".86" stop-color="'+cap[0]+'"/><stop offset="1" stop-color="'+cap[0]+'"/></linearGradient>';
    s += '<pattern id="'+id+'-foil" patternUnits="userSpaceOnUse" width="5" height="120"><rect width="1.2" height="120" fill="#fff" opacity=".07"/><rect x="2.6" width=".8" height="120" fill="#000" opacity=".12"/></pattern>';
    s += '<linearGradient id="'+id+'-v" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".05"/><stop offset=".2" stop-color="#000" stop-opacity="0"/><stop offset=".33" stop-color="#000" stop-opacity=".18"/><stop offset=".42" stop-color="#000" stop-opacity="0"/><stop offset=".86" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".6"/></linearGradient>';
    s += '<radialGradient id="'+id+'-sr" cx=".4" cy=".35" r=".62"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".38"/></radialGradient>';
    s += '<linearGradient id="'+id+'-hl" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".18" stop-color="#fff" stop-opacity=".9"/><stop offset=".8" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>';
    s += '<linearGradient id="'+id+'-sh" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset=".12" stop-color="#000" stop-opacity=".1"/><stop offset=".3" stop-color="#fff" stop-opacity=".06"/><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset=".86" stop-color="#000" stop-opacity=".08"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient>';
    s += '<linearGradient id="'+id+'-sw" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>';
    s += '<filter id="'+id+'-b" x="-60%" y="-10%" width="220%" height="120%"><feGaussianBlur stdDeviation="2.2"/></filter>';
    s += '<filter id="'+id+'-b0" x="-100%" y="-10%" width="300%" height="120%"><feGaussianBlur stdDeviation=".7"/></filter>';
    s += '<filter id="'+id+'-b2" x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="9"/></filter>';
    s += '<filter id="'+id+'-grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .09"/></feComponentTransfer></filter>';
    s += '<clipPath id="'+id+'-lc"><path d="M'+L.x+' '+(L.y+4)+' Q'+cx+' '+(L.y-4)+' '+(L.x+L.w)+' '+(L.y+2.4)+' V'+(L.y+L.h-4)+' Q'+cx+' '+(L.y+L.h+4)+' '+L.x+' '+(L.y+L.h-4)+' Z"/></clipPath>';
    if (o.reflect){ s += '<linearGradient id="'+id+'-rmg" x1="0" x2="0" y1="0" y2="1"><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".5"/></linearGradient><mask id="'+id+'-rm"><rect x="0" y="0" width="200" height="600" fill="url(#'+id+'-rmg)"/></mask>'; }
    s += '</defs>';
    /* shadows on the floor */
    s += '<ellipse cx="100" cy="600" rx="112" ry="13" fill="#000" opacity=".5" filter="url(#'+id+'-b2)"/>';
    s += '<ellipse cx="100" cy="596" rx="66" ry="6" fill="#000" opacity=".85" filter="url(#'+id+'-b)"/>';
    s += '<g clip-path="url(#'+id+'-c)">';
    s += '<rect x="0" y="0" width="200" height="600" fill="url(#'+id+'-g)"/>';
    s += '<rect x="20" y="'+(shoulder[0]-30)+'" width="160" height="'+(shoulder[1]-shoulder[0]+80)+'" fill="url(#'+id+'-sr)"/>';
    /* label */
    s += '<g clip-path="url(#'+id+'-lc)"><rect x="'+L.x+'" y="'+L.y+'" width="'+L.w+'" height="'+L.h+'" fill="#F3ECDD"/>';
    s += '<rect x="'+L.x+'" y="'+L.y+'" width="'+L.w+'" height="'+L.h+'" filter="url(#'+id+'-grain)"/>';
    s += '<g class="lc" id="'+id+'-lc-g">';
    s += '<rect x="'+(L.x+5)+'" y="'+(L.y+5)+'" width="'+(L.w-10)+'" height="'+(L.h-10)+'" fill="none" stroke="#8A7650" stroke-width=".7"/>';
    s += '<rect x="'+(L.x+8)+'" y="'+(L.y+8)+'" width="'+(L.w-16)+'" height="'+(L.h-16)+'" fill="none" stroke="#8A7650" stroke-width=".35"/>';
    var ty = L.y + 22;
    s += '<text x="'+cx+'" y="'+ty+'" text-anchor="middle" font-family="Jost,sans-serif" font-weight="300" font-size="5.2" letter-spacing="1.1" fill="#8A7650">'+(lab.house || 'GRAND VIN')+'</text>';
    if (lab.crest){ s += '<use href="#crest-lbl" x="'+(cx-27)+'" y="'+(ty+8)+'" width="54" height="62"/>'; ty += 76; }
    else { s += '<g transform="translate('+cx+','+(ty+22)+')" fill="#8A7650" stroke="#8A7650" stroke-width=".6"><path d="M-14 0 H-4 M4 0 H14" fill="none"/><path d="M0 -3.2 L3.2 0 L0 3.2 L-3.2 0 Z"/><path d="M-22 0 H-18 M18 0 H22" fill="none" stroke-width=".4"/></g>'; ty += 40; }
    var nsize = lab.big ? 10.5 : 8.6;
    for (var i = 0; i < lines.length; i++){ s += '<text x="'+cx+'" y="'+(ty+i*(nsize+2.4))+'" text-anchor="middle" font-family="Cormorant Garamond,serif" font-weight="500" font-size="'+nsize+'" letter-spacing="'+(lab.big?1.2:0.9)+'" fill="#5A1020">'+lines[i]+'</text>'; }
    ty += lines.length*(nsize+2.4) + 2;
    if (lab.place) s += '<text x="'+cx+'" y="'+ty+'" text-anchor="middle" font-family="Cormorant Garamond,serif" font-style="italic" font-weight="300" font-size="7" fill="#1C1519">'+lab.place+'</text>';
    if (lab.vintage) s += '<text x="'+cx+'" y="'+(L.y+L.h-14)+'" text-anchor="middle" font-family="Cormorant Garamond,serif" font-weight="300" font-size="'+(lab.crest?16:15)+'" fill="#1C1519">'+lab.vintage+'</text>';
    s += '</g>';
    s += '<rect x="'+L.x+'" y="'+L.y+'" width="'+L.w+'" height="'+L.h+'" fill="url(#'+id+'-sh)"/>';
    s += '<rect x="'+L.x+'" y="'+L.y+'" width="'+L.w+'" height="2" fill="#000" opacity=".12"/><rect x="'+L.x+'" y="'+(L.y+L.h-2)+'" width="'+L.w+'" height="2" fill="#000" opacity=".18"/></g>';
    /* capsule (still wines: inside the glass clip) */
    if (shape !== 'champagne'){
      s += '<path d="M78 -2 H122 V112 C122 118 78 118 78 112 Z" fill="url(#'+id+'-cap)"/>';
      s += '<path d="M78 -2 H122 V112 C122 118 78 118 78 112 Z" fill="url(#'+id+'-foil)"/>';
      s += '<path d="M78 112 C78 118 122 118 122 112" fill="none" stroke="#000" stroke-opacity=".45" stroke-width="1.2"/>';
      s += '<path d="M78 94 H122 M78 99 H122 M78 104 H122" stroke="#000" stroke-opacity=".28" stroke-width=".8"/>';
      s += '<path d="M78 95 H122 M78 100 H122" stroke="#fff" stroke-opacity=".12" stroke-width=".5"/>';
      s += '<ellipse cx="100" cy="0" rx="22" ry="4.2" fill="'+cap[2]+'"/><ellipse cx="100" cy="0" rx="15" ry="2.6" fill="none" stroke="'+cap[0]+'" stroke-opacity=".6" stroke-width=".7"/>';
      s += '<circle cx="100" cy="52" r="9" fill="none" stroke="'+cap[3]+'" stroke-opacity=".35" stroke-width=".7"/>';
    }
    /* glass shading, highlights, rim light, punt */
    s += '<rect x="0" y="0" width="200" height="600" fill="url(#'+id+'-v)"/>';
    s += '<g class="hl" id="'+id+'-hl"><path d="M50 '+(shoulder[1]+10)+' Q46 400 51 582 L56.5 582 Q54 400 54.5 '+(shoulder[1]+10)+' Z" fill="url(#'+id+'-hl)" filter="url(#'+id+'-b0)"/><path d="M58 '+(shoulder[1]+20)+' Q54 400 60 575 L80 575 Q72 400 76 '+(shoulder[1]+20)+' Z" fill="url(#'+id+'-hl)" opacity=".12" filter="url(#'+id+'-b)"/><path d="M86 14 Q84 90 87 '+(shoulder[0]-6)+' L89.6 '+(shoulder[0]-6)+' Q87.5 90 88.6 14 Z" fill="url(#'+id+'-hl)" opacity=".85" filter="url(#'+id+'-b0)"/><path d="M87 '+(shoulder[0])+' C86 '+(shoulder[0]+34)+' 60 '+(shoulder[0]+44)+' 50 '+(shoulder[1]+6)+'" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round" filter="url(#'+id+'-b0)"/><path d="M90 16 Q88 90 92 '+(shoulder[0]-10)+' L98 '+(shoulder[0]-10)+' Q96 90 97 16 Z" fill="url(#'+id+'-hl)" opacity=".1" filter="url(#'+id+'-b)"/></g>';
    s += '<g class="hl2" id="'+id+'-hl2"><path d="M155 '+(shoulder[1]+16)+' Q158 400 154 578 L156.6 578 Q160 400 157.4 '+(shoulder[1]+16)+' Z" fill="#fff" opacity=".34" filter="url(#'+id+'-b0)"/><path d="M146 '+(shoulder[1]+30)+' Q150 400 146 570 L154 570 Q158 400 154 '+(shoulder[1]+30)+' Z" fill="#fff" opacity=".07" filter="url(#'+id+'-b)"/><path d="M112 20 Q111 90 113 '+(shoulder[0]-8)+' L114.6 '+(shoulder[0]-8)+' Q113.2 90 113.8 20 Z" fill="#fff" opacity=".3" filter="url(#'+id+'-b0)"/><path d="M113 '+(shoulder[0])+' C114 '+(shoulder[0]+34)+' 140 '+(shoulder[0]+44)+' 150 '+(shoulder[1]+6)+'" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="1.2" stroke-linecap="round" filter="url(#'+id+'-b0)"/></g>';
    s += '<ellipse cx="100" cy="1" rx="20" ry="3" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width=".8"/>';
    s += '<ellipse cx="100" cy="586" rx="46" ry="5.5" fill="#000" opacity=".55" filter="url(#'+id+'-b)"/><path d="M62 582 C80 590 120 590 138 582" fill="none" stroke="#fff" stroke-opacity=".1" stroke-width="1"/>';
    s += '<rect class="sheen" x="-80" y="-10" width="60" height="620" fill="url(#'+id+'-sw)" transform="skewX(-16)"/>';
    s += '</g>';
    if (shape === 'champagne'){
      var mush = "M74 -2 H126 V16 C126 30 136 36 136 54 C136 70 128 76 125 86 V114 C125 120 75 120 75 114 V86 C72 76 64 70 64 54 C64 36 74 30 74 16 Z";
      s += '<path d="'+mush+'" fill="url(#'+id+'-cap)"/><path d="'+mush+'" fill="url(#'+id+'-foil)"/>';
      s += '<path d="M75 114 C75 120 125 120 125 114" fill="none" stroke="#000" stroke-opacity=".45" stroke-width="1.2"/>';
      s += '<g fill="none" stroke="'+cap[0]+'" stroke-opacity=".75" stroke-width="1.7"><ellipse cx="100" cy="34" rx="30" ry="6"/><path d="M70 34 C74 56 70 70 66 84 M130 34 C126 56 130 70 134 84 M100 40 V96 M84 38 C80 58 78 74 80 96 M116 38 C120 58 122 74 120 96"/><path d="M66 84 C82 96 118 96 134 84"/></g>';
      s += '<ellipse cx="100" cy="34" rx="12" ry="3.4" fill="'+cap[2]+'" opacity=".9"/><ellipse cx="100" cy="0" rx="26" ry="4.5" fill="'+cap[2]+'"/>';
      s += '<path d="M78 8 Q76 50 78 100" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.6" stroke-linecap="round" filter="url(#'+id+'-b0)"/>';
    }
    if (o.reflect){
      s += '<g transform="translate(0,1200) scale(1,-1)" mask="url(#'+id+'-rm)" opacity=".5"><g clip-path="url(#'+id+'-c)"><rect x="0" y="0" width="200" height="600" fill="url(#'+id+'-g)"/><path d="M50 150 Q47 360 52 585 L57 585 Q55 360 54 150 Z" fill="url(#'+id+'-hl)" opacity=".6"/></g></g>';
    }
    s += '</svg>';
    return s;
  }

  /* ============ HERO ============ */
  var stage = document.getElementById('stage');
  stage.innerHTML = bottle({id:'hero', shape:'bordeaux', glass:'dark', capsule:'bordeaux', reflect:true, label:{house:'MAISON PRIVÉE', crest:true, name:['CROIAN &amp; HEIN'], place:'by Bárbara Amado', vintage:'MMXXVI'}});
  var heroSvg = stage.querySelector('svg'), lc = document.getElementById('hero-lc-g'), hl = document.getElementById('hero-hl'), hl2 = document.getElementById('hero-hl2'), sheen = heroSvg.querySelector('.sheen');
  var light = document.querySelector('.zhero .light'), copy = document.querySelector('.zhero .copy'), scrollCue = document.querySelector('.zhero .scroll'), heroEl = document.querySelector('.zhero');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var soft = 'cubic-bezier(.22,.72,.18,1)';
  if (!reduce){
    lc.style.transformOrigin = '100px 384px';
    light.animate([{opacity:0},{opacity:1}], {duration:2600, fill:'forwards', easing:'ease-out'});
    heroSvg.animate([{opacity:0, transform:'translateY(22px) scale(.985)'},{opacity:1, transform:'translateY(0) scale(1)'}], {duration:2000, delay:200, fill:'forwards', easing:soft});
    /* the bottle turns toward the light: the label comes round, the reflections travel across the glass */
    lc.animate([{transform:'translateX(74px) scaleX(.42)', opacity:.35},{transform:'translateX(0) scaleX(1)', opacity:1}], {duration:3600, delay:500, fill:'forwards', easing:soft});
    hl.animate([{transform:'translateX(70px)', opacity:.25},{transform:'translateX(0)', opacity:1}], {duration:3600, delay:500, fill:'forwards', easing:soft});
    hl2.animate([{transform:'translateX(-60px)', opacity:0},{transform:'translateX(0)', opacity:1}], {duration:3600, delay:500, fill:'forwards', easing:soft});
    copy.animate([{opacity:0, transform:'translateY(16px)'},{opacity:1, transform:'translateY(0)'}], {duration:1600, delay:2300, fill:'forwards', easing:soft});
    scrollCue.animate([{opacity:0},{opacity:1}], {duration:1200, delay:3800, fill:'forwards'});
    /* a slow sweep of light crosses the glass every few seconds */
    sheen.animate([{transform:'skewX(-16deg) translateX(0px)', offset:0},{transform:'skewX(-16deg) translateX(340px)', offset:.16, easing:'cubic-bezier(.4,.1,.3,1)'},{transform:'skewX(-16deg) translateX(340px)', offset:1}], {duration:14000, delay:4600, iterations:Infinity});
    light.animate([{opacity:1},{opacity:.84},{opacity:1}], {duration:9000, delay:4200, iterations:Infinity, easing:'ease-in-out'});
    /* parallax: the bottle and its light answer the pointer, gently */
    if (window.matchMedia('(pointer:fine)').matches){
      stage.style.transition = 'transform 1.1s cubic-bezier(.2,.6,.2,1)'; light.style.transition = 'background-position 1.1s cubic-bezier(.2,.6,.2,1)';
      var raf = null;
      heroEl.addEventListener('pointermove', function(e){
        if (raf) return;
        raf = requestAnimationFrame(function(){ raf = null;
          var r = heroEl.getBoundingClientRect(), nx = (e.clientX - r.left)/r.width - .5, ny = (e.clientY - r.top)/r.height - .5;
          stage.style.transform = 'translate3d('+(nx*14)+'px,'+(ny*8)+'px,0) rotate('+(nx*1.6)+'deg)';
          light.style.backgroundPosition = (nx*40)+'px '+(ny*30)+'px, '+(-nx*20)+'px 0';
        });
      });
      heroEl.addEventListener('pointerleave', function(){ stage.style.transform = ''; light.style.backgroundPosition = ''; });
    }
  } else { copy.style.opacity = 1; copy.style.transform = 'none'; light.style.opacity = 1; heroSvg.style.opacity = 1; scrollCue.style.opacity = 1; }

  
  var tk = document.getElementById('ticker'); if (tk) tk.innerHTML += tk.innerHTML;
})();
