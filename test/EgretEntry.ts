import {studentBinder} from "./egret/export/student/studentBinder";
import {UI_student_show} from "./egret/export/student/UI_student_show";
import {StudentShow} from "./egret/StudentShow";

class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this)
    }

    private init() {
        this.stage.addChild(fgui.GRoot.inst.displayObject);

        RES.loadConfig("egret/resource/resource.json", "egret/resource").then(()=>{
            RES.loadGroup("student").then(()=>{
                fgui.UIPackage.addPackage("student", RES.getRes("student_bin"))
                studentBinder.bindAll()
                let ui = new StudentShow(UI_student_show.createInstance())
                ui.open()
            })
        })

    }
}

window["Main"] = Main