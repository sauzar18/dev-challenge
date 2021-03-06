require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/consola/dist sync recursive":
/*!****************************************!*\
  !*** ./node_modules/consola/dist sync ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/consola/dist sync recursive";

/***/ }),

/***/ "./node_modules/consola/dist/consola.js":
/*!**********************************************!*\
  !*** ./node_modules/consola/dist/consola.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(u){return u&&"object"==typeof u&&"default"in u?u.default:u}var util=_interopDefault(__webpack_require__(/*! util */ "util")),path=__webpack_require__(/*! path */ "path"),fs=__webpack_require__(/*! fs */ "fs"),os=_interopDefault(__webpack_require__(/*! os */ "os")),commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(u,e){return u(e={exports:{}},e.exports),e.exports}function getCjsExportFromNamespace(u){return u&&u.default||u}var vendors=[{name:"AppVeyor",constant:"APPVEYOR",env:"APPVEYOR",pr:"APPVEYOR_PULL_REQUEST_NUMBER"},{name:"Bamboo",constant:"BAMBOO",env:"bamboo_planKey"},{name:"Bitbucket Pipelines",constant:"BITBUCKET",env:"BITBUCKET_COMMIT"},{name:"Bitrise",constant:"BITRISE",env:"BITRISE_IO",pr:"BITRISE_PULL_REQUEST"},{name:"Buddy",constant:"BUDDY",env:"BUDDY_WORKSPACE_ID",pr:"BUDDY_EXECUTION_PULL_REQUEST_ID"},{name:"Buildkite",constant:"BUILDKITE",env:"BUILDKITE",pr:{env:"BUILDKITE_PULL_REQUEST",ne:"false"}},{name:"CircleCI",constant:"CIRCLE",env:"CIRCLECI",pr:"CIRCLE_PULL_REQUEST"},{name:"Cirrus CI",constant:"CIRRUS",env:"CIRRUS_CI",pr:"CIRRUS_PR"},{name:"AWS CodeBuild",constant:"CODEBUILD",env:"CODEBUILD_BUILD_ARN"},{name:"Codeship",constant:"CODESHIP",env:{CI_NAME:"codeship"}},{name:"Drone",constant:"DRONE",env:"DRONE",pr:{DRONE_BUILD_EVENT:"pull_request"}},{name:"dsari",constant:"DSARI",env:"DSARI"},{name:"GitLab CI",constant:"GITLAB",env:"GITLAB_CI"},{name:"GoCD",constant:"GOCD",env:"GO_PIPELINE_LABEL"},{name:"Hudson",constant:"HUDSON",env:"HUDSON_URL"},{name:"Jenkins",constant:"JENKINS",env:["JENKINS_URL","BUILD_ID"],pr:{any:["ghprbPullId","CHANGE_ID"]}},{name:"Magnum CI",constant:"MAGNUM",env:"MAGNUM"},{name:"Sail CI",constant:"SAIL",env:"SAILCI",pr:"SAIL_PULL_REQUEST_NUMBER"},{name:"Semaphore",constant:"SEMAPHORE",env:"SEMAPHORE",pr:"PULL_REQUEST_NUMBER"},{name:"Shippable",constant:"SHIPPABLE",env:"SHIPPABLE",pr:{IS_PULL_REQUEST:"true"}},{name:"Solano CI",constant:"SOLANO",env:"TDDIUM",pr:"TDDIUM_PR_ID"},{name:"Strider CD",constant:"STRIDER",env:"STRIDER"},{name:"TaskCluster",constant:"TASKCLUSTER",env:["TASK_ID","RUN_ID"]},{name:"Solano CI",constant:"TDDIUM",env:"TDDIUM",pr:"TDDIUM_PR_ID",deprecated:!0},{name:"TeamCity",constant:"TEAMCITY",env:"TEAMCITY_VERSION"},{name:"Team Foundation Server",constant:"TFS",env:"TF_BUILD"},{name:"Travis CI",constant:"TRAVIS",env:"TRAVIS",pr:{env:"TRAVIS_PULL_REQUEST",ne:"false"}}],vendors$1=Object.freeze({default:vendors}),vendors$2=getCjsExportFromNamespace(vendors$1),ciInfo=createCommonjsModule(function(u,e){var D=process.env;function t(u){return"string"==typeof u?!!D[u]:Object.keys(u).every(function(e){return D[e]===u[e]})}Object.defineProperty(e,"_vendors",{value:vendors$2.map(function(u){return u.constant})}),e.name=null,e.isPR=null,vendors$2.forEach(function(u){var r=(Array.isArray(u.env)?u.env:[u.env]).every(function(u){return t(u)});if(e[u.constant]=r,r)switch(e.name=u.name,typeof u.pr){case"string":e.isPR=!!D[u.pr];break;case"object":"env"in u.pr?e.isPR=u.pr.env in D&&D[u.pr.env]!==u.pr.ne:"any"in u.pr?e.isPR=u.pr.any.some(function(u){return!!D[u]}):e.isPR=t(u.pr);break;default:e.isPR=null}}),e.isCI=!!(D.CI||D.CONTINUOUS_INTEGRATION||D.BUILD_NUMBER||D.RUN_ID||e.name)}),ciInfo_1=ciInfo.name,ciInfo_2=ciInfo.isPR,ciInfo_3=ciInfo.isCI,isCI=!1,debug=!1,tty=!1,nodeENV="development",browser="undefined"!=typeof window,platform="",minimal=!1;function toBoolean(u){return!(!u||"false"===u)}"undefined"!=typeof process&&(process.platform&&(platform=String(process.platform)),process.stdout&&(tty=toBoolean(process.stdout.isTTY)),isCI=Boolean(ciInfo.isCI),process.env&&( true&&(nodeENV="development"),debug=toBoolean(process.env.DEBUG),minimal=toBoolean(process.env.MINIMAL)));var env={browser:browser,test:"test"===nodeENV,dev:"development"===nodeENV||"dev"===nodeENV,production:"production"===nodeENV,debug:debug,ci:isCI,tty:tty,minimal:void 0,minimalCLI:void 0,windows:/^win/i.test(platform),darwin:/^darwin/i.test(platform),linux:/^linux/i.test(platform)};env.minimal=minimal||env.ci||env.test||!env.tty,env.minimalCLI=env.minimal;var stdEnv=Object.freeze(env),Types={fatal:{level:0},error:{level:0},warn:{level:1},log:{level:2},info:{level:3},success:{level:3},debug:{level:4},trace:{level:5},silent:{level:1/0},ready:{level:3},start:{level:3}};function isPlainObject(u){return"[object Object]"===Object.prototype.toString.call(u)}function isLogObj(u){return!!isPlainObject(u)&&(!(!u.message&&!u.args)&&!u.stack)}let paused=!1;const queue=[];class Consola{constructor(u={}){this._reporters=u.reporters||[],this._types=u.types||Types,this._level=null!=u.level?u.level:3,this._defaults=u.defaults||{},this._async=void 0!==u.async?u.async:null,this._stdout=u.stdout,this._stderr=u.stdout,this._mockFn=u.mockFn;for(const u in this._types)this[u]=this._wrapLogFn(Object.assign({type:u},this._types[u],this._defaults));this._mockFn&&this.mockTypes()}get level(){return this._level}set level(u){let e=0,D=0;for(const u in this._types){const t=this._types[u];t.level>D?D=t.level:t.level<e&&(e=t.level)}this._level=Math.min(D,Math.max(e,u))}get stdout(){return this._stdout||console._stdout}get stderr(){return this._stderr||console._stderr}create(u){return new Consola(Object.assign({reporters:this._reporters,level:this._level,types:this._types,defaults:this._defaults,stdout:this._stdout,stderr:this._stderr,mockFn:this._mockFn},u))}withDefaults(u){return this.create({defaults:Object.assign({},this._defaults,u)})}withTag(u){return this.withDefaults({tag:this._defaults.tag?this._defaults.tag+":"+u:u})}addReporter(u){return this._reporters.push(u),this}removeReporter(u){if(u){const e=this._reporters.indexOf(u);if(e>=0)return this._reporters.splice(e,1)}else this._reporters.splice(0);return this}setReporters(u){return this._reporters=Array.isArray(u)?u:[u],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(const u in this._types)console["__"+u]||(console["__"+u]=console[u]),console[u]=this[u]}restoreConsole(){for(const u in this._types)console["__"+u]&&(console[u]=console["__"+u],delete console["__"+u])}wrapStd(){this._wrapStream(this.stdout,"log"),this._wrapStream(this.stderr,"log")}_wrapStream(u,e){u&&(u.__write||(u.__write=u.write),u.write=(u=>{this[e](String(u).trim())}))}restoreStd(){this._restoreStream(this.stdout),this._restoreStream(this.stderr)}_restoreStream(u){u&&u.__write&&(u.write=u.__write,delete u.__write)}pauseLogs(){paused=!0}resumeLogs(){paused=!1;const u=queue.splice(0);for(const e of u)e[0]._logFn(e[1],e[2])}mockTypes(u){if(this._mockFn=u||this._mockFn,"function"==typeof this._mockFn)for(const u in this._types)this[u]=this._mockFn(u,this._types[u])||this[u]}_wrapLogFn(u){return function(){if(!paused)return this._logFn(u,arguments);queue.push([this,u,arguments])}.bind(this)}_logFn(u,e){if(u.level>this._level)return!!this._async&&Promise.resolve(!1);const D=Object.assign({date:new Date,args:[]},u);if(1===e.length&&isLogObj(e[0])?Object.assign(D,e[0]):D.args=Array.from(e),D.message&&(D.args.unshift(D.message),delete D.message),D.additional&&(Array.isArray(D.additional)||(D.additional=D.additional.split("\n")),D.args.push("\n"+D.additional.join("\n")),delete D.additional),this._async)return this._logAsync(D);this._log(D)}_log(u){for(const e of this._reporters)e.log(u,{async:!1,stdout:this.stdout,stderr:this.stderr})}_logAsync(u){return Promise.all(this._reporters.map(e=>e.log(u,{async:!0,stdout:this.stdout,stderr:this.stderr})))}}function parseStack(u){const e=process.cwd()+path.sep;return u.split("\n").splice(1).map(u=>u.trim().replace("file://","").replace(e,""))}function writeStream(u,e,D="default"){const t=e.__write||e.write;switch(D){case"async":return new Promise(D=>{!0===t.call(e,u)?D():e.once("drain",()=>{D()})});case"sync":return fs.writeSync(e.fd,u);default:return t.call(e,u)}}Consola.prototype.add=Consola.prototype.addReporter,Consola.prototype.remove=Consola.prototype.removeReporter,Consola.prototype.clear=Consola.prototype.removeReporter,Consola.prototype.withScope=Consola.prototype.withTag,Consola.prototype.mock=Consola.prototype.mockTypes,Consola.prototype.pause=Consola.prototype.pauseLogs,Consola.prototype.resume=Consola.prototype.resumeLogs;var dayjs_min=createCommonjsModule(function(u,e){u.exports=function(){var u="millisecond",e="second",D="minute",t="hour",r="day",n="week",o="month",s="quarter",a="year",i=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(u,e,D){var t=String(u);return!t||t.length>=e?u:""+Array(e+1-t.length).join(D)+u},h={s:c,z:function(u){var e=-u.utcOffset(),D=Math.abs(e),t=Math.floor(D/60),r=D%60;return(e<=0?"+":"-")+c(t,2,"0")+":"+c(r,2,"0")},m:function(u,e){var D=12*(e.year()-u.year())+(e.month()-u.month()),t=u.clone().add(D,o),r=e-t<0,n=u.clone().add(D+(r?-1:1),o);return Number(-(D+(e-t)/(r?t-n:n-t))||0)},a:function(u){return u<0?Math.ceil(u)||0:Math.floor(u)},p:function(i){return{M:o,y:a,w:n,d:r,h:t,m:D,s:e,ms:u,Q:s}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(u){return void 0===u}},C={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},F="en",p={};p[F]=C;var f=function(u){return u instanceof m},E=function(u,e,D){var t;if(!u)return null;if("string"==typeof u)p[u]&&(t=u),e&&(p[u]=e,t=u);else{var r=u.name;p[r]=u,t=r}return D||(F=t),t},d=function(u,e,D){if(f(u))return u.clone();var t=e?"string"==typeof e?{format:e,pl:D}:e:{};return t.date=u,new m(t)},g=h;g.l=E,g.i=f,g.w=function(u,e){return d(u,{locale:e.$L,utc:e.$u})};var m=function(){function c(u){this.$L=this.$L||E(u.locale,null,!0)||F,this.parse(u)}var h=c.prototype;return h.parse=function(u){this.$d=function(u){var e=u.date,D=u.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var t=e.match(i);if(t)return D?new Date(Date.UTC(t[1],t[2]-1,t[3]||1,t[4]||0,t[5]||0,t[6]||0,t[7]||0)):new Date(t[1],t[2]-1,t[3]||1,t[4]||0,t[5]||0,t[6]||0,t[7]||0)}return new Date(e)}(u),this.init()},h.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(u,e){var D=d(u);return this.startOf(e)<=D&&D<=this.endOf(e)},h.isAfter=function(u,e){return d(u)<this.startOf(e)},h.isBefore=function(u,e){return this.endOf(e)<d(u)},h.$g=function(u,e,D){return g.u(u)?this[e]:this.set(D,u)},h.year=function(u){return this.$g(u,"$y",a)},h.month=function(u){return this.$g(u,"$M",o)},h.day=function(u){return this.$g(u,"$W",r)},h.date=function(u){return this.$g(u,"$D","date")},h.hour=function(u){return this.$g(u,"$H",t)},h.minute=function(u){return this.$g(u,"$m",D)},h.second=function(u){return this.$g(u,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",u)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(u,s){var i=this,l=!!g.u(s)||s,c=g.p(u),h=function(u,e){var D=g.w(i.$u?Date.UTC(i.$y,e,u):new Date(i.$y,e,u),i);return l?D:D.endOf(r)},C=function(u,e){return g.w(i.toDate()[u].apply(i.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},F=this.$W,p=this.$M,f=this.$D,E="set"+(this.$u?"UTC":"");switch(c){case a:return l?h(1,0):h(31,11);case o:return l?h(1,p):h(0,p+1);case n:var d=this.$locale().weekStart||0,m=(F<d?F+7:F)-d;return h(l?f-m:f+(6-m),p);case r:case"date":return C(E+"Hours",0);case t:return C(E+"Minutes",1);case D:return C(E+"Seconds",2);case e:return C(E+"Milliseconds",3);default:return this.clone()}},h.endOf=function(u){return this.startOf(u,!1)},h.$set=function(n,s){var i,l=g.p(n),c="set"+(this.$u?"UTC":""),h=(i={},i[r]=c+"Date",i.date=c+"Date",i[o]=c+"Month",i[a]=c+"FullYear",i[t]=c+"Hours",i[D]=c+"Minutes",i[e]=c+"Seconds",i[u]=c+"Milliseconds",i)[l],C=l===r?this.$D+(s-this.$W):s;if(l===o||l===a){var F=this.clone().set("date",1);F.$d[h](C),F.init(),this.$d=F.set("date",Math.min(this.$D,F.daysInMonth())).toDate()}else h&&this.$d[h](C);return this.init(),this},h.set=function(u,e){return this.clone().$set(u,e)},h.get=function(u){return this[g.p(u)]()},h.add=function(u,s){var i,l=this;u=Number(u);var c=g.p(s),h=function(e){var D=d(l);return g.w(D.date(D.date()+Math.round(e*u)),l)};if(c===o)return this.set(o,this.$M+u);if(c===a)return this.set(a,this.$y+u);if(c===r)return h(1);if(c===n)return h(7);var C=(i={},i[D]=6e4,i[t]=36e5,i[e]=1e3,i)[c]||1,F=this.valueOf()+u*C;return g.w(F,this)},h.subtract=function(u,e){return this.add(-1*u,e)},h.format=function(u){var e=this;if(!this.isValid())return"Invalid Date";var D=u||"YYYY-MM-DDTHH:mm:ssZ",t=g.z(this),r=this.$locale(),n=this.$H,o=this.$m,s=this.$M,a=r.weekdays,i=r.months,c=function(u,t,r,n){return u&&(u[t]||u(e,D))||r[t].substr(0,n)},h=function(u){return g.s(n%12||12,u,"0")},C=r.meridiem||function(u,e,D){var t=u<12?"AM":"PM";return D?t.toLowerCase():t},F={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:g.s(s+1,2,"0"),MMM:c(r.monthsShort,s,i,3),MMMM:i[s]||i(this,D),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,a,2),ddd:c(r.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(n),HH:g.s(n,2,"0"),h:h(1),hh:h(2),a:C(n,o,!0),A:C(n,o,!1),m:String(o),mm:g.s(o,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:t};return D.replace(l,function(u,e){return e||F[u]||t.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(u,i,l){var c,h=g.p(i),C=d(u),F=6e4*(C.utcOffset()-this.utcOffset()),p=this-C,f=g.m(this,C);return f=(c={},c[a]=f/12,c[o]=f,c[s]=f/3,c[n]=(p-F)/6048e5,c[r]=(p-F)/864e5,c[t]=p/36e5,c[D]=p/6e4,c[e]=p/1e3,c)[h]||p,l?f:g.a(f)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return p[this.$L]},h.locale=function(u,e){if(!u)return this.$L;var D=this.clone();return D.$L=E(u,e,!0),D},h.clone=function(){return g.w(this.toDate(),this)},h.toDate=function(){return new Date(this.$d)},h.toJSON=function(){return this.toISOString()},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},c}();return d.prototype=m.prototype,d.extend=function(u,e){return u(e,m,d),d},d.locale=E,d.isDayjs=f,d.unix=function(u){return d(1e3*u)},d.en=p[F],d.Ls=p,d}()});function formatDate(u,e){return dayjs_min(e).format(u)}const DEFAULTS={dateFormat:"HH:mm:ss",formatOptions:{colors:!1,compact:!0}},bracket=u=>u?`[${u}]`:"";class BasicReporter{constructor(u){this.options=Object.assign({},DEFAULTS,u)}formatStack(u){return"  "+parseStack(u).join("\n  ")}formatArgs(u){const e=u.map(u=>u&&"string"==typeof u.stack?u.message+"\n"+this.formatStack(u.stack):u);return"function"==typeof util.formatWithOptions?util.formatWithOptions(this.options.formatOptions,...e):util.format(...e)}formatDate(u){return formatDate(this.options.dateFormat,u)}filterAndJoin(u){return u.filter(u=>u).join(" ")}formatLogObj(u){const e=this.formatArgs(u.args),D=this.formatDate(u.date),t=u.type.toUpperCase();return this.filterAndJoin([bracket(D),bracket(u.tag),bracket(t),e])}log(u,{async:e,stdout:D,stderr:t}={}){return writeStream(this.formatLogObj(u,{width:D.columns?D.columns-1:80})+"\n",u.level<2?t:D,e?"async":"default")}}const TYPE_COLOR_MAP={info:"cyan"},LEVEL_COLOR_MAP={0:"red",1:"yellow",2:"white",3:"green"};var ansiRegex=u=>{u=Object.assign({onlyFirst:!1},u);const e=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(e,u.onlyFirst?void 0:"g")};const stripAnsi=u=>"string"==typeof u?u.replace(ansiRegex(),""):u;var stripAnsi_1=stripAnsi,default_1=stripAnsi;stripAnsi_1.default=default_1;const isFullwidthCodePoint=u=>!Number.isNaN(u)&&(u>=4352&&(u<=4447||9001===u||9002===u||11904<=u&&u<=12871&&12351!==u||12880<=u&&u<=19903||19968<=u&&u<=42182||43360<=u&&u<=43388||44032<=u&&u<=55203||63744<=u&&u<=64255||65040<=u&&u<=65049||65072<=u&&u<=65131||65281<=u&&u<=65376||65504<=u&&u<=65510||110592<=u&&u<=110593||127488<=u&&u<=127569||131072<=u&&u<=262141));var isFullwidthCodePoint_1=isFullwidthCodePoint,default_1$1=isFullwidthCodePoint;isFullwidthCodePoint_1.default=default_1$1;var emojiRegex=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g};const stringWidth=u=>{if("string"!=typeof(u=u.replace(emojiRegex(),"  "))||0===u.length)return 0;u=stripAnsi_1(u);let e=0;for(let D=0;D<u.length;D++){const t=u.codePointAt(D);t<=31||t>=127&&t<=159||(t>=768&&t<=879||(t>65535&&D++,e+=isFullwidthCodePoint_1(t)?2:1))}return e};var stringWidth_1=stringWidth,default_1$2=stringWidth;stringWidth_1.default=default_1$2;var matchOperatorsRe=/[|\\{}()[\]^$+*?.]/g,escapeStringRegexp=function(u){if("string"!=typeof u)throw new TypeError("Expected a string");return u.replace(matchOperatorsRe,"\\$&")};const{platform:platform$1}=process,main={tick:"✔",cross:"✖",star:"★",square:"▇",squareSmall:"◻",squareSmallFilled:"◼",play:"▶",circle:"◯",circleFilled:"◉",circleDotted:"◌",circleDouble:"◎",circleCircle:"ⓞ",circleCross:"ⓧ",circlePipe:"Ⓘ",circleQuestionMark:"?⃝",bullet:"●",dot:"․",line:"─",ellipsis:"…",pointer:"❯",pointerSmall:"›",info:"ℹ",warning:"⚠",hamburger:"☰",smiley:"㋡",mustache:"෴",heart:"♥",arrowUp:"↑",arrowDown:"↓",arrowLeft:"←",arrowRight:"→",radioOn:"◉",radioOff:"◯",checkboxOn:"☒",checkboxOff:"☐",checkboxCircleOn:"ⓧ",checkboxCircleOff:"Ⓘ",questionMarkPrefix:"?⃝",oneHalf:"½",oneThird:"⅓",oneQuarter:"¼",oneFifth:"⅕",oneSixth:"⅙",oneSeventh:"⅐",oneEighth:"⅛",oneNinth:"⅑",oneTenth:"⅒",twoThirds:"⅔",twoFifths:"⅖",threeQuarters:"¾",threeFifths:"⅗",threeEighths:"⅜",fourFifths:"⅘",fiveSixths:"⅚",fiveEighths:"⅝",sevenEighths:"⅞"},windows={tick:"√",cross:"×",star:"*",square:"█",squareSmall:"[ ]",squareSmallFilled:"[█]",play:"►",circle:"( )",circleFilled:"(*)",circleDotted:"( )",circleDouble:"( )",circleCircle:"(○)",circleCross:"(×)",circlePipe:"(│)",circleQuestionMark:"(?)",bullet:"*",dot:".",line:"─",ellipsis:"...",pointer:">",pointerSmall:"»",info:"i",warning:"‼",hamburger:"≡",smiley:"☺",mustache:"┌─┐",heart:main.heart,arrowUp:main.arrowUp,arrowDown:main.arrowDown,arrowLeft:main.arrowLeft,arrowRight:main.arrowRight,radioOn:"(*)",radioOff:"( )",checkboxOn:"[×]",checkboxOff:"[ ]",checkboxCircleOn:"(×)",checkboxCircleOff:"( )",questionMarkPrefix:"？",oneHalf:"1/2",oneThird:"1/3",oneQuarter:"1/4",oneFifth:"1/5",oneSixth:"1/6",oneSeventh:"1/7",oneEighth:"1/8",oneNinth:"1/9",oneTenth:"1/10",twoThirds:"2/3",twoFifths:"2/5",threeQuarters:"3/4",threeFifths:"3/5",threeEighths:"3/8",fourFifths:"4/5",fiveSixths:"5/6",fiveEighths:"5/8",sevenEighths:"7/8"};"linux"===platform$1&&(main.questionMarkPrefix="?");const figures="win32"===platform$1?windows:main,fn=u=>{if(figures===main)return u;for(const[e,D]of Object.entries(main))D!==figures[e]&&(u=u.replace(new RegExp(escapeStringRegexp(D),"g"),figures[e]));return u};var figures_1=Object.assign(fn,figures),colorName={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},conversions=createCommonjsModule(function(u){var e={};for(var D in colorName)colorName.hasOwnProperty(D)&&(e[colorName[D]]=D);var t=u.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var r in t)if(t.hasOwnProperty(r)){if(!("channels"in t[r]))throw new Error("missing channels property: "+r);if(!("labels"in t[r]))throw new Error("missing channel labels property: "+r);if(t[r].labels.length!==t[r].channels)throw new Error("channel and label counts mismatch: "+r);var n=t[r].channels,o=t[r].labels;delete t[r].channels,delete t[r].labels,Object.defineProperty(t[r],"channels",{value:n}),Object.defineProperty(t[r],"labels",{value:o})}t.rgb.hsl=function(u){var e,D,t=u[0]/255,r=u[1]/255,n=u[2]/255,o=Math.min(t,r,n),s=Math.max(t,r,n),a=s-o;return s===o?e=0:t===s?e=(r-n)/a:r===s?e=2+(n-t)/a:n===s&&(e=4+(t-r)/a),(e=Math.min(60*e,360))<0&&(e+=360),D=(o+s)/2,[e,100*(s===o?0:D<=.5?a/(s+o):a/(2-s-o)),100*D]},t.rgb.hsv=function(u){var e,D,t,r,n,o=u[0]/255,s=u[1]/255,a=u[2]/255,i=Math.max(o,s,a),l=i-Math.min(o,s,a),c=function(u){return(i-u)/6/l+.5};return 0===l?r=n=0:(n=l/i,e=c(o),D=c(s),t=c(a),o===i?r=t-D:s===i?r=1/3+e-t:a===i&&(r=2/3+D-e),r<0?r+=1:r>1&&(r-=1)),[360*r,100*n,100*i]},t.rgb.hwb=function(u){var e=u[0],D=u[1],r=u[2];return[t.rgb.hsl(u)[0],100*(1/255*Math.min(e,Math.min(D,r))),100*(r=1-1/255*Math.max(e,Math.max(D,r)))]},t.rgb.cmyk=function(u){var e,D=u[0]/255,t=u[1]/255,r=u[2]/255;return[100*((1-D-(e=Math.min(1-D,1-t,1-r)))/(1-e)||0),100*((1-t-e)/(1-e)||0),100*((1-r-e)/(1-e)||0),100*e]},t.rgb.keyword=function(u){var D=e[u];if(D)return D;var t,r,n,o=1/0;for(var s in colorName)if(colorName.hasOwnProperty(s)){var a=colorName[s],i=(r=u,n=a,Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2)+Math.pow(r[2]-n[2],2));i<o&&(o=i,t=s)}return t},t.keyword.rgb=function(u){return colorName[u]},t.rgb.xyz=function(u){var e=u[0]/255,D=u[1]/255,t=u[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(D=D>.04045?Math.pow((D+.055)/1.055,2.4):D/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*e+.7152*D+.0722*t),100*(.0193*e+.1192*D+.9505*t)]},t.rgb.lab=function(u){var e=t.rgb.xyz(u),D=e[0],r=e[1],n=e[2];return r/=100,n/=108.883,D=(D/=95.047)>.008856?Math.pow(D,1/3):7.787*D+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(D-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},t.hsl.rgb=function(u){var e,D,t,r,n,o=u[0]/360,s=u[1]/100,a=u[2]/100;if(0===s)return[n=255*a,n,n];e=2*a-(D=a<.5?a*(1+s):a+s-a*s),r=[0,0,0];for(var i=0;i<3;i++)(t=o+1/3*-(i-1))<0&&t++,t>1&&t--,n=6*t<1?e+6*(D-e)*t:2*t<1?D:3*t<2?e+(D-e)*(2/3-t)*6:e,r[i]=255*n;return r},t.hsl.hsv=function(u){var e=u[0],D=u[1]/100,t=u[2]/100,r=D,n=Math.max(t,.01);return D*=(t*=2)<=1?t:2-t,r*=n<=1?n:2-n,[e,100*(0===t?2*r/(n+r):2*D/(t+D)),100*((t+D)/2)]},t.hsv.rgb=function(u){var e=u[0]/60,D=u[1]/100,t=u[2]/100,r=Math.floor(e)%6,n=e-Math.floor(e),o=255*t*(1-D),s=255*t*(1-D*n),a=255*t*(1-D*(1-n));switch(t*=255,r){case 0:return[t,a,o];case 1:return[s,t,o];case 2:return[o,t,a];case 3:return[o,s,t];case 4:return[a,o,t];case 5:return[t,o,s]}},t.hsv.hsl=function(u){var e,D,t,r=u[0],n=u[1]/100,o=u[2]/100,s=Math.max(o,.01);return t=(2-n)*o,D=n*s,[r,100*(D=(D/=(e=(2-n)*s)<=1?e:2-e)||0),100*(t/=2)]},t.hwb.rgb=function(u){var e,D,t,r,n,o,s,a=u[0]/360,i=u[1]/100,l=u[2]/100,c=i+l;switch(c>1&&(i/=c,l/=c),t=6*a-(e=Math.floor(6*a)),0!=(1&e)&&(t=1-t),r=i+t*((D=1-l)-i),e){default:case 6:case 0:n=D,o=r,s=i;break;case 1:n=r,o=D,s=i;break;case 2:n=i,o=D,s=r;break;case 3:n=i,o=r,s=D;break;case 4:n=r,o=i,s=D;break;case 5:n=D,o=i,s=r}return[255*n,255*o,255*s]},t.cmyk.rgb=function(u){var e=u[0]/100,D=u[1]/100,t=u[2]/100,r=u[3]/100;return[255*(1-Math.min(1,e*(1-r)+r)),255*(1-Math.min(1,D*(1-r)+r)),255*(1-Math.min(1,t*(1-r)+r))]},t.xyz.rgb=function(u){var e,D,t,r=u[0]/100,n=u[1]/100,o=u[2]/100;return D=-.9689*r+1.8758*n+.0415*o,t=.0557*r+-.204*n+1.057*o,e=(e=3.2406*r+-1.5372*n+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,D=D>.0031308?1.055*Math.pow(D,1/2.4)-.055:12.92*D,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(e=Math.min(Math.max(0,e),1)),255*(D=Math.min(Math.max(0,D),1)),255*(t=Math.min(Math.max(0,t),1))]},t.xyz.lab=function(u){var e=u[0],D=u[1],t=u[2];return D/=100,t/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(D=D>.008856?Math.pow(D,1/3):7.787*D+16/116)-16,500*(e-D),200*(D-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},t.lab.xyz=function(u){var e,D,t,r=u[0];e=u[1]/500+(D=(r+16)/116),t=D-u[2]/200;var n=Math.pow(D,3),o=Math.pow(e,3),s=Math.pow(t,3);return D=n>.008856?n:(D-16/116)/7.787,e=o>.008856?o:(e-16/116)/7.787,t=s>.008856?s:(t-16/116)/7.787,[e*=95.047,D*=100,t*=108.883]},t.lab.lch=function(u){var e,D=u[0],t=u[1],r=u[2];return(e=360*Math.atan2(r,t)/2/Math.PI)<0&&(e+=360),[D,Math.sqrt(t*t+r*r),e]},t.lch.lab=function(u){var e,D=u[0],t=u[1];return e=u[2]/360*2*Math.PI,[D,t*Math.cos(e),t*Math.sin(e)]},t.rgb.ansi16=function(u){var e=u[0],D=u[1],r=u[2],n=1 in arguments?arguments[1]:t.rgb.hsv(u)[2];if(0===(n=Math.round(n/50)))return 30;var o=30+(Math.round(r/255)<<2|Math.round(D/255)<<1|Math.round(e/255));return 2===n&&(o+=60),o},t.hsv.ansi16=function(u){return t.rgb.ansi16(t.hsv.rgb(u),u[2])},t.rgb.ansi256=function(u){var e=u[0],D=u[1],t=u[2];return e===D&&D===t?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(D/255*5)+Math.round(t/255*5)},t.ansi16.rgb=function(u){var e=u%10;if(0===e||7===e)return u>50&&(e+=3.5),[e=e/10.5*255,e,e];var D=.5*(1+~~(u>50));return[(1&e)*D*255,(e>>1&1)*D*255,(e>>2&1)*D*255]},t.ansi256.rgb=function(u){if(u>=232){var e=10*(u-232)+8;return[e,e,e]}var D;return u-=16,[Math.floor(u/36)/5*255,Math.floor((D=u%36)/6)/5*255,D%6/5*255]},t.rgb.hex=function(u){var e=(((255&Math.round(u[0]))<<16)+((255&Math.round(u[1]))<<8)+(255&Math.round(u[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},t.hex.rgb=function(u){var e=u.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var D=e[0];3===e[0].length&&(D=D.split("").map(function(u){return u+u}).join(""));var t=parseInt(D,16);return[t>>16&255,t>>8&255,255&t]},t.rgb.hcg=function(u){var e,D=u[0]/255,t=u[1]/255,r=u[2]/255,n=Math.max(Math.max(D,t),r),o=Math.min(Math.min(D,t),r),s=n-o;return e=s<=0?0:n===D?(t-r)/s%6:n===t?2+(r-D)/s:4+(D-t)/s+4,e/=6,[360*(e%=1),100*s,100*(s<1?o/(1-s):0)]},t.hsl.hcg=function(u){var e=u[1]/100,D=u[2]/100,t=1,r=0;return(t=D<.5?2*e*D:2*e*(1-D))<1&&(r=(D-.5*t)/(1-t)),[u[0],100*t,100*r]},t.hsv.hcg=function(u){var e=u[1]/100,D=u[2]/100,t=e*D,r=0;return t<1&&(r=(D-t)/(1-t)),[u[0],100*t,100*r]},t.hcg.rgb=function(u){var e=u[0]/360,D=u[1]/100,t=u[2]/100;if(0===D)return[255*t,255*t,255*t];var r,n=[0,0,0],o=e%1*6,s=o%1,a=1-s;switch(Math.floor(o)){case 0:n[0]=1,n[1]=s,n[2]=0;break;case 1:n[0]=a,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=s;break;case 3:n[0]=0,n[1]=a,n[2]=1;break;case 4:n[0]=s,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=a}return r=(1-D)*t,[255*(D*n[0]+r),255*(D*n[1]+r),255*(D*n[2]+r)]},t.hcg.hsv=function(u){var e=u[1]/100,D=e+u[2]/100*(1-e),t=0;return D>0&&(t=e/D),[u[0],100*t,100*D]},t.hcg.hsl=function(u){var e=u[1]/100,D=u[2]/100*(1-e)+.5*e,t=0;return D>0&&D<.5?t=e/(2*D):D>=.5&&D<1&&(t=e/(2*(1-D))),[u[0],100*t,100*D]},t.hcg.hwb=function(u){var e=u[1]/100,D=e+u[2]/100*(1-e);return[u[0],100*(D-e),100*(1-D)]},t.hwb.hcg=function(u){var e=u[1]/100,D=1-u[2]/100,t=D-e,r=0;return t<1&&(r=(D-t)/(1-t)),[u[0],100*t,100*r]},t.apple.rgb=function(u){return[u[0]/65535*255,u[1]/65535*255,u[2]/65535*255]},t.rgb.apple=function(u){return[u[0]/255*65535,u[1]/255*65535,u[2]/255*65535]},t.gray.rgb=function(u){return[u[0]/100*255,u[0]/100*255,u[0]/100*255]},t.gray.hsl=t.gray.hsv=function(u){return[0,0,u[0]]},t.gray.hwb=function(u){return[0,100,u[0]]},t.gray.cmyk=function(u){return[0,0,0,u[0]]},t.gray.lab=function(u){return[u[0],0,0]},t.gray.hex=function(u){var e=255&Math.round(u[0]/100*255),D=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(D.length)+D},t.rgb.gray=function(u){return[(u[0]+u[1]+u[2])/3/255*100]}}),conversions_1=conversions.rgb,conversions_2=conversions.hsl,conversions_3=conversions.hsv,conversions_4=conversions.hwb,conversions_5=conversions.cmyk,conversions_6=conversions.xyz,conversions_7=conversions.lab,conversions_8=conversions.lch,conversions_9=conversions.hex,conversions_10=conversions.keyword,conversions_11=conversions.ansi16,conversions_12=conversions.ansi256,conversions_13=conversions.hcg,conversions_14=conversions.apple,conversions_15=conversions.gray;function buildGraph(){for(var u={},e=Object.keys(conversions),D=e.length,t=0;t<D;t++)u[e[t]]={distance:-1,parent:null};return u}function deriveBFS(u){var e=buildGraph(),D=[u];for(e[u].distance=0;D.length;)for(var t=D.pop(),r=Object.keys(conversions[t]),n=r.length,o=0;o<n;o++){var s=r[o],a=e[s];-1===a.distance&&(a.distance=e[t].distance+1,a.parent=t,D.unshift(s))}return e}function link(u,e){return function(D){return e(u(D))}}function wrapConversion(u,e){for(var D=[e[u].parent,u],t=conversions[e[u].parent][u],r=e[u].parent;e[r].parent;)D.unshift(e[r].parent),t=link(conversions[e[r].parent][r],t),r=e[r].parent;return t.conversion=D,t}var route=function(u){for(var e=deriveBFS(u),D={},t=Object.keys(e),r=t.length,n=0;n<r;n++){var o=t[n];null!==e[o].parent&&(D[o]=wrapConversion(o,e))}return D},convert={},models=Object.keys(conversions);function wrapRaw(u){var e=function(e){return null==e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),u(e))};return"conversion"in u&&(e.conversion=u.conversion),e}function wrapRounded(u){var e=function(e){if(null==e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var D=u(e);if("object"==typeof D)for(var t=D.length,r=0;r<t;r++)D[r]=Math.round(D[r]);return D};return"conversion"in u&&(e.conversion=u.conversion),e}models.forEach(function(u){convert[u]={},Object.defineProperty(convert[u],"channels",{value:conversions[u].channels}),Object.defineProperty(convert[u],"labels",{value:conversions[u].labels});var e=route(u);Object.keys(e).forEach(function(D){var t=e[D];convert[u][D]=wrapRounded(t),convert[u][D].raw=wrapRaw(t)})});var colorConvert=convert,ansiStyles=createCommonjsModule(function(u){const e=(u,e)=>(function(){return`[${u.apply(colorConvert,arguments)+e}m`}),D=(u,e)=>(function(){const D=u.apply(colorConvert,arguments);return`[${38+e};5;${D}m`}),t=(u,e)=>(function(){const D=u.apply(colorConvert,arguments);return`[${38+e};2;${D[0]};${D[1]};${D[2]}m`});Object.defineProperty(u,"exports",{enumerable:!0,get:function(){const u=new Map,r={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};r.color.grey=r.color.gray;for(const e of Object.keys(r)){const D=r[e];for(const e of Object.keys(D)){const t=D[e];r[e]={open:`[${t[0]}m`,close:`[${t[1]}m`},D[e]=r[e],u.set(t[0],t[1])}Object.defineProperty(r,e,{value:D,enumerable:!1}),Object.defineProperty(r,"codes",{value:u,enumerable:!1})}const n=u=>u,o=(u,e,D)=>[u,e,D];r.color.close="[39m",r.bgColor.close="[49m",r.color.ansi={ansi:e(n,0)},r.color.ansi256={ansi256:D(n,0)},r.color.ansi16m={rgb:t(o,0)},r.bgColor.ansi={ansi:e(n,10)},r.bgColor.ansi256={ansi256:D(n,10)},r.bgColor.ansi16m={rgb:t(o,10)};for(let u of Object.keys(colorConvert)){if("object"!=typeof colorConvert[u])continue;const n=colorConvert[u];"ansi16"===u&&(u="ansi"),"ansi16"in n&&(r.color.ansi[u]=e(n.ansi16,0),r.bgColor.ansi[u]=e(n.ansi16,10)),"ansi256"in n&&(r.color.ansi256[u]=D(n.ansi256,0),r.bgColor.ansi256[u]=D(n.ansi256,10)),"rgb"in n&&(r.color.ansi16m[u]=t(n.rgb,0),r.bgColor.ansi16m[u]=t(n.rgb,10))}return r}})}),hasFlag=(u,e)=>{e=e||process.argv;const D=u.startsWith("-")?"":1===u.length?"-":"--",t=e.indexOf(D+u),r=e.indexOf("--");return-1!==t&&(-1===r||t<r)};const env$1=process.env;let forceColor;function translateLevel(u){return 0!==u&&{level:u,hasBasic:!0,has256:u>=2,has16m:u>=3}}function supportsColor(u){if(!1===forceColor)return 0;if(hasFlag("color=16m")||hasFlag("color=full")||hasFlag("color=truecolor"))return 3;if(hasFlag("color=256"))return 2;if(u&&!u.isTTY&&!0!==forceColor)return 0;const e=forceColor?1:0;if("win32"===process.platform){const u=os.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(u[0])>=10&&Number(u[2])>=10586?Number(u[2])>=14931?3:2:1}if("CI"in env$1)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(u=>u in env$1)||"codeship"===env$1.CI_NAME?1:e;if("TEAMCITY_VERSION"in env$1)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env$1.TEAMCITY_VERSION)?1:0;if("truecolor"===env$1.COLORTERM)return 3;if("TERM_PROGRAM"in env$1){const u=parseInt((env$1.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(env$1.TERM_PROGRAM){case"iTerm.app":return u>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(env$1.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env$1.TERM)?1:"COLORTERM"in env$1?1:(env$1.TERM,e)}function getSupportLevel(u){return translateLevel(supportsColor(u))}hasFlag("no-color")||hasFlag("no-colors")||hasFlag("color=false")?forceColor=!1:(hasFlag("color")||hasFlag("colors")||hasFlag("color=true")||hasFlag("color=always"))&&(forceColor=!0),"FORCE_COLOR"in env$1&&(forceColor=0===env$1.FORCE_COLOR.length||0!==parseInt(env$1.FORCE_COLOR,10));var supportsColor_1={supportsColor:getSupportLevel,stdout:getSupportLevel(process.stdout),stderr:getSupportLevel(process.stderr)};const TEMPLATE_REGEX=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,STYLE_REGEX=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,STRING_REGEX=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,ESCAPE_REGEX=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,ESCAPES=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function unescape(u){return"u"===u[0]&&5===u.length||"x"===u[0]&&3===u.length?String.fromCharCode(parseInt(u.slice(1),16)):ESCAPES.get(u)||u}function parseArguments(u,e){const D=[],t=e.trim().split(/\s*,\s*/g);let r;for(const e of t)if(isNaN(e)){if(!(r=e.match(STRING_REGEX)))throw new Error(`Invalid Chalk template style argument: ${e} (in style '${u}')`);D.push(r[2].replace(ESCAPE_REGEX,(u,e,D)=>e?unescape(e):D))}else D.push(Number(e));return D}function parseStyle(u){STYLE_REGEX.lastIndex=0;const e=[];let D;for(;null!==(D=STYLE_REGEX.exec(u));){const u=D[1];if(D[2]){const t=parseArguments(u,D[2]);e.push([u].concat(t))}else e.push([u])}return e}function buildStyle(u,e){const D={};for(const u of e)for(const e of u.styles)D[e[0]]=u.inverse?null:e.slice(1);let t=u;for(const u of Object.keys(D))if(Array.isArray(D[u])){if(!(u in t))throw new Error(`Unknown Chalk style: ${u}`);t=D[u].length>0?t[u].apply(t,D[u]):t[u]}return t}var templates=(u,e)=>{const D=[],t=[];let r=[];if(e.replace(TEMPLATE_REGEX,(e,n,o,s,a,i)=>{if(n)r.push(unescape(n));else if(s){const e=r.join("");r=[],t.push(0===D.length?e:buildStyle(u,D)(e)),D.push({inverse:o,styles:parseStyle(s)})}else if(a){if(0===D.length)throw new Error("Found extraneous } in Chalk template literal");t.push(buildStyle(u,D)(r.join(""))),r=[],D.pop()}else r.push(i)}),t.push(r.join("")),D.length>0){const u=`Chalk template literal is missing ${D.length} closing bracket${1===D.length?"":"s"} (\`}\`)`;throw new Error(u)}return t.join("")},chalk=createCommonjsModule(function(u){const e=supportsColor_1.stdout,D="win32"===process.platform&&!(process.env.TERM||"").toLowerCase().startsWith("xterm"),t=["ansi","ansi","ansi256","ansi16m"],r=new Set(["gray"]),n=Object.create(null);function o(u,D){D=D||{};const t=e?e.level:0;u.level=void 0===D.level?t:D.level,u.enabled="enabled"in D?D.enabled:u.level>0}function s(u){if(!this||!(this instanceof s)||this.template){const e={};return o(e,u),e.template=function(){const u=[].slice.call(arguments);return function(u,e){if(!Array.isArray(e))return[].slice.call(arguments,1).join(" ");const D=[].slice.call(arguments,2),t=[e.raw[0]];for(let u=1;u<e.length;u++)t.push(String(D[u-1]).replace(/[{}\\]/g,"\\$&")),t.push(String(e.raw[u]));return templates(u,t.join(""))}.apply(null,[e.template].concat(u))},Object.setPrototypeOf(e,s.prototype),Object.setPrototypeOf(e.template,e),e.template.constructor=s,e.template}o(this,u)}D&&(ansiStyles.blue.open="[94m");for(const u of Object.keys(ansiStyles))ansiStyles[u].closeRe=new RegExp(escapeStringRegexp(ansiStyles[u].close),"g"),n[u]={get(){const e=ansiStyles[u];return i.call(this,this._styles?this._styles.concat(e):[e],this._empty,u)}};n.visible={get(){return i.call(this,this._styles||[],!0,"visible")}},ansiStyles.color.closeRe=new RegExp(escapeStringRegexp(ansiStyles.color.close),"g");for(const u of Object.keys(ansiStyles.color.ansi))r.has(u)||(n[u]={get(){const e=this.level;return function(){const D={open:ansiStyles.color[t[e]][u].apply(null,arguments),close:ansiStyles.color.close,closeRe:ansiStyles.color.closeRe};return i.call(this,this._styles?this._styles.concat(D):[D],this._empty,u)}}});ansiStyles.bgColor.closeRe=new RegExp(escapeStringRegexp(ansiStyles.bgColor.close),"g");for(const u of Object.keys(ansiStyles.bgColor.ansi)){if(r.has(u))continue;n["bg"+u[0].toUpperCase()+u.slice(1)]={get(){const e=this.level;return function(){const D={open:ansiStyles.bgColor[t[e]][u].apply(null,arguments),close:ansiStyles.bgColor.close,closeRe:ansiStyles.bgColor.closeRe};return i.call(this,this._styles?this._styles.concat(D):[D],this._empty,u)}}}}const a=Object.defineProperties(()=>{},n);function i(u,e,t){const r=function(){return function(){const u=arguments,e=u.length;let t=String(arguments[0]);if(0===e)return"";if(e>1)for(let D=1;D<e;D++)t+=" "+u[D];if(!this.enabled||this.level<=0||!t)return this._empty?"":t;const r=ansiStyles.dim.open;D&&this.hasGrey&&(ansiStyles.dim.open="");for(const u of this._styles.slice().reverse())t=(t=u.open+t.replace(u.closeRe,u.open)+u.close).replace(/\r?\n/g,`${u.close}$&${u.open}`);return ansiStyles.dim.open=r,t}.apply(r,arguments)};r._styles=u,r._empty=e;const n=this;return Object.defineProperty(r,"level",{enumerable:!0,get:()=>n.level,set(u){n.level=u}}),Object.defineProperty(r,"enabled",{enumerable:!0,get:()=>n.enabled,set(u){n.enabled=u}}),r.hasGrey=this.hasGrey||"gray"===t||"grey"===t,r.__proto__=a,r}Object.defineProperties(s.prototype,n),u.exports=s(),u.exports.supportsColor=e,u.exports.default=u.exports}),chalk_1=chalk.supportsColor;const _colorCache={};function chalkColor(u){let e=_colorCache[u];return e||(e="#"===u[0]?chalk.hex(u):chalk[u]||chalk.keyword(u),_colorCache[u]=e,e)}const _bgColorCache={};function chalkBgColor(u){let e=_bgColorCache[u];return e||(e="#"===u[0]?chalk.bgHex(u):chalk["bg"+u[0].toUpperCase()+u.slice(1)]||chalk.bgKeyword(u),_bgColorCache[u]=e,e)}const DEFAULTS$1={secondaryColor:"grey",formatOptions:{colors:!0,compact:!1}},TYPE_ICONS={info:figures_1("ℹ"),success:figures_1("✔"),debug:figures_1("›"),trace:figures_1("›"),log:""};class FancyReporter extends BasicReporter{constructor(u){super(Object.assign({},DEFAULTS$1,u))}formatStack(u){const e=chalkColor("grey"),D=chalkColor("cyan");return"\n"+parseStack(u).map(u=>"  "+u.replace(/^at +/,u=>e(u)).replace(/\((.+)\)/,(u,e)=>`(${D(e)})`)).join("\n")}formatType(u,e){const D=TYPE_COLOR_MAP[u.type]||LEVEL_COLOR_MAP[u.level]||this.options.secondaryColor;if(e)return chalkBgColor(D).black(` ${u.type.toUpperCase()} `);const t="string"==typeof TYPE_ICONS[u.type]?TYPE_ICONS[u.type]:u.icon||u.type;return t?chalkColor(D)(t):""}formatLogObj(u,{width:e}){const[D,...t]=this.formatArgs(u.args).split("\n"),r=void 0!==u.badge?Boolean(u.badge):u.level<2,n=chalkColor(this.options.secondaryColor),o=n(this.formatDate(u.date)),s=this.formatType(u,r),a=u.tag?n(u.tag):"";let i,l=this.filterAndJoin([s,D]),c=this.filterAndJoin([a,o]);if(e>80){const u=e-stringWidth_1(l)-stringWidth_1(c)-2;i=u>0?l+" ".repeat(u)+c:l}else i=c+" "+l;return i=(i+=t.length?"\n"+t.join("\n"):"").replace(/`([^`]+)`/g,(u,e)=>chalk.cyan(e)),r?"\n"+i+"\n":i}}class JSONReporter{constructor({stream:u}={}){this.stream=u||process.stdout}log(u){this.stream.write(JSON.stringify(u)+"\n")}}const _require="undefined"!=typeof require?require:__webpack_require__("./node_modules/consola/dist sync recursive");class WinstonReporter{constructor(u){if(u&&u.log)this.logger=u;else{const e=_require("winston");this.logger=e.createLogger(Object.assign({level:"info",format:e.format.simple(),transports:[new e.transports.Console]},u))}}log(u){const e=[].concat(u.args),D=e.shift();this.logger.log({level:levels[u.level]||"info",label:u.tag,message:D,args:e,timestamp:u.date.getTime()/1e3})}}const levels={0:"error",1:"warn",2:"info",3:"verbose",4:"debug",5:"silly"};function createConsola(){let u=stdEnv.debug?4:3;process.env.CONSOLA_LEVEL&&(u=parseInt(process.env.CONSOLA_LEVEL)||u);const e=new Consola({level:u,reporters:[stdEnv.ci||stdEnv.test?new BasicReporter:new FancyReporter]});return e.Consola=Consola,e.BasicReporter=BasicReporter,e.FancyReporter=FancyReporter,e.JSONReporter=JSONReporter,e.WinstonReporter=WinstonReporter,e}global.consola||(global.consola=createConsola());var node=global.consola;module.exports=node;


/***/ }),

/***/ "./nuxt.config.js":
/*!************************!*\
  !*** ./nuxt.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pkg = __webpack_require__(/*! ./package */ "./package.json");

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      name: 'robots',
      content: 'noindex, nofollow'
    }, {
      hid: 'description',
      name: 'description',
      content: pkg.description
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~plugins/infinite-scroll.js',
    ssr: false
  }],

  /*
  ** Nuxt.js modules
  */
  modules: [// Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth'],
  // pwa setting
  manifest: {
    name: 'dev to',
    lang: 'ja',
    short_name: 'dev',
    title: 'dev to challenge',
    'og:title': 'dev to challenge',
    description: 'dev to challenge',
    'og:description': 'dev to challenge',
    theme_color: '#000000',
    background_color: '#ffffff'
  },
  workbox: {
    dev: false
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // baseURL: 'https://dev-problem.herokuapp.com/',
    credentials: false,
    browserBaseURL: process.env.BASE_APP_URL || '/'
  },
  // auth relations setting
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/register',
            method: 'post',
            propertyName: 'token'
          }
        }
      },
      github: {
        client_id: '337df7b568e8f74bedf8',
        client_secret: '345e18c6f8372e91241036dcf01ee01525da7109'
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }

  }
};

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, author, private, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"dev","version":"1.0.0","description":"task","author":"Tsumuraya","private":true,"scripts":{"dev":"backpack dev","build":"nuxt build && backpack build","start":"cross-env NODE_ENV=production node build/main.js","heroku-postbuild":"npm run build","generate":"nuxt generate","lint":"eslint --ext .js,.vue --ignore-path .gitignore .","precommit":"npm run lint","test":"jest"},"dependencies":{"@nuxtjs/auth":"^4.5.3","@nuxtjs/axios":"^5.5.2","@nuxtjs/pwa":"^3.0.0-beta.16","backpack-core":"^0.8.3","body-parser":"^1.19.0","cookie-parser":"^1.4.4","cross-env":"^5.2.0","csurf":"^1.10.0","express":"^4.17.1","express-jwt":"^5.3.1","express-session":"^1.16.1","jsonwebtoken":"^8.5.1","marked":"^0.6.2","moment":"^2.24.0","multer":"^1.4.1","mysql":"^2.17.1","node-sass":"^4.12.0","nuxt":"^2.7.1","sass-loader":"^7.1.0","sharp":"^0.22.1","vue-infinite-scroll":"^2.0.2","xss":"^1.0.6"},"devDependencies":{"@nuxtjs/eslint-config":"^0.0.1","@vue/test-utils":"^1.0.0-beta.29","babel-core":"7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-jest":"^24.8.0","eslint":"^5.16.0","eslint-config-standard":">=12.0.0","eslint-loader":"^2.1.2","eslint-plugin-import":">=2.17.3","eslint-plugin-jest":">=22.6.4","eslint-plugin-node":">=9.1.0","eslint-plugin-nuxt":">=0.4.3","eslint-plugin-promise":">=4.1.1","eslint-plugin-standard":">=4.0.0","eslint-plugin-vue":"^5.2.2","jest":"^24.8.0","nodemon":"^1.19.1","vue-jest":"^3.0.4"}};

