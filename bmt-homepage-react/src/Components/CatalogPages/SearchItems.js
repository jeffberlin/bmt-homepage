const products = [
  {
    name: "A+ Screensaver",
    url: "http://www.softdd.com/screens/index.htm"
  },
  {
    name: "Aargon BlackBox",
    url: "http://www.twilightgames.com/"
  },
  {
    name: "Aargon Deluxe Gold",
    url: "http://www.twilightgames.com/"
  },
  {
    name: "AC Circuits Challenge",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "Access Elf",
    url: "http://www.elfsoft.com/"
  },
  {
    name: "Address N More",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/address-n-more"
    url: "/product/addressnmore"
  },
  {
    name: "Advanced Landscape Editor",
    url: "http://www.dyvision.co.uk/ale.htm"
  },
  {
    name: "Araxis Ketura",
    url: "https://www.araxis.com/ketura/"
  },
  {
    name: "Araxis Merge",
    url: "https://www.araxis.com/merge/"
  },
  {
    name: "ArcaMania",
    url: "http://www.300ad.com/arcamania.php"
  },
  {
    name: "ArcaMania 2",
    url: "http://www.300ad.com/arcamania2.php"
  },
  {
    name: "AutoSeam",
    url: "http://www.dyvision.co.uk/autoseam.htm"
  },
  {
    name: "AVI/MPG Screensaver",
    url: "http://www.softdd.com/aviscrn/index.htm"
  },
  {
    name: "Batch Rename .EXE",
    url: "http://www.stintercorp.com/purchase/br/"
  },
  {
    name: "Been There, Done That!",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Better Finder Rename",
    url: "http://www.publicspace.net/ABetterFinderRename/index.html"
  },
  {
    name: "Bootit Bare Metal",
    url: "http://www.terabyteunlimited.com/bootit-bare-metal.htm"
  },
  {
    name: "Bricks of Egypt",
    url: "http://www.arcadelab.com/egypt.html"
  },
  {
    name: "Challenges for Electricity",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "Camp Buddy",
    url: "https://www.blitsgames.com/"
  },
  {
    name: "CDStartDummy!",
    url: "http://www.dummysoftware.com/cdstart.html"
  },
  {
    name: "Charlie II",
    url: "http://www.wieringsoftware.nl/ch2/"
  },
  {
    name: "Charlie the Duck",
    url: "http://www.wieringsoftware.nl/charlie/"
  },
  {
    name: "CHM4Clarion",
    url: "http://www.carlbarnes.com/chm4clarion.htm"
  },
  {
    name: "Church Office Professional",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Church Secretary 32",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Church Secretary Pro Edition",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Clarion Source Search",
    url: "http://www.carlbarnes.com/css.htm"
  },
  {
    name: "Cloud Secure",
    url: "http://www.newsoftwares.net/cloud-secure/"
  },
  {
    name: "Coin Planets",
    url: "http://www.addictive247.co.uk/coinplanets.htm"
  },
  {
    name: "Colony",
    url: "http://www.midnightsynergy.com/colony/"
  },
  {
    name: "Copy Protect",
    url: "http://www.newsoftwares.net/copy-protect/"
  },
  {
    name: "Complete Cleanup",
    url: "http://www.softdd.com/complete/index.htm"
  },
  {
    name: "Crystal Cave Gold",
    url: "http://www.300ad.com/crystal_cave_gold.php"
  },
  {
    name: "CW Assistant",
    url: "http://www.carlbarnes.com/cwa.htm"
  },
  {
    name: "Digital Challenge",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "DC Circuits Challenge",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "DataRevelation",
    url: "http://www.datarevelation.com/"
  },
  {
    name: "DBS Help Desk",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Demon Star",
    url: "http://www.mking.com/demonstar_game.html"
  },
  {
    name: "Demon Star - Secret Missions 1",
    url: "http://www.mking.com/demonstarsm1_game.html"
  },
  {
    name: "Demon Star - Secret Missions 2",
    url: "http://www.mking.com/demonstarsm2_game.html"
  },
  {
    name: "Digi Pool",
    url: "http://www.arcadelab.com/digipool.html"
  },
  {
    name: "Documents Illustrative",
    url: "http://www.documentsillustrative.com/"
  },
  {
    name: "DRECKBAK",
    url: "http://weismer.virtualave.net/DreckBak.html"
  },
  {
    name: "Drippy",
    url: "http://www.screamingduck.com/Drippy.php"
  },
  {
    name: "Dupli Find",
    url: "http://www.rlvision.com/dupli/about.php"
  },
  {
    name: "DvD PixPlay",
    url: "http://www.xequte.com/pixplay/index.html"
  },
  {
    name: "Easyscreen",
    url: "http://www.softdd.com/escreen/index.htm"
  },
  {
    name: "eComStation",
    url: "http://www.ecomstation.com/"
  },
  {
    name: "Electronic Teller",
    url: "http://home.cybrnet.net/~phcaron/index.html"
  },
  {
    name: "Empire Deluxe Enhanced Edition",
    url: "http://www.killerbeesoftware.com/kbsgames/edee/"
  },
  {
    name: "Empire Deluxe Internet Edition",
    url: "http://www.killerbeesoftware.com/kbsgames/ednew/"
  },
  {
    name: "EZDetach",
    url: "http://www.techhit.com/ezdetach/outlook_attachments.html"
  },
  {
    name: "Employee Schedule",
    url: "https://bmtmicro.com/bmtcatalog/products/employee-schedule"
  },
  {
    name: "File Commander/2",
    url: "https://www.bmtmicro.com/bmtcatalog/products/file-commander2"
  },
  {
    name: "File Commander for Win95/NT",
    url: "https://www.bmtmicro.com/bmtcatalog/products/file-commander-win"
  },
  {
    name: "File Splitter Deluxe",
    url: "http://www.softdd.com/filesplt/index.htm"
  },
  {
    name: "Fitznik",
    url: "http://www.screamingduck.com/Fitznik.php"
  },
  {
    name: "Fitznik 2",
    url: "http://www.screamingduck.com/Fitznik%202.php"
  },
  {
    name: "Flash Renamer",
    url: "http://www.rlvision.com/flashren/about.php"
  },
  {
    name: "FlyTampa Simulation",
    url: "http://www.flytampa.org/"
  },
  {
    name: "Folderlock",
    url: "http://www.newsoftwares.net/folderlock/"
  },
  {
    name: "Folderlock lite",
    url: "http://www.newsoftwares.net/folderlock/lite/"
  },
  {
    name: "Folder Protect",
    url: "http://www.newsoftwares.net/folder-protect/"
  },
  {
    name: "Frazzled",
    url: "http://www.midnightsynergy.com/frazzled/"
  },
  {
    name: "Frozzic's Revenge",
    url: "http://www.twilightgames.com/"
  },
  {
    name: "FTP Control 4.0",
    url: "http://www.ftpcontrol.com/"
  },
  {
    name: "Funny Faces",
    url: "http://www.arcadelab.com/face.html"
  },
  {
    name: "FeelThere",
    url: "https://www.feelthere.com/"
  },
  {
    name: "The Goalkeeper",
    url: "http://www.winterwolves.com/thegoalkeeper.htm"
  },
  {
    name: "Gold Miner Joe",
    url: "http://www.arcadelab.com/miner.html"
  },
  {
    name: "Goobs",
    url: "https://www.bmtmicro.com/bmtcatalog/products/goobs"
  },
  {
    name: "Gravity Core by Suisoft ",
    url: "http://www.suisoft.co.uk/gravitycore/index.htm"
  },
  {
    name: "IconSaver",
    url: "http://www.iconsaver.com/index.html"
  },
  {
    name: "Image Converter .EXE",
    url: "http://www.stintercorp.com/ic/"
  },
  {
    name: "ImageGrabDummy",
    url: "http://www.dummysoftware.com/imagegrabdummy.html"
  },
  {
    name: "Image Thumbnailer and Converter",
    url: "http://www.softdd.com/thumbnailer/index.htm"
  },
  {
    name: "Image for DOS",
    url: "http://www.terabyteunlimited.com/image-for-dos.htm"
  },
  {
    name: "Image for Linux",
    url: "http://www.terabyteunlimited.com/image-for-linux.htm"
  },
  {
    name: "Image for Windows",
    url: "http://www.terabyteunlimited.com/image-for-windows.htm"
  },
  {
    name: "In Charge!",
    url: "https://www.bmtmicro.com/bmtcatalog/products/incharge"
  },
  {
    name: "Inflater Ball",
    url: "http://www.dyvision.co.uk/ifbinfo.htm"
  },
  {
    name: "Intensity XS",
    url: "http://www.midnightsynergy.com/intensity/"
  },
  {
    name: "Intensity XS: ReCharge",
    url: "http://www.midnightsynergy.com/recharge/"
  },
  {
    name: "Invadazoid",
    url: "http://www.bantamcity.com/invadazoid/"
  },
  {
    name: "Jack of All Trades",
    url: "http://www.dingogames.com/jack/"
  },
  {
    name: "Jump To Window",
    url: "http://www.techhit.com/JumpToWindow/"
  },
  {
    name: "Journal 8",
    url: "http://www.davidrm.com/"
  },
  {
    name: "Laser Dolphin",
    url: "http://www.dingogames.com/dolphin/"
  },
  {
    name: "Lesson Planner for Windows 2",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Lesson Planner Plus",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Magellan Explorer",
    url: "http://www.enriva.com/"
  },
  {
    name: "Mahjong Suite",
    url: "http://www.mahjongsuite.com/"
  },
  {
    name: "MailBell",
    url: "https://www.emtec.com/mailbell/index.html"
  },
  {
    name: "Mailist King Pro",
    url: "http://www.xequte.com/maillistking/index.html"
  },
  {
    name: "Maul Publisher",
    url: "http://www.manglais.com/index.html"
  },
  {
    name: "MegaView",
    url: "http://www.xequte.com/megaview/index.html"
  },
  {
    name: "MessageSave",
    url: "http://www.techhit.com/messagesave/"
  },
  {
    name: "Midnight Synergy Games Collection CD",
    url: "http://www.midnightsynergy.com/collectioninfo/"
  },
  {
    name: "Moneydance",
    url: "http://moneydance.com/"
  },
  {
    name: "Money Quiz-Counter",
    url: "https://www.bmtmicro.com/bmtcatalog/products/money-quiz-counter"
  },
  {
    name: "Mr Cool Ball",
    url: "https://www.warlockstudio.com/mcb.php"
  },
  {
    name: "MX Simulator",
    url: "http://mxsimulator.com/"
  },
  {
    name: "My Problem Solved!",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Netdrive",
    url: "https://www.bmtmicro.com/bmtcatalog/products/net-drive"
  },
  {
    name: "Num-Blocks",
    url: "http://www.uppergroove.com/numblocks.htm"
  },
  {
    name: "Num2Alpha ActiveX DLL",
    url: "http://www.ancientsoft.com/num2alpha.htm"
  },
  {
    name: "Ohmmeter Challenge",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "Op Amp Challenge",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "Olaf & Elmar",
    url: "http://www.wieringsoftware.nl/"
  },
  {
    name: "Once Twice Thrice",
    url: "http://www.questengine.com/"
  },
  {
    name: "One Man Band",
    url: "http://www.1manband.nl/omb.htm"
  },
  {
    name: "OS/2 e-Zine!",
    url: "https://www.bmtmicro.com/bmtcatalog/products/os-ezine"
  },
  {
    name: "Power Supply Challenge",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "Paul's Graphic Viewer",
    url: "http://www.deleeuw.com.au/"
  },
  {
    name: "PC Spy",
    url: "http://www.softdd.com/pc-spy-software/index.html"
  },
  {
    name: "Peepers",
    url: "http://www.smartmelon.com/peepers/"
  },
  {
    name: "Personal Knowbase",
    url: "http://www.bitsmithsoft.com/product.htm"
  },
  {
    name: "Personal Time Keeper",
    url: "https://www.bmtmicro.com/bmtcatalog/products/personal-time-keeper"
  },
  {
    name: "Pharaoh's Curse Gold",
    url: "http://www.ancientsoft.com/pharaohs_curse.htm"
  },
  {
    name: "Pharaoh's Treasure",
    url: "http://www.ancientsoft.com/pharaohstreasure.htm"
  },
  {
    name: "Picture Viewer .EXE",
    url: "http://www.stintercorp.com/purchase/pv/"
  },
  {
    name: "Pipeline Plus",
    url: "https://www.bmtmicro.com/bmtcatalog/products/pipeline-plus"
  },
  {
    name: "Pirates of Treasure Island",
    url: "http://www.arcadelab.com/pirates.html"
  },
  {
    name: "PMView Pro",
    url: "http://www.pmview.com/"
  },
  {
    name: "Pocket Tanks Deluxe",
    url: "http://www.blitwise.com/ptanks.html"
  },
  {
    name: "Pocket Tanks Deluxe - MAC Edition",
    url: "http://www.blitwise.com/ptanksdeluxe_mac.html"
  },
  {
    name: "PopUpDummy!",
    url: "http://www.dummysoftware.com/popupdummy.html"
  },
  {
    name: "Problem Solved! 1.45",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Public Space",
    url: "http://www.publicspace.net/"
  },
  {
    name: "PD Howler",
    url: "https://thebest3d.com/howler/index.html"
  },
  {
    name: "PD Particles",
    url: "https://www.thebest3d.com/pdp/index9.html"
  },
  {
    name: "PD Artist",
    url: "https://www.thebest3d.com/pda/index11.html"
  },
  {
    name: "QuickJump",
    url: "http://www.techhit.com/QuickJump/open_navigate_windows_folders.html"
  },
  {
    name: "Raptor",
    url: "http://www.mking.com/raptor_game.html"
  },
  {
    name: "RatMaster",
    url: "http://www.twilightgames.com/"
  },
  {
    name: "Ravenskull",
    url: "https://www.bmtmicro.com/bmtcatalog/products/ravenskull"
  },
  {
    name: "Repton 1",
    url: "https://www.bmtmicro.com/bmtcatalog/products/repton1"
  },
  {
    name: "Return on Investment Solver",
    url: "http://www.roisolver.com/"
  },
  {
    name: "Return to Wonderland Platinum Edition",
    url: "http://www.midnightsynergy.com/returntowonderland/"
  },
  {
    name: "Rock'n'Roll 2004",
    url: "http://www.300ad.com/rnr2004.php"
  },
  {
    name: "ScreenSaver",
    url: "https://www.bmtmicro.com/bmtcatalog/products/screensaver"
  },
  {
    name: "SDI LPD",
    url: "http://www.sdisw.com/LPD/default.htm"
  },
  {
    name: "SeriousTeaches",
    url: "http://www.seriousteachers.com/"
  },
  {
    name: "SendAware",
    url: "http://www.techhit.com/SendAware/"
  },
  {
    name: "SharpEye",
    url: "http://www.visiv.co.uk/"
  },
  {
    name: "SharpEye2",
    url: "http://www.visiv.co.uk/"
  },
  {
    name: "SimplyFile",
    url: "http://www.techhit.com/SimplyFile/"
  },
  {
    name: "SimplyTag",
    url: "http://www.techhit.com/SimplyTag/"
  },
  {
    name: "Smart Pix Manager",
    url: "http://www.xequte.com/smartpix/index.html"
  },
  {
    name: "A Snake's Life",
    url: "http://www.twilightgames.com/"
  },
  {
    name: "SnakeTris",
    url: "http://www.dyvision.co.uk/snaketris.htm"
  },
  {
    name: "SoftSew Design",
    url: "http://www.softsew.com/products.htm"
  },
  {
    name: "Solitaire City",
    url: "http://www.solitairecity.com/Main.shtml"
  },
  {
    name: "SolSuite - Solitaire Card Games Suite",
    url: "http://solsuite.com/"
  },
  {
    name: "Splash 3D Classic",
    url: "http://www.pixelescape.com/games.html"
  },
  {
    name: "SRM Help Desk 2000",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Start Menu Organizer",
    url: "http://www.winstep.net/startmenuorganizer.asp"
  },
  {
    name: "Sudoku Up",
    url: "http://www.sudokuup.com/"
  },
  {
    name: "Super Bubble Mania",
    url: "http://www.pixelescape.com/games.html"
  },
  {
    name: "Super DX-Ball Deluxe",
    url: "http://www.blitwise.com/superdxb.html"
  },
  {
    name: "Super Splash 3D",
    url: "http://www.pixelescape.com/games.html"
  },
  {
    name: "Supernova: Galactic Wars",
    url: "http://www.winterwolves.com/supernova.htm"
  },
  {
    name: "Superstar Chefs",
    url: "http://www.arcadelab.com/chefs.html"
  },
  {
    name: "Super Worms",
    url: "http://www.wieringsoftware.nl/sw/"
  },
  {
    name: "Swift to-do list",
    url: "http://www.dextronet.com/"
  },
  {
    name: "Trigonometry Challenge",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "Transistor Challenge",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "Taskforce 3",
    url: "http://www.uppergroove.com/task3.htm"
  },
  {
    name: "Taskforce 4",
    url: "http://www.uppergroove.com/task4.htm"
  },
  {
    name: "Team Sports Scheduling System v5",
    url: "http://www.galactix.com/tsss/index.html"
  },
  {
    name: "Terabyte Unlimited",
    url: "https://www.terabyteunlimited.com/"
  },
  {
    name: "Time-Lapse Tool Pro",
    url: "http://timelapsetool.com/"
  },
  {
    name: "Tizzie's Bubble Chase",
    url: "http://www.uppergroove.com/tizzbub.htm"
  },
  {
    name: "Tizzie's Bug Revenge",
    url: "http://www.uppergroove.com/tizzbug.htm"
  },
  {
    name: "TK-Tools",
    url: "https://www.bmtmicro.com/bmtcatalog/products/tk-tools"
  },
  {
    name: "TN3270 Plus",
    url: "http://www.sdisw.com/"
  },
  {
    name: "Total Game Control",
    url: "http://www.digitaltransforms.com/"
  },
  {
    name: "Treasure Fall",
    url: "http://www.mking.com/treasurefall_game.html"
  },
  {
    name: "Trials of Werlin",
    url: "http://www.bantamcity.com/werlin/"
  },
  {
    name: "Turbo Business Apps for Linux",
    url: "https://www.bmtmicro.com/bmtcatalog/products/turbo-business-linux"
  },
  {
    name: "TurboHex",
    url: "http://www.genkisoft.com/turbohex.shtml"
  },
  {
    name: "Twilight Mahjongg",
    url: "http://www.twilightgames.com/"
  },
  {
    name: "Twilight Simple Mahjongg",
    url: "http://www.twilightgames.com/"
  },
  {
    name: "Ultimate Boxing Manager",
    url: "http://www.winterwolves.com/universalboxingmanager.htm"
  },
  {
    name: "USB Secure",
    url: "http://www.newsoftwares.net/usb-secure/"
  },
  {
    name: "USB Block",
    url: "http://www.newsoftwares.net/usb-block/"
  },
  {
    name: "Voltmeter Challenge",
    url: "https://www.etcai.com/site.html"
  },
  {
    name: "V - The File Viewer",
    url: "http://www.fileviewer.com/index.html"
  },
  {
    name: "VeggieBreak",
    url: "http://www.uppergroove.com/veggiebreak.htm"
  },
  {
    name: "VeggieBreak Kids",
    url: "http://www.uppergroove.com/veggiebreak_kids.htm"
  },
  {
    name: "VOICE Memberships",
    url: "https://www.bmtmicro.com/bmtcatalog/products/voice-memberships"
  },
  {
    name: "Watch Directory",
    url: "http://www.watchdirectory.net/"
  },
  {
    name: "Where's The Bus?",
    url: "http://www.dbandsons.com/"
  },
  {
    name: "Wiggilez Blast",
    url: "http://www.uppergroove.com/wiggilez.htm"
  },
  {
    name: "Winstep Nexus",
    url: "http://www.winstep.net/nexus.asp"
  },
  {
    name: "Winstep Xtreme",
    url: "http://www.winstep.net/xtreme.asp"
  },
  {
    name: "Wonderland",
    url: "http://www.midnightsynergy.com/wonderland/"
  },
  {
    name: "Wonderland Adventures",
    url: "http://www.midnightsynergy.com/adventures/"
  },
  {
    name: "Wonderland Adventures: Mysteries of Fire Island",
    url: "http://www.midnightsynergy.com/adventures2/"
  },
  {
    name: "Wonderland Secret Worlds",
    url: "http://www.midnightsynergy.com/secretworlds/"
  },
  {
    name: "Workplace Security for OS/2 Warp",
    url: "https://www.bmtmicro.com/bmtcatalog/products/workplace-security"
  },
  {
    name: "ZModeler2",
    url: "http://www.zmodeler2.com/"
  },
  {
    name: "ZOC",
    url: "https://www.emtec.com/zoc/index.html"
  },
  {
    name: "ZTreeBold",
    url: "http://www.ztree.com/html/ztreebold.htm"
  },
  {
    name: "ZTreeWin",
    url: "http://www.ztree.com/html/ztreewin.htm"
  },
  {
    name: "Chantell's Creations",
    url: "http://www.chantells-creations.com"
  },
  {
    name: "Designs by Petro",
    url: "http://www.designsbypetro.com/"
  },
  {
    name: "Threads n Scissors",
    url: "http://www.threadsnscissors.com/"
  },
  {
    name: "Inspiration Mutz Embroidery",
    url: "http://www.inspirationmutz.com/"
  },
  {
    name: "Elsa's Designs",
    url: "http://www.elsasdesigns.com/"
  },
  {
    name: "SoftSew",
    url: "http://www.softsew.com/"
  }
]

export default products;
