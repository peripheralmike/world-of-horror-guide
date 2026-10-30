import assert from 'node:assert/strict';
import {readFile, stat} from 'node:fs/promises';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const read = name => readFile(new URL(name, root), 'utf8');
const data = JSON.parse(await read('data.json'));
const context = {window:{}};
vm.runInNewContext(await read('data.js'), context);
assert.equal(JSON.stringify(context.window.WOH_DATA), JSON.stringify(data), 'data.js must be synced with data.json');
const mysteries = new Map(data.mysteries.map(x=>[x.id,x]));
const endings = new Map(data.mysteries.flatMap(x=>x.endings).map(x=>[x.id,x]));
const achievements = new Map(data.achievements.map(x=>[x.id,x]));
const records = [...data.mysteries, ...endings.values(), ...data.achievements, ...data.fates];
assert.equal(new Set(records.map(x=>x.id)).size, records.length, 'IDs must be unique across record types');
assert.equal(data.mysteries.length,21);
assert.equal(endings.size,57);
assert.equal(achievements.size,96);
assert.equal(data.fates.length,21);
const grid = new Set();
for(const a of data.achievements){
  assert.ok(a.name && a.requirement && a.reward, `Incomplete achievement: ${a.id}`);
  assert.ok(a.grid && a.grid[0]>=1 && a.grid[0]<=11 && a.grid[1]>=1 && a.grid[1]<=9, `Invalid grid position: ${a.id}`);
  grid.add(a.grid.join(','));
  for(const id of a.related) assert.ok(mysteries.has(id), `Unknown related mystery: ${id}`);
}
assert.equal(grid.size,96,'Achievement grid cells must be unique');
for(const m of data.mysteries){
  assert.ok(m.endings.length && m.sources.length && m.status);
  for(const e of m.endings){
    assert.ok(e.steps.length && e.title && e.condition && e.status, `Incomplete route: ${e.id}`);
    assert.ok(['A','B','Any'].includes(e.timeline));
    for(const ref of e.requires)assert.ok(endings.has(ref.id), `Unknown dependency: ${ref.id}`);
    for(const id of e.achievements)assert.ok(achievements.has(id), `Unknown achievement: ${id}`);
  }
}
for(const f of data.fates){
  assert.ok(f.steps.length && f.title && f.sources.length);
  for(const id of f.related)assert.ok(endings.has(id));
  for(const id of f.achievements)assert.ok(achievements.has(id));
}
for(const record of [...data.mysteries,...data.achievements,...data.fates]){
  assert.equal(record.audit?.date,'2026-10-30',`Missing audit record: ${record.id}`);
  assert.equal(record.audit.inGameTested,false,'Published-reference comparisons must not claim gameplay verification');
}
assert.match(mysteries.get('teacher').sideQuest,/Downtown twice/,'Teacher side quest regression');
assert.equal(endings.get('painting-a').reward,'Eimi joins as an ally');
assert.match(achievements.get('welcome-to-the-family').tips[0],/Horror counter reach 100%/);
assert.match(achievements.get('real-nightmare').tips[0],/Repeated encounters count/);
assert.match(achievements.get('catch-me-if-you-can').tips[0],/Police Station drawer/);
for(const record of records)for(const source of record.sources || [])assert.equal(new URL(source).protocol,'https:');
new vm.Script(await read('app.js'));
const html = await read('index.html');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  const path = match[1];
  if(!/^(https?:|data:)/.test(path))assert.ok((await stat(new URL(path,root))).isFile(),`Missing local file ${path}`);
}
for(const path of ['README.md','RESEARCH.md','AUDIT.md','LICENSE.md','.nojekyll'])assert.ok((await stat(new URL(path,root))).isFile());
console.log('PASS: 21 mysteries / 57 mystery endings / 96 achievements / 21 run endings');
console.log('PASS: unique IDs, complete records, 96 grid positions, dependencies, sources, local assets, JavaScript syntax, and data sync');
