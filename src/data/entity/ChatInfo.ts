module data {
	/**聊天数据结构 */
	export class ChatInfo {
		public userid:string = "";
		/**0:系统广播聊天；非0：发给某个玩家的聊天 */
		public desUserid:string = "";

		/**0:文本内容；1：表情 */
		public type:number = 0;

		public msg:string = "";

		public constructor() {
		}
		public init(obj:any=null):void
        {
            for(var i in obj)
            {
                if(this[i]!=undefined)
                {
                    this[i]=obj[i];
                }
            }
        }
	}
}