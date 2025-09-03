import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CVV_m-99.js";import{P as e}from"./index-Ceb0_L1H.js";import"./preload-helper-D9Z9MdNV.js";const i=({companyName:d="NTT DATA",theme:m="light",links:o=[],showStatus:p=!1,statusInfo:n=null,version:l=null,className:f="",sticky:h=!0})=>{const c={light:{bg:"bg-white",border:"border-gray-200",text:"text-gray-700",linkText:"text-gray-600 hover:text-gray-900",statusActive:"text-green-600",statusInactive:"text-red-600"},dark:{bg:"bg-gray-900",border:"border-gray-700",text:"text-gray-200",linkText:"text-gray-300 hover:text-white",statusActive:"text-green-400",statusInactive:"text-red-400"},blue:{bg:"bg-blue-600",border:"border-blue-500",text:"text-blue-50",linkText:"text-blue-100 hover:text-white",statusActive:"text-green-200",statusInactive:"text-red-200"}},a=c[m]||c.light,b=()=>o.length?t.jsx("div",{className:"flex items-center space-x-6",children:o.map(s=>t.jsx("button",{onClick:()=>s.onClick?.(s),className:`text-sm ${a.linkText} transition-colors duration-200 hover:underline`,children:s.label},s.id))}):null,y=()=>{if(!p||!n)return null;const{isActive:s,label:u}=n;return t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx("div",{className:`w-2 h-2 rounded-full ${s?"bg-green-500":"bg-red-500"} shadow-sm`}),t.jsx("span",{className:`text-sm font-medium ${s?a.statusActive:a.statusInactive}`,children:u})]})},g=()=>`${`${a.bg} ${a.border} border-t`} ${h?"fixed bottom-0 left-0 right-0 z-50":""} ${f}`.trim();return t.jsx("footer",{className:g(),children:t.jsx("div",{className:"max-w-7xl mx-auto px-6 py-4",children:t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("div",{children:t.jsxs("span",{className:`text-sm ${a.text} font-medium`,children:["© ",new Date().getFullYear()," ",d,". All rights reserved."]})}),t.jsxs("div",{className:"flex items-center space-x-6",children:[b(),y(),l&&t.jsxs("span",{className:`text-sm ${a.text} font-mono`,children:["v",l]})]})]})})})};i.propTypes={companyName:e.string,theme:e.oneOf(["light","dark","blue"]),links:e.arrayOf(e.shape({id:e.string.isRequired,label:e.string.isRequired,onClick:e.func})),showStatus:e.bool,statusInfo:e.shape({isActive:e.bool.isRequired,label:e.string.isRequired}),version:e.string,className:e.string,sticky:e.bool};i.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{companyName:{defaultValue:{value:'"NTT DATA"',computed:!1},description:"",type:{name:"string"},required:!1},theme:{defaultValue:{value:'"light"',computed:!1},description:"",type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"dark"',computed:!1},{value:'"blue"',computed:!1}]},required:!1},links:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!0},onClick:{name:"func",required:!1}}}},required:!1},showStatus:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},statusInfo:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{isActive:{name:"bool",required:!0},label:{name:"string",required:!0}}},required:!1},version:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},sticky:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};const N={title:"Components/Footer",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`

A professional footer component with theme support, status indicators, and customizable links.

## Features
- ✅ Theme support (Light, Dark, Blue)
- ✅ Status indicators with active/inactive states
- ✅ Customizable footer links
- ✅ Version display
- ✅ Sticky positioning
- ✅ Company branding

## Basic Usage

\`\`\`jsx
// Simple footer
<Footer companyName="Your Company" />

// With all features
<Footer 
  companyName="NTT DATA"
  theme="light"
  links={[
    { id: "privacy", label: "Privacy Policy", onClick: () => {} },
    { id: "terms", label: "Terms of Service", onClick: () => {} }
  ]}
  showStatus={true}
  statusInfo={{ isActive: true, label: "All Systems Operational" }}
  version="1.0.0"
  sticky={true}
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`companyName\` | string | "NTT DATA" | Company name for copyright |
| \`theme\` | string | "light" | Theme: "light", "dark", "blue" |
| \`links\` | array | [] | Footer navigation links |
| \`showStatus\` | boolean | false | Show system status indicator |
| \`statusInfo\` | object | null | Status data: {isActive, label} |
| \`version\` | string | null | Application version number |
| \`sticky\` | boolean | true | Stick footer to bottom |
| \`className\` | string | "" | Additional CSS classes |
        `}}},argTypes:{companyName:{control:"text",description:"Company name displayed in copyright"},theme:{control:{type:"select"},options:["light","dark","blue"],description:"Visual theme of the footer"},links:{control:"object",description:"Array of footer navigation links"},showStatus:{control:"boolean",description:"Display system status indicator"},statusInfo:{control:"object",description:"Status information: {isActive: boolean, label: string}"},version:{control:"text",description:"Application version number"},sticky:{control:"boolean",description:"Stick footer to bottom of viewport"},className:{control:"text",description:"Additional CSS classes"},onLinkClick:{action:"link-clicked",description:"Callback when footer link is clicked"}}},r={args:{companyName:"NTT DATA",theme:"light",links:[{id:"privacy",label:"Privacy Policy"},{id:"terms",label:"Terms of Service"},{id:"support",label:"Support"}],showStatus:!0,statusInfo:{isActive:!0,label:"All Systems Operational"},version:"1.0.0",sticky:!0,className:""},parameters:{docs:{story:{inline:!0,height:"100px"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: "NTT DATA",
    theme: "light",
    links: [{
      id: "privacy",
      label: "Privacy Policy"
    }, {
      id: "terms",
      label: "Terms of Service"
    }, {
      id: "support",
      label: "Support"
    }],
    showStatus: true,
    statusInfo: {
      isActive: true,
      label: "All Systems Operational"
    },
    version: "1.0.0",
    sticky: true,
    className: ""
  },
  parameters: {
    docs: {
      story: {
        inline: true,
        height: "100px"
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,N as default};
