import { Application, Loader, Sprite} from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({url: "./kasuma.png", name: "MyEma"});

Loader.shared.onComplete.add(()=>{
    
    const ema: Sprite = Sprite.from("MyEma");

    ema.x = 0;
    ema.y = 0;
    //ema.x = app.screen.width / 2;
    //ema.y = app.screen.height / 2;
    app.stage.addChild(ema);

});

Loader.shared.load();
