# Content audit — 30 October 2026

The second pass reviewed **all 21 mysteries and 57 mystery endings, all 96 achievements, all 96 achievement grid positions, and all 21 run endings**. It compared published references; no installed PC copy was available for gameplay testing. Coverage remains the documented PC 1.0 / 1.01 set. The announced scenario and other v1.2 additions are outside this audit.

The detailed checklists below describe the initial data and the findings. The accepted corrections in this table have been applied to the current dataset. Remaining reference disagreements are identified separately in the site.

## Applied corrections and clarifications

| Entry | Change |
|---|---|
| Welcome to the Family | Remove the invented win requirement. Juri's Horror counter reaching 100% triggers the achievement. |
| Real Nightmare | Remove the claim that three different DREAM enemy species are necessary. Repeated encounters count; retain a note about encounter/defeat wording. |
| Catch Me If You Can | Add free Handcuffs from the Police Station drawer and the 12-HP-or-less threshold. |
| Steel Box | Remove the exact two-combat promise; keep the cutter equipped through combat until it breaks. |
| Restless | Clarify Home Rest versus permitted bath and Lighthouse rest actions. |
| Exorcism | Clarify that ritual feedback counts correct positions rather than identifying them. |
| Thaumaturgy Teacher | Replace the missing side-quest placeholder with Downtown twice. Include Gore-Covered Student before Shiokawa School. |
| Evolving Eels | State the exact optional side quest: Seaside twice. |
| Household Hell | Name the clue documents, clarify the run-specific frequency and random follower sacrifice. |
| Painting | Add Eimi's ally reward and the danger of investigating off her route. |
| Painting / Ward availability | Use Painted Hospital / fifth victory for Extended D. Reject legacy four-win notes. |
| Noisy Nails | Remove '/ label disputed' from the ending titles. Keep the conflicting route assignment in the notes; the displayed mapping agrees with wiki and Japanese guide. |
| Fear Festival | Display Police Raid, corroborated by two walkthroughs, and preserve the Captured / forest-count source difference in notes. |
| Frightening Flood | Explain the Notes stage and six-action rescue window without promising a fixed randomized search sequence. |
| Generic victory | Explicitly excludes Miku, who has a separate Rioter entry. |
| Special deaths | Clarify the zero-health override of Last Stand for Scissors and True Form Aka Manto. |
| Minced and Cooked | Restrict trigger to the Downtown dog item Shop, rather than implying every shop. |
| Body Melted | Add Empty Bottle → Upper Kingdom blood preparation. |
| Site labels | Achievement categories are editorial; run-ending display order is not an in-game index. |

## Findings checked and deliberately not changed

- **Vigil's 11pm task is optional.** One walkthrough lists it in its sequence, but the detailed wiki explicitly says it is unnecessary. It is not presented as an additional required step.
- **Sport Rifle** remains the item name. A guide's casual pluralization does not establish a different canonical English name.
- **Extended D requires five wins** in the achievement references, despite copied four-win wording in older mystery walkthroughs.
- The **96 achievement grid coordinates** match the wiki. No duplicate cells or IDs were found.
- Wiki reward names are retained for **Say Hello** and **Student Survivor**, with old-guide naming differences noted.
- Furniture in **Residential Recluse** follows the Day 3 map. A guide that always names the bed is too narrow.

## Remaining limits

Noisy Nails letter assignments, Fear Festival title/count, Flood search counts, DREAM encounter versus defeat wording, outfit names, and Kaibara's alternative Stamina death trigger still differ between references. The guide gives corroborated routes and states the differences. It does not label these as in-game verified.

All existing IDs and the local journal storage key have been preserved, so existing progress saved in this browser remains compatible.

---

## Mystery and run-ending audit — 30 October 2026

Scope: all 21 mystery records, their 57 ending records, and all 21 fates in the initial data.json. This is a comparison of published references, not testing against a local game installation. No game installation was available. The original count agrees with the v1.0g inventory at https://woh.fandom.com/wiki/Mysteries . Version 1.2 additions remain outside this inventory.

