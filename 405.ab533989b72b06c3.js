"use strict";(self.webpackChunkfilm_web=self.webpackChunkfilm_web||[]).push([[405],{2405:(I,u,s)=>{s.r(u),s.d(u,{SearchResultsComponent:()=>G});var m=s(177),l=s(303),_=s(7771),h=s(3551),C=s(2601),g=s(6977);const v={languages:[{value:"vietsub",label:"Vietsub"},{value:"thuyet-minh",label:"Thuy\u1ebft Minh"},{value:"long-tieng",label:"L\u1ed3ng Ti\u1ebfng"}],sortFields:[{value:"modified.time",label:"Th\u1eddi gian c\u1eadp nh\u1eadt"},{value:"_id",label:"ID phim"},{value:"year",label:"N\u0103m ph\xe1t h\xe0nh"}],sortTypes:[{value:"desc",label:"Gi\u1ea3m d\u1ea7n"},{value:"asc",label:"T\u0103ng d\u1ea7n"}],categories:[],countries:[],years:Array.from({length:(new Date).getFullYear()-1969},(n,r)=>1970+r).reverse()};var t=s(4438),b=s(3498);const p=(n,r)=>r.value,d=(n,r)=>r._id,y=n=>["/phim",n];function f(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.value),t.R7$(),t.JRh(e.label)}}function P(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.value),t.R7$(),t.JRh(e.label)}}function O(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.value),t.R7$(),t.JRh(e.label)}}function M(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e),t.R7$(),t.JRh(e)}}function w(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.slug),t.R7$(),t.JRh(e.name)}}function x(n,r){if(1&n&&(t.j41(0,"option",7),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.slug),t.R7$(),t.JRh(e.name)}}function k(n,r){1&n&&(t.j41(0,"div",9),t.nrm(1,"app-loading-spinner"),t.k0s())}function E(n,r){if(1&n&&(t.j41(0,"div",10),t.EFF(1),t.k0s()),2&n){const e=t.XpG();t.R7$(),t.JRh(e.error)}}function F(n,r){if(1&n&&(t.j41(0,"span",12),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.SpI("",e.totalItems," k\u1ebft qu\u1ea3")}}function R(n,r){if(1&n&&(t.j41(0,"span",19),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit;t.R7$(),t.SpI(" ",e.quality," ")}}function $(n,r){if(1&n&&(t.j41(0,"p",21),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.origin_name)}}function T(n,r){if(1&n&&(t.j41(0,"a",15)(1,"div",17),t.nrm(2,"img",18),t.DNE(3,R,2,1,"span",19),t.k0s(),t.j41(4,"h3",20),t.EFF(5),t.k0s(),t.DNE(6,$,2,1,"p",21),t.k0s()),2&n){const e=r.$implicit;t.Y8G("routerLink",t.eq3(6,y,e.slug)),t.R7$(2),t.Y8G("src",e.poster_url,t.B4B)("alt",e.name),t.R7$(),t.vxM(e.quality?3:-1),t.R7$(2),t.JRh(e.name),t.R7$(),t.vxM(e.origin_name?6:-1)}}function j(n,r){if(1&n){const e=t.RV6();t.j41(0,"div",16)(1,"app-pagination",22),t.bIt("pageChange",function(o){t.eBV(e);const i=t.XpG(3);return t.Njj(i.onPageChange(o))}),t.k0s()()}if(2&n){const e=t.XpG(3);t.R7$(),t.Y8G("currentPage",e.currentPage)("totalPages",e.totalPages)}}function S(n,r){if(1&n&&(t.j41(0,"div",14),t.Z7z(1,T,7,8,"a",15,d),t.k0s(),t.DNE(3,j,2,2,"div",16)),2&n){const e=t.XpG(2);t.R7$(),t.Dyx(e.movies),t.R7$(2),t.vxM(e.movies.length>0&&e.totalPages>1?3:-1)}}function D(n,r){1&n&&(t.j41(0,"div",13)(1,"p"),t.EFF(2,"Kh\xf4ng t\xecm th\u1ea5y k\u1ebft qu\u1ea3 n\xe0o"),t.k0s(),t.j41(3,"p"),t.EFF(4,"Th\u1eed thay \u0111\u1ed5i b\u1ed9 l\u1ecdc \u0111\u1ec3 t\xecm ki\u1ebfm l\u1ea1i"),t.k0s()())}function Y(n,r){if(1&n&&(t.j41(0,"div",11)(1,"h1"),t.EFF(2),t.k0s(),t.DNE(3,F,2,1,"span",12),t.k0s(),t.DNE(4,S,4,1)(5,D,5,0,"div",13)),2&n){const e=t.XpG();t.R7$(2),t.JRh(e.pageTitle),t.R7$(),t.vxM(e.movies.length>0?3:-1),t.R7$(),t.vxM(e.movies.length>0?4:5)}}let G=(()=>{class n extends _.z{route;router;categories=[];countries=[];filterOptions=v;currentParams={};totalItems=0;constructor(e,c,o){super(e),this.route=c,this.router=o}ngOnInit(){this.loadFilterOptions(),this.route.queryParams.pipe((0,g.Q)(this.destroy$)).subscribe({next:e=>{this.currentParams={keyword:e.q,page:e.page?Number(e.page):1,sort_field:e.sort_field,sort_type:e.sort_type,sort_lang:e.sort_lang,category:e.category,country:e.country,year:e.year?Number(e.year):void 0,limit:21},this.currentParams.keyword?(this.pageTitle=`Search Results for "${this.currentParams.keyword}"`,this.loadMovies(this.currentParams.page||1)):(this.error="No search keyword provided",this.movies=[])},error:e=>{console.error("Error processing query parameters:",e),this.error="Error processing search parameters"}})}loadFilterOptions(){this.movieService.getCategories().pipe((0,g.Q)(this.destroy$)).subscribe({next:e=>{console.log("Categories loaded:",e),this.categories=e,this.filterOptions={...this.filterOptions,categories:e}},error:e=>{console.error("Failed to load categories:",e),this.categories=[]}}),this.movieService.getCountries().pipe((0,g.Q)(this.destroy$)).subscribe({next:e=>{console.log("Countries loaded:",e),this.countries=e,this.filterOptions={...this.filterOptions,countries:e}},error:e=>{console.error("Failed to load countries:",e),this.countries=[]}})}getMovies(e){return this.movieService.searchMovies({...this.currentParams,page:e})}updateFilters(e,c=!0){const o={...this.currentParams,...e};c&&!("page"in e)&&(o.page=1);const i={q:o.keyword,page:o.page?.toString(),sort_field:o.sort_field,sort_type:o.sort_type,sort_lang:o.sort_lang,category:o.category,country:o.country,year:o.year?.toString()};Object.keys(i).forEach(a=>{void 0===i[a]&&delete i[a]}),this.router.navigate([],{relativeTo:this.route,queryParams:i,replaceUrl:!0})}handleSelectChange(e,c){let i=e.target.value;"year"===c?i=i?Number(i):void 0:i||(i=void 0),this.updateFilters({[c]:i},!0)}onPageChange(e){this.updateFilters({page:e},!1)}static \u0275fac=function(c){return new(c||n)(t.rXU(b.W),t.rXU(l.nX),t.rXU(l.Ix))};static \u0275cmp=t.VBU({type:n,selectors:[["app-search-results"]],standalone:!0,features:[t.Vt3,t.aNF],decls:58,vars:7,consts:[[1,"container","mx-auto","px-4","py-8"],[1,"filter-section","mb-8","p-6","rounded-lg"],[1,"section-header"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-4","gap-6"],[1,"filter-group"],[1,"filter-select",3,"change","value"],["value",""],[3,"value"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-6","mt-6"],[1,"loading-state"],[1,"error-state"],[1,"results-header"],[1,"results-count"],[1,"empty-state"],[1,"movies-grid"],[1,"movie-card",3,"routerLink"],[1,"pagination"],[1,"movie-image"],["loading","lazy",3,"src","alt"],[1,"quality-badge"],[1,"movie-title"],[1,"movie-original-title"],[3,"pageChange","currentPage","totalPages"]],template:function(c,o){1&c&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t.EFF(4,"T\xecm ki\u1ebfm n\xe2ng cao"),t.k0s(),t.j41(5,"p"),t.EFF(6,"L\u1ecdc k\u1ebft qu\u1ea3 theo nhi\u1ec1u ti\xeau ch\xed kh\xe1c nhau"),t.k0s()(),t.j41(7,"div",3)(8,"div",4)(9,"label"),t.EFF(10,"S\u1eafp x\u1ebfp theo"),t.k0s(),t.j41(11,"select",5),t.bIt("change",function(a){return o.handleSelectChange(a,"sort_field")}),t.j41(12,"option",6),t.EFF(13,"M\u1eb7c \u0111\u1ecbnh"),t.k0s(),t.Z7z(14,f,2,2,"option",7,p),t.k0s()(),t.j41(16,"div",4)(17,"label"),t.EFF(18,"Th\u1ee9 t\u1ef1"),t.k0s(),t.j41(19,"select",5),t.bIt("change",function(a){return o.handleSelectChange(a,"sort_type")}),t.Z7z(20,P,2,2,"option",7,p),t.k0s()(),t.j41(22,"div",4)(23,"label"),t.EFF(24,"Ng\xf4n ng\u1eef"),t.k0s(),t.j41(25,"select",5),t.bIt("change",function(a){return o.handleSelectChange(a,"sort_lang")}),t.j41(26,"option",6),t.EFF(27,"T\u1ea5t c\u1ea3 ng\xf4n ng\u1eef"),t.k0s(),t.Z7z(28,O,2,2,"option",7,p),t.k0s()(),t.j41(30,"div",4)(31,"label"),t.EFF(32,"N\u0103m ph\xe1t h\xe0nh"),t.k0s(),t.j41(33,"select",5),t.bIt("change",function(a){return o.handleSelectChange(a,"year")}),t.j41(34,"option",6),t.EFF(35,"T\u1ea5t c\u1ea3 c\xe1c n\u0103m"),t.k0s(),t.Z7z(36,M,2,2,"option",7,t.fX1),t.k0s()()(),t.j41(38,"div",8)(39,"div",4)(40,"label"),t.EFF(41,"Th\u1ec3 lo\u1ea1i"),t.k0s(),t.j41(42,"select",5),t.bIt("change",function(a){return o.handleSelectChange(a,"category")}),t.j41(43,"option",6),t.EFF(44,"T\u1ea5t c\u1ea3 th\u1ec3 lo\u1ea1i"),t.k0s(),t.Z7z(45,w,2,2,"option",7,d),t.k0s()(),t.j41(47,"div",4)(48,"label"),t.EFF(49,"Qu\u1ed1c gia"),t.k0s(),t.j41(50,"select",5),t.bIt("change",function(a){return o.handleSelectChange(a,"country")}),t.j41(51,"option",6),t.EFF(52,"T\u1ea5t c\u1ea3 qu\u1ed1c gia"),t.k0s(),t.Z7z(53,x,2,2,"option",7,d),t.k0s()()()(),t.DNE(55,k,2,0,"div",9)(56,E,2,1,"div",10)(57,Y,6,3),t.k0s()),2&c&&(t.R7$(11),t.Y8G("value",o.currentParams.sort_field),t.R7$(3),t.Dyx(o.filterOptions.sortFields),t.R7$(5),t.Y8G("value",o.currentParams.sort_type),t.R7$(),t.Dyx(o.filterOptions.sortTypes),t.R7$(5),t.Y8G("value",o.currentParams.sort_lang),t.R7$(3),t.Dyx(o.filterOptions.languages),t.R7$(5),t.Y8G("value",o.currentParams.year),t.R7$(3),t.Dyx(o.filterOptions.years),t.R7$(6),t.Y8G("value",o.currentParams.category),t.R7$(3),t.Dyx(o.categories),t.R7$(5),t.Y8G("value",o.currentParams.country),t.R7$(3),t.Dyx(o.countries),t.R7$(2),t.vxM(o.loading?55:o.error?56:57))},dependencies:[m.MD,l.iI,l.Wk,h.N,C.e],styles:[".container[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.filter-section[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.filter-section[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity, 1))}.filter-section[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(var(--color-border),.1);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;animation:_ngcontent-%COMP%_slideDown .4s ease-out}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{margin-bottom:1.5rem;border-bottom-width:1px;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1));padding-bottom:1rem}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity, 1))}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:.25rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.filter-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.filter-select[_ngcontent-%COMP%]{width:100%;border-radius:.25rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1));--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1));padding:.5rem .75rem;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.filter-select[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(75 85 99 / var(--tw-border-opacity, 1));--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.filter-select[_ngcontent-%COMP%]{appearance:none;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;transition:all .2s ease}.filter-select[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.filter-select[_ngcontent-%COMP%]:hover:is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.filter-select[_ngcontent-%COMP%]:hover{transform:translateY(-1px)}.filter-select[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity, 1));transform:translateY(-1px)}.filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.filter-group[_ngcontent-%COMP%]{margin-bottom:1.5rem}.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.5rem;display:block;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transition:color .2s ease}.filter-group[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.filter-group[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity, 1))}.movies-grid[_ngcontent-%COMP%]{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));animation:_ngcontent-%COMP%_fadeIn .4s ease-out}.movie-card[_ngcontent-%COMP%]{display:block;overflow:hidden;border-radius:.5rem;transition:all .3s ease}.movie-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px) scale(1.02)}.movie-card[_ngcontent-%COMP%]:hover   .movie-image[_ngcontent-%COMP%]{box-shadow:0 10px 15px -3px #0000004d}.movie-card[_ngcontent-%COMP%]:hover   .movie-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.1)}.movie-card[_ngcontent-%COMP%]:hover   .movie-title[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]:hover   .movie-title[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]:hover   .movie-original-title[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]:hover   .movie-original-title[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-image[_ngcontent-%COMP%]{position:relative;margin-bottom:.5rem;aspect-ratio:2/3;overflow:hidden;border-radius:.5rem;transition:box-shadow .3s ease}.movie-card[_ngcontent-%COMP%]   .movie-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;transition:transform .5s ease}.movie-card[_ngcontent-%COMP%]   .movie-image[_ngcontent-%COMP%]   .quality-badge[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem;border-radius:.25rem;padding:.25rem .5rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1));background:#2563ebe6;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.movie-card[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%]{transition:color .2s ease}.movie-card[_ngcontent-%COMP%]   .movie-original-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-original-title[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.movie-card[_ngcontent-%COMP%]   .movie-original-title[_ngcontent-%COMP%]{transition:color .2s ease}.results-header[_ngcontent-%COMP%]{margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;animation:_ngcontent-%COMP%_slideDown .3s ease-out}.results-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.results-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.results-header[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.results-header[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.empty-state[_ngcontent-%COMP%]{border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));padding:3rem;text-align:center}.empty-state[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{background-color:#1f293780}.empty-state[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .4s ease-out}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{margin-bottom:.5rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child:is(.dark   *)[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.loading-state[_ngcontent-%COMP%]{display:flex;min-height:400px;align-items:center;justify-content:center;animation:_ngcontent-%COMP%_fadeIn .3s ease-out}.error-state[_ngcontent-%COMP%]{border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1));padding:2rem;text-align:center;--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.error-state[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%]{background-color:#ef44441a;--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.error-state[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease-out}.pagination[_ngcontent-%COMP%]{margin-top:2rem;display:flex;justify-content:center;gap:.5rem;animation:_ngcontent-%COMP%_fadeIn .4s ease-out}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:.5rem;padding:.5rem 1rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled){--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity, 1))}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover{--tw-bg-opacity: 1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover{transform:translateY(-1px)}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):active{transform:translateY(0)}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{cursor:not-allowed;--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1));opacity:.5}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:is(.dark   *)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}@media (max-width: 640px){.filter-section[_ngcontent-%COMP%]{padding:1rem}.movies-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}.movie-card[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%], .movie-card[_ngcontent-%COMP%]   .movie-original-title[_ngcontent-%COMP%]{font-size:.75rem;line-height:1rem}}"]})}return n})()}}]);