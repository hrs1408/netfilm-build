"use strict";(self.webpackChunkfilm_web=self.webpackChunkfilm_web||[]).push([[771],{7771:(x,f,g)=>{g.d(f,{z:()=>M});var e=g(177),_=g(303),m=g(3551),b=g(2601),d=g(1413),v=g(6977),n=g(980),t=g(4438),o=g(3498);const s=r=>["/phim",r];function h(r,P){if(1&r&&(t.j41(0,"div",9),t.EFF(1),t.k0s()),2&r){const a=t.XpG();t.R7$(),t.SpI(" ",a.error," ")}}function i(r,P){if(1&r&&(t.j41(0,"span",20),t.EFF(1),t.k0s()),2&r){const a=t.XpG().$implicit;t.R7$(),t.SpI(" ",a.quality," ")}}function c(r,P){if(1&r&&(t.j41(0,"div",21),t.EFF(1),t.k0s()),2&r){const a=t.XpG().$implicit;t.R7$(),t.SpI(" T\u1eadp ",a.episode_current," ")}}function l(r,P){if(1&r&&(t.j41(0,"div",10)(1,"div",11),t.nrm(2,"img",12),t.j41(3,"div",13)(4,"h3",14),t.EFF(5),t.k0s(),t.j41(6,"h4",15),t.EFF(7),t.k0s(),t.j41(8,"div",16)(9,"span",17),t.EFF(10),t.k0s(),t.DNE(11,i,2,1,"span",18),t.k0s()(),t.DNE(12,c,2,1,"div",19),t.k0s()()),2&r){const a=P.$implicit;t.Y8G("routerLink",t.eq3(8,s,a.slug)),t.R7$(2),t.Y8G("src",a.poster_url,t.B4B)("alt",a.name),t.R7$(3),t.JRh(a.name),t.R7$(2),t.JRh(a.origin_name),t.R7$(3),t.JRh(a.year),t.R7$(),t.Y8G("ngIf",a.quality),t.R7$(),t.Y8G("ngIf",a.episode_current)}}function y(r,P){1&r&&(t.j41(0,"div",22),t.nrm(1,"app-loading-spinner"),t.k0s())}function E(r,P){if(1&r){const a=t.RV6();t.j41(0,"app-pagination",23),t.bIt("pageChange",function(u){t.eBV(a);const R=t.XpG();return t.Njj(R.onPageChange(u))}),t.k0s()}if(2&r){const a=t.XpG();t.Y8G("currentPage",a.currentPage)("totalPages",a.totalPages)}}function C(r,P){1&r&&(t.j41(0,"div",24),t.EFF(1," No movies found. "),t.k0s())}let M=(()=>{class r{movieService;movies=[];loading=!1;error="";currentPage=1;totalPages=1;pageTitle="Movies";destroy$=new d.B;constructor(a){this.movieService=a}ngOnInit(){this.loadMovies(1)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}loadMovies(a){this.loading||(this.loading=!0,this.error="",this.movies=[],this.getMovies(a).pipe((0,v.Q)(this.destroy$),(0,n.j)(()=>{this.loading=!1})).subscribe({next:p=>{if(!p?.items)return this.movies=[],void(this.error="No movies found.");this.movies=p.items,p.pagination?(this.currentPage=p.pagination.currentPage,this.totalPages=p.pagination.totalPages):(this.currentPage=1,this.totalPages=1),0===this.movies.length&&(this.error="No movies found.")},error:p=>{this.error=this.getErrorMessage(p),console.error("Error loading movies:",p),this.movies=[]}}))}getErrorMessage(a){return 404===a.status?"No movies found.":0===a.status?"Unable to connect to server. Please check your internet connection.":a.message||"Failed to load movies. Please try again later."}onPageChange(a){a!==this.currentPage&&(this.loadMovies(a),window.scrollTo({top:0,behavior:"smooth"}))}static \u0275fac=function(p){return new(p||r)(t.rXU(o.W))};static \u0275cmp=t.VBU({type:r,selectors:[["ng-component"]],standalone:!0,features:[t.aNF],decls:10,vars:6,consts:[[1,"min-h-screen","bg-[#141414]","text-white"],[1,"container","mx-auto","px-4"],[1,"text-3xl","font-bold","py-8"],["class","bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6",4,"ngIf"],[1,"grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-4"],["class","group cursor-pointer transition-transform hover:scale-105",3,"routerLink",4,"ngFor","ngForOf"],["class","py-8 text-center",4,"ngIf"],[3,"currentPage","totalPages","pageChange",4,"ngIf"],["class","text-center text-gray-400 py-8",4,"ngIf"],[1,"bg-red-500/10","border","border-red-500","text-red-500","p-4","rounded-lg","mb-6"],[1,"group","cursor-pointer","transition-transform","hover:scale-105",3,"routerLink"],[1,"relative","overflow-hidden","rounded-lg","shadow-lg"],["loading","lazy",1,"w-full","aspect-[2/3]","object-cover",3,"src","alt"],[1,"absolute","inset-0","bg-gradient-to-t","from-black/90","via-black/50","to-transparent","opacity-0","group-hover:opacity-100","transition-opacity","duration-300","flex","flex-col","justify-end","p-3"],[1,"text-sm","font-semibold","line-clamp-2"],[1,"text-xs","text-gray-300","line-clamp-1","mt-1"],[1,"flex","items-center","gap-2","mt-2"],[1,"text-xs","px-2","py-0.5","bg-red-600","rounded"],["class","text-xs px-2 py-0.5 bg-blue-600 rounded",4,"ngIf"],["class","absolute top-2 right-2 px-2 py-0.5 bg-red-600 rounded text-xs",4,"ngIf"],[1,"text-xs","px-2","py-0.5","bg-blue-600","rounded"],[1,"absolute","top-2","right-2","px-2","py-0.5","bg-red-600","rounded","text-xs"],[1,"py-8","text-center"],[3,"pageChange","currentPage","totalPages"],[1,"text-center","text-gray-400","py-8"]],template:function(p,u){1&p&&(t.j41(0,"div",0)(1,"div",1)(2,"h1",2),t.EFF(3),t.k0s(),t.DNE(4,h,2,1,"div",3),t.j41(5,"div",4),t.DNE(6,l,13,10,"div",5),t.k0s(),t.DNE(7,y,2,0,"div",6)(8,E,1,2,"app-pagination",7)(9,C,2,0,"div",8),t.k0s()()),2&p&&(t.R7$(3),t.JRh(u.pageTitle),t.R7$(),t.Y8G("ngIf",u.error),t.R7$(2),t.Y8G("ngForOf",u.movies),t.R7$(),t.Y8G("ngIf",u.loading),t.R7$(),t.Y8G("ngIf",!u.loading&&!u.error&&u.movies.length>0),t.R7$(),t.Y8G("ngIf",!u.loading&&!u.error&&0===u.movies.length))},dependencies:[e.MD,e.Sq,e.bT,_.iI,_.Wk,m.N,b.e],encapsulation:2})}return r})()},3551:(x,f,g)=>{g.d(f,{N:()=>_});var e=g(4438);let _=(()=>{class m{static \u0275fac=function(v){return new(v||m)};static \u0275cmp=e.VBU({type:m,selectors:[["app-loading-spinner"]],standalone:!0,features:[e.aNF],decls:2,vars:0,consts:[[1,"flex","justify-center","items-center","py-8"],[1,"animate-spin","rounded-full","h-12","w-12","border-t-2","border-b-2","border-accent"]],template:function(v,n){1&v&&(e.j41(0,"div",0),e.nrm(1,"div",1),e.k0s())},encapsulation:2})}return m})()},2601:(x,f,g)=>{g.d(f,{e:()=>o});var e=g(4438),_=g(177);function m(s,h){if(1&s){const i=e.RV6();e.j41(0,"button",7),e.bIt("click",function(){e.eBV(i);const l=e.XpG(2);return e.Njj(l.onPageChange(1))}),e.EFF(1," 1 "),e.k0s()}}function b(s,h){1&s&&(e.j41(0,"span",8),e.EFF(1,"..."),e.k0s())}function d(s,h){if(1&s){const i=e.RV6();e.j41(0,"button",7),e.bIt("click",function(){const l=e.eBV(i).$implicit,y=e.XpG(2);return e.Njj(y.onPageChange(l))}),e.EFF(1),e.k0s()}if(2&s){const i=h.$implicit,c=e.XpG(2);e.AVh("bg-red-600",i===c.currentPage),e.R7$(),e.SpI(" ",i," ")}}function v(s,h){1&s&&(e.j41(0,"span",8),e.EFF(1,"..."),e.k0s())}function n(s,h){if(1&s){const i=e.RV6();e.j41(0,"button",7),e.bIt("click",function(){e.eBV(i);const l=e.XpG(2);return e.Njj(l.onPageChange(l.totalPages))}),e.EFF(1),e.k0s()}if(2&s){const i=e.XpG(2);e.R7$(),e.SpI(" ",i.totalPages," ")}}function t(s,h){if(1&s){const i=e.RV6();e.j41(0,"div",1)(1,"button",2),e.bIt("click",function(){e.eBV(i);const l=e.XpG();return e.Njj(l.onPageChange(l.currentPage-1))}),e.EFF(2," \u2190 "),e.k0s(),e.DNE(3,m,2,0,"button",3)(4,b,2,0,"span",4)(5,d,2,3,"button",5)(6,v,2,0,"span",4)(7,n,2,1,"button",3),e.j41(8,"button",2),e.bIt("click",function(){e.eBV(i);const l=e.XpG();return e.Njj(l.onPageChange(l.currentPage+1))}),e.EFF(9," \u2192 "),e.k0s(),e.j41(10,"span",6),e.EFF(11),e.k0s()()}if(2&s){const i=e.XpG();e.R7$(),e.Y8G("disabled",1===i.currentPage),e.R7$(2),e.Y8G("ngIf",i.pages[0]>1),e.R7$(),e.Y8G("ngIf",i.pages[0]>2),e.R7$(),e.Y8G("ngForOf",i.pages),e.R7$(),e.Y8G("ngIf",i.pages[i.pages.length-1]<i.totalPages-1),e.R7$(),e.Y8G("ngIf",i.pages[i.pages.length-1]<i.totalPages),e.R7$(),e.Y8G("disabled",i.currentPage===i.totalPages),e.R7$(3),e.Lme(" Page ",i.currentPage," of ",i.totalPages," ")}}let o=(()=>{class s{currentPage=1;totalPages=1;pageChange=new e.bkB;pages=[];ngOnChanges(i){(i.currentPage||i.totalPages)&&this.updatePagination(),this.updatePagination()}updatePagination(){let c=Math.max(1,this.currentPage-Math.floor(2.5)),l=Math.min(this.totalPages,c+5-1);l-c+1<5&&(c=Math.max(1,l-5+1)),this.pages=Array.from({length:l-c+1},(y,E)=>c+E)}onPageChange(i){i>=1&&i<=this.totalPages&&i!==this.currentPage&&this.pageChange.emit(i)}static \u0275fac=function(c){return new(c||s)};static \u0275cmp=e.VBU({type:s,selectors:[["app-pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[e.OA$,e.aNF],decls:1,vars:1,consts:[["class","flex items-center justify-center space-x-2 py-8",4,"ngIf"],[1,"flex","items-center","justify-center","space-x-2","py-8"],[1,"px-3","py-1","rounded","bg-gray-800","text-white","hover:bg-gray-700","disabled:opacity-50","disabled:cursor-not-allowed",3,"click","disabled"],["class","px-3 py-1 rounded bg-gray-800 text-white hover:bg-gray-700",3,"click",4,"ngIf"],["class","text-gray-600",4,"ngIf"],["class","px-3 py-1 rounded bg-gray-800 text-white hover:bg-gray-700",3,"bg-red-600","click",4,"ngFor","ngForOf"],[1,"text-sm","text-gray-400","ml-4"],[1,"px-3","py-1","rounded","bg-gray-800","text-white","hover:bg-gray-700",3,"click"],[1,"text-gray-600"]],template:function(c,l){1&c&&e.DNE(0,t,12,9,"div",0),2&c&&e.Y8G("ngIf",l.totalPages>0)},dependencies:[_.MD,_.Sq,_.bT],styles:["button[_ngcontent-%COMP%]{transition:all .2s ease;min-width:2.5rem;height:2.5rem;display:inline-flex;align-items:center;justify-content:center;font-weight:500}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}button[_ngcontent-%COMP%]:not(:disabled):hover{background:#e50914;transform:scale(1.05)}button.bg-red-600[_ngcontent-%COMP%]{background:#e50914}button.bg-red-600[_ngcontent-%COMP%]:hover{background:#b30710}"]})}return s})()},3498:(x,f,g)=>{g.d(f,{W:()=>b});var e=g(6354),_=g(4438),m=g(1626);let b=(()=>{class d{http;baseUrl="https://phimapi.com";constructor(n){this.http=n}imageBaseUrl="https://phimimg.com";addImageBaseUrl(n){return n&&(n.startsWith("http")?n:`${this.imageBaseUrl}/${n}`)}transformResponse(n,t){if(t){const o=n;if("success"!==o.status)throw new Error(o.msg||"API returned unsuccessful status");if(!o.data?.items)throw new Error("No items found in response");return{items:o.data.items.map(s=>({...s,poster_url:this.addImageBaseUrl(s.poster_url),thumb_url:this.addImageBaseUrl(s.thumb_url)})),pagination:o.data.params.pagination}}{const o=n;if(!o.status)throw new Error("API returned unsuccessful status");if(!o.items)throw new Error("No items found in response");return{items:o.items.map(s=>({...s,poster_url:this.addImageBaseUrl(s.poster_url),thumb_url:this.addImageBaseUrl(s.thumb_url)})),pagination:o.pagination}}}isV1Endpoint(n){return n.includes("/v1/api/")}makeRequest(n,t={}){const o=`${this.baseUrl}${n}`,s=this.isV1Endpoint(n),h={...t};return this.http.get(o,{params:h}).pipe((0,e.T)(i=>this.transformResponse(i,s)))}getLatestMovies(n=1){return this.makeRequest("/danh-sach/phim-moi-cap-nhat",{page:n.toString()})}getMoviesByCategory(n,t=1){return this.makeRequest(`/danh-sach/the-loai/${n}`,{page:t.toString()})}getMoviesByCountry(n,t=1){return this.makeRequest(`/v1/api/danh-sach/quoc-gia/${n}`,{page:t.toString()})}getMovieDetails(n){return this.http.get(`${this.baseUrl}/phim/${n}`).pipe((0,e.T)(o=>{if(!o.status)throw new Error(o.msg||"Failed to fetch movie details");return{...o,movie:{...o.movie,poster_url:this.addImageBaseUrl(o.movie.poster_url),thumb_url:this.addImageBaseUrl(o.movie.thumb_url)}}}))}getTrendingMovies(n=1){return this.makeRequest("/v1/api/danh-sach/tv-shows",{page:n.toString()})}getSingleMovies(n=1){return this.makeRequest("/v1/api/danh-sach/phim-le",{page:n.toString()})}getSeriesMovies(n=1){return this.makeRequest("/v1/api/danh-sach/phim-bo",{page:n.toString()})}getAnimeMovies(n=1){return this.makeRequest("/v1/api/danh-sach/hoat-hinh",{page:n.toString()})}getCategories(){return this.http.get(`${this.baseUrl}/the-loai`)}getCountries(){return this.http.get(`${this.baseUrl}/quoc-gia`)}searchMovies(n){const o={};return n.keyword&&(o.keyword=n.keyword),n.page&&(o.page=n.page.toString()),n.sort_field&&(o.sort_field=n.sort_field),n.sort_type&&(o.sort_type=n.sort_type),n.sort_lang&&(o.sort_lang=n.sort_lang),n.category&&(o.category=n.category),n.country&&(o.country=n.country),n.year&&(o.year=n.year.toString()),n.limit&&(o.limit=n.limit.toString()),this.makeRequest("/v1/api/tim-kiem",o)}static \u0275fac=function(t){return new(t||d)(_.KVO(m.Qq))};static \u0275prov=_.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);