The English Steam walkthrough https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150 was read across all 21 mysteries. Its routes broadly agree, but it contains clear legacy inconsistencies (for example its Scissors timeline introduction conflicts with its own C description). Individual Japanese walkthroughs provide independent detailed coverage below. A 1.01 Russian inventory at https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451 is an additional comparison, especially for all 21 encyclopedia entries.

### Every mystery reviewed

| ID | Ending records | Result and source |
|---|---|---|
| scissors | A/B/C/D | Routes agree. C is death in the Timeline A boss fight despite a misleading introductory sentence in some guides. Special death overrides Last Stand. Keep Sport Rifle as English canonical spelling: https://woh.fandom.com/wiki/Sport_Rifle . https://gamelifeme.com/world-of-horror/post-71/ ; https://woh.fandom.com/wiki/Timelines |
| arms | A/B | Agree: Timeline A key requires Hospital twice; Timeline B Vent Crawler gives no key. https://gamelifeme.com/world-of-horror/post-234/ |
| botanist | A/B/C/D | Agree on all four branches and Fire Axe dependency. Can add 11 Lead actions for C, protecting Shiro as needed. Do not copy a fixed turn-by-turn health recipe: guide versions disagree. https://gamelifeme.com/world-of-horror/post-241/ |
| bulletin | A/B/C | All choice branches agree, including two wrong final responses leading to Together. https://gamelifeme.com/world-of-horror/post-245/ |
| cape | A/B | Agree. Side gossip unlocks refusal/true form; either paper leads to ordinary boss and mask. https://gamelifeme.com/world-of-horror/post-272/ |
| coma | A/B | Agree: Village twice gives Dust; use Dust and defeat boss for A, Investigate for B. No-unplug achievement qualifier is separate. https://gamelifeme.com/world-of-horror/post-276/ |
| eels | A/B/C | All three branches agree. Missing precise side quest: investigate Seaside twice, costs 1 Reason, does not change ending. https://gamelifeme.com/world-of-horror/post-280/ |
| festival | A/B/C | Japanese guide agrees with Steam on SIX forest events, at least two before day-three finale, then up to four after. Wiki says five, so keep discrepancy transparently in research. Prefer Police Raid as display title: Japanese heading means police raid, Steam uses Police Raid, wiki uses Captured. Correcting route recipe is reference corroboration, not game verification. https://gamelifeme.com/world-of-horror/post-286/ ; https://woh.fandom.com/wiki/Far-out_Fable_of_a_Fear_Festival |
| flood | A/B/C | All branches agree. Add explicit Research Notes stage: School, click middle wall. AFTER Notes there are six searches/rests; school2/forest2/village2 is the two-guide recipe. Wiki instead says randomized 1–3 per location; safest advice: stop searching a location once its researcher is found and follow Notes. Avoid claiming the exact counts are game-tested. https://gamelifeme.com/world-of-horror/post-289/ ; https://woh.fandom.com/wiki/Freakish_Fable_of_a_Frightening_Flood |
| footage | A/B/C | Agree on all branches, acid and tape rewards. Mansion twice reduces search tiles by three. https://gamelifeme.com/world-of-horror/post-296/ |
| household | A/B/C | Agree on light, frequency, sacrifice/escape/step closer. Side quest supplies Shiokawa Herald (A) and Architect’s Journal; inspect Herald for the run-specific three-digit frequency. Do not hard-code 430Hz from legacy guides. Side quest provides clue but brute-force tuning can technically bypass it. Sacrificed follower is random according to Japanese guide. Use an ordinary recruit rather than promise every special ally is sacrificeable; special ally eligibility not resolved. https://gamelifeme.com/world-of-horror/post-223/ ; https://woh.fandom.com/wiki/Horrible_History_of_Household_Hell |
| mermaids | A/B/C/D/E | All five branches agree. Crowbar/Monkey Wrench tool speed-up independently confirmed. E is Lonely Fishman in newer guide, an older Korean guide calls it In Too Deep. https://gamelifeme.com/world-of-horror/post-300/ |
| medusa | A | Agree: School twice optional, defeat Meat Horror. Skin Jellyfish title supported by Steam and Japanese heading meaning skin jellyfish. https://gamelifeme.com/world-of-horror/post-867/ ; https://woh.fandom.com/wiki/Mysterious_Myth_of_Medusa_Metamorphosis |
| nails | A/B | Existing route-letter mapping is supported by Japanese guide and Fandom, while Steam reverses route assignments. Keep existing A=child fight / Grieving Father; B=killer fight / Unfinished Child. Remove '/ label disputed' from title and explain conflict in a note. These titles deliberately need not match the fought boss. https://gamelifeme.com/world-of-horror/post-871/ |
| painting | A/B/C | All branches agree, including entering Private Rooms early causing C. Missing A reward: Eimi ally. Warn that investigating off-icon workshed can lose Eimi. Extended Pack D unlocks on FIFTH win through Painted Hospital; four-win wording in legacy mystery guides is erroneous for current target. https://gamelifeme.com/world-of-horror/post-303/ ; https://worldofhorror.wiki.gg/wiki/Achievements |
| recluse | A/B | Agree on toy sacrifice and boss branches. Japanese guide simplistically always says bed, while Steam explicitly describes random furniture map; retain existing map-driven instructions. https://gamelifeme.com/world-of-horror/post-877/ ; Steam walkthrough |
| ramen | A/B | Agree, including Smelly Meat in inventory rather than storage. https://gamelifeme.com/world-of-horror/post-129/ |
| sailors | A/B/C | Routes agree. Names A=Fishing Season’s End, B=Real Catch, C=Burning Coast (also The Burning Coast in event heading). No substantive correction required. https://gamelifeme.com/world-of-horror/post-307/ ; https://woh.fandom.com/wiki/Sorrowful_Saga_of_the_Moonlight_Sailors |
| teacher | A/B | Resolve placeholder side quest: investigate DOWNTOWN TWICE. Add Gore-Covered Student before Shiokawa School. Attack the Teacher context action documented in https://steamcommunity.com/app/913740/discussions/0/3949154954324217606/ . Main new side-quest evidence: https://gamelifeme.com/world-of-horror/post-820/ |
| vigil | A/B/C | Existing core instructions agree. 11pm food/fireplace is OPTIONAL, explicitly stated by full Fandom article; Japanese guide lists it but does not establish it as required. If included, clearly mark optional. 10pm bow/clap+copy foot tattoo, 2am actual assigned task, then4am finale. Existing C shortcut consistent. https://gamelifeme.com/world-of-horror/post-542/ ; https://woh.fandom.com/wiki/Vicious_Verses_of_A_Violent_Vigil |
| ward | A/B | Agree on defeat/escape and package effects. Extended Pack D unlocks on FIFTH win, not4 as legacy mystery guides claim. https://gamelifeme.com/world-of-horror/post-311/ ; https://worldofhorror.wiki.gg/wiki/Achievements |

