/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

// module student {

	export class UI_student_show extends fairygui.GComponent {
		public txtLv:fairygui.GTextField;
		public btnLv:fairygui.GButton;
		public txtQuality:fairygui.GTextField;
		public btnQuality:fairygui.GButton;
		public txtLv2:fairygui.GTextField;
		public btnLQ:fairygui.GButton;
		public txtQuality2:fairygui.GTextField;
		public static URL:string = "ui://wsfvqsxxhkgm0";

		public static createInstance():UI_student_show {
			return <UI_student_show>(fairygui.UIPackage.createObject("student", "student_show"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.txtLv = <fairygui.GTextField>(this.getChildAt(2));
			this.btnLv = <fairygui.GButton>(this.getChildAt(3));
			this.txtQuality = <fairygui.GTextField>(this.getChildAt(5));
			this.btnQuality = <fairygui.GButton>(this.getChildAt(6));
			this.txtLv2 = <fairygui.GTextField>(this.getChildAt(8));
			this.btnLQ = <fairygui.GButton>(this.getChildAt(9));
			this.txtQuality2 = <fairygui.GTextField>(this.getChildAt(10));
		}
	}
// }