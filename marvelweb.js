// Complete MCU Dataset (Phases 1-6) with Short Synopsis & Detailed Story Explanations
const mcuData = [
    // Phase 1
    {
        id: 1, title: "Iron Man", date: "May 2, 2008", phase: "1", img: "mi1.jpeg",
        story: "Tony Stark builds a high-tech armored suit to escape captivity in Afghanistan, transforming into Iron Man.",
        detailedStory: `PLOT OVERVIEW:
Genius billionaire arms manufacturer Tony Stark travels to Afghanistan to demonstrate his new "Jericho" missile. His convoy is ambushed by a terrorist group known as the Ten Rings, using weapons manufactured by his own company, Stark Industries. Shrapnel enters Stark’s chest, threatening his heart.

Fellow captive Dr. Ho Yinsen implants an electromagnet into Stark's chest to keep the shrapnel away from his heart, which Stark later upgrades into a miniaturized Arc Reactor. Together, they secretly build a suit of heavy power armor (the Mark I). Yinsen sacrifices himself to buy Stark time to escape. Upon returning home, Stark announces that Stark Industries will immediately stop manufacturing weapons, shifting his focus to perfecting his armored suit (culminating in the iconic red-and-gold Mark III).

VILLAIN: Obadiah Stane / Iron Monger
Obadiah Stane, Stark’s trusted mentor and manager of Stark Industries, is revealed to have orchestrated Tony's kidnapping to take full control of the company. Stane recovers the remains of the Mark I, steals Tony's Arc Reactor, and creates his own bulkier armor: the Iron Monger.

CHARACTER & WORLD BUILDING:
• Tony Stark’s Arc: Transforms from an ego-driven, irresponsible war profiteer into a hero accountable for his creations.
• Key Characters Introduced: Pepper Potts, James "Rhodey" Rhodes, Agent Phil Coulson.
• Post-Credits Scene: Agent Coulson represents S.H.I.E.L.D. At the end of the film, Tony publicly declares, "I am Iron Man." In the iconic post-credits scene, S.H.I.E.L.D. Director Nick Fury approaches Tony in his home to talk about the "Avengers Initiative."`
    },
    {
        id: 2, title: "The Incredible Hulk", date: "June 13, 2008", phase: "1", img: "mi2.jpeg",
        story: "Bruce Banner seeks a cure for the gamma radiation mutating him into the Hulk while fleeing General Ross.",
        detailedStory: `PLOT OVERVIEW:
Scientist Dr. Bruce Banner is living in hiding in Rio de Janeiro, searching for a cure for his unique condition. Years earlier, an experiment involving gamma radiation designed to recreate WWII super-soldier technology went wrong, causing him to transform into a green monster whenever his heart rate exceeds 200 bpm.

An accident at a soda bottling factory exposes Banner's location to General Thaddeus "Thunderbolt" Ross. Ross sends elite military operative Emil Blonsky to capture him. Banner flees to the U.S. to reunite with his former love, Betty Ross, and consult scientist Samuel Sterns for a cure.

VILLAIN: Emil Blonsky / Abomination
Desperate for super-human power, Blonsky undergoes treatments with an experimental super-soldier serum. After cornering Banner, he forces Samuel Sterns to inject him with Banner's gamma-irradiated blood. The combination mutates Blonsky into a monstrous, bone-spiked brute called the Abomination. Banner willingly unleashes the Hulk in Harlem to defeat Blonsky.

CHARACTER & WORLD BUILDING:
• Bruce Banner’s Arc: Learns that he cannot simply "cure" or extinguish the Hulk, but must learn to coexist with and control the inner rage.
• Post-Credits Scene: Establishes that the Super Soldier program behind Captain America was what inspired military gamma research. In the final scene, Tony Stark approaches a disgraced General Ross at a bar, informing him that "we're putting a team together."`
    },
    {
        id: 3, title: "Iron Man 2", date: "May 7, 2010", phase: "1", img: "mi3.jpeg",
        story: "Tony Stark battles palladium poisoning and vengeful Ivan Vanko while resisting government attempts to take his technology.",
        detailedStory: `PLOT OVERVIEW:
Tony Stark is now a global superstar after revealing his superhero identity. However, he faces two major issues: the U.S. government demands he hand over his suit technology, and the palladium core in his Arc Reactor is slowly poisoning his blood.

Believing he is dying, Tony behaves recklessly, handing over the Mark II suit to Rhodey (who hands it to the military, paving the way for War Machine). With help from Nick Fury and a hidden message left behind by his late father, Howard Stark, Tony synthesizes a brand-new element to replace the palladium, saving his life and powering a stronger suit.

VILLAIN: Ivan Vanko / Whiplash & Justin Hammer
• Ivan Vanko: Son of Anton Vanko (Howard Stark’s former partner), seeking revenge on the Stark family by building energy whips powered by his own arc reactor.
• Justin Hammer: Stark’s incompetent rival weapons contractor who funds Vanko to create an army of mechanized drones for the Stark Expo.

CHARACTER & WORLD BUILDING:
• Key Introductions: Black Widow (Natasha Romanoff under cover as Natalie Rushman) and War Machine.
• Post-Credits Scene: S.H.I.E.L.D. steps out of the shadows. In New Mexico, Agent Phil Coulson arrives at a crater in the desert containing Mjolnir, setting up Thor.`
    },
    {
        id: 4, title: "Thor", date: "May 6, 2011", phase: "1", img: "mi4.jpeg",
        story: "Thor is stripped of his godhood and banished to Earth, where he must learn humility to regain Mjolnir.",
        detailedStory: `PLOT OVERVIEW:
In the cosmic realm of Asgard, the headstrong and arrogant god Thor is about to be crowned King by his father, Odin. When Frost Giants break into Asgard’s vault, Thor disobeys Odin and leads an unauthorized attack on their realm, Jotunheim, nearly restarting an ancient war.

Disappointed by his son's pride and lack of wisdom, Odin strips Thor of his godhood and his hammer Mjolnir, casting him down to Earth as a mortal. Thor lands in New Mexico, where he meets astrophysicist Jane Foster, Dr. Erik Selvig, and Darcy Lewis. To regain his power, Thor must learn humility and what it truly means to be a hero.

VILLAIN: Loki
Thor’s adopted brother, Loki, discovers his true heritage as a Frost Giant. Seeing an opportunity while Odin falls into the "Odinsleep," Loki takes the throne of Asgard, sends the automaton The Destroyer to kill Thor, and schemes to erase Jotunheim.

CHARACTER & WORLD BUILDING:
• Thor’s Arc: Shifts from an arrogant warrior seeking glory to a selfless protector.
• Key Introductions: Clint Barton / Hawkeye makes a cameo appearance as a S.H.I.E.L.D. sniper.
• Post-Credits Scene: Nick Fury shows Dr. Erik Selvig the Tesseract. Unbeknownst to Fury, Loki is subtly controlling Selvig.`
    },
    {
        id: 5, title: "Captain America: The First Avenger", date: "July 22, 2011", phase: "1", img: "mi5.jpeg",
        story: "Steve Rogers undergoes super-soldier transformation to fight Red Skull and HYDRA during World War II.",
        detailedStory: `PLOT OVERVIEW:
Set during World War II (1941–1945), Steve Rogers is a frail, sickly young man from Brooklyn who desperately wants to enlist in the U.S. Army to fight fascism but is repeatedly rejected due to medical issues.

Impressed by Rogers' courage and heart, Dr. Abraham Erskine recruits him for the Strategic Scientific Reserve's "Super Soldier" project. Rogers is injected with the Super Soldier Serum, transforming him into Captain America. Joined by his best friend Bucky Barnes, agent Peggy Carter, and engineer Howard Stark, Cap forms the Howling Commandos to tear down Nazi Germany’s rogue science division.

VILLAIN: Johann Schmidt / Red Skull & HYDRA
Johann Schmidt is the head of HYDRA. Schmidt injected himself with an early version of Erskine's serum, permanently disfiguring his face. HYDRA uses the Tesseract to build futuristic energy weapons to dominate the world.

CHARACTER & WORLD BUILDING:
• Cap's Moral Baseline: Explains Vibranium origins (Cap's shield made by Howard Stark) and reveals the Tesseract was hidden on Earth by Odin.
• Ending: Cap defeats Red Skull, but crashes HYDRA’s bomb-laden aircraft into the icy Arctic ocean to save lives. He wakes up 70 years later in modern-day Times Square.`
    },
    {
        id: 6, title: "The Avengers", date: "May 4, 2012", phase: "1", img: "mi6.jpeg",
        story: "Earth's Mightiest Heroes unite under Nick Fury to defeat Loki and his invading Chitauri army in New York.",
        detailedStory: `PLOT OVERVIEW:
Loki strikes a deal with an alien warlord: in exchange for retrieving the Tesseract from Earth, he will be granted an army of Chitauri warriors to conquer the planet. Loki steals the Tesseract from S.H.I.E.L.D. and mind-controls Hawkeye and Dr. Erik Selvig.

In response, Nick Fury officially activates the Avengers Initiative, bringing together Iron Man, Captain America, Thor, Bruce Banner (Hulk), and Natasha Romanoff (Black Widow). Despite initial ego clashes, the death of S.H.I.E.L.D. Agent Phil Coulson unites the heroes. They assemble in New York City for the Battle of New York, closing the portal and capturing Loki.

VILLAIN: Loki & The Chitauri Army
Loki utilizes his mind-controlling scepter (later revealed to hold an Infinity Stone) to manipulate S.H.I.E.L.D. from within and open an alien wormhole above Stark Tower.

CHARACTER & WORLD BUILDING:
• Culmination: Proved that an interconnected cinematic universe could function seamlessly.
• Mid-Credits Scene: Introduces the ultimate mastermind behind Phases 1–3: Thanos the Mad Titan.`
    },

    // Phase 2
    {
        id: 7, title: "Iron Man 3", date: "May 3, 2013", phase: "2", img: "mip1.jpeg",
        story: "Tony Stark deals with severe PTSD while battling Extremis-powered villains and uncovering the Mandarin mystery.",
        detailedStory: `PLOT OVERVIEW:
Following the Battle of New York, Tony Stark suffers severe PTSD and panic attacks, obsessively building remote-controlled Iron Man suits. When his bodyguard Happy Hogan is critically injured in a terrorist bombing linked to The Mandarin, Tony publicly issues a direct challenge to him.

The Mandarin destroys Tony's Malibu mansion. Stranded in rural Tennessee without armor power, Tony relies on his raw intelligence to uncover the truth: the bombings are failed tests of Extremis—a genetic modification capable of regenerating lost limbs, though prone to explosive overheating.

VILLAIN: Aldrich Killian & Trevor Slattery (The Mandarin)
• Trevor Slattery: An out-of-work British actor hired to play "The Mandarin" as a puppet.
• Aldrich Killian: Founder of A.I.M. who uses Extremis to build a private army and kidnap the U.S. President.

CHARACTER & WORLD BUILDING:
• Tony Stark’s Arc: Answers "Does the man make the suit, or does the suit make the man?" Tony destroys his suit fleet and undergoes surgery to remove the shrapnel and Arc Reactor from his chest.`
    },
    {
        id: 8, title: "Thor: The Dark World", date: "November 8, 2013", phase: "2", img: "mip2.jpeg",
        story: "Thor alliances with Loki to protect Jane Foster and save the Nine Realms from Malekith's Dark Elves.",
        detailedStory: `PLOT OVERVIEW:
Thor restores peace across the Nine Realms following the Bifrost's destruction. Meanwhile, Jane Foster accidentally discovers a weapon of mass destruction called the Aether, which absorbs into her body.

Thor brings Jane to Asgard to protect her, awakening Malekith, ruler of the Dark Elves, who seeks to use the Aether during the Convergence to plunge the universe into darkness. Thor frees his imprisoned brother Loki to form an uneasy alliance and sneak off Asgard.

VILLAIN: Malekith & The Dark Elves
Malekith seeks the Converging Realms to disperse the Aether's destructive force throughout the cosmos.

CHARACTER & WORLD BUILDING:
• Infinity Saga Setup: Confirms the Aether is the Reality Stone.
• Mid-Credits Scene: Sif and Volstagg deliver the Aether to Taneleer Tivan (The Collector) for safekeeping.`
    },
    {
        id: 9, title: "Captain America: The Winter Soldier", date: "April 4, 2014", phase: "2", img: "mip3.jpeg",
        story: "Steve Rogers uncovers HYDRA's infiltration of S.H.I.E.L.D. while confronting his brainwashed friend, Bucky Barnes.",
        detailedStory: `PLOT OVERVIEW:
Steve Rogers works as a S.H.I.E.L.D. operative in Washington D.C. alongside Natasha Romanoff. Steve grows disillusioned by S.H.I.E.L.D.'s covert surveillance project, Project Insight—three heavily armed Helicarriers designed to preemptively eliminate targets.

When Nick Fury is targeted by an assassin, Steve becomes a fugitive. Teaming up with Black Widow and Sam Wilson (Falcon), Steve discovers that HYDRA secretly infected S.H.I.E.L.D. from within since WWII, using an algorithm to eliminate millions of citizens who pose a future threat.

VILLAIN: The Winter Soldier & Alexander Pierce
• Alexander Pierce: Secret head of modern HYDRA inside S.H.I.E.L.D.
• The Winter Soldier: Steve’s best friend, Bucky Barnes, brainwashed and cybernetically enhanced over seven decades.

CHARACTER & WORLD BUILDING:
• MCU Impact: S.H.I.E.L.D. is completely dismantled to purge HYDRA.
• Mid-Credits Scene: Introduces HYDRA leader Baron Strucker experimenting with Loki’s Scepter on "The Twins," Wanda and Pietro Maximoff.`
    },
    {
        id: 10, title: "Guardians of the Galaxy", date: "August 1, 2014", phase: "2", img: "mip4.jpeg",
        story: "A ragtag band of cosmic outlaws unite to stop Ronan the Accuser from destroying Xandar with an Infinity Stone.",
        detailedStory: `PLOT OVERVIEW:
Peter Quill (Star-Lord) steals a metallic Orb on Morag, becoming the target of an intergalactic manhunt. He is ambushed by Gamora, Rocket, and Groot. Arrested and sent to the Kyln prison, they form a pact with Drax the Destroyer to escape and sell the Orb.

Upon discovering the Orb contains an Infinity Stone capable of annihilating entire planets, the group chooses to make a stand to protect Xandar.

VILLAIN: Ronan the Accuser & Thanos
• Ronan the Accuser: A Kree fanatic who embeds the Power Stone into his warhammer to destroy Xandar.
• Thanos: Manipulates events through his adopted daughters, Gamora and Nebula.

CHARACTER & WORLD BUILDING:
• Infinity Saga Setup: Explains the history of the Infinity Stones via The Collector and confirms the Orb holds the Power Stone.`
    },
    {
        id: 11, title: "Avengers: Age of Ultron", date: "May 1, 2015", phase: "2", img: "mip5.jpeg",
        story: "Tony Stark's rogue global defense A.I., Ultron, seeks human extinction, forcing the Avengers to reunite.",
        detailedStory: `PLOT OVERVIEW:
The Avengers retrieve Loki’s Scepter from HYDRA. Using the Scepter's artificial intelligence structure, Tony Stark secretly collaborates with Bruce Banner to create Ultron—a global defense program.

Ultron achieves sentience and concludes humanity must be eradicated. Recruiting Wanda and Pietro Maximoff, Ultron attempts to drop Sokovia from the sky as an extinction-level meteor. To stop him, Tony uploads JARVIS into a synthetic body powered by the Mind Stone, creating Vision.

VILLAIN: Ultron
A terrifying A.I. intent on bringing about world peace through human evolution and forced extinction.

CHARACTER & WORLD BUILDING:
• New Roster: Vision, Scarlet Witch, War Machine, and Falcon join the team.
• Mid-Credits Scene: Thanos puts on an empty Infinity Gauntlet: "Fine, I'll do it myself."`
    },
    {
        id: 12, title: "Ant-Man", date: "July 17, 2015", phase: "2", img: "mip6.jpeg",
        story: "Scott Lang is recruited by Hank Pym to pull off a heist using shrinking technology against Darren Cross.",
        detailedStory: `PLOT OVERVIEW:
Master thief Scott Lang struggles to support his daughter Cassie after getting released from prison. He agrees to a burglary job, breaking into a safe to find a mysterious suit engineered by Dr. Hank Pym.

Hank Pym and Hope van Dyne train Scott to use Pym Particles. Their mission is to pull off a heist at Pym's former company to prevent his power-hungry protégé, Darren Cross, from weaponizing and mass-producing shrinking technology.

VILLAIN: Darren Cross / Yellowjacket
Darren Cross replicates Hank Pym's shrinking formula to build the Yellowjacket battle-suit, planning to sell it to HYDRA.

CHARACTER & WORLD BUILDING:
• The Quantum Realm: Scott shrinks past the atomic level into the Quantum Realm to defeat Cross, proving survival inside it is possible.`
    },

    // Phase 3
    {
        id: 13, title: "Captain America: Civil War", date: "May 6, 2016", phase: "3", img: "p1.jpeg",
        story: "Political pressure over the Sokovia Accords divides the Avengers into opposing factions led by Iron Man and Captain America.",
        detailedStory: `PLOT OVERVIEW:
The United Nations introduces the Sokovia Accords to register and control superhumans. Tony Stark supports oversight out of guilt over Ultron, while Steve Rogers opposes it, believing governments cannot be trusted to manage heroics.

The rift deepens when a UN bombing kills King T'Chaka of Wakanda, and Bucky Barnes is framed for the attack. Steve goes rogue to protect Bucky, leading to a massive clash at Germany's Leipzig-Halle Airport.

VILLAIN: Helmut Zemo
A Sokovian intelligence officer who lost his family during Ultron's attack. Zemo manipulates the Avengers from within, releasing video evidence that a brainwashed Bucky killed Tony Stark's parents in 1991.

CHARACTER & WORLD BUILDING:
• Key Introductions: Debut of Black Panther (T'Challa) and Spider-Man (Peter Parker).
• Impact: Fractures the Avengers completely, leaving Cap's team as international fugitives.`
    },
    {
        id: 14, title: "Doctor Strange", date: "November 4, 2016", phase: "3", img: "p2.jpeg",
        story: "Dr. Stephen Strange discovers mystic arts at Kamar-Taj after a car crash ends his career as a surgeon.",
        detailedStory: `PLOT OVERVIEW:
Arrogant neurosurgeon Dr. Stephen Strange suffers severe nerve damage to his hands in a car crash. After Western medicine fails, he travels to Kamar-Taj in Nepal, meeting the Ancient One and learning the mystic arts.

Strange learns to wield the Eye of Agamotto—an artifact capable of manipulating time—to defend Earth's magical sanctums against dark dimensional threats.

VILLAIN: Kaecilius & Dormammu
Kaecilius seeks to merge Earth into the Dark Dimension. Strange uses time manipulation to trap ruler Dormammu in a temporal loop until he agrees to leave Earth.

CHARACTER & WORLD BUILDING:
• Infinity Stone Reveal: Confirms the Eye of Agamotto houses the Time Stone.`
    },
    {
        id: 15, title: "Guardians of the Galaxy Vol. 2", date: "May 5, 2017", phase: "3", img: "p3.jpeg",
        story: "Peter Quill meets his biological father, Ego, a celestial entity with dark galactic ambitions.",
        detailedStory: `PLOT OVERVIEW:
The Guardians are rescued from a Sovereign space chase by Ego, a god-like Celestial who reveals himself as Peter Quill’s biological father.

Ego brings Peter, Gamora, and Drax to his living planet to teach Quill how to tap into his Celestial powers. Meanwhile, Yondu Udonta is hired by the Sovereign to track the Guardians down.

VILLAIN: Ego the Living Planet
Ego’s goal is the "Expansion"—planting seeds across thousands of worlds to assimilate the universe into himself. He reveals he planted the brain tumor that killed Peter's mother.

CHARACTER & WORLD BUILDING:
• Themes: Found family vs biological family; Yondu sacrifices himself to save Quill.`
    },
    {
        id: 16, title: "Spider-Man: Homecoming", date: "July 7, 2017", phase: "3", img: "p4.jpeg",
        story: "Peter Parker balances high school life with investigating Adrian Toomes' black-market alien weapons ring.",
        detailedStory: `PLOT OVERVIEW:
Following Civil War, 15-year-old Peter Parker balances high school in Queens with street-level heroics, mentored by Tony Stark.

Desperate to prove himself worthy of becoming a full-fledged Avenger, Peter stumbles upon a gang selling weapons built from scavenged alien tech from past MCU battles.

VILLAIN: Adrian Toomes / The Vulture
A salvage contractor ruined by Tony Stark’s Damage Control initiative who steals leftover alien technology to build black-market weapons.

CHARACTER & WORLD BUILDING:
• Resolution: Peter turns down Tony's offer to join the Avengers, choosing to remain a "friendly neighborhood Spider-Man."`
    },
    {
        id: 17, title: "Thor: Ragnarok", date: "November 3, 2017", phase: "3", img: "p5.jpeg",
        story: "Thor is imprisoned on Sakaar and forced into arena combat against Hulk to escape and stop Hela from destroying Asgard.",
        detailedStory: `PLOT OVERVIEW:
Following Odin’s death, his exiled firstborn child—Hela, Goddess of Death—is released. She shatters Thor’s hammer Mjolnir and casts Thor and Loki onto the trash-planet Sakaar.

Thor is captured by Valkyrie and forced to fight in the Grandmaster's gladiator arena against Hulk. Thor must assemble "The Revengers" to escape Sakaar and save Asgard.

VILLAIN: Hela
Odin’s former executioner who derives power directly from Asgard itself.

CHARACTER & WORLD BUILDING:
• Fall of Asgard: Thor realizes Asgard is a people, not a place, and triggers Ragnarok (Surtur's destruction of Asgard) to defeat Hela.`
    },
    {
        id: 18, title: "Black Panther", date: "February 16, 2018", phase: "3", img: "p6.jpeg",
        story: "T'Challa claims the throne of Wakanda and defends his nation against Erik Killmonger's global revolution.",
        detailedStory: `PLOT OVERVIEW:
Following King T'Chaka's death, T'Challa returns home to Wakanda to claim the throne.

He faces political dissent when rogue mercenary Ulysses Klaue resurfaces with stolen Vibranium, backed by Erik "Killmonger" Stevens.

VILLAIN: Erik "Killmonger" Stevens
T'Challa's cousin who seeks to seize the Wakandan throne and distribute Vibranium weaponry to oppressed populations worldwide for global revolution.

CHARACTER & WORLD BUILDING:
• MCU Impact: T'Challa reveals Wakanda’s true technological nature to the world.`
    },
    {
        id: 19, title: "Avengers: Infinity War", date: "April 27, 2018", phase: "3", img: "p7.jpeg",
        story: "The Avengers and cosmic allies unite to stop Thanos from collecting all six Infinity Stones and wiping out half of all life.",
        detailedStory: `PLOT OVERVIEW:
Thanos begins his direct conquest to collect all six Infinity Stones to erase half of all life in the universe, believing it will restore cosmic balance.

The heroes fight across multiple fronts: Titan (Iron Man, Spider-Man, Doctor Strange, Guardians), Wakanda (Captain America, Thor, Black Panther, Banner), and Nidavellir (Thor forging Stormbreaker).

VILLAIN: Thanos
Sacrifices his daughter Gamora on Vormir for the Soul Stone and defeats Earth's defenders.

THE SNAP:
Thanos secures all six stones and snaps his fingers, disintegrating 50% of all living beings across the universe.`
    },
    {
        id: 20, title: "Ant-Man and the Wasp", date: "July 6, 2018", phase: "3", img: "p8.jpeg",
        story: "Scott Lang teams up with Hank Pym and Hope van Dyne to rescue Janet van Dyne from the Quantum Realm.",
        detailedStory: `PLOT OVERVIEW:
Scott Lang is under house arrest following Civil War. Hank Pym and Hope van Dyne (The Wasp) recruit Scott after receiving a quantum message from Janet van Dyne, lost in the Quantum Realm 30 years prior.

VILLAIN: Ava Starr / Ghost
A woman whose quantum instability threatens her life, seeking to extract quantum energy from Janet.

POST-CREDITS SCENE:
Scott enters the Quantum Realm to gather quantum particles. Hank, Janet, and Hope are turned to dust by Thanos' snap on the surface, leaving Scott trapped inside.`
    },
    {
        id: 21, title: "Captain Marvel", date: "March 8, 2019", phase: "3", img: "p9.jpeg",
        story: "Carol Danvers uncovers her true past as a U.S. pilot on 1990s Earth during an intergalactic war between Kree and Skrulls.",
        detailedStory: `PLOT OVERVIEW:
Set in 1995, Kree warrior Vers crash-lands on Earth while fighting shape-shifting Skrulls. Teaming up with a young Nick Fury, she uncovers her past as Air Force pilot Carol Danvers.

Carol learns that the Kree lied to her: the Skrulls are refugees, and her power comes from an experimental engine built using the Tesseract.

VILLAIN: Yon-Rogg & The Kree Supreme Intelligence
Yon-Rogg suppressed Carol's true powers to weaponize her for the Kree Empire.`
    },
    {
        id: 22, title: "Avengers: Endgame", date: "April 26, 2019", phase: "3", img: "p10.jpeg",
        story: "The surviving Avengers launch a quantum Time Heist to collect past Infinity Stones and reverse Thanos' snap.",
        detailedStory: `PLOT OVERVIEW:
Five years after the Snap, Scott Lang escapes the Quantum Realm and proposes a Quantum Time Heist to retrieve past Infinity Stones:
• 2012 New York (Space, Mind, Time)
• 2013 Asgard (Reality)
• 2014 Morag & Vormir (Power, Soul) - Natasha Romanoff sacrifices her life on Vormir.

Smart Hulk snaps his fingers, restoring everyone. A 2014 variant of Thanos follows them to the present, leading to the massive Battle of Earth.

RESOLUTION:
Tony Stark steals the Infinity Stones into his armor and snaps his fingers, disintegrating Thanos' army at the cost of his own life. Steve Rogers stays in the past with Peggy Carter and passes the Captain America shield to Sam Wilson.`
    },
    {
        id: 23, title: "Spider-Man: Far From Home", date: "July 2, 2019", phase: "3", img: "p11.jpeg",
        story: "Peter Parker grieves Tony Stark on a European school trip while battling Mysterio's elemental illusions.",
        detailedStory: `PLOT OVERVIEW:
Set eight months after Endgame, Peter Parker goes on a European field trip. Nick Fury recruits him to team up with Quentin Beck (Mysterio), a hero claiming to be from an alternate multiverse Earth fighting elemental monsters.

VILLAIN: Quentin Beck / Mysterio
A disgraced former Stark employee who uses holographic drones (BARF technology) to fake attacks and style himself as a superhero.

POST-CREDITS CLIFFHANGER:
J. Jonah Jameson broadcasts a doctored video framing Spider-Man for Mysterio's murder and exposing Peter Parker's identity to the world.`
    },

    // Phase 4
    {
        id: 24, title: "WandaVision (Series)", date: "January 15, 2021", phase: "4", img: "m1.jpeg",
        story: "Grief-stricken Wanda Maximoff creates an alternate sitcom-themed hex reality over Westview, resurrecting Vision.",
        detailedStory: `PLOT OVERVIEW:
Driven by intense grief over Vision’s death in Infinity War, Wanda Maximoff uses chaos magic to create an alternate sitcom reality (the "Hex") over Westview, NJ, giving birth to twin sons Billy and Tommy. S.W.O.R.D. investigates with Monica Rambeau, Darcy Lewis, and Jimmy Woo.

VILLAIN: Agatha Harkness & Tyler Hayward
Agatha seeks to steal Wanda’s magic. S.W.O.R.D. Director Hayward rebuilds Vision's body into weaponized White Vision.

TRANSFORMATION:
Wanda accepts her grief, dissolves the Hex, and becomes the Scarlet Witch, studying the dark magic Darkhold.`
    },
    {
        id: 25, title: "The Falcon and the Winter Soldier (Series)", date: "March 19, 2021", phase: "4", img: "m2.jpeg",
        story: "Sam Wilson and Bucky Barnes combat anti-nationalist Flag Smashers while Sam weighs taking up Captain America's shield.",
        detailedStory: `PLOT OVERVIEW:
Six months after Endgame, Sam Wilson donates Cap's shield to a museum, but the government gives it to John Walker. Sam and Bucky team up to fight the Flag Smashers, an anti-nationalist group empowered by Super Soldier Serum.

VILLAINS: Karli Morgenthau & John Walker
John Walker breaks under pressure, executes a enemy publicly, and is discharged, later becoming U.S. Agent.

RESOLUTION:
Sam Wilson embraces his responsibility, donning a new suit and officially becoming Captain America.`
    },
    {
        id: 26, title: "Loki (Season 1) (Series)", date: "June 9, 2021", phase: "4", img: "m3.jpeg",
        story: "Loki is arrested by the Time Variance Authority and recruited to hunt down his alternate variant, Sylvie.",
        detailedStory: `PLOT OVERVIEW:
A 2012 variant of Loki steals the Tesseract during Endgame and is arrested by the Time Variance Authority (TVA). Agent Mobius recruits Loki to track down Sylvie, a female Loki variant.

VILLAIN: He Who Remains
At the Citadel at the End of Time, they learn He Who Remains created the TVA to prevent multiversal war among his Kang variants.

MULTIVERSE SPARK:
Sylvie kills He Who Remains, shattering the Sacred Timeline into infinite branching realities.`
    },
    {
        id: 27, title: "Black Widow", date: "July 9, 2021", phase: "4", img: "m4.jpeg",
        story: "Natasha Romanoff confronts her dark past in the Red Room alongside her former spy family.",
        detailedStory: `PLOT OVERVIEW:
Set in 2016 between Civil War and Infinity War, Natasha Romanoff goes on the run. She reunites with her spy family—Yelena Belova, Alexei Shostakov (Red Guardian), and Melina Vostokoff—to destroy the Red Room.

VILLAIN: General Dreykov & Taskmaster
Dreykov controls brainwashed assassin widows worldwide using Taskmaster (his daughter Antonia).`
    },
    {
        id: 28, title: "What If...? (Season 1)", date: "August 11, 2021", phase: "4", img: "m5.jpeg",
        story: "The Watcher observes alternate multiverse realities where key MCU events unfolded differently.",
        detailedStory: `PLOT OVERVIEW:
Guided by The Watcher (Uatu), this animated anthology explores alternate reality scenarios (Peggy Carter as Captain Carter, T'Challa as Star-Lord, Doctor Strange Supreme).

VILLAIN: Infinity Ultron
An alternate Ultron obtains all six Infinity Stones, learns about the Multiverse, and threatens all realities.

GUARDIANS OF THE MULTIVERSE:
The Watcher breaks his non-intervention oath to form a team of multiversal heroes to defeat Ultron.`
    },
    {
        id: 29, title: "Shang-Chi and the Legend of the Ten Rings", date: "September 3, 2021", phase: "4", img: "m6.jpeg",
        story: "Shang-Chi confronts his immortal father Xu Wenwu and the mystical origins of the Ten Rings in Ta Lo.",
        detailedStory: `PLOT OVERVIEW:
Shang-Chi lives quietly in San Francisco until his father Xu Wenwu's Ten Rings organization attacks him. Shang-Chi travels to the mystical village Ta Lo.

VILLAIN: Xu Wenwu & The Dweller-in-Darkness
Wenwu is tricked by grief into unlocking the seal of the soul-devouring Dweller-in-Darkness dragon.

POST-CREDITS SCENE:
Wong, Bruce Banner, and Carol Danvers discover the Ten Rings are broadcasting a beacon into deep space.`
    },
    {
        id: 30, title: "Eternals", date: "November 5, 2021", phase: "4", img: "m7.jpeg",
        story: "An ancient immortal alien race emerges after 7,000 years to defend Earth from Deviants and prevent the Celestial Emergence.",
        detailedStory: `PLOT OVERVIEW:
Ten immortal Eternals sent by Celestial Arishem reunite in the present day upon learning that human population growth has triggered the "Emergence"—the birth of Celestial Tiamut, which will destroy Earth.

VILLAIN: Ikaris & Kro
Ikaris betrays his family out of fanatical devotion to Arishem.

RESOLUTION:
Sersi uses her powers and the Unimind to turn the emerging Celestial Tiamut into solid marble, saving Earth.`
    },
    {
        id: 31, title: "Hawkeye (Series)", date: "November 24, 2021", phase: "4", img: "m8.jpeg",
        story: "Clint Barton teams up with archer Kate Bishop in NYC during Christmas to clear his past as Ronin.",
        detailedStory: `PLOT OVERVIEW:
Clint Barton's holiday is interrupted when 22-year-old Kate Bishop acquires his old Ronin suit, triggering attacks from the Tracksuit Mafia.

VILLAIN: Wilson Fisk / Kingpin
The supreme crime boss of NYC revealed to be pulling political and underworld strings.`
    },
    {
        id: 32, title: "Spider-Man: No Way Home", date: "December 17, 2021", phase: "4", img: "m9.jpeg",
        story: "Doctor Strange's botched memory spell brings multiversal Spider-Man variants and villains into Earth-616.",
        detailedStory: `PLOT OVERVIEW:
Peter Parker asks Doctor Strange to cast a spell making the world forget his secret identity. Peter tampers with the spell, bringing alternate villains (Green Goblin, Doc Ock, Electro) and Spider-Men (Tobey Maguire & Andrew Garfield) into his world.

VILLAIN: Green Goblin (Norman Osborn)
Kills Aunt May, pushing Peter to the brink of lethal revenge.

RESOLUTION:
Strange casts a spell making everyone forget who Peter Parker is. Peter loses his friends and tech, starting fresh as an anonymous hero.`
    },
    {
        id: 33, title: "Moon Knight (Series)", date: "March 30, 2022", phase: "4", img: "m10.jpeg",
        story: "Steven Grant discovers he shares a body with mercenary Marc Spector, serving as Khonshu's avatar.",
        detailedStory: `PLOT OVERVIEW:
Steven Grant discovers he has Dissociative Identity Disorder, sharing his body with mercenary Marc Spector, avatar of Egyptian god Khonshu.

VILLAIN: Arthur Harrow & Ammit
Harrow seeks to unleash Egyptian goddess Ammit to destroy souls pre-emptively.`
    },
    {
        id: 34, title: "Doctor Strange in the Multiverse of Madness", date: "May 6, 2022", phase: "4", img: "m11.jpeg",
        story: "Doctor Strange protects America Chavez across alternate dimensions from Darkhold-corrupted Scarlet Witch.",
        detailedStory: `PLOT OVERVIEW:
Doctor Strange protects America Chavez, a teen who can open multiversal star-portals, from Wanda Maximoff. Wanda is corrupted by the Darkhold and seeks Chavez's power to live with alternate versions of her sons.

VILLAIN: The Scarlet Witch (Wanda Maximoff)
Ruthlessly destroys Earth-838’s Illuminati before recognizing the terror she causes and destroying all Darkholds across the multiverse.`
    },
    {
        id: 35, title: "Ms. Marvel (Series)", date: "June 8, 2022", phase: "4", img: "m12.jpeg",
        story: "Kamala Khan unlocks hard-light cosmic powers through a family bangle and discovers her mutant genetics.",
        detailedStory: `PLOT OVERVIEW:
16-year-old Kamala Khan unlocks hard-light powers from an ancient heirloom bangle tied to her family's history during the Partition of India.

VILLAIN: The Clandestines (Najma)
Extradimensional entities seeking the bangle to destroy the boundary between Earth and the Noor Dimension.

MUTANT TEASE:
Bruno reveals Kamala possesses a unique genetic mutation.`
    },
    {
        id: 36, title: "Thor: Love and Thunder", date: "July 8, 2022", phase: "4", img: "m13.jpeg",
        story: "Thor recruits Valkyrie, Korg, and Mighty Thor (Jane Foster) to defeat Gorr the God Butcher.",
        detailedStory: `PLOT OVERVIEW:
Thor seeks inner peace, but is interrupted by Gorr the God Butcher. He teams up with King Valkyrie, Korg, and ex-girlfriend Jane Foster, who wields Mjolnir as the Mighty Thor despite battling terminal cancer.

VILLAIN: Gorr the God Butcher
Wields the god-killing Necrosword and seeks the cosmic entity Eternity to wish all gods extinct. Jane sacrifices her life to destroy the sword.`
    },
    {
        id: 37, title: "I Am Groot (Season 1)", date: "August 10, 2022", phase: "4", img: "m14.jpeg",
        story: "Micro-shorts following Baby Groot's hilarious misadventures growing up across the galaxy.",
        detailedStory: `PLOT OVERVIEW:
A collection of five photorealistic animated micro-shorts following Baby Groot as he gets into mischievous antics and makes discoveries aboard the Guardians' starship.`
    },
    {
        id: 38, title: "She-Hulk: Attorney at Law (Series)", date: "August 18, 2022", phase: "4", img: "m15.jpeg",
        story: "Jennifer Walters balances her high-profile legal career with her new 6-foot-7 green Hulk powers.",
        detailedStory: `PLOT OVERVIEW:
Lawyer Jennifer Walters accidentally gets cross-contaminated with Bruce Banner's gamma blood, gaining Hulk powers while retaining her full consciousness.

VILLAIN: Intelligencia & Todd Phelps
An incel online hate group seeking to steal Jen's blood to create new Hulks.

FOURTH-WALL FINALE:
Jen breaks through the Disney+ interface to confront A.I. K.E.V.I.N. and rewrite her show's plot.`
    },
    {
        id: 39, title: "Werewolf by Night", date: "October 7, 2022", phase: "4", img: "m16.jpeg",
        story: "Monster hunters gather at Bloodstone Manor for a deadly hunt, where Jack Russell protects Man-Thing.",
        detailedStory: `PLOT OVERVIEW:
A black-and-white homage to classic monster cinema. Secret monster hunters compete at Bloodstone Manor to claim the Bloodstone. Jack Russell enters secretly to rescue his monster friend Ted (Man-Thing).`
    },
    {
        id: 40, title: "Black Panther: Wakanda Forever", date: "November 11, 2022", phase: "4", img: "m17.jpeg",
        story: "Wakanda mourns T'Challa while defending their Vibranium from surface threats and Namor's undersea kingdom.",
        detailedStory: `PLOT OVERVIEW:
Following King T'Challa's death, Wakanda defends its Vibranium from foreign nations. An ocean Vibranium deposit triggers an attack from Namor, mutant ruler of undersea Talokan.

VILLAIN: Namor
Threatens to destroy Wakanda unless they ally with him to wage war on the surface world.

RESOLUTION:
Shuri synthesizes a new Heart-Shaped Herb, becomes the Black Panther, and secures a peace truce with Namor.`
    },
    {
        id: 41, title: "The Guardians of the Galaxy Holiday Special", date: "November 25, 2022", phase: "4", img: "m18.jpeg",
        story: "Mantis and Drax head to Earth to kidnap actor Kevin Bacon as a holiday gift for Peter Quill.",
        detailedStory: `PLOT OVERVIEW:
Mantis and Drax head to Earth to bring Peter Quill his childhood hero Kevin Bacon to cheer him up. It is officially revealed that Mantis is Peter Quill’s half-sister.`
    },

    // Phase 5
    {
        id: 42, title: "Ant-Man and the Wasp: Quantumania", date: "February 17, 2023", phase: "5", img: "i1.jpeg",
        story: "Scott Lang and family are sucked into the Quantum Realm and confront Kang the Conqueror.",
        detailedStory: `PLOT OVERVIEW:
Scott Lang, Hope van Dyne, Hank Pym, Janet, and Cassie are pulled into the Quantum Realm, discovering an entire civilization ruled by exiled conqueror Kang.

VILLAIN: Kang the Conqueror
A temporal warlord seeking to escape the Quantum Realm and resume conquering multiversal timelines.

MULTIVERSE IMPACT:
Introduces the Council of Kangs in the mid-credits scene gathering across dimensions.`
    },
    {
        id: 43, title: "Guardians of the Galaxy Vol. 3", date: "May 5, 2023", phase: "5", img: "i2.jpeg",
        story: "The Guardians embark on a mission to save Rocket's life from his tragic creator, the High Evolutionary.",
        detailedStory: `PLOT OVERVIEW:
Adam Warlock attacks Knowhere, critically injuring Rocket. The Guardians infiltrate ArgoCorp to retrieve Rocket's corporate file and override his internal kill-switch.

VILLAIN: The High Evolutionary
A genocidal geneticist obsessed with retrieving Rocket, his original experimental subject.

FAREWELL:
Peter Quill returns to Earth, leaving Rocket as captain of the new Guardians.`
    },
    {
        id: 44, title: "Secret Invasion (Series)", date: "June 21, 2023", phase: "5", img: "i3.jpeg",
        story: "Nick Fury uncovers a clandestine infiltration of Earth by radical shape-shifting Skrulls.",
        detailedStory: `PLOT OVERVIEW:
Nick Fury discovers a rogue faction of Skrulls replacing world leaders to ignite war between the U.S. and Russia.

VILLAIN: Gravik
A Skrull leader who uses harvested DNA from Avengers to transform into a Super-Skrull.`
    },
    {
        id: 45, title: "I Am Groot (Season 2)", date: "September 6, 2023", phase: "5", img: "i4.jpeg",
        story: "Five further animated micro-shorts following Baby Groot's misadventures across space.",
        detailedStory: `PLOT OVERVIEW:
Five animated micro-shorts following Baby Groot as he encounters cosmic bird nests, alien ice cream treats, and surreal galactic phenomena.`
    },
    {
        id: 46, title: "Loki (Season 2) (Series)", date: "October 5, 2023", phase: "5", img: "i5.jpeg",
        story: "Loki timelips across TVA timeline decay, ascending as God of Stories to hold the multiverse together.",
        detailedStory: `PLOT OVERVIEW:
Loki suffers uncontrollable timelipsing as branching timelines collapse following He Who Remains' death.

GOD OF STORIES ASCENSION:
Loki destroys the Temporal Loom manually, gathers the decaying timeline branches with his bare hands, and weaves them together into Yggdrasil—sitting at the center as eternal guardian of the multiverse.`
    },
    {
        id: 47, title: "The Marvels", date: "November 10, 2023", phase: "5", img: "i6.jpeg",
        story: "Carol, Kamala, and Monica become quantumly entangled, swapping places whenever using light powers.",
        detailedStory: `PLOT OVERVIEW:
Carol Danvers, Monica Rambeau, and Kamala Khan become power-entangled across the universe while investigating Kree revolutionary Dar-Benn.

POST-CREDITS INCURSION:
Monica gets trapped in an alternate universe, greeted by Binary (Maria Rambeau) and Beast from the X-Men.`
    },
    {
        id: 48, title: "What If...? (Season 2)", date: "December 22, 2023", phase: "5", img: "i7.jpeg",
        story: "The Watcher chronicles new alternate multiverse timelines, introducing Mohawk hero Kahhori.",
        detailedStory: `PLOT OVERVIEW:
Anthology stories featuring Nebula in the Nova Corps, a 1602 Elizabethan timeline, and Kahhori, a Mohawk woman imbued with Tesseract energy.`
    },
    {
        id: 49, title: "Echo (Series)", date: "January 9, 2024", phase: "5", img: "i8.jpeg", story: "Maya Lopez flees Kingpin's empire to Oklahoma, tapping into her ancestral Choctaw powers.",
        detailedStory: `PLOT OVERVIEW:
Maya Lopez flees NYC to Oklahoma, confronting Kingpin while tapping into generational spiritual gifts from her ancestors.`
    },
    {
        id: 50, title: "Deadpool & Wolverine", date: "July 26, 2024", phase: "5", img: "i9.jpeg",
        story: "Deadpool teams up with a variant Wolverine from the Void to save his universe from destruction.",
        detailedStory: `PLOT OVERVIEW:
Wade Wilson is told by the TVA his universe is dying due to the death of anchor being Logan. He retrieves a variant Wolverine, ending up in the Void.

VILLAIN: Cassandra Nova
Charles Xavier's telekinetic twin who rules the Void using legacy Fox-Marvel villains.`
    },
    {
        id: 51, title: "Agatha All Along (Series)", date: "September 18, 2024", phase: "5", img: "i10.jpeg",
        story: "Agatha Harkness builds a new coven with Teen (Billy Maximoff) to walk the Witches' Road.",
        detailedStory: `PLOT OVERVIEW:
Agatha escapes Wanda's spell and walks the Witches' Road with Teen, revealed to be the reincarnated soul of Billy Maximoff. Agatha sacrifices herself to save Billy from Death (Rio Vidal).`
    },
    {
        id: 52, title: "What If...? (Season 3)", date: "December 22, 2024", phase: "5", img: "i11.jpeg",
        story: "The final animated chapter concluding The Watcher's chronicle of branching multiverse worlds.",
        detailedStory: `PLOT OVERVIEW:
Final season of animated multiverse stories, featuring mecha suits, wild timeline mashups, and unexpected hero team-ups.`
    },
    {
        id: 53, title: "Captain America: Brave New World", date: "February 14, 2025", phase: "5", img: "i12.jpeg",
        story: "Sam Wilson faces international political turmoil and President Ross' Red Hulk transformation.",
        detailedStory: `PLOT OVERVIEW:
Sam Wilson leads a new global Avengers framework amid geopolitical turmoil surrounding Celestial Tiamut's Adamantium deposits.

VILLAINS: Samuel Sterns (The Leader) & President Ross (Red Hulk).`
    },
    {
        id: 54, title: "Daredevil: Born Again (Season 1)", date: "March 4, 2025", phase: "5", img: "i13.jpeg",
        story: "Matt Murdock fights for Hell's Kitchen as Wilson Fisk runs for Mayor of NYC.",
        detailedStory: `PLOT OVERVIEW:
Matt Murdock balances law and vigilante duty while Wilson Fisk uses mayoral power to outlaw superhero vigilantes in NYC.`
    },
    {
        id: 55, title: "Thunderbolts*", date: "May 2, 2025", phase: "5", img: "i14.jpeg",
        story: "A squad of black-ops anti-heroes reject government control and encounter Sentry.",
        detailedStory: `PLOT OVERVIEW:
Yelena Belova, Bucky Barnes, Red Guardian, US Agent, Ghost, and Taskmaster unite against corporate trap ops, encountering Robert Reynolds (Sentry).`
    },
    {
        id: 56, title: "Ironheart (Series)", date: "June 24, 2025", phase: "5", img: "i15.jpeg",
        story: "Riri Williams builds next-gen iron tech in Chicago, clashing with Parker Robbins' dark magic.",
        detailedStory: `PLOT OVERVIEW:
Riri Williams returns to Chicago after MIT, building high-tech suits while battling Parker Robbins (The Hood), who wields demonic magic.`
    },

    // Phase 6
    {
        id: 57, title: "The Fantastic Four: First Steps", date: "July 25, 2025", phase: "6", img: "d1.jpeg",
        story: "Marvel's First Family debuts in a retro-futuristic 1960s alternate universe.",
        detailedStory: `PLOT OVERVIEW:
Introduces Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm living in a retro-futuristic alternate universe facing cosmic collapse.`
    },
    {
        id: 58, title: "Eyes of Wakanda", date: "August 6, 2025", phase: "6", img: "d2.jpeg",
        story: "Animated series following Wakandan warriors throughout history retrieving stolen Vibranium.",
        detailedStory: `PLOT OVERVIEW:
Chronicles brave War Dog warriors through historical eras recovering Wakanda's stolen Vibranium artifacts.`
    },
    {
        id: 59, title: "Marvel Zombies", date: "October 2025", phase: "6", img: "d3.jpeg",
        story: "A new generation of heroes fight to survive an undead superhero plague.",
        detailedStory: `PLOT OVERVIEW:
Hard-hitting animated spin-off following surviving heroes battling a zombie plague infecting Earth's Mightiest Heroes.`
    },
    {
        id: 60, title: "Wonder Man (Series)", date: "January 27, 2026", phase: "6", img: "d4.jpeg",
        story: "Simon Williams tackles Hollywood stunt work and ionic powers.",
        detailedStory: `PLOT OVERVIEW:
Simon Williams navigates Hollywood entertainment while gaining ionic super-strength abilities.`
    },
    {
        id: 61, title: "Daredevil: Born Again (Season 2)", date: "March 25, 2026", phase: "6", img: "d5.jpeg",
        story: "Matt Murdock's street-level battle against Kingpin reaches its climax.",
        detailedStory: `PLOT OVERVIEW:
High-stakes street-level warfare as Daredevil and allies take on Wilson Fisk's criminal political grip on NYC.`
    },
    {
        id: 62, title: "Spider-Man: Brand New Day", date: "July 31, 2026", phase: "6", img: "d6.jpeg",
        story: "Peter Parker embraces a grounded new chapter of heroics in New York.",
        detailedStory: `PLOT OVERVIEW:
Peter Parker navigates life as an anonymous, self-reliant hero building a fresh legacy.`
    },
    {
        id: 63, title: "Avengers Endgame Encore", date: "Sept 25, 2026", phase: "6", img: "d7.jpeg",
        story: "Special theatrical re-release celebrating the Infinity Saga.",
        detailedStory: `PLOT OVERVIEW:
Commemorative theatrical event showcasing the climax of the Infinity Saga with bonus material.`
    },
    {
        id: 64, title: "VisionQuest (Series)", date: "Late 2026", phase: "6", img: "d10.jpeg",
        story: "White Vision embarks on a journey of self-discovery to recover his memories and humanity.",
        detailedStory: `PLOT OVERVIEW:
Following the events of WandaVision, White Vision journeys to rediscover his past, identity, and soul.`
    },
    {
        id: 65, title: "Avengers: Doomsday", date: "December 18, 2026", phase: "6", img: "d8.jpeg",
        story: "Earth's defenders clash with Doctor Doom amidst multiversal incursions.",
        detailedStory: `PLOT OVERVIEW:
Earth's heroes unite against Victor von Doom as colliding universes threaten reality itself.`
    },
    {
        id: 66, title: "Avengers: Secret Wars", date: "December 17, 2027", phase: "6", img: "d9.jpeg",
        story: "The ultimate multiversal collision on Battleworld, concluding the Multiverse Saga.",
        detailedStory: `PLOT OVERVIEW:
Multiversal realities collide on Battleworld for the ultimate war to decide the fate of the cosmos.`
    }
];