### Every run fate reviewed

All 21 entries are present in both the English wiki encyclopedia https://woh.fandom.com/wiki/Endings and Japanese list https://gamelifeme.com/world-of-horror/post-671/ . The Russian 1.01 guide listed above matches their count and mappings. Below covers each existing ID; the sequence is site order, not encyclopedia order.

| ID | Audit |
|---|---|
| run-survived | Clarify generic victory is a character other than Miku. |
| run-rioter | Miku victory confirmed. |
| run-stamina | Less than 1; Last Stand below -5 or beginning another encounter below1. Current semantics agree. |
| run-reason | Same health rule for Reason; confirmed. |
| run-dream | Ktu-Rufu /100% Doom confirmed. |
| run-earth | Ath-Yolazsth /100% Doom confirmed. |
| run-mirror | Goizo /100% Doom confirmed. |
| run-fire | Ithotu /100% Doom confirmed. |
| run-web | Cthac-Atorasu /100% Doom confirmed. |
| run-gaze | Ygothaeg /100% Doom confirmed. |
| run-court | Herald /100% Doom confirmed. |
| run-sadness | Eh-Żhal /100% Doom confirmed. |
| run-perfect | Zhectast /100% Doom confirmed. |
| run-mouth | Scissor variants at0STA/REA; add explicit Last Stand override. |
| run-otherworld | True-form Aka Manto at0STA/REA, add precise threshold and Last Stand override. |
| run-ears | Three unresolved Oetaru rounds; confirmed. |
| run-aliens | Blue Gem route confirmed by encyclopedia; detailed event chain should be checked with achievement audit. |
| run-cooked | Specifically dog item Shop, not every shop. Japanese list explicitly says use Hardware Store rerolls for Old God Doom endings instead. |
| run-melted | Bottle(Blood) confirmed; add preparation Empty Bottle → Upper Kingdom blood → drink. |
| run-club | Fourth History Club purchase confirmed. |
| run-kaibara | Encyclopedia says0Reason; boss page says0STA OR REA. Keep0Reason as corroborated route and note inconsistent documentation rather than promising0STA branch. |

