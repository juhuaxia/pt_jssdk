class PT_JSSDK{
    constructor(){
        window.pt_dispatch = (type,data)=>{
            if(type){
                throw new Error('can not found "'+type+ '" script');
            }
            data = (typeof data == 'string') ?JSON.parse(data):data;
            this.fire('type',data);
        };
        this.events = {};
    }
    fire(type,data){
        if(this.request('inapp')){
            let fn = this.events[type];
            fn&&fn(data);
        }
    }
    on(type, fn) {
        this.events[type] = fn
    }
    request(name){
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    fliterCallback(a) {
        let b = {},
            c;
        for (c in a)"function" !== typeof a[c] && (b[c] = a[c]);
        return b
    }
    getOptions(a) {
        return Array.prototype.shift.call(a)
    }
    connecting(a, b) {
        1 == this.request("inapp") && (location.href = "putao://" + a + b)
    }
    viewPics() {
        let b = this.getOptions(arguments);
        b.index || (b.index = 0);
        this.connecting("viewPics/", window.JSON.stringify(this.fliterCallback(b)))
    }
    openWebView() {
        let b = this.getOptions(arguments);
        this.connecting("openWebView/", window.JSON.stringify(this.fliterCallback(b)))
    }
    pageSetting() {
        let b = this.getOptions(arguments);
        this.connecting("pageSetting/", window.JSON.stringify(this.fliterCallback(b)))
    }
    openAccNo(){
        let b = this.getOptions(arguments);
        this.connecting("openAccNo/", window.JSON.stringify(this.fliterCallback(b)))
    }
    webViewBack(){
        let b = this.getOptions(arguments);
        a.connecting("webViewBack/", window.JSON.stringify(this.fliterCallback(b)))
    }
    openOriginalArticle() {
        let b = this.getOptions(arguments);
        this.connecting("openOriginalArticle/", window.JSON.stringify(this.fliterCallback(b)))
    }
}

export default new PT_JSSDK();