"use strict";(self.webpackChunkfilm_web=self.webpackChunkfilm_web||[]).push([[357],{6357:(O,s,i)=>{i.r(s),i.d(s,{SingleMoviesComponent:()=>P});var c=i(7771),g=i(177),d=i(3128),l=i(3551),p=i(2601),e=i(4438),m=i(3498);const _=t=>["/phim",t];function v(t,r){if(1&t&&(e.j41(0,"div",9),e.EFF(1),e.k0s()),2&t){const n=e.XpG();e.R7$(),e.SpI(" ",n.error," ")}}function f(t,r){if(1&t&&(e.j41(0,"span",20),e.EFF(1),e.k0s()),2&t){const n=e.XpG().$implicit;e.R7$(),e.SpI(" ",n.quality," ")}}function u(t,r){if(1&t&&(e.j41(0,"div",21),e.EFF(1),e.k0s()),2&t){const n=e.XpG().$implicit;e.R7$(),e.SpI(" T\u1eadp ",n.episode_current," ")}}function M(t,r){if(1&t&&(e.j41(0,"div",10)(1,"div",11),e.nrm(2,"img",12),e.j41(3,"div",13)(4,"h3",14),e.EFF(5),e.k0s(),e.j41(6,"h4",15),e.EFF(7),e.k0s(),e.j41(8,"div",16)(9,"span",17),e.EFF(10),e.k0s(),e.DNE(11,f,2,1,"span",18),e.k0s()(),e.DNE(12,u,2,1,"div",19),e.k0s()()),2&t){const n=r.$implicit;e.Y8G("routerLink",e.eq3(8,_,n.slug)),e.R7$(2),e.Y8G("src",n.poster_url,e.B4B)("alt",n.name),e.R7$(3),e.JRh(n.name),e.R7$(2),e.JRh(n.origin_name),e.R7$(3),e.JRh(n.year),e.R7$(),e.Y8G("ngIf",n.quality),e.R7$(),e.Y8G("ngIf",n.episode_current)}}function h(t,r){1&t&&(e.j41(0,"div",22),e.nrm(1,"app-loading-spinner"),e.k0s())}function C(t,r){if(1&t){const n=e.RV6();e.j41(0,"app-pagination",23),e.bIt("pageChange",function(o){e.eBV(n);const b=e.XpG();return e.Njj(b.onPageChange(o))}),e.k0s()}if(2&t){const n=e.XpG();e.Y8G("currentPage",n.currentPage)("totalPages",n.totalPages)}}function x(t,r){1&t&&(e.j41(0,"div",24),e.EFF(1," No movies found. "),e.k0s())}let P=(()=>{class t extends c.z{constructor(n){super(n),this.pageTitle="Movies"}getMovies(n){return this.movieService.getSingleMovies(n)}static \u0275fac=function(a){return new(a||t)(e.rXU(m.W))};static \u0275cmp=e.VBU({type:t,selectors:[["app-single-movies"]],standalone:!0,features:[e.Vt3,e.aNF],decls:10,vars:6,consts:[[1,"min-h-screen","bg-gray-50","dark:bg-[#141414]","text-gray-900","dark:text-white"],[1,"container","mx-auto","px-4"],[1,"text-3xl","font-bold","py-8"],["class","bg-red-50 dark:bg-red-500/10 border border-red-500 text-red-600 dark:text-red-500 p-4 rounded-lg mb-6",4,"ngIf"],[1,"grid","grid-cols-2","sm:grid-cols-3","md:grid-cols-4","lg:grid-cols-5","gap-4"],["class","group cursor-pointer transition-transform hover:scale-105",3,"routerLink",4,"ngFor","ngForOf"],["class","py-8 text-center",4,"ngIf"],[3,"currentPage","totalPages","pageChange",4,"ngIf"],["class","text-center text-gray-600 dark:text-gray-400 py-8",4,"ngIf"],[1,"bg-red-50","dark:bg-red-500/10","border","border-red-500","text-red-600","dark:text-red-500","p-4","rounded-lg","mb-6"],[1,"group","cursor-pointer","transition-transform","hover:scale-105",3,"routerLink"],[1,"relative","overflow-hidden","rounded-lg","shadow-lg","bg-white","dark:bg-gray-800"],["loading","lazy",1,"w-full","aspect-[2/3]","object-cover",3,"src","alt"],[1,"absolute","inset-0","bg-gradient-to-t","from-black/90","via-black/50","to-transparent","opacity-0","group-hover:opacity-100","transition-opacity","duration-300","flex","flex-col","justify-end","p-3"],[1,"text-white","text-sm","font-semibold","line-clamp-2"],[1,"text-gray-300","text-xs","line-clamp-1","mt-1"],[1,"flex","items-center","gap-2","mt-2"],[1,"text-xs","px-2","py-0.5","bg-red-600","text-white","rounded"],["class","text-xs px-2 py-0.5 bg-blue-600 text-white rounded",4,"ngIf"],["class","absolute top-2 right-2 px-2 py-0.5 bg-red-600 text-white rounded text-xs",4,"ngIf"],[1,"text-xs","px-2","py-0.5","bg-blue-600","text-white","rounded"],[1,"absolute","top-2","right-2","px-2","py-0.5","bg-red-600","text-white","rounded","text-xs"],[1,"py-8","text-center"],[3,"pageChange","currentPage","totalPages"],[1,"text-center","text-gray-600","dark:text-gray-400","py-8"]],template:function(a,o){1&a&&(e.j41(0,"div",0)(1,"div",1)(2,"h1",2),e.EFF(3),e.k0s(),e.DNE(4,v,2,1,"div",3),e.j41(5,"div",4),e.DNE(6,M,13,10,"div",5),e.k0s(),e.DNE(7,h,2,0,"div",6)(8,C,1,2,"app-pagination",7)(9,x,2,0,"div",8),e.k0s()()),2&a&&(e.R7$(3),e.JRh(o.pageTitle),e.R7$(),e.Y8G("ngIf",o.error),e.R7$(2),e.Y8G("ngForOf",o.movies),e.R7$(),e.Y8G("ngIf",o.loading),e.R7$(),e.Y8G("ngIf",!o.loading&&!o.error&&o.movies.length>0),e.R7$(),e.Y8G("ngIf",!o.loading&&!o.error&&0===o.movies.length))},dependencies:[g.MD,g.Sq,g.bT,d.iI,d.Wk,l.N,p.e],styles:['@charset "UTF-8";.movie-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1rem;padding:2rem 0}.movie-card[_ngcontent-%COMP%]{position:relative;transition:all .3s ease;border-radius:.375rem;overflow:hidden}.movie-card[_ngcontent-%COMP%]:hover{transform:scale(1.05);z-index:10}.movie-card[_ngcontent-%COMP%]:hover   .movie-info[_ngcontent-%COMP%]{opacity:1}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]{position:relative;padding-top:150%;background:#141414}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.movie-card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]   .quality-badge[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem;background:#e50914e6;color:#fff;padding:.25rem .5rem;border-radius:.25rem;font-size:.75rem;font-weight:600;z-index:1}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:1rem;background:linear-gradient(0deg,#000000e6,#000000b3 70%,#0000);opacity:0;transition:opacity .3s ease;color:#fff}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin-bottom:.5rem;line-height:1.2}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:#d1d5db}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child):after{content:"\\2022";margin-left:.5rem}.movie-card[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]{margin-top:.5rem;font-size:.875rem;color:#9ca3af}h1[_ngcontent-%COMP%]{background:linear-gradient(to right,#e50914,#ff5f59);-webkit-background-clip:text;color:transparent;display:inline-block;letter-spacing:-.5px}']})}return t})()}}]);