(self.webpackChunkmodel_generator=self.webpackChunkmodel_generator||[]).push([[5406],{5187:function(e){function n(e){return e?"string"===typeof e?e:e.source:null}function a(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var l=a.map((function(e){return n(e)})).join("");return l}function r(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var l="("+a.map((function(e){return n(e)})).join("|")+")";return l}e.exports=function(e){var n=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"];return{name:"Apache Access Log",contains:[{className:"number",begin:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,relevance:5},{className:"number",begin:/\b\d+\b/,relevance:0},{className:"string",begin:a(/"/,r.apply(void 0,n)),end:/"/,keywords:n,illegal:/\n/,relevance:5,contains:[{begin:/HTTP\/[12]\.\d'/,relevance:5}]},{className:"string",begin:/\[\d[^\]\n]{8,}\]/,illegal:/\n/,relevance:1},{className:"string",begin:/\[/,end:/\]/,illegal:/\n/,relevance:0},{className:"string",begin:/"Mozilla\/\d\.\d \(/,end:/"/,illegal:/\n/,relevance:3},{className:"string",begin:/"/,end:/"/,illegal:/\n/,relevance:0}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_accesslog.ee59c4d6.chunk.js.map