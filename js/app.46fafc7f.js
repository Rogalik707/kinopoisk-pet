(function(){"use strict";var t={2560:function(t,i,e){var s=e(9242),n=e(9877),a=e(3396);function r(t,i,e,s,n,r){const o=(0,a.up)("NavBar"),l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o),(0,a.Wm)(l)])}const o=t=>((0,a.dD)("data-v-22faa0be"),t=t(),(0,a.Cn)(),t),l={class:"list"},c=o((()=>(0,a._)("li",{class:"link"},"Сериалы",-1)));function d(t,i){const e=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("ul",null,[(0,a.Wm)(e,{class:"link",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Фильмы")])),_:1}),c,(0,a.Wm)(e,{class:"link",to:"/favorites"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Моё")])),_:1}),(0,a.Wm)(e,{class:"link",to:"/account"},{default:(0,a.w5)((()=>[(0,a.Uk)("Аккаунт")])),_:1})])])}var u=e(89);const m={},f=(0,u.Z)(m,[["render",d],["__scopeId","data-v-22faa0be"]]);var p=f,h={name:"App",components:{NavBar:p}};const v=(0,u.Z)(h,[["render",r]]);var _=v,g=e(678);const w=t=>((0,a.dD)("data-v-bc196a48"),t=t(),(0,a.Cn)(),t),F={class:"search"},b=["disabled"],y=w((()=>(0,a._)("strong",null,"Найти",-1))),k=[y],O={class:"cards-container",ref:"scrollComponent"},D={class:"observer",ref:"observer"};function x(t,i,e,n,r,o){const l=(0,a.up)("select-list"),c=(0,a.up)("film-card");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",F,[(0,a.Wm)(l,{options:r.genres,onOnSelectOption:o.selectGenre},null,8,["options","onOnSelectOption"]),(0,a._)("form",{onSubmit:i[1]||(i[1]=(0,s.iM)(((...t)=>o.findFilms&&o.findFilms(...t)),["prevent"]))},[(0,a.wy)((0,a._)("input",{class:"search__input","onUpdate:modelValue":i[0]||(i[0]=t=>r.searchText=t),placeholder:"Название фильма"},null,512),[[s.nr,r.searchText]]),(0,a._)("button",{class:"search__button",disabled:r.isLoading},k,8,b)],32)]),(0,a._)("div",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.films,(t=>((0,a.wg)(),(0,a.j4)(c,{key:t.id,film:t,onClick:i=>o.openFilmDescription(t.id)},null,8,["film","onClick"])))),128))],512),(0,a._)("div",D,null,512)],64)}e(7658);var C=e(7139);const L={class:"card"},I={class:"card__img"},j=["src"],T={class:"card__body"},W={class:"card__title"},Z={class:"description"},q={class:"card__year"};function z(t,i,e,n,r,o){return(0,a.wg)(),(0,a.iD)("div",L,[(0,a._)("div",I,[(0,a._)("img",{src:e.film?.primaryImage?.url},null,8,j)]),(0,a._)("div",T,[(0,a._)("div",W,[(0,a._)("h4",null,(0,C.zw)(e.film.originalTitleText.text),1)]),(0,a._)("div",Z,[(0,a._)("div",q,(0,C.zw)(e.film.releaseDate?.year),1)]),(0,a._)("div",{class:(0,C.C_)(["like",{"like--active":r.isLiked}]),onClick:i[0]||(i[0]=(0,s.iM)((t=>o.changeFilmStatus(e.film.id)),["stop","prevent"]))},null,2)])])}var A=e(1020);const S=(0,A.Q_)("film",{state:()=>({favoriteFilms:[],watchedFilms:[]}),actions:{addFavoriteFilm(t){this.favoriteFilms.push(t)},deleteFilm(t){const i=this.favoriteFilms.findIndex((i=>i===t));this.favoriteFilms.splice(i,1)},addWatchedFilm(t){this.watchedFilms.includes(t)||this.watchedFilms.push(t)}}});var H={name:"FilmCard",data(){return{isLiked:!1}},props:{film:{type:Object,required:!0}},mounted(){this.film.favorite&&(this.isLiked=!0)},methods:{...(0,A.nv)(S,["addFavoriteFilm","deleteFilm"]),changeFilmStatus(t){this.isLiked?this.deleteFilm(t):this.addFavoriteFilm(t),this.isLiked=!this.isLiked}}};const P=(0,u.Z)(H,[["render",z],["__scopeId","data-v-7123aa60"]]);var U=P;const Y=e(7218),$=Y.create({baseURL:"https://moviesdatabase.p.rapidapi.com",headers:{"X-RapidAPI-Key":"e6b3ada70amsh1fb3b5eaa8b96edp1f87c0jsn80262fdc1bff","X-RapidAPI-Host":"moviesdatabase.p.rapidapi.com"}});async function M(t){try{const i=await $.get("/titles",{params:{startYear:"2020",list:"most_pop_movies",page:t}});return i.data}catch(i){console.error(i)}}async function K(t){try{const i=await $.get(`/titles/search/title/${t}`);return i.data}catch(i){console.error(i)}}async function E(t){try{const i=await $.get("/titles/x/titles-by-ids",{params:{idsList:t.join(",")}});return i.data}catch(i){console.error(i)}}async function G(t){try{const i=await $.get(`/titles/${t}`);return i.data}catch(i){console.error(i)}}async function B(){try{const t=await $.get("/actors/random");return t.data}catch(t){console.error(t)}}async function N(){try{const t=await $.get("titles/utils/genres");return t.data}catch(t){console.error(t)}}async function R(t){try{const i=await $.get("/titles",{params:{genre:t}});return i.data}catch(i){console.error(i)}}const X={class:"select"},Q={key:0,class:"select__options"},V=["onClick"];function J(t,i,e,s,n,r){return(0,a.wg)(),(0,a.iD)("div",X,[(0,a._)("div",{class:"select__input",onClick:i[0]||(i[0]=(...t)=>r.toggleOptions&&r.toggleOptions(...t))},(0,C.zw)(n.currentOption),1),n.isOpened?((0,a.wg)(),(0,a.iD)("div",Q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.options,((t,i)=>((0,a.wg)(),(0,a.iD)("div",{class:"select__option",key:i,onClick:i=>r.selectOption(t)},(0,C.zw)(t),9,V)))),128))])):(0,a.kq)("",!0)])}var tt={name:"SelectList",props:{options:{type:Array,required:!0}},data(){return{isOpened:!1,currentOption:""}},methods:{toggleOptions(){this.isOpened=!this.isOpened},selectOption(t){this.currentOption=t,this.isOpened=!1,this.$emit("onSelectOption",t)}}};const it=(0,u.Z)(tt,[["render",J],["__scopeId","data-v-6c43a564"]]);var et=it,st={components:{SelectList:et,FilmCard:U},data(){return{films:[],page:1,searchText:"",isLoading:!1,genres:[],filters:{genre:""}}},created(){this.fetchFilms(this.page)},mounted(){this.fetchGenres();const t={rootMargin:"0px",threshold:1},i=t=>{t[0].isIntersecting&&this.loadMoreFilms()},e=new IntersectionObserver(i,t);e.observe(this.$refs.observer)},watch:{films(){this.checkLikedFilms()}},computed:{...(0,A.rn)(S,["favoriteFilms"])},methods:{...(0,A.nv)(S,["addWatchedFilm"]),async fetchFilms(t){const i=await M(t);this.films=i.results},async loadMoreFilms(){this.page+=1;const t=await M(this.page);this.films=[...this.films,...t.results]},async findFilms(){if(this.isLoading=!0,this.filters.genre){const t=await R(this.filters.genre);this.films=t.results}if(this.searchText){const t=await K(this.searchText);this.films=t.results}this.films&&(this.isLoading=!1)},async fetchGenres(){const t=await N();this.genres=t.results},openFilmDescription(t){this.$router.push(`/films/${t}`),this.addWatchedFilm(t)},checkLikedFilms(){this.films.forEach((t=>{this.favoriteFilms.includes(t.id)&&(t.favorite=!0)}))},selectGenre(t){this.filters.genre=t}}};const nt=(0,u.Z)(st,[["render",x],["__scopeId","data-v-bc196a48"]]);var at=nt;const rt=t=>((0,a.dD)("data-v-8dd7bd14"),t=t(),(0,a.Cn)(),t),ot={class:"profile"},lt=rt((()=>(0,a._)("div",{class:"profile__img"},null,-1))),ct={class:"profile__description"},dt=rt((()=>(0,a._)("h1",null,"Профиль",-1))),ut={class:"profile__table_box"},mt=rt((()=>(0,a._)("li",null,"Просмотренных сериалов: 0",-1))),ft=rt((()=>(0,a._)("li",null,"Понравившихся сериалов: 0",-1))),pt=rt((()=>(0,a._)("div",{class:"watched_films"},null,-1)));function ht(t,i,e,s,n,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",ot,[lt,(0,a._)("div",ct,[dt,(0,a._)("div",ut,[(0,a._)("ul",null,[(0,a._)("li",null,"Просмотренных фильмов: "+(0,C.zw)(t.watchedFilms.length),1),(0,a._)("li",null,"Понравившихся фильмов: "+(0,C.zw)(t.favoriteFilms.length),1),mt,ft])])])]),pt],64)}var vt={name:"AccountPage",computed:{...(0,A.rn)(S,["favoriteFilms","watchedFilms"])}};const _t=(0,u.Z)(vt,[["render",ht],["__scopeId","data-v-8dd7bd14"]]);var gt=_t;const wt={class:"cards-container"};function Ft(t,i,e,s,n,r){const o=(0,a.up)("film-card");return(0,a.wg)(),(0,a.iD)("div",wt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.films,(t=>((0,a.wg)(),(0,a.j4)(o,{key:t.id,film:t},null,8,["film"])))),128))])}var bt={components:{FilmCard:U},data(){return{films:[]}},mounted(){this.fetchFavoriteFilms(this.favoriteFilms)},computed:{...(0,A.rn)(S,["favoriteFilms"])},methods:{...(0,A.nv)(S,["addFavoriteFilm","deleteFilm"]),async fetchFavoriteFilms(t){const i=await E(t);this.films=i.results,this.films&&this.films.forEach((t=>t.favorite=!0))}}};const yt=(0,u.Z)(bt,[["render",Ft],["__scopeId","data-v-6d2b1e38"]]);var kt=yt;const Ot=t=>((0,a.dD)("data-v-6597ff4a"),t=t(),(0,a.Cn)(),t),Dt={class:"film"},xt={class:"film__img"},Ct=["src"],Lt={class:"film__text_box"},It={class:"film__title"},jt=Ot((()=>(0,a._)("div",{class:"film__description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1))),Tt={class:"actors"},Wt=Ot((()=>(0,a._)("h3",{class:"actors__header"}," Актеры:",-1)));function Zt(t,i,e,s,n,r){return(0,a.wg)(),(0,a.iD)("div",Dt,[(0,a._)("div",xt,[(0,a._)("img",{src:n.film?.primaryImage?.url},null,8,Ct)]),(0,a._)("div",Lt,[(0,a._)("div",It,[(0,a._)("h1",null,(0,C.zw)(n.film?.originalTitleText?.text),1)]),jt]),(0,a._)("div",Tt,[Wt,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.actors,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"actors__list",key:t.nconst},(0,C.zw)(t?.primaryName),1)))),128))])])}var qt={data(){return{film:{},actors:[]}},name:"DescriptionPage",created(){this.fetchFilm(),this.fetchActors()},methods:{async fetchFilm(){const t=await G(this.$route.params.id);this.film=t.results},async fetchActors(){const t=await B();this.actors=t.results}}};const zt=(0,u.Z)(qt,[["render",Zt],["__scopeId","data-v-6597ff4a"]]);var At=zt;const St=[{path:"/",component:at},{path:"/account",component:gt},{path:"/favorites",component:kt},{path:"/films/:id",component:At},{path:"/:CatchAll(.*)",component:(0,a.Wm)("h1",null,[(0,a.Uk)("Страничка не найдена :'(")])}],Ht=(0,g.p7)({routes:St,history:(0,g.PO)("/kinopoisk-pet/")});var Pt=Ht;const Ut=(0,A.WB)(),Yt=(0,s.ri)(_);Yt.use(Pt).use(Ut).component("svg-icon",n.Z).mount("#app")}},i={};function e(s){var n=i[s];if(void 0!==n)return n.exports;var a=i[s]={exports:{}};return t[s].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(i,s,n,a){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],a=t[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(e.O).every((function(t){return e.O[t](s[l])}))?s.splice(l--,1):(o=!1,a<r&&(r=a));if(o){t.splice(d--,1);var c=n();void 0!==c&&(i=c)}}return i}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,n,a]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,s){var n,a,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(i){return 0!==t[i]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(l)var d=l(e)}for(i&&i(s);c<r.length;c++)a=r[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},s=self["webpackChunkkinopoisk"]=self["webpackChunkkinopoisk"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(2560)}));s=e.O(s)})();
//# sourceMappingURL=app.46fafc7f.js.map