/***/ }),

/***/ "./server/api/comment.js":
/*!*******************************!*\
  !*** ./server/api/comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ "xss");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mysqlConnect */ "./server/mysqlConnect.js");





const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])(); // commentを追加する処理

router.post('/comment', (req, res, next) => {
  const id = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.article_id);
  const parent = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.parent_id);
  const userId = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.user_id);
  const userName = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.user_name);
  const avatar = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.avatar);
  const userTag = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.user_tag);
  const comment = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.comment);
  const createdAt = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH:mm:ss');
  const postQuery = `INSERT INTO dev_comments (parent_id, article_id, user_id, user_name, user_avatar, user_tag, comment, created_at) VALUES('${parent}', '${id}', '${userId}', '${userName}', '${avatar}', '${userTag}', '${comment}', '${createdAt}')`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(postQuery, function (err, rows) {
    if (err) consola__WEBPACK_IMPORTED_MODULE_1___default.a.ready(err);else res.redirect(req.get('referer'));
  });
}); // commentのデータを取得

router.get('/commentData', (req, res, next) => {
  const favoriteQuery = 'SELECT * FROM dev_comments';
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(favoriteQuery, function (err, rows) {
    const users = rows;

    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      });
    } else {
      res.json(users);
    }
  });
}); // 記事に連動したコメントの取得

