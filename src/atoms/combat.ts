import { atom } from "jotai";

export const combatantsAtom = atom({
  monsterData: [
    {
      _id: "65d3bd40f58a00ae3b0d18d5",
      Name: "Aboleth",
      Source: "Monster Manual",
      Type: "Large aberration, lawful evil",
      HP: {
        Value: 135,
        Notes: "(18d10+36)",
      },
      AC: {
        Value: 17,
        Notes: "(natural armor)",
      },
      InitiativeModifier: 0,
      Speed: ["10 ft.", "swim 40 ft."],
      Abilities: {
        Str: 21,
        Dex: 9,
        Con: 15,
        Int: 18,
        Wis: 15,
        Cha: 18,
      },
      DamageVulnerabilities: [],
      DamageResistances: [],
      DamageImmunities: [],
      ConditionImmunities: [],
      Saves: [
        {
          Name: "Con",
          Modifier: 6,
        },
        {
          Name: "Int",
          Modifier: 8,
        },
        {
          Name: "Wis",
          Modifier: 6,
        },
      ],
      Skills: [
        {
          Name: "History",
          Modifier: 12,
        },
        {
          Name: "Perception",
          Modifier: 10,
        },
      ],
      Senses: ["darkvision 120 ft."],
      Languages: ["Deep Speech", "telepathy 120 ft."],
      Challenge: "10",
      Traits: [
        {
          Name: "Amphibious",
          Content: "The aboleth can breathe air and water.",
        },
        {
          Name: "Mucous Cloud",
          Content:
            "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
        },
        {
          Name: "Probing Telepathy",
          Content:
            "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
        },
      ],
      Actions: [
        {
          Name: "Multiattack",
          Content: "The aboleth makes three tentacle attacks.",
        },
        {
          Name: "Tentacle",
          Content:
            "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
        },
        {
          Name: "Tail",
          Content:
            "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
        },
        {
          Name: "Enslave (3/day)",
          Content:
            "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
        },
      ],
      Reactions: [],
      LegendaryActions: [
        {
          Name: "Detect",
          Content: "The aboleth makes a Wisdom (Perception) check.",
        },
        {
          Name: "Tail Swipe",
          Content: "The aboleth makes one tail attack.",
        },
        {
          Name: "Psychic Drain (Costs 2 Actions)",
          Content:
            "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
        },
      ],
      Description:
        "Aboleth\n-\n\nAboleths lair in subterranean lakes or the rocky depths of the ocean, often surrounded by the ruins of an ancient, fallen aboleth city. An aboleth spends most of its existence underwater, surfacing occasionally to treat with visitors or deranged worshipers.\n\nLair Actions\n-\n\nWhen fighting inside its lair, an aboleth can invoke the ambient magic to take lair actions. On initiative count 20 (losing initiative ties), the aboleth takes a lair action to cause one of the following effects:\n\n•The aboleth casts phantasmal force (no components required) on any number of creatures it can see within 60 feet of it. While maintaining concentration on this effect, the aboleth can’t take other lair actions. If a target succeeds on the saving throw or if the effect ends for it, the target is immune to the aboleth’s phantasmal force lair action for the next 24 hours, although such a creature can choose to be affected.\n\n•Pools of water within 90 feet of the aboleth surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 14 Strength saving throw or be pulled up to 20 feet into the water and knocked prone. The aboleth can’t use this lair action again until it has used a different one.\n\n•Water in the aboleth’s lair magically becomes a conduit for the creature’s rage. The aboleth can target any number of creatures it can see in such water within 90 feet of it. A target must succeed on a DC 14 Wisdom saving throw or take 7 (2d6) psychic damage. The aboleth can’t use this lair action again until it has used a different one.\n\nRegional Effects\n-\n\nThe region containing an aboleth’s lair is warped by the creature’s presence, which creates one or more of the following effects:\n\n•Underground surfaces within 1 mile of the aboleth’s lair are slimy and wet and are difficult terrain.\n\n•Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the aboleth that drink such water vomit it within minutes.\n\n•As an action, the aboleth can create an illusory image of itself within 1 mile of the lair. The copy can appear at any location the aboleth has seen before or in any location a creature charmed by the aboleth can currently see. Once created, the image lasts for as long as the aboleth maintains concentration, as if concentrating on a spell. Although the image is intangible, it looks, sounds, and can move like the aboleth. The aboleth can sense, speak, and use telepathy from the image’s position as if present at that position. If the image takes any damage, it disappears.\n\n-\n\nIf the aboleth dies, the first two effects fade over the course of 3d10 days.\n\nBefore the coming of the gods, aboleths lurked in primordial oceans and underground lakes. They reached out with their minds and seized control of the burgeoning life-forms of the mortal realm, making those creatures their slaves. Their dominance made them like gods. Then the true gods appeared, smashing the aboleths’ empire and freeing their slaves.\nAboleths have never forgotten.\n\n**Eternal Memories**. Aboleths have flawless memories. They pass on their knowledge and experience from generation to generation. Thus, the injury of their defeat by the gods remains perfectly preserved in their minds.\n\nAboleths’ minds are treasure troves of ancient lore, recalling moments from prehistory with perfect clarity. They plot patiently and intricately across eons. Few creatures can conceive of the extent of an aboleth’s plan.\n\n**Gods in the Lake**. Aboleths dwell in watery environments, including ocean abysses, deep lakes, and the Elemental Plane of Water. In these domains and the lands that adjoin them, aboleths are like gods, demanding worship and obedience from their subjects. When they consume other creatures, aboleths add the knowledge and experiences of their prey to their eternal memories.\nAboleths use their telepathic powers to read the minds of creatures and know their desires. An aboleth uses this knowledge to gain a creature’s loyalty, promising to fulfill such wants in exchange for obedience. Within its lair, the aboleth can further use its powers to override senses, granting creatures, such as its followers, the illusion of promised rewards.\n\n**Enemies of the Gods**. The aboleths’ fall from power is written in stark clarity on their flawless memories, for aboleths never truly die. If an aboleth’s body is destroyed, its spirit returns to the Elemental Plane of Water, where a new body coalesces for it over days or months.\nUltimately, aboleths dream of overthrowing the gods and regaining control of the world. Aboleths have had untold eons to plot and to prepare their plans for perfect execution.",
      Tier_Id: ["65cba42526f770b151e17f22"],
      Version: "2.5.1",
      ImageURL:
        "https://vignette.wikia.nocookie.net/forgottenrealms/images/5/58/Monster_Manual_5e_-_Aboleth_-p13.jpg/revision/latest?cb=20141109183807",
      Creator: {
        name: "Conflux Creatures",
        Website: "https://www.conflux-art.com/5e-resources",
        Patreon: "https://www.patreon.com/confluxcreatures/posts",
      },
      Tags: [],
    },
    {
      _id: "65d3bd40f58a00ae3b0d18d6",
      Id: "Deva",
      Name: "Deva",
      Path: "",
      Version: "1.8.2",
      Source: "Monster Manual",
      Type: "Medium celestial, lawful good",
      HP: {
        Value: 136,
        Notes: "(16d8+64)",
      },
      AC: {
        Value: 17,
        Notes: "(natural armor)",
      },
      InitiativeModifier: 0,
      Speed: ["30 ft.", "fly 90 ft."],
      Abilities: {
        Str: 18,
        Dex: 18,
        Con: 18,
        Int: 17,
        Wis: 20,
        Cha: 20,
      },
      DamageVulnerabilities: [],
      DamageResistances: [
        "radiant",
        "bludgeoning",
        "piercing",
        "and slashing from nonmagical weapons",
      ],
      DamageImmunities: [],
      ConditionImmunities: ["charmed", "exhaustion", "frightened"],
      Saves: [
        {
          Name: "Wis",
          Modifier: 9,
        },
        {
          Name: "Cha",
          Modifier: 9,
        },
      ],
      Skills: [
        {
          Name: "Insight",
          Modifier: 9,
        },
        {
          Name: "Perception",
          Modifier: 9,
        },
      ],
      Senses: ["darkvision 120 ft."],
      Languages: ["all", "telepathy 120 ft."],
      Challenge: "10",
      Traits: [
        {
          Name: "Angelic Weapons",
          Content:
            "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack).",
        },
        {
          Name: "Innate Spellcasting",
          Content:
            "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components: \nAt will: detect evil and good\n1/day each: commune, raise dead",
        },
        {
          Name: "Magic Resistance",
          Content:
            "The deva has advantage on saving throws against spells and other magical effects.",
        },
      ],
      Actions: [
        {
          Name: "Multiattack",
          Content: "The deva makes two melee attacks.",
        },
        {
          Name: "Mace",
          Content:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage.",
        },
        {
          Name: "Healing Touch (3/Day)",
          Content:
            "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
        },
        {
          Name: "Change Shape",
          Content:
            "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).\nIn a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.",
        },
      ],
      Reactions: [],
      LegendaryActions: [],
      Description: "",
      Tier_Id: ["65cba30a26f770b151e17f20"],
      ImageURL: "https://i.pinimg.com/originals/0b/3a/6c/0b3a6c81b60be6af35458f8409969327.jpg",
      Creator: {
        name: "Wizards of the Coast",
        Website: "https://company.wizards.com/",
      },
      Tags: ["Angel"],
    },
    {
      _id: "65d3bd40f58a00ae3b0d18d7",
      Name: "Planetar",
      Version: "1.8.0",
      Source: "Monster Manual",
      Type: "Large celestial, lawful good",
      HP: {
        Value: 200,
        Notes: "(16d10+112)",
      },
      AC: {
        Value: 19,
        Notes: "(natural armor)",
      },
      InitiativeModifier: 0,
      Speed: ["40 ft.", "fly 120 ft."],
      Abilities: {
        Str: 24,
        Dex: 20,
        Con: 24,
        Int: 19,
        Wis: 22,
        Cha: 25,
      },
      DamageVulnerabilities: [],
      DamageResistances: [
        "radiant",
        "bludgeoning",
        "piercing",
        "and slashing from nonmagical weapons",
      ],
      DamageImmunities: [],
      ConditionImmunities: ["charmed", "exhaustion", "frightened"],
      Saves: [
        {
          Name: "Con",
          Modifier: 12,
        },
        {
          Name: "Wis",
          Modifier: 11,
        },
        {
          Name: "Cha",
          Modifier: 12,
        },
      ],
      Skills: [
        {
          Name: "Perception",
          Modifier: 11,
        },
      ],
      Senses: ["truesight 120 ft."],
      Languages: ["all", "telepathy 120 ft."],
      Challenge: "16",
      Traits: [
        {
          Name: "Angelic Weapons",
          Content:
            "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack).",
        },
        {
          Name: "Divine Awareness",
          Content: "The planetar knows if it hears a lie.",
        },
        {
          Name: "Innate Spellcasting",
          Content:
            "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components: \nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, flame strike, raise dead\n1/day each: commune, control weather, insect plague",
        },
        {
          Name: "Magic Resistance",
          Content:
            "The planetar has advantage on saving throws against spells and other magical effects.",
        },
      ],
      Actions: [
        {
          Name: "Multiattack",
          Content: "The planetar makes two melee attacks.",
        },
        {
          Name: "Greatsword",
          Content:
            "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage.",
        },
        {
          Name: "Healing Touch (4/Day)",
          Content:
            "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
        },
      ],
      Reactions: [],
      LegendaryActions: [],
      Description: "",
      Tier_Id: ["65cba42526f770b151e17f22"],
      ImageURL: "",
      Creator: {
        name: "Wizards of the Coast",
        Website: "https://company.wizards.com/",
      },
      Tags: ["Angel"],
    },
    {
      _id: "65d3bd40f58a00ae3b0d18d8",
      Name: "Solar",
      Version: "1.8.0",
      Source: "Monster Manual",
      Type: "Large celestial, lawful good",
      HP: {
        Value: 243,
        Notes: "(18d10+144)",
      },
      AC: {
        Value: 21,
        Notes: "(natural armor)",
      },
      InitiativeModifier: 0,
      Speed: ["50 ft.", "fly 150 ft."],
      Abilities: {
        Str: 26,
        Dex: 22,
        Con: 26,
        Int: 25,
        Wis: 25,
        Cha: 30,
      },
      DamageVulnerabilities: [],
      DamageResistances: [
        "radiant",
        "bludgeoning",
        "piercing",
        "and slashing from nonmagical weapons",
      ],
      DamageImmunities: ["necrotic", "poison"],
      ConditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
      Saves: [
        {
          Name: "Int",
          Modifier: 14,
        },
        {
          Name: "Wis",
          Modifier: 14,
        },
        {
          Name: "Cha",
          Modifier: 17,
        },
      ],
      Skills: [
        {
          Name: "Perception",
          Modifier: 14,
        },
      ],
      Senses: ["truesight 120 ft."],
      Languages: ["all", "telepathy 120 ft."],
      Challenge: "21",
      Traits: [
        {
          Name: "Angelic Weapons",
          Content:
            "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack).",
        },
        {
          Name: "Divine Awareness",
          Content: "The solar knows if it hears a lie.",
        },
        {
          Name: "Innate Spellcasting",
          Content:
            "The solar's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components: \nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, resurrection\n1/day each: commune, control weather",
        },
        {
          Name: "Magic Resistance",
          Content:
            "The solar has advantage on saving throws against spells and other magical effects.",
        },
      ],
      Actions: [
        {
          Name: "Multiattack",
          Content: "The solar makes two greatsword attacks.",
        },
        {
          Name: "Greatsword",
          Content:
            "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.",
        },
        {
          Name: "Slaying Longbow",
          Content:
            "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.",
        },
        {
          Name: "Flying Sword",
          Content:
            "The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.",
        },
        {
          Name: "Healing Touch (4/Day)",
          Content:
            "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
        },
      ],
      Reactions: [],
      LegendaryActions: [
        {
          Name: "Teleport",
          Content:
            "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see.",
        },
        {
          Name: "Searing Burst (Costs 2 Actions)",
          Content:
            "The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one.",
        },
        {
          Name: "Blinding Gaze (Costs 3 Actions)",
          Content:
            "The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.",
        },
      ],
      Description: "",
      Tier_Id: ["65cba42526f770b151e17f22"],
      ImageURL: "",
      Creator: {
        name: "Wizards of the Coast",
        Website: "https://company.wizards.com/",
      },
      Tags: ["Angel"],
    },
  ],
});

export const viewAtom = atom("main");
export const indexAtom = atom(1.0);
