'use strict';

const db = require('../models');
const Sequelize = db.Sequelize;


var array = ["3D printing",
"Acting",
"Action figure",
"Action Figures",
"Air Sports",
"Airbrushing",
"Aircraft Spotting",
"Airsoft",
"Amateur astronomy",
"Amateur Radio",
"American football",
"Android:Netrunner",
"Animal fancy",
"Antiques",
"Antiquing",
"Antiquities",
"Apples to Apples",
"Aquarium (Freshwater & Saltwater)",
"Archery",
"Art collecting",
"Artwork",
"Asshole",
"Association football",
"Astrology",
"Astronomy",
"Australian Football",
"Australian rules football",
"Auto audiophilia",
"Auto racing",
"B/RTR Spades",
"Backpacking",
"Badminton",
"Baking",
"Bang!",
"Base Jumping",
"Baseball",
"Basketball",
"Baton Twirling",
"Beach Volleyball",
"Beach/Sun Tanning",
"Beachcombing",
"Beekeeping",
"Bell Ringing",
"Belly Dancing",
"Bicycle Polo",
"Bicycling",
"Bidwhist",
"Billiards",
"Bird watching",
"Birdwatching",
"Blackjack",
"Blacksmithing",
"Bluff",
"BMX",
"Board sports",
"Board/tabletop games",
"Boating",
"Body Building",
"Bodybuilding",
"Bohnanza",
"Bonsai Tree",
"Book collecting",
"Book Restoration",
"BookBinding",
"Books",
"Boomerangs",
"Boss Monster",
"Bowling",
"Boxing",
"Brazilian jiu-jitsu",
"Breakdancing",
"Bridge",
"Building A House For Habitat For Humanity",
"Building Dollhouses",
"Bus Spotting",
"Butterfly Watching",
"Buttons",
"Cabaret",
"Calligraphy",
"Camping",
"Canasta",
"Candle making",
"Canoeing",
"Canyoning",
"Card collecting",
"Card Games to Play",
"Cardfight!!Vanguard",
"Cards",
"CardsAgainstHumanity",
"Cartooning",
"Cassino",
"Cave Diving",
"Ceramics",
"Cheerleading",
"Chess",
"Chess Tournaments",
"Citadels",
"Climbing",
"Cloud Watching",
"Coffee roasting",
"Coin collecting",
"Coins",
"Collection hobbies",
"Color Guard",
"Coloring",
"Comic book collecting",
"Comic Books",
"Competitive hobbies",
"Computer programming",
"Contract",
"Conworlding",
"Cooking",
"Cooking Competitions",
"Cosplaying",
"Coup",
"Couponing",
"Crazy Eights",
"Creative writing",
"Cribbage",
"Cricket",
"Crocheting",
"Cross-Stitch",
"Crossword puzzles",
"Cryptography",
"Curling",
"Cycling",
"Dance",
"Dancing",
"Darts",
"Debate",
"Deltiology (postcard collecting)",
"Die-cast toy",
"Diecast Cars",
"Digital Arts",
"Digital Photography",
"Disc Golf",
"Do it yourself",
"Dodgeball",
"Dog Sport",
"Dolls",
"Dominion",
"Dominoes",
"Double Solitaire",
"Dowsing",
"Drama",
"Drawing",
"Driving",
"Dumpster Diving",
"Dutch Blitz",
"Egyptian Ratscrew",
"Electronics",
"Element collecting",
"Elements",
"Embroidery",
"Equestrianism",
"Equestrianism – Horseback Riding",
"Euchre",
"Exhibition drill",
"Exploding Kittens",
"Falconry",
"Family Business",
"Famous",
"Fantasy Football",
"Fantasy sports",
"Fashion",
"Felting",
"Fencing",
"Field hockey",
"Fight the Landlord",
"Figure skating",
"Fish Tournaments",
"Fishing",
"Fishing",
"Fishkeeping",
"Flag Football",
"Floorball",
"Flower arranging",
"Flower collecting and pressing",
"Fluxx",
"Flying",
"Flying disc",
"Flying Discs",
"Flying Drones",
"Footbag",
"Foraging",
"Foreign language learning",
"Fossil hunting",
"Four Wheeling",
"Freestyle football",
"Freshwater Aquariums",
"Frisbee Golf – Frolf",
"Gaming (tabletop games and role-playing games)",
"Gardening",
"Genealogy",
"Geocaching",
"Ghost hunting",
"Gin Rummy",
"Glassblowing",
"Go",
"Gods’ Gambit",
"GoFish",
"Golf",
"Golfing",
"Gongoozling",
"Graffiti",
"Guillotine",
"Gun Shooting",
"Guns",
"Gunsmithing",
"Gymnastics",
"Hanabi",
"Handball",
"Handwriting Analysis",
"Hang gliding",
"Hats",
"Hearthstone",
"Hearts",
"Herp keeping",
"Herping",
"High-power rocketry",
"Hiking",
"Hiking/Backpacking",
"History",
"Home Theater",
"Homebrewing",
"Hooping",
"Horseback riding",
"Hot Air Ballooning",
"Hula Hooping",
"Hunting",
"Hydroponics",
"Ice Hockey",
"Ice Skating",
"Illusion",
"Impersonations",
"Indoors",
"Indoors",
"Indoors",
"Inline skating",
"Insect collecting",
"Insects",
"Inventing",
"Jaipur",
"Janggi (Korean Chess)",
"Jewelry making",
"Jigsaw puzzles",
"Jogging",
"Judo",
"Juggling",
"Jukskei",
"Jump Roping",
"Kabaddi",
"Kart racing",
"Kayaking",
"Kings in the Corner",
"Kite Boarding",
"Kite Flying",
"Kite Surfing",
"Kitesurfing",
"Knapping",
"Knife making",
"Knife Throwing",
"Knitting",
"Knotting",
"Kombucha brewing",
"Lace making",
"Lacemaking",
"Lacrosse",
"Lapidary",
"LARPing",
"Laser Tag",
"Lawn Darts",
"League of Legends",
"Learning",
"Leather crafting",
"Legendary Encounters:Alien",
"Legendary: Marvel",
"Lego building",
"Letterboxing",
"Ligretto",
"Listening to music",
"Lockpicking",
"LoveLetter",
"LuckandLogic",
"Machining",
"Macrame",
"Macramé",
"MageRage",
"Magic",
"Magic the Gathering: Card Game",
"Magic:The Gathering",
"Magnet fishing",
"Mahjong",
"Marbles",
"Marching band",
"Marksmanship",
"Martial arts",
"Martial arts",
"Meditation",
"Memory Game",
"Metal detecting",
"Metals",
"Metalworking",
"Meteorology",
"Microscopy",
"MilleBornes",
"Mineral collecting",
"Minerals",
"Model aircraft",
"Model building",
"Monopoly Deal",
"MONSTER REJECTS -The Monsters That Nobody Loves",
"Motor sports",
"Motorcycles",
"Motorsports",
"Mountain biking",
"Mountain Climbing",
"Mountaineering",
"Movie and movie memorabilia collecting",
"Movie Memorabilia",
"Munchkin",
"Mushroom hunting/mycology",
"Music Albums",
"Nail Art",
"Needlepoint",
"Nerts",
"Netball",
"Nordic skating",
"Observation hobbies",
"Old Maid",
"Orienteering",
"Origami",
"Outdoor hobbies",
"Outdoors",
"Outdoors",
"Outdoors",
"Paintball",
"Painting",
"Papermache",
"Papermaking",
"Parachuting",
"Paragliding or Power Paragliding",
"Parkour",
"Pet",
"Phase",
"Philately",
"Photography",
"Pinochle",
"Pinochle",
"Playing musical instruments",
"Poi",
"PokémonTradingCardGame",
"Poker",
"Poker",
"Pole Dancing",
"Polo",
"Pottery",
"Powerlifting",
"President (card game)",
"Presidential Poker",
"Puppetry",
"Puzzles",
"Quilling",
"Quilting",
"R/C Boats",
"R/C Cars",
"R/C Helicopters",
"R/C Planes",
"Race for the Galaxy",
"Racquetball",
"Radio-controlled car racing",
"Rafting",
"Railfans (trainspotting)",
"Rappelling",
"Ratuki",
"Reading",
"Reading",
"Reading Books",
"Reading to Children",
"Reading to the Elderly",
"Record collecting",
"Records",
"Rescuing Abused Or Abandoned Animals",
"Road biking",
"Robotics",
"Rock Balancing",
"Rock climbing",
"Rockets",
"Roleplaying",
"Roller Derby",
"Roller Skating",
"ROOK",
"Rugby",
"Rugby league football",
"Rummy",
"Running",
"Sailing",
"Sand art",
"Sand Castles",
"Satellite watching",
"Scouting",
"Scrabble Slam",
"Scrap-booking",
"Scrapbooking",
"Screw The Dealer",
"Scuba diving",
"Sculling or Rowing",
"Sculpting",
"Sea glass",
"Sea glass collecting",
"Seashell collecting",
"Seashells",
"SentinelsoftheMultiverse",
"Sewing",
"Shark Fishing",
"Shooting",
"Shooting sport",
"Shopping",
"Shortwave listening",
"Singing",
"Skat",
"Skateboarding",
"Skeet Shooting",
"Sketching",
"Skiing",
"Skimboarding",
"Skip Boo",
"Skydiving",
"Slacklining",
"Slingshots",
"Slot car racing",
"Snorkeling",
"Snowboarding",
"Soapmaking",
"Soccer",
"Solitaire",
"Speed",
"Speed skating",
"Speedcubing",
"Speedcubing (Rubik’s cube)",
"Spelunking",
"Spit",
"Splendor",
"Spoons",
"Sport stacking",
"Sports Cards (Baseball, Football, Basketball, Hockey)",
"Squash",
"Stamp collecting",
"Stamps",
"Stand-up Comedy",
"Star Realms",
"Stone collecting",
"Stone Skipping",
"Stones",
"Storm Chasing",
"Storytelling",
"String Figures",
"Sudoku",
"Sun bathing",
"Surf Fishing",
"Surfing",
"Survival",
"Sushi Go",
"Swimming",
"Swords",
"Table football",
"Table tennis",
"Table tennis",
"Table Tennis (pingpong)",
"Taekwondo",
"Tai chi",
"Tatting",
"Taxidermy",
"Tennis",
"Tennis polo",
"Tesla Coils",
"Tetris",
"Textiles",
"The Code Card Game",
"Tools",
"Topiary",
"Tour Skating",
"Toys",
"Training Animals",
"Trains",
"Trainspotting",
"Travel",
"Traveling",
"Triathlon",
"Tutoring Children",
"TV watching",
"Twenty-two",
"Ultimate Disc",
"Ultimate frisbee ",
"UNO",
"Up and Down the River",
"Urban exploration",
"Vacation",
"Vehicle restoration",
"Video game collecting",
"Video Games",
"Video Games",
"Video gaming",
"Videophilia",
"Vintage cars",
"Volleyball",
"Walking",
"War",
"Warhammer",
"Watching movies",
"Watching sporting events",
"Watching television",
"Water polo",
"Water sports",
"Weather Watcher",
"Web surfing",
"Weightlifting",
"Werewolf",
"Whale Watching",
"Whist",
"Whittling",
"Windsurfing",
"Wingsuit Flying",
"Wonders",
"Wood carving",
"Woodworking",
"Worldbuilding",
"Wrestling",
"Writing",
"Xiangqi (Chinese Chess)",
"Yo-yoing",
"Yoga",
"You’re So Bad! Card Game",
"Yu-Gi-Oh! Trading Card Game",
"Ziplining"];


var interests_seeds = [];
for (let i = 0; i < array.length; i++) {
var interest = {
  interest:array[i],
  createdAt: '2018-03-14 02:10:55',
  updatedAt: '2018-03-14 02:10:55'
}
interests_seeds.push(interest);

}



module.exports = {
  up: (queryInterface, Sequelize) => {


    

    
          
        
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Interests', interests_seeds, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};