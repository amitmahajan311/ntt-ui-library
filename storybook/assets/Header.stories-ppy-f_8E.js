import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-CVV_m-99.js";import{P as n}from"./index-Ceb0_L1H.js";import"./preload-helper-D9Z9MdNV.js";const V=({searchValue:f,onSearchChange:I,searchPlaceholder:d,currentTheme:a,searchResults:i=[],isSearching:g=!1,showSearchResults:b=!1,onSearchResultClick:j=()=>{},onClearSearch:v=()=>{},maxResults:h=8,showResultCount:L=!0,enableKeyboardNav:x=!0})=>{const[m,l]=p.useState(-1),k=p.useRef(null),C=p.useRef([]);p.useEffect(()=>{if(!x||!b)return;const t=s=>{const y=Math.min(i.length-1,h-1);switch(s.key){case"ArrowDown":s.preventDefault(),l(u=>u<y?u+1:0);break;case"ArrowUp":s.preventDefault(),l(u=>u>0?u-1:y);break;case"Enter":s.preventDefault(),m>=0&&i[m]&&(j(i[m]),l(-1));break;case"Escape":s.preventDefault(),v(),l(-1),k.current?.blur();break}};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[b,i,m,h,x,j,v]),p.useEffect(()=>{l(-1)},[i]);const w=(t,s)=>s.trim()?t.split(new RegExp(`(${s})`,"gi")).map((u,H)=>u.toLowerCase()===s.toLowerCase()?e.jsx("mark",{className:"bg-yellow-200 dark:bg-yellow-800 px-1 rounded text-yellow-900 dark:text-yellow-100",children:u},H):u):t,N=t=>{I(t),l(-1)};return e.jsxs("div",{className:"relative search-container",children:[e.jsxs("div",{className:`relative flex items-center ${a.searchBg} ${a.searchBorder} border rounded-lg transition-all duration-200 ${b?"ring-2 ring-blue-500 ring-opacity-20":""}`,children:[e.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2",children:g?e.jsx("div",{className:"animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"}):e.jsx("svg",{className:`w-4 h-4 ${a.searchIcon}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx("input",{ref:k,type:"text",value:f,onChange:t=>N(t.target.value),placeholder:d,className:`w-full py-2 pl-10 pr-10 ${a.searchText} ${a.searchBg} rounded-lg border-0 focus:outline-none focus:ring-0 text-sm`,style:{minWidth:"280px"},autoComplete:"off",spellCheck:"false"}),f&&e.jsx("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1",children:e.jsx("button",{onClick:v,className:`${a.searchIcon} hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded`,title:"Clear search (Esc)",children:e.jsx("svg",{className:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})})]}),b&&e.jsxs("div",{className:`absolute top-full left-0 right-0 ${a.userMenuBg} ${a.userMenuBorder} border rounded-lg shadow-xl mt-2 max-h-100 overflow-hidden z-50 backdrop-blur-sm`,children:[g?e.jsxs("div",{className:"p-6 text-center",children:[e.jsx("div",{className:"animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-3"}),e.jsx("span",{className:`text-sm ${a.subtitle}`,children:"Searching..."})]}):i.length>0?e.jsxs(e.Fragment,{children:[L&&e.jsx("div",{className:`px-4 py-2 text-xs ${a.subtitle} border-b ${a.border} bg-gray-50 dark:bg-gray-800`,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{children:[i.length," result",i.length!==1?"s":""," found"]}),x&&e.jsxs("span",{className:"flex items-center space-x-1",children:[e.jsx("kbd",{className:"px-1.5 py-0.5 bg-white dark:bg-gray-700 border rounded text-xs",children:"↑↓"}),e.jsx("span",{children:"navigate"}),e.jsx("kbd",{className:"px-1.5 py-0.5 bg-white dark:bg-gray-700 border rounded text-xs",children:"Enter"}),e.jsx("span",{children:"select"})]})]})}),e.jsxs("div",{className:"py-1 max-h-80 overflow-y-auto",children:[i.slice(0,h).map((t,s)=>e.jsxs("button",{ref:y=>C.current[s]=y,onClick:()=>{j(t),l(-1)},className:`w-full px-4 py-3 text-left flex items-start gap-3 transition-all duration-150 ${m===s?"bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-500":a.menuHover}`,onMouseEnter:()=>l(s),onMouseLeave:()=>l(-1),children:[e.jsx("span",{className:"text-lg flex-shrink-0 mt-0.5",children:t.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:`font-medium ${a.text} text-sm leading-tight`,children:w(t.title,f)}),t.content&&e.jsx("div",{className:`text-xs ${a.subtitle} mt-1 line-clamp-2 leading-relaxed`,children:w(t.content,f)}),e.jsxs("div",{className:"flex items-center mt-2 space-x-2",children:[e.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${t.type==="dashboard"?"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":t.type==="projects"?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":t.type==="documents"?"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200":t.type==="settings"?"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200":"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"}`,children:t.type}),t.relevance&&!1]})]}),e.jsx("svg",{className:`w-4 h-4 ${a.subtitle} flex-shrink-0 mt-1 transition-transform ${m===s?"transform translate-x-1":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]},t.id)),i.length>h&&e.jsxs("div",{className:`px-4 py-2 text-center text-xs ${a.subtitle} border-t ${a.border}`,children:["+",i.length-h," more results available"]})]})]}):e.jsxs("div",{className:"p-6 text-center",children:[e.jsx("div",{className:"text-3xl mb-3",children:"🔍"}),e.jsx("div",{className:`text-sm font-medium ${a.text} mb-1`,children:"No results found"}),e.jsx("div",{className:`text-xs ${a.subtitle}`,children:"Try different keywords or check your spelling"}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-2 justify-center",children:["AI","dashboard","projects","settings"].map(t=>e.jsx("button",{onClick:()=>N(t),className:`px-2 py-1 text-xs rounded-full ${a.menuHover} ${a.subtitle} hover:${a.text} transition-colors`,children:t},t))})]}),x&&i.length>0&&!g&&e.jsx("div",{className:`px-4 py-2 border-t ${a.border} bg-gray-50 dark:bg-gray-800`,children:e.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500 dark:text-gray-400",children:[e.jsx("span",{children:"Use keyboard shortcuts for faster navigation"}),e.jsx("div",{className:"flex items-center space-x-3",children:e.jsxs("span",{className:"flex items-center space-x-1",children:[e.jsx("kbd",{className:"px-1 py-0.5 bg-white dark:bg-gray-700 border rounded",children:"Ctrl"}),e.jsx("span",{children:"+"}),e.jsx("kbd",{className:"px-1 py-0.5 bg-white dark:bg-gray-700 border rounded",children:"K"}),e.jsx("span",{className:"ml-1",children:"focus"})]})})]})})]})]})},U=({pocTitle:f="POC Title",subtitle:I="",theme:d="light",logoConfig:a={type:"initial",src:null},menuItems:i=[],userInfo:g=null,userMenuItems:b=[],isLoggedIn:j=!1,showSearchBar:v=!1,searchPlaceholder:h="Search...",searchValue:L="",onSearchChange:x=()=>{},searchResults:m=[],isSearching:l=!1,showSearchResults:k=!1,onSearchResultClick:C=()=>{},onClearSearch:w=()=>{},onMenuClick:N=()=>{},onUserMenuClick:t=()=>{},onLogout:s=()=>{},onLogin:y=()=>{},className:u="",sticky:H=!0})=>{const[D,S]=p.useState(!1),$=p.useRef(null),A={light:{bg:"bg-white",border:"border-gray-200",text:"text-gray-900",subtitle:"text-gray-600",menuHover:"hover:bg-gray-50",menuText:"text-gray-700",userMenuBg:"bg-white",userMenuBorder:"border-gray-200",shadow:"shadow-sm",logoFallbackBg:"bg-gradient-to-br from-blue-600 to-indigo-700",loginButton:"bg-blue-600 hover:bg-blue-700 text-white",searchBg:"bg-white",searchIcon:"text-gray-500",searchBorder:"border-gray-300 focus-within:border-blue-500",searchText:"text-gray-900 placeholder-gray-500"},dark:{bg:"bg-gray-900",border:"border-gray-700",text:"text-white",subtitle:"text-gray-300",menuHover:"hover:bg-gray-800",menuText:"text-gray-200",userMenuBg:"bg-gray-800",userMenuBorder:"border-gray-600",shadow:"shadow-lg",logoFallbackBg:"bg-gradient-to-br from-blue-500 to-indigo-600",loginButton:"bg-blue-600 hover:bg-blue-700 text-white",searchBg:"bg-gray-800",searchBorder:"border-gray-600 focus-within:border-blue-400",searchText:"text-white placeholder-gray-400",searchIcon:"text-gray-300"},blue:{bg:"bg-blue-600",border:"border-blue-500",text:"text-white",subtitle:"text-blue-50",menuHover:"hover:bg-blue-700",menuText:"text-blue-50",userMenuBg:"bg-white",userMenuBorder:"border-gray-200",shadow:"shadow-lg",logoFallbackBg:"bg-gradient-to-br from-white to-blue-100",loginButton:"bg-white hover:bg-gray-50 text-blue-600",searchBg:"bg-blue-50",searchBorder:"border-blue-300 focus-within:border-white",searchText:"text-blue-900 placeholder-blue-500",searchIcon:"text-blue-500"}},r=A[d]||A.light,O=()=>y(),F=o=>N(o),W=o=>{t(o),S(!1)},E=()=>{s(),S(!1)};p.useEffect(()=>{const o=c=>{$.current&&!$.current.contains(c.target)&&S(!1)};if(D)return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[D]);const T=()=>e.jsx("div",{className:`w-10 h-10 ${r.logoFallbackBg} rounded-lg flex items-center justify-center shadow-md`,children:e.jsx("svg",{viewBox:"0 0 24 24",className:`w-6 h-6 ${d==="blue"?"text-blue-700":"text-white"} fill-current`,children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})})}),z=()=>{const o=f?.charAt(0).toUpperCase()||"P";return e.jsx("div",{className:`w-10 h-10 ${r.logoFallbackBg} rounded-lg flex items-center justify-center shadow-md`,children:e.jsx("span",{className:`text-lg font-bold ${d==="blue"?"text-blue-700":"text-white"}`,children:o})})},_=()=>{const{type:o="fallback",src:c}=a;switch(o){case"logo":return e.jsx("div",{className:"flex items-center",children:c?e.jsx("img",{src:c,alt:"Logo",className:"h-10 w-auto object-contain max-w-[120px]"}):e.jsx(T,{})});case"initial":return e.jsx("div",{className:"flex items-center",children:e.jsx(z,{})});case"fallback":default:return e.jsx("div",{className:"flex items-center",children:e.jsx(T,{})})}},q=()=>{const o=c=>c?c.split(" ").map(G=>G.charAt(0)).join("").toUpperCase().slice(0,2):"U";return e.jsx("div",{className:"w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-sm",children:e.jsx("span",{className:"text-sm font-semibold text-white",children:o(g?.name)})})},J=()=>e.jsx("button",{onClick:O,className:`px-6 py-2 rounded-lg text-sm font-semibold ${r.loginButton} transition-colors duration-200 shadow-sm hover:shadow-md`,children:"Sign In"}),P=({items:o})=>e.jsx("nav",{className:"hidden md:flex items-center space-x-1",children:o.map(c=>e.jsx("button",{onClick:()=>F(c),className:`px-4 py-2 rounded-lg text-sm font-medium ${r.menuText} ${r.menuHover} transition-colors duration-200`,children:c.label},c.id))}),R=()=>`${r.bg} ${r.shadow} ${r.border} border-b ${H?"sticky top-0 z-50":""} ${u}`;return e.jsx("header",{className:R(),children:e.jsx("div",{className:"max-w-full mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(_,{}),e.jsx("div",{className:`h-8 w-px ${r.border} bg-current opacity-30`}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:`text-xl font-semibold ${r.text} leading-tight tracking-tight`,children:f}),I&&e.jsx("p",{className:`text-sm ${r.subtitle} leading-tight font-sm`,children:I})]})]}),e.jsx("div",{className:"flex items-center space-x-6",children:j||g?e.jsxs(e.Fragment,{children:[e.jsx(P,{items:i}),v&&e.jsx("div",{className:"hidden lg:block",children:e.jsx(V,{searchValue:L,onSearchChange:x,searchPlaceholder:h,currentTheme:r,searchResults:m,isSearching:l,showSearchResults:k,onSearchResultClick:C,onClearSearch:w})}),e.jsxs("div",{className:"relative",ref:$,children:[e.jsxs("button",{onClick:()=>{S(!D)},className:`flex items-center space-x-3 ${r.menuHover} rounded-lg px-3 py-2 transition-colors duration-200`,children:[e.jsx(q,{}),e.jsx("div",{className:"hidden sm:block text-left",children:e.jsxs("p",{className:`text-sm font-semibold ${r.text}`,children:["Hi, ",g?.name||"User"]})}),e.jsx("svg",{className:`w-4 h-4 ${r.text}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),D&&e.jsxs("div",{className:`absolute right-0 mt-2 w-64 ${r.userMenuBg} ${r.userMenuBorder} border rounded-xl shadow-lg py-2 z-50`,children:[e.jsx("div",{className:`px-4 py-3 border-b ${d==="dark"?"border-gray-600":"border-gray-200"}`,children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(q,{}),e.jsxs("div",{children:[e.jsx("p",{className:`text-sm font-semibold ${d==="dark"?"text-white":"text-gray-900"}`,children:g?.name||"User"}),e.jsx("p",{className:`text-xs font-medium ${d==="dark"?"text-gray-400":"text-gray-500"}`,children:g?.email||"user@company.com"})]})]})}),b.length>0&&e.jsxs("div",{className:"py-1",children:[b.map(o=>e.jsxs("button",{onClick:()=>W(o),className:`flex items-center w-full px-4 py-3 text-sm font-medium transition-colors duration-200 ${d==="dark"?"text-gray-200 hover:bg-gray-700":"text-gray-700 hover:bg-gray-50"}`,children:[o.icon&&e.jsx("span",{className:"mr-3 text-base",children:o.icon}),o.label]},o.id)),e.jsx("div",{className:`border-t my-1 ${d==="dark"?"border-gray-600":"border-gray-200"}`})]}),e.jsxs("button",{onClick:E,className:`flex items-center w-full px-4 py-3 text-sm font-semibold text-red-600 transition-colors duration-200 ${d==="dark"?"hover:bg-gray-700 text-red-400":"hover:bg-red-50"}`,children:[e.jsx("svg",{className:"mr-3 w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),"Sign Out"]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(P,{items:i}),v&&e.jsx("div",{className:"hidden lg:block",children:e.jsx(V,{searchValue:L,onSearchChange:x,searchPlaceholder:h,currentTheme:r,searchResults:m,isSearching:l,showSearchResults:k,onSearchResultClick:C,onClearSearch:w})}),e.jsx("div",{className:"flex items-center space-x-3",children:e.jsx(J,{})})]})})]})})})};U.propTypes={pocTitle:n.string,subtitle:n.string,theme:n.oneOf(["light","dark","blue"]),sticky:n.bool,logoConfig:n.shape({type:n.oneOf(["logo","initial","fallback"]),src:n.string}),showSearchBar:n.bool,searchPlaceholder:n.string,searchValue:n.string,onSearchChange:n.func,searchResults:n.arrayOf(n.shape({id:n.oneOfType([n.string,n.number]).isRequired,title:n.string.isRequired,type:n.string.isRequired,icon:n.string})),isSearching:n.bool,showSearchResults:n.bool,onSearchResultClick:n.func,onClearSearch:n.func,menuItems:n.arrayOf(n.shape({id:n.string.isRequired,label:n.string.isRequired})),userInfo:n.shape({id:n.string,name:n.string.isRequired,email:n.string.isRequired,role:n.string}),userMenuItems:n.arrayOf(n.shape({id:n.string.isRequired,label:n.string.isRequired,icon:n.node})),isLoggedIn:n.bool,onMenuClick:n.func,onUserMenuClick:n.func,onLogout:n.func,onLogin:n.func,className:n.string};U.__docgenInfo={description:"",methods:[],displayName:"Header",props:{pocTitle:{defaultValue:{value:'"POC Title"',computed:!1},description:"",type:{name:"string"},required:!1},subtitle:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},theme:{defaultValue:{value:'"light"',computed:!1},description:"",type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"dark"',computed:!1},{value:'"blue"',computed:!1}]},required:!1},logoConfig:{defaultValue:{value:`{\r
  type: "initial",\r
  src: null,\r
}`,computed:!1},description:"",type:{name:"shape",value:{type:{name:"enum",value:[{value:'"logo"',computed:!1},{value:'"initial"',computed:!1},{value:'"fallback"',computed:!1}],required:!1},src:{name:"string",required:!1}}},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!0}}}},required:!1},userInfo:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{id:{name:"string",required:!1},name:{name:"string",required:!0},email:{name:"string",required:!0},role:{name:"string",required:!1}}},required:!1},userMenuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!0},icon:{name:"node",required:!1}}}},required:!1},isLoggedIn:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showSearchBar:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},searchPlaceholder:{defaultValue:{value:'"Search..."',computed:!1},description:"",type:{name:"string"},required:!1},searchValue:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onSearchChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},searchResults:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},title:{name:"string",required:!0},type:{name:"string",required:!0},icon:{name:"string",required:!1}}}},required:!1},isSearching:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showSearchResults:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onSearchResultClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onClearSearch:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onMenuClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onUserMenuClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onLogout:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},onLogin:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},sticky:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};const K=""+new URL("NTT_DATA_LOGO-VozpoDKL.png",import.meta.url).href,Y=""+new URL("NTT_DATA_WHITE_LOGO-DyeYIxas.png",import.meta.url).href,ne={title:"Components/Header",component:U,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
A professional header component with authentication states and full customization options.

## Features
- ✅ Authentication states (Login/Logout)
- ✅ Theme support (Light, Dark, Blue)
- ✅ Search functionality with results
- ✅ User menu with profile options
- ✅ Custom logo support
- ✅ Responsive design

## Basic Usage

\`\`\`jsx
// Logged out state
<Header 
  isLoggedIn={false}
  onLogin={() => handleLogin()}
/>

// Logged in state
<Header 
  isLoggedIn={true}
  userInfo={{ name: "John Doe", email: "john@example.com" }}
  onLogout={() => handleLogout()}
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`isLoggedIn\` | boolean | false | Authentication state |
| \`theme\` | string | "light" | Theme: "light", "dark", "blue" |
| \`pocTitle\` | string | "POC Title" | Main header title |
| \`subtitle\` | string | "" | Subtitle text |
| \`showSearchBar\` | boolean | false | Show search functionality |
| \`userInfo\` | object | null | User data: {name, email, role} |
| \`logoConfig\` | object | {type: "initial"} | Logo config: {type, src} |
| \`onLogin\` | function | () => {} | Login button callback |
| \`onLogout\` | function | () => {} | Logout callback |

## Theme Options

\`\`\`jsx
// Light theme (default)
<Header theme="light" />

// Dark theme
<Header theme="dark" />

// Blue corporate theme
<Header theme="blue" />
\`\`\`

## Logo Configuration

\`\`\`jsx
// Company initial (default)
logoConfig={{ type: "initial" }}

// Custom logo image
logoConfig={{ 
  type: "logo", 
  src: "path/to/logo.png" 
}}

// Fallback icon
logoConfig={{ type: "fallback" }}
\`\`\`
        `}}},argTypes:{theme:{control:{type:"select"},options:["light","dark","blue"],description:"Visual theme of the header",table:{defaultValue:{summary:"light"},type:{summary:"string"}}},pocTitle:{control:"text",description:"Main header title",table:{defaultValue:{summary:"POC Dashboard"},type:{summary:"string"}}},subtitle:{control:"text",description:"Subtitle below main title",table:{defaultValue:{summary:""},type:{summary:"string"}}},isLoggedIn:{control:"boolean",description:"User authentication state",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},logoConfig:{control:"object",description:"Logo configuration object",table:{defaultValue:{summary:'{ type: "initial", src: null }'},type:{summary:"object"}}},showSearchBar:{control:"boolean",description:"Enable search functionality",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},searchPlaceholder:{control:"text",description:"Search input placeholder text",table:{defaultValue:{summary:"Search..."},type:{summary:"string"}}},userInfo:{control:"object",description:"User information object with name, email, role",table:{defaultValue:{summary:"null"},type:{summary:"object | null"}}},menuItems:{control:"object",description:"Array of navigation menu items",table:{defaultValue:{summary:"[]"},type:{summary:"array"}}},userMenuItems:{control:"object",description:"Array of user dropdown menu items",table:{defaultValue:{summary:"[]"},type:{summary:"array"}}},sticky:{control:"boolean",description:"Whether header sticks to top on scroll",table:{defaultValue:{summary:"true"},type:{summary:"boolean"}}},onLogin:{action:"login-clicked",description:"Callback when login button is clicked",table:{type:{summary:"function"}}},onLogout:{action:"logout-clicked",description:"Callback when logout is triggered",table:{type:{summary:"function"}}},onMenuClick:{action:"menu-clicked",description:"Callback when navigation menu item is clicked",table:{type:{summary:"function"}}},onUserMenuClick:{action:"user-menu-clicked",description:"Callback when user menu item is clicked",table:{type:{summary:"function"}}},onSearchChange:{action:"search-changed",description:"Callback when search input changes",table:{type:{summary:"function"}}}}},M={name:"🔓 Logged Out State",args:{pocTitle:"NTT DATA Portal",subtitle:"Please sign in to access your dashboard",theme:"light",isLoggedIn:!1,logoConfig:{type:"logo",src:K},menuItems:[{id:"home",label:"Home"},{id:"features",label:"Features"},{id:"pricing",label:"Pricing"},{id:"about",label:"About"},{id:"contact",label:"Contact"}],showSearchBar:!1,searchPlaceholder:"Search documentation...",sticky:!0,userInfo:null,userMenuItems:[]},parameters:{docs:{description:{story:`
Header configuration for unauthenticated users.

**Key Features:**
- Sign In button for authentication
- Public navigation menu
- No search functionality
- Clean, conversion-focused design

**Customization Options:**

\`\`\`jsx
// Basic logged out header
<Header 
  isLoggedIn={false}
  pocTitle="Your App Name"
  subtitle="Welcome message"
  onLogin={() => handleLogin()}
/>

// With different themes
<Header theme="dark" isLoggedIn={false} />
<Header theme="blue" isLoggedIn={false} />

// With custom logo
<Header 
  isLoggedIn={false}
  logoConfig={{
    type: "logo",
    src: "/path/to/logo.png"
  }}
/>

// With public navigation
<Header 
  isLoggedIn={false}
  menuItems={[
    { id: "home", label: "Home" },
    { id: "features", label: "Features" }
  ]}
/>
\`\`\`

**Try These Configurations:**
1. Change \`theme\` to "dark" or "blue"
2. Update \`logoConfig.type\` to "logo" and add \`src\`
3. Modify \`menuItems\` for different navigation
4. Update \`pocTitle\` and \`subtitle\` for your brand
        `}}}},B={name:"🔒 Logged In State",args:{pocTitle:"NTT DATA Dashboard",subtitle:"Welcome back to your workspace",theme:"light",isLoggedIn:!0,logoConfig:{type:"initial",src:Y},userInfo:{id:"emp001",name:"Sarah Johnson",email:"sarah.johnson@nttdata.com",role:"Senior Developer"},menuItems:[{id:"dashboard",label:"Dashboard"},{id:"projects",label:"Projects"},{id:"analytics",label:"Analytics"}],userMenuItems:[{id:"profile",label:"My Profile",icon:"👤"},{id:"account",label:"Account Settings",icon:"⚙️"},{id:"preferences",label:"Preferences",icon:"🎛️"},{id:"notifications",label:"Notifications",icon:"🔔"},{id:"security",label:"Security & Privacy",icon:"🔒"},{id:"help",label:"Help Center",icon:"❓"},{id:"feedback",label:"Send Feedback",icon:"💬"}],showSearchBar:!0,searchPlaceholder:"Search projects, reports, team members...",searchValue:"",sticky:!0},parameters:{docs:{description:{story:`
Header configuration for authenticated users with full functionality.

**Key Features:**
- User avatar with initials (SJ for Sarah Johnson)
- User greeting "Hi, Sarah"
- Search functionality with results
- User dropdown menu with profile options
- Application navigation menu
- Secure logout functionality

**User Information Display:**
- Avatar shows user initials on gradient background
- Greeting shows first name
- Dropdown shows full name, email, and role
- Menu items with icons for better UX

**Customization Options:**

\`\`\`jsx
// Basic logged in header
<Header 
  isLoggedIn={true}
  userInfo={{
    name: "Sarah Johnson",
    email: "sarah@company.com",
    role: "Developer"
  }}
  onLogout={() => handleLogout()}
/>

// With different themes
<Header 
  theme="dark" 
  isLoggedIn={true} 
  userInfo={userInfo}
/>

<Header 
  theme="blue" 
  isLoggedIn={true} 
  userInfo={userInfo}
/>

// With custom logo
<Header 
  isLoggedIn={true}
  logoConfig={{
    type: "logo",
    src: "/company-logo.png"
  }}
  userInfo={userInfo}
/>

// With search functionality
<Header 
  isLoggedIn={true}
  showSearchBar={true}
  searchPlaceholder="Search anything..."
  userInfo={userInfo}
/>

// With custom navigation
<Header 
  isLoggedIn={true}
  menuItems={[
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" }
  ]}
  userInfo={userInfo}
/>

// With custom user menu
<Header 
  isLoggedIn={true}
  userInfo={userInfo}
  userMenuItems={[
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "billing", label: "Billing", icon: "💳" }
  ]}
/>
\`\`\`

**Try These Configurations:**
1. **Theme**: Change \`theme\` to "dark" or "blue"
2. **Logo**: Update \`logoConfig\` with custom logo
3. **User Info**: Modify \`userInfo\` with different names/roles
4. **Navigation**: Customize \`menuItems\` for your app
5. **User Menu**: Add/remove \`userMenuItems\`
6. **Search**: Toggle \`showSearchBar\` and update placeholder
7. **Branding**: Update \`pocTitle\` and \`subtitle\`

**Complete Example:**
\`\`\`jsx
<Header 
  // Branding
  pocTitle="My Application"
  subtitle="Dashboard Overview"
  theme="blue"
  
  // Logo
  logoConfig={{
    type: "logo",
    src: "/logo.png"
  }}
  
  // Authentication
  isLoggedIn={true}
  userInfo={{
    name: "John Doe",
    email: "john@company.com",
    role: "Manager"
  }}
  
  // Navigation
  menuItems={[
    { id: "dashboard", label: "Dashboard" },
    { id: "reports", label: "Reports" }
  ]}
  
  // User Menu
  userMenuItems={[
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "logout", label: "Logout", icon: "🚪" }
  ]}
  
  // Search
  showSearchBar={true}
  searchPlaceholder="Search everything..."
  
  // Callbacks
  onLogout={() => handleLogout()}
  onMenuClick={(item) => navigate(item.id)}
  onUserMenuClick={(item) => handleUserAction(item)}
/>
\`\`\`
        `}}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "🔓 Logged Out State",
  args: {
    // Basic Configuration
    pocTitle: "NTT DATA Portal",
    subtitle: "Please sign in to access your dashboard",
    theme: "light",
    // Try: "dark", "blue"

    // Authentication
    isLoggedIn: false,
    // Logo Configuration
    logoConfig: {
      type: "logo",
      // Options: "initial", "logo", "fallback"
      src: logo
    },
    // Public Navigation
    menuItems: [{
      id: "home",
      label: "Home"
    }, {
      id: "features",
      label: "Features"
    }, {
      id: "pricing",
      label: "Pricing"
    }, {
      id: "about",
      label: "About"
    }, {
      id: "contact",
      label: "Contact"
    }],
    // Search (disabled for public users)
    showSearchBar: false,
    searchPlaceholder: "Search documentation...",
    // Layout
    sticky: true,
    // No user data for logged out state
    userInfo: null,
    userMenuItems: []
  },
  parameters: {
    docs: {
      description: {
        story: \`
Header configuration for unauthenticated users.

**Key Features:**
- Sign In button for authentication
- Public navigation menu
- No search functionality
- Clean, conversion-focused design

**Customization Options:**

\\\`\\\`\\\`jsx
// Basic logged out header
<Header 
  isLoggedIn={false}
  pocTitle="Your App Name"
  subtitle="Welcome message"
  onLogin={() => handleLogin()}
/>

// With different themes
<Header theme="dark" isLoggedIn={false} />
<Header theme="blue" isLoggedIn={false} />

// With custom logo
<Header 
  isLoggedIn={false}
  logoConfig={{
    type: "logo",
    src: "/path/to/logo.png"
  }}
/>

// With public navigation
<Header 
  isLoggedIn={false}
  menuItems={[
    { id: "home", label: "Home" },
    { id: "features", label: "Features" }
  ]}
/>
\\\`\\\`\\\`

**Try These Configurations:**
1. Change \\\`theme\\\` to "dark" or "blue"
2. Update \\\`logoConfig.type\\\` to "logo" and add \\\`src\\\`
3. Modify \\\`menuItems\\\` for different navigation
4. Update \\\`pocTitle\\\` and \\\`subtitle\\\` for your brand
        \`
      }
    }
  }
}`,...M.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "🔒 Logged In State",
  args: {
    // Basic Configuration
    pocTitle: "NTT DATA Dashboard",
    subtitle: "Welcome back to your workspace",
    theme: "light",
    // Try: "dark", "blue"

    // Authentication
    isLoggedIn: true,
    // Logo Configuration
    logoConfig: {
      type: "initial",
      // Options: "initial", "logo", "fallback"
      src: while_logo
    },
    // User Information
    userInfo: {
      id: "emp001",
      name: "Sarah Johnson",
      email: "sarah.johnson@nttdata.com",
      role: "Senior Developer"
    },
    // Application Navigation
    menuItems: [{
      id: "dashboard",
      label: "Dashboard"
    }, {
      id: "projects",
      label: "Projects"
    }, {
      id: "analytics",
      label: "Analytics"
    }],
    // User Menu Options
    userMenuItems: [{
      id: "profile",
      label: "My Profile",
      icon: "👤"
    }, {
      id: "account",
      label: "Account Settings",
      icon: "⚙️"
    }, {
      id: "preferences",
      label: "Preferences",
      icon: "🎛️"
    }, {
      id: "notifications",
      label: "Notifications",
      icon: "🔔"
    }, {
      id: "security",
      label: "Security & Privacy",
      icon: "🔒"
    }, {
      id: "help",
      label: "Help Center",
      icon: "❓"
    }, {
      id: "feedback",
      label: "Send Feedback",
      icon: "💬"
    }],
    // Search Functionality
    showSearchBar: true,
    searchPlaceholder: "Search projects, reports, team members...",
    searchValue: "",
    // Layout
    sticky: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Header configuration for authenticated users with full functionality.

**Key Features:**
- User avatar with initials (SJ for Sarah Johnson)
- User greeting "Hi, Sarah"
- Search functionality with results
- User dropdown menu with profile options
- Application navigation menu
- Secure logout functionality

**User Information Display:**
- Avatar shows user initials on gradient background
- Greeting shows first name
- Dropdown shows full name, email, and role
- Menu items with icons for better UX

**Customization Options:**

\\\`\\\`\\\`jsx
// Basic logged in header
<Header 
  isLoggedIn={true}
  userInfo={{
    name: "Sarah Johnson",
    email: "sarah@company.com",
    role: "Developer"
  }}
  onLogout={() => handleLogout()}
/>

// With different themes
<Header 
  theme="dark" 
  isLoggedIn={true} 
  userInfo={userInfo}
/>

<Header 
  theme="blue" 
  isLoggedIn={true} 
  userInfo={userInfo}
/>

// With custom logo
<Header 
  isLoggedIn={true}
  logoConfig={{
    type: "logo",
    src: "/company-logo.png"
  }}
  userInfo={userInfo}
/>

// With search functionality
<Header 
  isLoggedIn={true}
  showSearchBar={true}
  searchPlaceholder="Search anything..."
  userInfo={userInfo}
/>

// With custom navigation
<Header 
  isLoggedIn={true}
  menuItems={[
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" }
  ]}
  userInfo={userInfo}
/>

// With custom user menu
<Header 
  isLoggedIn={true}
  userInfo={userInfo}
  userMenuItems={[
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "billing", label: "Billing", icon: "💳" }
  ]}
/>
\\\`\\\`\\\`

**Try These Configurations:**
1. **Theme**: Change \\\`theme\\\` to "dark" or "blue"
2. **Logo**: Update \\\`logoConfig\\\` with custom logo
3. **User Info**: Modify \\\`userInfo\\\` with different names/roles
4. **Navigation**: Customize \\\`menuItems\\\` for your app
5. **User Menu**: Add/remove \\\`userMenuItems\\\`
6. **Search**: Toggle \\\`showSearchBar\\\` and update placeholder
7. **Branding**: Update \\\`pocTitle\\\` and \\\`subtitle\\\`

**Complete Example:**
\\\`\\\`\\\`jsx
<Header 
  // Branding
  pocTitle="My Application"
  subtitle="Dashboard Overview"
  theme="blue"
  
  // Logo
  logoConfig={{
    type: "logo",
    src: "/logo.png"
  }}
  
  // Authentication
  isLoggedIn={true}
  userInfo={{
    name: "John Doe",
    email: "john@company.com",
    role: "Manager"
  }}
  
  // Navigation
  menuItems={[
    { id: "dashboard", label: "Dashboard" },
    { id: "reports", label: "Reports" }
  ]}
  
  // User Menu
  userMenuItems={[
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "logout", label: "Logout", icon: "🚪" }
  ]}
  
  // Search
  showSearchBar={true}
  searchPlaceholder="Search everything..."
  
  // Callbacks
  onLogout={() => handleLogout()}
  onMenuClick={(item) => navigate(item.id)}
  onUserMenuClick={(item) => handleUserAction(item)}
/>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...B.parameters?.docs?.source}}};const te=["LoggedOut","LoggedIn"];export{B as LoggedIn,M as LoggedOut,te as __namedExportsOrder,ne as default};
