module data {
    export class GameData {        
        public static IsRobot_Offline:boolean=false;                      //是否单机
        public static IsInNative: boolean = false;                         //是否在原生中          //根据环境动态更改

        public static IsDebug:boolean = true;                             // 
        public static resourcePath:string = true ? 'resource/':'resource-all/';

        public static IsPrompt: boolean = true;                         //是否自动提示
        public static IsActivityKick:boolean=false;

        //===========平台对接==========//
        public static PLATFORM_URL:string = 'http://ugiapidev.thronetec.com:5068/';

        //=========位置信息======//
        public static Local_URL:string = 'http://pv.sohu.com/cityjson?ie=utf-8';//http://m.weather.com.cn/data5/city020101.xml
        public static Weather_URL:string = 'http://wthrcdn.etouch.cn/weather_mini?citykey=310000';        

        // 服务器地址
        public static SERVER_IP:string = "http://dmhd123.f3322.net:8000/getGateServer";//"http://127.0.0.1:8200/getGateServer";//"http://101.201.220.61:8200/getGateServer";
        public static SERVER_URL:string = "127.0.0.1:1200";"//192.168.1.190:1202";                   


        //游戏类型
        public static GameFlag_offline:number = 0;                //单机
        public static GameFlag_Rapid:number = 1;                  //快速进入
        public static GameFlag_Activity:number = 2;               //比赛比赛flag=rapid
        public static GameFlag_Group:number = 3;                  //群,
        public static GameFlag_Challenge:string = "challenge";          //挑战排行榜
        public static GameFlag_Defender:string="defender";              //被挑战的人进入游戏标志

        //筹码类型总数量
        public static CHIPNUMS_MAX:number = 5;
        /**押注类型 */
        public static BETNUMS_MAX:number = 4;
        public static BET_WID:number = 160;
        public static BET_HEI:number = 210;
        /**押胜 押和 分界线 */
        // public static BET_WIN_GAP:number = 94;
        /**钱币的宽高 */
        public static COIN_WID:number = 35;
        public static COIN_HEI:number = 36;

        public static DICE_WID:number = 180;
        public static DICE_HEI:number = 135;

        public static CARD_WID:number = 55;
        public static CARD_HEI:number = 84;

        
        /**桌面显示的玩家最大数量 */
        public static PLAYER_MAX:number = 10;
        public static PLAYER_WID:number = 117;
        public static PLAYER_HEI:number = 164;
        public static PLAYER_OFFSETY:number = 10;

        /**等待玩家押注时间 (秒)*/
        public static WAIT_BETING_TIME:number = 10;
        /**等待休息一下时间（秒） */
        public static WAIT_BREAK_TIME:number = 5;

        /**表情名字前缀 */
        public static FACE_URL:string = 'face';


        //app传入值,玩家属性值
        public static token: string = "";
        public static flag: number = 0;
        public static userid:string = "";
        public static groupid:string = "";
        public static nickname:string = "";
        public static avatar:string = "";
        public static integral:number = 0;
        public static money:number = 0;
        public static playerGuid:number=0;
        public static IsAuto:boolean=false;

    }
}