Events.on(ClientLoadEvent, () => {

    var arrrs = [
        [Blocks.water],
        [Blocks.sand],
        [Blocks.grass],
        [Blocks.duo],
        [Blocks.duo],
        [Blocks.duo],
        [Blocks.duo],
        [Blocks.ice],
        [Blocks.snow],
        [Blocks.duo],
        [Blocks.router],
        [Blocks.grass],
        [Blocks.stone]
    ];
    const hhhbGenerator = extend(SerpuloPlanetGenerator, {
        getBlock(p){
            this.arr = arrrs;
            this.super$getBlock(p);
        }
    });
    hhhbGenerator.arr = arrrs;



    const anotherplanet = new Planet("anotherplanet", Planets.sun, 1, 0.5);
    anotherplanet.generator = hhhbGenerator;
    anotherplanet.mesh = new HexMesh(anotherplanet, 1);
    anotherplanet.orbitRadius = 7;
    anotherplanet.orbitTime = 5 * 60;
    anotherplanet.rotateTime = 60;
    anotherplanet.bloom = true;
    anotherplanet.accessible = true;
    anotherplanet.startSector = 1;
    anotherplanet.hasAtmosphere = true;
    anotherplanet.atmosphereColor = Liquids.cryofluid.color;
    anotherplanet.atmosphereRadIn = 0.1;
    anotherplanet.atmosphereRadOut = 0.8;
    anotherplanet.alwaysUnlocked = true;
    anotherplanet.localizedName = "Duo 3000";




    const yuyu = new SectorPreset("maze", anotherplanet, 1);
    yuyu.captureWave = 100;
    yuyu.localizedName = "Maze";
    yuyu.difficulty = 9;
    yuyu.alwaysUnlocked = true;


});
