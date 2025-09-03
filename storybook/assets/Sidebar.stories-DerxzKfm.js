import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-CVV_m-99.js";import{P as t}from"./index-Ceb0_L1H.js";import"./preload-helper-D9Z9MdNV.js";const r=({theme:u="light",isMinimized:s=!1,onToggleMinimize:p=()=>{},menuItems:l=[],onMenuItemClick:h=()=>{},activeItemId:g=null,className:b=""})=>{const[n,d]=m.useState(s);m.useEffect(()=>{d(s)},[s]);const c={light:{bg:"bg-white",border:"border-gray-200",menuHover:"hover:bg-gray-50",menuText:"text-gray-700",activeItem:"bg-blue-50 text-blue-700 border-r-2 border-blue-600",toggleButton:"bg-gray-100 hover:bg-gray-200 text-gray-600",shadow:"shadow-sm",sectionTitle:"text-gray-500"},dark:{bg:"bg-gray-900",border:"border-gray-700",menuHover:"hover:bg-gray-800",menuText:"text-gray-200",activeItem:"bg-blue-900/30 text-blue-300 border-r-2 border-blue-500",toggleButton:"bg-gray-800 hover:bg-gray-700 text-gray-300",shadow:"shadow-lg",sectionTitle:"text-gray-400"}},a=c[u]||c.light,f=()=>{const i=!n;d(i),p(i)},x=i=>{h(i)},y=[{id:"dashboard",label:"Dashboard",icon:"📊",path:"/dashboard"},{id:"projects",label:"Projects",icon:"📁",path:"/projects"},{id:"analytics",label:"Analytics",icon:"📈",path:"/analytics"},{id:"reports",label:"Reports",icon:"📋",path:"/reports"},{id:"settings",label:"Settings",icon:"⚙️",path:"/settings"}],v=l.length>0?l:y;return e.jsx("div",{className:`fixed left-0 z-40 ${a.bg} ${a.border} border-r ${a.shadow} transition-all duration-300 ease-in-out flex flex-col ${b}`,style:{top:"64px",width:n?"74px":"256px",height:"calc(100vh - 64px)"},children:e.jsxs("div",{className:"flex-1 p-3 overflow-y-auto",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[!n&&e.jsx("div",{className:`text-xs font-medium uppercase tracking-wider ${a.sectionTitle}`,children:"Main Menu"}),e.jsx("button",{onClick:f,className:`p-2 rounded-lg ${a.toggleButton} transition-colors duration-200 ${n?"mx-auto":"ml-auto"}`,title:n?"Expand sidebar":"Minimize sidebar",children:e.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})})})]}),e.jsx("nav",{children:e.jsx("ul",{className:"space-y-1",children:v.map(i=>e.jsx("li",{children:e.jsxs("button",{onClick:()=>x(i),className:`w-full flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${g===i.id?a.activeItem:`${a.menuText} ${a.menuHover}`}`,title:n?i.label:void 0,children:[e.jsx("span",{className:"text-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110",children:i.icon}),!n&&e.jsx("span",{className:"ml-3 truncate flex-1 text-left",children:i.label})]})},i.id))})})]})})};r.propTypes={theme:t.oneOf(["light","dark"]),isMinimized:t.bool,onToggleMinimize:t.func,menuItems:t.arrayOf(t.shape({id:t.string.isRequired,label:t.string.isRequired,icon:t.string,path:t.string})),onMenuItemClick:t.func,activeItemId:t.string,className:t.string};r.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{theme:{defaultValue:{value:'"light"',computed:!1},description:"",type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"dark"',computed:!1}]},required:!1},isMinimized:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onToggleMinimize:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},menuItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!0},icon:{name:"string",required:!1},path:{name:"string",required:!1}}}},required:!1},onMenuItemClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},activeItemId:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const j={title:"Components/Sidebar",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{story:{inline:!1,height:"700px"},description:{component:`
A modern, responsive sidebar navigation component with theme support, collapsible functionality, and customizable menu items.

## Features
- ✅ **Theme Support**: Light and Dark themes with consistent styling
- ✅ **Collapsible Interface**: Toggle between expanded and minimized states
- ✅ **Active State Management**: Visual indication of current active menu item
- ✅ **Icon Support**: Emoji or custom icons for menu items
- ✅ **Hover Effects**: Smooth transitions and interactive feedback
- ✅ **Responsive Design**: Fixed positioning with proper height calculations
- ✅ **Customizable Menu**: Define your own menu structure and items
- ✅ **Smooth Animations**: Fluid transitions for expand/collapse actions
- ✅ **Tooltip Support**: Item labels shown on hover when minimized

## Basic Usage

