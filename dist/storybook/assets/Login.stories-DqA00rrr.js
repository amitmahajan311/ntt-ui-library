import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CVV_m-99.js";import{P as o}from"./index-Ceb0_L1H.js";import"./preload-helper-D9Z9MdNV.js";const x=({title:w="Welcome Back",subtitle:y="Sign in to your account to continue",theme:v="light",logoConfig:m=null,loginInfo:L={},onLoginSuccess:B=()=>{},className:S="",isModal:h=!1,onClose:j=()=>{}})=>{const g={...{name:"Admin",email:"admin@nttdata.com",password:"admin123",role:"Administrator"},...L},[i,k]=u.useState({email:"",password:""}),[b,$]=u.useState(!1),[l,d]=u.useState({}),[r,N]=u.useState(!1),t=u.useMemo(()=>{const a={light:{bg:"bg-white",cardBg:"bg-white",border:"border-gray-200",text:"text-gray-900",subtitle:"text-gray-600",inputBg:"bg-white",inputBorder:"border-gray-300 focus:border-blue-500",inputText:"text-gray-900 placeholder-gray-500",button:"bg-blue-600 hover:bg-blue-700 text-white",shadow:"shadow-lg",logoFallbackBg:"bg-gradient-to-br from-blue-600 to-indigo-700",modalOverlay:"bg-black bg-opacity-50"},dark:{bg:"bg-gray-900",cardBg:"bg-gray-800",border:"border-gray-600",text:"text-white",subtitle:"text-gray-300",inputBg:"bg-gray-700",inputBorder:"border-gray-600 focus:border-blue-400",inputText:"text-white placeholder-gray-400",button:"bg-blue-600 hover:bg-blue-700 text-white",shadow:"shadow-2xl",logoFallbackBg:"bg-gradient-to-br from-blue-500 to-indigo-600",modalOverlay:"bg-black bg-opacity-70"},blue:{bg:"bg-blue-600",cardBg:"bg-white",border:"border-gray-200",text:"text-gray-900",subtitle:"text-gray-600",inputBg:"bg-white",inputBorder:"border-gray-300 focus:border-blue-500",inputText:"text-gray-900 placeholder-gray-500",button:"bg-blue-600 hover:bg-blue-700 text-white",shadow:"shadow-2xl",logoFallbackBg:"bg-gradient-to-br from-blue-600 to-indigo-700",modalOverlay:"bg-black bg-opacity-50"}};return a[v]||a.light},[v]),T=a=>{const s=a.target.value;k(n=>({...n,email:s})),l.email&&d(n=>{const{email:p,...c}=n;return c})},M=a=>{const s=a.target.value;k(n=>({...n,password:s})),l.password&&d(n=>{const{password:p,...c}=n;return c})},D=()=>{const a={};return i.email?/\S+@\S+\.\S+/.test(i.email)||(a.email="Please enter a valid email address"):a.email="Email is required",i.password?i.password.length<6&&(a.password="Password must be at least 6 characters"):a.password="Password is required",d(a),Object.keys(a).length===0},q=async a=>{if(a.preventDefault(),!!D()){N(!0),d({});try{if(await new Promise(s=>setTimeout(s,1e3)),i.email===g.email&&i.password===g.password){const s={email:i.email,name:g.name,role:g.role};B(s),console.log("✅ Login successful!")}else d({general:"Invalid email or password"})}catch{d({general:"Login failed. Please try again."})}finally{N(!1)}}},A=()=>{if(!m)return null;const{type:a="fallback",src:s,title:n}=m,p=e.jsx("div",{className:`w-16 h-16 ${t.logoFallbackBg} rounded-xl flex items-center justify-center shadow-lg`,children:e.jsx("svg",{viewBox:"0 0 24 24",className:"w-10 h-10 text-white fill-current",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})})}),c=e.jsx("div",{className:`w-16 h-16 ${t.logoFallbackBg} rounded-xl flex items-center justify-center shadow-lg`,children:e.jsx("span",{className:"text-2xl font-bold text-white",children:n?.charAt(0).toUpperCase()||"N"})});switch(a){case"logo":return s?e.jsx("img",{src:s,alt:"Company Logo",className:"h-16 w-auto object-contain max-w-[200px]"}):p;case"initial":return c;case"fallback":return p;default:return c}},C=e.jsxs("div",{className:`${t.cardBg} ${t.shadow} rounded-2xl p-8 ${t.border} border ${h?"w-full max-w-md mx-auto":""}`,children:[h&&e.jsx("div",{className:"flex justify-end mb-4",children:e.jsx("button",{onClick:j,className:`${t.subtitle} hover:${t.text} transition-colors p-1 rounded-full hover:bg-gray-100`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})}),m&&e.jsxs("div",{className:"flex flex-col items-center mb-8",children:[A(),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsx("h1",{className:`text-2xl font-bold ${t.text} mb-2`,children:w}),e.jsx("p",{className:`text-sm ${t.subtitle}`,children:y})]})]}),!m&&e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h1",{className:`text-2xl font-bold ${t.text} mb-2`,children:w}),e.jsx("p",{className:`text-sm ${t.subtitle}`,children:y})]}),l.general&&e.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 text-red-600 mr-2",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),e.jsx("span",{className:"text-sm text-red-700 font-medium",children:l.general})]})}),e.jsxs("form",{onSubmit:q,className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{htmlFor:"email",className:`block text-sm font-semibold ${t.text}`,children:["Email Address",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("input",{id:"email",name:"email",type:"email",value:i.email,onChange:T,placeholder:"Enter your email",disabled:r,className:`w-full px-4 py-3 ${t.inputBg} ${t.inputBorder} ${t.inputText} border rounded-lg transition-colors duration-200 ${l.email?"border-red-500 focus:border-red-500":""} ${r?"opacity-50 cursor-not-allowed":""}`}),l.email&&e.jsxs("p",{className:"text-sm text-red-600 flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 mr-1",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l.email]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{htmlFor:"password",className:`block text-sm font-semibold ${t.text}`,children:["Password",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:"password",name:"password",type:b?"text":"password",value:i.password,onChange:M,placeholder:"Enter your password",disabled:r,className:`w-full px-4 py-3 ${t.inputBg} ${t.inputBorder} ${t.inputText} border rounded-lg transition-colors duration-200 ${l.password?"border-red-500 focus:border-red-500":""} ${r?"opacity-50 cursor-not-allowed":""}`}),e.jsx("button",{type:"button",onClick:()=>$(!b),disabled:r,className:`absolute right-3 top-1/2 transform -translate-y-1/2 ${t.subtitle} hover:${t.text} transition-colors ${r?"opacity-50 cursor-not-allowed":""}`,children:b?e.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"})}):e.jsxs("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]}),l.password&&e.jsxs("p",{className:"text-sm text-red-600 flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 mr-1",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l.password]})]}),e.jsx("button",{type:"submit",disabled:r,className:`w-full py-3 px-4 ${t.button} rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`,children:r?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing In..."]}):"Sign In"})]})]});return h?e.jsx("div",{className:`fixed inset-0 z-50 flex items-center justify-center ${t.modalOverlay} p-4`,onClick:a=>{a.target===a.currentTarget&&!r&&j()},children:e.jsx("div",{className:"relative z-10 w-full max-w-md",children:C})}):e.jsx("div",{className:`min-h-screen flex items-center justify-center ${t.bg} ${S}`,children:e.jsx("div",{className:"relative z-10 w-full max-w-md mx-auto px-6",children:C})})};x.propTypes={title:o.string,subtitle:o.string,theme:o.oneOf(["light","dark","blue"]),logoConfig:o.shape({type:o.oneOf(["logo","initial","fallback"]),src:o.string,title:o.string}),loginInfo:o.shape({name:o.string,email:o.string,password:o.string,role:o.string}),onLoginSuccess:o.func.isRequired,className:o.string,isModal:o.bool,onClose:o.func};x.__docgenInfo={description:"",methods:[],displayName:"Login",props:{title:{defaultValue:{value:'"Welcome Back"',computed:!1},description:"",type:{name:"string"},required:!1},subtitle:{defaultValue:{value:'"Sign in to your account to continue"',computed:!1},description:"",type:{name:"string"},required:!1},theme:{defaultValue:{value:'"light"',computed:!1},description:"",type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"dark"',computed:!1},{value:'"blue"',computed:!1}]},required:!1},logoConfig:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{type:{name:"enum",value:[{value:'"logo"',computed:!1},{value:'"initial"',computed:!1},{value:'"fallback"',computed:!1}],required:!1},src:{name:"string",required:!1},title:{name:"string",required:!1}}},required:!1},loginInfo:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{name:{name:"string",required:!1},email:{name:"string",required:!1},password:{name:"string",required:!1},role:{name:"string",required:!1}}},required:!1},onLoginSuccess:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},isModal:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClose:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const R={title:"Components/Login",component:x,tags:["autodocs"],parameters:{layout:"padded",docs:{story:{inline:!0,height:"700px"},description:{component:`
A modern, feature-rich login component with multiple themes, logo configurations, validation, and flexible layout options.

## Features
- ✅ **Multi-Theme Support**: Light, Dark, and Blue themes with consistent styling
- ✅ **Logo Configuration**: Support for custom logos, initials, or fallback icons
- ✅ **Form Validation**: Real-time email and password validation with error messages
- ✅ **Loading States**: Visual feedback during authentication process
- ✅ **Password Toggle**: Show/hide password functionality
- ✅ **Modal Support**: Can be displayed as full-page or modal overlay
- ✅ **Customizable Credentials**: Configure default login information
- ✅ **Responsive Design**: Adapts to different screen sizes
- ✅ **Accessibility**: Proper labels, and keyboard navigation
- ✅ **Error Handling**: Comprehensive error states and messaging

## Basic Usage

\`\`\`jsx
<Login 
  title="Welcome Back"
  subtitle="Sign in to your account to continue"
  theme="light"
  onLoginSuccess={(userData) => console.log('Login successful:', userData)}
/>
\`\`\`

## Advanced Usage with Logo

\`\`\`jsx
<Login 
  title="Company Portal"
  subtitle="Access your dashboard"
  theme="dark"
  logoConfig={{
    type: "logo",
    src: "/company-logo.png",
    title: "Company Name"
  }}
  loginInfo={{
    name: "John Doe",
    email: "john@company.com", 
    password: "password123",
    role: "Manager"
  }}
  onLoginSuccess={(userData) => {
    // Handle successful login
    console.log('User logged in:', userData);
    // Redirect or update app state
  }}
/>
\`\`\`

## Modal Usage

\`\`\`jsx
<Login 
  title="Sign In Required"
  subtitle="Please authenticate to continue"
  theme="blue"
  isModal={true}
  onClose={() => setShowLogin(false)}
  onLoginSuccess={(userData) => {
    setUser(userData);
    setShowLogin(false);
  }}
/>
\`\`\`

## Theme Options

### Light Theme
Clean, professional appearance with subtle shadows and blue accents.

### Dark Theme  
Modern dark interface with gray backgrounds and blue highlights.

### Blue Theme
Blue gradient background with white card overlay for branded experiences.

## Logo Configuration

### Logo Types:
- **logo**: Custom image logo (requires \`src\` prop)
- **initial**: Company initial in styled circle
- **fallback**: Default geometric icon

\`\`\`jsx
// Custom logo
logoConfig={{ type: "logo", src: "/logo.png" }}

// Company initial
logoConfig={{ type: "initial", title: "Company Name" }}

// Default fallback
logoConfig={{ type: "fallback" }}
\`\`\`

## Default Credentials

The component comes with default test credentials:
- **Email**: admin@nttdata.com
- **Password**: admin123
- **Name**: Admin
- **Role**: Administrator

Override with custom \`loginInfo\` prop for your use case.

## Form Validation

- **Email**: Required, must be valid email format
- **Password**: Required, minimum 6 characters
- **Real-time validation**: Errors clear as user types
        `}}},argTypes:{title:{control:"text",description:"Main heading text displayed at the top of the login form"},subtitle:{control:"text",description:"Subtitle text displayed below the main title"},theme:{control:{type:"select"},options:["light","dark","blue"],description:"Visual theme of the login interface"},logoConfig:{control:"object",description:"Logo configuration object with type, src, and title properties"},loginInfo:{control:"object",description:"Default user credentials for testing (name, email, password, role)"},isModal:{control:"boolean",description:"Display as modal overlay instead of full page"},className:{control:"text",description:"Additional CSS classes to apply to the root container"},onLoginSuccess:{action:"login-success",description:"Callback function called when login is successful"},onClose:{action:"modal-closed",description:"Callback function called when modal is closed (modal mode only)"}}},f={args:{title:"Welcome Back",subtitle:"Sign in to your account to continue",theme:"light",logoConfig:{type:"fallback",title:"NTT DATA"},loginInfo:{name:"Admin",email:"admin@nttdata.com",password:"admin123",role:"Administrator"},isModal:!1,className:""},parameters:{docs:{description:{story:`
Default login configuration with fallback logo and light theme. 

**Test Credentials:**
- Email: admin@nttdata.com
- Password: admin123

Try logging in with these credentials to see the success flow, or use different credentials to see validation errors.
        `}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Welcome Back",
    subtitle: "Sign in to your account to continue",
    theme: "light",
    logoConfig: {
      type: "fallback",
      title: "NTT DATA"
    },
    loginInfo: {
      name: "Admin",
      email: "admin@nttdata.com",
      password: "admin123",
      role: "Administrator"
    },
    isModal: false,
    className: ""
  },
  parameters: {
    docs: {
      description: {
        story: \`
Default login configuration with fallback logo and light theme. 

**Test Credentials:**
- Email: admin@nttdata.com
- Password: admin123

Try logging in with these credentials to see the success flow, or use different credentials to see validation errors.
        \`
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const F=["Default"];export{f as Default,F as __namedExportsOrder,R as default};