Confidence: high for inventory coverage and routes with matching independent references; moderate for labels/timing with legacy differences. Remaining disputes: Nails route labels in Steam versus wiki/Japanese; Festival five versus six events and A name; Flood randomized counts versus fixed2; Kaibara Stamina versus Reason special death. These should be visible in research and contextual notes, never marked game-verified.


---

## Achievement audit — 30 October 2026

### Scope and limits

Inspected all 96 existing records: IDs, names, requirements, rewards, tips, related mystery IDs, categories, and grid positions. Matched every inventory entry to the complete cached wiki HTML and freshly rechecked the live search-indexed wiki inventory. Read all 96 sections of the accessible Steam guide (updated 2 February 2025). These are reference comparisons, not PC playtesting. Empty tips are not missing requirements. Categories are editorial and have no official equivalent.

The base inventory and rewards agree with the wiki, including the deliberate Inheritance/Seventh Curse alias treatment. The wiki does not supply detailed instructions for every achievement; comparison to it alone cannot verify practical tips. Steam guide has some old names and cannot be treated as infallible. No new achievement was found in either full inventory. This does not verify unlisted v1.2 content.

### Sources

- Wiki inventory and grid: https://worldofhorror.wiki.gg/wiki/Achievements
- Steam complete guide: https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045
- Dream encounters and newer achievements: https://www.reddit.com/r/WorldofHorror/comments/12pz6tj/
- Older 0.9.92 guide with conflicting win condition: https://steamcommunity.com/app/913740/discussions/0/3824161508146439015/
- Juri counter: https://woh.fandom.com/wiki/On_The_Run
- Illustrated direct play report showing achievement during transformation: https://note.com/vast_dill982/n/nd5617bb6a8eb?hl=en
- Cuffs effects and acquisition: https://woh.fandom.com/wiki/Handcuffs
- Box Cutter player reports: https://www.reddit.com/r/WorldofHorror/comments/18a9mk9/
- Ritual mechanics: https://woh.fandom.com/wiki/Ghosts
- Rest exceptions: https://woh.fandom.com/wiki/Achievement_guide

### Findings

The substantial mistakes are in two added tips (Welcome to the Family, Real Nightmare) and the omitted guaranteed handcuffs source. The grid and achievement inventory do not need rebuilding.

