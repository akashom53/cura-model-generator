(self.webpackChunkmodel_generator=self.webpackChunkmodel_generator||[]).push([[3025],{1160:function(e){e.exports=function(e){var n="[a-z'][a-zA-Z0-9_']*",a="("+n+":"+n+"|"+n+")",r={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",literal:"false true"},i=e.COMMENT("%","$"),c={className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},o={begin:"fun\\s+"+n+"/\\d+"},t={begin:a+"\\(",end:"\\)",returnBegin:!0,relevance:0,contains:[{begin:a,relevance:0},{begin:"\\(",end:"\\)",endsWithParent:!0,returnEnd:!0,relevance:0}]},d={begin:/\{/,end:/\}/,relevance:0},s={begin:"\\b_([A-Z][A-Za-z0-9_]*)?",relevance:0},l={begin:"[A-Z][a-zA-Z0-9_]*",relevance:0},b={begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0,returnBegin:!0,contains:[{begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0},{begin:/\{/,end:/\}/,relevance:0}]},g={beginKeywords:"fun receive if try case",end:"end",keywords:r};g.contains=[i,o,e.inherit(e.APOS_STRING_MODE,{className:""}),g,t,e.QUOTE_STRING_MODE,c,d,s,l,b];var u=[i,o,g,t,e.QUOTE_STRING_MODE,c,d,s,l,b];t.contains[1].contains=u,d.contains=u,b.contains[1].contains=u;var _={className:"params",begin:"\\(",end:"\\)",contains:u};return{name:"Erlang",aliases:["erl"],keywords:r,illegal:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",contains:[{className:"function",begin:"^"+n+"\\s*\\(",end:"->",returnBegin:!0,illegal:"\\(|#|//|/\\*|\\\\|:|;",contains:[_,e.inherit(e.TITLE_MODE,{begin:n})],starts:{end:";|\\.",keywords:r,contains:u}},i,{begin:"^-",end:"\\.",relevance:0,excludeEnd:!0,returnBegin:!0,keywords:{$pattern:"-"+e.IDENT_RE,keyword:["-module","-record","-undef","-export","-ifdef","-ifndef","-author","-copyright","-doc","-vsn","-import","-include","-include_lib","-compile","-define","-else","-endif","-file","-behaviour","-behavior","-spec"].map((function(e){return"".concat(e,"|1.5")})).join(" ")},contains:[_]},c,e.QUOTE_STRING_MODE,b,s,l,d,{begin:/\.$/}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_erlang.dfe5578e.chunk.js.map