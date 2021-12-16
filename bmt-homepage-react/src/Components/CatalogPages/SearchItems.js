const products = [
  {
    name: "A+ Screensaver",
    url: "http://www.softdd.com/screens/index.htm",
    target: "_blank"
  },
  {
    name: "Aargon BlackBox",
    url: "http://www.twilightgames.com/",
    target: "_blank"
  },
  {
    name: "Aargon Deluxe Gold",
    url: "http://www.twilightgames.com/",
    target: "_blank"
  },
  {
    name: "AC Circuits Challenge",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "Access Elf",
    url: "http://www.elfsoft.com/",
    target: "_blank"
  },
  {
    name: "Address N More",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/address-n-more"
    url: "/product/addressnmore",
    target: "_self"
  },
  {
    name: "Advanced Landscape Editor",
    url: "http://www.dyvision.co.uk/ale.htm",
    target: "_blank"
  },
  {
    name: "Araxis Ketura",
    url: "https://www.araxis.com/ketura/",
    target: "_blank"
  },
  {
    name: "Araxis Merge",
    url: "https://www.araxis.com/merge/",
    target: "_blank"
  },
  {
    name: "ArcaMania",
    url: "http://www.300ad.com/arcamania.php",
    target: "_blank"
  },
  {
    name: "ArcaMania 2",
    url: "http://www.300ad.com/arcamania2.php",
    target: "_blank"
  },
  {
    name: "AutoSeam",
    url: "http://www.dyvision.co.uk/autoseam.htm",
    target: "_blank"
  },
  {
    name: "AVI/MPG Screensaver",
    url: "http://www.softdd.com/aviscrn/index.htm",
    target: "_blank"
  },
  {
    name: "Batch Rename .EXE",
    url: "http://www.stintercorp.com/purchase/br/",
    target: "_blank"
  },
  {
    name: "Been There, Done That!",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Better Finder Rename",
    url: "http://www.publicspace.net/ABetterFinderRename/index.html",
    target: "_blank"
  },
  {
    name: "Bootit Bare Metal",
    url: "http://www.terabyteunlimited.com/bootit-bare-metal.htm",
    target: "_blank"
  },
  {
    name: "Bricks of Egypt",
    url: "http://www.arcadelab.com/egypt.html",
    target: "_blank"
  },
  {
    name: "Challenges for Electricity",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "Camp Buddy",
    url: "https://www.blitsgames.com/",
    target: "_blank"
  },
  {
    name: "CDStartDummy!",
    url: "http://www.dummysoftware.com/cdstart.html",
    target: "_blank"
  },
  {
    name: "Charlie II",
    url: "http://www.wieringsoftware.nl/ch2/",
    target: "_blank"
  },
  {
    name: "Charlie the Duck",
    url: "http://www.wieringsoftware.nl/charlie/",
    target: "_blank"
  },
  {
    name: "CHM4Clarion",
    url: "http://www.carlbarnes.com/chm4clarion.htm",
    target: "_blank"
  },
  {
    name: "Church Office Professional",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Church Secretary 32",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Church Secretary Pro Edition",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Clarion Source Search",
    url: "http://www.carlbarnes.com/css.htm",
    target: "_blank"
  },
  {
    name: "Cloud Secure",
    url: "http://www.newsoftwares.net/cloud-secure/",
    target: "_blank"
  },
  {
    name: "Coin Planets",
    url: "http://www.addictive247.co.uk/coinplanets.htm",
    target: "_blank"
  },
  {
    name: "Colony",
    url: "http://www.midnightsynergy.com/colony/",
    target: "_blank"
  },
  {
    name: "Copy Protect",
    url: "http://www.newsoftwares.net/copy-protect/",
    target: "_blank"
  },
  {
    name: "Complete Cleanup",
    url: "http://www.softdd.com/complete/index.htm",
    target: "_blank"
  },
  {
    name: "Crystal Cave Gold",
    url: "http://www.300ad.com/crystal_cave_gold.php",
    target: "_blank"
  },
  {
    name: "CW Assistant",
    url: "http://www.carlbarnes.com/cwa.htm",
    target: "_blank"
  },
  {
    name: "Digital Challenge",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "DC Circuits Challenge",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "DataRevelation",
    url: "http://www.datarevelation.com/",
    target: "_blank"
  },
  {
    name: "DBS Help Desk",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Demon Star",
    url: "http://www.mking.com/demonstar_game.html",
    target: "_blank"
  },
  {
    name: "Demon Star - Secret Missions 1",
    url: "http://www.mking.com/demonstarsm1_game.html",
    target: "_blank"
  },
  {
    name: "Demon Star - Secret Missions 2",
    url: "http://www.mking.com/demonstarsm2_game.html",
    target: "_blank"
  },
  {
    name: "Digi Pool",
    url: "http://www.arcadelab.com/digipool.html",
    target: "_blank"
  },
  {
    name: "Documents Illustrative",
    url: "http://www.documentsillustrative.com/",
    target: "_blank"
  },
  {
    name: "DRECKBAK",
    url: "http://weismer.virtualave.net/DreckBak.html",
    target: "_blank"
  },
  {
    name: "Drippy",
    url: "http://www.screamingduck.com/Drippy.php",
    target: "_blank"
  },
  {
    name: "Dupli Find",
    url: "http://www.rlvision.com/dupli/about.php",
    target: "_blank"
  },
  {
    name: "DvD PixPlay",
    url: "http://www.xequte.com/pixplay/index.html",
    target: "_blank"
  },
  {
    name: "Easyscreen",
    url: "http://www.softdd.com/escreen/index.htm",
    target: "_blank"
  },
  {
    name: "eComStation",
    url: "http://www.ecomstation.com/",
    target: "_blank"
  },
  {
    name: "Electronic Teller",
    url: "http://home.cybrnet.net/~phcaron/index.html",
    target: "_blank"
  },
  {
    name: "Empire Deluxe Enhanced Edition",
    url: "http://www.killerbeesoftware.com/kbsgames/edee/",
    target: "_blank"
  },
  {
    name: "Empire Deluxe Internet Edition",
    url: "http://www.killerbeesoftware.com/kbsgames/ednew/",
    target: "_blank"
  },
  {
    name: "EZDetach",
    url: "http://www.techhit.com/ezdetach/outlook_attachments.html",
    target: "_blank"
  },
  {
    name: "Employee Schedule",
    // url: "https://bmtmicro.com/bmtcatalog/products/employee-schedule"
    url: "/product/employeeschedule",
    target: "_self"
  },
  {
    name: "File Commander/2",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/file-commander2",
    url: "/product/filecommander2",
    target: "_self"
  },
  {
    name: "File Commander for Win95/NT",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/file-commander-win",
    url: "/product/filecommanderwin",
    target: "_self"
  },
  {
    name: "File Splitter Deluxe",
    url: "http://www.softdd.com/filesplt/index.htm",
    target: "_blank"
  },
  {
    name: "Fitznik",
    url: "http://www.screamingduck.com/Fitznik.php",
    target: "_blank"
  },
  {
    name: "Fitznik 2",
    url: "http://www.screamingduck.com/Fitznik%202.php",
    target: "_blank"
  },
  {
    name: "Flash Renamer",
    url: "http://www.rlvision.com/flashren/about.php",
    target: "_blank"
  },
  {
    name: "FlyTampa Simulation",
    url: "http://www.flytampa.org/",
    target: "_blank"
  },
  {
    name: "Folderlock",
    url: "http://www.newsoftwares.net/folderlock/",
    target: "_blank"
  },
  {
    name: "Folderlock lite",
    url: "http://www.newsoftwares.net/folderlock/lite/",
    target: "_blank"
  },
  {
    name: "Folder Protect",
    url: "http://www.newsoftwares.net/folder-protect/",
    target: "_blank"
  },
  {
    name: "Frazzled",
    url: "http://www.midnightsynergy.com/frazzled/",
    target: "_blank"
  },
  {
    name: "Frozzic's Revenge",
    url: "http://www.twilightgames.com/",
    target: "_blank"
  },
  {
    name: "FTP Control 4.0",
    url: "http://www.ftpcontrol.com/",
    target: "_blank"
  },
  {
    name: "Funny Faces",
    url: "http://www.arcadelab.com/face.html",
    target: "_blank"
  },
  {
    name: "FeelThere",
    url: "https://www.feelthere.com/",
    target: "_blank"
  },
  {
    name: "The Goalkeeper",
    url: "http://www.winterwolves.com/thegoalkeeper.htm",
    target: "_blank"
  },
  {
    name: "Gold Miner Joe",
    url: "http://www.arcadelab.com/miner.html",
    target: "_blank"
  },
  {
    name: "Goobs",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/goobs",
    url: "/product/goobs",
    target: "_self"
  },
  {
    name: "Gravity Core by Suisoft ",
    url: "http://www.suisoft.co.uk/gravitycore/index.htm",
    target: "_blank"
  },
  {
    name: "IconSaver",
    url: "http://www.iconsaver.com/index.html",
    target: "_blank"
  },
  {
    name: "Image Converter .EXE",
    url: "http://www.stintercorp.com/ic/",
    target: "_blank"
  },
  {
    name: "ImageGrabDummy",
    url: "http://www.dummysoftware.com/imagegrabdummy.html",
    target: "_blank"
  },
  {
    name: "Image Thumbnailer and Converter",
    url: "http://www.softdd.com/thumbnailer/index.htm",
    target: "_blank"
  },
  {
    name: "Image for DOS",
    url: "http://www.terabyteunlimited.com/image-for-dos.htm",
    target: "_blank"
  },
  {
    name: "Image for Linux",
    url: "http://www.terabyteunlimited.com/image-for-linux.htm",
    target: "_blank"
  },
  {
    name: "Image for Windows",
    url: "http://www.terabyteunlimited.com/image-for-windows.htm",
    target: "_blank"
  },
  {
    name: "In Charge!",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/incharge",
    url: "/product/incharge",
    target: "_self"
  },
  {
    name: "Inflater Ball",
    url: "http://www.dyvision.co.uk/ifbinfo.htm",
    target: "_blank"
  },
  {
    name: "Intensity XS",
    url: "http://www.midnightsynergy.com/intensity/",
    target: "_blank"
  },
  {
    name: "Intensity XS: ReCharge",
    url: "http://www.midnightsynergy.com/recharge/",
    target: "_blank"
  },
  {
    name: "Invadazoid",
    url: "http://www.bantamcity.com/invadazoid/",
    target: "_blank"
  },
  {
    name: "Jack of All Trades",
    url: "http://www.dingogames.com/jack/",
    target: "_blank"
  },
  {
    name: "Jump To Window",
    url: "http://www.techhit.com/JumpToWindow/",
    target: "_blank"
  },
  {
    name: "Journal 8",
    url: "http://www.davidrm.com/",
    target: "_blank"
  },
  {
    name: "Laser Dolphin",
    url: "http://www.dingogames.com/dolphin/",
    target: "_blank"
  },
  {
    name: "Lesson Planner for Windows 2",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Lesson Planner Plus",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Magellan Explorer",
    url: "http://www.enriva.com/",
    target: "_blank"
  },
  {
    name: "Mahjong Suite",
    url: "http://www.mahjongsuite.com/",
    target: "_blank"
  },
  {
    name: "MailBell",
    url: "https://www.emtec.com/mailbell/index.html",
    target: "_blank"
  },
  {
    name: "Mailist King Pro",
    url: "http://www.xequte.com/maillistking/index.html",
    target: "_blank"
  },
  {
    name: "Maul Publisher",
    url: "http://www.manglais.com/index.html",
    target: "_blank"
  },
  {
    name: "MegaView",
    url: "http://www.xequte.com/megaview/index.html",
    target: "_blank"
  },
  {
    name: "MessageSave",
    url: "http://www.techhit.com/messagesave/",
    target: "_blank"
  },
  {
    name: "Midnight Synergy Games Collection CD",
    url: "http://www.midnightsynergy.com/collectioninfo/",
    target: "_blank"
  },
  {
    name: "Moneydance",
    url: "http://moneydance.com/",
    target: "_blank"
  },
  {
    name: "Money Quiz-Counter",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/money-quiz-counter",
    url: "/product/moneyquizcounter",
    target: "_self"
  },
  {
    name: "Mr Cool Ball",
    url: "https://www.warlockstudio.com/mcb.php",
    target: "_blank"
  },
  {
    name: "MX Simulator",
    url: "http://mxsimulator.com/",
    target: "_blank"
  },
  {
    name: "My Problem Solved!",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Netdrive",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/net-drive",
    url: "/product/netdrive",
    target: "_self"
  },
  {
    name: "Num-Blocks",
    url: "http://www.uppergroove.com/numblocks.htm",
    target: "_blank"
  },
  {
    name: "Num2Alpha ActiveX DLL",
    url: "http://www.ancientsoft.com/num2alpha.htm",
    target: "_blank"
  },
  {
    name: "Ohmmeter Challenge",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "Op Amp Challenge",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "Olaf & Elmar",
    url: "http://www.wieringsoftware.nl/",
    target: "_blank"
  },
  {
    name: "Once Twice Thrice",
    url: "http://www.questengine.com/",
    target: "_blank"
  },
  {
    name: "One Man Band",
    url: "http://www.1manband.nl/omb.htm",
    target: "_blank"
  },
  {
    name: "OS/2 e-Zine!",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/os-ezine",
    url: "/product/osezine",
    target: "_self"
  },
  {
    name: "Power Supply Challenge",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "Paul's Graphic Viewer",
    url: "http://www.deleeuw.com.au/",
    target: "_blank"
  },
  {
    name: "PC Spy",
    url: "http://www.softdd.com/pc-spy-software/index.html",
    target: "_blank"
  },
  {
    name: "Peepers",
    url: "http://www.smartmelon.com/peepers/",
    target: "_blank"
  },
  {
    name: "Personal Knowbase",
    url: "http://www.bitsmithsoft.com/product.htm",
    target: "_blank"
  },
  {
    name: "Personal Time Keeper",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/personal-time-keeper",
    url: "/product/personaltimekeeper",
    target: "_self"
  },
  {
    name: "Pharaoh's Curse Gold",
    url: "http://www.ancientsoft.com/pharaohs_curse.htm",
    target: "_blank"
  },
  {
    name: "Pharaoh's Treasure",
    url: "http://www.ancientsoft.com/pharaohstreasure.htm",
    target: "_blank"
  },
  {
    name: "Picture Viewer .EXE",
    url: "http://www.stintercorp.com/purchase/pv/",
    target: "_blank"
  },
  {
    name: "Pipeline Plus",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/pipeline-plus",
    url: "/product/pipelineplus",
    target: "_self"
  },
  {
    name: "Pirates of Treasure Island",
    url: "http://www.arcadelab.com/pirates.html",
    target: "_blank"
  },
  {
    name: "PMView Pro",
    url: "http://www.pmview.com/",
    target: "_blank"
  },
  {
    name: "Pocket Tanks Deluxe",
    url: "http://www.blitwise.com/ptanks.html",
    target: "_blank"
  },
  {
    name: "Pocket Tanks Deluxe - MAC Edition",
    url: "http://www.blitwise.com/ptanksdeluxe_mac.html",
    target: "_blank"
  },
  {
    name: "PopUpDummy!",
    url: "http://www.dummysoftware.com/popupdummy.html",
    target: "_blank"
  },
  {
    name: "Problem Solved! 1.45",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Public Space",
    url: "http://www.publicspace.net/",
    target: "_blank"
  },
  {
    name: "PD Howler",
    url: "https://thebest3d.com/howler/index.html",
    target: "_blank"
  },
  {
    name: "PD Particles",
    url: "https://www.thebest3d.com/pdp/index9.html",
    target: "_blank"
  },
  {
    name: "PD Artist",
    url: "https://www.thebest3d.com/pda/index11.html",
    target: "_blank"
  },
  {
    name: "QuickJump",
    url: "http://www.techhit.com/QuickJump/open_navigate_windows_folders.html",
    target: "_blank"
  },
  {
    name: "Raptor",
    url: "http://www.mking.com/raptor_game.html",
    target: "_blank"
  },
  {
    name: "RatMaster",
    url: "http://www.twilightgames.com/",
    target: "_blank"
  },
  {
    name: "Ravenskull",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/ravenskull",
    url: "/product/ravenskull",
    target: "_self"
  },
  {
    name: "Repton 1",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/repton1",
    url: "/product/repton1",
    target: "_self"
  },
  {
    name: "Return on Investment Solver",
    url: "http://www.roisolver.com/",
    target: "_blank"
  },
  {
    name: "Return to Wonderland Platinum Edition",
    url: "http://www.midnightsynergy.com/returntowonderland/",
    target: "_blank"
  },
  {
    name: "Rock'n'Roll 2004",
    url: "http://www.300ad.com/rnr2004.php",
    target: "_blank"
  },
  {
    name: "ScreenSaver",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/screensaver",
    url: "/product/screensaver",
    target: "_self"
  },
  {
    name: "SDI LPD",
    url: "http://www.sdisw.com/LPD/default.htm",
    target: "_blank"
  },
  {
    name: "SeriousTeaches",
    url: "http://www.seriousteachers.com/",
    target: "_blank"
  },
  {
    name: "SendAware",
    url: "http://www.techhit.com/SendAware/",
    target: "_blank"
  },
  {
    name: "SharpEye",
    url: "http://www.visiv.co.uk/",
    target: "_blank"
  },
  {
    name: "SharpEye2",
    url: "http://www.visiv.co.uk/",
    target: "_blank"
  },
  {
    name: "SimplyFile",
    url: "http://www.techhit.com/SimplyFile/",
    target: "_blank"
  },
  {
    name: "SimplyTag",
    url: "http://www.techhit.com/SimplyTag/",
    target: "_blank"
  },
  {
    name: "Smart Pix Manager",
    url: "http://www.xequte.com/smartpix/index.html",
    target: "_blank"
  },
  {
    name: "A Snake's Life",
    url: "http://www.twilightgames.com/",
    target: "_blank"
  },
  {
    name: "SnakeTris",
    url: "http://www.dyvision.co.uk/snaketris.htm",
    target: "_blank"
  },
  {
    name: "SoftSew Design",
    url: "http://www.softsew.com/products.htm",
    target: "_blank"
  },
  {
    name: "Solitaire City",
    url: "http://www.solitairecity.com/Main.shtml",
    target: "_blank"
  },
  {
    name: "SolSuite - Solitaire Card Games Suite",
    url: "http://solsuite.com/",
    target: "_blank"
  },
  {
    name: "Splash 3D Classic",
    url: "http://www.pixelescape.com/games.html",
    target: "_blank"
  },
  {
    name: "SRM Help Desk 2000",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Start Menu Organizer",
    url: "http://www.winstep.net/startmenuorganizer.asp",
    target: "_blank"
  },
  {
    name: "Sudoku Up",
    url: "http://www.sudokuup.com/",
    target: "_blank"
  },
  {
    name: "Super Bubble Mania",
    url: "http://www.pixelescape.com/games.html",
    target: "_blank"
  },
  {
    name: "Super DX-Ball Deluxe",
    url: "http://www.blitwise.com/superdxb.html",
    target: "_blank"
  },
  {
    name: "Super Splash 3D",
    url: "http://www.pixelescape.com/games.html",
    target: "_blank"
  },
  {
    name: "Supernova: Galactic Wars",
    url: "http://www.winterwolves.com/supernova.htm",
    target: "_blank"
  },
  {
    name: "Superstar Chefs",
    url: "http://www.arcadelab.com/chefs.html",
    target: "_blank"
  },
  {
    name: "Super Worms",
    url: "http://www.wieringsoftware.nl/sw/",
    target: "_blank"
  },
  {
    name: "Swift to-do list",
    url: "http://www.dextronet.com/",
    target: "_blank"
  },
  {
    name: "Trigonometry Challenge",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "Transistor Challenge",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "Taskforce 3",
    url: "http://www.uppergroove.com/task3.htm",
    target: "_blank"
  },
  {
    name: "Taskforce 4",
    url: "http://www.uppergroove.com/task4.htm",
    target: "_blank"
  },
  {
    name: "Team Sports Scheduling System v5",
    url: "http://www.galactix.com/tsss/index.html",
    target: "_blank"
  },
  {
    name: "Terabyte Unlimited",
    url: "https://www.terabyteunlimited.com/",
    target: "_blank"
  },
  {
    name: "Time-Lapse Tool Pro",
    url: "http://timelapsetool.com/",
    target: "_blank"
  },
  {
    name: "Tizzie's Bubble Chase",
    url: "http://www.uppergroove.com/tizzbub.htm",
    target: "_blank"
  },
  {
    name: "Tizzie's Bug Revenge",
    url: "http://www.uppergroove.com/tizzbug.htm",
    target: "_blank"
  },
  // {
  //   name: "TK-Tools",
  //   url: "https://www.bmtmicro.com/bmtcatalog/products/tk-tools",
  //   target: "_self"
  // },
  {
    name: "TN3270 Plus",
    url: "http://www.sdisw.com/",
    target: "_blank"
  },
  {
    name: "Total Game Control",
    url: "http://www.digitaltransforms.com/",
    target: "_blank"
  },
  {
    name: "Treasure Fall",
    url: "http://www.mking.com/treasurefall_game.html",
    target: "_blank"
  },
  {
    name: "Trials of Werlin",
    url: "http://www.bantamcity.com/werlin/",
    target: "_blank"
  },
  // {
  //   name: "Turbo Business Apps for Linux",
  //   url: "https://www.bmtmicro.com/bmtcatalog/products/turbo-business-linux",
  //   target: "_self"
  // },
  {
    name: "TurboHex",
    url: "http://www.genkisoft.com/turbohex.shtml",
    target: "_blank"
  },
  {
    name: "Twilight Mahjongg",
    url: "http://www.twilightgames.com/",
    target: "_blank"
  },
  {
    name: "Twilight Simple Mahjongg",
    url: "http://www.twilightgames.com/",
    target: "_blank"
  },
  {
    name: "Ultimate Boxing Manager",
    url: "http://www.winterwolves.com/universalboxingmanager.htm",
    target: "_blank"
  },
  {
    name: "USB Secure",
    url: "http://www.newsoftwares.net/usb-secure/",
    target: "_blank"
  },
  {
    name: "USB Block",
    url: "http://www.newsoftwares.net/usb-block/",
    target: "_blank"
  },
  {
    name: "Voltmeter Challenge",
    url: "https://www.etcai.com/site.html",
    target: "_blank"
  },
  {
    name: "V - The File Viewer",
    url: "http://www.fileviewer.com/index.html",
    target: "_blank"
  },
  {
    name: "VeggieBreak",
    url: "http://www.uppergroove.com/veggiebreak.htm",
    target: "_blank"
  },
  {
    name: "VeggieBreak Kids",
    url: "http://www.uppergroove.com/veggiebreak_kids.htm",
    target: "_blank"
  },
  {
    name: "VOICE Memberships",
    // url: "https://www.bmtmicro.com/bmtcatalog/products/voice-memberships",
    url: "/product/voicememberships",
    target: "_self"
  },
  {
    name: "Watch Directory",
    url: "http://www.watchdirectory.net/",
    target: "_blank"
  },
  {
    name: "Where's The Bus?",
    url: "http://www.dbandsons.com/",
    target: "_blank"
  },
  {
    name: "Wiggilez Blast",
    url: "http://www.uppergroove.com/wiggilez.htm",
    target: "_blank"
  },
  {
    name: "Winstep Nexus",
    url: "http://www.winstep.net/nexus.asp",
    target: "_blank"
  },
  {
    name: "Winstep Xtreme",
    url: "http://www.winstep.net/xtreme.asp",
    target: "_blank"
  },
  {
    name: "Wonderland",
    url: "http://www.midnightsynergy.com/wonderland/",
    target: "_blank"
  },
  {
    name: "Wonderland Adventures",
    url: "http://www.midnightsynergy.com/adventures/",
    target: "_blank"
  },
  {
    name: "Wonderland Adventures: Mysteries of Fire Island",
    url: "http://www.midnightsynergy.com/adventures2/",
    target: "_blank"
  },
  {
    name: "Wonderland Secret Worlds",
    url: "http://www.midnightsynergy.com/secretworlds/",
    target: "_blank"
  },
  // {
  //   name: "Workplace Security for OS/2 Warp",
  //   url: "https://www.bmtmicro.com/bmtcatalog/products/workplace-security",
  //   target: "_self"
  // },
  {
    name: "ZModeler2",
    url: "http://www.zmodeler2.com/",
    target: "_blank"
  },
  {
    name: "ZOC",
    url: "https://www.emtec.com/zoc/index.html",
    target: "_blank"
  },
  {
    name: "ZTreeBold",
    url: "http://www.ztree.com/html/ztreebold.htm",
    target: "_blank"
  },
  {
    name: "ZTreeWin",
    url: "http://www.ztree.com/html/ztreewin.htm",
    target: "_blank"
  },
  {
    name: "Chantell's Creations",
    url: "http://www.chantells-creations.com",
    target: "_blank"
  },
  {
    name: "Designs by Petro",
    url: "http://www.designsbypetro.com/",
    target: "_blank"
  },
  {
    name: "Threads n Scissors",
    url: "http://www.threadsnscissors.com/",
    target: "_blank"
  },
  {
    name: "Inspiration Mutz Embroidery",
    url: "http://www.inspirationmutz.com/",
    target: "_blank"
  },
  {
    name: "Elsa's Designs",
    url: "http://www.elsasdesigns.com/",
    target: "_blank"
  },
  {
    name: "SoftSew",
    url: "http://www.softsew.com/",
    target: "_blank"
  }
]

export default products;