router.get('/comment/:id', (req, res, next) => {
  const slugQuery = req.params.id;
  const clientQuery = `SELECT * FROM dev_comments WHERE article_id = "${slugQuery}"`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(clientQuery, function (err, rows) {
    const users = rows;

    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      });
    } else {
      res.json(users);
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/api/cool.js":
/*!****************************!*\
  !*** ./server/api/cool.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ "xss");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mysqlConnect */ "./server/mysqlConnect.js");





const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])(); // いいね機能

router.post('/cool', (req, res, next) => {
  const articleId = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.article);
  const userId = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.user);
  const sendAt = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH:mm:ss');
  const postQuery = `INSERT INTO dev_cools (article_id, user_id, created_at) VALUES('${articleId}', '${userId}', '${sendAt}')`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(postQuery, function (err, rows) {
    if (err) consola__WEBPACK_IMPORTED_MODULE_1___default.a.error(err);else res.redirect(req.get('referer'));
  });
}); // いいね数を取得

router.get('/coolData', (req, res, next) => {
  const favoriteQuery = 'SELECT * FROM dev_cools';
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(favoriteQuery, function (err, rows) {
    const users = rows;

    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      });
    } else {
      res.json(users);
    }
  });
}); // いいねを取り消す

router.post('/coolDelete', (req, res, next) => {
  const getID = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.user);
  const articleID = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.article);
  const deleteQuery = `DELETE FROM dev_cools WHERE user_id = ${getID} AND article_id = ${articleID}`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(deleteQuery, function (err, rows) {
    if (err) consola__WEBPACK_IMPORTED_MODULE_1___default.a.ready(err);else res.redirect(req.get('referer'));
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/api/index.js":
/*!*****************************!*\
  !*** ./server/api/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts */ "./server/api/posts.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./server/api/register.js");
/* harmony import */ var _cool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cool */ "./server/api/cool.js");
/* harmony import */ var _like__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./like */ "./server/api/like.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment */ "./server/api/comment.js");






