!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=n(58);function o(){var e=document.createElement("div");e.className="todo",this.parentNode.parentNode.insertBefore(e,this.parentNode.nextSibling);var t=document.createElement("span");t.innerHTML=Object(r.format)(new Date,"DD/MM"),t.className="time",e.appendChild(t);var n=document.createElement("p");n.innerHTML="New task",n.className="new-task",n.setAttribute("contenteditable",!0),n.setAttribute("onkeypress","return (this.innerText.length <= 35)"),e.appendChild(n);var o=document.createElement("button");o.className="delete-todo",o.innerHTML='<i class="fas fa-minus-circle fa-lg"></i>',e.appendChild(o),o.addEventListener("click",function(){a.remove(),this.parentNode.remove()});var a=document.createElement("div");a.className="info-container",e.parentNode.insertBefore(a,e.nextSibling),$(e).click(function(){$(a).toggle()});var u=document.createElement("p");u.innerHTML="Description...",u.className="description",u.setAttribute("contenteditable",!0),a.appendChild(u)}document.getElementById("btn").addEventListener("click",function(){var e=document.createElement("div");e.className="project";var t=document.getElementById("btn");document.getElementById("btn").parentNode.insertBefore(e,t);var n=document.createElement("button");n.className="add-todo",n.innerHTML='<i class="fas fa-plus-square fa-3x"></i>',e.appendChild(n),n.addEventListener("click",o);var r=document.createElement("h3");r.className="title",r.innerHTML="New project",r.setAttribute("contenteditable","true"),r.setAttribute("onkeypress","return (this.innerText.length <= 17)"),e.appendChild(r);var a=document.createElement("button");a.className="delete-project",a.innerHTML='<i class="fas fa-trash-alt fa-2x"></i>',e.appendChild(a),a.addEventListener("click",function(){confirm("Are you sure?")&&this.parentNode.remove()}),localStorage.setItem("project",e.outerHTML)})},function(e,t,n){var r=n(59),o=n(13),a=36e5,u=6e4,i=2,s=/[T ]/,c=/:/,f=/^(\d{2})$/,v=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],l=/^(\d{4})/,d=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],g=/^-(\d{2})$/,p=/^-?(\d{3})$/,m=/^-?(\d{2})-?(\d{2})$/,x=/^-?W(\d{2})$/,h=/^-?W(\d{2})-?(\d{1})$/,D=/^(\d{2}([.,]\d*)?)$/,M=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,T=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,y=/([Z+-].*)$/,S=/^(Z)$/,b=/^([+-])(\d{2})$/,Y=/^([+-])(\d{2}):?(\d{2})$/;function O(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}e.exports=function(e,t){if(o(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=(t||{}).additionalDigits;n=null==n?i:Number(n);var w=function(e){var t,n={},r=e.split(s);if(c.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var o=y.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e),I=function(e,t){var n,r=v[t],o=d[t];if(n=l.exec(e)||o.exec(e)){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=f.exec(e)||r.exec(e)){var u=n[1];return{year:100*parseInt(u,10),restDateString:e.slice(u.length)}}return{year:null}}(w.date,n),H=I.year,F=function(e,t){if(null===t)return null;var n,r,o,a;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=g.exec(e))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(t,o),r;if(n=p.exec(e)){r=new Date(0);var u=parseInt(n[1],10);return r.setUTCFullYear(t,0,u),r}if(n=m.exec(e)){r=new Date(0),o=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(t,o,i),r}if(n=x.exec(e))return a=parseInt(n[1],10)-1,O(t,a);if(n=h.exec(e)){a=parseInt(n[1],10)-1;var s=parseInt(n[2],10)-1;return O(t,a,s)}return null}(I.restDateString,H);if(F){var N,W=F.getTime(),k=0;if(w.time&&(k=function(e){var t,n,r;if(t=D.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*a;if(t=M.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*a+r*u;if(t=T.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var o=parseFloat(t[3].replace(",","."));return n%24*a+r*u+1e3*o}return null}(w.time)),w.timezone)X=w.timezone,N=(($=S.exec(X))?0:($=b.exec(X))?(L=60*parseInt($[2],10),"+"===$[1]?-L:L):($=Y.exec(X))?(L=60*parseInt($[2],10)+parseInt($[3],10),"+"===$[1]?-L:L):0)*u;else{var E=W+k,z=new Date(E);N=r(z);var A=new Date(E);A.setDate(z.getDate()+1);var C=r(A)-r(z);C>0&&(N+=C)}return new Date(W+k+N)}var X,$,L;return new Date(e)}},function(e,t,n){var r=n(1),o=n(3);e.exports=function(e){var t=r(e),n=t.getFullYear(),a=new Date(0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);var u=o(a),i=new Date(0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var s=o(i);return t.getTime()>=u.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}},function(e,t,n){var r=n(9);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setDate(n.getDate()+o),n}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e).getTime(),o=Number(t);return new Date(n+o)}},function(e,t,n){var r=n(2),o=n(3);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),o(n)}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e).getTime(),o=r(t).getTime();return n<o?-1:n>o?1:0}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=(a<n?7:0)+a-n;return o.setDate(o.getDate()-u),o.setHours(0,0,0,0),o}},function(e,t,n){var r=n(4),o=6e4,a=864e5;e.exports=function(e,t){var n=r(e),u=r(t),i=n.getTime()-n.getTimezoneOffset()*o,s=u.getTime()-u.getTimezoneOffset()*o;return Math.round((i-s)/a)}},function(e,t,n){var r=n(1),o=n(14);e.exports=function(e,t){var n=r(e),a=Number(t),u=n.getMonth()+a,i=new Date(0);i.setFullYear(n.getFullYear(),u,1),i.setHours(0,0,0,0);var s=o(i);return n.setMonth(u,Math.min(s,n.getDate())),n}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()-o.getTime()}},function(e,t){e.exports=function(e){return e instanceof Date}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e),n=t.getFullYear(),o=t.getMonth(),a=new Date(0);return a.setFullYear(n,o+1,0),a.setHours(0,0,0,0),a.getDate()}},function(e,t,n){var r=n(5);e.exports=function(e,t){var n=Number(t);return r(e,7*n)}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e).getTime(),o=r(t).getTime();return n>o?-1:n<o?1:0}},function(e,t,n){var r=n(1),o=n(31),a=n(8);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setMonth(n.getMonth()-i*s),i*(s-(a(n,u)===-i))}},function(e,t,n){var r=n(12);e.exports=function(e,t){var n=r(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(72),o=n(73);e.exports={distanceInWords:r(),format:o()}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(1),o=n(3),a=n(7),u=6048e5;e.exports=function(e){var t=r(e),n=o(t).getTime()-a(t).getTime();return Math.round(n/u)+1}},function(e,t,n){var r=n(9);e.exports=function(e,t,n){var o=r(e,n),a=r(t,n);return o.getTime()===a.getTime()}},function(e,t,n){var r=n(6),o=36e5;e.exports=function(e,t){var n=Number(t);return r(e,n*o)}},function(e,t,n){var r=n(2),o=n(25);e.exports=function(e,t){var n=Number(t);return o(e,r(e)+n)}},function(e,t,n){var r=n(1),o=n(7),a=n(10);e.exports=function(e,t){var n=r(e),u=Number(t),i=a(n,o(n)),s=new Date(0);return s.setFullYear(u,0,4),s.setHours(0,0,0,0),(n=o(s)).setDate(n.getDate()+i),n}},function(e,t,n){var r=n(6),o=6e4;e.exports=function(e,t){var n=Number(t);return r(e,n*o)}},function(e,t,n){var r=n(11);e.exports=function(e,t){var n=Number(t);return r(e,3*n)}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=Number(t);return r(e,1e3*n)}},function(e,t,n){var r=n(11);e.exports=function(e,t){var n=Number(t);return r(e,12*n)}},function(e,t,n){var r=n(2);e.exports=function(e,t){return r(e)-r(t)}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=r(t);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return Math.floor(t.getMonth()/3)+1}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()-o.getFullYear()}},function(e,t,n){var r=n(1),o=n(10),a=n(8);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setDate(n.getDate()-i*s),i*(s-(a(n,u)===-i))}},function(e,t,n){var r=n(24);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(16),o=n(1),a=n(18),u=n(17),i=n(19),s=1440,c=2520,f=43200,v=86400;e.exports=function(e,t,n){var l=n||{},d=r(e,t),g=l.locale,p=i.distanceInWords.localize;g&&g.distanceInWords&&g.distanceInWords.localize&&(p=g.distanceInWords.localize);var m,x,h={addSuffix:Boolean(l.addSuffix),comparison:d};d>0?(m=o(e),x=o(t)):(m=o(t),x=o(e));var D,M=a(x,m),T=x.getTimezoneOffset()-m.getTimezoneOffset(),y=Math.round(M/60)-T;if(y<2)return l.includeSeconds?M<5?p("lessThanXSeconds",5,h):M<10?p("lessThanXSeconds",10,h):M<20?p("lessThanXSeconds",20,h):M<40?p("halfAMinute",null,h):p(M<60?"lessThanXMinutes":"xMinutes",1,h):0===y?p("lessThanXMinutes",1,h):p("xMinutes",y,h);if(y<45)return p("xMinutes",y,h);if(y<90)return p("aboutXHours",1,h);if(y<s)return p("aboutXHours",Math.round(y/60),h);if(y<c)return p("xDays",1,h);if(y<f)return p("xDays",Math.round(y/s),h);if(y<v)return p("aboutXMonths",D=Math.round(y/f),h);if((D=u(x,m))<12)return p("xMonths",Math.round(y/f),h);var S=D%12,b=Math.floor(D/12);return S<3?p("aboutXYears",b,h):S<9?p("overXYears",b,h):p("almostXYears",b+1,h)}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=6+(a<n?-7:0)-(a-n);return o.setDate(o.getDate()+u),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(1),o=n(40),a=n(10);e.exports=function(e){var t=r(e);return a(t,o(t))+1}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}},function(e,t,n){var r=n(13);e.exports=function(e){if(r(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e).getFullYear();return t%400==0||t%4==0&&t%100!=0}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e).getDay();return 0===t&&(t=7),t}},function(e,t,n){var r=n(45);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return t.setMinutes(0,0,0),t}},function(e,t,n){var r=n(22);e.exports=function(e,t){return r(e,t,{weekStartsOn:1})}},function(e,t,n){var r=n(7);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(49);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return t.setSeconds(0,0),t}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()}},function(e,t,n){var r=n(52);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3;return t.setMonth(o,1),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(54);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return t.setMilliseconds(0),t}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()===o.getFullYear()}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=6+(a<n?-7:0)-(a-n);return o.setHours(0,0,0,0),o.setDate(o.getDate()+u),o}},function(e,t,n){var r=n(1),o=n(14);e.exports=function(e,t){var n=r(e),a=Number(t),u=n.getFullYear(),i=n.getDate(),s=new Date(0);s.setFullYear(u,a,15),s.setHours(0,0,0,0);var c=o(s);return n.setMonth(a,Math.min(i,c)),n}},function(e,t,n){e.exports={addDays:n(5),addHours:n(23),addISOYears:n(24),addMilliseconds:n(6),addMinutes:n(26),addMonths:n(11),addQuarters:n(27),addSeconds:n(28),addWeeks:n(15),addYears:n(29),areRangesOverlapping:n(60),closestIndexTo:n(61),closestTo:n(62),compareAsc:n(8),compareDesc:n(16),differenceInCalendarDays:n(10),differenceInCalendarISOWeeks:n(63),differenceInCalendarISOYears:n(30),differenceInCalendarMonths:n(31),differenceInCalendarQuarters:n(64),differenceInCalendarWeeks:n(65),differenceInCalendarYears:n(33),differenceInDays:n(34),differenceInHours:n(66),differenceInISOYears:n(67),differenceInMilliseconds:n(12),differenceInMinutes:n(68),differenceInMonths:n(17),differenceInQuarters:n(69),differenceInSeconds:n(18),differenceInWeeks:n(70),differenceInYears:n(71),distanceInWords:n(36),distanceInWordsStrict:n(75),distanceInWordsToNow:n(76),eachDay:n(77),endOfDay:n(20),endOfHour:n(78),endOfISOWeek:n(79),endOfISOYear:n(80),endOfMinute:n(81),endOfMonth:n(38),endOfQuarter:n(82),endOfSecond:n(83),endOfToday:n(84),endOfTomorrow:n(85),endOfWeek:n(37),endOfYear:n(86),endOfYesterday:n(87),format:n(88),getDate:n(89),getDay:n(90),getDayOfYear:n(39),getDaysInMonth:n(14),getDaysInYear:n(91),getHours:n(92),getISODay:n(43),getISOWeek:n(21),getISOWeeksInYear:n(93),getISOYear:n(2),getMilliseconds:n(94),getMinutes:n(95),getMonth:n(96),getOverlappingDaysInRanges:n(97),getQuarter:n(32),getSeconds:n(98),getTime:n(99),getYear:n(100),isAfter:n(101),isBefore:n(102),isDate:n(13),isEqual:n(103),isFirstDayOfMonth:n(104),isFriday:n(105),isFuture:n(106),isLastDayOfMonth:n(107),isLeapYear:n(42),isMonday:n(108),isPast:n(109),isSameDay:n(110),isSameHour:n(44),isSameISOWeek:n(46),isSameISOYear:n(47),isSameMinute:n(48),isSameMonth:n(50),isSameQuarter:n(51),isSameSecond:n(53),isSameWeek:n(22),isSameYear:n(55),isSaturday:n(111),isSunday:n(112),isThisHour:n(113),isThisISOWeek:n(114),isThisISOYear:n(115),isThisMinute:n(116),isThisMonth:n(117),isThisQuarter:n(118),isThisSecond:n(119),isThisWeek:n(120),isThisYear:n(121),isThursday:n(122),isToday:n(123),isTomorrow:n(124),isTuesday:n(125),isValid:n(41),isWednesday:n(126),isWeekend:n(127),isWithinRange:n(128),isYesterday:n(129),lastDayOfISOWeek:n(130),lastDayOfISOYear:n(131),lastDayOfMonth:n(132),lastDayOfQuarter:n(133),lastDayOfWeek:n(56),lastDayOfYear:n(134),max:n(135),min:n(136),parse:n(1),setDate:n(137),setDay:n(138),setDayOfYear:n(139),setHours:n(140),setISODay:n(141),setISOWeek:n(142),setISOYear:n(25),setMilliseconds:n(143),setMinutes:n(144),setMonth:n(57),setQuarter:n(145),setSeconds:n(146),setYear:n(147),startOfDay:n(4),startOfHour:n(45),startOfISOWeek:n(3),startOfISOYear:n(7),startOfMinute:n(49),startOfMonth:n(148),startOfQuarter:n(52),startOfSecond:n(54),startOfToday:n(149),startOfTomorrow:n(150),startOfWeek:n(9),startOfYear:n(40),startOfYesterday:n(151),subDays:n(152),subHours:n(153),subISOYears:n(35),subMilliseconds:n(154),subMinutes:n(155),subMonths:n(156),subQuarters:n(157),subSeconds:n(158),subWeeks:n(159),subYears:n(160)}},function(e,t){e.exports=function(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();return t.setSeconds(0,0),6e4*n+t.getTime()%6e4}},function(e,t,n){var r=n(1);e.exports=function(e,t,n,o){var a=r(e).getTime(),u=r(t).getTime(),i=r(n).getTime(),s=r(o).getTime();if(a>u||i>s)throw new Error("The start of the range cannot be after the end of the range");return a<s&&i<u}},function(e,t,n){var r=n(1);e.exports=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,o,a=r(e).getTime();return t.forEach(function(e,t){var u=r(e),i=Math.abs(a-u.getTime());(void 0===n||i<o)&&(n=t,o=i)}),n}},function(e,t,n){var r=n(1);e.exports=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,o,a=r(e).getTime();return t.forEach(function(e){var t=r(e),u=Math.abs(a-t.getTime());(void 0===n||u<o)&&(n=t,o=u)}),n}},function(e,t,n){var r=n(3),o=6e4,a=6048e5;e.exports=function(e,t){var n=r(e),u=r(t),i=n.getTime()-n.getTimezoneOffset()*o,s=u.getTime()-u.getTimezoneOffset()*o;return Math.round((i-s)/a)}},function(e,t,n){var r=n(32),o=n(1);e.exports=function(e,t){var n=o(e),a=o(t);return 4*(n.getFullYear()-a.getFullYear())+(r(n)-r(a))}},function(e,t,n){var r=n(9),o=6e4,a=6048e5;e.exports=function(e,t,n){var u=r(e,n),i=r(t,n),s=u.getTime()-u.getTimezoneOffset()*o,c=i.getTime()-i.getTimezoneOffset()*o;return Math.round((s-c)/a)}},function(e,t,n){var r=n(12),o=36e5;e.exports=function(e,t){var n=r(e,t)/o;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(1),o=n(30),a=n(8),u=n(35);e.exports=function(e,t){var n=r(e),i=r(t),s=a(n,i),c=Math.abs(o(n,i));return n=u(n,s*c),s*(c-(a(n,i)===-s))}},function(e,t,n){var r=n(12),o=6e4;e.exports=function(e,t){var n=r(e,t)/o;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(17);e.exports=function(e,t){var n=r(e,t)/3;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(34);e.exports=function(e,t){var n=r(e,t)/7;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(1),o=n(33),a=n(8);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setFullYear(n.getFullYear()-i*s),i*(s-(a(n,u)===-i))}},function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var o;return r=r||{},o="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}}}},function(e,t,n){var r=n(74);e.exports=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],c={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){c[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}}),{formatters:c,formattingTokensRegExp:r(c)}}},function(e,t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);var o=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},function(e,t,n){var r=n(16),o=n(1),a=n(18),u=n(19),i=1440,s=43200,c=525600;e.exports=function(e,t,n){var f=n||{},v=r(e,t),l=f.locale,d=u.distanceInWords.localize;l&&l.distanceInWords&&l.distanceInWords.localize&&(d=l.distanceInWords.localize);var g,p,m,x={addSuffix:Boolean(f.addSuffix),comparison:v};v>0?(g=o(e),p=o(t)):(g=o(t),p=o(e));var h=Math[f.partialMethod?String(f.partialMethod):"floor"],D=a(p,g),M=p.getTimezoneOffset()-g.getTimezoneOffset(),T=h(D/60)-M;if("s"===(m=f.unit?String(f.unit):T<1?"s":T<60?"m":T<i?"h":T<s?"d":T<c?"M":"Y"))return d("xSeconds",D,x);if("m"===m)return d("xMinutes",T,x);if("h"===m)return d("xHours",h(T/60),x);if("d"===m)return d("xDays",h(T/i),x);if("M"===m)return d("xMonths",h(T/s),x);if("Y"===m)return d("xYears",h(T/c),x);throw new Error("Unknown unit: "+m)}},function(e,t,n){var r=n(36);e.exports=function(e,t){return r(Date.now(),e,t)}},function(e,t,n){var r=n(1);e.exports=function(e,t,n){var o=r(e),a=void 0!==n?n:1,u=r(t).getTime();if(o.getTime()>u)throw new Error("The first date cannot be after the second date");var i=[],s=o;for(s.setHours(0,0,0,0);s.getTime()<=u;)i.push(r(s)),s.setDate(s.getDate()+a);return i}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return t.setMinutes(59,59,999),t}},function(e,t,n){var r=n(37);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(2),o=n(3);e.exports=function(e){var t=r(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var a=o(n);return a.setMilliseconds(a.getMilliseconds()-1),a}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return t.setSeconds(59,999),t}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return t.setMilliseconds(999),t}},function(e,t,n){var r=n(20);e.exports=function(){return r(new Date)}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(39),o=n(21),a=n(2),u=n(1),i=n(41),s=n(19);var c={M:function(e){return e.getMonth()+1},MM:function(e){return v(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return v(e.getDate(),2)},DDD:function(e){return r(e)},DDDD:function(e){return v(r(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return o(e)},WW:function(e){return v(o(e),2)},YY:function(e){return v(e.getFullYear(),4).substr(2)},YYYY:function(e){return v(e.getFullYear(),4)},GG:function(e){return String(a(e)).substr(2)},GGGG:function(e){return a(e)},H:function(e){return e.getHours()},HH:function(e){return v(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return v(c.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return v(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return v(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return v(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return v(e.getMilliseconds(),3)},Z:function(e){return f(e.getTimezoneOffset(),":")},ZZ:function(e){return f(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function f(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),o=r%60;return n+v(Math.floor(r/60),2)+t+v(o,2)}function v(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}e.exports=function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=(n||{}).locale,a=s.format.formatters,f=s.format.formattingTokensRegExp;o&&o.format&&o.format.formatters&&(a=o.format.formatters,o.format.formattingTokensRegExp&&(f=o.format.formattingTokensRegExp));var v=u(e);return i(v)?function(e,t,n){var r,o,a,u=e.match(n),i=u.length;for(r=0;r<i;r++)o=t[u[r]]||c[u[r]],u[r]=o||((a=u[r]).match(/\[[\s\S]/)?a.replace(/^\[|]$/g,""):a.replace(/\\/g,""));return function(e){for(var t="",n=0;n<i;n++)u[n]instanceof Function?t+=u[n](e,c):t+=u[n];return t}}(r,a,f)(v):"Invalid Date"}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getDate()}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getDay()}},function(e,t,n){var r=n(42);e.exports=function(e){return r(e)?366:365}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getHours()}},function(e,t,n){var r=n(7),o=n(15),a=6048e5;e.exports=function(e){var t=r(e),n=r(o(t,60)).valueOf()-t.valueOf();return Math.round(n/a)}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getMilliseconds()}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getMinutes()}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getMonth()}},function(e,t,n){var r=n(1),o=864e5;e.exports=function(e,t,n,a){var u=r(e).getTime(),i=r(t).getTime(),s=r(n).getTime(),c=r(a).getTime();if(u>i||s>c)throw new Error("The start of the range cannot be after the end of the range");if(!(u<c&&s<i))return 0;var f=(c>i?i:c)-(s<u?u:s);return Math.ceil(f/o)}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getSeconds()}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getTime()}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getFullYear()}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()>o.getTime()}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()<o.getTime()}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(1);e.exports=function(e){return 1===r(e).getDate()}},function(e,t,n){var r=n(1);e.exports=function(e){return 5===r(e).getDay()}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getTime()>(new Date).getTime()}},function(e,t,n){var r=n(1),o=n(20),a=n(38);e.exports=function(e){var t=r(e);return o(t).getTime()===a(t).getTime()}},function(e,t,n){var r=n(1);e.exports=function(e){return 1===r(e).getDay()}},function(e,t,n){var r=n(1);e.exports=function(e){return r(e).getTime()<(new Date).getTime()}},function(e,t,n){var r=n(4);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(1);e.exports=function(e){return 6===r(e).getDay()}},function(e,t,n){var r=n(1);e.exports=function(e){return 0===r(e).getDay()}},function(e,t,n){var r=n(44);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(46);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(47);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(48);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(50);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(51);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(53);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(22);e.exports=function(e,t){return r(new Date,e,t)}},function(e,t,n){var r=n(55);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(1);e.exports=function(e){return 4===r(e).getDay()}},function(e,t,n){var r=n(4);e.exports=function(e){return r(e).getTime()===r(new Date).getTime()}},function(e,t,n){var r=n(4);e.exports=function(e){var t=new Date;return t.setDate(t.getDate()+1),r(e).getTime()===r(t).getTime()}},function(e,t,n){var r=n(1);e.exports=function(e){return 2===r(e).getDay()}},function(e,t,n){var r=n(1);e.exports=function(e){return 3===r(e).getDay()}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e).getDay();return 0===t||6===t}},function(e,t,n){var r=n(1);e.exports=function(e,t,n){var o=r(e).getTime(),a=r(t).getTime(),u=r(n).getTime();if(a>u)throw new Error("The start of the range cannot be after the end of the range");return o>=a&&o<=u}},function(e,t,n){var r=n(4);e.exports=function(e){var t=new Date;return t.setDate(t.getDate()-1),r(e).getTime()===r(t).getTime()}},function(e,t,n){var r=n(56);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(2),o=n(3);e.exports=function(e){var t=r(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var a=o(n);return a.setDate(a.getDate()-1),a}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(1);e.exports=function(){var e=Array.prototype.slice.call(arguments).map(function(e){return r(e)}),t=Math.max.apply(null,e);return new Date(t)}},function(e,t,n){var r=n(1);e.exports=function(){var e=Array.prototype.slice.call(arguments).map(function(e){return r(e)}),t=Math.min.apply(null,e);return new Date(t)}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setDate(o),n}},function(e,t,n){var r=n(1),o=n(5);e.exports=function(e,t,n){var a=n&&Number(n.weekStartsOn)||0,u=r(e),i=Number(t),s=u.getDay();return o(u,((i%7+7)%7<a?7:0)+i-s)}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMonth(0),n.setDate(o),n}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setHours(o),n}},function(e,t,n){var r=n(1),o=n(5),a=n(43);e.exports=function(e,t){var n=r(e),u=Number(t),i=a(n);return o(n,u-i)}},function(e,t,n){var r=n(1),o=n(21);e.exports=function(e,t){var n=r(e),a=Number(t),u=o(n)-a;return n.setDate(n.getDate()-7*u),n}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMilliseconds(o),n}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMinutes(o),n}},function(e,t,n){var r=n(1),o=n(57);e.exports=function(e,t){var n=r(e),a=Number(t)-(Math.floor(n.getMonth()/3)+1);return o(n,n.getMonth()+3*a)}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setSeconds(o),n}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setFullYear(o),n}},function(e,t,n){var r=n(1);e.exports=function(e){var t=r(e);return t.setDate(1),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(4);e.exports=function(){return r(new Date)}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(0,0,0,0),o}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(0,0,0,0),o}},function(e,t,n){var r=n(5);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(23);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(26);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(11);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(27);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(28);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(15);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(29);e.exports=function(e,t){var n=Number(t);return r(e,-n)}}]);