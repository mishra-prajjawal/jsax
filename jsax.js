
$ = (e,index) => {
  let result;
  if (e[0] == ':') {
    result = document.getElementById(e.slice(1));
  } else if (e[0] == '.') {
    result = document.getElementsByClassName(e.slice(1))[0];
  } else {
    result = document.getElementsByTagName(e)[0];
  }
  return result;
};
Object.defineProperty(Element.prototype, 'content', {
  get: function() {
    return this.innerHTML;
  },
  set: function(value) {
    this.innerHTML = value;
  }
});
const print = console.log;

Object.defineProperty(Element.prototype, 'val', {
  get: function() {
    return this.value;
  },
  set: function(cont) {
    this.value = cont;
  }
});
class random{
  randint(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  rand(min, max) {
      return Math.random() * (max - min) + min;
  }
  randchoice(arr) {
      return arr[randint(0, arr.length - 1)];
  }
  randrange(start, stop, step) {
      if (step == undefined) {
          step = 1;
      }
      let arr = [];
      for (let i = start; i < stop; i += step) {
          arr.push(i);
      }
      return randchoice(arr);
  }
  randstr(length) {
      let result = "";
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
  }
  randcolor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  randid(length) {
      //js random id generator
      let result = "";
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
  }
  random_sessid(){
      //js random session id generator
      let result = "";
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      //every 4 characters add a dash
      for (let i = 0; i < 32; i++) {
          if (i % 4 == 0 && i != 0) {
              result += "-";
          }
          result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
  }
}
class cookies{
  set_cookie(name,content,time){
      let d = new Date();
      d.setTime(d.getTime() + (time*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = name + "=" + content + ";" + expires + ";path=/";
  }
  delete_cookie(name){
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  is_cookie(cname){
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return true;
          }
      }
      return false;
  }
  get_cookie(cname){
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
}
class clock{
  time(){
      let d = new Date();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      if (h < 10) {
          h = "0" + h;
      }
      if (m < 10) {
          m = "0" + m;
      }
      if (s < 10) {
          s = "0" + s;
      }
      return [h, m, s];
  }
  date(){
      let d = new Date();
      let day = d.getDate();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      if (day < 10) {
          day = "0" + day;
      }
      if (month < 10) {
          month = "0" + month;
      }
      return [day, month, year];
  }
  datetime(){
      let d = new Date();
      let day = d.getDate();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      if (day < 10) {
          day = "0" + day;
      }
      if (month < 10) {
          month = "0" + month;
      }
      if (h < 10) {
          h = "0" + h;
      }
      if (m < 10) {
          m = "0" + m;
      }
      if (s < 10) {
          s = "0" + s;
      }
      return  [day, month, year, h, m, s];
  }
  zone(){
      let d = new Date();
      let zone = d.getTimezoneOffset();
      return zone;
  }
  timezone(){
      let d = new Date();
      let zone = d.getTimezoneOffset();
      let hours = Math.floor(zone / 60);
      let minutes = zone % 60;
      return [hours, minutes];
  }
  setgap(method, time){
      setInterval(method, time);
  }
  setout(method, time){
      setTimeout(method, time);
  }
  clearout(method){
      clearTimeout(method);
  }
  cleargap(method){
      clearInterval(method);
  }
} 
class storage{
  set_storage(name, content){
      localStorage.setItem(name, content);
  }
  get_storage(name){
      return localStorage.getItem(name);
  }
  delete_storage(name){
      localStorage.removeItem(name);
  }
  is_storage(name){
      if (localStorage.getItem(name) === null) {
          return false;
      } else {
          return true;
      }
  }
  clear_storage(){
      localStorage.clear();
  }
}
class session{  
  set_session(name, content){
      sessionStorage.setItem(name, content);
  }
  get_session(name){
      return sessionStorage.getItem(name);
  }
  delete_session(name){
      sessionStorage.removeItem(name);
  }
  is_session(name){
      if (sessionStorage.getItem(name) === null) {
          return false;
      } else {
          return true;
      }
  }
  clear_session(){
      sessionStorage.clear();
  }
}
class url{
  get_url(){
      return window.location.href;
  }
  get_domain(){
      return window.location.hostname;
  }
  get_path(){
      return window.location.pathname;
  }
  get_protocol(){
      return window.location.protocol;
  }
  get_port(){
      return window.location.port;
  }
  get_search(){
      return window.location.search;
  }
  get_hash(){
      return window.location.hash;
  }
  get_param(name){
      let url = window.location.href;
      let params = url.split('?')[1].split('&');
      for (let i = 0; i < params.length; i++) {
          let param = params[i].split('=');
          if (param[0] == name) {
              return param[1];
          }
      }
      return false;
  }

}
class browser{
  get_browser(){
      let ua = navigator.userAgent;
      let tem;
      let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
          tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE ' + (tem[1] || '');
      }
      if (M[1] === 'Chrome') {
          tem = ua.match(/\bOPR\/(\d+)/); 
          if (tem != null) {
              return 'Opera ' + tem[1];
          }
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
          M.splice(1, 1, tem[1]);
      }
      return M.join(' ');
  }
  get_os(){
      let OSName = "Unknown OS";
      if (navigator.appVersion.indexOf("Win") != -1) {
          OSName = "Windows";
      }
      if (navigator.appVersion.indexOf("Mac") != -1) {
          OSName = "MacOS";
      }
      if (navigator.appVersion.indexOf("X11") != -1) {
          OSName = "UNIX";
      }
      if (navigator.appVersion.indexOf("Linux") != -1) {
          OSName = "Linux";
      }
      return OSName;
  }
  get_language(){
      return navigator.language;
  }
  get_platform(){
      return navigator.platform;
  }
  get_version(){
      return navigator.appVersion;
  }
  get_vendor(){
      return navigator.vendor;
  }
  get_online(){
      return navigator.onLine;
  }
}
class dom{
  get_element(id){
      return document.getElementById(id);
  }
  get_elements(name){
      return document.getElementsByName(name);
  }
  get_class(name){
      return document.getElementsByClassName(name);
  }
  get_tag(name){
      return document.getElementsByTagName(name);
  }
  get_query(name){
      return document.querySelector(name);
  }
  get_queries(name){
      return document.querySelectorAll(name);
  }
  get_body(){
      return document.body;
  }
  get_head(){
      return document.head;
  }
  get_html(){
      return document.documentElement;
  }
  get_title(){
      return document.title;
  }
  set_title(name){
      document.title = name;
  }
  get_width(){
      return window.innerWidth;
  }
  get_height(){
      return window.innerHeight;
  }
  get_scroll_x(){
      return window.scrollX;
  }
  get_scroll_y(){
      return window.scrollY;
  }
  get_scroll_top(){
      return window.pageYOffset;
  }
  get_scroll_left(){
      return window.pageXOffset;
  }
  get_scroll_width(){
      return document.body.scrollWidth;
  }
  get_scroll_height(){
      return document.body.scrollHeight;
  }
  get_client_width(){
      return document.body.clientWidth;
  }
  get_client_height(){
      return document.body.clientHeight;
  }
  get_style(name){
      return window.getComputedStyle(name);
  }
  get_style_value(name, value){
      return window.getComputedStyle(name).getPropertyValue(value);
  }
  get_style_color(name){
      return window.getComputedStyle(name).color;
  }
  get_style_background(name){
      return window.getComputedStyle(name).background;
  }
  get_style_background_color(name){
      return window.getComputedStyle(name).backgroundColor;
  }
  get_style_background_image(name){
      return window.getComputedStyle(name).backgroundImage;
  }
  get_style_font_size(name){
      return window.getComputedStyle(name).fontSize;
  }
  get_style_font_family(name){
      return window.getComputedStyle(name).fontFamily;
  }
  get_style_font_weight(name){
      return window.getComputedStyle(name).fontWeight;
  }
  get_style_font_style(name){
      return window.getComputedStyle(name).fontStyle;
  }
  get_style_font_variant(name){
      return window.getComputedStyle(name).fontVariant;
  }
  get_style_text_align(name){
      return window.getComputedStyle(name).textAlign;
  }
  get_style_text_decoration(name){
      return window.getComputedStyle(name).textDecoration;
  }
  get_style_text_transform(name){
      return window.getComputedStyle(name).textTransform;
  }
  get_style_text_indent(name){
      return window.getComputedStyle(name).textIndent;
  }
  get_style_text_shadow(name){
      return window.getComputedStyle(name).textShadow;
  }
  get_style_line_height(name){
      return window.getComputedStyle(name).lineHeight;
  }
  get_style_letter_spacing(name){
      return window.getComputedStyle(name).letterSpacing;
  }
  get_style_word_spacing(name){
      return window.getComputedStyle(name).wordSpacing;
  }
  get_style_white_space(name){
      return window.getComputedStyle(name).whiteSpace;
  }
  get_style_word_break(name){
      return window.getComputedStyle(name).wordBreak;
  }
  get_style_overflow(name){
      return window.getComputedStyle(name).overflow;
  }
  get_style_overflow_x(name){
      return window.getComputedStyle(name).overflowX;
  }
  get_style_overflow_y(name){
      return window.getComputedStyle(name).overflowY;
  }
  get_style_border(name){
      return window.getComputedStyle(name).border;
  }
  get_style_border_color(name){
      return window.getComputedStyle(name).borderColor;
  }
  get_style_border_style(name){
      return window.getComputedStyle(name).borderStyle;
  }
  get_style_border_width(name){
      return window.getComputedStyle(name).borderWidth;
  }
  get_style_border_top(name){
      return window.getComputedStyle(name).borderTop;
  }
  get_style_border_top_color(name){
      return window.getComputedStyle(name).borderTopColor;
  }
  get_style_border_top_style(name){
      return window.getComputedStyle(name).borderTopStyle;
  }
  get_style_border_top_width(name){
      return window.getComputedStyle(name).borderTopWidth;
  }
  get_style_border_bottom(name){
      return window.getComputedStyle(name).borderBottom;
  }
  get_style_border_bottom_color(name){
      return window.getComputedStyle(name).borderBottomColor;
  }
  get_style_border_bottom_style(name){
      return window.getComputedStyle(name).borderBottomStyle;
  }
  get_style_border_bottom_width(name){
      return window.getComputedStyle(name).borderBottomWidth;
  }
  get_style_border_left(name){
      return window.getComputedStyle(name).borderLeft;
  }
  get_style_border_left_color(name){
      return window.getComputedStyle(name).borderLeftColor;
  }
  get_style_border_left_style(name){
      return window.getComputedStyle(name).borderLeftStyle;
  }
  get_style_border_left_width(name){
      return window.getComputedStyle(name).borderLeftWidth;
  }
  get_style_border_right(name){
      return window.getComputedStyle(name).borderRight;
  }
  get_style_border_right_color(name){
      return window.getComputedStyle(name).borderRightColor;
  }
  get_style_border_right_style(name){
      return window.getComputedStyle(name).borderRightStyle;
  }
  get_style_border_right_width(name){
      return window.getComputedStyle(name).borderRightWidth;
  }
  get_style_border_radius(name){
      return window.getComputedStyle(name).borderRadius;
  }
  get_style_border_top_left_radius(name){
      return window.getComputedStyle(name).borderTopLeftRadius;
  }
  get_style_border_top_right_radius(name){
      return window.getComputedStyle(name).borderTopRightRadius;
  }
  get_style_border_bottom_right_radius(name){
      return window.getComputedStyle(name).borderBottomRightRadius;
  }
  get_style_border_bottom_left_radius(name){
      return window.getComputedStyle(name).borderBottomLeftRadius;
  }
  get_style_border_collapse(name){
      return window.getComputedStyle(name).borderCollapse;
  }
  get_style_border_spacing(name){
      return window.getComputedStyle(name).borderSpacing;
  }
  get_style_padding(name){
      return window.getComputedStyle(name).padding;
  }
  get_style_padding_top(name){
      return window.getComputedStyle(name).paddingTop;
  }
  get_style_padding_bottom(name){
      return window.getComputedStyle(name).paddingBottom;
  }
  get_style_padding_left(name){
      return window.getComputedStyle(name).paddingLeft;
  }
  get_style_padding_right(name){
      return window.getComputedStyle(name).paddingRight;
  }
  get_style_margin(name){
      return window.getComputedStyle(name).margin;
  }
  get_style_margin_top(name){
      return window.getComputedStyle(name).marginTop;
  }
  get_style_margin_bottom(name){
      return window.getComputedStyle(name).marginBottom;
  }
  get_style_margin_left(name){
      return window.getComputedStyle(name).marginLeft;
  }
  get_style_margin_right(name){
      return window.getComputedStyle(name).marginRight;
  }
  get_style_width(name){
      return window.getComputedStyle(name).width;
  }
  get_style_height(name){
      return window.getComputedStyle(name).height;
  }
  get_style_min_width(name){
      return window.getComputedStyle(name).minWidth;
  }
  get_style_min_height(name){
      return window.getComputedStyle(name).minHeight;
  }
  get_style_max_width(name){
      return window.getComputedStyle(name).maxWidth;
  }
  get_style_max_height(name){
      return window.getComputedStyle(name).maxHeight;
  }
  get_style_position(name){
      return window.getComputedStyle(name).position;
  }
  get_style_top(name){
      return window.getComputedStyle(name).top;
  }
  get_style_right(name){
      return window.getComputedStyle(name).right; 
  }
}
function wget(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(this.responseText);
    };
    xhr.onerror = function() {
      reject(new Error("An error occurred while making the request"));
    };
    xhr.open("GET", url);
    xhr.send();
  });
}

function post(url, data) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(this.responseText);
    };
    xhr.onerror = function() {
      reject(new Error("An error occurred while making the request"));
    };
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  });
}




a = new random();  
print(a.random_sessid(10));
b = new clock();
print(b.timezone());