const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.use(_posts__WEBPACK_IMPORTED_MODULE_1__["default"]);
router.use(_register__WEBPACK_IMPORTED_MODULE_2__["default"]);
router.use(_cool__WEBPACK_IMPORTED_MODULE_3__["default"]);
router.use(_like__WEBPACK_IMPORTED_MODULE_4__["default"]);
router.use(_comment__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/api/like.js":
/*!****************************!*\
  !*** ./server/api/like.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ "xss");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mysqlConnect */ "./server/mysqlConnect.js");





const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])(); // コメントのいいねをする機能

router.post('/like', (req, res, next) => {
  const articleId = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.comment);
  const userId = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.user);
  const sendAt = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH:mm:ss');
  const postQuery = `INSERT INTO dev_likes (comment_id, user_id, created_at) VALUES('${articleId}', '${userId}', '${sendAt}')`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(postQuery, function (err, rows) {
    if (err) consola__WEBPACK_IMPORTED_MODULE_1___default.a.error(err);else res.redirect(req.get('referer'));
  });
}); // いいね数の取得

router.get('/likeData', (req, res, next) => {
  const favoriteQuery = 'SELECT * FROM dev_likes';
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(favoriteQuery, function (err, rows) {
    const users = rows;

    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      });
    } else {
      res.json(users);
    }
  });
}); // いいねの取り消し