// Road to Doomsday Highway List (16 items)
const doomsdayRoad = [
    { title: "X-Men (2000)", img: "t1.jpeg", type: "Movie", mainPlot: "Establishes the core ideological divide between Charles Xavier and Magneto while introducing legacy mutants whose DNA and history become central when multiversal incursions force realities to collide." },
    { title: "X2: X-Men United (2003)", img: "t2.jpeg", type: "Movie", mainPlot: "Demonstrates how human political leaders (Colonel Stryker) weaponize technology to eliminate superhuman threats, establishing the precedent for human-mutant political conflict upon reality merging." },
    { title: "Captain America: The First Avenger (2011)", img: "mi5.jpeg", type: "Movie", mainPlot: "Introduces the Tesseract (Space Stone) and sets Steve Rogers' absolute moral code against tyranny—the leadership baseline Sam Wilson must inherit." },
    { title: "The Avengers (2012)", img: "mi6.jpeg", type: "Movie", mainPlot: "Establishes the foundational MCU rule: Earth can only survive apocalyptic cosmic/multiversal threats when heroes set aside internal conflicts to function as a united front." },
    { title: "Avengers: Infinity War (2018)", img: "p7.jpeg", type: "Movie", mainPlot: "Serves as the ultimate warning for Doomsday: if Earth's defenders are divided against an absolute autocratic power (Doctor Doom), consequences will be instantaneous reality devastation." },
    { title: "Avengers: Endgame (2019)", img: "p10.jpeg", type: "Movie", mainPlot: "Quantum timeline tampering during the Time Heist laid the structural groundwork for multiversal fracturing, while Tony Stark's death left a tech vacuum for Doctor Doom." },
    { title: "Loki (Seasons 1 & 2)", img: "m3.jpeg", type: "TV Show", mainPlot: "The architectural spine of the Multiverse Saga. Loki becomes the God of Stories holding the branching Yggdrasil tree together—a structure Doctor Doom must bypass or manipulate." },
    { title: "Shang-Chi and the Ten Rings (2021)", img: "m6.jpeg", type: "Movie", mainPlot: "The ancient Ten Rings emit a deep space/multiversal homing beacon signal detected by Wong, Banner, and Captain Marvel, pointing to incoming cosmic forces." },
    { title: "Spider-Man: No Way Home (2021)", img: "m9.jpeg", type: "Movie", mainPlot: "Proves dimensional barriers can be breached via localized magic and leaves Peter Parker operating as an isolated, unassisted hero." },
    { title: "Doctor Strange in the Multiverse of Madness (2022)", img: "m11.jpeg", type: "Movie", mainPlot: "Defines Incursions—catastrophic collisions of alternate universes that drive Doctor Doom's motivation to manage or conquer reality before total collapse." },
    { title: "Black Panther: Wakanda Forever (2022)", img: "m17.jpeg", type: "Movie", mainPlot: "Establishes the geopolitical status quo on Earth-616, making Wakanda and Talokan key military factions defending Earth from multiversal threats." },
    { title: "Deadpool & Wolverine (2024)", img: "i9.jpeg", type: "Movie", mainPlot: "Introduces Anchor Beings whose deaths decay timelines, formally bridging Fox's X-Men universe directly into main MCU canon." },
    { title: "Captain America: Brave New World (2025)", img: "i12.jpeg", type: "Movie", mainPlot: "Sam Wilson steps up to lead the new Avengers amid global chaos over Celestial Adamantium deposits." },
    { title: "Thunderbolts* (2025)", img: "i14.jpeg", type: "Movie", mainPlot: "Forms an independent strike force led by Bucky and Yelena, introducing Sentry's god-like power dynamic." },
    { title: "The Fantastic Four: First Steps (2025)", img: "d1.jpeg", type: "Movie", mainPlot: "Reed Richards brings multiversal physics intellect equal to Doctor Doom as the Fantastic Four cross over from their decaying universe." },
    { title: "AVENGERS: DOOMSDAY (2026)", img: "d8.jpeg", type: "Climax", highlight: true, mainPlot: "The climactic destination where multiversal incursions, timeline decay, and fractured hero coalitions clash against Doctor Doom." }
];

