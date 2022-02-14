import {BaseView} from "../BaseView";
import {getStudent, requestUpLv} from "../../store/example/StudentModule";

export default class StudentInfoUI extends BaseView {
    onInit(view: HTMLDivElement) {
        let btn = view.querySelector('#btn') as HTMLButtonElement;
        btn.onclick = ()=>{
            requestUpLv()
        }
    }

    renderStudent() {
        const student = getStudent()
        this.view.querySelector('#show').textContent = `姓名：${student.name}
        等级：${student.lv}`
    }
}