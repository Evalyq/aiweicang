var htmlWidth = document.documentElement.clientWidth||document.body.clientWidth;//获取视窗宽度
var htmlDom = document.getElementsByTagName('html')[0];//获取html,以便对其进行操作
htmlDom.style.fontSize = htmlWidth / 15 +'px';
function getQuery(){
        var str = (location.search.length > 0 ? location.search.substring(1) : ''),
        args = {},
        items = str.length ? str.split("&") : [],
        item = null,
        name = null,
        value = null;
        for (i=0; i < items.length; i++){
          item = items[i].split("=");
          name = decodeURIComponent(item[0]);
          value = decodeURIComponent(item[1]);
          if (name.length) {
            args[name] = value;
          }
        }
        return args;
};