router.post('/likeDelete', (req, res, next) => {
  const getID = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.user);
  const articleID = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.comment);
  const deleteQuery = `DELETE FROM dev_likes WHERE user_id = ${getID} AND comment_id = ${articleID}`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(deleteQuery, function (err, rows) {
    if (err) consola__WEBPACK_IMPORTED_MODULE_1___default.a.ready(err);else res.redirect(req.get('referer'));
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/api/posts.js":
/*!*****************************!*\
  !*** ./server/api/posts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xss */ "xss");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! multer */ "multer");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sharp */ "sharp");
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sharp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mysqlConnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mysqlConnect */ "./server/mysqlConnect.js");








const router = Object(express__WEBPACK_IMPORTED_MODULE_1__["Router"])(); // 記事を投稿する機能

router.post('/posts', (req, res, next) => {
  const id = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.id);
  const name = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.name);
  const avatar = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.avatar);
  const usertag = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.usertag);
  const title = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.title);
  const tags = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.tags);
  const content = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.content);
  const cover = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.cover);
  const canonical = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.canonical);
  const series = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.series);
  const postType = xss__WEBPACK_IMPORTED_MODULE_3___default()(req.body.type);
  const createdAt = moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD HH:mm:ss');
  const postQuery = `INSERT INTO dev_posts (user_id, user_name, user_avatar, user_tag, title, tags, content, cover_image, canonical, series, post_status, created_at) VALUES('${id}', '${name}', '${avatar}', '${usertag}', '${title}', '${tags}', '${content}', '${cover}', '${canonical}', '${series}', '${postType}', '${createdAt}')`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_7__["default"].query(postQuery, function (err, rows) {
    if (err) consola__WEBPACK_IMPORTED_MODULE_2___default.a.error(err);else res.redirect(req.get('referer'));
  });
}); // multerでファイルアップロード機能を作成

