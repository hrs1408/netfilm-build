"use strict";(self.webpackChunkfilm_web=self.webpackChunkfilm_web||[]).push([[405],{2405:(D,_,s)=>{s.r(_),s.d(_,{SearchResultsComponent:()=>G});var u=s(177),l=s(788),h=s(7771),b=s(3551),v=s(2601),g=s(6977);const C={languages:[{value:"vietsub",label:"Vietsub"},{value:"thuyet-minh",label:"Thuy\u1ebft Minh"},{value:"long-tieng",label:"L\u1ed3ng Ti\u1ebfng"}],sortFields:[{value:"modified.time",label:"Th\u1eddi gian c\u1eadp nh\u1eadt"},{value:"_id",label:"ID phim"},{value:"year",label:"N\u0103m ph\xe1t h\xe0nh"}],sortTypes:[{value:"desc",label:"Gi\u1ea3m d\u1ea7n"},{value:"asc",label:"T\u0103ng d\u1ea7n"}],categories:[],countries:[],years:Array.from({length:(new Date).getFullYear()-1969},(n,r)=>1970+r).reverse()};var p=s(7408),t=s(4438),y=s(3498);const d=(n,r)=>r.value,m=(n,r)=>r._id,M=n=>["/phim",n];function f(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.value),t.R7$(),t.JRh(e.label)}}function P(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.value),t.R7$(),t.JRh(e.label)}}function O(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.value),t.R7$(),t.JRh(e.label)}}function w(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e),t.R7$(),t.JRh(e)}}function x(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.slug),t.R7$(),t.JRh(e.name)}}function k(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.slug),t.R7$(),t.JRh(e.name)}}function R(n,r){1&n&&(t.j41(0,"div",9),t.nrm(1,"app-loading-spinner"),t.k0s())}function F(n,r){1&n&&(t.j41(0,"div",10),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&n&&(t.R7$(),t.JRh(t.bMT(2,1,"common.errors.genericError")))}function $(n,r){if(1&n&&(t.j41(0,"span",12),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.Lme("",e.totalItems," ",t.bMT(2,2,"common.resultsFound"),"")}}function T(n,r){if(1&n&&(t.j41(0,"span",19),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit;t.R7$(),t.SpI(" ",e.quality," ")}}function j(n,r){if(1&n&&(t.j41(0,"p",21),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.origin_name)}}function S(n,r){if(1&n&&(t.j41(0,"a",15)(1,"div",17),t.nrm(2,"img",18),t.DNE(3,T,2,1,"span",19),t.k0s(),t.j41(4,"h3",20),t.EFF(5),t.k0s(),t.DNE(6,j,2,1,"p",21),t.k0s()),2&n){const e=r.$implicit;t.Y8G("routerLink",t.eq3(6,M,e.slug)),t.R7$(2),t.Y8G("src",e.poster_url,t.B4B)("alt",e.name),t.R7$(),t.vxM(e.quality?3:-1),t.R7$(2),t.JRh(e.name),t.R7$(),t.vxM(e.origin_name?6:-1)}}function I(n,r){if(1&n){const e=t.RV6();t.j41(0,"div",16)(1,"app-pagination",22),t.bIt("pageChange",function(o){t.eBV(e);const i=t.XpG(3);return t.Njj(i.onPageChange(o))}),t.k0s()()}if(2&n){const e=t.XpG(3);t.R7$(),t.Y8G("currentPage",e.currentPage)("totalPages",e.totalPages)}}function E(n,r){if(1&n&&(t.j41(0,"div",14),t.Z7z(1,S,7,8,"a",15,m),t.k0s(),t.DNE(3,I,2,2,"div",16)),2&n){const e=t.XpG(2);t.R7$(),t.Dyx(e.movies),t.R7$(2),t.vxM(e.movies.length>0&&e.totalPages>1?3:-1)}}function Y(n,r){1&n&&(t.j41(0,"div",13)(1,"p"),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.j41(4,"p"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()),2&n&&(t.R7$(2),t.JRh(t.bMT(3,2,"common.noMoviesFound")),t.R7$(3),t.JRh(t.bMT(6,4,"common.filters.tryAgain")))}function J(n,r){if(1&n&&(t.j41(0,"div",11)(1,"h1"),t.EFF(2),t.k0s(),t.DNE(3,$,3,4,"span",12),t.k0s(),t.DNE(4,E,4,1)(5,Y,7,6,"div",13)),2&n){const e=t.XpG();t.R7$(2),t.JRh(e.pageTitle),t.R7$(),t.vxM(e.movies.length>0?3:-1),t.R7$(),t.vxM(e.movies.length>0?4:5)}}let G=(()=>{class n extends h.z{movieService;route;router;translate;categories=[];countries=[];filterOptions=C;currentParams={};totalItems=0;constructor(e,a,o,i){super(e,i),this.movieService=e,this.route=a,this.router=o,this.translate=i}ngOnInit(){this.loadFilterOptions(),this.route.queryParams.pipe((0,g.Q)(this.destroy$)).subscribe({next:e=>{this.currentParams={keyword:e.q,page:e.page?Number(e.page):1,sort_field:e.sort_field,sort_type:e.sort_type,sort_lang:e.sort_lang,category:e.category,country:e.country,year:e.year?Number(e.year):void 0,limit:21},this.currentParams.keyword?(this.translate.get("search.searchResultsFor",{keyword:this.currentParams.keyword}).subscribe(a=>{this.pageTitle=a}),this.loadMovies(this.currentParams.page||1)):(this.translate.get("common.noMoviesFound").subscribe(a=>{this.error=a}),this.movies=[])},error:e=>{console.error("Error processing query parameters:",e),this.translate.get("common.noMoviesFound").subscribe(a=>{this.error=a})}})}loadFilterOptions(){this.movieService.getCategories().pipe((0,g.Q)(this.destroy$)).subscribe({next:e=>{console.log("Categories loaded:",e),this.categories=e,this.filterOptions={...this.filterOptions,categories:e}},error:e=>{console.error("Failed to load categories:",e),this.categories=[]}}),this.movieService.getCountries().pipe((0,g.Q)(this.destroy$)).subscribe({next:e=>{console.log("Countries loaded:",e),this.countries=e,this.filterOptions={...this.filterOptions,countries:e}},error:e=>{console.error("Failed to load countries:",e),this.countries=[]}})}getMovies(e){return this.movieService.searchMovies({...this.currentParams,page:e})}updateFilters(e,a=!0){const o={...this.currentParams,...e};a&&!("page"in e)&&(o.page=1);const i={q:o.keyword,page:o.page?.toString(),sort_field:o.sort_field,sort_type:o.sort_type,sort_lang:o.sort_lang,category:o.category,country:o.country,year:o.year?.toString()};Object.keys(i).forEach(c=>{void 0===i[c]&&delete i[c]}),this.router.navigate([],{relativeTo:this.route,queryParams:i,replaceUrl:!0})}handleSelectChange(e,a){let i=e.target.value;"year"===a?i=i?Number(i):void 0:i||(i=void 0),this.updateFilters({[a]:i},!0)}onPageChange(e){this.updateFilters({page:e},!1)}static \u0275fac=function(a){return new(a||n)(t.rXU(y.W),t.rXU(l.nX),t.rXU(l.Ix),t.rXU(p.c$))};static \u0275cmp=t.VBU({type:n,selectors:[["app-search-results"]],standalone:!0,features:[t.Vt3,t.aNF],decls:71,vars:46,consts:[[1,"container","mx-auto","px-4","py-8"],[1,"filter-section","mb-8","p-6","rounded-lg"],[1,"section-header"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-4","gap-6"],[1,"filter-group"],[1,"filter-select",3,"change","value"],["value",""],[3,"value"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6","mt-6"],[1,"loading-state"],[1,"error-state"],[1,"results-header"],[1,"results-count"],[1,"empty-state"],[1,"movies-grid"],[1,"movie-card",3,"routerLink"],[1,"pagination"],[1,"movie-image"],["loading","lazy",3,"src","alt"],[1,"quality-badge"],[1,"movie-title"],[1,"movie-original-title"],[3,"pageChange","currentPage","totalPages"]],template:function(a,o){1&a&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.j41(6,"p"),t.EFF(7),t.nI1(8,"translate"),t.k0s()(),t.j41(9,"div",3)(10,"div",4)(11,"label"),t.EFF(12),t.nI1(13,"translate"),t.k0s(),t.j41(14,"select",5),t.bIt("change",function(c){return o.handleSelectChange(c,"sort_field")}),t.j41(15,"option",6),t.EFF(16),t.nI1(17,"translate"),t.k0s(),t.Z7z(18,f,2,2,"option",7,d),t.k0s()(),t.j41(20,"div",4)(21,"label"),t.EFF(22),t.nI1(23,"translate"),t.k0s(),t.j41(24,"select",5),t.bIt("change",function(c){return o.handleSelectChange(c,"sort_type")}),t.Z7z(25,P,2,2,"option",7,d),t.k0s()(),t.j41(27,"div",4)(28,"label"),t.EFF(29),t.nI1(30,"translate"),t.k0s(),t.j41(31,"select",5),t.bIt("change",function(c){return o.handleSelectChange(c,"sort_lang")}),t.j41(32,"option",6),t.EFF(33),t.nI1(34,"translate"),t.k0s(),t.Z7z(35,O,2,2,"option",7,d),t.k0s()(),t.j41(37,"div",4)(38,"label"),t.EFF(39),t.nI1(40,"translate"),t.k0s(),t.j41(41,"select",5),t.bIt("change",function(c){return o.handleSelectChange(c,"year")}),t.j41(42,"option",6),t.EFF(43),t.nI1(44,"translate"),t.k0s(),t.Z7z(45,w,2,2,"option",7,t.fX1),t.k0s()()(),t.j41(47,"div",8)(48,"div",4)(49,"label"),t.EFF(50),t.nI1(51,"translate"),t.k0s(),t.j41(52,"select",5),t.bIt("change",function(c){return o.handleSelectChange(c,"category")}),t.j41(53,"option",6),t.EFF(54),t.nI1(55,"translate"),t.k0s(),t.Z7z(56,x,2,2,"option",7,m),t.k0s()(),t.j41(58,"div",4)(59,"label"),t.EFF(60),t.nI1(61,"translate"),t.k0s(),t.j41(62,"select",5),t.bIt("change",function(c){return o.handleSelectChange(c,"country")}),t.j41(63,"option",6),t.EFF(64),t.nI1(65,"translate"),t.k0s(),t.Z7z(66,k,2,2,"option",7,m),t.k0s()()()(),t.DNE(68,R,2,0,"div",9)(69,F,3,3,"div",10)(70,J,6,3),t.k0s()),2&a&&(t.R7$(4),t.JRh(t.bMT(5,20,"search.advancedSearch")),t.R7$(3),t.JRh(t.bMT(8,22,"search.filterDescription")),t.R7$(5),t.JRh(t.bMT(13,24,"search.sortBy")),t.R7$(2),t.Y8G("value",o.currentParams.sort_field),t.R7$(2),t.JRh(t.bMT(17,26,"search.default")),t.R7$(2),t.Dyx(o.filterOptions.sortFields),t.R7$(4),t.JRh(t.bMT(23,28,"search.sortOrder")),t.R7$(2),t.Y8G("value",o.currentParams.sort_type),t.R7$(),t.Dyx(o.filterOptions.sortTypes),t.R7$(4),t.JRh(t.bMT(30,30,"search.language")),t.R7$(2),t.Y8G("value",o.currentParams.sort_lang),t.R7$(2),t.JRh(t.bMT(34,32,"search.allLanguages")),t.R7$(2),t.Dyx(o.filterOptions.languages),t.R7$(4),t.JRh(t.bMT(40,34,"search.releaseYear")),t.R7$(2),t.Y8G("value",o.currentParams.year),t.R7$(2),t.JRh(t.bMT(44,36,"search.allYears")),t.R7$(2),t.Dyx(o.filterOptions.years),t.R7$(5),t.JRh(t.bMT(51,38,"common.category")),t.R7$(2),t.Y8G("value",o.currentParams.category),t.R7$(2),t.JRh(t.bMT(55,40,"common.allCategories")),t.R7$(2),t.Dyx(o.categories),t.R7$(4),t.JRh(t.bMT(61,42,"common.country")),t.R7$(2),t.Y8G("value",o.currentParams.country),t.R7$(2),t.JRh(t.bMT(65,44,"common.allCountries")),t.R7$(2),t.Dyx(o.countries),t.R7$(2),t.vxM(o.loading?68:o.error?69:70))},dependencies:[u.MD,l.iI,l.Wk,b.N,v.e,p.h,p.D9],styles:[".container[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.filter-section[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.filter-section[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.filter-section[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(var(--color-border),.1);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;animation:_ngcontent-%COMP%_slideDown .4s ease-out}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{margin-bottom:1.5rem;border-bottom-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1));padding-bottom:1rem}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:.25rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.filter-select[_ngcontent-%COMP%]{width:100%;border-radius:.25rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1));padding:.5rem .75rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.filter-select[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.filter-select[_ngcontent-%COMP%]{appearance:none;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;transition:all .2s ease}.filter-select[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.filter-select[_ngcontent-%COMP%]:hover:is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.filter-select[_ngcontent-%COMP%]:hover{transform:translateY(-1px)}.filter-select[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity, 1));transform:translateY(-1px)}.filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.filter-group[_ngcontent-%COMP%]{margin-bottom:1.5rem}.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.5rem;display:block;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transition:color .2s ease}.filter-group[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.filter-group[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity, 1))}.movies-grid[_ngcontent-%COMP%]{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));animation:_ngcontent-%COMP%_fadeIn .4s ease-out}.movie-card[_ngcontent-%COMP%]{display:block;overflow:hidden;border-radius:.5rem;transition:all .3s ease}.movie-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px) scale(1.02)}.movie-card[_ngcontent-%COMP%]:hover   .movie-image[_ngcontent-%COMP%]{box-shadow:0 10px 15px -3px #0000004d}.movie-card[_ngcontent-%COMP%]:hover   .movie-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.1)}.movie-card[_ngcontent-%COMP%]:hover   .movie-title[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]:hover   .movie-title[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]:hover   .movie-original-title[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]:hover   .movie-original-title[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-image[_ngcontent-%COMP%]{position:relative;margin-bottom:.5rem;aspect-ratio:2/3;overflow:hidden;border-radius:.5rem;transition:box-shadow .3s ease}.movie-card[_ngcontent-%COMP%]   .movie-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;transition:transform .5s ease}.movie-card[_ngcontent-%COMP%]   .movie-image[_ngcontent-%COMP%]   .quality-badge[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem;border-radius:.25rem;padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1));background:#2563ebe6;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.movie-card[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%]{transition:color .2s ease}.movie-card[_ngcontent-%COMP%]   .movie-original-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-original-title[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-original-title[_ngcontent-%COMP%]{transition:color .2s ease}.results-header[_ngcontent-%COMP%]{margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;animation:_ngcontent-%COMP%_slideDown .3s ease-out}.results-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.results-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.results-header[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.results-header[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.empty-state[_ngcontent-%COMP%]{border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));padding:3rem;text-align:center}.empty-state[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{background-color:#1f293780}.empty-state[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .4s ease-out}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{margin-bottom:.5rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.loading-state[_ngcontent-%COMP%]{display:flex;min-height:400px;align-items:center;justify-content:center;animation:_ngcontent-%COMP%_fadeIn .3s ease-out}.error-state[_ngcontent-%COMP%]{border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1));padding:2rem;text-align:center;--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.error-state[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{background-color:#ef44441a;--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.error-state[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease-out}.pagination[_ngcontent-%COMP%]{margin-top:2rem;display:flex;justify-content:center;gap:.5rem;animation:_ngcontent-%COMP%_fadeIn .4s ease-out}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:.5rem;padding:.5rem 1rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled){--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover{--tw-bg-opacity: 1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover{transform:translateY(-1px)}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):active{transform:translateY(0)}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{cursor:not-allowed;--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1));opacity:.5}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}@media (max-width: 640px){.filter-section[_ngcontent-%COMP%]{padding:1rem}.movies-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.movie-card[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%], .movie-card[_ngcontent-%COMP%]   .movie-original-title[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}}"]})}return n})()}}]);