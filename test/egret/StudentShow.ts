import {BaseUI} from "./BaseUI";
import {UI_student_show} from "./export/student/UI_student_show";
import {getStudent, IStudentData, requestUpLv, requestUpQuality} from "../../src/store/example/StudentModule";

export class StudentShow extends BaseUI<UI_student_show>{
    private student: IStudentData

    protected setConfig(view: UI_student_show) {
        this.student = getStudent()
        view.btnLv.addClickListener(()=>requestUpLv())
        view.btnQuality.addClickListener(()=>requestUpQuality())
        view.btnLQ.addClickListener(()=>{
            requestUpQuality();
            requestUpLv();
        })
    }

    renderLv() {
        this.view.txtLv.text = "等级："+this.student.lv
        console.log("call renderLv")
    }

    renderQuality() {
        this.view.txtQuality.text = "品质："+this.student.quality
        console.log("call renderQuality")
    }

    renderLQ() {
        this.view.txtLv2.text = `学生${this.student.name}：i现${this.student.lv}级,${this.student.quality}品`
        console.log("call renderLQ")
    }
}