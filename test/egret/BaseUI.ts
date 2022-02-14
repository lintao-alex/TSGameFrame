import GComponent = fgui.GComponent;
import {clearReactFn, markReactFn} from "../../TsCommon/src/data/ReactData";

export abstract class BaseUI<V extends GComponent> {
    constructor(
        protected view: V
    ) {
        this.setConfig(view)
    }

    protected setConfig(view: V) {}

    protected bindRenderFn(fn: ()=>void) {

    }

    open() {
        for(let key of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
            if(key.startsWith("render")) {
                let fn = this[key] as ()=>void
                if(fn instanceof Function) {
                    markReactFn(fn, this)
                    fn.call(this)
                    clearReactFn();
                }
            }
        }
        fgui.GRoot.inst.addChild(this.view)
    }
}