// Expanded Quiz Database (10 questions per level)
const quizQuestions = {
    easy: [
        { q: "What is the name of Iron Man's artificial intelligence assistant in early films?", options: ["JARVIS", "FRIDAY", "EDITH", "Karen"], correct: 0 },
        { q: "What metal is Captain America's shield made of?", options: ["Adamantium", "Vibranium", "Titanium", "Carbonadium"], correct: 1 },
        { q: "Which Infinity Stone was housed inside Loki's scepter?", options: ["Space Stone", "Mind Stone", "Time Stone", "Power Stone"], correct: 1 },
        { q: "What is Thor's mystical hammer called?", options: ["Stormbreaker", "Mjölnir", "Gungnir", "Hofund"], correct: 1 },
        { q: "Who is the ruler of Wakanda in Black Panther?", options: ["Killmonger", "M'Baku", "T'Challa", "N'Jobu"], correct: 2 },
        { q: "What is Peter Parker's superhero alter ego?", options: ["Falcon", "Spider-Man", "Daredevil", "Ant-Man"], correct: 1 },
        { q: "What glowing blue cube houses the Space Stone?", options: ["The Orb", "The Tesseract", "The Aether", "The Darkhold"], correct: 1 },
        { q: "Who is Bruce Banner's monstrous green alter ego?", options: ["Abomination", "The Hulk", "Thing", "Juggernaut"], correct: 1 },
        { q: "Which character uses a lethal flying arrow controlled by whistling?", options: ["Star-Lord", "Drax", "Yondu", "Rocket"], correct: 2 },
        { q: "What color is the Power Stone inside the Orb?", options: ["Red", "Purple", "Green", "Yellow"], correct: 1 }
    ],
    medium: [
        { q: "What is the real name of the Scarlet Witch?", options: ["Natasha Romanoff", "Wanda Maximoff", "Carol Danvers", "Peggy Carter"], correct: 1 },
        { q: "In what year is Captain Marvel primarily set?", options: ["1989", "1995", "2001", "2008"], correct: 1 },
        { q: "What is the name of the planetary prison where Guardians of the Galaxy meet?", options: ["Knowhere", "Xandar", "The Kyln", "Sakaar"], correct: 2 },
        { q: "Who sacrifices themselves to retrieve the Soul Stone on Vormir?", options: ["Iron Man", "Captain America", "Black Widow", "Hawkeye"], correct: 2 },
        { q: "What is Doctor Strange's official title before his accident?", options: ["Chief of Surgery", "Neurosurgeon", "Cardiothoracic Surgeon", "General Practitioner"], correct: 1 },
        { q: "Which villain created the Ultron A.I. alongside Tony Stark?", options: ["Bruce Banner", "Hank Pym", "Steve Rogers", "Erik Selvig"], correct: 0 },
        { q: "Where is the Time Stone hidden in Doctor Strange?", options: ["Eye of Agamotto", "Casket of Ancient Winters", "Book of Vishanti", "Wand of Watoomb"], correct: 0 },
        { q: "Who becomes the God of Stories at the end of Loki Season 2?", options: ["Thor", "Sylvie", "Loki", "Odin"], correct: 2 },
        { q: "What organization was secretly inside S.H.I.E.L.D. since WWII?", options: ["A.I.M.", "HYDRA", "Ten Rings", "The Hand"], correct: 1 },
        { q: "What is the name of Scott Lang's daughter?", options: ["Morgan", "Cassie", "Kate", "Kamala"], correct: 1 }
    ],
    extreme: [
        { q: "What is the exact designation number of the universe MCU primary timeline takes place in?", options: ["Earth-616", "Earth-199999", "Earth-838", "Earth-10005"], correct: 1 },
        { q: "What is the name of the AI that controls the helicarriers in Captain America: The Winter Soldier?", options: ["Project Insight", "Project Pegasus", "Project Insight AI", "Project T.A.H.I.T.I."], correct: 0 },
        { q: "In Iron Man 2, what toxic element was poisoning Tony Stark's bloodstream?", options: ["Palladium", "Plutonium", "Uranium", "Cesium"], correct: 0 },
        { q: "What is the name of the alien race that attacks New York in The Avengers?", options: ["Kree", "Skrulls", "Chitauri", "Outriders"], correct: 2 },
        { q: "Who played the creator of the TVA in Loki Season 1?", options: ["Jonathan Majors", "Tom Hiddleston", "Owen Wilson", "Richard E. Grant"], correct: 0 },
        { q: "What subatomic particle allows Ant-Man to scale his size?", options: ["Gamma Rays", "Pym Particles", "Vibranium Ions", "Quantum Matter"], correct: 1 },
        { q: "What is the name of the Celestial mid-birth petrified into marble in Eternals?", options: ["Arishem", "Tiamut", "Ego", "Hargen"], correct: 1 },
        { q: "Which character is the anchor being of the Fox universe in Deadpool & Wolverine?", options: ["Deadpool", "Professor X", "Wolverine", "Magneto"], correct: 2 },
        { q: "What year did Tony Stark's parents get killed by the Winter Soldier?", options: ["1989", "1991", "1995", "1998"], correct: 1 },
        { q: "What is the physical manifestation of Death called in Agatha All Along?", options: ["Rio Vidal", "Lilia Calderu", "Jennifer Kale", "Alice Gulliver"], correct: 0 }
    ]
};

