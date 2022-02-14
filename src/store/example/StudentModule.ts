import {createReactData} from "../../../TsCommon/src/data/ReactData";
import {getWaitPms} from "../../utils";

export interface IStudentData {
    id: number;
    name: string;
    lv: number;
    quality: number;
}

const STUDENT_LIST: IStudentData[] = []
init()
function init() {
    let student: IStudentData = {
        id: 1,
        name: "Mike",
        lv: 1,
        quality: 1,
    }
    STUDENT_LIST.push(createReactData(student))
}

export function getStudent(): Readonly<IStudentData> {
    return STUDENT_LIST[0]
}

export function requestUpLv() {
    let student = STUDENT_LIST[0]
    student.lv++
    return getWaitPms(100)
}

export function requestUpQuality(sync=false) {
    let student = STUDENT_LIST[0]
    student.quality++
    return getWaitPms(100)
}