const clientThumb = multer__WEBPACK_IMPORTED_MODULE_5___default.a.diskStorage({
  // ファイルの保存先を指定
  destination: './static/upload/',
  // ファイル名を指定(オリジナルのファイル名を指定)
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer__WEBPACK_IMPORTED_MODULE_5___default()({
  storage: clientThumb
}); // アップロード後sharpで画像のリサイズをしている

router.post('/fileupload', upload.single('thumbnail'), function (req, res) {
  const filepath = './static' + req.body.fileupload;
  sharp__WEBPACK_IMPORTED_MODULE_6___default()(filepath).resize(1000, 420).toBuffer(function (err, info) {
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile(filepath, info, function (e) {
      if (err) return consola__WEBPACK_IMPORTED_MODULE_2___default.a.error(err);
      res.redirect(req.get('referer'));
    });
  });
});
router.post('/fileupload_body', upload.single('thumbnail'), function (req, res) {
  const filepath = './static' + req.body.fileupload;
  sharp__WEBPACK_IMPORTED_MODULE_6___default()(filepath).resize(680).toBuffer(function (err, info) {
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile(filepath, info, function (e) {
      if (err) return consola__WEBPACK_IMPORTED_MODULE_2___default.a.error(err);
      res.redirect(req.get('referer'));
    });
  });
}); // 画像の削除

router.post('/remove_file', function (req, res) {
  const file = './static' + req.body.filepath;
  fs__WEBPACK_IMPORTED_MODULE_0___default.a.unlink(file, err => {
    if (err) throw err;
    res.redirect(req.get('referer'));
  });
}); // 公開記事の取得

router.get('/get_post', (req, res, next) => {
  const clientQuery = 'SELECT * FROM dev_posts WHERE post_status = "publish" ORDER BY id DESC';
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_7__["default"].query(clientQuery, function (err, rows) {
    const users = rows;

    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      });
    } else {
      res.json(users);
    }
  });
}); // 新規8件を取得

