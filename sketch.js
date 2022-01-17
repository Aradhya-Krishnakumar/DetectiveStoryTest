var preStory,preStory1,preStory2,story,ID,hand,male,cloth,son,wife,brother,report;
var suspects,mystery,bg,title,softboard,suspectsTitle,book,book2,storyb,next,crimeSceneB,foreignsicB,guessB,ctitle,arrestB;
var sonNote,wifeNote,brotherNote,sonSbp,wifeSbp,brotherSbp,handNote,maleNote;

var IDimg,maleimg,clothimg,handimg,sonimg,brotherimg,wifeimg,suspectimg,bgImg,reportImg;
var titleimg,softboardimg,suspectsTitleImg,bookimg,bookimg2,storybimg,nextimg,crimeSceneBimg,foreignsicBimg,guessBimg,ctitleImg,arrestBimg;
var sonNoteimg,wifeNoteimg,brotherNoteimg,sonSbpimg,wifeSbpimg,brotherSbpimg,handNoteimg,maleNoteimg;

var gameState;
var player, playerCount;
var gameState = 0;


 

function preload ()
{
  titleimg = loadImage("Assets/DS.jpg");

  bgImg = loadImage("Assets/BG1.jpg");
  softboardimg = loadImage("Assets/soft board.jpg")
  bookimg = loadImage("Assets/book.jpg");
  bookimg2 = loadImage("Assets/book 2.jpg");

  storybimg = loadImage("Assets/story button.jpg");
  nextimg = loadImage("Assets/next.jpg");
  crimeSceneBimg = loadImage("Assets/crimeSceneButton.jpg");
  foreignsicBimg = loadImage("Assets/foreignsicButton.jpg");
  guessBimg = loadImage("Assets/guessButton.jpg");
  arrestBimg = loadImage("Assets/arrestButton.jpg")

  IDimg = loadImage("Assets/ID.PNG");
  handimg = loadImage("Assets/left-handed.png");
  maleimg = loadImage("Assets/male.PNG");
  clothimg = loadImage("Assets/cloth.png");
  sonimg  = loadImage("Assets/son.png")
  wifeimg = loadImage("Assets/wife.png")
  brotherimg = loadImage("Assets/brother.png");
  suspectimg = loadImage("Assets/suspect.JPG");
  suspectsTitleImg = loadImage("Assets/suspect title.jpg");
  ctitleImg = loadImage("Assets/ClueTitle.jpg");
  reportImg = loadImage("Assets/Report.jpg");

  sonNoteimg = loadImage("Assets/sonNote.jpg");
  wifeNoteimg = loadImage("Assets/wifeNote.jpg");
  brotherNoteimg = loadImage("Assets/brotherNote.jpg");
  handNoteimg = loadImage("Assets/handNote.jpg");
  maleNoteimg = loadImage("Assets/maleNote.jpg");

  sonSbpimg = loadImage("Assets/sbp1.jpg");
  wifeSbpimg = loadImage("Assets/sbp2.jpg");
  brotherSbpimg = loadImage("Assets/sbp3.jpg");

  preStory = loadAnimation("story/murder1.png","story/murder2.png","story/murder3.png");
  preStory.frameDelay = 10;
  preStory1 = loadAnimation ("story/murder4.png");
  
  mystery = loadSound("mystery.m4a");
}

