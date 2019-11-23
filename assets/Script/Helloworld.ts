const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    qrcodeNode:cc.Node;
    currHerf:string;

    // qrcodeComp:any;

    init(){
        cc.debug.setDisplayStats(false);
    }

    start () {
        // init logic
        this.label.string = this.text;
        this.qrcodeNode=this.node.getChildByName('qrcode') as cc.Node;
        cc.log(this.qrcodeNode);
        
        //获取当前页面所在的网址
        this.currHerf=window.location.href;

        this.changeQRCodeUI(this.currHerf);
    }

    /**
     * 改变二维码显示内容
     * @param str 
     */
    changeQRCodeUI(str:String){
        //写入数据
        this.qrcodeNode.getComponent('CQRCode').string=str;
    }

    /**
     * 输入框 内容发生变化
     * @param data 
     */
    editBoxChange(data:String){
        cc.log(data);
        this.changeQRCodeUI(data);
    }
}
