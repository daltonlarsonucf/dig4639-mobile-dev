(this.webpackJsonpw6a=this.webpackJsonpw6a||[]).push([[0],{14:function(e,a,t){},8:function(e,a,t){e.exports=t(9)},9:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(2),s=t(4),c=t(3),l=t(5),u=t(0),i=t.n(u),o=t(7),d=t.n(o);t(14);function m(e){return i.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var h=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},t}return Object(l.a)(a,e),Object(n.a)(a,[{key:"handleClick",value:function(e){var a=this.state.squares.slice();a[e]="X",this.setState({squares:a})}},{key:"renderSquare",value:function(e){var a=this;return i.a.createElement(m,{value:this.state.squares[e],onClick:function(){return a.handleClick(e)}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"status"},"Next player: X"),i.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),i.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),i.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(i.a.Component),v=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"game"},i.a.createElement("div",{className:"game-board"},i.a.createElement(h,null)),i.a.createElement("div",{className:"game-info"},i.a.createElement("div",null),i.a.createElement("ol",null)))}}]),a}(i.a.Component);d.a.render(i.a.createElement(v,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.60b0004b.chunk.js.map