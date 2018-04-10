/**
 * Created by ikee on 2014/11/22.
 */
class Log {
    /**
     * Debug_Log
     * @param messsage 内容
     * @constructor
     */
    public static trace(...optionalParams:any[]):void {
        if (data.GameData.IsDebug) {
            optionalParams[0] = "["+DateUtils.getInstance().getFormatBySecond(egret.getTimer()/1000,1)+"]" + JSON.stringify(optionalParams[0]);
            // console.log.apply(console, optionalParams);
            egret.log.apply(console, optionalParams);
        }
    }
}