function setup() 
{
  createCanvas(2000,1000);

  gameState = 0;

  title = createSprite(350,200,0,0);
  title.addImage("title",titleimg);
  title.scale = 0.000;

  bg = createSprite(400,170,0,0);
  bg.addImage("bg",bgImg);
  bg.scale = 0.000;

  next = createSprite(250,310,0,0)
  next.addAnimation("next",nextimg);
  next.scale = 0.000;

  softboard = createSprite(400,170,0,0);
  softboard.addImage("sb",softboardimg);
  softboard.scale = 0.000;

  report = createSprite(400,270,0,0);
  report.addImage("fr",reportImg);
  report.scale = 0.000;

  story = createSprite(500,240,0,0)
  story.addAnimation("ps",preStory);
  story.addAnimation("dead",preStory1);
  story.scale = 0.000;

  book = createSprite(400,200,0,0);
  book.addImage("bk",bookimg);
  book.scale = 0.000;

  storyb = createSprite(270,330,0,0)
  storyb.addAnimation("stb",storybimg);
  storyb.scale = 0.000;

  crimeSceneB = createSprite(490,350,0,0);
  crimeSceneB.addImage("csb",crimeSceneBimg);
  crimeSceneB.scale = 0.000;

  foreignsicB = createSprite(620,350,0,0);
  foreignsicB.addImage("fb",foreignsicBimg);
  foreignsicB.scale = 0.000;

  guessB = createSprite(490,280,0,0);
  guessB.addImage("gb",guessBimg);
  guessB.scale = 0.000;

  arrestB = createSprite(620,350);
  arrestB.addImage("ab",arrestBimg);
  arrestB.scale = 0.000;

  ID = createSprite(400,220,0,0);
  ID.addImage("ID",IDimg);
  ID.scale = 0.000;

  cloth = createSprite(660,100,0,0);
  cloth.addImage("cloth",clothimg);
  cloth.scale = 0.000;

  book2 = createSprite(400,200,0,0);
  book2.addImage("bk",bookimg2);
  book2.scale = 0.000;  

  hand = createSprite(450,420,0,0);
  hand.addImage("hand",handimg);
  hand.scale = 0.000;

  male = createSprite(350,170,0,0);
  male.addImage("male",maleimg);
  male.scale = 0.000;


  son = createSprite(200,140,0,0);
  son.addImage("son",sonimg);
  son.scale = 0.000;

  sonNote = createSprite(580,190);
  sonNote.addImage("sn",sonNoteimg);
  sonNote.scale = 0.000;

  sonSbp = createSprite(200,180);
  sonSbp.addImage("ssbp",sonSbpimg)
  sonSbp.scale = 0.000;

  wife = createSprite(300,140,0,0);
  wife.addImage("wife",wifeimg);
  wife.scale = 0.000;

  wifeNote = createSprite(580,190);
  wifeNote.addImage("wn",wifeNoteimg);
  wifeNote.scale = 0.000;

  wifeSbp = createSprite(300,180);
  wifeSbp.addImage("swbp",wifeSbpimg)
  wifeSbp.scale = 0.000;

  brother = createSprite(400,140,0,0);
  brother.addImage("brother",brotherimg);
  brother.scale = 0.000;

  brotherNote = createSprite(580,190);
  brotherNote.addImage("bn",brotherNoteimg);
  brotherNote.scale = 0.000;

  brotherSbp = createSprite(400,180);
  brotherSbp.addImage("sbbp",brotherSbpimg)
  brotherSbp.scale = 0.000;

  handNote = createSprite(58000,190);
  handNote.addImage("hn",handNoteimg);
  handNote.scale = 0.000;

  maleNote = createSprite(58000,190);
  maleNote.addImage("mn",maleNoteimg);
  maleNote.scale = 0.000;
  
  suspects = createSprite(500,310,0,0);
  suspects.addImage("sus",suspectimg);
  suspects.scale = 0.000;

  suspectsTitle = createSprite(430,40,0,0);
  suspectsTitle.addImage("sus2",suspectsTitleImg);
  suspectsTitle.scale = 0.000;

  ctitle = createSprite(350,300);
  ctitle.addImage("ct",ctitleImg);
  ctitle.scale = 0.000;

}

