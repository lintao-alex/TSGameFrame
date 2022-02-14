import {clearReactFn, markReactFn} from "../../TsCommon/src/data/ReactData";

export class BaseView<V extends HTMLDivElement = HTMLDivElement> {

    constructor(
        readonly view: HTMLDivElement
    ) {
        this.onInit(view)
    }

    onInit(view: HTMLDivElement) {}

    open() {
        document.body.appendChild(this.view)
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
    }
}