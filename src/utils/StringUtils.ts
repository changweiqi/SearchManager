/**
 * Created by ikee on 14/12/18.
 * 字符串操作工具类
 */
class StringUtils extends BaseClass {
    /**
     * 构造函数
     */
    public constructor() {
        super();
    }

    /**
     * 去掉前后空格
     * @param str
     * @returns {string}
     */
    public trimSpace(str:string):string {
        return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
    }

    /**
     * 获取字符串长度，中文为2
     * @param str
     */
    public getStringLength(str:string):number {
        var strArr = str.split("");
        var length = 0;
        for (var i = 0; i < strArr.length; i++) {
            var s = strArr[i];
            if (this.isChinese(s)) {
                length += 2;
            } else {
                length += 1;
            }
        }
        return length;
    }

    /**
     * 判断一个字符串是否包含中文
     * @param str
     * @returns {boolean}
     */
    public isChinese(str:string):boolean {
        var reg = /^.*[\u4E00-\u9FA5]+.*$/;
        return reg.test(str);
    }

    /**设置钱显示 */
    public setMoney(value:number):string {
        // if(value<1000)
        // {
            return value+""; 
        // }else if(value<10000)
        // {
        //     return Math.floor(value/1000)+","+ value%1000;
        // }else
        // {
        //     return Math.floor(value/10000)+App.getI18nStr("wan");
        // }
    }

    /**替换字符串里动态文本{sss:xxx} */
    public exchangeStringByParams(str:string,obj:any=null):string{
        var srcStr:string = str;
        while(srcStr.indexOf('{')!= -1)
        {
            var headArr:string[] = srcStr.split('{');
            var tailArr:string[] = headArr[1].split('}');
            srcStr = headArr[0] + obj[tailArr[0]] + tailArr[1];
        }
        return srcStr;
    }
}