function draw() 
{
console.log(gameState);

  background('white');

  if(gameState === 0)
  {
    title.scale = 0.7;

  if(mousePressedOver(title))
   {
    title.x = 15000;
    gameState = 1;
   }
  }

  if(gameState === 1)
  {
    book.scale = 2;
    storyb.scale = 0.3;
    
    
    if(mousePressedOver(storyb))
    {
      gameState = 2;
      storyb.x = 15000;
    }
  }

  if(gameState === 2)
  {
    book.x = 15000;
    bg.scale = 1.3;
    story.scale = 0.9;
    story.changeAnimation("ps",preStory);

    if(mousePressedOver(story))
    {
      next.scale = 0.3;
      gameState = 3;
    }
  }
  if(gameState === 3)
  {

    story.x = 490;
    story.y = 320;
    story.changeAnimation("dead", preStory1);
    
    ID.scale = 0.10;
    cloth.scale = 0.3;
    preStory1.scale = 0.000
    bg.scale = 1.3;

    bg.x = 400;
    bg.y = 170;

    softboard.x = 15000;
    suspectsTitle.scale = 0.000;
    ctitle.scale = 0.000;
    brother.scale = 0.000;
    son.scale = 0.000;
    wife.scale = 0.000;

    sonSbp.scale = 0.000;
    wifeSbp.scale = 0.000;
    brotherSbp.scale = 0.000; 

    report.x = 15000;
    hand.x = 15000;
    male.x = 15000;
    
    ID.x = 400;
    ID.y = 220;

    cloth.x = 660;
    cloth.y = 100;   
    
    suspects.y = 310;
 
    if(mousePressedOver(ID))
    {
      ID.scale = 1.6
    }
    else
    {
      ID.scale = 0.10;
    }
    
    if(mousePressedOver(cloth))
    {
      cloth.scale = 1.3
    }
    else
    {
      cloth.scale = 0.3;
    }

    if(mousePressedOver(next))
    {
      next.x = 15000
      bg.x = 15000;
      cloth.x = 250;
      gameState = 4;
    }

    if(mousePressedOver(suspects))
    {
      crimeSceneB.x = 490; 
      gameState = 5;
    }
  }

  if(gameState === 4)
  {
    book2.scale = 2
    story.x = 15000;
    suspects.scale = 0.12

    if(mousePressedOver(suspects))
    {
      gameState = 5;
    }
  }

  if(gameState === 5)
  {
    story.x = 15000;
    suspects.x = 15000;
    book2.x = 15000;

    softboard.scale = 1.5;
    softboard.x = 400;
    softboard.y = 170;

    suspectsTitle.scale = 0.8;
    ctitle.scale = 0.3;
    suspectsTitle.x = 430;
    ctitle.x = 350;

    ID.y = 350;
    ID.x = 350;
    cloth.y = 350;
    cloth.x = 260;

    brother.scale = 0.3;
    son.scale = 0.3;
    wife.scale = 0.3;
    brother.x = 400;
    son.x = 200;
    wife.x = 300;

    sonSbp.scale = 0.2;
    wifeSbp.scale = 0.2;
    brotherSbp.scale = 0.2; 

    crimeSceneB.scale = 0.2;
    crimeSceneB.y = 350;
    foreignsicB.scale = 0.2;
    foreignsicB.x = 620;

    if(mousePressedOver(ID))
    {
      ID.scale = 1.6
    }
    else
    {
      ID.scale = 0.14;
    }
    
    if(mousePressedOver(cloth))
    {
      cloth.scale = 1.3;
    }
    else
    {
      cloth.scale = 0.3;
    }

    if(mousePressedOver(son))
    {
      
      son.scale = 0.8;
      sonNote.scale = 1;
      sonSbp.x = sonNote.x;
      sonSbp.y = 315;
      sonSbp.scale = 0.6;
      
    }
    else
    {
      son.scale = 0.3;
      sonNote.scale = 0.000;
      sonSbp.x = 200;
      sonSbp.y = 180;
      sonSbp.scale = 0.2;
    }

    if(mousePressedOver(wife))
    {
      
      wife.scale = 0.8;
      wifeNote.scale = 1;
      wifeSbp.x = wifeNote.x;
      wifeSbp.y = 315;
      wifeSbp.scale = 0.6;
      
    }
    else
    {
      wife.scale = 0.3;
      wifeNote.scale = 0.000;
      wifeSbp.x = 300;
      wifeSbp.y = 180;
      wifeSbp.scale = 0.2;
    }

    if(mousePressedOver(brother))
    {
      
      brother.scale = 0.8;
      brotherNote.scale = 1;
      brotherSbp.x = brotherNote.x;
      brotherSbp.y = 315;
      brotherSbp.scale = 0.6;
      
    }
    else
    {
      brother.scale = 0.3;
      brotherNote.scale = 0.000;
      brotherSbp.x = 400;
      brotherSbp.y = 180;
      brotherSbp.scale = 0.2;
    }

    if(mousePressedOver(crimeSceneB))
    {
      crimeSceneB.x = 15000;
      foreignsicB.x = 15000;
      gameState = 3;
      suspects.x = 250;
    }

    if(mousePressedOver(foreignsicB))
    {
      foreignsicB.x = 15000;
      gameState = 6;
    }

  }

  if(gameState === 6)
  {
    softboard.scale = 1.5;
    softboard.x = 15000;
    softboard.y = 170;

    bg.x = 15000;

    suspectsTitle.x = 15000;
    ctitle.x = 15000;

    ID.y = 350;
    ID.x = 15000;
    cloth.y = 350;
    cloth.x = 15000;

    brother.x = 15000;
    son.x = 15000;
    wife.x = 15000;

    sonSbp.x = 15000;
    wifeSbp.x = 15000;
    brotherSbp.x = 15000; 

    crimeSceneB.x = 290;
    crimeSceneB.y = 290;
    foreignsicB.x = 15000;
    foreignsicB.x = 15000;
    suspects.x = 290;
    suspects.y = 470;
    suspects.scale = 0.09;
    guessB.scale = 0.2;
    guessB.x = 490;


    report.scale = 0.8;
    hand.scale = 0.6;
    male.scale = 0.6;

    report.x = 400;
    hand.x = 450;
    male.x = 350;

    if(mousePressedOver(crimeSceneB))
    {
      crimeSceneB.x = 15000;
      foreignsicB.x = 15000;
      guessB.x = 15000;
      gameState = 3;
      suspects.x = 250;
      suspects.y = 310;
    }

    if(mousePressedOver(suspects))
    {
      crimeSceneB.x = 490;
      guessB.x = 15000; 
      gameState = 5;
      report.x = 15000;
      hand.x = 15000;
      male.x = 15000;
    }

    if(mousePressedOver(guessB))
    {
      guessB.x = 15000;
      gameState = 7;
      crimeSceneB.x = 15000;
      foreignsicB.x = 15000;
      report.x = 15000;
      suspects.x = 15000;
    }
  } 

  if(gameState === 7)
  {
    softboard.x = 400;
    softboard.y = 170;

    ctitle.x = 270;
    suspectsTitle.x = 430;

    brother.x = 400;
    son.x = 200;
    wife.x = 300;

    sonSbp.x = 200;
    wifeSbp.x = 300;
    brotherSbp.x = 400;

    ID.y = 350;
    ID.x = 350;
    cloth.y = 350;
    cloth.x = 290;
    hand.x = 230;
    hand.y = 350;
    hand.scale = 0.2;
    male.x = 170;
    male.y = 350;
    male.scale = 0.2;

    if(mousePressedOver(ID))
    {
      ID.scale = 1.6
    }
    else
    {
      ID.scale = 0.14;
    }
    
    if(mousePressedOver(cloth))
    {
      cloth.scale = 1.3;
    }
    else
    {
      cloth.scale = 0.3;
    }

    if(mousePressedOver(hand))
    {
      handNote.x = 580;
      handNote.scale = 0.4;
    }
    else
    {
      handNote.x = 58000;
      handNote.scale = 0.000;
    }

    if(mousePressedOver(male))
    {
      maleNote.x = 580;
      maleNote.scale = 0.4;

    }
    else
    {
      maleNote.x = 58000;
      maleNote.scale = 0.000;
    }


    
    if(mousePressedOver(son))
    {
      son.scale = 0.35;
      arrestB.scale = 0.18;
      if(mousePressedOver(arrestB))
      {
        gameState = 8;
      }
    }

    if(mousePressedOver(wife))
    {
      wife.scale = 0.35;
      arrestB.scale = 0.18;
      if(mousePressedOver(arrestB))
      {
        gameState = 8;
      }
    }

    if(mousePressedOver(brother))
    {
      brother.scale = 0.35;
      arrestB.scale = 0.18;
      if(mousePressedOver(arrestB))
      {
        gameState = 9;
     }
  }
  }


  drawSprites();
}