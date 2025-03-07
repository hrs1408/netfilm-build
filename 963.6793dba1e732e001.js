"use strict";(self.webpackChunkfilm_web=self.webpackChunkfilm_web||[]).push([[963],{2963:(M,p,r)=>{r.r(p),r.d(p,{AnimeMoviesComponent:()=>P});var s=r(177),l=r(303),c=r(3551),_=r(980),e=r(4438),u=r(3498);const t=o=>["/movie",o];function a(o,m){if(1&o&&(e.j41(0,"div",10),e.EFF(1),e.k0s()),2&o){const n=e.XpG();e.R7$(),e.SpI(" ",n.error," ")}}function i(o,m){if(1&o&&(e.j41(0,"span",21),e.EFF(1),e.k0s()),2&o){const n=e.XpG().$implicit;e.R7$(),e.SpI(" ",n.quality," ")}}function g(o,m){if(1&o&&(e.j41(0,"div",22),e.EFF(1),e.k0s()),2&o){const n=e.XpG().$implicit;e.R7$(),e.SpI(" T\u1eadp ",n.episode_current," ")}}function v(o,m){if(1&o&&(e.j41(0,"div",11)(1,"div",12),e.nrm(2,"img",13),e.j41(3,"div",14)(4,"h3",15),e.EFF(5),e.k0s(),e.j41(6,"h4",16),e.EFF(7),e.k0s(),e.j41(8,"div",17)(9,"span",18),e.EFF(10),e.k0s(),e.DNE(11,i,2,1,"span",19),e.k0s()(),e.DNE(12,g,2,1,"div",20),e.k0s()()),2&o){const n=m.$implicit;e.Y8G("routerLink",e.eq3(8,t,n._id)),e.R7$(2),e.Y8G("src",n.poster_url,e.B4B)("alt",n.name),e.R7$(3),e.JRh(n.name),e.R7$(2),e.JRh(n.origin_name),e.R7$(3),e.JRh(n.year),e.R7$(),e.Y8G("ngIf",n.quality),e.R7$(),e.Y8G("ngIf",n.episode_current)}}function f(o,m){1&o&&(e.j41(0,"div",23),e.nrm(1,"app-loading-spinner"),e.k0s())}function y(o,m){if(1&o){const n=e.RV6();e.j41(0,"div",23)(1,"button",24),e.bIt("click",function(){e.eBV(n);const d=e.XpG();return e.Njj(d.loadMore())}),e.EFF(2," Load More "),e.k0s()()}}function b(o,m){1&o&&(e.j41(0,"div",25),e.EFF(1," No anime available. "),e.k0s())}let P=(()=>{class o{movieService;movies=[];loading=!1;error="";currentPage=1;hasMorePages=!0;constructor(n){this.movieService=n}ngOnInit(){this.loadMovies()}loadMovies(){this.loading||(this.loading=!0,this.error="",this.movieService.getAnimeMovies(this.currentPage).pipe((0,_.j)(()=>{this.loading=!1})).subscribe({next:n=>{this.movies=1===this.currentPage?n.items:[...this.movies,...n.items],this.hasMorePages=this.currentPage<n.pagination.totalPages},error:n=>{this.error="Failed to load anime. Please try again later.",console.error("Error loading anime:",n)}}))}loadMore(){!this.loading&&this.hasMorePages&&(this.currentPage++,this.loadMovies())}getPrimaryCategory(n){return n.category?.[0]?.name||""}getSecondaryCategory(n){return n.category?.[1]?.name||null}hasCategories(n){return!!n.category&&n.category.length>0}hasMultipleCategories(n){return!!n.category&&n.category.length>1}static \u0275fac=function(h){return new(h||o)(e.rXU(u.W))};static \u0275cmp=e.VBU({type:o,selectors:[["app-anime-movies"]],standalone:!0,features:[e.aNF],decls:13,vars:5,consts:[[1,"min-h-screen","bg-white","dark:bg-[#141414]","text-gray-900","dark:text-white"],[1,"container","mx-auto","px-4"],[1,"py-8"],[1,"text-4xl","font-bold","mb-2"],[1,"text-gray-600","dark:text-gray-400"],["class","bg-red-50 dark:bg-red-500/10 border border-red-500 text-red-600 dark:text-red-500 p-4 rounded-lg mb-6",4,"ngIf"],[1,"grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-4"],["class","group cursor-pointer transition-transform hover:scale-105",3,"routerLink",4,"ngFor","ngForOf"],["class","py-8 text-center",4,"ngIf"],["class","text-center text-gray-600 dark:text-gray-400 py-8",4,"ngIf"],[1,"bg-red-50","dark:bg-red-500/10","border","border-red-500","text-red-600","dark:text-red-500","p-4","rounded-lg","mb-6"],[1,"group","cursor-pointer","transition-transform","hover:scale-105",3,"routerLink"],[1,"relative","overflow-hidden","rounded-lg","shadow-lg","bg-gray-100","dark:bg-gray-800"],["loading","lazy",1,"w-full","aspect-[2/3]","object-cover",3,"src","alt"],[1,"absolute","inset-0","bg-gradient-to-t","from-black/90","via-black/50","to-transparent","opacity-0","group-hover:opacity-100","transition-opacity","duration-300","flex","flex-col","justify-end","p-3"],[1,"text-white","text-sm","font-semibold","line-clamp-2"],[1,"text-gray-300","text-xs","line-clamp-1","mt-1"],[1,"flex","items-center","gap-2","mt-2"],[1,"text-xs","px-2","py-0.5","bg-red-600","text-white","rounded"],["class","text-xs px-2 py-0.5 bg-blue-600 text-white rounded",4,"ngIf"],["class","absolute top-2 right-2 px-2 py-0.5 bg-red-600 text-white rounded text-xs",4,"ngIf"],[1,"text-xs","px-2","py-0.5","bg-blue-600","text-white","rounded"],[1,"absolute","top-2","right-2","px-2","py-0.5","bg-red-600","text-white","rounded","text-xs"],[1,"py-8","text-center"],[1,"bg-red-600","hover:bg-red-700","text-white","font-medium","px-6","py-2","rounded","transition-colors",3,"click"],[1,"text-center","text-gray-600","dark:text-gray-400","py-8"]],template:function(h,d){1&h&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e.EFF(4,"Anime"),e.k0s(),e.j41(5,"p",4),e.EFF(6,"Latest anime series and movies"),e.k0s()(),e.DNE(7,a,2,1,"div",5),e.j41(8,"div",6),e.DNE(9,v,13,10,"div",7),e.k0s(),e.DNE(10,f,2,0,"div",8)(11,y,3,0,"div",8)(12,b,2,0,"div",9),e.k0s()()),2&h&&(e.R7$(7),e.Y8G("ngIf",d.error),e.R7$(2),e.Y8G("ngForOf",d.movies),e.R7$(),e.Y8G("ngIf",d.loading),e.R7$(),e.Y8G("ngIf",!d.loading&&!d.error&&d.hasMorePages),e.R7$(),e.Y8G("ngIf",!d.loading&&!d.error&&0===d.movies.length))},dependencies:[s.MD,s.Sq,s.bT,l.iI,l.Wk,c.N],styles:['@charset "UTF-8";.movie-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1rem;padding:2rem 0}.movie-card[_ngcontent-%COMP%]{position:relative;transition:all .3s ease;border-radius:.375rem;overflow:hidden}.movie-card[_ngcontent-%COMP%]:hover{transform:scale(1.05);z-index:10}.movie-card[_ngcontent-%COMP%]:hover   .movie-info[_ngcontent-%COMP%]{opacity:1}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]{position:relative;padding-top:150%;background:#141414}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]   .quality-badge[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem;background:#e50914e6;color:#fff;padding:.25rem .5rem;border-radius:.25rem;font-size:.75rem;font-weight:600;z-index:1}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]   .episode-badge[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:.5rem;background:linear-gradient(0deg,#000000e6,#0000);color:#fff;font-size:.75rem;font-weight:500;text-align:center;z-index:1}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]   .episode-badge[_ngcontent-%COMP%]:before{content:"Episode ";opacity:.7}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:1rem;background:linear-gradient(0deg,#000000e6,#000000b3 70%,#0000);opacity:0;transition:opacity .3s ease;color:#fff}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin-bottom:.25rem;line-height:1.2}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-style:italic;opacity:.8}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:#d1d5db;margin-top:.5rem}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child):after{content:"\\2022";margin-left:.5rem}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]{margin-top:.5rem;font-size:.875rem;color:#9ca3af}h1[_ngcontent-%COMP%]{background:linear-gradient(to right,#e50914,#ff5f59);-webkit-background-clip:text;color:transparent;display:inline-block;letter-spacing:-.5px}']})}return o})()},3551:(M,p,r)=>{r.d(p,{N:()=>l});var s=r(4438);let l=(()=>{class c{static \u0275fac=function(u){return new(u||c)};static \u0275cmp=s.VBU({type:c,selectors:[["app-loading-spinner"]],standalone:!0,features:[s.aNF],decls:2,vars:0,consts:[[1,"flex","justify-center","items-center","py-8"],[1,"animate-spin","rounded-full","h-12","w-12","border-t-2","border-b-2","border-accent"]],template:function(u,t){1&u&&(s.j41(0,"div",0),s.nrm(1,"div",1),s.k0s())},encapsulation:2})}return c})()},3498:(M,p,r)=>{r.d(p,{W:()=>_});var s=r(6354),l=r(4438),c=r(1626);let _=(()=>{class e{http;baseUrl="https://phimapi.com";constructor(t){this.http=t}imageBaseUrl="https://phimimg.com";addImageBaseUrl(t){return t&&(t.startsWith("http")?t:`${this.imageBaseUrl}/${t}`)}transformResponse(t,a){if(a){const i=t;if("success"!==i.status)throw new Error(i.msg||"API returned unsuccessful status");if(!i.data?.items)throw new Error("No items found in response");return{items:i.data.items.map(g=>({...g,poster_url:this.addImageBaseUrl(g.poster_url),thumb_url:this.addImageBaseUrl(g.thumb_url)})),pagination:i.data.params.pagination}}{const i=t;if(!i.status)throw new Error("API returned unsuccessful status");if(!i.items)throw new Error("No items found in response");return{items:i.items.map(g=>({...g,poster_url:this.addImageBaseUrl(g.poster_url),thumb_url:this.addImageBaseUrl(g.thumb_url)})),pagination:i.pagination}}}isV1Endpoint(t){return t.includes("/v1/api/")}makeRequest(t,a={}){const i=`${this.baseUrl}${t}`,g=this.isV1Endpoint(t),v={...a};return this.http.get(i,{params:v}).pipe((0,s.T)(f=>this.transformResponse(f,g)))}getLatestMovies(t=1){return this.makeRequest("/danh-sach/phim-moi-cap-nhat",{page:t.toString()})}getMoviesByCategory(t,a=1){return this.makeRequest(`/danh-sach/the-loai/${t}`,{page:a.toString()})}getMoviesByCountry(t,a=1){return this.makeRequest(`/v1/api/danh-sach/quoc-gia/${t}`,{page:a.toString()})}getMovieDetails(t){return this.http.get(`${this.baseUrl}/phim/${t}`).pipe((0,s.T)(i=>{if(!i.status)throw new Error(i.msg||"Failed to fetch movie details");return{...i,movie:{...i.movie,poster_url:this.addImageBaseUrl(i.movie.poster_url),thumb_url:this.addImageBaseUrl(i.movie.thumb_url)}}}))}getTrendingMovies(t=1){return this.makeRequest("/v1/api/danh-sach/tv-shows",{page:t.toString()})}getSingleMovies(t=1){return this.makeRequest("/v1/api/danh-sach/phim-le",{page:t.toString()})}getSeriesMovies(t=1){return this.makeRequest("/v1/api/danh-sach/phim-bo",{page:t.toString()})}getAnimeMovies(t=1){return this.makeRequest("/v1/api/danh-sach/hoat-hinh",{page:t.toString()})}getCategories(){return this.http.get(`${this.baseUrl}/the-loai`)}getCountries(){return this.http.get(`${this.baseUrl}/quoc-gia`)}searchMovies(t){const i={};return t.keyword&&(i.keyword=t.keyword),t.page&&(i.page=t.page.toString()),t.sort_field&&(i.sort_field=t.sort_field),t.sort_type&&(i.sort_type=t.sort_type),t.sort_lang&&(i.sort_lang=t.sort_lang),t.category&&(i.category=t.category),t.country&&(i.country=t.country),t.year&&(i.year=t.year.toString()),t.limit&&(i.limit=t.limit.toString()),this.makeRequest("/v1/api/tim-kiem",i)}static \u0275fac=function(a){return new(a||e)(l.KVO(c.Qq))};static \u0275prov=l.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);