- **welcome-to-the-family:** Correct tip: Horror reaching 100% triggers it; a run victory is not needed. Older 0.9.92 discussion claimed a victory was required; newer 2025 guide and illustrated play diary show the unlock on transformation.
- **catch-me-if-you-can:** Add guaranteed Police Station drawer acquisition. The <=12 HP threshold is supported by item reference and player reports; Steam guide says below 12 imprecisely.
- **real-nightmare:** Rewrite practical tip: three encounters need not be three distinct species. Keep encounter wording (wiki); Steam guide uses defeat but an older first-person discussion explicitly says defeat is unnecessary.
- **say-hello:** Keep wiki reward Spooky Sweater; Steam guide calls it Bloody Sweater for Kouji. Naming discrepancy is unresolved, not reason to overwrite wiki.
- **student-survivor:** Keep Tracksuit reward from wiki. Steam guide uses uncertain Samurai wording and is evidently outdated here.
- **eldritch-backstory-iii:** Wiki calls unlocked backstory Inheritance; Steam calls it Seventh Curse. Existing alias notes correctly record this conflict.
- **eldritch-backstory-iv:** Wiki calls required backstory Inheritance; Steam calls it Seventh Curse. Existing alias notes correctly record this conflict.
- **steel-box:** Existing two-combat equipped break method is corroborated by a player report. Safer wording: keep equipped through combat until it breaks; do not promise exact count across versions.
- **blood-deal:** Existing Stamina exchange is a supported method, but is narrower than feeding Monument generally; does not need correction for successful route.
- **exorcism:** Practical tip is supported: five actions, one combination per run; feedback reports count correct, not which individual positions.
- **otherworldly-thirst:** Add optional practical precaution to carry Goblet as only container (Steam guide). Existing route matches reference; no need to insist school Half Open is only route to Upper Kingdom.
- **restless:** Bath exception confirmed; wiki achievement guide also permits Lighthouse rest-a-bit. Existing tip is correct but could mention latter.

### Exhaustive record checklist

Every row below was checked against wiki requirement/reward text and grid. "Matches" means agreement with published reference, not independently tested in-game. All non-empty existing practical tips were also read against the Steam guide; specialist sources above resolve the exceptions.

