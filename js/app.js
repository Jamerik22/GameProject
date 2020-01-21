var mySound = document.getElementById("sound")
mySound = new MySound("https://tif.fjrifj.frl/462e25bed2cca2e0f6d77e972cb3e267/PHn5Q7hCjxw");


const pathQuestions = document.getElementById('text')
const pathAnswers = document.getElementById('option-buttons')

var bbwfFace = ['Jamerik','T4','Jay King','Jay Gatzby','The Minister','The Boulder','Mr. Amazing']
var bbwfHeel = ['Shawn','JRC','B Warrior','Country Twang','El Diablo','BDP','Bulldagger']

var mainCharacter1 = "Jay King"
var mainCharacter2 = "Clinton Black"

const getRandomFace = () => `${bbwfFace[Math.floor(Math.random()* bbwfFace.length)]}`
// console.log(getRandomFace());

const getRandomHeel = () => `${bbwfHeel[Math.floor(Math.random()* bbwfHeel.length)]}`
// console.log(getRandomHeel());



let state = {}

function startGame() {
  state = {}
  showTextNode(1)
  
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  pathQuestions.innerText = textNode.text
  while (pathAnswers.firstChild) {
    pathAnswers.removeChild(pathAnswers.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      pathAnswers.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextSceneNodeId = option.nextScene
  if (nextSceneNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextSceneNodeId)
}

const textNodes = [
    {
        id: 1,
        text:"Path of Immortals 2 is twice the fun with 2 different storylines. While both men look to achieve individual sucess their paths collide in 2 iconic matches. will they work together to reach the top of the mountain, or will the lust for gold tear them apart? It all depends on YOUR PATH OF IMMORTALITY!!! Who would you like to play as? ",
        options: [
            {
                text:'Jay King',
                nextScene: 2 
            },
            {
                text:'Clinton Black',
                nextScene: 12
            }
        ]
    },
    {
        id: 2,
        text: "In the previous Path of Immortals, Jay King Captured one of three prestigious titles. Since then he has captured every title BBWF had to offer. Jamerik 'the CRUTCH' Crutch, the General Manager, unveiled a new title, the Intercontinental Championship. Help King capture the new belt and become the first grand slam champion! How should King start his journey?",
        options: [
            {
                text: 'clean',
                setState: { steelChair: true },
                nextScene: 4
            },
            {
                text: 'dirty',
                setState: { steelChair: true },
                nextScene: 3
            }
        ]
    },
    {
        id: 3,
        text: "In the middle of King's match against " + getRandomFace() + " , the referee gets knocked down. A steel chair is present outside the ring. ",
        options: [
        {
            text: 'grab chair',
            requiredState: (currentState) => currentState.steelChair,
            setState: { steelChair: true },
            nextScene: 5
        },
        {
            text: 'Low-blow',
            requiredState: (currentState) => currentState.steelChair,
            setState: { steelChair: false },
            nextScene: 6
        },
        ]
    },
    {
        id: 4,
        text: "In the middle of King's match against " + getRandomHeel() + " , the referee gets knocked down. A steel chair is present outside the ring.",
        options: [
            {
                text : 'wake up ref',
                requiredState: (currentState) => currentState.steelChair,
                setState: { steelChair: false },
                nextScene: 7
            },
            {
                text:'go after opponent',
                requiredState: (currentState) => currentState.steelChair,
                setState: { steelChair: true },
                nextScene: 8
            }
        ]
    },
    {
        id: 5,
        text: 'After taking the chair and attempting to use it on your opponent, he dodges chair and roll you up 1-2-3. YOU LOSE JABRONI!!! BACK OF THE LINE!!!"',
        options: [
            {
                text: 'Restart',
                nextScene: -1
            }
        ]
    },
    {
        id: 6,
        text: "Your opponent grabs chair and attempts to uses it on you. As the chair swings back, you hit your opponent in the 'plums' causing him to drop the chair and fall in pain. You hit your finisher and become the #1 Contender. ",
        options: [
            {
                text: 'Championship Match',
                nextScene: 9
            },
        ]
    },
    {
        id: 7,
        text: 'In the act of good sportsmanship, you ignore the chair and try to wake the referee. When you turn around, however, the steel chair is smacked against your head and your opponent covers you with an slow count 1-2-3. YOU LOSE JABRONI!!! BACK OF THE LINE!!!', 
        options: [
        {
            text: 'Restart',
            nextScene: -1
        }
        ]
    },
    {
        id: 8,
        text: "You see your opponent going for the chair, you chase after him and knock the chair away, he then hits you in the 'plums' and you go falling to the ground. Ref get back up and starts a ten count. Just as he reaches 9 you slide back in the ring to a big pop from the crowd. Your opponent gets you up and attempts his finisher but you counter with your finisher and pin him 1-2-3. CONGRATULATIONS you're the #1 Contender",
        options: [
        {
            text: 'Championship Match',
            nextScene: 9
        }
        ]
    },
    {
        id: 9,
        text: "This is the moment you've worked hard for it all comes down to this match, the championship match!",
        options: [
            {
                text: 'clean',
                nextScene: 10
            },
            {
                text: 'dirty',
                nextScene: 11
            }
        ]
    },
    {
        id: 10,
        text: " You fought a hard fought match, you didn't cheat, you remained true to yourself and you are now THE CHAMPION. ",
        options: [
        {
            text: 'Part 2',
            nextScene: 21
        }
        ]
    },
    {
        id: 11,
        text: 'The old saying goes "cheaters never win" and that saying remains true. Going to the well one too many times cost you your opportunity, YOU LOSE JABRONI!!! BACK OF THE LINE!!!',
        options: [
        {
            text: 'Restart',
            nextScene: -1
        }
        ]
    },
    {
        id: 12,
        text:"Clinton Black is a new to the BBWF and has been quite unstoppable. He is now part of a 3-way qualifying match to face the 3-way champion " + getRandomHeel() + " for the championship. Your 2 opponents " + getRandomHeel() + " and " + getRandomFace() + " look at each other then at you.",
        options: [
            {
                text: 'Roll out the ring',
                nextScene: 13
            },
            {
                text: 'Attack both',
                nextScene: 14
            },
            {
                text: 'Attack Face',
                nextScene: 15
            },
            {
                text: 'Attack Heel',
                nextScene: 15
            }
        ]
    },
    {
        id: 13,
        text: "Figuring your opponents will work together to take you out, you smartly roll out the ring to let them fight it out amongst themselves. ",
        options: [
            {
                text:"next",
                nextScene: 17
            }
        ]
    },
    {
        id: 14,
        text: "Figuring your opponents will work together to take you out, you clothesline both opponents and knock both to the ground.",
        options: [
            {
                text: 'Attack heel',
                nextScene: 15
            },
            {
                text: 'Attack face',
                nextScene: 15
            },
            {
                text: 'Show-off',
                nextScene: 16
            },
        ]    
    },
    {
        id: 15,
        text: "Choosing to attack one opponent left you vulnerable to be attackked by the other. Now you're outside the ring, hurt and watching your opponents fight.",
        options: [
            {
                text:"next",
                nextScene: 17
            }
        ]
    },
    {
        id: 16,
        text: "No one likes a Show off. In the middle of your taunt your opponents throw you out of the ring. Now you're outside the ring, hurt and watching your opponents fight."  ,
        options: [
            {
                text:"next",
                nextScene: 17    
            }
        ]
    },
    {
        id: 17,
        text: "Towards the end of the match one of the opponents is about to hit his finisher on the other. You get up and ...",
        options: [
            {
                text: 'wait until opponent hits finisher',
                nextScene: 18
            },
            {
                text: 'throw opponent out and attempt your finisher',
                nextScene: 19
            },
        ]        
    },
    {
        id: 18,
        text: "Opponent hits his finisher and you slide in and throw him outside the ring. ", 
        options: [
            {
                text: 'pin',
                nextScene: 20
            },
            {
                text: 'attempt your finisher',
                nextScene: 20
            },
        ]     
    },
    {
        id: 19,
        text: "You slide in and throw the standing opponent outside the ring. you attempt to hit your finisher when it gets reversed into the other opponents finisher. 1-2-3 YOU LOSE JABRONI!!! BACK OF THE LINE!!!" ,
        options: [
            {
                text: 'Restart',
                nextScene: -1
            }
        ]     
    },
    {
        id: 20,
        text: "You WIN! You now move on to the Championship match",
        options: [
            {
                text: 'Championship Match',
                nextScene: 9
            }
        ]      
    },
    {
        id: 21,
        text: " 'Part 2 : The Black Kings'(In this part you play as both King and Black). Jamerik 'the CRUTCH' Crutch, the general manager, has issued a huge main event where " + mainCharacter1 + " has to face one half of the tag champs, " + getRandomHeel() + " in a none title match. at the same time "+ mainCharacter2 + " has a match against" + getRandomHeel() + " in a none title match to start the night off. The tag champs are unliked by the fans and the roster alike. They always find away to cheat for each other. " + mainCharacter2 + " walks out alone while his opponent walks out with tag partner.  ",
        options: [
            {
                text:'fight opponent',
                nextScene: 22
            },
            {
                text:"attack opponent's partner",
                nextScene: 22
            },
            {
                text:'try exiting match',
                nextScene: 22
            }
        ]      
    },
    {
        id: 22,
        text:"the numbers game is too much for "+ mainCharacter2,
        options: [
            {
                text:"next",
                nextScene: 23
            }
        ]
    },
    {
        id: 23,
        text:"Now time for " + mainCharacter1 + "'s match",
        options: [
            {
                text:'fight opponent',
                nextScene: 24
            },
            {
                text:"attack opponent's partner",
                nextScene: 24
            },
            {
                text:'try exiting match',
                nextScene: 24
            }
        ]      
    },
    {
        id: 24,
        text:"the numbers game is too much for "+ mainCharacter1,
        options: [
            {
                text:"next",
                nextScene: 25
            }
        ]
    },
    {
        id: 25,
        text:"The next week the GM comes out and declares that because of there heinous actions, the tag champs will be put in a tag team match against " + mainCharacter1 + " and " + mainCharacter2 + ". If the tag champs lose, they will have to defend there titles in a FALLS COUNT ANYWHERE tag team match." ,
        options: [
            {
                text:"next",
                nextScene: 26
            }
        ]
    },
    {
        id: 26,
        text:"Who starts the match off ?",
        options: [
            {
                text:'Jay King',
                nextScene: 27 
            },
            {
                text:'Clinton Black',
                nextScene: 28
            }
        ]
    },
    {
        id: 27,
        text: mainCharacter1 + " goes to start the match and gets ambushed by tag champs",
        options: [
            {
                text: "stay on the apron",
                nextScene:29
            },
            {
                text:"go help",
                nextScene:30
            },

        ]
    },
    {
        id: 28,
        text: mainCharacter2 + " goes to start the match and gets ambushed by tag champs",
        options: [
            {
                text: "stay on the apron",
                nextScene:29
            },
            {
                text:"go help",
                nextScene:30
            },

        ]
    },
    {
        id: 29,
        text: "While staying on the apron is most appropriate, watching your partner get his butt kicked is very heel-ish.",
        options: [
            {
                text:"next",
                nextScene:31
            }
        ]
    },
    {
        id: 30,
        text:"Because you decided to help your partner, you even the playing field forcing them to exit the ring and rethink their strategy.",
        options: [
            {
                text:"next",
                nextScene:31
            }
        ]
    },
    {
        id: 31,
        text:"Toward the end of the match, " + mainCharacter2 + " notices that one of the tag champs grabs one of the title belts, at the same time, " + mainCharacter1 + " is on fire with quick strikes toward the other tag champ. Referee gets distracted with the illegal tag partner trying to enter the ring with the belt looking to use it for damage." + mainCharacter2 + " must..." ,
        options: [
            {
                text:"Go after illegal tag champ",
                nextScene:32
            },
            {
                text:"Go after legal tag champ",
                nextScene:33
            }
        ]
    },
    {
        id: 32,
        text:"Because you decided to go after illegal tag champ, the legal tag champ pulls out brass knucks and knocks partner out. Referee turns around to count the pin 1-2-3 YOU LOSE JABRONI!!! BACK OF THE LINE!!!",
        options: [
            {
                text:"Restart part 2",
                nextScene:21
            }
        ]
    },
    {
        id: 33,
        text:"Because you decided to go after legal tag champ, he was stopped from using brass knucks and you partner hits his finisher to earn both of you the title match next week.",
        options: [
            {
                text:"next",
                nextScene:34
            }
        ]
    },
    {
        id: 34,
        text:"The title match is ON!!! The Black Kings will face tag champs in what will be a WAR. ",
        options: [
            {
                text:"Go to the ring for match",
                nextScene:35
            },
            {
                text:"Go find champs",
                nextScene:36
            }
        ]
    },
    {
        id: 35,
        text:"The Black Kings head to the ring only to be anbushed on the ramp by the champs",
        options: [
            {
                text:"next",
                nextScene:37
            }
        ]
    },
    {
        id: 36,
        text:"The Black Kings head to find the champs and spot them planning out there attack.The Black Kings  anbushed the champs backstage and brutally beat and dragged them to the ring. ",
        options: [
            {
                text:"next",
                nextScene:37
            }
        ]
    },
    {
        id: 37,
        text:"The Black Kings and the champs fought tooth and nail. They fought in the ring, outside the ring, in the locker room, etc. As the match approaches the end, the brass knocks have come back in to play. One of the tag champs goes to swing and gets hit with a bat by King. King gets hit with a sledgehammer. Black ...",
        options: [
            {
                text:"hit opponent with finisher",
                nextScene:38
            },
            {
                text:"hit opponent with chair",
                nextScene:39
            },
            {
                text:"roll up opponent",
                nextScene:40
            }
        ]
    },
    
    {
        id: 38,
        text:"Black hits his finisher on one of the champs and covers him .",
        options: [
            {
                text:"pin",
                nextScene:40
            },
        ]
    }, 
    {
        id: 39,
        text:"Black attempts to hit one of the champs with the chair. As the chair swings back, the champ you were aiming for hits you with the brass knucks and pins you. YOU LOSE JABRONI!!! BACK OF THE LINE!!!",
        options: [
            {
                text:"Restart part 2",
                nextScene:21
            }
        ]
    }, 
    {
        id: 40,
        text:"1-2-3!!! YOU ARE ONE HALF OF THE NEEEEEEEEEEEEEEEEEEEWWW BBWF TAG CHAMPS",
        options: [
            {
                text:"part 3 'the HEEL turn",
                nextScene:41
            },
        ]
    },
    {
        id: 41,
        text:"Part 3 'the HEEL turn'(back to singles action) The Black Kings have aquired all the gold. All except 1,the UNIVERSAL CHAMPIONSHIP. Black has the opportunity to cash in his 3-way championship when " + getRandomFace() +" faces " + getRandomHeel() + " for the UNIVERSAL CHAMPIONSHIP. Meanwhile, King has to defend his INTERCONTINENTAL CHAMPIONSHIP against " + getRandomHeel() + ". Which story do you want to follow?",
        options: [
            {
                text:'Jay King',
                nextScene: 42 
            },
            {
                text:'Clinton Black',
                nextScene: 43
            }
        ]
    },
    {
        id: 42,
        text:"How do you wanna defend the championship?",
        options: [
            {
                text:'clean',
                nextScene: 44 
            },
            {
                text:'dirty',
                nextScene: 45
            }
        ]
    },
    {
        id: 43,
        text:"Time for the match. When would you like to cash in ",
        options: [
            {
                text:'before match starts',
                nextScene: 46  
            },
            {
                text:'in the middle of match',
                nextScene: 47
            }
        ]
    },
    {
        id: 44,
        text:"Because of your morals to the championship you defend it with pride and integrity, You retain the championship",
        options: [
            {
                text:'next',
                nextScene: 49
            }
        ]
    },
    {
        id: 45,
        text:"The phase 'by any means necessary' has set into your mind but a foolish mistake COSTS YOU THE CHAMPIONSHIP!!",
        options: [
            {
                text:'next',
                nextScene: 48
            },
        ]
    },
    {
        id: 46,
        text:"Everyone is fresh and you have to work harder than you thought. In the end you come up short of capturing the title.",
        options: [
            {
                text:'next',
                nextScene: 48
            }
        ]
    },
    {
        id: 47,
        text:"Everyone is worn down and slowly getting to there feet when your theme song plays. You cash in your 3-way title, throws opponent out the ring and hit finisher on champ and pin him 1-2-3. You are the NEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEWWW BBWF UNIVERSAL CHAMPION.",
        options: [
            {
                text:'next',
                nextScene:   49
            }
        ]
    },
    {
        id: 48,
        text: mainCharacter1 + " is in a bitter mood after losing Championship and looks to take his frustrations out on " + mainCharacter2 + " after his match.",
        options: [
            {
                text:'next',
                nextScene:  50
            }
        ]
    },
    {
        id: 49,
        text: mainCharacter2 + " is in a bitter mood after losing Championship opportunity and looks to take his frustrations out on " + mainCharacter1 + " after his match.",
        options: [
            {
                text:'next',
                nextScene:  50
            }
        ]
    },
    {
        id: 50,
        text:  "You go out to congratulate partner and raise his hand in victory, then, it happens",
        options: [
            {
                text:'low-blow',
                nextScene: 51
            },
            {
                text:'clothesline',
                nextScene: 51
            },
            {
                text:'finisher',
                nextScene: 51
            },
            {
                text:'chair shot',
                nextScene: 51
            }
        ]
    },
    {
        id: 51,
        text:  "Announcer1: 'WHAT THE HELL IS GOING ON? WHAT ARE WE WITNESSING? WHY IS HE DOING THIS??'  ",
        options: [
            {
                text:'next',
                nextScene: 52 
            }
        ]
    },
    {
        id: 52,
        text:  "Announcer2: 'I'll tell you what's happening. This man has turned his back on his partner and all of these fans. ALL FOR HIS PARTNERS CHAMPIONSHIP!!!'",
        options: [
            {
                text:'IMMORTALITY PPV',
                nextScene: 53  
            }
        ]
    },
    {
        id:53 ,
        text:"Part 4 : 'THE MATCH' Your partner has turned his back on you and you want revenge. The General Manager says your match will be the MAIN EVENT at IMMORTALITY and it will be a LADDER match. Time to teach your partner a lesson on RESPECT." ,
        options: [
            {
                text: 'grapple',
                nextScene: 54
            },
            {
                text: 'quick punch',
                nextScene: 55
            },
            {
                text: 'get in face',
                nextScene: 56
            },
            {
                text: 'get ladder',
                nextScene: 57
            }
        ]
    },
    {
        id:54 ,
        text:" This classic wrestling maneuver is basic at best, what's your next move?" ,
        options: [
            {
                text: 'submission hold',
                nextScene: 58
            },
            {
                text: 'body slam',
                nextScene: 59
            },
            {
                text: 'punch',
                nextScene: 55
            },
            {
                text: 'release',
                nextScene: 53
            }
        ]
    },
    {
        id:55 ,
        text:'This punch caught opponent offguard and knocked him to the floor' ,
        options: [
            {
                text: 'get ladder',
                nextScene: 57
            },
            {
                text: 'submission hold',
                nextScene: 58
            }
        ]
    },
    {
        id: 56,
        text: "Getting in opponents face raises match drama but allows opponent to strike first." ,
        options: [
            {
                text: 'punch',
                nextScene: 55
            },
            {
                text: 'grapple',
                nextScene: 54
            }
        ]
    },
    {
        id:57 ,
        text:"You go to get a ladder only to be hit in the back by opponent. he then goes to set ladder up then attempts to climb it. you quickly slide back inthe ring" ,
        options: [
            {
                text: 'climb ladder',
                nextScene: 60
            },
            {
                text: 'push ladder',
                nextScene: 61
            }
        ]
    },
    {
        id: 58,
        text:"Your opponent is tapping to the submission, however, THIS IS NOT A SUBMISSION MATCH. try using a weapon." ,
        options: [
            {
                text: 'get ladder',
                nextScene: 57
            },
            {
                text: 'get chair',
                nextScene: 62
            },
            {
                text: 'get table',
                nextScene: 63
            },
            {
                text: 'get bat',
                nextScene: 64
            }
        ]
    },
    {
        id: 59,
        text:"that body slam creates an opportunity for you to grab the ladder or another weapon" ,
        options: [
            {
                text: 'get ladder',
                nextScene: 57
            },
            {
                text: 'get chair',
                nextScene: 62
            },
            {
                text: 'get table',
                nextScene: 63
            },
            {
                text: 'get bat',
                nextScene: 64
            }
        ]
    },
    {
        id: 60,
        text:"your opponent is reaching for the title as you make you way to the top of the ladder." ,
        options: [
            {
                text: 'push opponent off ladder',
                nextScene: 61
            },
            {
                text: 'punch opponent',
                nextScene: 66
            },
            {
                text: 'hit finisher',
                nextScene: 67
            }
        ]
    },
    {
        id: 61,
        text:"opponent falls off ladder and lands hard. " ,
        options: [
            {
                text: 'reach for title',
                nextScene: 68
            },
            {
                text: 'perform high risk move ',
                nextScene: 69
            }
        ]
    },
    {
        id: 62,
        text:" You grab the chair to inflict more damage to opponent." ,
        options: [
            {
                text: 'set up in corner',
                nextScene: 65
            },
            {
                text: 'constant strikes to opponent',
                nextScene: 70
            }
        ]
    },
    {
        id: 63,
        text:"you look under the ring to find a table." ,
        options: [
            {
                text: 'set up in corner',
                nextScene: 65
            },
            {
                text: 'constant strikes to opponent',
                nextScene: 70
            },
            {
                text: 'set up outside the ring',
                nextScene: 71
            },
            {
                text: 'set up inside the ring',
                nextScene: 72
            }
        ]
    },
    {
        id: 64,
        text:"you look under the ring to find a bat" ,
        options: [
            {
                text: 'constant strikes to opponent',
                nextScene: 70
            }
        ]
    },
    {
        id: 65,
        text:"Setting up weapon in the corner gives opponent a chance to recover and uses you set up against you. When you come to, your opponent is walking up the ramp WITH YOUR TITLE. YOU LOSE!!!" ,
        options: [
            {
                text: 'RESTART PPV',
                nextScene: 63
            },
        ]
    },
    {
        id: 66,
        text:" Opponent staggers but doesn't fall. He then punches you. You stagger but don't fall." ,
        options: [
            {
                text: 'push opponent off ladder',
                nextScene: 61
            },
            {
                text: 'punch opponent',
                nextScene: 66
            },
            {
                text: 'hit finisher',
                nextScene: 67
            }
        ]
    },
    {
        id:67 ,
        text:"You hit your finisher FROM THE TOP OF THE LADDER!!! Your opponent is down on the mat, motionless" ,
        options: [
            {
                text: 'reach for title',
                nextScene: 68
            },
            {
                text: 'perform high risk move ',
                nextScene: 69
            }
        ]
    },
    {
        id:68 ,
        text:"CONGRATULATIONS YOU WON THE LADDER MATCH AND HAVE BECOME TRULY IMMORTAL" ,
        options: [
            {
            text: 'Congratulations. Play Again.',
            nextScene: -1
            }
        ]
    },
    {
        id: 69,
        text:"They dont call it HIGH RISK for nothing. You jump off the ladder only to hit the ground hard, missing opponent. When you come to, your opponent is walking up the ramp WITH YOUR TITLE. YOU LOSE!!!" ,
        options: [
            {
                text: 'RESTART PPV ',
                nextScene: 63
            }
        ]
    },
    {
        id: 70,
        text:"You are making your opponent pay for his betrayal, but lets not forget this is a CHAMPIONSHIP LADDER MATCH. " ,
        options: [
            {
                text: 'get ladder',
                nextScene: 57
            },
            {
                text: 'get chair',
                nextScene: 62
            },
            {
                text: 'get table',
                nextScene: 63
            },
            {
                text: 'get bat',
                nextScene: 64
            }
        ]
    },
    {
        id: 71,
        text:"Setting the table up outside the ring gives opponent a chance to recover and uses you set up against you. When you come to, your opponent is walking up the ramp WITH YOUR TITLE. YOU LOSE!!! " ,
        options: [
            {
                text: 'RESTART PPV ',
                nextScene: 63
            }
        ]
    },
    {
        id: 72,
        text:"Setting the table up inside the ring your able to keep an eye on your opponent. after set up, you pick opponent up and body slam him through the table. " ,
        options: [
            {
                text: 'next',
                nextScene: 59
            },
        ]
    },
]

startGame()