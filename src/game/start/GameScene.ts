class GameScene extends BaseScene {
    constructor() {
        super();
    }
    private init() {
        
    }
    public onEnter():void{
        super.onEnter();
        //添加该Scene使用的层级
        this.addLayer(MainLayer.Game_Bg);
        this.addLayer(MainLayer.Game_Main);
        this.addLayer(MainLayer.UI_Main);
        this.addLayer(MainLayer.UI_Popup);
        this.addLayer(MainLayer.UI_Message);
        this.addLayer(MainLayer.UI_Tips);

        //添加一个纯色背景
        var rect: eui.Rect = new eui.Rect();
        rect.fillColor = 0xffffff;
        rect.percentHeight = 100;
        rect.percentWidth = 100;
        MainLayer.UI_Main.addChild(rect);
        
        App.ViewManager.open(ViewConst.Front);
        // 打开UI 界面
    }
}