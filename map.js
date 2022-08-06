// Disable copy content, prevent blacked out text, prevent "I" key, "J" key, "S" key + macOS, "U" key, "F12" key
jQuery(document).ready(function(){
    jQuery(function() {
          jQuery(this).bind("contextmenu", function(event) {
              event.preventDefault();
              alert('𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻\n\n𝘚𝘰𝘳𝘳𝘺 @𝘶𝘴𝘦𝘳 𝘳𝘪𝘨𝘩𝘵 𝘤𝘭𝘪𝘤𝘬 𝘪𝘴 𝘥𝘪𝘴𝘢𝘣𝘭𝘦. 𝘕𝘰𝘵𝘪𝘧𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘧𝘳𝘰𝘮 𝘗𝘳𝘢𝘣𝘢𝘴𝘩𝘸𝘢𝘳𝘢 ( 𝘈𝘥𝘮𝘪𝘯 𝘰𝘧 𝘞𝘦𝘣𝘴𝘪𝘵𝘦 )')
          });
      });
      (function() {
          'use strict';
          let style = document.createElement('style');
          style.innerHTML = '*{ user-select: none !important; }';
   
      document.body.appendChild(style);
      })();
      window.onload = function () {
          document.addEventListener("contextmenu", function (e) {
              e.preventDefault();
              }, false);
              document.addEventListener("keydown", function (e) {
                  
                 if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                     disabledEvent(e);
                 }
                  
                 if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                     disabledEvent(e);
                 }
                  
                 if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                     disabledEvent(e);
                 }
                  
                 if (e.ctrlKey && e.keyCode == 85) {
                     disabledEvent(e);
                 }
                 
                 if (event.keyCode == 123) {
                     disabledEvent(e);
                 }
              }, false);
              function disabledEvent(e) {
                 if (e.stopPropagation) {
                     e.stopPropagation();
                 } else if (window.event) {
                     window.event.cancelBubble = true;
                 }
                 e.preventDefault();
                 return false;
               
          }
      }
  });
  