router.get('/get_new_post', (req, res, next) => {
  const clientQuery = 'SELECT * FROM dev_posts WHERE post_status = "publish" ORDER BY id DESC LIMIT 8';
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_7__["default"].query(clientQuery, function (err, rows) {
    const users = rows;

    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      });
    } else {
      res.json(users);
    }
  });
}); // slugに応じた記事の取得、ここはこのままだとエラーになる要因があるので、改善が必要

router.get('/get_article/:slug', (req, res, next) => {
  const title = req.params.slug.replace('-', ' ');
  const clientQuery = `SELECT * FROM dev_posts WHERE post_status = 'publish' AND title = '${title}' ORDER BY id DESC`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_7__["default"].query(clientQuery, function (err, rows) {
    const users = rows;

    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      });
    } else {
      res.json(users);
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/api/register.js":
/*!********************************!*\
  !*** ./server/api/register.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ "xss");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mysqlConnect */ "./server/mysqlConnect.js");





const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])(); // 登録機能

router.post('/register', (req, res, next) => {
  const id = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.id);
  const name = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.name);
  const avatar = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.avatar);
  const usertag = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.usertag);
  const github = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.github);
  const twitter = xss__WEBPACK_IMPORTED_MODULE_2___default()(req.body.twitter);
  const createdAt = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH:mm:ss');
  const postQuery = `INSERT INTO dev_users (user_id, user_name, user_avatar, user_tag, twitter, github, created_at) VALUES('${id}', '${name}', '${avatar}', '${usertag}', '${github}', '${twitter}', '${createdAt}')`;
  _mysqlConnect__WEBPACK_IMPORTED_MODULE_4__["default"].query(postQuery, function (err, rows) {
    if (err) consola__WEBPACK_IMPORTED_MODULE_1___default.a.error(err);else res.redirect('/');
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nuxt */ "nuxt");
/* harmony import */ var nuxt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nuxt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./server/api/index.js");







const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({
  extended: true
}));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5___default()());
app.use(express_session__WEBPACK_IMPORTED_MODULE_4___default()({
  secret: 'example',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxage: 1000 * 60 * 30
  }
}));
app.use('/api', _api__WEBPACK_IMPORTED_MODULE_6__["default"]); // Import and Set Nuxt.js options

