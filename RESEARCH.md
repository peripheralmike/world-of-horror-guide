# Research notes

Checked and re-audited: **30 October 2026**, Europe/London.

## Coverage

Documented PC **1.0 / 1.01** content: 21 standard mysteries, 57 mystery endings, 96 in-game achievements, and 21 run-ending entries. These are reference-based inventory counts, not certification of an inspected installation. See [AUDIT.md](AUDIT.md) for the exhaustive second-pass checklist and corrections.

The achievement list is the **in-game** set. It is not claimed as a verified Steam platform achievement inventory. The publisher's February 2026 v1.2 announcement describes Steam integration and 22 additional achievements; its October announcement promises a scenario by Halloween. Those announcements do not establish a released, fully catalogued v1.2 inventory.

- [Official announcements](https://steamcommunity.com/app/913740/allnews/)
- [Steam news feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=913740&count=5&maxlength=10000)

## Collection and checking

1. Extracted the wiki's 96 named achievement sections and the 11×9 grid, including its three intentional empty cells. Checked every requirement, reward and grid coordinate against [the achievement inventory, revision 353](https://worldofhorror.wiki.gg/wiki/Achievements?oldid=353).
2. Compared all achievement sections and all existing practical tips with [Electric Wizard's complete guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045), updated February 2025. Specialist item pages and illustrated play reports resolve some old-guide errors; the audit lists those URLs.
3. Compared all mystery branches with the individual wiki articles, [Haspen's walkthrough](https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150), and individual [GameLifeMe walkthroughs](https://gamelifeme.com/world-of-horror/). All case records link their exact references.
4. Compared run-ending entries with [the English encyclopedia](https://woh.fandom.com/wiki/Endings), [Japanese ending list](https://gamelifeme.com/world-of-horror/post-671/), and [Russian PC 1.01 guide](https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451).
5. Checked IDs, cross-links, source URL formats, all 96 grid cells, JSON/JS synchronization, and local assets with the bundled validator. Browser checks cover route selection, timeline filtering, source notes, search, spoilers, progress persistence. The later blog redesign removes backup import/export.

Some direct Fandom/Steam requests were restricted. Accessible web-indexed page text was used where available. No access restrictions were bypassed. No local game installation or save file was inspected.

## Source differences retained

- **Noisy Nails:** The wiki and Japanese guide agree on the routes shown here; the English Steam guide reverses A and B.
- **Fear Festival:** Walkthroughs use Police Raid and six Forest visits; the wiki uses Captured and five. Enter the factory before dawn for the early route.
- **Frightening Flood:** Walkthroughs give a two-visits-per-location recipe; the wiki describes variable searches. Stop searching a location once its researcher is found.
- **Real Nightmare:** Sources differ on encounter versus defeat. Three different enemy species are not required.
- **Outfit rewards:** Say Hello and Student Survivor have outdated reward names in the Steam guide. The wiki names are retained.
- **Kaibara special death:** Zero Reason is the corroborated trigger. A boss page also mentions zero Stamina; that alternative remains unresolved.

Additional naming notes: Inheritance is annotated as the old label for The Seventh Curse in Eldritch Backstory III/IV. Otherwordly Thirst is normalized to Otherworldly Thirst while preserving the original source fragment. Numbered character-clear requirements are expanded to character names. Hard difficulty is clarified as True Believer.

Twilight TV Terror remains outside standard completion totals: the developer's custom-mystery example is reported absent from normal v1.0 rotation. [Reference](https://steamcommunity.com/app/913740/discussions/0/3935643263193757376/).

## Verification language

“Reference documented” means the linked published reference describes the condition. It does **not** mean the route was reproduced in-game. Categories are navigation aids; run-ending display order is not an official index. Item and ending titles are preserved separately from editorial notes.

For a later game-based pass, record the PC build, inspect its achievement/ending grids, reproduce disputed triggers, and retain evidence. Preserve IDs, or provide a journal migration, when correcting labels.

## Attribution

Wiki-derived data is adapted from World of Horror Wiki contributors under CC BY-SA 4.0. The retrieved wiki.gg footer explicitly specifies that license. Sources and changes are recorded, and the adapted structured data remains under the same license. See [LICENSE.md](LICENSE.md). Guide authors are credited as cross-check references; their screenshots and walkthrough prose are not redistributed. The included favicon is original SVG; no game assets or third-party fonts are bundled.