// DOM Content Loaded Handler
document.addEventListener("DOMContentLoaded", () => {
    renderMovies(mcuData);
    renderRoad();
    setupFilters();
    setupSearch();
    setupQuiz();
    setupModal();
});

// Render Movies Grid
function renderMovies(data) {
    const grid = document.getElementById("moviesGrid");
    grid.innerHTML = "";
    
    if (data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #8c92a4; padding: 40px;">No cinematic entries found.</p>`;
        return;
    }

    data.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
            <div class="movie-poster-wrap">
                <span class="phase-badge">Phase ${movie.phase}</span>
                <img src="${movie.img}" alt="${movie.title}" onerror="this.src='https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=500'">
            </div>
            <div class="movie-info">
                <div>
                    <h3>${movie.title}</h3>
                    <div class="movie-date"><i class="fa-regular fa-calendar"></i> ${movie.date}</div>
                </div>
                <div class="card-actions">
                    <button class="btn-card-action btn-read-story"><i class="fa-solid fa-book-open"></i> Read Story</button>
                    <button class="btn-card-action btn-detailed-story"><i class="fa-solid fa-file-text"></i> Detailed Explanation</button>
                </div>
            </div>
        `;
        
        card.querySelector(".btn-read-story").addEventListener("click", (e) => {
            e.stopPropagation();
            openStoryModal(movie, false);
        });

        card.querySelector(".btn-detailed-story").addEventListener("click", (e) => {
            e.stopPropagation();
            openStoryModal(movie, true);
        });

        card.addEventListener("click", () => openStoryModal(movie, false));

        grid.appendChild(card);
    });
}

// Render Road to Doomsday
function renderRoad() {
    const roadContainer = document.getElementById("roadContainer");
    roadContainer.innerHTML = "";

    doomsdayRoad.forEach((item, index) => {
        const roadItem = document.createElement("div");
        roadItem.className = `road-item ${item.highlight ? 'highlight-node' : ''}`;
        roadItem.innerHTML = `
            <div class="step-num">${index + 1}</div>
            <img src="${item.img}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=500'">
            <h4>${item.title}</h4>
            <span>${item.type}</span>
            <button class="btn-main-plot"><i class="fa-solid fa-bolt"></i> Main Plot</button>
        `;
        
        roadItem.addEventListener("click", () => openRoadModal(item));
        roadContainer.appendChild(roadItem);
    });
}

// Phase Filter Logic
function setupFilters() {
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const phase = btn.getAttribute("data-phase");
            if (phase === "all") {
                renderMovies(mcuData);
            } else {
                const filtered = mcuData.filter(m => m.phase === phase);
                renderMovies(filtered);
            }
        });
    });
}

// Search Filter Logic
function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = mcuData.filter(m => m.title.toLowerCase().includes(query) || m.story.toLowerCase().includes(query) || (m.detailedStory && m.detailedStory.toLowerCase().includes(query)));
        renderMovies(filtered);
    });
}

// Open Story Modal (Short Story or Detailed Explanation)
function openStoryModal(movie, isDetailed) {
    const modal = document.getElementById("storyModal");
    const content = document.getElementById("modalBodyContent");
    
    content.innerHTML = `
        <h2>${movie.title}</h2>
        <div class="modal-sub">Phase ${movie.phase} &bull; Released: ${movie.date}</div>
        <img src="${movie.img}" alt="${movie.title}" onerror="this.src='https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=800'">
        <div class="modal-text-block">
            ${isDetailed ? movie.detailedStory : `<h3>Story Synopsis</h3><p>${movie.story}</p>`}
        </div>
    `;
    modal.classList.add("active");
}

// Open Road to Doomsday Main Plot Modal
function openRoadModal(item) {
    const modal = document.getElementById("storyModal");
    const content = document.getElementById("modalBodyContent");
    
    content.innerHTML = `
        <h2>${item.title}</h2>
        <div class="modal-sub">Road to Doomsday Watch Path &bull; ${item.type}</div>
        <img src="${item.img}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=800'">
        <div class="modal-text-block">
            <h3><i class="fa-solid fa-road"></i> Main Plot & Doomsday Connection</h3>
            <p>${item.mainPlot}</p>
        </div>
    `;
    modal.classList.add("active");
}

function setupModal() {
    const modal = document.getElementById("storyModal");
    const closeBtn = document.getElementById("closeModal");
    
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });
}

// Quiz Logic
let currentDiff = 'easy';
let currentQuestionIndex = 0;
let quizScore = 0;

function setupQuiz() {
    const diffBtns = document.querySelectorAll(".diff-btn");
    diffBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            diffBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentDiff = btn.getAttribute("data-diff");
            resetQuiz();
        });
    });
    resetQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    loadQuestion();
}

function loadQuestion() {
    const questions = quizQuestions[currentDiff];
    const q = questions[currentQuestionIndex];
    
    document.getElementById("questionProgress").innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById("quizScore").innerText = `Score: ${quizScore}`;
    
    const quizBody = document.getElementById("quizBody");
    quizBody.innerHTML = `
        <div class="question-text">${q.q}</div>
        <div class="options-grid" id="optionsGrid"></div>
        <div class="quiz-footer">
            <button class="next-btn" id="nextBtn">Next Question</button>
        </div>
    `;

    const optionsGrid = document.getElementById("optionsGrid");
    q.options.forEach((opt, idx) => {
        const optBtn = document.createElement("button");
        optBtn.className = "option-btn";
        optBtn.innerText = opt;
        optBtn.addEventListener("click", () => selectOption(idx, q.correct, optBtn));
        optionsGrid.appendChild(optBtn);
    });
}

function selectOption(selectedIdx, correctIdx, btn) {
    const optionsGrid = document.getElementById("optionsGrid");
    const buttons = optionsGrid.querySelectorAll(".option-btn");
    
    buttons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === correctIdx) b.classList.add("correct");
        if (idx === selectedIdx && idx !== correctIdx) b.classList.add("incorrect");
    });

    if (selectedIdx === correctIdx) {
        quizScore += 10;
        document.getElementById("quizScore").innerText = `Score: ${quizScore}`;
    }

    const nextBtn = document.getElementById("nextBtn");
    nextBtn.style.display = "block";
    nextBtn.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions[currentDiff].length) {
            loadQuestion();
        } else {
            showQuizComplete();
        }
    };
}

function showQuizComplete() {
    const quizBody = document.getElementById("quizBody");
    quizBody.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <i class="fa-solid fa-trophy" style="font-size: 48px; color: var(--marvel-gold); margin-bottom: 15px;"></i>
            <h3 style="font-family: 'Montserrat', sans-serif; color: var(--text-light); margin-bottom: 10px;">Quiz Completed!</h3>
            <p style="font-size: 16px; margin-bottom: 20px;">Your final score in <strong style="text-transform: capitalize;">${currentDiff}</strong> mode is <strong>${quizScore} / 100</strong> points.</p>
            <button class="btn-primary" onclick="resetQuiz()">Play Again</button>
        </div>
    `;
    document.getElementById("questionProgress").innerText = "Complete";
}
