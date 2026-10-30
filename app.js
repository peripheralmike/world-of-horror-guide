(() => {
  'use strict';
  const D = window.WOH_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const allEndings = D.mysteries.flatMap(m => m.endings);
  const known = new Set([...allEndings, ...D.achievements, ...D.fates].map(x => x.id));
  const KEY = 'shiokawa-field-guide-v1';
  const state = {view:'mysteries', mystery:'arms', ending:null, q:'', timeline:'Any', spoiler:'full', category:'All', incomplete:false, done:new Set(), focus:null};
  let storageAvailable = true, toastTimer, graphFrame;
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (Array.isArray(saved.completed)) state.done = new Set(saved.completed.filter(id => known.has(id)));
    if (['full','hints','hidden'].includes(saved.spoiler)) state.spoiler = saved.spoiler;
  } catch { storageAvailable = false; }
  const content = $('#content');
  function toast(message) {
    $('#toast').textContent = message; $('#toast').classList.add('visible');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 4500);
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify({schemaVersion:1, completed:[...state.done], spoiler:state.spoiler})); }
    catch { storageAvailable = false; toast('Progress cannot be saved in this browser.'); }
  }
  function stats() {
    const count = list => list.filter(x => state.done.has(x.id)).length;
    const summaries = [
      `<strong>${D.mysteries.length}</strong> mysteries`,
      `<strong>${count(allEndings)} / ${allEndings.length}</strong> mystery endings`,
      `<strong>${count(D.achievements)} / ${D.achievements.length}</strong> achievements`,
      `<strong>${count(D.fates)} / ${D.fates.length}</strong> run endings`
    ];
    $('#stats').innerHTML = summaries.map(text => `<div class="stat">${text}</div>`).join('');
  }

  function complete(id, short = false) {
    const done = state.done.has(id);
    return `<button class="complete-button" data-complete="${esc(id)}" aria-pressed="${done}">${done ? '✓ '+(short?'Complete':'Completed') : '＋ '+(short?'Mark complete':'Mark complete')}</button>`;
  }
  function sourceName(u) {
      const url = new URL(u);
      if (url.hostname.includes('wiki.gg')) return 'Official wiki';
      if (url.hostname.includes('fandom')) return 'World of Horror Wiki';
      if (url.hostname.includes('gamelifeme')) return 'GameLifeMe walkthrough';
      if (url.hostname.includes('steamcommunity')) return url.pathname.includes('discussions') ? 'Steam discussion' : 'Steam guide';
      return url.hostname.replace('www.', '');
  }
  function uniqueSources(urls) {
    const seen = new Set();
    return urls.filter(value => {
      const url = new URL(value);
      const key = url.origin + url.pathname + url.search;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  function sources(urls) {
    return `<details class="source-line"><summary>Sources for this entry</summary>${uniqueSources(urls).map(u => `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(sourceName(u))}</a>`).join(' · ')}<br>Reference comparison: ${D.meta.checked}. Not reproduced in-game.</details>`;
  }

  function relatedAchievements(ids) {
    return ids.map(id => D.achievements.find(a => a.id === id)).filter(Boolean).map(a=>`<a class="chip-link" href="#achievements/${esc(a.id)}">${esc(a.name)}</a>`).join('');
  }
  function endpointLabel(e) {return state.spoiler==='full' ? e.title : 'Outcome hidden';}
  function render() {
    stats();
    document.querySelectorAll('[data-view]').forEach(a => {if(a.dataset.view===state.view)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    $('#spoilers').value=state.spoiler;
    $('#timeline-wrap').hidden=state.view!=='mysteries';
    $('#timeline').value=state.timeline;
    $('#search').disabled=state.view==='sources';
    $('#search').placeholder = state.view === 'achievements' ? 'Search achievements…' : state.view==='fates' ? 'Search run endings…' : 'Search mysteries, endings, items…';
    if(state.view==='mysteries') renderMysteries();
    if(state.view==='achievements') renderAchievements();
    if(state.view==='fates') renderFates();
    if(state.view==='sources') renderSources();
    if(state.focus) requestAnimationFrame(() => {
      const el=document.getElementById(state.focus);
      if(el) el.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
      state.focus=null;
    });
  }
  const matches = text => text.toLowerCase().includes(state.q.toLowerCase().trim());
  function renderMysteries() {
    const listScroll = $('.case-list')?.scrollTop || 0;
    const list = D.mysteries.filter(m => matches([
      m.name, m.short, m.location,
      ...(state.spoiler === 'full' ? [m.sideQuest, ...m.endings.flatMap(e => [e.title, e.condition, ...e.steps, e.reward])] : [])
    ].join(' '))).sort((a,b) => a.name.localeCompare(b.name));
    if (!list.length) {
      content.innerHTML = '<div class="empty">No mysteries match this search.<br>Route requirements are searchable when spoilers are set to Show all.</div>';
      return;
    }
    if (!list.some(m => m.id === state.mystery)) state.mystery = list[0].id;
    const m = list.find(x => x.id === state.mystery);
    const visible = m.endings.filter(e => state.timeline === 'Any' || e.timeline === 'Any' || e.timeline === state.timeline);
    if (!visible.some(e => e.id === state.ending)) state.ending = visible[0]?.id;
    const selected = visible.find(e => e.id === state.ending);
    const note = m.status !== 'Reference documented' ? '<span class="tag alert">Source note</span>' : '';

    content.innerHTML = `
      <label class="mobile-picker">Mystery<select id="mobile-mystery">${list.map(x => `<option value="${x.id}" ${x.id===m.id?'selected':''}>${esc(x.short)} (${x.endings.filter(e=>state.done.has(e.id)).length}/${x.endings.length})</option>`).join('')}</select></label>
      <div class="workspace">
        <aside class="case-list" aria-label="Choose a mystery">
          <div class="list-caption"><span>Mystery</span><span>Completed</span></div>
          ${list.map(x => `
            <button class="case-button ${x.id === m.id ? 'active' : ''}" data-mystery="${x.id}" aria-pressed="${x.id === m.id}">
              <span><strong>${esc(x.short)}</strong><small>${esc(x.location)}${x.status !== 'Reference documented' ? ' · Source note' : ''}</small></span>
              <span class="case-meter">${x.endings.filter(e => state.done.has(e.id)).length}/${x.endings.length}</span>
            </button>`).join('')}
        </aside>
        <article class="case-area" aria-label="${esc(m.short)} route diagram">
          <div class="case-head">
            <div><h2>${esc(m.short)}</h2><p class="case-summary">${esc(m.name)}</p></div>
            <button class="icon-button" data-share="mysteries/${m.id}/${state.ending || ''}">Copy link</button>
          </div>
          <div class="case-meta"><span class="tag">${m.endings.length} endings</span><span class="tag">${m.endings.some(e => e.timeline !== 'Any') ? 'Timeline affects outcomes' : 'Same routes in A & B'}</span>${note}</div>
          <div class="route-label"><span>Routes at a glance</span><span>Select an ending for the steps</span></div>
          <div class="graph">
            <svg class="graph-lines" aria-hidden="true"></svg>
            <div class="root-node" id="graph-root"><small>Start</small>Investigate ${esc(m.short)}</div>
            <div class="branches">
              ${visible.map(e => `
                <div class="branch">
                  <div class="condition-node" id="condition-${e.id}">${esc(state.spoiler === 'full' ? e.condition : state.spoiler === 'hints' ? (e.timeline === 'Any' ? 'Available in either timeline' : 'Timeline '+e.timeline) : 'Route details hidden')}</div>
                  <button class="ending-node ${e.id === state.ending ? 'selected' : ''} ${state.done.has(e.id) ? 'done' : ''}" id="node-${e.id}" data-ending="${e.id}" aria-pressed="${e.id === state.ending}">
                    <span class="ending-letter">Ending ${e.letter}${e.timeline === 'Any' ? '' : ' · Timeline '+e.timeline}</span>
                    <span class="ending-title">${esc(endpointLabel(e))}</span>
                    ${state.done.has(e.id) ? '<span class="node-badge complete">✓ Complete</span>' : e.fatal && state.spoiler === 'full' ? '<span class="node-badge">Ends the run</span>' : ''}
                  </button>
                </div>`).join('')}
            </div>
          </div>
          ${selected ? routeDetail(m,selected) : '<div class="empty">No endings available on this timeline.</div>'}
          ${state.spoiler !== 'hidden' ? `<div class="case-notes"><p><strong>Side quest:</strong> ${esc(m.sideQuest)}</p>${m.notes.map(n => `<p>${esc(n)}</p>`).join('')}</div>` : ''}
          ${sources(m.sources)}
        </article>
      </div>`;
    $('.case-list').scrollTop = listScroll;
    cancelAnimationFrame(graphFrame);
    graphFrame = requestAnimationFrame(drawGraph);
  }

  function routeDetail(m,e) {
    let body;
    if (state.spoiler === 'full') {
      body = `<ol class="steps">${e.steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol>`;
      if (e.reward) body += `<div class="detail-block"><strong>Reward</strong>${esc(e.reward)}</div>`;
      if (e.requires.length) body += `<div class="detail-block"><strong>Required item from another mystery</strong>${e.requires.map(r => `<a class="chip-link" href="#mysteries/${r.id.replace(/-[a-z]$/,'')}/${r.id}">${esc(r.label)}</a>`).join('')}</div>`;
      if (e.warnings.length) body += `<div class="detail-block warning"><strong>Important</strong>${e.warnings.map(w => `<p>${esc(w)}</p>`).join('')}</div>`;
      if (e.achievements.length) body += `<div class="detail-block"><strong>Related achievements</strong>${relatedAchievements(e.achievements)}</div>`;
    } else {
      body = `<p class="hidden-note">${state.spoiler === 'hints' ? esc((e.timeline === 'Any' ? 'Either timeline. ' : 'Timeline '+e.timeline+'. ')+m.sideQuest) : 'Route instructions and outcome details are hidden.'}</p><button class="reveal-button" data-reveal>Show full instructions</button>`;
    }
    if (e.status !== 'Reference documented' && !m.notes.length) body += `<div class="detail-block warning"><strong>Source note</strong>${esc(e.status)}.</div>`;
    return `<section class="route-detail" aria-label="Selected ending"><div class="detail-heading"><div><p class="eyebrow">Ending ${e.letter} · ${e.timeline === 'Any' ? 'Either timeline' : 'Timeline '+e.timeline}</p><h3>${esc(endpointLabel(e))}</h3></div>${complete(e.id)}</div><div class="detail-body">${body}</div></section>`;
  }

  function drawGraph() {
    const graph = $('.graph');
    if (!graph) return;
    const svg = $('.graph-lines',graph);
    const box = graph.getBoundingClientRect();
    const root = $('#graph-root').getBoundingClientRect();
    if (!box.width) return;
    svg.setAttribute('viewBox',`0 0 ${box.width} ${box.height}`);
    const x0 = root.left - box.left + 13;
    const y0 = root.bottom - box.top;
    const rows = [...graph.querySelectorAll('.branch')].sort((a,b) => Number(!!$('.selected',a)) - Number(!!$('.selected',b)));
    svg.innerHTML = rows.map(branch => {
      const c = $('.condition-node',branch).getBoundingClientRect();
      const n = $('.ending-node',branch).getBoundingClientRect();
      const left = c.left - box.left, right = c.right - box.left;
      const end = n.left - box.left, y = c.top + c.height/2 - box.top;
      const cls = $('.selected',branch) ? 'selected' : '';
      return `<path class="${cls}" d="M${x0},${y0} V${y} H${left} M${right},${y} H${end}"/><path class="${cls}" d="M${left-4},${y-3} L${left},${y} L${left-4},${y+3} M${end-4},${y-3} L${end},${y} L${end-4},${y+3}"/>`;
    }).join('');
  }

  function renderAchievements() {
    const categories=['All','Exploration','Combat','Survival','Milestones','Backstories','Challenges'];
    const visible=D.achievements.filter(a=>(state.category==='All'||a.category===state.category)&&(!state.incomplete||!state.done.has(a.id))&&matches([a.name,...(state.spoiler==='full'?[a.requirement,a.reward,...a.tips,...(a.notes||[])]:[])].join(' '))).sort((a,b)=>a.grid[0]-b.grid[0]||a.grid[1]-b.grid[1]);
    content.innerHTML=`<p class="section-intro">96 in-game achievements, listed in grid order. Row and column match the game’s achievement screen.</p><div class="filters" role="group" aria-label="Achievement category">${categories.map(c=>`<button class="filter-button" data-category="${c}" aria-pressed="${state.category===c}">${c}</button>`).join('')}</div><div class="results-bar"><span>${visible.length} shown · ${D.achievements.filter(a=>state.done.has(a.id)).length} / 96 completed</span><label><input type="checkbox" id="incomplete" ${state.incomplete?'checked':''}> Incomplete only</label></div><div class="achievement-grid">${visible.map(a=>`<article class="achievement-card ${state.done.has(a.id)?'done':''} ${state.focus===a.id?'focused':''}" id="${a.id}"><div class="card-meta"><span>${esc(a.category)}</span><span>${a.grid?'R'+a.grid[0]+' / C'+a.grid[1]:'PC reference'}</span></div><h3>${esc(a.name)}</h3>${state.spoiler==='full'?`<p>${esc(a.requirement)}</p><div class="reward"><span>Unlocks</span> ${esc(a.reward)}</div>${(a.tips.length||(a.notes||[]).length)?`<details><summary>How to unlock</summary>${a.tips.length?`<p>${esc(a.tips.join(' '))}</p>`:''}${(a.notes||[]).map(note=>`<p><strong>Source note:</strong> ${esc(note)}</p>`).join('')}${a.status!=='Reference documented'&&!(a.notes||[]).length?`<p class="red">${esc(a.status)}</p>`:''}${a.related.map(id=>`<a class="chip-link" href="#mysteries/${id}">${esc(D.mysteries.find(m=>m.id===id)?.short||id)} ↗</a>`).join('')}${uniqueSources(a.sources).map((u,i)=>`<a class="chip-link" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(sourceName(u))}</a>`).join('')}</details>`:''}`:`<p>${state.spoiler==='hints'?'Category: '+esc(a.category)+'. Reveal the full guide for requirements and rewards.':'Requirements and rewards hidden.'}</p>`}<div class="card-actions">${complete(a.id,true)}<a href="${esc(a.sources[0])}" target="_blank" rel="noopener noreferrer" aria-label="Source for ${esc(a.name)}">↗</a></div></article>`).join('')}</div>${!visible.length?'<div class="empty">No achievements match these filters.</div>':''}`;
  }
  function renderFates() {
    const visible=D.fates.filter(f=>(!state.fateCategory||state.fateCategory==='All'||f.kind===state.fateCategory)&&matches(state.spoiler==='full'?[f.title,f.kind,...f.steps].join(' '):f.kind));
    content.innerHTML=`<p class="section-intro">Whole-run outcomes from the endings encyclopedia. These are tracked separately from mystery endings.</p><div class="filters" role="group" aria-label="Run ending category">${['All','Victory','Death','Doom','Special','Secret'].map(c=>`<button class="filter-button" data-fate-category="${c}" aria-pressed="${(state.fateCategory||'All')===c}">${c}</button>`).join('')}</div><div class="fate-grid">${visible.filter(f=>!state.fateCategory||state.fateCategory==='All'||f.kind===state.fateCategory).map(f=>`<article class="fate-card ${state.done.has(f.id)?'done':''} ${state.focus===f.id?'focused':''}" id="${f.id}"><div class="card-meta"><span>${esc(f.kind)}</span><span></span></div><h3>${esc(state.spoiler==='full'?f.title:'Unrevealed '+f.kind.toLowerCase()+' ending')}</h3>${state.spoiler==='full'?f.steps.map(s=>`<p>${esc(s)}</p>`).join(''):'<p>Reveal the full guide to see this ending’s trigger.</p>'}${state.spoiler==='full'?(f.notes||[]).map(note=>`<p><strong>Source note:</strong> ${esc(note)}</p>`).join(''):''}${state.spoiler==='full'?f.related.map(id=>`<a class="chip-link" href="#mysteries/${id.replace(/-[a-z]$/,'')}/${id}">Related mystery route ↗</a>`).join('')+relatedAchievements(f.achievements):''}<div class="card-actions">${complete(f.id,true)}<a href="${esc(f.sources[0])}" target="_blank" rel="noopener noreferrer" aria-label="Source for this run ending">↗</a></div></article>`).join('')}</div>${!visible.length?'<div class="empty">No run endings match your search.</div>':''}`;
  }
  function renderSources() {
    const audit = D.meta.audit;
    content.innerHTML = `
      <article class="source-section">
        <h2>Sources & accuracy</h2>
        <p>This guide covers the documented PC 1.0 / 1.01 content. All ${audit.mysteries} mysteries (${audit.mysteryEndings} endings), ${audit.achievements} achievements, and ${audit.runEndings} run endings were compared with published references on 30 October 2026. No local game installation was available for playtesting.</p>
        <p>The second check corrected practical instructions, filled in missing side quests and rewards, and kept source disagreements visible. <a href="AUDIT.md">Read the full entry-by-entry audit</a>.</p>
        <h3>Main references</h3>
        <ul>
          <li><a href="https://worldofhorror.wiki.gg/wiki/Achievements?oldid=353" target="_blank" rel="noopener noreferrer">World of Horror Wiki: Achievements</a> — the 96 requirements, unlocks, and grid positions.</li>
          <li><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045" target="_blank" rel="noopener noreferrer">Electric Wizard’s achievement guide</a> — complete comparison and practical instructions, updated February 2025.</li>
          <li><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150" target="_blank" rel="noopener noreferrer">Haspen’s mystery guide</a> — ending routes and cross-mystery requirements.</li>
          <li><a href="https://gamelifeme.com/world-of-horror/" target="_blank" rel="noopener noreferrer">GameLifeMe’s Japanese walkthroughs</a> — additional checks for each mystery. The individual page is linked below each case.</li>
          <li><a href="https://woh.fandom.com/wiki/Endings" target="_blank" rel="noopener noreferrer">World of Horror Wiki: Endings</a>, <a href="https://gamelifeme.com/world-of-horror/post-671/" target="_blank" rel="noopener noreferrer">Japanese ending list</a>, and <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451" target="_blank" rel="noopener noreferrer">Russian 1.01 guide</a> — run-ending coverage.</li>
        </ul>
        <h3>Where references still differ</h3>
        <table><thead><tr><th>Entry</th><th>Source difference</th></tr></thead><tbody>${D.meta.issues.map(issue => `<tr><td>${esc(issue.entry)}</td><td>${esc(issue.detail)}</td></tr>`).join('')}</tbody></table>
        <h3>Version boundary</h3>
        <p>The publisher’s October announcement promises a scenario by Halloween; the separate v1.2 announcement describes more content and 22 additional achievements. This guide does not treat those announcements as a verified released inventory. <a href="https://steamcommunity.com/app/913740/allnews/" target="_blank" rel="noopener noreferrer">Developer and publisher announcements</a>.</p>
        ${D.meta.exclusions.filter(x=>x.title!=='v1.2 additions').map(x => `<p><strong>${esc(x.title)}:</strong> ${esc(x.reason)} <a href="${esc(x.source)}" target="_blank" rel="noopener noreferrer">Source</a>.</p>`).join('')}
        <h3>Using your checklist</h3>
        <p>Progress is saved automatically in this browser. Each device, browser profile, and site address has its own checklist. Clearing browser data clears your progress. Mystery endings, run endings, and achievements are separate checklists; marking one does not claim the others.</p>
        <p>Achievement categories are navigation aids made for this site. Row and column coordinates match the game’s achievement grid. Run endings are grouped for browsing; their order here is not the in-game encyclopedia order.</p>
        <h3>Credits & reuse</h3>
        <p>Wiki-derived reference data is adapted from World of Horror Wiki contributors under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. Sources are linked per entry. Wording has been condensed, choices structured, and corrections documented. This is an unofficial fan guide.</p>
        <p><a href="data.json">Dataset</a> · <a href="AUDIT.md">Audit</a> · <a href="RESEARCH.md">Research notes</a> · <a href="README.md">GitHub Pages instructions</a> · <a href="LICENSE.md">Licenses</a></p>
      </article>`;
  }
  function navigate() {
    const parts=location.hash.slice(1).split('/');
    if(!['mysteries','achievements','fates','sources'].includes(parts[0]))return;
    state.view=parts[0];state.q='';$('#search').value='';
    if(state.view==='mysteries'){
      if(D.mysteries.some(m=>m.id===parts[1]))state.mystery=parts[1];
      if(allEndings.some(e=>e.id===parts[2]&&e.id.startsWith(state.mystery+'-'))){
        state.ending=parts[2];const e=allEndings.find(x=>x.id===parts[2]);
        if(e.timeline!=='Any'&&state.timeline!=='Any'&&state.timeline!==e.timeline)state.timeline=e.timeline;
      }else state.ending=null;
    }
    if(state.view==='achievements'&&D.achievements.some(a=>a.id===parts[1])){state.focus=parts[1];state.category='All';state.incomplete=false;}
    if(state.view==='fates'&&D.fates.some(f=>f.id===parts[1])){state.focus=parts[1];state.fateCategory='All';}
    render();
  }
  content.addEventListener('click',async event=>{
    const button=event.target.closest('button');if(!button)return;
    if(button.dataset.complete){const id=button.dataset.complete;if(!known.has(id))return;state.done.has(id)?state.done.delete(id):state.done.add(id);save();render();($(`[data-complete="${id}"]`) || $("#incomplete") || $("#search")).focus({preventScroll:true});}
    if(button.dataset.mystery){state.mystery=button.dataset.mystery;state.ending=null;history.replaceState(null,'','#mysteries/'+state.mystery);renderMysteries();$(`[data-mystery="${state.mystery}"]`)?.focus({preventScroll:true});}
    if(button.dataset.ending){state.ending=button.dataset.ending;history.replaceState(null,'','#mysteries/'+state.mystery+'/'+state.ending);renderMysteries();$(`[data-ending="${state.ending}"]`)?.focus({preventScroll:true});}
    if(button.hasAttribute('data-reveal')){state.spoiler='full';save();render();}
    if(button.dataset.category){state.category=button.dataset.category;renderAchievements();$(`[data-category="${state.category}"]`)?.focus({preventScroll:true});}
    if(button.dataset.fateCategory){state.fateCategory=button.dataset.fateCategory;renderFates();$(`[data-fate-category="${state.fateCategory}"]`)?.focus({preventScroll:true});}
    if(button.dataset.share){const url=new URL(location.href);url.hash=button.dataset.share;try{await navigator.clipboard.writeText(url.href);toast('Case link copied.');}catch{history.replaceState(null,'',url.href);toast('Case link is in your address bar. Copy it to share.');}}
  });
  content.addEventListener('change',event=>{
    if(event.target.id==='incomplete'){state.incomplete=event.target.checked;renderAchievements();$('#incomplete')?.focus();}
    if(event.target.id==='mobile-mystery'){state.mystery=event.target.value;state.ending=null;history.replaceState(null,'','#mysteries/'+state.mystery);renderMysteries();$('#mobile-mystery')?.focus();}
  });
  $('#search').addEventListener('input',event=>{state.q=event.target.value;render();});
  $('#spoilers').addEventListener('change',event=>{state.spoiler=event.target.value;save();render();});
  $('#timeline').addEventListener('change',event=>{state.timeline=event.target.value;render();});
  window.addEventListener('hashchange',navigate);
  window.addEventListener('resize',()=>{cancelAnimationFrame(graphFrame);graphFrame=requestAnimationFrame(drawGraph);});
  document.addEventListener('keydown',event=>{
    if(event.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&!event.ctrlKey&&!event.metaKey){event.preventDefault();if(!$('#search').disabled)$('#search').focus();}
    if(event.key==='Escape'&&document.activeElement===$('#search')){state.q='';$('#search').value='';render();$('#search').blur();}
  });
  if(['mysteries','achievements','fates','sources'].includes(location.hash.slice(1).split('/')[0]))navigate();else render();
  if(!storageAvailable)toast('Progress cannot be saved in this browser.');
})();