\`\`\`jsx
<Sidebar 
  theme="light"
  isMinimized={false}
  activeItemId="dashboard"
  onMenuItemClick={(item) => console.log('Menu clicked:', item)}
  onToggleMinimize={(isMinimized) => console.log('Sidebar minimized:', isMinimized)}
/>
\`\`\`

## Advanced Usage with Custom Menu

\`\`\`jsx
const customMenuItems = [
  {
    id: "home",
    label: "Home",
    icon: "🏠",
    path: "/home"
  },
  {
    id: "users",
    label: "User Management", 
    icon: "👥",
    path: "/users"
  },
  {
    id: "orders",
    label: "Orders",
    icon: "🛒", 
    path: "/orders"
  },
  {
    id: "analytics",
    label: "Analytics & Reports",
    icon: "📊",
    path: "/analytics"
  }
];

<Sidebar 
  theme="dark"
  isMinimized={false}
  menuItems={customMenuItems}
  activeItemId="users"
  onMenuItemClick={(item) => {
    // Handle navigation
    router.push(item.path);
    setActiveItem(item.id);
  }}
  onToggleMinimize={(minimized) => {
    setIsMinimized(minimized);
    // Save preference to localStorage
    localStorage.setItem('sidebarMinimized', minimized);
  }}
/>
\`\`\`

## Theme Options

### Light Theme
Clean, professional appearance with subtle gray backgrounds and blue active states.

### Dark Theme  
Modern dark interface with gray-900 background and blue accent colors for active items.

## Menu Item Structure

Each menu item should follow this structure:

\`\`\`javascript
{
  id: "unique-identifier",        // Required: Unique identifier
  label: "Display Name",          // Required: Text shown in menu
  icon: "🔥",                    // Optional: Emoji or icon
  path: "/route-path"            // Optional: Route path for navigation
}
\`\`\`

## Default Menu Items

The component includes default menu items if none are provided:
- Dashboard (📊)
- Projects (📁) 
- Analytics (📈)
- Reports (📋)
- Settings (⚙️)

## Positioning & Layout

The sidebar is positioned fixed with:
- **Top**: 64px (below header)
- **Height**: calc(100vh - 64px) (full height minus header)
- **Width**: 256px expanded, 64px minimized
- **Z-index**: 40 (above most content)

Adjust the top position and height calculations based on your header height.

## State Management

The sidebar manages its own minimized state internally but also accepts external control:

\`\`\`jsx
// Controlled (external state management)
<Sidebar 
  isMinimized={externalMinimizedState}
  onToggleMinimize={setExternalMinimizedState}
/>

// Uncontrolled (internal state management)
<Sidebar 
  onToggleMinimize={(isMinimized) => {
    // Optional callback to track state changes
    console.log('Sidebar state changed:', isMinimized);
  }}
/>
\`\`\`
        `}}},argTypes:{theme:{control:{type:"select"},options:["light","dark"],description:"Visual theme of the sidebar interface"},isMinimized:{control:"boolean",description:"Controls whether the sidebar is minimized or expanded"},menuItems:{control:"object",description:"Array of menu items with id, label, icon, and path properties"},activeItemId:{control:"text",description:"ID of the currently active menu item"},className:{control:"text",description:"Additional CSS classes to apply to the sidebar container"},onToggleMinimize:{action:"sidebar-toggled",description:"Callback function called when sidebar is minimized/expanded"},onMenuItemClick:{action:"menu-item-clicked",description:"Callback function called when a menu item is clicked"}}},o={args:{theme:"light",isMinimized:!1,menuItems:[{id:"dashboard",label:"Dashboard",icon:"📊",path:"/dashboard"},{id:"projects",label:"Projects",icon:"📁",path:"/projects"},{id:"team",label:"Team Management",icon:"👥",path:"/team"},{id:"analytics",label:"Analytics",icon:"📈",path:"/analytics"},{id:"reports",label:"Reports & Insights",icon:"📋",path:"/reports"},{id:"customers",label:"Customer Management",icon:"🏢",path:"/customers"},{id:"inventory",label:"Inventory",icon:"📦",path:"/inventory"},{id:"finance",label:"Finance & Billing",icon:"💰",path:"/finance"},{id:"settings",label:"Settings",icon:"⚙️",path:"/settings"},{id:"support",label:"Help & Support",icon:"🆘",path:"/support"}],activeItemId:"dashboard",className:""},parameters:{docs:{story:{inline:!0}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    theme: "light",
    isMinimized: false,
    menuItems: [{
      id: "dashboard",
      label: "Dashboard",
      icon: "📊",
      path: "/dashboard"
    }, {
      id: "projects",
      label: "Projects",
      icon: "📁",
      path: "/projects"
    }, {
      id: "team",
      label: "Team Management",
      icon: "👥",
      path: "/team"
    }, {
      id: "analytics",
      label: "Analytics",
      icon: "📈",
      path: "/analytics"
    }, {
      id: "reports",
      label: "Reports & Insights",
      icon: "📋",
      path: "/reports"
    }, {
      id: "customers",
      label: "Customer Management",
      icon: "🏢",
      path: "/customers"
    }, {
      id: "inventory",
      label: "Inventory",
      icon: "📦",
      path: "/inventory"
    }, {
      id: "finance",
      label: "Finance & Billing",
      icon: "💰",
      path: "/finance"
    }, {
      id: "settings",
      label: "Settings",
      icon: "⚙️",
      path: "/settings"
    }, {
      id: "support",
      label: "Help & Support",
      icon: "🆘",
      path: "/support"
    }],
    activeItemId: "dashboard",
    className: ""
  },
  parameters: {
    docs: {
      story: {
        inline: true
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,j as default};
