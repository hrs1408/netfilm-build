"use strict";(self.webpackChunkfilm_web=self.webpackChunkfilm_web||[]).push([[617],{1617:(R,c,s)=>{s.r(c),s.d(c,{MovieListComponent:()=>F});var g=s(177),l=s(3128),p=s(7771),_=s(3551),u=s(2601),d=s(6977),e=s(4438),m=s(3498);const v=n=>["/phim",n];function f(n,r){if(1&n){const t=e.RV6();e.j41(0,"button",17),e.bIt("click",function(){const o=e.eBV(t).$implicit,a=e.XpG(2);return e.Njj(a.selectCategory(o.slug))}),e.EFF(1),e.k0s()}if(2&n){const t=r.$implicit,i=e.XpG(2);e.AVh("bg-red-600",i.selectedCategory===t.slug)("text-white",i.selectedCategory===t.slug)("bg-gray-100",i.selectedCategory!==t.slug)("dark:bg-gray-800",i.selectedCategory!==t.slug),e.R7$(),e.SpI(" ",t.name," ")}}function y(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",16)(1,"button",17),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.selectCategory(null))}),e.EFF(2," All Categories "),e.k0s(),e.DNE(3,f,2,9,"button",18),e.k0s()}if(2&n){const t=e.XpG();e.R7$(),e.AVh("bg-red-600",!t.selectedCategory)("text-white",!t.selectedCategory)("bg-gray-100",t.selectedCategory)("dark:bg-gray-800",t.selectedCategory),e.R7$(2),e.Y8G("ngForOf",t.categories)}}function h(n,r){if(1&n){const t=e.RV6();e.j41(0,"button",17),e.bIt("click",function(){const o=e.eBV(t).$implicit,a=e.XpG(2);return e.Njj(a.selectCountry(o.slug))}),e.EFF(1),e.k0s()}if(2&n){const t=r.$implicit,i=e.XpG(2);e.AVh("bg-red-600",i.selectedCountry===t.slug)("text-white",i.selectedCountry===t.slug)("bg-gray-100",i.selectedCountry!==t.slug)("dark:bg-gray-800",i.selectedCountry!==t.slug),e.R7$(),e.SpI(" ",t.name," ")}}function C(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",16)(1,"button",17),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.selectCountry(null))}),e.EFF(2," All Countries "),e.k0s(),e.DNE(3,h,2,9,"button",18),e.k0s()}if(2&n){const t=e.XpG();e.R7$(),e.AVh("bg-red-600",!t.selectedCountry)("text-white",!t.selectedCountry)("bg-gray-100",t.selectedCountry)("dark:bg-gray-800",t.selectedCountry),e.R7$(2),e.Y8G("ngForOf",t.countries)}}function b(n,r){if(1&n&&(e.j41(0,"div",19),e.EFF(1),e.k0s()),2&n){const t=e.XpG();e.R7$(),e.SpI(" ",t.error," ")}}function x(n,r){if(1&n&&(e.j41(0,"span",30),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.SpI(" ",t.quality," ")}}function M(n,r){if(1&n&&(e.j41(0,"div",31),e.EFF(1),e.k0s()),2&n){const t=e.XpG().$implicit;e.R7$(),e.SpI(" T\u1eadp ",t.episode_current," ")}}function k(n,r){if(1&n&&(e.j41(0,"div",20)(1,"div",21),e.nrm(2,"img",22),e.j41(3,"div",23)(4,"h3",24),e.EFF(5),e.k0s(),e.j41(6,"h4",25),e.EFF(7),e.k0s(),e.j41(8,"div",26)(9,"span",27),e.EFF(10),e.k0s(),e.DNE(11,x,2,1,"span",28),e.k0s()(),e.DNE(12,M,2,1,"div",29),e.k0s()()),2&n){const t=r.$implicit;e.Y8G("routerLink",e.eq3(8,v,t.slug)),e.R7$(2),e.Y8G("src",t.poster_url,e.B4B)("alt",t.name),e.R7$(3),e.JRh(t.name),e.R7$(2),e.JRh(t.origin_name),e.R7$(3),e.JRh(t.year),e.R7$(),e.Y8G("ngIf",t.quality),e.R7$(),e.Y8G("ngIf",t.episode_current)}}function P(n,r){1&n&&(e.j41(0,"div",32),e.nrm(1,"app-loading-spinner"),e.k0s())}function E(n,r){if(1&n){const t=e.RV6();e.j41(0,"app-pagination",33),e.bIt("pageChange",function(o){e.eBV(t);const a=e.XpG();return e.Njj(a.onPageChange(o))}),e.k0s()}if(2&n){const t=e.XpG();e.Y8G("currentPage",t.currentPage)("totalPages",t.totalPages)}}function O(n,r){1&n&&(e.j41(0,"div",34),e.EFF(1," No movies found. "),e.k0s())}let F=(()=>{class n extends p.z{categories=[];countries=[];selectedCategory=null;selectedCountry=null;constructor(t){super(t),this.pageTitle="Discover Movies & TV Shows"}ngOnInit(){super.ngOnInit(),this.loadCategories(),this.loadCountries()}loadCategories(){this.movieService.getCategories().pipe((0,d.Q)(this.destroy$)).subscribe({next:t=>{this.categories=t},error:t=>{console.error("Error loading categories:",t)}})}loadCountries(){this.movieService.getCountries().pipe((0,d.Q)(this.destroy$)).subscribe({next:t=>{this.countries=t},error:t=>{console.error("Error loading countries:",t)}})}selectCategory(t){this.selectedCategory=t,this.currentPage=1,this.loadMovies(1)}selectCountry(t){this.selectedCountry=t,this.currentPage=1,this.loadMovies(1)}getMovies(t){return this.selectedCategory&&this.selectedCountry?this.movieService.getMoviesByCategoryAndCountry(this.selectedCategory,this.selectedCountry,t):this.selectedCategory?this.movieService.getMoviesByCategory(this.selectedCategory,t):this.selectedCountry?this.movieService.getMoviesByCountry(this.selectedCountry,t):this.movieService.getLatestMovies(t)}static \u0275fac=function(i){return new(i||n)(e.rXU(m.W))};static \u0275cmp=e.VBU({type:n,selectors:[["app-movie-list"]],standalone:!0,features:[e.Vt3,e.aNF],decls:22,vars:8,consts:[[1,"min-h-screen","bg-gray-50","dark:bg-[#141414]","text-gray-900","dark:text-white"],[1,"container","mx-auto","px-4"],[1,"text-3xl","font-bold","py-8"],[1,"flex","flex-wrap","gap-4","mb-8"],["routerLink","/trending",1,"px-4","py-2","bg-red-600","hover:bg-red-700","text-white","rounded-full","transition-colors"],["routerLink","/movies",1,"px-4","py-2","bg-gray-100","dark:bg-gray-800","hover:bg-gray-200","dark:hover:bg-gray-700","rounded-full","transition-colors"],["routerLink","/series",1,"px-4","py-2","bg-gray-100","dark:bg-gray-800","hover:bg-gray-200","dark:hover:bg-gray-700","rounded-full","transition-colors"],["routerLink","/anime",1,"px-4","py-2","bg-gray-100","dark:bg-gray-800","hover:bg-gray-200","dark:hover:bg-gray-700","rounded-full","transition-colors"],[1,"mb-8","space-y-4"],["class","flex flex-wrap gap-2",4,"ngIf"],["class","bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6",4,"ngIf"],[1,"grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-4"],["class","group cursor-pointer transition-transform hover:scale-105",3,"routerLink",4,"ngFor","ngForOf"],["class","py-8 text-center",4,"ngIf"],[3,"currentPage","totalPages","pageChange",4,"ngIf"],["class","text-center text-light-text dark:text-gray-400 py-8",4,"ngIf"],[1,"flex","flex-wrap","gap-2"],[1,"px-3","py-1.5","text-sm","rounded-md","transition-colors",3,"click"],["class","px-3 py-1.5 text-sm rounded-md transition-colors",3,"bg-red-600","text-white","bg-gray-100","dark:bg-gray-800","click",4,"ngFor","ngForOf"],[1,"bg-red-500/10","border","border-red-500","text-red-500","p-4","rounded-lg","mb-6"],[1,"group","cursor-pointer","transition-transform","hover:scale-105",3,"routerLink"],[1,"relative","overflow-hidden","rounded-lg","shadow-lg","bg-light-card","dark:bg-dark-card"],["loading","lazy",1,"w-full","aspect-[2/3]","object-cover",3,"src","alt"],[1,"absolute","inset-0","bg-gradient-to-t","from-black/90","via-black/50","to-transparent","opacity-0","group-hover:opacity-100","transition-opacity","duration-300","flex","flex-col","justify-end","p-3"],[1,"text-white","text-sm","font-semibold","line-clamp-2"],[1,"text-gray-300","text-xs","line-clamp-1","mt-1"],[1,"flex","items-center","gap-2","mt-2"],[1,"text-xs","px-2","py-0.5","bg-red-600","text-white","rounded"],["class","text-xs px-2 py-0.5 bg-blue-600 text-white rounded",4,"ngIf"],["class","absolute top-2 right-2 px-2 py-0.5 bg-red-600 text-white rounded text-xs",4,"ngIf"],[1,"text-xs","px-2","py-0.5","bg-blue-600","text-white","rounded"],[1,"absolute","top-2","right-2","px-2","py-0.5","bg-red-600","text-white","rounded","text-xs"],[1,"py-8","text-center"],[3,"pageChange","currentPage","totalPages"],[1,"text-center","text-light-text","dark:text-gray-400","py-8"]],template:function(i,o){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"h1",2),e.EFF(3),e.k0s(),e.j41(4,"div",3)(5,"a",4),e.EFF(6," Trending "),e.k0s(),e.j41(7,"a",5),e.EFF(8," Movies "),e.k0s(),e.j41(9,"a",6),e.EFF(10," TV Series "),e.k0s(),e.j41(11,"a",7),e.EFF(12," Anime "),e.k0s()(),e.j41(13,"div",8),e.DNE(14,y,4,9,"div",9)(15,C,4,9,"div",9),e.k0s(),e.DNE(16,b,2,1,"div",10),e.j41(17,"div",11),e.DNE(18,k,13,10,"div",12),e.k0s(),e.DNE(19,P,2,0,"div",13)(20,E,1,2,"app-pagination",14)(21,O,2,0,"div",15),e.k0s()()),2&i&&(e.R7$(3),e.JRh(o.pageTitle),e.R7$(11),e.Y8G("ngIf",o.categories.length>0),e.R7$(),e.Y8G("ngIf",o.countries.length>0),e.R7$(),e.Y8G("ngIf",o.error),e.R7$(2),e.Y8G("ngForOf",o.movies),e.R7$(),e.Y8G("ngIf",o.loading),e.R7$(),e.Y8G("ngIf",!o.loading&&!o.error&&o.movies.length>0),e.R7$(),e.Y8G("ngIf",!o.loading&&!o.error&&0===o.movies.length))},dependencies:[g.MD,g.Sq,g.bT,l.iI,l.Wk,_.N,u.e],styles:['.movie-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1rem;padding:2rem 0}.movie-card[_ngcontent-%COMP%]{position:relative;transition:all .3s ease;border-radius:.375rem;overflow:hidden;background:#1f1f1f}.movie-card[_ngcontent-%COMP%]:hover{transform:scale(1.05);z-index:10}.movie-card[_ngcontent-%COMP%]:hover   .movie-info[_ngcontent-%COMP%]{opacity:1}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]{position:relative;padding-top:150%;background:#141414}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:1rem;background:linear-gradient(0deg,#000000f2,#000c 70%,#0000);opacity:0;transition:opacity .3s ease;color:#fff}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin-bottom:.25rem;line-height:1.2}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:.75rem;color:#d1d5db;margin-top:.5rem}button[_ngcontent-%COMP%]{transition:all .2s ease;min-width:2.5rem;height:2.5rem;display:inline-flex;align-items:center;justify-content:center;font-weight:500}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}button[_ngcontent-%COMP%]:not(:disabled):hover{background:#e50914;transform:scale(1.05)}button.bg-red-600[_ngcontent-%COMP%]{background:#e50914}button.bg-red-600[_ngcontent-%COMP%]:hover{background:#cc0812}.movie-poster[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);animation:_ngcontent-%COMP%_shimmer 1.5s infinite}@keyframes _ngcontent-%COMP%_shimmer{0%{transform:translate(-100%)}to{transform:translate(100%)}}']})}return n})()}}]);