const config = __webpack_require__(/*! ../nuxt.config.js */ "./nuxt.config.js");

config.dev = !("development" === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new nuxt__WEBPACK_IMPORTED_MODULE_2__["Nuxt"](config);
  const {
    host,
    port
  } = nuxt.options.server; // Build only in dev mode

  if (config.dev) {
    const builder = new nuxt__WEBPACK_IMPORTED_MODULE_2__["Builder"](nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  } // Give nuxt middleware to express


  app.use(nuxt.render); // Listen the server

  app.listen(port, host);
  consola__WEBPACK_IMPORTED_MODULE_1___default.a.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();

/***/ }),

/***/ "./server/mysqlConnect.js":
/*!********************************!*\
  !*** ./server/mysqlConnect.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ "mysql");
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);
 // mysqlに接続

const dbConfig = {
  host: 'localhost',
  user: 'root',
  database: 'dev_db',
  password: '',

  /*
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b1038310007f5e',
  database: 'heroku_1e39c00e23ca36c',
  password: '4cf9784b',
  */
  multipleStatements: true
};
const connection = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(dbConfig);
/* harmony default export */ __webpack_exports__["default"] = (connection);

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),

/***/ "nuxt":
/*!***********************!*\
  !*** external "nuxt" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sharp");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "xss":
/*!**********************!*\
  !*** external "xss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xss");

/***/ })

/******/ });
//# sourceMappingURL=main.map