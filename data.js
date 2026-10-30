window.WOH_DATA = {
  "meta": {
    "title": "World of Horror — Endings & achievements",
    "version": "1.0 / 1.01 PC reference",
    "checked": "2026-10-30",
    "schemaVersion": 1,
    "coverage": "21 standard mysteries, 96 in-game achievements, and 21 run-ending encyclopedia entries. The announced v1.2 content is not yet catalogued.",
    "notice": "PC 1.0 / 1.01 reference. The announced scenario and other v1.2 additions are outside this audit.",
    "exclusions": [
      {
        "title": "Twilight TV Terror",
        "reason": "Developer custom-mystery example; reported absent from normal v1.0 rotation. Excluded from standard completion totals.",
        "source": "https://steamcommunity.com/app/913740/discussions/0/3935643263193757376/"
      },
      {
        "title": "v1.2 additions",
        "reason": "The publisher announced a new scenario by Halloween. Its broader v1.2 announcement describes 22 extra achievements, but a released inventory was not available in the retrieved sources.",
        "source": "https://steamcommunity.com/app/913740/allnews/"
      }
    ],
    "license": "CC BY-SA 4.0",
    "sourceNotes": "Reference-documented does not mean tested in-game. Data adapted from the World of Horror Wiki contributors, with additional route checks against community guides. Corrections, aliases, and discrepancies are recorded in RESEARCH.md.",
    "audit": {
      "date": "2026-10-30",
      "mysteries": 21,
      "mysteryEndings": 57,
      "achievements": 96,
      "runEndings": 21,
      "inGameTested": false
    },
    "issues": [
      {
        "entry": "Noisy Nails",
        "detail": "The wiki and Japanese guide agree on the routes shown here; the English Steam guide reverses A and B."
      },
      {
        "entry": "Fear Festival",
        "detail": "Walkthroughs use Police Raid and six Forest visits; the wiki uses Captured and five. Enter the factory before dawn for the early route."
      },
      {
        "entry": "Frightening Flood",
        "detail": "Walkthroughs give a two-visits-per-location recipe; the wiki describes variable searches. Stop searching a location once its researcher is found."
      },
      {
        "entry": "Real Nightmare",
        "detail": "Sources differ on encounter versus defeat. Three different enemy species are not required."
      },
      {
        "entry": "Outfit rewards",
        "detail": "Say Hello and Student Survivor have outdated reward names in the Steam guide. The wiki names are retained."
      },
      {
        "entry": "Kaibara special death",
        "detail": "Zero Reason is the corroborated trigger. A boss page also mentions zero Stamina; that alternative remains unresolved."
      }
    ]
  },
  "mysteries": [
    {
      "id": "scissors",
      "name": "Spine-Chilling Story of School Scissors",
      "short": "School Scissors",
      "location": "School",
      "sideQuest": "No side quest. Retrieve Friend’s Diary from storage.",
      "notes": [
        "Timeline A uses combat; Timeline B uses a bow/clap ritual.",
        "A Tiny Key opens the locked locker for a Sport Rifle."
      ],
      "endings": [
        {
          "id": "scissors-a",
          "letter": "A",
          "title": "Saved Friend",
          "condition": "Correct sigil; school intact",
          "steps": [
            "Choose Timeline A.",
            "Copy the sigil from Friend’s Diary when chalk becomes available.",
            "Finish preparations and defeat Scissor Woman."
          ],
          "timeline": "A",
          "reward": "",
          "warnings": [
            "Burning the school earlier locks this route."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "scissors-b",
          "letter": "B",
          "title": "Legend Continues",
          "condition": "Incorrect sigil OR burned school",
          "steps": [
            "Choose Timeline A.",
            "Draw the wrong sigil, or arrive after the school has burned.",
            "Defeat the Horror or Burned Scissor Woman."
          ],
          "timeline": "A",
          "reward": "Cursed Scissors",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "scissors-c",
          "letter": "C",
          "title": "Slit Mouth",
          "condition": "Lose to the Scissor Woman",
          "steps": [
            "Choose Timeline A.",
            "Reach any Scissor Woman combat variant.",
            "Let Stamina or Reason reach zero."
          ],
          "timeline": "A",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": true,
          "status": "Reference documented"
        },
        {
          "id": "scissors-d",
          "letter": "D",
          "title": "Ambulance Ride",
          "condition": "Timeline B ritual",
          "steps": [
            "Choose Timeline B.",
            "Finish the investigation and perform the bow/clap ritual.",
            "Any completed ritual result leads here."
          ],
          "timeline": "B",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Spine-Chilling_Story_of_School_Scissors",
        "https://gamelifeme.com/world-of-horror/post-71/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "arms",
      "name": "Alarming Account of Abnormal Arms",
      "short": "Abnormal Arms",
      "location": "Apartments",
      "sideQuest": "Investigate Hospital twice.",
      "notes": [
        "The side quest supplies a Tiny Key only in Timeline A."
      ],
      "endings": [
        {
          "id": "arms-a",
          "letter": "A",
          "title": "Pervert",
          "condition": "Timeline A conclusion",
          "steps": [
            "Choose Timeline A.",
            "Follow the investigation to the boiler room and check the vent."
          ],
          "timeline": "A",
          "reward": "Tiny Key if the side quest is complete",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "arms-b",
          "letter": "B",
          "title": "Centipede",
          "condition": "Timeline B confrontation",
          "steps": [
            "Choose Timeline B.",
            "Check the boiler-room vent.",
            "Defeat Vent Crawler."
          ],
          "timeline": "B",
          "reward": "",
          "warnings": [
            "The side quest does not grant a Tiny Key on this timeline."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Alarming_Account_of_Abnormal_Arms",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-234/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "botanist",
      "name": "Bizarre Bruit of the Blood-curdling Botanist",
      "short": "Blood-curdling Botanist",
      "location": "Forest",
      "sideQuest": "Investigate School twice to learn about the fungus.",
      "notes": [],
      "endings": [
        {
          "id": "botanist-a",
          "letter": "A",
          "title": "Cleansed With Fire",
          "condition": "Side quest AND Fire Axe",
          "steps": [
            "Complete the side quest and equip Fire Axe.",
            "Reveal Shiro-san’s true form with the special inspection action.",
            "Chop out, break into the minivan next turn, equip DIY Flamethrower, and defeat him."
          ],
          "timeline": "Any",
          "reward": "DIY Flamethrower",
          "warnings": [
            "Leave inventory space for the flamethrower."
          ],
          "requires": [
            {
              "id": "mermaids-a",
              "label": "Mermaids A → Fire Axe"
            }
          ],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "botanist-b",
          "letter": "B",
          "title": "Fungicide",
          "condition": "Reveal and defeat the infection",
          "steps": [
            "Complete the side quest.",
            "Inspect Shiro-san to expose his true form.",
            "Defeat him without the flamethrower route."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "botanist-c",
          "letter": "C",
          "title": "Still Missing",
          "condition": "Escape with the gardener",
          "steps": [
            "Lead and protect Shiro-san until you escape.",
            "Alternatively, use Fire Axe to chop out before revealing his true form."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "botanist-d",
          "letter": "D",
          "title": "Lacerations",
          "condition": "Fail to protect the gardener",
          "steps": [
            "Let the plants kill Shiro-san.",
            "Escape alone."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Bizarre_Bruit_of_the_Blood-curdling_Botanist",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-241/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "bulletin",
      "name": "Bloody Brief of a Beckoning Bulletin",
      "short": "Beckoning Bulletin",
      "location": "Village",
      "sideQuest": "Investigate Forest twice for Forest Note.",
      "notes": [],
      "endings": [
        {
          "id": "bulletin-a",
          "letter": "A",
          "title": "Loud and Clear",
          "condition": "Forest Note AND the right response",
          "steps": [
            "Obtain Forest Note through the side quest.",
            "Answer yes, then remember the note.",
            "Choose “You can’t save everyone.”"
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "bulletin-b",
          "letter": "B",
          "title": "Connection Trouble",
          "condition": "Pick up the phone",
          "steps": [
            "Answer yes, then pick up the phone.",
            "Defeat Together."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [
            "The other two responses after remembering the note also lead to this fight."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "bulletin-c",
          "letter": "C",
          "title": "Disconnected",
          "condition": "Refuse the bulletin",
          "steps": [
            "Answer no when the bulletin first welcomes you."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Bloody_Brief_of_a_Beckoning_Bulletin",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-245/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "cape",
      "name": "Chilling Chronicle of a Crimson Cape",
      "short": "Crimson Cape",
      "location": "School",
      "sideQuest": "Ask Schoolyard students for the current mystery’s gossip.",
      "notes": [
        "Collect gossip before burning the school in Mermaids."
      ],
      "endings": [
        {
          "id": "cape-a",
          "letter": "A",
          "title": "Red Coat (Thing)",
          "condition": "Learn the legend; refuse both papers",
          "steps": [
            "Complete the gossip side quest.",
            "Refuse everything Aka Manto offers.",
            "Defeat his True Form."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [
            "Losing this fight gives a special run ending."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "cape-b",
          "letter": "B",
          "title": "Red Coat (Man)",
          "condition": "Accept red OR blue paper",
          "steps": [
            "Choose either paper.",
            "Survive the penalty and defeat Aka Manto."
          ],
          "timeline": "Any",
          "reward": "Crestfallen Mask",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Chilling_Chronicle_of_a_Crimson_Cape",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-272/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "coma",
      "name": "Curious Case of a Contagious Coma",
      "short": "Contagious Coma",
      "location": "Hospital",
      "sideQuest": "Investigate Village twice for Dust of Seeing.",
      "notes": [],
      "endings": [
        {
          "id": "coma-a",
          "letter": "A",
          "title": "Dream Devourer",
          "condition": "Use Dust of Seeing",
          "steps": [
            "Complete the side quest and carry the dust.",
            "Use it in the quarantine wing.",
            "Defeat Dream Devourer."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [
            "For Primum Non Nocere, never unplug a patient."
          ],
          "requires": [],
          "achievements": [
            "primum-non-nocere"
          ],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "coma-b",
          "letter": "B",
          "title": "Sated… For Now",
          "condition": "Investigate without using dust",
          "steps": [
            "At the quarantine wing, choose Investigate."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Curious_Case_of_a_Contagious_Coma",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-276/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "eels",
      "name": "Eerie Episode of Evolving Eels",
      "short": "Evolving Eels",
      "location": "Seaside",
      "sideQuest": "Investigate Seaside twice (costs 1 Reason). Optional; does not determine the ending.",
      "notes": [
        "The ending choice is made inside the neighbor’s apartment."
      ],
      "endings": [
        {
          "id": "eels-a",
          "letter": "A",
          "title": "Eye Surgery",
          "condition": "Intervene immediately",
          "steps": [
            "Enter the bedroom and find Kana.",
            "Choose to puncture the affected eye."
          ],
          "timeline": "Any",
          "reward": "Kana stays as an ally",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "eels-b",
          "letter": "B",
          "title": "Missing Friend",
          "condition": "Take Kana to hospital",
          "steps": [
            "Enter the bedroom.",
            "Choose to go to the hospital without puncturing the eye."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "eels-c",
          "letter": "C",
          "title": "Left Behind",
          "condition": "Leave the apartment",
          "steps": [
            "Leave without rescuing Kana."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Eerie_Episode_of_Evolving_Eels",
        "https://gamelifeme.com/world-of-horror/post-280/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "festival",
      "name": "Far-out Fable of a Fear Festival",
      "short": "Fear Festival",
      "location": "Village",
      "sideQuest": "No standard side quest. Explore the Forest early.",
      "notes": [
        "For the early factory route, the Steam and Japanese walkthroughs specify six Forest investigations total, including at least two before the day-three finale. The wiki specifies five; follow the factory's availability and enter before dawn.",
        "Ending A is called Police Raid in the walkthrough and Captured in the wiki."
      ],
      "endings": [
        {
          "id": "festival-a",
          "letter": "A",
          "title": "Police Raid",
          "condition": "Reach the factory early",
          "steps": [
            "Investigate Forest twice during days two and three, before the festival's final night.",
            "After the map changes, keep investigating Forest until the factory appears; enter before dawn.",
            "In Timeline B, use the special escape action instead of interrupting the cultist."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Title / timing differs between references"
        },
        {
          "id": "festival-b",
          "letter": "B",
          "title": "Too Late",
          "condition": "Reach the factory at dawn",
          "steps": [
            "Spend early actions away from the Forest.",
            "Reach the factory only when dawn arrives."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "festival-c",
          "letter": "C",
          "title": "The Ritual",
          "condition": "Timeline B; interrupt the cultist",
          "steps": [
            "Choose Timeline B and reach the factory before dawn.",
            "Use the special Attack the Master Cultist action until the ritual breaks."
          ],
          "timeline": "B",
          "reward": "Spiral Hood",
          "warnings": [
            "Attacking or defeating the large creature is not the required action."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Far-out_Fable_of_a_Fear_Festival",
        "https://gamelifeme.com/world-of-horror/post-286/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Source discrepancy",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "flood",
      "name": "Freakish Fable of a Frightening Flood",
      "short": "Frightening Flood",
      "location": "Village",
      "sideQuest": "No standard side quest. Retrieve Research Notes, then rescue the missing researchers before the six-action deadline.",
      "notes": [
        "At the School, click the middle wall and complete the event to obtain Research Notes before searching for the team.",
        "Once you have the Notes, searches and Inn rests consume the six remaining actions. Stop searching a location after finding its researcher.",
        "Two walkthroughs prescribe School twice, Forest twice, and Village twice during the rescue stage. The wiki describes random placement requiring one to three visits; follow Research Notes and actual discoveries.",
        "The ending encyclopedia specifies zero Reason for the special Kaibara death; a boss reference also lists zero Stamina. This guide gives the corroborated Reason route."
      ],
      "endings": [
        {
          "id": "flood-a",
          "letter": "A",
          "title": "Trust the Government",
          "condition": "Rescue all three researchers",
          "steps": [
            "Find the Research Notes.",
            "Rescue all three researchers before the deadline; avoid resting.",
            "Defeat T’Cithura and Kaibara’s Villagers."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "flood-b",
          "letter": "B",
          "title": "Sabbatical",
          "condition": "Rescue fewer than three",
          "steps": [
            "Reach the escape sequence without all three researchers.",
            "Defeat the final bosses."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "flood-c",
          "letter": "C",
          "title": "Biggest Little Village",
          "condition": "Lose your Reason in the finale",
          "steps": [
            "Reach the final boss encounter.",
            "Let Reason reach zero."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": true,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Freakish_Fable_of_a_Frightening_Flood",
        "https://gamelifeme.com/world-of-horror/post-289/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Source discrepancy",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "footage",
      "name": "Freaky Feature of Found Footage",
      "short": "Found Footage",
      "location": "Forest",
      "sideQuest": "Investigate Mansion twice to reduce the forest search area.",
      "notes": [],
      "endings": [
        {
          "id": "footage-a",
          "letter": "A",
          "title": "Shunned House",
          "condition": "Bring Can of Acid",
          "steps": [
            "Buy Can of Acid at the Seaside Hardware Store.",
            "Find the ritual site and peek into the hole.",
            "Pour acid inside."
          ],
          "timeline": "Any",
          "reward": "Forest Tapes",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "footage-b",
          "letter": "B",
          "title": "Wishing Well",
          "condition": "Look into the hole",
          "steps": [
            "Find the ritual site and peek inside.",
            "Choose to lose consciousness."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "footage-c",
          "letter": "C",
          "title": "Tapes",
          "condition": "Take the evidence and flee",
          "steps": [
            "At the ritual site, take the cassettes and run."
          ],
          "timeline": "Any",
          "reward": "Forest Tapes",
          "warnings": [
            "Raises the Forest’s threat level."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Freaky_Feature_of_Found_Footage",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-296/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "household",
      "name": "Horrible History of Household Hell",
      "short": "Household Hell",
      "location": "Mansion",
      "sideQuest": "Investigate Seaside twice for Shiokawa Herald (A) and Architect's Journal. Inspect the Herald and remember its three-digit frequency.",
      "notes": [
        "Bring a light source and set the speakers to the frequency in your Herald. The number varies; do not use a fixed frequency from an older guide.",
        "Ending A sacrifices a randomly selected follower. Bring an ordinary recruit; special ally eligibility is not fully established by the references.",
        "Resolve or escape the Oetaru encounter before three rounds pass."
      ],
      "endings": [
        {
          "id": "household-a",
          "letter": "A",
          "title": "Inner Coil",
          "condition": "Correct frequency AND an ally",
          "steps": [
            "Take a light source and complete the side quest.",
            "Explore further in the cave; tune the speakers to the newspaper’s frequency.",
            "Sacrifice an ally to Oetaru."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [
            "Equip Ritual Dagger for Classy Ritual."
          ],
          "requires": [],
          "achievements": [
            "classy-ritual"
          ],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "household-b",
          "letter": "B",
          "title": "Beast Awakened",
          "condition": "Correct frequency; escape",
          "steps": [
            "Find and set the correct speaker frequency using a light source.",
            "Use No Hope! to flee Oetaru."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "household-c",
          "letter": "C",
          "title": "Mystery Buried Deep",
          "condition": "Approach without the speaker route",
          "steps": [
            "In the underground chamber, choose Step Closer without tuning the speakers."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Horrible_History_of_Household_Hell",
        "https://gamelifeme.com/world-of-horror/post-223/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "mermaids",
      "name": "Macabre Memoir of Morbid Mermaids",
      "short": "Morbid Mermaids",
      "location": "School",
      "sideQuest": "Investigate Seaside twice; optional for every ending.",
      "notes": [
        "Burning the school affects Scissors, Cape, and access to student allies."
      ],
      "endings": [
        {
          "id": "mermaids-a",
          "letter": "A",
          "title": "Morbid Discovery",
          "condition": "Defeat the Mad Janitor",
          "steps": [
            "Reach the school basement.",
            "Fight and defeat Mad Janitor directly."
          ],
          "timeline": "Any",
          "reward": "Fire Axe",
          "warnings": [
            "Play Aiko for This Is For My Friends."
          ],
          "requires": [],
          "achievements": [
            "this-is-for-my-friends"
          ],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "mermaids-b",
          "letter": "B",
          "title": "Mermaid in a Manhole",
          "condition": "Open the escape route",
          "steps": [
            "Enter Mad Janitor combat.",
            "Repeat Force Manhole Open until it completes."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [
            "An equipped Crowbar or Monkey Wrench speeds up the action."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "mermaids-c",
          "letter": "C",
          "title": "Fire and Water",
          "condition": "Topple the lamp",
          "steps": [
            "Enter Mad Janitor combat.",
            "Use Topple a Lamp."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [
            "Applies Burn and burns down the school.",
            "Blocks Scissors A and later Schoolyard gossip."
          ],
          "requires": [],
          "achievements": [
            "need-no-education"
          ],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "mermaids-d",
          "letter": "D",
          "title": "Insmasu Curse",
          "condition": "Have Insmasu Look",
          "steps": [
            "Arrive with the Insmasu Look curse.",
            "Choose Distract Him before combat."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "mermaids-e",
          "letter": "E",
          "title": "Lonely Fishman",
          "condition": "Timeline B conversation",
          "steps": [
            "Choose Timeline B.",
            "Notice His Face, then agree or send an ally."
          ],
          "timeline": "B",
          "reward": "",
          "warnings": [
            "Agreeing adds Doom; sending an ally sacrifices them."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Macabre_Memoir_of_Morbid_Mermaids",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-300/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "medusa",
      "name": "Mysterious Myth of Medusa Metamorphosis",
      "short": "Medusa Metamorphosis",
      "location": "Seaside",
      "sideQuest": "Investigate School twice; optional for the ending.",
      "notes": [],
      "endings": [
        {
          "id": "medusa-a",
          "letter": "A",
          "title": "Skin Jellyfish",
          "condition": "Survive the cave",
          "steps": [
            "Follow the investigation into the partly flooded cave.",
            "Defeat Meat Horror."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Mysterious_Myth_of_Medusa_Metamorphosis",
        "https://gamelifeme.com/world-of-horror/post-867/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "nails",
      "name": "Nightmare News of the Noisy Nails",
      "short": "Noisy Nails",
      "location": "Hospital",
      "sideQuest": "Ask Schoolyard students for gossip about the grieving father.",
      "notes": [
        "The wiki and Japanese walkthrough associate the Unfinished Child fight with Ending A (Grieving Father), and the Kabuki Killer fight with Ending B (Unfinished Child). The English Steam walkthrough reverses those routes; the labels here follow the two agreeing references."
      ],
      "endings": [
        {
          "id": "nails-a",
          "letter": "A",
          "title": "Grieving Father",
          "condition": "Investigate the nail statue",
          "steps": [
            "Complete the gossip side quest.",
            "In the mortuary choose “Is that… a human nail?”",
            "Defeat Unfinished Child."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Route labels differ between references"
        },
        {
          "id": "nails-b",
          "letter": "B",
          "title": "Unfinished Child",
          "condition": "Confront the masked killer",
          "steps": [
            "Leave the mortuary without investigating the nail statue.",
            "Defeat Kabuki Killer."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Route labels differ between references"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Nightmare_News_of_the_Noisy_Nails",
        "https://gamelifeme.com/world-of-horror/post-871/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Source discrepancy",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "painting",
      "name": "Perilous Parable of the Peculiar Painting",
      "short": "Peculiar Painting",
      "location": "Mansion",
      "sideQuest": "No standard side quest; follow Eimi’s location icon.",
      "notes": [
        "Bring a light source to the workshed for Chainsaw (No Fuel); Fuel makes it usable.",
        "Visiting locations without Eimi's icon, including the workshed, can cause you to lose track of her and lock out routes A and B.",
        "Requires Extended D, unlocked by Painted Hospital after five wins. Older mystery guides incorrectly say four."
      ],
      "endings": [
        {
          "id": "painting-a",
          "letter": "A",
          "title": "Doomed Artist",
          "condition": "Follow Eimi; return immediately",
          "steps": [
            "Follow locations marked with Eimi’s icon.",
            "Enter Private Rooms with her.",
            "Return straight to Private Rooms instead of waiting; defeat The Painting."
          ],
          "timeline": "Any",
          "reward": "Eimi joins as an ally",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "painting-b",
          "letter": "B",
          "title": "Grand Vernissage",
          "condition": "Follow Eimi; wait in the foyer",
          "steps": [
            "Enter Private Rooms with Eimi.",
            "Wait in the Mansion Foyer when asked, then return."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "painting-c",
          "letter": "C",
          "title": "Show Must Go On",
          "condition": "Lose track of Eimi",
          "steps": [
            "Visit locations without Eimi’s icon, or enter Private Rooms too early.",
            "Defeat Ichiro-san in the final encounter."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Perilous_Parable_of_the_Peculiar_Painting",
        "https://gamelifeme.com/world-of-horror/post-303/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "recluse",
      "name": "Restless Rumors of a Residential Recluse",
      "short": "Residential Recluse",
      "location": "Apartments",
      "sideQuest": "Day 3 clue → Day 5 search → Day 7 toy choice.",
      "notes": [],
      "endings": [
        {
          "id": "recluse-a",
          "letter": "A",
          "title": "Finally Free",
          "condition": "Defeat the Roommate normally",
          "steps": [
            "Progress through seven days.",
            "Fight and defeat Roommate without sacrificing the toy."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "recluse-b",
          "letter": "B",
          "title": "Evil Evicted",
          "condition": "Find and sacrifice Stuffed Toy",
          "steps": [
            "Day 3: inspect the peephole map and remember its furniture symbol.",
            "Day 5: search behind that furniture for Stuffed Toy.",
            "Day 7: sacrifice the toy, then defeat Roommate."
          ],
          "timeline": "Any",
          "reward": "Fleshy Toy",
          "warnings": [
            "You have only one furniture search."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Restless_Rumors_of_a_Residential_Recluse",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-877/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "ramen",
      "name": "Rotten Report of a Rancid Ramen",
      "short": "Rancid Ramen",
      "location": "Downtown",
      "sideQuest": "Discard two items to obtain Smelly Meat. Selling does not count.",
      "notes": [],
      "endings": [
        {
          "id": "ramen-a",
          "letter": "A",
          "title": "Lab Results (Full)",
          "condition": "Submit both samples",
          "steps": [
            "Complete the discard side quest.",
            "Keep Smelly Meat in your inventory.",
            "Send Vial + Meat to the laboratory."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "ramen-b",
          "letter": "B",
          "title": "Lab Results (Partial)",
          "condition": "Submit only the soup",
          "steps": [
            "At the laboratory, send just the vial of ramen soup."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Rotten_Report_of_a_Rancid_Ramen",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-129/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "sailors",
      "name": "Sorrowful Saga of the Moonlight Sailors",
      "short": "Moonlight Sailors",
      "location": "Seaside",
      "sideQuest": "Discard two items; in Timeline B this gives a Torch.",
      "notes": [
        "A and B require Timeline A. Timeline B always concludes with C."
      ],
      "endings": [
        {
          "id": "sailors-a",
          "letter": "A",
          "title": "Fishing Season’s End",
          "condition": "Timeline A; sabotage the hunt",
          "steps": [
            "Choose Timeline A.",
            "Complete the discard side quest and finish the mystery."
          ],
          "timeline": "A",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "sailors-b",
          "letter": "B",
          "title": "Real Catch",
          "condition": "Timeline A; leave preparations intact",
          "steps": [
            "Choose Timeline A.",
            "Finish without completing the side quest."
          ],
          "timeline": "A",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "sailors-c",
          "letter": "C",
          "title": "Burning Coast",
          "condition": "Timeline B confrontation",
          "steps": [
            "Choose Timeline B.",
            "Throw the side-quest Torch at Seeping Apostle, or defeat it in combat."
          ],
          "timeline": "B",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Sorrowful_Saga_of_the_Moonlight_Sailors",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://gamelifeme.com/world-of-horror/post-307/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "teacher",
      "name": "Tragic Tale of the Thaumaturgy Teacher",
      "short": "Thaumaturgy Teacher",
      "location": "School",
      "sideQuest": "Investigate Downtown twice. Complete this before the final school encounter for Ending A.",
      "notes": [
        "Gore-Covered Student is followed immediately by Shiokawa School. Use the special Attack the Teacher action during the school encounter."
      ],
      "endings": [
        {
          "id": "teacher-a",
          "letter": "A",
          "title": "Saved by the Bell",
          "condition": "Complete the side quest",
          "steps": [
            "Investigate Downtown twice to complete the side quest.",
            "Defeat Gore-Covered Student at the final classroom.",
            "Defeat Shiokawa School using the special Attack the Teacher action."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "teacher-b",
          "letter": "B",
          "title": "Diabolical Detention",
          "condition": "Skip the side quest",
          "steps": [
            "Leave the Downtown side quest incomplete.",
            "Defeat Gore-Covered Student, then Shiokawa School; use the special Attack the Teacher action."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150",
        "https://steamcommunity.com/app/913740/discussions/0/3949154954324217606/",
        "https://gamelifeme.com/world-of-horror/post-820/"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "vigil",
      "name": "Vicious Verses of A Violent Vigil",
      "short": "Violent Vigil",
      "location": "Mansion",
      "sideQuest": "No side quest. Get Vigil Pamphlet and follow its timed instructions.",
      "notes": [
        "Leave inventory space: storage is unavailable during this mystery.",
        "At 2am follow your actual pamphlet: feed the plant OR burn the envelope.",
        "The 11pm food/fireplace task is optional. The 2am instruction and copied symbol determine access to A and B."
      ],
      "endings": [
        {
          "id": "vigil-a",
          "letter": "A",
          "title": "New Dawn",
          "condition": "Copy symbol; protect both guests",
          "steps": [
            "At 10pm, talk to a guest for Vigil Pamphlet, perform its bow/clap sequence in the bedroom, and copy the foot tattoo.",
            "At 2am, follow the instruction in your actual pamphlet: feed the plant or burn the envelope.",
            "At the finale, carve the symbol and defeat Horrible Old Man without sacrificing guests."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "vigil-b",
          "letter": "B",
          "title": "Soaked in Blood",
          "condition": "Copy symbol; sacrifice exactly one",
          "steps": [
            "Prepare as for New Dawn: get the pamphlet, perform the 10pm ritual, copy the tattoo, and follow the 2am instruction.",
            "At the finale, carve the symbol to begin combat.",
            "Sacrifice exactly one guest during combat, then defeat Horrible Old Man."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "vigil-c",
          "letter": "C",
          "title": "Death, Cheated",
          "condition": "Pay the ritual’s price",
          "steps": [
            "At dawn sacrifice the guests instead of carving the symbol.",
            "Conclude the ritual."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [
            "Sacrificing both guests during the boss fight also leads here."
          ],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Vicious_Verses_of_A_Violent_Vigil",
        "https://gamelifeme.com/world-of-horror/post-542/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    },
    {
      "id": "ward",
      "name": "Worrying Write-Up Of A Wordless Ward",
      "short": "Wordless Ward",
      "location": "Hospital",
      "sideQuest": "No side quest. The package changes the boss’s damage, not the ending.",
      "notes": [
        "Storing the Curious Package prevents delivery and changes the encounter.",
        "Requires Extended D, unlocked by Painted Hospital after five wins. Older mystery guides incorrectly say four."
      ],
      "endings": [
        {
          "id": "ward-a",
          "letter": "A",
          "title": "Horror Ward",
          "condition": "Defeat your double",
          "steps": [
            "Visit your classmate across the hospital nights.",
            "Defeat Your Friend in the final encounter."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        },
        {
          "id": "ward-b",
          "letter": "B",
          "title": "Successful Surgery",
          "condition": "Use the special escape action",
          "steps": [
            "Reach the final encounter.",
            "Select This Is Too Much."
          ],
          "timeline": "Any",
          "reward": "",
          "warnings": [],
          "requires": [],
          "achievements": [],
          "fatal": false,
          "status": "Reference documented"
        }
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Worrying_Write-Up_Of_A_Wordless_Ward",
        "https://gamelifeme.com/world-of-horror/post-311/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2139292150"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with published mystery walkthroughs",
        "inGameTested": false
      }
    }
  ],
  "achievements": [
    {
      "id": "chain-smoker",
      "name": "Chain Smoker",
      "requirement": "At any point in the game, have 30 cigarettes in your inventory",
      "reward": "Foreign Cigarettes item",
      "grid": [
        1,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Chain_Smoker",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Haru starts with cigarettes. Obtain enough packs and use them to add their cigarettes to the counter."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "junior-priest",
      "name": "Junior Priest",
      "requirement": "Purify two cursed places in a single playthrough",
      "reward": "Monument location",
      "grid": [
        1,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Junior_Priest",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Carry a Holy Candle and use purification options in random events. Purify twice in the same run."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "paranoia-agent",
      "name": "Paranoia Agent",
      "requirement": "Defeat an enemy with a Baseball Bat",
      "reward": "Flare Gun item",
      "grid": [
        1,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Paranoia_Agent",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "peeping-tom",
      "name": "Peeping Tom",
      "requirement": "Discover a hole in the painting",
      "reward": "Glass Eye item",
      "grid": [
        1,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Peeping_Tom",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "At the Fear Festival inn, click the painting in your room, then inspect the hole."
      ],
      "related": [
        "festival"
      ],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "perfect-disguise",
      "name": "Perfect Disguise",
      "requirement": "Enter the overgrown factory wearing Ritual Robe and Karukosa mask",
      "reward": "Midasu Touch spell",
      "grid": [
        1,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Perfect_Disguise",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Wear both items when entering the festival factory. Investigating the inn painting opens a route to the innkeeper and his mask."
      ],
      "related": [
        "festival"
      ],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "frequent-buyer",
      "name": "Frequent Buyer",
      "requirement": "Shop for items ten times in a single run",
      "reward": "Dog Treats item",
      "grid": [
        1,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Frequent_Buyer",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Entering the shop counts; ten purchases are unnecessary."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "lightburn",
      "name": "Lightburn",
      "requirement": "Equip two sources of light at the same time (Torch and Flashlight)",
      "reward": "Heavy Duty Flashlight",
      "grid": [
        1,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Lightburn",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "In Timeline B, discard two items during Moonlight Sailors for a Torch. Equip it alongside a Flashlight."
      ],
      "related": [
        "sailors"
      ],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "otherworldly-thirst",
      "name": "Otherworldly Thirst",
      "requirement": "Drink the blood of a forgotten beast and survive",
      "reward": "Yashiro character",
      "grid": [
        1,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Otherwordly_Thirst",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Complete Arms in Timeline A with its side quest for a Tiny Key. Use it at the School Trophy Case for a Goblet, then fill it in the Upper Kingdom and drink. An ordinary Bottle of Blood is lethal."
      ],
      "related": [
        "arms"
      ],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "junior-scout",
      "name": "Junior Scout",
      "requirement": "Investigate 20 locations with a Compass equipped",
      "reward": "Map item",
      "grid": [
        2,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Junior_Scout",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "house-of-paper",
      "name": "House of Paper",
      "requirement": "As Miku, take a hostage while wearing the Tokyo outfit",
      "reward": "Extra Ammo item",
      "grid": [
        2,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#House_of_Paper",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Select Miku’s Tokyo outfit, then intimidate a Schoolyard student into joining you."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "this-is-for-my-friends",
      "name": "This Is For My Friends",
      "requirement": "As Aiko, defeat the Mad Janitor",
      "reward": "Ikumi ally",
      "grid": [
        2,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#This_Is_For_My_Friends",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Play Aiko and defeat the Mad Janitor in direct combat."
      ],
      "related": [
        "mermaids"
      ],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "wait-for-it",
      "name": "Wait For It",
      "requirement": "During combat, prepare to strike but don't attack that turn",
      "reward": "Pocket Knife item",
      "grid": [
        2,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Wait_For_It",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Queue only Prepare Attack, then end the round without attacking."
      ],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "team-kill",
      "name": "Team Kill",
      "requirement": "Backstab a follower",
      "reward": "Ashen Contract spell",
      "grid": [
        2,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Team_Kill",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "With Paranoia and an ally, use the ally’s Let Go action while the Kill indication is active."
      ],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "say-hello",
      "name": "Say Hello",
      "requirement": "Meet your other neighbor",
      "reward": "Spooky Sweater outfit",
      "grid": [
        2,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Say_Hello",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reward name differs between references",
      "tips": [
        "Leave the home screen idle and return to the game; watch for the other neighbor."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      },
      "notes": [
        "The wiki calls the outfit Spooky Sweater; the older Steam guide calls it Bloody Sweater. The wiki reward name is retained."
      ]
    },
    {
      "id": "junior-librarian",
      "name": "Junior Librarian",
      "requirement": "Discard three books in one playthrough",
      "reward": "Knight-Errant backstory",
      "grid": [
        2,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Junior_Librarian",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Use Discard on three book items during one run. Selling them does not count."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "we-don-t-need-eyes",
      "name": "We Don't Need Eyes",
      "requirement": "Destroy your eye and open the third one",
      "reward": "Ygothaeg old god",
      "grid": [
        2,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#We_Don’t_Need_Eyes",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Use a Glass Eye, then cast Third Eye. Glass Eye is unlocked by Peeping Tom."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "true-idol",
      "name": "True Idol",
      "requirement": "At any point in the game, have 4 followers",
      "reward": "Seal of Savvesh spell",
      "grid": [
        3,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#True_Idol",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "classy-ritual",
      "name": "Classy Ritual",
      "requirement": "Sacrifice your ally with a Ritual Dagger equipped",
      "reward": "Tome of Rot item",
      "grid": [
        3,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Classy_Ritual",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Carry a light source and an ally into Household Hell. Equip Ritual Dagger before sacrificing the ally to Oetaru."
      ],
      "related": [
        "household"
      ],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "peeking-tom",
      "name": "Peeking Tom",
      "requirement": "Meet a school wraith haunting the corridor",
      "reward": "Seal of Bram'El spell",
      "grid": [
        3,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Peeking_Tom",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "During School Scissors, select Peek Outside and slide the door all the way open."
      ],
      "related": [
        "scissors"
      ],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "awoo",
      "name": "Awoo",
      "requirement": "Call Junko (while at Home, watch TV and dial 56709 into the nearby phone)",
      "reward": "Thread of Fate spell",
      "grid": [
        3,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Awoo",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "At home, use the telephone and dial 56709."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "paid-in-blood",
      "name": "Paid in Blood",
      "requirement": "Have your ally die during a combat encounter",
      "reward": "Ryuichi ally",
      "grid": [
        3,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Paid_in_Blood",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "exorcism",
      "name": "Exorcism",
      "requirement": "Exorcise a ghost",
      "reward": "Pancakes item",
      "grid": [
        3,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Exorcism",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Use the correct five-action bow/clap ritual against a ghost. The sequence is shared within that run; the result reports how many positions were correct, not which ones."
      ],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "never-ending-summer",
      "name": "Never-Ending Summer",
      "requirement": "Change the date and stop the curse",
      "reward": "Monkey Wrench item",
      "grid": [
        3,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Never-Ending_Summer",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Click the calendar to advance it from May to June 1984."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "restless",
      "name": "Restless",
      "requirement": "Complete a playthrough without resting",
      "reward": "Challenges game mode",
      "grid": [
        3,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Restless",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045",
        "https://woh.fandom.com/wiki/Achievement_guide"
      ],
      "status": "Reference documented",
      "tips": [
        "Win without using Rest at Home. Between-mystery baths and the Lighthouse’s rest-a-bit action are permitted."
      ],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "scholar",
      "name": "Scholar",
      "requirement": "Research five spells in a single game",
      "reward": "Army Knife item",
      "grid": [
        4,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Scholar",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Research five spells through the School Library during one run."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "transfer-girl",
      "name": "Transfer Girl",
      "requirement": "Win a playthrough as Kirie Minami.",
      "reward": "Eldritch Amulet item",
      "grid": [
        4,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Transfer_Girl",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "fit-girl",
      "name": "Fit Girl",
      "requirement": "Win a playthrough as Aiko Takahashi.",
      "reward": "Cursed Cartridge item",
      "grid": [
        4,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Fit_Girl",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "thug-survivor",
      "name": "Thug Survivor",
      "requirement": "Win a playthrough as Haru.",
      "reward": "Hirie outfit",
      "grid": [
        4,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Thug_Survivor",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "idol-survivor",
      "name": "Idol Survivor",
      "requirement": "Win a playthrough as Mizuki Hamasaki.",
      "reward": "Private School outfit",
      "grid": [
        4,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Idol_Survivor",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "reporter-survivor",
      "name": "Reporter Survivor",
      "requirement": "Win a playthrough as Kouji Tagawa.",
      "reward": "Samurai outfit",
      "grid": [
        4,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Reporter_Survivor",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "lungful-of-air",
      "name": "Lungful of Air",
      "requirement": "Complete the Cold Turkey challenge",
      "reward": "Brick item",
      "grid": [
        4,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Lungful_of_Air",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Challenges",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "grounded-forever",
      "name": "Grounded Forever",
      "requirement": "Complete the But Dad!! challenge",
      "reward": "Brain Worms spell",
      "grid": [
        4,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Grounded_Forever",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Challenges",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "student-survivor",
      "name": "Student Survivor",
      "requirement": "Win a playthrough as Mimi.",
      "reward": "Tracksuit outfit",
      "grid": [
        5,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Student_Survivor",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reward name differs between references",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      },
      "notes": [
        "The wiki lists Tracksuit. The Steam guide uses an older, uncertain Samurai reward name."
      ]
    },
    {
      "id": "chaos-survivor",
      "name": "Chaos Survivor",
      "requirement": "Win a playthrough as Miku.",
      "reward": "Fuel item",
      "grid": [
        5,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Chaos_Survivor",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "bad-luck",
      "name": "Bad Luck",
      "requirement": "Roll a 1 during a stat check",
      "reward": "Hermit ally",
      "grid": [
        5,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Bad_Luck",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "from-the-brink",
      "name": "From the Brink",
      "requirement": "Defeat an Old God with over 90% Doom",
      "reward": "Bone Saw item",
      "grid": [
        5,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#From_the_Brink",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "need-no-education",
      "name": "Need No Education",
      "requirement": "Burn down the school building",
      "reward": "Leather outfit",
      "grid": [
        5,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Need_No_Education",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "During Mad Janitor combat, use Topple a Lamp. This changes later School mysteries."
      ],
      "related": [
        "mermaids",
        "cape",
        "scissors"
      ],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "boop",
      "name": "Boop",
      "requirement": "Surprise the dog",
      "reward": "Innocent Student outfit",
      "grid": [
        5,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Boop",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Click the shopkeeper dog’s nose while shopping."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "my-dear-ghost",
      "name": "My Dear Ghost",
      "requirement": "Complete the Ghastly Presence challenge",
      "reward": "Insomnia status",
      "grid": [
        5,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#My_Dear_Ghost",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Challenges",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "most-popular-idol",
      "name": "Most Popular Idol",
      "requirement": "Complete the Ghost Town challenge",
      "reward": "Dislocated Shoulder injury",
      "grid": [
        5,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Most_Popular_Idol",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Challenges",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "world-saved-i",
      "name": "World Saved I",
      "requirement": "Win your first playthrough",
      "reward": "Endless Mode",
      "grid": [
        6,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#World_Saved_I",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "world-saved-ii",
      "name": "World Saved II",
      "requirement": "Win your second playthrough",
      "reward": "Mimi",
      "grid": [
        6,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#World_Saved_II",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "world-saved-iii",
      "name": "World Saved III",
      "requirement": "Win your third playthrough",
      "reward": "Extended A card pack",
      "grid": [
        6,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#World_Saved_III",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "world-saved-iv",
      "name": "World Saved IV",
      "requirement": "Win your fourth playthrough",
      "reward": "Extended B card pack",
      "grid": [
        6,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#World_Saved_IV",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "world-doomed-i",
      "name": "World Doomed I",
      "requirement": "Lose your playthrough due to Reason loss",
      "reward": "Pain Medication item",
      "grid": [
        6,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#World_Doomed_I",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "world-doomed-ii",
      "name": "World Doomed II",
      "requirement": "Lose your playthrough due to Stamina loss",
      "reward": "Experimental Drug item",
      "grid": [
        6,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#World_Doomed_II",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "painted-hospital",
      "name": "Painted Hospital",
      "requirement": "Win your fifth playthrough",
      "reward": "Extended D card pack",
      "grid": [
        6,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Painted_Hospital",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "onyx-medallion",
      "name": "Onyx Medallion",
      "requirement": "Gather five curses",
      "reward": "Ayaka character",
      "grid": [
        6,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Onyx_Medallion",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Hold five curses simultaneously. Witch’s Tree can supply some of them; other curses depend on events."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "world-doomed-iii",
      "name": "World Doomed III",
      "requirement": "Lose your playthrough due to Doom",
      "reward": "Gruesome Totem item",
      "grid": [
        7,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#World_Doomed_III",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-i",
      "name": "Eldritch Backstory I",
      "requirement": "Win a playthrough using World of Horror backstory",
      "reward": "Medical History backstory",
      "grid": [
        7,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_I",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-ii",
      "name": "Eldritch Backstory II",
      "requirement": "Win a playthrough using Medical History backstory",
      "reward": "Hunted by the Cult backstory",
      "grid": [
        7,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_II",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-iii",
      "name": "Eldritch Backstory III",
      "requirement": "Win a playthrough using Hunted by the Cult backstory",
      "reward": "The Seventh Curse backstory (called Inheritance in the wiki)",
      "grid": [
        7,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_III",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-iv",
      "name": "Eldritch Backstory IV",
      "requirement": "Win using The Seventh Curse backstory (formerly Inheritance).",
      "reward": "Ill-Fated backstory",
      "grid": [
        7,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_IV",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-v",
      "name": "Eldritch Backstory V",
      "requirement": "Win a playthrough using Ill-Fated backstory",
      "reward": "World of Horror Extended C",
      "grid": [
        7,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_V",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "club-member",
      "name": "Club Member",
      "requirement": "Join the club",
      "reward": "Toshiaki character",
      "grid": [
        7,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Club_Member",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Make a fourth purchase at the History Club. It ends the run and unlocks Toshiaki."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-vi",
      "name": "Eldritch Backstory VI",
      "requirement": "Win a playthrough using Knight Errant backstory",
      "reward": "Scars background",
      "grid": [
        7,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_VI",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "soft-side",
      "name": "Soft Side",
      "requirement": "Buy and return an expensive drug",
      "reward": "Miku character",
      "grid": [
        8,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Soft_Side",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Defeat the Rioter for a Prescription, redeem it at the Pharmacy, then return the resulting drug to the Illegal Den."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "blood-deal",
      "name": "Blood Deal",
      "requirement": "Feed an Outer Entity",
      "reward": "Camp Dog ally",
      "grid": [
        8,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Blood_Deal",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Use the Monument’s Stamina-for-Doom exchange after unlocking it."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "shiokawa-history-i",
      "name": "Shiokawa History I",
      "requirement": "Unlock 15 achievements",
      "reward": "City History option",
      "grid": [
        8,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Shiokawa_History_I",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "shiokawa-history-ii",
      "name": "Shiokawa History II",
      "requirement": "Unlock 20 achievements",
      "reward": "Shop (Occult) location",
      "grid": [
        8,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Shiokawa_History_II",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "shiokawa-history-iii",
      "name": "Shiokawa History III",
      "requirement": "Unlock 25 achievements",
      "reward": "Illegal Den location",
      "grid": [
        8,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Shiokawa_History_III",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "shiokawa-history-iv",
      "name": "Shiokawa History IV",
      "requirement": "Unlock 30 achievements",
      "reward": "Witch's Tree location",
      "grid": [
        8,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Shiokawa_History_IV",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "shiokawa-history-v",
      "name": "Shiokawa History V",
      "requirement": "Unlock 40 achievements",
      "reward": "School Nurse location",
      "grid": [
        8,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Shiokawa_History_V",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "shiokawa-history-vi",
      "name": "Shiokawa History VI",
      "requirement": "Unlock 50 achievements",
      "reward": "History Club location",
      "grid": [
        8,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Shiokawa_History_VI",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "true-despair",
      "name": "True Despair",
      "requirement": "Win a playthrough on Hard difficulty",
      "reward": "Small Candle item",
      "grid": [
        9,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#True_Despair",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "The difficulty called Hard in some descriptions is True Believer."
      ],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "final-stand-i",
      "name": "Final Stand I",
      "requirement": "Reach turn 30 in Endless Mode",
      "reward": "Shadow Shroud spell",
      "grid": [
        9,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Final_Stand_I",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Challenges",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "final-stand-ii",
      "name": "Final Stand II",
      "requirement": "Reach turn 40 in Endless Mode",
      "reward": "Ancestral Strength spell",
      "grid": [
        9,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Final_Stand_II",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Challenges",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "final-stand-iii",
      "name": "Final Stand III",
      "requirement": "Reach turn 50 in Endless Mode",
      "reward": "Hunting Rifle item",
      "grid": [
        9,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Final_Stand_III",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Challenges",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "mira",
      "name": "Mira",
      "requirement": "Solve the Blue Gem riddle",
      "reward": "Attack Dog ally",
      "grid": [
        9,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Mira",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Carry Blue Gem through Lighthouse Rumor at the Seaside, then Empty Corridor at the School, then investigate the Forest. Discount items can yield the gem. This ends your run."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "something-evil",
      "name": "Something Evil",
      "requirement": "Meet and defeat Something Evil",
      "reward": "Witness Curse ritual",
      "grid": [
        9,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Something_Evil",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Raise the Something Evil counter through its events. Once active, resting can also increase it. In its encounter, sacrifice resources until the finishing action appears."
      ],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "true-anarchy",
      "name": "True Anarchy",
      "requirement": "Complete the Parole Violation challenge",
      "reward": "Arm Sling item",
      "grid": [
        9,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#True_Anarchy",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Challenges",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "hail-to-the-king",
      "name": "Hail to the King",
      "requirement": "As Moriko, defeat an enemy with a working chainsaw",
      "reward": "Herald Old God",
      "grid": [
        9,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Hail_to_the_King",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "As Moriko, bring a light source to Painting’s workshed to obtain the unpowered Chainsaw. Combine it with Fuel and defeat an enemy."
      ],
      "related": [
        "painting"
      ],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "good-old-times",
      "name": "Good Old Times",
      "requirement": "Equip Carpenter Hammer with both Expel Evil and Regeneration learned",
      "reward": "Swollen Joint injury",
      "grid": [
        10,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Good_Old_Times",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Equip Carpenter Hammer while knowing both Expel Evil and Regeneration."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "primum-non-nocere",
      "name": "Primum Non Nocere",
      "requirement": "Defeat Dream Devourer without killing a single patient",
      "reward": "Maria ally",
      "grid": [
        10,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Primum_Non_Nocere",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Take Coma’s Village side quest, use Dust of Seeing, and defeat Dream Devourer without using Unplug Life Support."
      ],
      "related": [
        "coma"
      ],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "sweater-girl",
      "name": "Sweater Girl",
      "requirement": "Find the missing girl",
      "reward": "Moriko",
      "grid": [
        10,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Sweater_Girl",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Enable Extended B, watch the missing-girl report on your home TV, then investigate the Forest with Outdoorsman."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-vii",
      "name": "Eldritch Backstory VII",
      "requirement": "Win a playthrough using Scars backstory",
      "reward": "Curious Birthmark backstory",
      "grid": [
        10,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_VII",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-viii",
      "name": "Eldritch Backstory VIII",
      "requirement": "Win a playthrough using Curious Birthmark backstory",
      "reward": "Eldritch Parasite backstory",
      "grid": [
        10,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_VIII",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-ix",
      "name": "Eldritch Backstory IX",
      "requirement": "Win a playthrough using Eldritch Parasite backstory",
      "reward": "Exquisite Taste backstory",
      "grid": [
        10,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_IX",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-x",
      "name": "Eldritch Backstory X",
      "requirement": "Win a playthrough using Exquisite Taste backstory",
      "reward": "Fatalist backstory",
      "grid": [
        10,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_X",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "eldritch-backstory-xxx",
      "name": "Eldritch Backstory XXX",
      "requirement": "Win a playthrough using Fatalist backstory",
      "reward": "Uchida ally",
      "grid": [
        10,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Eldritch_Backstory_XXX",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Backstories",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "real-nightmare",
      "name": "Real Nightmare",
      "requirement": "Encounter three DREAM enemies in one playthrough",
      "reward": "Ktu-Rufu Old God",
      "grid": [
        1,
        1
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Real_Nightmare",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045",
        "https://worldofhorror.wiki.gg/wiki/Achievements",
        "https://www.reddit.com/r/WorldofHorror/comments/12pz6tj/"
      ],
      "status": "Encounter / defeat wording differs",
      "tips": [
        "Encounter three DREAM enemies in one run. Repeated encounters count: investigate the Forest for Dream Eater or Dream Salesman, or find Dream Devourer through Coma’s Dust of Seeing route."
      ],
      "related": [
        "coma"
      ],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      },
      "notes": [
        "The wiki says encounter, while the Steam guide says defeat. You do not need three different DREAM species. Defeating the three encounters is the conservative route."
      ]
    },
    {
      "id": "kick-box-cutter",
      "name": "Kick-box Cutter",
      "requirement": "Deal 10 damage with a single Kick",
      "reward": "Box Cutter",
      "grid": [
        2,
        1
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Kick-box_Cutter",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Stack damage bonuses until a single Kick deals at least 10 damage. Ayaka’s Blood Mania and multiple curses are one route."
      ],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "welcome-to-the-family",
      "name": "Welcome to the Family",
      "requirement": "Let the real JURI in",
      "reward": "Hallucinations status",
      "grid": [
        3,
        1
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Welcome_to_the_Family",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045",
        "https://steamcommunity.com/app/913740/discussions/0/3824161508146439015/?l=koreana",
        "https://woh.fandom.com/wiki/On_The_Run",
        "https://note.com/vast_dill982/n/nd5617bb6a8eb?hl=en"
      ],
      "status": "Reference documented",
      "tips": [
        "As Juri, let the Horror counter reach 100% so it catches her. This triggers the achievement; winning the run is unnecessary. Horror and Doom are separate counters."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "steel-box",
      "name": "Steel Box",
      "requirement": "Break the Blade",
      "reward": "Flashbacks status",
      "grid": [
        4,
        1
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Steel_Box",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045",
        "https://steamcommunity.com/app/913740/discussions/0/3824161508146439015/?l=koreana",
        "https://www.reddit.com/r/WorldofHorror/comments/18a9mk9/"
      ],
      "status": "Reference documented",
      "tips": [
        "Unlock Box Cutter through Kick-box Cutter, then defeat Young Witch at the School to obtain one. Keep it equipped through combat until its blade breaks."
      ],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "can-you-trust-them",
      "name": "Can You Trust Them?",
      "requirement": "Hire two allies in one playthrough and win",
      "reward": "Tainted Violin item",
      "grid": [
        5,
        1
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Can_You_Trust_Them?",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "At the Illegal Den, use Hire an Ally twice, then win that run. This is the method supported by the English achievement guide."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      },
      "notes": [
        "A translated wiki guide describes ordinary followers too. The hire route avoids depending on that disputed interpretation."
      ]
    },
    {
      "id": "h-experimental-therapy",
      "name": "(H)experimental Therapy",
      "requirement": "Complete the Mimi's Little Project challenge",
      "reward": "Holy Glyphs spell",
      "grid": [
        6,
        1
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#(H)experimental_Therapy",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Challenges",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "catch-me-if-you-can",
      "name": "Catch Me If You Can",
      "requirement": "Handcuff the Ultimate Opportunist",
      "reward": "Ghostly Spear spell",
      "grid": [
        7,
        1
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Catch_Me_If_You_Can",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045",
        "https://woh.fandom.com/wiki/Handcuffs"
      ],
      "status": "Reference documented",
      "tips": [
        "Take the free Handcuffs from the Police Station drawer beneath the plant. In the Lighthouse, reduce Takashi-san to 12 HP or less, then use them. Lumpy Officer is another source unless Dog or Pickpocket changes the drop."
      ],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "rain-of-spiders",
      "name": "Rain of Spiders",
      "requirement": "As YASHIRO, complete a TRUE BELIEVER playthrough with CTHAC-ATORASU as the Old God",
      "reward": "Commoner backstory",
      "grid": [
        8,
        1
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Rain_of_Spiders",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "flooded-nails",
      "name": "Flooded Nails",
      "requirement": "Win your sixth playthrough",
      "reward": "Full card pack",
      "grid": [
        11,
        2
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Flooded_Nails",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "unfortunate-accident",
      "name": "Unfortunate Accident",
      "requirement": "Own both baseball bats",
      "reward": "Yumiko character",
      "grid": [
        11,
        3
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Unfortunate_Accident",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Hold both the Wooden Bat from School Scissors and the Baseball Bat from Apartment Stalker."
      ],
      "related": [
        "scissors",
        "arms"
      ],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "spore-infection",
      "name": "Spore Infection",
      "requirement": "Defeat Kinoko Gatherer without any weapon",
      "reward": "Fungal Growth status",
      "grid": [
        11,
        4
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Spore_Infection",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Defeat Kinoko Gatherer with your weapon slot empty."
      ],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "intrusive-thoughts",
      "name": "Intrusive Thoughts",
      "requirement": "Forget five spells in one playthrough",
      "reward": "Protective Carvings spell",
      "grid": [
        11,
        5
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Intrusive_Thoughts",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Learn and forget five spells in a single run."
      ],
      "related": [],
      "category": "Exploration",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "insatiable-lust",
      "name": "Insatiable Lust",
      "requirement": "Defeat a human enemy in one combat round",
      "reward": "Blood Frenzy status",
      "grid": [
        11,
        6
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Insatiable_Lust",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Combat",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "do-something",
      "name": "do something",
      "requirement": "Win your seventh playthrough",
      "reward": "Zhectast old god",
      "grid": [
        11,
        7
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#do_something",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "homerun",
      "name": "Homerun",
      "requirement": "Complete a playthrough with Yumiko",
      "reward": "Eh-Zhal old god",
      "grid": [
        11,
        8
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Homerun",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [],
      "related": [],
      "category": "Survival",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    },
    {
      "id": "dude",
      "name": "Dude",
      "requirement": "Complete all achievements",
      "reward": "Kana",
      "grid": [
        11,
        9
      ],
      "sources": [
        "https://worldofhorror.wiki.gg/wiki/Achievements#Dude",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2003614045"
      ],
      "status": "Reference documented",
      "tips": [
        "Complete the other 95 achievements. Kana is the final character reward."
      ],
      "related": [],
      "category": "Milestones",
      "audit": {
        "date": "2026-10-30",
        "method": "Requirement, reward, grid and available instructions compared with wiki and Steam guide",
        "inGameTested": false
      }
    }
  ],
  "fates": [
    {
      "id": "run-survived",
      "title": "Survived",
      "kind": "Victory",
      "steps": [
        "Win a full playthrough as a character other than Miku. Miku has a separate Rioter victory entry."
      ],
      "related": [],
      "achievements": [
        "world-saved-i"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-rioter",
      "title": "Survived (Rioter)",
      "kind": "Victory",
      "steps": [
        "Win a full playthrough as Miku."
      ],
      "related": [],
      "achievements": [
        "chaos-survivor"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-stamina",
      "title": "Stamina Loss",
      "kind": "Death",
      "steps": [
        "Lose all Stamina. Last Stand allows combat to continue until below −5, or a new encounter begins with Stamina below 1."
      ],
      "related": [],
      "achievements": [
        "world-doomed-ii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-reason",
      "title": "Reason Loss",
      "kind": "Death",
      "steps": [
        "Lose all Reason. Last Stand allows combat to continue until below −5, or a new encounter begins with Reason below 1."
      ],
      "related": [],
      "achievements": [
        "world-doomed-i"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-dream",
      "title": "Just a Dream?",
      "kind": "Doom",
      "steps": [
        "Reach 100% Doom with Ktu-Rufu selected as the Old God. Trigger Doom outside the Downtown dog item Shop to avoid its separate shop ending."
      ],
      "related": [],
      "achievements": [
        "world-doomed-iii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-earth",
      "title": "Earth Devoured",
      "kind": "Doom",
      "steps": [
        "Reach 100% Doom with Ath-Yolazsth selected as the Old God. Trigger Doom outside the Downtown dog item Shop to avoid its separate shop ending."
      ],
      "related": [],
      "achievements": [
        "world-doomed-iii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-mirror",
      "title": "Snatched by Goizo",
      "kind": "Doom",
      "steps": [
        "Reach 100% Doom with Goizo selected as the Old God. Trigger Doom outside the Downtown dog item Shop to avoid its separate shop ending."
      ],
      "related": [],
      "achievements": [
        "world-doomed-iii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-fire",
      "title": "Perished in the Hecatomb",
      "kind": "Doom",
      "steps": [
        "Reach 100% Doom with Ithotu selected as the Old God. Trigger Doom outside the Downtown dog item Shop to avoid its separate shop ending."
      ],
      "related": [],
      "achievements": [
        "world-doomed-iii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-web",
      "title": "Organs Liquefied",
      "kind": "Doom",
      "steps": [
        "Reach 100% Doom with Cthac-Atorasu selected as the Old God. Trigger Doom outside the Downtown dog item Shop to avoid its separate shop ending."
      ],
      "related": [],
      "achievements": [
        "world-doomed-iii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-gaze",
      "title": "Lost in Ygothaeg’s Gaze",
      "kind": "Doom",
      "steps": [
        "Reach 100% Doom with Ygothaeg selected as the Old God. Trigger Doom outside the Downtown dog item Shop to avoid its separate shop ending."
      ],
      "related": [],
      "achievements": [
        "world-doomed-iii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-court",
      "title": "Kidnapped by the Court",
      "kind": "Doom",
      "steps": [
        "Reach 100% Doom with Herald selected as the Old God. Trigger Doom outside the Downtown dog item Shop to avoid its separate shop ending."
      ],
      "related": [],
      "achievements": [
        "world-doomed-iii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-sadness",
      "title": "Inconceivable Sadness",
      "kind": "Doom",
      "steps": [
        "Reach 100% Doom with Eh-Żhal selected as the Old God. Trigger Doom outside the Downtown dog item Shop to avoid its separate shop ending."
      ],
      "related": [],
      "achievements": [
        "world-doomed-iii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-perfect",
      "title": "Swallowed by the Perfect Form",
      "kind": "Doom",
      "steps": [
        "Reach 100% Doom with Zhectast selected as the Old God. Trigger Doom outside the Downtown dog item Shop to avoid its separate shop ending."
      ],
      "related": [],
      "achievements": [
        "world-doomed-iii"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-mouth",
      "title": "Mouth Slit",
      "kind": "Special",
      "steps": [
        "Let Stamina or Reason fall to zero against a Scissor Woman variant in Timeline A. This special ending overrides Last Stand."
      ],
      "related": [
        "scissors-c"
      ],
      "achievements": [],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-otherworld",
      "title": "Lost in the Otherworld",
      "kind": "Special",
      "steps": [
        "Let Stamina or Reason fall to zero against Aka Manto's True Form. This special ending overrides Last Stand."
      ],
      "related": [
        "cape-a"
      ],
      "achievements": [],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-ears",
      "title": "Inner Ear Burst",
      "kind": "Special",
      "steps": [
        "Leave the Oetaru encounter unresolved for three rounds."
      ],
      "related": [
        "household-a",
        "household-b"
      ],
      "achievements": [],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-aliens",
      "title": "Kidnapped by Aliens",
      "kind": "Secret",
      "steps": [
        "Carry Blue Gem through Lighthouse Rumor at Seaside, then Empty Corridor at School, then investigate Forest."
      ],
      "related": [],
      "achievements": [
        "mira"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-cooked",
      "title": "Minced and Cooked",
      "kind": "Secret",
      "steps": [
        "Reach 100% Doom while using the Downtown dog item Shop. Other shops, such as the Hardware Store, do not give this specific ending."
      ],
      "related": [],
      "achievements": [],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-melted",
      "title": "Body Melted",
      "kind": "Secret",
      "steps": [
        "Carry Empty Bottle into Upper Kingdom and fill it with blood.",
        "Drink Bottle (Blood). This differs from the Goblet used for Otherworldly Thirst."
      ],
      "related": [],
      "achievements": [],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-club",
      "title": "Stabbed to Death",
      "kind": "Secret",
      "steps": [
        "Make a fourth purchase at the History Club."
      ],
      "related": [],
      "achievements": [
        "club-member"
      ],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      }
    },
    {
      "id": "run-kaibara",
      "title": "Moved to Kaibara",
      "kind": "Special",
      "steps": [
        "Reach zero Reason during T’Cithura and Kaibara’s Villagers."
      ],
      "related": [
        "flood-c"
      ],
      "achievements": [],
      "sources": [
        "https://woh.fandom.com/wiki/Endings",
        "https://gamelifeme.com/world-of-horror/post-671/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3072007451"
      ],
      "status": "Reference documented",
      "audit": {
        "date": "2026-10-30",
        "method": "Compared with English, Japanese and Russian ending inventories",
        "inGameTested": false
      },
      "notes": [
        "Zero Reason is corroborated by the encyclopedia. A boss page also lists zero Stamina; that alternative has not been independently resolved."
      ]
    }
  ]
};
