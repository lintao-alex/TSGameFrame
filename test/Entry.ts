import StudentInfoUI from "../src/view/example/StudentInfoUI";

function main() {
    let studentInfo = document.createElement('div')
    let show = document.createElement('div')
    show.id = "show"
    studentInfo.appendChild(show)
    let btn = document.createElement('button')
    btn.id = "btn"
    btn.textContent = "升级"
    studentInfo.appendChild(btn)

    let view = new StudentInfoUI(studentInfo);
    view.open()
}

main()