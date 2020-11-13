import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

import '../www/css/style.css';

export default class App extends React.Component {
constructor(props) {
super(props);
this.state = {selectMenu: 0};
this.onClickMenu1 = this.onClickMenu1.bind(this);
this.onClickMenu2 = this.onClickMenu2.bind(this);
this.onClickMenu3 = this.onClickMenu3.bind(this);
this.onClickMenu4 = this.onClickMenu4.bind(this);
}
renderToolbar() {
return (
<Toolbar>
<div className='center'>CSSで見た目を変える</div>
</Toolbar>
);
}
onClickMenu1() {
  if(this.state.selectMenu == 1){
    this.setState({selectMenu: 0});
  }
  else{
    this.setState({selectMenu: 1});
  }
}

onClickMenu2(){
  if(this.state.selectMenu == 2){
    this.setState({selectMenu: 0});
  }
  else{
    this.setState({selectMenu: 2});
  }
}
onClickMenu3(){
  if(this.state.selectMenu == 3){
    this.setState({selectMenu: 0});
  }
  else{
    this.setState({selectMenu: 3});
  }
}onClickMenu4(){
  if(this.state.selectMenu == 4){
    this.setState({selectMenu: 0});
  }
  else{
    this.setState({selectMenu: 4});
  }
}

render() {
  if(this.state.selectMenu == 0){
    var styleHello = "item-0";
  }
  if(this.state.selectMenu == 1){
  var styleHello = "item-1";
  }
    if(this.state.selectMenu == 2){
    var styleHello = "item-2";
  }
  if(this.state.selectMenu == 3)
  var styleHello = "item-3";
    if(this.state.selectMenu == 4){
    var styleHello = "item-4";
  }
return (
<Page renderToolbar={this.renderToolbar}>
<div className="midashi">見出しタイトル</div>
<p className={styleHello}>はろー！</p>
<ul className="menu">
<li className="item" onClick={this.onClickMenu1}>メニュー１</li>
<li className="item" onClick={this.onClickMenu2}>メニュー２</li>
<li className="item" onClick={this.onClickMenu3}>メニュー３</li>
<li className="item" onClick={this.onClickMenu4}>メニュー４</li>
</ul>
</Page>
);
}
}