(function(){"use strict";var t={4734:function(t,i,e){var s=e(9242),a=e(9877),n=e(3396);function r(t,i,e,s,a,r){const o=(0,n.up)("NavBar"),l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(o),(0,n.Wm)(l)])}const o=t=>((0,n.dD)("data-v-22faa0be"),t=t(),(0,n.Cn)(),t),l={class:"list"},c=o((()=>(0,n._)("li",{class:"link"},"Сериалы",-1)));function d(t,i){const e=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("ul",null,[(0,n.Wm)(e,{class:"link",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Фильмы")])),_:1}),c,(0,n.Wm)(e,{class:"link",to:"/favorites"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Моё")])),_:1}),(0,n.Wm)(e,{class:"link",to:"/account"},{default:(0,n.w5)((()=>[(0,n.Uk)("Аккаунт")])),_:1})])])}var u=e(89);const m={},f=(0,u.Z)(m,[["render",d],["__scopeId","data-v-22faa0be"]]);var h=f,p={name:"App",components:{NavBar:h}};const v=(0,u.Z)(p,[["render",r]]);var _=v,g=e(678);const F=t=>((0,n.dD)("data-v-0436d329"),t=t(),(0,n.Cn)(),t),w={class:"search"},b=["disabled"],k=F((()=>(0,n._)("strong",null,"Найти",-1))),y=[k],x={class:"cards-container",ref:"scrollComponent"},D={class:"observer",ref:"observer"};function C(t,i,e,a,r,o){const l=(0,n.up)("film-card");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",w,[(0,n._)("form",{onSubmit:i[1]||(i[1]=(0,s.iM)(((...t)=>o.findFilms&&o.findFilms(...t)),["prevent"]))},[(0,n.wy)((0,n._)("input",{class:"search__input","onUpdate:modelValue":i[0]||(i[0]=t=>r.searchText=t),placeholder:"Название фильма"},null,512),[[s.nr,r.searchText]]),(0,n._)("button",{class:"search__button",disabled:r.isLoading},y,8,b)],32)]),(0,n._)("div",x,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.films,(t=>((0,n.wg)(),(0,n.j4)(l,{key:t.id,film:t,onClick:i=>o.openFilmDescription(t.id)},null,8,["film","onClick"])))),128))],512),(0,n._)("div",D,null,512)],64)}e(7658);var L=e(7139);const O={class:"card"},I={class:"card__img"},j=["src"],T={class:"card__body"},W={class:"card__title"},Z={class:"description"},A={class:"card__year"};function P(t,i,e,a,r,o){return(0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",I,[(0,n._)("img",{src:e.film?.primaryImage?.url},null,8,j)]),(0,n._)("div",T,[(0,n._)("div",W,[(0,n._)("h4",null,(0,L.zw)(e.film.originalTitleText.text),1)]),(0,n._)("div",Z,[(0,n._)("div",A,"("+(0,L.zw)(e.film.releaseDate.year)+")",1)]),(0,n._)("div",{class:(0,L.C_)(["like",{"like--active":r.isLiked}]),onClick:i[0]||(i[0]=(0,s.iM)((t=>o.changeFilmStatus(e.film.id)),["stop","prevent"]))},null,2)])])}var U=e(1020);const q=(0,U.Q_)("film",{state:()=>({favoriteFilms:[],watchedFilms:[]}),actions:{addFavoriteFilm(t){this.favoriteFilms.push(t)},deleteFilm(t){const i=this.favoriteFilms.findIndex((i=>i===t));this.favoriteFilms.splice(i,1)},addWatchedFilm(t){this.watchedFilms.includes(t)||this.watchedFilms.push(t)}}});var z={name:"FilmCard",data(){return{isLiked:!1}},props:{film:{type:Object,required:!0}},mounted(){this.film.favorite&&(this.isLiked=!0)},methods:{...(0,U.nv)(q,["addFavoriteFilm","deleteFilm"]),changeFilmStatus(t){this.isLiked?this.deleteFilm(t):this.addFavoriteFilm(t),this.isLiked=!this.isLiked}}};const H=(0,u.Z)(z,[["render",P],["__scopeId","data-v-1c2ab0dc"]]);var M=H;const Y=e(7218),$=Y.create({baseURL:"https://moviesdatabase.p.rapidapi.com",headers:{"X-RapidAPI-Key":"e6b3ada70amsh1fb3b5eaa8b96edp1f87c0jsn80262fdc1bff","X-RapidAPI-Host":"moviesdatabase.p.rapidapi.com"}});async function E(t){try{const i=await $.get("/titles",{params:{startYear:"2020",list:"most_pop_movies",page:t}});return i.data}catch(i){console.error(i)}}async function K(t){try{const i=await $.get(`/titles/search/title/${t}`);return i.data}catch(i){console.error(i)}}async function B(t){try{const i=await $.get("/titles/x/titles-by-ids",{params:{idsList:t.join(",")}});return i.data}catch(i){console.error(i)}}async function N(t){try{const i=await $.get(`/titles/${t}`);return i.data}catch(i){console.error(i)}}async function R(){try{const t=await $.get("/actors/random");return t.data}catch(t){console.error(t)}}var S={components:{FilmCard:M},data(){return{films:[],page:1,searchText:"",isLoading:!1}},created(){this.fetchFilms(this.page)},mounted(){const t={rootMargin:"0px",threshold:1},i=t=>{t[0].isIntersecting&&this.loadMoreFilms()},e=new IntersectionObserver(i,t);e.observe(this.$refs.observer)},watch:{films(){this.checkLikedFilms()}},computed:{...(0,U.rn)(q,["favoriteFilms"])},methods:{...(0,U.nv)(q,["addWatchedFilm"]),async fetchFilms(t){const i=await E(t);this.films=i.results},async loadMoreFilms(){this.page+=1;const t=await E(this.page);this.films=[...this.films,...t.results]},async findFilms(){if(this.searchText){this.isLoading=!0;const t=await K(this.searchText);this.films=t.results,this.films&&(this.isLoading=!1)}},openFilmDescription(t){this.$router.push(`/films/${t}`),this.addWatchedFilm(t)},checkLikedFilms(){this.films.forEach((t=>{this.favoriteFilms.includes(t.id)&&(t.favorite=!0)}))}}};const X=(0,u.Z)(S,[["render",C],["__scopeId","data-v-0436d329"]]);var Q=X;const V=t=>((0,n.dD)("data-v-8dd7bd14"),t=t(),(0,n.Cn)(),t),G={class:"profile"},J=V((()=>(0,n._)("div",{class:"profile__img"},null,-1))),tt={class:"profile__description"},it=V((()=>(0,n._)("h1",null,"Профиль",-1))),et={class:"profile__table_box"},st=V((()=>(0,n._)("li",null,"Просмотренных сериалов: 0",-1))),at=V((()=>(0,n._)("li",null,"Понравившихся сериалов: 0",-1))),nt=V((()=>(0,n._)("div",{class:"watched_films"},null,-1)));function rt(t,i,e,s,a,r){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",G,[J,(0,n._)("div",tt,[it,(0,n._)("div",et,[(0,n._)("ul",null,[(0,n._)("li",null,"Просмотренных фильмов: "+(0,L.zw)(t.watchedFilms.length),1),(0,n._)("li",null,"Понравившихся фильмов: "+(0,L.zw)(t.favoriteFilms.length),1),st,at])])])]),nt],64)}var ot={name:"AccountPage",computed:{...(0,U.rn)(q,["favoriteFilms","watchedFilms"])}};const lt=(0,u.Z)(ot,[["render",rt],["__scopeId","data-v-8dd7bd14"]]);var ct=lt;const dt={class:"cards-container"};function ut(t,i,e,s,a,r){const o=(0,n.up)("film-card");return(0,n.wg)(),(0,n.iD)("div",dt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.films,(t=>((0,n.wg)(),(0,n.j4)(o,{key:t.id,film:t},null,8,["film"])))),128))])}var mt={components:{FilmCard:M},data(){return{films:[]}},mounted(){this.fetchFavoriteFilms(this.favoriteFilms)},computed:{...(0,U.rn)(q,["favoriteFilms"])},methods:{...(0,U.nv)(q,["addFavoriteFilm","deleteFilm"]),async fetchFavoriteFilms(t){const i=await B(t);this.films=i.results,this.films&&this.films.forEach((t=>t.favorite=!0))}}};const ft=(0,u.Z)(mt,[["render",ut],["__scopeId","data-v-6d2b1e38"]]);var ht=ft;const pt=t=>((0,n.dD)("data-v-6597ff4a"),t=t(),(0,n.Cn)(),t),vt={class:"film"},_t={class:"film__img"},gt=["src"],Ft={class:"film__text_box"},wt={class:"film__title"},bt=pt((()=>(0,n._)("div",{class:"film__description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1))),kt={class:"actors"},yt=pt((()=>(0,n._)("h3",{class:"actors__header"}," Актеры:",-1)));function xt(t,i,e,s,a,r){return(0,n.wg)(),(0,n.iD)("div",vt,[(0,n._)("div",_t,[(0,n._)("img",{src:a.film?.primaryImage?.url},null,8,gt)]),(0,n._)("div",Ft,[(0,n._)("div",wt,[(0,n._)("h1",null,(0,L.zw)(a.film?.originalTitleText?.text),1)]),bt]),(0,n._)("div",kt,[yt,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.actors,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"actors__list",key:t.nconst},(0,L.zw)(t?.primaryName),1)))),128))])])}var Dt={data(){return{film:{},actors:[]}},name:"DescriptionPage",created(){this.fetchFilm(),this.fetchActors()},methods:{async fetchFilm(){const t=await N(this.$route.params.id);this.film=t.results},async fetchActors(){const t=await R();this.actors=t.results}}};const Ct=(0,u.Z)(Dt,[["render",xt],["__scopeId","data-v-6597ff4a"]]);var Lt=Ct;const Ot=[{path:"/",component:Q},{path:"/account",component:ct},{path:"/favorites",component:ht},{path:"/films/:id",component:Lt},{path:"/:CatchAll(.*)",component:(0,n.Wm)("h1",null,[(0,n.Uk)("Страничка не найдена :'(")])}],It=(0,g.p7)({routes:Ot,history:(0,g.PO)("/kinopoisk-pet/")});var jt=It;const Tt=(0,U.WB)(),Wt=(0,s.ri)(_);Wt.use(jt).use(Tt).component("svg-icon",a.Z).mount("#app")}},i={};function e(s){var a=i[s];if(void 0!==a)return a.exports;var n=i[s]={exports:{}};return t[s].call(n.exports,n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(i,s,a,n){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],n=t[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||r>=n)&&Object.keys(e.O).every((function(t){return e.O[t](s[l])}))?s.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(d--,1);var c=a();void 0!==c&&(i=c)}}return i}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,a,n]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,s){var a,n,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(i){return 0!==t[i]}))){for(a in o)e.o(o,a)&&(e.m[a]=o[a]);if(l)var d=l(e)}for(i&&i(s);c<r.length;c++)n=r[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(d)},s=self["webpackChunkkinopoisk"]=self["webpackChunkkinopoisk"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(4734)}));s=e.O(s)})();
//# sourceMappingURL=app.4641e9a6.js.map