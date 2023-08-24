# tinymce-plugins-customfontsize

 * customfontsize 1.0v 2023-8-24
 * This tinymce-plugins is custom used to set the font size.
   
 * In use this plugin, please refer to the Vue 2.6.10, tinymce 4.9.3
 * And use the editor.translate(), that means using tinymce i18n itself
 * If you use the editor.translate(), please add those codes below in tinymce/langs/en.js, tinymce/langs/zh_TW.js or tinymce/langs/zh_CN.js
 
 * When initializing TinyMCE, import this plug-in and add in the tinymce.init() 
tinymce.init({  
content_style: 'body { font-size: 14px; }',  
plugins: 'customfontsize ...',  
toolbar: 'customfontsize ...'  
});  

* Note, if you don't want to use the plugin form, you may use the customFontSize.js code in:  
window.tinymce.init({  
   ...,  
   setup(editor) {
     editor.addButton('customfontsize', { ..})  
  }
}) 

 * Put the code in plugin.min.js:  
public/tinymce/plugins/customfontsize/plugin.min.js

 * In " tinymce/langs/en.js":  
'Set Font Size': "Set Font Size",  
'Font Size': "Font Size",  

 * In "tinymce/langs/zh_TW.js":  
'Set Font Size': "\u8abf\u6574\u6587\u5b57\u5927\u5c0f",  
'Font Size': "\u6587\u5b57\u5927\u5c0f",

 * In "tinymce/langs/zh_CN.js":  
'Set Font Size': "\u8bbe\u7f6e\u5b57\u4f53\u5927\u5c0f",  
'Font Size': "\u5b57\u4f53\u5927\u5c0f",

 * https://github.com/m10118003/tinymce-plugins-customfontsize
 
 * Copyright 2023, Brian Shih Taiwan
 
 * Licensed under MIT
