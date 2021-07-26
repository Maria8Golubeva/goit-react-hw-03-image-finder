(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{27:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),s=(a(27),a(28),a(9)),i=a.n(s),l=a(10),u=a(20),p=a(3),h=a(4),m=a(6),d=a(5),b=a(1),j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.inputHandler=function(t){e.setState({inputValue:t.target.value})},e.submitHandler=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.inputValue),e.reset()},e.reset=function(){e.setState({inputValue:""})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.inputValue,t=this.inputHandler,a=this.submitHandler;return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{onSubmit:a,className:"SearchForm",children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",onChange:t,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e})]})})}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(b.jsx)("ul",{className:"ImageGallery",children:this.props.children})}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).clickHandler=function(t){(0,e.props.openImage)(t.target.id)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.id;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{onClick:this.clickHandler,id:a,src:t,alt:"",className:"ImageGalleryItem-image"})},a)}}]),a}(n.Component);f.defaultProps={url:"https://static8.depositphotos.com/1431107/919/i/600/depositphotos_9199988-stock-photo-oops-icon.jpg"};var O=f,v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.totalElements>10&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.props,t=e.text,a=e.onClick;return Object(b.jsx)("button",{className:"Button",onClick:a,type:"button",children:t})}}]),a}(n.Component);v.defaultProps={text:"Just Button",totalElements:1};var y=v,k=(a(31),a(21)),x=a.n(k),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(b.jsx)(x.a,{className:"Loader",type:"ThreeDots",color:"#3f51b5",height:50,width:50,timeout:1e4})}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).keyDownHandler=function(t){var a=e.props.modalToggle;"Escape"===t.code&&a()},e.clickHandler=function(t){var a=e.props.modalToggle;t.target===t.currentTarget&&a()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyDownHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyDownHandler)}},{key:"render",value:function(){var e=this.props.url;return Object(b.jsx)("div",{onClick:this.clickHandler,className:"Overlay",children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:e,alt:"full size"})})})}}]),a}(n.Component),N=a(22),I=a.n(N);var C=function(e,t){return I.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("21846437-66fd09c28b54c2b2cddc581a4","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},H=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",modalShow:!1,pageNumber:1,images:[],modalImageURL:"",loader:!1,error:""},e.toggleModal=function(){e.setState({modalShow:!e.state.modalShow})},e.openImage=function(t){e.toggleModal();var a=e.state.images.filter((function(e){return e.id===Number(t)}));e.setState({modalImageURL:a[0].largeImageURL})},e.getSearchQuery=function(t){t!==e.state.searchQuery&&e.setState({searchQuery:t,images:[],pageNumber:1,error:""})},e.getItemsForGallery=Object(u.a)(i.a.mark((function t(){var a,n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loader:!0}),a=e.state,n=a.searchQuery,r=a.pageNumber,t.prev=2,t.next=5,C(n,r);case 5:0===(o=t.sent).length&&e.setState({error:"empty responce"}),e.setState((function(e){var t=e.images,a=e.pageNumber;return{images:[].concat(Object(l.a)(t),Object(l.a)(o)),pageNumber:a+1}})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e.setState({error:t.t0});case 13:e.setState({loader:!1});case 14:case"end":return t.stop()}}),t,null,[[2,10]])}))),e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.getItemsForGallery()}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.modalImageURL,r=t.loader,o=t.error;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{onSubmit:this.getSearchQuery}),Object(b.jsx)(g,{children:a.map((function(t){return Object(b.jsx)(O,{id:t.id,url:t.webformatURL,openImage:e.openImage},t.id)}))}),o&&Object(b.jsx)("p",{children:"oops... something went wrong, try again later or change query"}),r&&Object(b.jsx)(w,{}),a.length>0&&!r&&Object(b.jsx)(y,{onClick:this.getItemsForGallery,text:"Load more",totalElements:a.length}),this.state.modalShow&&Object(b.jsx)(S,{url:n,modalToggle:this.toggleModal})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.e81907d3.chunk.js.map