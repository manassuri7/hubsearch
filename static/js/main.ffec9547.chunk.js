(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),c=(a(85),a(31)),s=a(26),i=a(27),h=a(32),u=a(28),d=a(33),m=a(9),p=(a(49),a(167)),g=a(168),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.searchKey=e.target.value},a.searchKey="",a.handleShow=a.handleShow.bind(Object(m.a)(Object(m.a)(a))),a.handleClose=a.handleClose.bind(Object(m.a)(Object(m.a)(a))),a.state={show:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar",style:{backgroundColor:"#c1666b"}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{className:"navbar-brand",style:{color:"#e4dfda",fontWeight:"bold"},href:"/newsfeeds"},l.a.createElement("i",{className:"fas fa-globe"})," ",this.props.pagetitle)),l.a.createElement("a",{className:"nav navbar-nav navbar-right",onClick:this.handleShow,style:{cursor:"pointer"}},l.a.createElement("span",{className:"navbar-brand fab fa-creative-commons",style:{color:"#e4dfda",marginLeft:"5px"}})),l.a.createElement("form",null,l.a.createElement("div",{className:"searchForm"},l.a.createElement("div",{style:this.props.show?{display:"none"}:{display:"block"}},l.a.createElement("input",{className:"navInput",onChange:this.handleChange,placeholder:"New Search",onKeyUp:function(e){(e.preventDefault(),13===e.keyCode)&&document.getElementsByClassName("navOutput")[0].click()}}),l.a.createElement("button",{className:"navOutput",onClick:function(t){return e.props.fetchNextPageNews(e.searchKey,t)}},"Search")))))),l.a.createElement(g.a,{show:this.state.show,onHide:this.handleClose,style:{backgroundColor:"rgba(228, 223, 218, 0.6)"}},l.a.createElement(g.a.Header,{closeButton:!0,style:{backgroundColor:"#c1666b",color:"white"}},l.a.createElement(g.a.Title,null,"DISCLAIMER")),l.a.createElement(g.a.Body,{style:{backgroundColor:"#e4dfda",textAlign:"center",fontWeight:700,color:"#4e4a4a"}},l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-globe",style:{fontSize:"50px"}}),l.a.createElement("div",null,"SEARCH THE HUB ")),l.a.createElement("br",null),l.a.createElement("p",null,"SEARCH THE HUB is powered by ",l.a.createElement("em",null,"GitHub Developer"),".",l.a.createElement("br",null),"This app is for learning purpose only and code is available in"," ",l.a.createElement("a",{href:"https://github.com/manassuri7",target:"_blank",rel:"noopener noreferrer"},"GITHUB.")),l.a.createElement("p",{style:{color:"#c1666b"}},l.a.createElement("em",null," PS: This is just an example of modal window... "))),l.a.createElement(g.a.Footer,{style:{backgroundColor:"#c1666b",padding:"8px 15px"}},l.a.createElement("button",{type:"button",className:"btn btn-default",style:{backgroundColor:"#c1666b",border:"3px solid #d4b483",borderRadius:"8px",color:"white",fontWeight:"500",outline:"none"},onClick:this.handleClose},"Close"))))}}]),t}(n.Component),f=a(30),v=a(74),w=a.n(v),E=a(75),y=a.n(E),C=a(76),N=a.n(C),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),console.log("Handle change called"),a.setState({searchStr:e.target.value})},a.state={allRows:[],currentRows:[],activePage:1,totalItemsCount:"",query:"",visible:!1,modalUser:"",searchStr:""},a.handlePageChange=a.handlePageChange.bind(Object(m.a)(Object(m.a)(a))),a.getRowsData=a.getRowsData.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.newList!==this.props.newList&&this.handlePageChange(this.state.activePage)}},{key:"handlePageChange",value:function(e){console.log("active page is ".concat(e)),this.setState({activePage:e}),this.getRowsData(e)}},{key:"getRowsData",value:function(e){var t=[],a=Object(c.a)(this.props.newList),n=20*e,l=20*(e-1);n<a.length?t=a.slice(l,n):n>=a.length&&(t=a.slice(l)),this.setState({currentRows:t})}},{key:"render",value:function(){var e=this,t=this.state.currentRows,a=this.state.searchStr;return l.a.createElement("div",{className:"App"},l.a.createElement(b,{pagetitle:"SEARCH THE HUB",show:this.props.showSearch,fetchNextPageNews:this.props.fetchNextPageNews}),l.a.createElement("div",{style:this.props.showSearch?{display:"block"}:{display:"none"}},l.a.createElement(p.a,null,l.a.createElement("input",{className:"navInput",type:"text",value:a,onChange:this.handleChange,style:{width:"35%",border:"2px solid #e4d8d8"},placeholder:"Search Topic"}),l.a.createElement("button",{className:"navOutput",onClick:function(t){return e.props.fetchNextPageNews(a,t)},style:{background:"#c1666b",color:"white",border:"2px solid #c1666b"}},"Search")),l.a.createElement("br",null),l.a.createElement("div",{id:"link-tag",style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement("p",{onClick:function(t){return e.props.fetchNextPageNews("java",t)}},"JAVA"),l.a.createElement("p",{onClick:function(t){return e.props.fetchNextPageNews("javascript",t)}},"JAVASCRIPT"),l.a.createElement("p",{onClick:function(t){return e.props.fetchNextPageNews("react",t)}},"REACT"),l.a.createElement("p",{onClick:function(t){return e.props.fetchNextPageNews("python",t)}},"PYTHON"),l.a.createElement("p",{onClick:function(t){return e.props.fetchNextPageNews("ruby",t)}},"RUBY"))),this.props.searchKey&&l.a.createElement("h4",null,"Found ",this.props.newList.length," results for:"," ",l.a.createElement("strong",{style:{color:"#c1666b"}},this.props.searchKey)),l.a.createElement("div",{className:"col-md-12 col-sm-12 col-lg-12 col-xs-12",style:{border:"2px solid #c1666b",borderRadius:"20px",margin:"1%",width:"98%",background:"#f7eedc"}},t&&t.map(function(e){return l.a.createElement("div",{className:"col-md-12 col-sm-12 col-lg-12 col-xs-12",key:e.id,style:{border:"2px solid #c1666b",margin:"5px",borderRadius:"10px",background:"white"}},l.a.createElement("div",{className:"col-md-4 col-sm-4 col-lg-4 col-xs-4"},l.a.createElement("a",{href:e.owner.html_url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:null!=e.owner.avatar_url?e.owner.avatar_url:N.a,height:"50%",width:"40%",alt:"Thumbnail",style:{margin:"10px",borderRadius:"5px",border:"1px solid #c1666b"}})," ")),l.a.createElement("div",{className:"col-md-8 col-sm-8 col-lg-8 col-xs-8"},l.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,e.name)),l.a.createElement("div",null,l.a.createElement("h5",null,"Repo Name: ",e.full_name),l.a.createElement("h5",null,"Owner: ",e.owner.login),l.a.createElement("h5",null,"Language: ",e.language),l.a.createElement("h5",null,"Forks Count: ",e.forks),l.a.createElement("h5",null,"start Count: ",e.stargazers_count),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",alignContent:"flex-end",flexWrap:"wrap"}}))))})),l.a.createElement("div",{hidden:!(t.length>0)},l.a.createElement(w.a,{activePage:this.state.activePage,itemsCountPerPage:20,totalItemsCount:this.props.newList.length,pageRangeDisplayed:3,onChange:this.handlePageChange})))}}]),t}(n.Component),x=Object(f.b)(function(e){return{newList:e.newList,showSearch:e.showSearch,searchKey:e.searchKey}},function(e){return{fetchNextPageNews:function(t,a){var n;a.preventDefault(),e((n=t,function(e){y.a.get("https://api.github.com/search/repositories?q="+n+"&sort=forks&order=desc").then(function(t){var a=t.data;a.searchKey=n,console.log("resultData: ",a),e({type:"FETCH_NEWS",value:a})}).catch(function(e){return console.log(e.response)})}))}}})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(20),j=a(77),O=a(78),P={newList:[],showSearch:!0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,a=Object(O.a)({},e);switch(t.type){case"FETCH_NEWS":a.newList=Object(c.a)(t.value.items),a.showSearch=!1,a.searchKey=t.value.searchKey;break;default:a.newList=[],a.showSearch=!0,a.searchKey=""}return console.log("newState: ",a),a},H=Object(S.c)(R,Object(S.a)(j.a));o.a.render(l.a.createElement("div",null,l.a.createElement(f.a,{store:H},l.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},80:function(e,t,a){e.exports=a(166)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.ffec9547.chunk.js.map