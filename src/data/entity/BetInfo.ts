module data {
	/**
	 * 桌面 注 信息
	 */
	export class BetInfo {
        /**押注位置 */
		public betid:number=0;
		/**押注（天地顺和）的手牌 */
        public betCards:number[][]=[];
		/**是否系统庄 */
		public IsLandOwner:boolean = false;

		public constructor(obj:any=null)
        {
            this.init(obj);
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