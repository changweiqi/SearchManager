module data {
    /** 二八杠玩家信息 */
    export class Player {
        public userid:string = "";
        public nickname:string = "";
        public avatar:string = "";
        public integral:number = 0;     //积分
        public money:number = 0;
        public playerGuid:number=0;                     //游戏服guid

        public ResoultScore:number=0;               //战斗结果;

        public TableId:number = 0;                   //桌子上的id;   0,1,2
        public IsRobot:boolean=false;

        //======二八杠玩家押注信息==========//
        /**押注位置 */
        public betid:number = 0;
        /**true：押 胜 ； false:押 和 */
        // public betWin:boolean;
        /**押了多少钱*/
        public betMoney:number = 0;

        public constructor(obj:any=null)
        {
            for(var i in obj)
            {
                if(this[i]!=undefined)
                {
                    this[i]=obj[i];
                }
            }
        }

        public Reset(obj:any=null):void
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