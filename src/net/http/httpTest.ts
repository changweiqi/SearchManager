class httpTest {
	public constructor() {

		this.getTest();
	}

	private getTest(): void {
		
    	net.Http.create()
        .success(this.onSuccess, this)
        .error(this.onLoadError, this)
        .add('v=123')
        .add('s=123')
        .dataFormat(egret.URLLoaderDataFormat.TEXT)
        .get('http://httpbin.org/user-agent');//也可以是post方法
	}
	onLoadError(): void {
		console.log('error');
	}

	onSuccess(data): void {
		console.log(data);
	}
}