| Record | Grid | Inventory / grid | Notes |
|---|---|---|---|
| Chain Smoker | 1,2 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Junior Priest | 1,3 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Paranoia Agent | 1,4 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Peeping Tom | 1,5 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Perfect Disguise | 1,6 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Frequent Buyer | 1,7 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Lightburn | 1,8 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Otherworldly Thirst | 1,9 | Matches | Add optional practical precaution to carry Goblet as only container (Steam guide). Existing route matches reference; no need to insist school Half Open is only route to Upper Kingdom. |
| Junior Scout | 2,2 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| House of Paper | 2,3 | Matches | No discrepancy found in requirement/reward reference comparison. |
| This Is For My Friends | 2,4 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Wait For It | 2,5 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Team Kill | 2,6 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Say Hello | 2,7 | Matches | Keep wiki reward Spooky Sweater; Steam guide calls it Bloody Sweater for Kouji. Naming discrepancy is unresolved, not reason to overwrite wiki. |
| Junior Librarian | 2,8 | Matches | No discrepancy found in requirement/reward reference comparison. |
| We Don't Need Eyes | 2,9 | Matches | No discrepancy found in requirement/reward reference comparison. |
| True Idol | 3,2 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Classy Ritual | 3,3 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Peeking Tom | 3,4 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Awoo | 3,5 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Paid in Blood | 3,6 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Exorcism | 3,7 | Matches | Practical tip is supported: five actions, one combination per run; feedback reports count correct, not which individual positions. |
| Never-Ending Summer | 3,8 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Restless | 3,9 | Matches | Bath exception confirmed; wiki achievement guide also permits Lighthouse rest-a-bit. Existing tip is correct but could mention latter. |
| Scholar | 4,2 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Transfer Girl | 4,3 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Fit Girl | 4,4 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Thug Survivor | 4,5 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Idol Survivor | 4,6 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Reporter Survivor | 4,7 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Lungful of Air | 4,8 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Grounded Forever | 4,9 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Student Survivor | 5,2 | Matches | Keep Tracksuit reward from wiki. Steam guide uses uncertain Samurai wording and is evidently outdated here. No practical tip supplied. |
| Chaos Survivor | 5,3 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Bad Luck | 5,4 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| From the Brink | 5,5 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Need No Education | 5,6 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Boop | 5,7 | Matches | No discrepancy found in requirement/reward reference comparison. |
| My Dear Ghost | 5,8 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Most Popular Idol | 5,9 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| World Saved I | 6,2 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| World Saved II | 6,3 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| World Saved III | 6,4 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| World Saved IV | 6,5 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| World Doomed I | 6,6 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| World Doomed II | 6,7 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Painted Hospital | 6,8 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Onyx Medallion | 6,9 | Matches | No discrepancy found in requirement/reward reference comparison. |
| World Doomed III | 7,2 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Eldritch Backstory I | 7,3 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Eldritch Backstory II | 7,4 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Eldritch Backstory III | 7,5 | Matches | Wiki calls unlocked backstory Inheritance; Steam calls it Seventh Curse. Existing alias notes correctly record this conflict. No practical tip supplied. |
| Eldritch Backstory IV | 7,6 | Matches | Wiki calls required backstory Inheritance; Steam calls it Seventh Curse. Existing alias notes correctly record this conflict. No practical tip supplied. |
| Eldritch Backstory V | 7,7 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Club Member | 7,8 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Eldritch Backstory VI | 7,9 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Soft Side | 8,2 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Blood Deal | 8,3 | Matches | Existing Stamina exchange is a supported method, but is narrower than feeding Monument generally; does not need correction for successful route. |
| Shiokawa History I | 8,4 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Shiokawa History II | 8,5 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Shiokawa History III | 8,6 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Shiokawa History IV | 8,7 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Shiokawa History V | 8,8 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Shiokawa History VI | 8,9 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| True Despair | 9,2 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Final Stand I | 9,3 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Final Stand II | 9,4 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Final Stand III | 9,5 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Mira | 9,6 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Something Evil | 9,7 | Matches | No discrepancy found in requirement/reward reference comparison. |
| True Anarchy | 9,8 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Hail to the King | 9,9 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Good Old Times | 10,2 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Primum Non Nocere | 10,3 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Sweater Girl | 10,4 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Eldritch Backstory VII | 10,5 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Eldritch Backstory VIII | 10,6 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Eldritch Backstory IX | 10,7 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Eldritch Backstory X | 10,8 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Eldritch Backstory XXX | 10,9 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Real Nightmare | 1,1 | Matches | Rewrite practical tip: three encounters need not be three distinct species. Keep encounter wording (wiki); Steam guide uses defeat but an older first-person discussion explicitly says defeat is unnecessary. |
| Kick-box Cutter | 2,1 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Welcome to the Family | 3,1 | Matches | Correct tip: Horror reaching 100% triggers it; a run victory is not needed. Older 0.9.92 discussion claimed a victory was required; newer 2025 guide and illustrated play diary show the unlock on transformation. |
| Steel Box | 4,1 | Matches | Existing two-combat equipped break method is corroborated by a player report. Safer wording: keep equipped through combat until it breaks; do not promise exact count across versions. |
| Can You Trust Them? | 5,1 | Matches | No discrepancy found in requirement/reward reference comparison. |
| (H)experimental Therapy | 6,1 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Catch Me If You Can | 7,1 | Matches | Add guaranteed Police Station drawer acquisition. The <=12 HP threshold is supported by item reference and player reports; Steam guide says below 12 imprecisely. |
| Rain of Spiders | 8,1 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Flooded Nails | 11,2 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Unfortunate Accident | 11,3 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Spore Infection | 11,4 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Intrusive Thoughts | 11,5 | Matches | No discrepancy found in requirement/reward reference comparison. |
| Insatiable Lust | 11,6 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| do something | 11,7 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Homerun | 11,8 | Matches | No discrepancy found in requirement/reward reference comparison. No practical tip supplied. |
| Dude | 11,9 | Matches | No discrepancy found in requirement/reward reference comparison. |

### Structural results

- Dataset records: 96.
- Wiki named grid entries: 96.
- Wiki achievement sections: 96.
- Grid/name mismatches: 0.
- Duplicate IDs: 0.
- The 11-by-9 grid has 99 positions and three intentionally empty first-column cells in rows 9, 10, and 11.
- Categories such as Exploration and Combat are site navigation labels. They have no official validation source and should not be presented as in-game categories.
- No claim of Steam platform achievements should be made: these are the 96 in-game achievement/unlock entries.
