/* Source and licensing information for the line(s) below can be found at http://nico.lndo.site/modules/contrib/eu_cookie_compliance/js/eu_cookie_compliance.js. */
(function(i,o,e){"use strict";var c;o.behaviors.euCookieCompliancePopup={attach:function(c){i("body").once("eu-cookie-compliance").each(function(){if(e.eu_cookie_compliance.popup_eu_only_js){if(o.eu_cookie_compliance.showBanner()){var c=e.path.baseUrl+e.path.pathPrefix+"eu-cookie-compliance-check",n={};i.getJSON(c,n,function(e){if(e.in_eu){o.eu_cookie_compliance.execute()}
else{o.eu_cookie_compliance.setStatus(2)}})}}
else{o.eu_cookie_compliance.execute()}})},};o.eu_cookie_compliance={};o.eu_cookie_compliance.execute=function(){try{if(!e.eu_cookie_compliance.popup_enabled){return};if(!o.eu_cookie_compliance.cookiesEnabled()){return};var i=o.eu_cookie_compliance.getCurrentStatus();if((i===0&&e.eu_cookie_compliance.method==="default")||i===null||(e.eu_cookie_compliance.withdraw_enabled&&e.eu_cookie_compliance.withdraw_button_on_info_popup)){if(!e.eu_cookie_compliance.disagree_do_not_show_popup||i===null){if(window.matchMedia("(max-width: "+e.eu_cookie_compliance.mobile_breakpoint+"px)").matches&&e.eu_cookie_compliance.use_mobile_message){o.eu_cookie_compliance.createPopup(e.eu_cookie_compliance.mobile_popup_html_info,(i!==null))}
else{o.eu_cookie_compliance.createPopup(e.eu_cookie_compliance.popup_html_info,(i!==null))};o.eu_cookie_compliance.initPopup()}};if(i===1&&e.eu_cookie_compliance.popup_agreed_enabled){o.eu_cookie_compliance.createPopup(e.eu_cookie_compliance.popup_html_agreed);o.eu_cookie_compliance.attachHideEvents()}
else if(i===2&&e.eu_cookie_compliance.withdraw_enabled){if(!e.eu_cookie_compliance.withdraw_button_on_info_popup){o.eu_cookie_compliance.createWithdrawBanner(e.eu_cookie_compliance.withdraw_markup)};o.eu_cookie_compliance.attachWithdrawEvents()}}catch(c){}};o.eu_cookie_compliance.initPopup=function(){o.eu_cookie_compliance.attachAgreeEvents();if(e.eu_cookie_compliance.method==="categories"){var c=[];if(o.eu_cookie_compliance.getCurrentStatus()===null){if(e.eu_cookie_compliance.select_all_categories_by_default){c=e.eu_cookie_compliance.cookie_categories}}
else{c=o.eu_cookie_compliance.getAcceptedCategories()};o.eu_cookie_compliance.setPreferenceCheckboxes(c);o.eu_cookie_compliance.attachSavePreferencesEvents()};if(e.eu_cookie_compliance.withdraw_enabled&&e.eu_cookie_compliance.withdraw_button_on_info_popup){o.eu_cookie_compliance.attachWithdrawEvents();var n=o.eu_cookie_compliance.getCurrentStatus();if(n===1||n===2){i(".eu-cookie-withdraw-button").show()}}};o.eu_cookie_compliance.createWithdrawBanner=function(c){var o=i("<div></div>").html(c),p=i(".eu-cookie-withdraw-banner",o);o.attr("id","sliding-popup");o.addClass("eu-cookie-withdraw-wrapper");if(!e.eu_cookie_compliance.popup_use_bare_css){p.height(e.eu_cookie_compliance.popup_height).width(e.eu_cookie_compliance.popup_width)};o.hide();var n=0;if(e.eu_cookie_compliance.popup_position){o.prependTo("body");n=o.outerHeight();o.show().addClass("sliding-popup-top").addClass("clearfix").css({top:!e.eu_cookie_compliance.fixed_top_position?-(parseInt(i("body").css("padding-top"))+parseInt(i("body").css("margin-top"))+n):-1*n});setTimeout(function(){var c=o.outerHeight();o.animate({top:!e.eu_cookie_compliance.fixed_top_position?-(parseInt(i("body").css("padding-top"))+parseInt(i("body").css("margin-top"))+c):-1*c},e.eu_cookie_compliance.popup_delay,null,function(){o.trigger("eu_cookie_compliance_popup_open")})}.bind(o),0)}
else{if(e.eu_cookie_compliance.better_support_for_screen_readers){o.prependTo("body")}
else{o.appendTo("body")};n=o.outerHeight();o.show().addClass("sliding-popup-bottom").css({bottom:-1*n});setTimeout(function(){var i=o.outerHeight();o.animate({bottom:-1*(i)},e.eu_cookie_compliance.popup_delay,null,function(){o.trigger("eu_cookie_compliance_popup_open")})}.bind(o),0)}};o.eu_cookie_compliance.toggleWithdrawBanner=function(){var o=i("#sliding-popup"),p=i(".eu-cookie-withdraw-tab"),a=(e.eu_cookie_compliance.popup_position?"top":"bottom"),c=o.outerHeight(),n=e.eu_cookie_compliance.popup_position?parseInt(o.css("top"))===(!e.eu_cookie_compliance.fixed_top_position?-(parseInt(i("body").css("padding-top"))+parseInt(i("body").css("margin-top"))):0):parseInt(o.css("bottom"))===0;if(e.eu_cookie_compliance.popup_position){if(n){o.animate({top:!e.eu_cookie_compliance.fixed_top_position?-(parseInt(i("body").css("padding-top"))+parseInt(i("body").css("margin-top"))+c):-1*c},e.eu_cookie_compliance.popup_delay)}
else{o.animate({top:!e.eu_cookie_compliance.fixed_top_position?-(parseInt(i("body").css("padding-top"))+parseInt(i("body").css("margin-top"))):0},e.eu_cookie_compliance.popup_delay)}}
else{if(n){o.animate({"bottom":-1*(c)},e.eu_cookie_compliance.popup_delay)}
else{o.animate({"bottom":0},e.eu_cookie_compliance.popup_delay)}}};o.eu_cookie_compliance.createPopup=function(o,p){var c=i("<div></div>").html(o);c.attr("id","sliding-popup");if(!e.eu_cookie_compliance.popup_use_bare_css){c.height(e.eu_cookie_compliance.popup_height).width(e.eu_cookie_compliance.popup_width)};c.hide();var n=0;if(e.eu_cookie_compliance.popup_position){c.prependTo("body");n=c.outerHeight();c.show().addClass("sliding-popup-top clearfix").css({top:-1*n});if(p!==!0){c.animate({top:0},e.eu_cookie_compliance.popup_delay,null,function(){c.trigger("eu_cookie_compliance_popup_open")})}}
else{if(e.eu_cookie_compliance.better_support_for_screen_readers){c.prependTo("body")}
else{c.appendTo("body")};n=c.outerHeight();c.show().addClass("sliding-popup-bottom").css({bottom:-1*n});if(p!==!0){c.animate({bottom:0},e.eu_cookie_compliance.popup_delay,null,function(){c.trigger("eu_cookie_compliance_popup_open")})}}};o.eu_cookie_compliance.attachAgreeEvents=function(){var p=e.eu_cookie_compliance.popup_clicking_confirmation,a=e.eu_cookie_compliance.popup_scrolling_confirmation;if(e.eu_cookie_compliance.method==="categories"&&e.eu_cookie_compliance.enable_save_preferences_button){i(".agree-button").click(o.eu_cookie_compliance.acceptAllAction)}
else{i(".agree-button").click(o.eu_cookie_compliance.acceptAction)};i(".decline-button").click(o.eu_cookie_compliance.declineAction);if(p){i("a, input[type=submit], button[type=submit]").not(".popup-content *").bind("click.euCookieCompliance",o.eu_cookie_compliance.acceptAction)};if(a){var c=!1,n=function(){if(c){o.eu_cookie_compliance.acceptAction();i(window).off("scroll",n)}
else{c=!0}};i(window).bind("scroll",n)};i(".find-more-button").not(".find-more-button-processed").addClass("find-more-button-processed").click(o.eu_cookie_compliance.moreInfoAction)};o.eu_cookie_compliance.attachSavePreferencesEvents=function(){i(".eu-cookie-compliance-save-preferences-button").click(o.eu_cookie_compliance.savePreferencesAction)};o.eu_cookie_compliance.attachHideEvents=function(){var c=e.eu_cookie_compliance.popup_hide_agreed,n=e.eu_cookie_compliance.popup_clicking_confirmation;i(".hide-popup-button").click(function(){o.eu_cookie_compliance.changeStatus(2)});if(n){i("a, input[type=submit], button[type=submit]").unbind("click.euCookieCompliance")};if(c){i("a, input[type=submit], button[type=submit]").bind("click.euCookieComplianceHideAgreed",function(){o.eu_cookie_compliance.changeStatus(2)})};i(".find-more-button").not(".find-more-button-processed").addClass("find-more-button-processed").click(o.eu_cookie_compliance.moreInfoAction)};o.eu_cookie_compliance.attachWithdrawEvents=function(){i(".eu-cookie-withdraw-button").click(o.eu_cookie_compliance.withdrawAction);i(".eu-cookie-withdraw-tab").click(o.eu_cookie_compliance.toggleWithdrawBanner)};o.eu_cookie_compliance.acceptAction=function(){var t=e.eu_cookie_compliance.popup_agreed_enabled,a=1;if(!t){o.eu_cookie_compliance.setStatus(1);a=2};if(!n&&typeof euCookieComplianceLoadScripts==="function"){euCookieComplianceLoadScripts()};if(typeof c!=="undefined"){clearInterval(c)};if(e.eu_cookie_compliance.method==="categories"){var p=i("#eu-cookie-compliance-categories input:checkbox:checked").map(function(){return i(this).val()}).get();o.eu_cookie_compliance.setAcceptedCategories(p);o.eu_cookie_compliance.loadCategoryScripts(p)};o.eu_cookie_compliance.changeStatus(a)};o.eu_cookie_compliance.acceptAllAction=function(){var i=e.eu_cookie_compliance.cookie_categories;o.eu_cookie_compliance.setPreferenceCheckboxes(i);o.eu_cookie_compliance.acceptAction()};o.eu_cookie_compliance.savePreferencesAction=function(){var c=i("#eu-cookie-compliance-categories input:checkbox:checked").map(function(){return i(this).val()}).get(),a=e.eu_cookie_compliance.popup_agreed_enabled,p=1;if(!a){o.eu_cookie_compliance.setStatus(1);p=2};o.eu_cookie_compliance.setAcceptedCategories(c);if(!n&&typeof euCookieComplianceLoadScripts==="function"){euCookieComplianceLoadScripts()};o.eu_cookie_compliance.loadCategoryScripts(c);o.eu_cookie_compliance.changeStatus(p)};o.eu_cookie_compliance.loadCategoryScripts=function(e){for(var o in e){if(p[o]!==!0&&typeof euCookieComplianceLoadScripts==="function"){euCookieComplianceLoadScripts(e[o]);p[o]=!0}}};o.eu_cookie_compliance.declineAction=function(){o.eu_cookie_compliance.setStatus(0);var c=i("#sliding-popup");if(c.hasClass("sliding-popup-top")){c.animate({top:!e.eu_cookie_compliance.fixed_top_position?-(parseInt(i("body").css("padding-top"))+parseInt(i("body").css("margin-top"))+c.outerHeight()):c.outerHeight()*-1},e.eu_cookie_compliance.popup_delay,null,function(){c.hide()}).trigger("eu_cookie_compliance_popup_close")}
else{c.animate({bottom:c.outerHeight()*-1},e.eu_cookie_compliance.popup_delay,null,function(){c.hide()}).trigger("eu_cookie_compliance_popup_close")}};o.eu_cookie_compliance.withdrawAction=function(){o.eu_cookie_compliance.setStatus(0);o.eu_cookie_compliance.setAcceptedCategories([]);location.reload()};o.eu_cookie_compliance.moreInfoAction=function(){if(e.eu_cookie_compliance.disagree_do_not_show_popup){o.eu_cookie_compliance.setStatus(0);if(e.eu_cookie_compliance.withdraw_enabled&&e.eu_cookie_compliance.withdraw_button_on_info_popup){i("#sliding-popup .eu-cookie-compliance-banner").trigger("eu_cookie_compliance_popup_close").hide()}
else{i("#sliding-popup").trigger("eu_cookie_compliance_popup_close").remove()}}
else{if(e.eu_cookie_compliance.popup_link_new_window){window.open(e.eu_cookie_compliance.popup_link)}
else{window.location.href=e.eu_cookie_compliance.popup_link}}};o.eu_cookie_compliance.getCurrentStatus=function(){var c=(typeof e.eu_cookie_compliance.cookie_name==="undefined"||e.eu_cookie_compliance.cookie_name==="")?"cookie-agreed":e.eu_cookie_compliance.cookie_name,o=i.cookie(c);o=parseInt(o);if(isNaN(o)){o=null};return o};o.eu_cookie_compliance.setPreferenceCheckboxes=function(e){for(var o in e){i("#eu-cookie-compliance-categories input:checkbox[value='"+e[o]+"']").prop("checked",!0)}};o.eu_cookie_compliance.getAcceptedCategories=function(){var p=e.eu_cookie_compliance.cookie_categories,a=(typeof e.eu_cookie_compliance.cookie_name==="undefined"||e.eu_cookie_compliance.cookie_name==="")?"cookie-agreed-categories":e.eu_cookie_compliance.cookie_name+"-categories",c=i.cookie(a),n=[];if(c!==null&&typeof c!=="undefined"){c=JSON.parse(c);n=c};if(o.eu_cookie_compliance.fix_first_cookie_category&&!i.inArray(p[0],n)){n.push(p[0])};return n};o.eu_cookie_compliance.changeStatus=function(c){var n=o.eu_cookie_compliance.getCurrentStatus(),p=e.eu_cookie_compliance.reload_page;if(n===c){return};if(e.eu_cookie_compliance.popup_position){i(".sliding-popup-top").animate({top:!e.eu_cookie_compliance.fixed_top_position?-(parseInt(i("body").css("padding-top"))+parseInt(i("body").css("margin-top"))+i("#sliding-popup").outerHeight()):i("#sliding-popup").outerHeight()*-1},e.eu_cookie_compliance.popup_delay,function(){if(c===1&&n===null&&!p){i(".sliding-popup-top").not(".eu-cookie-withdraw-wrapper").html(e.eu_cookie_compliance.popup_html_agreed).animate({top:!e.eu_cookie_compliance.fixed_top_position?-(parseInt(i("body").css("padding-top"))+parseInt(i("body").css("margin-top"))):0},e.eu_cookie_compliance.popup_delay);o.eu_cookie_compliance.attachHideEvents()}
else if(n===1&&!(e.eu_cookie_compliance.withdraw_enabled&&e.eu_cookie_compliance.withdraw_button_on_info_popup)){i(".sliding-popup-top").not(".eu-cookie-withdraw-wrapper").trigger("eu_cookie_compliance_popup_close").remove()};o.eu_cookie_compliance.showWithdrawBanner(c)})}
else{i(".sliding-popup-bottom").animate({bottom:i("#sliding-popup").outerHeight()*-1},e.eu_cookie_compliance.popup_delay,function(){if(c===1&&n===null&&!p){i(".sliding-popup-bottom").not(".eu-cookie-withdraw-wrapper").html(e.eu_cookie_compliance.popup_html_agreed).animate({bottom:0},e.eu_cookie_compliance.popup_delay);o.eu_cookie_compliance.attachHideEvents()}
else if(n===1){if(e.eu_cookie_compliance.withdraw_enabled&&e.eu_cookie_compliance.withdraw_button_on_info_popup){if(window.matchMedia("(max-width: "+e.eu_cookie_compliance.mobile_breakpoint+"px)").matches&&e.eu_cookie_compliance.use_mobile_message){i(".sliding-popup-bottom").not(".eu-cookie-withdraw-wrapper").html(e.eu_cookie_compliance.mobile_popup_html_info)}
else{i(".sliding-popup-bottom").not(".eu-cookie-withdraw-wrapper").html(e.eu_cookie_compliance.popup_html_info)};o.eu_cookie_compliance.initPopup()}
else{i(".sliding-popup-bottom").not(".eu-cookie-withdraw-wrapper").trigger("eu_cookie_compliance_popup_close").remove()}};o.eu_cookie_compliance.showWithdrawBanner(c)})};if(e.eu_cookie_compliance.reload_page){location.reload()};o.eu_cookie_compliance.setStatus(c)};o.eu_cookie_compliance.showWithdrawBanner=function(i){if(i===2&&e.eu_cookie_compliance.withdraw_enabled){if(!e.eu_cookie_compliance.withdraw_button_on_info_popup){o.eu_cookie_compliance.createWithdrawBanner(e.eu_cookie_compliance.withdraw_markup)};o.eu_cookie_compliance.attachWithdrawEvents()}};o.eu_cookie_compliance.setStatus=function(o){var n=new Date(),a=e.eu_cookie_compliance.domain?e.eu_cookie_compliance.domain:"",c=e.path.baseUrl,t=(typeof e.eu_cookie_compliance.cookie_name==="undefined"||e.eu_cookie_compliance.cookie_name==="")?"cookie-agreed":e.eu_cookie_compliance.cookie_name;if(c.length>1){var p=c.length-1;if(c.lastIndexOf("/")===p){c=c.substring(0,p)}};var r=parseInt(e.eu_cookie_compliance.cookie_session);if(r){i.cookie(t,o,{path:c,domain:a})}
else{var l=parseInt(e.eu_cookie_compliance.cookie_lifetime);n.setDate(n.getDate()+l);i.cookie(t,o,{expires:n,path:c,domain:a})};i(document).trigger("eu_cookie_compliance.changeStatus",[o]);if(e.eu_cookie_compliance.store_consent&&((o===1&&e.eu_cookie_compliance.popup_agreed_enabled)||(o===2&&!e.eu_cookie_compliance.popup_agreed_enabled))){var u=e.path.baseUrl+e.path.pathPrefix+"eu-cookie-compliance/store_consent/banner";i.post(u,{},function(e){})}};o.eu_cookie_compliance.setAcceptedCategories=function(o){var n=new Date(),t=e.eu_cookie_compliance.domain?e.eu_cookie_compliance.domain:"",c=e.eu_cookie_compliance.domain_all_sites?"/":e.path.baseUrl,u=(typeof e.eu_cookie_compliance.cookie_name==="undefined"||e.eu_cookie_compliance.cookie_name==="")?"cookie-agreed-categories":e.eu_cookie_compliance.cookie_name+"-categories";if(c.length>1){var a=c.length-1;if(c.lastIndexOf("/")===a){c=c.substring(0,a)}};var p=JSON.stringify(o),r=parseInt(e.eu_cookie_compliance.cookie_session);if(r){i.cookie(u,p,{path:c,domain:t})}
else{var l=parseInt(e.eu_cookie_compliance.cookie_lifetime);n.setDate(n.getDate()+l);i.cookie(u,p,{expires:n,path:c,domain:t})};i(document).trigger("eu_cookie_compliance.changePreferences",[o])};o.eu_cookie_compliance.hasAgreed=function(e){var c=o.eu_cookie_compliance.getCurrentStatus(),i=(c===1||c===2);if(e!==undefined&&i){i=o.eu_cookie_compliance.hasAgreedWithCategory(e)};return i};o.eu_cookie_compliance.hasAgreedWithCategory=function(c){var n=e.eu_cookie_compliance.cookie_categories,p=o.eu_cookie_compliance.getAcceptedCategories();if(e.eu_cookie_compliance.fix_first_cookie_category&&c===n[0]){return!0};return i.inArray(c,p)!==-1};o.eu_cookie_compliance.showBanner=function(){var c=!1,i=o.eu_cookie_compliance.getCurrentStatus();if((i===0&&e.eu_cookie_compliance.method==="default")||i===null){if(!e.eu_cookie_compliance.disagree_do_not_show_popup||i===null){c=!0}}
else if(i===1&&e.eu_cookie_compliance.popup_agreed_enabled){c=!0};return c};o.eu_cookie_compliance.cookiesEnabled=function(){var e=(navigator.cookieEnabled);if(typeof navigator.cookieEnabled==="undefined"&&!e){i.cookie("testcookie","testcookie",{expires:100});e=(i.cookie("testcookie").indexOf("testcookie")!==-1)};return(e)};o.eu_cookie_compliance.isWhitelisted=function(i){if(i.indexOf("SESS")===0||i.indexOf("SSESS")===0){return!0};var c=e.eu_cookie_compliance.whitelisted_cookies.split(/\r\n|\n|\r/g);c.push((typeof e.eu_cookie_compliance.cookie_name==="undefined"||e.eu_cookie_compliance.cookie_name==="")?"cookie-agreed":e.eu_cookie_compliance.cookie_name);c.push((typeof e.eu_cookie_compliance.cookie_name==="undefined"||e.eu_cookie_compliance.cookie_name==="")?"cookie-agreed-categories":e.eu_cookie_compliance.cookie_name+"-categories");for(var n in c){if(i===c[n]){return!0};if(e.eu_cookie_compliance.method==="categories"){var p=c[n].indexOf(":");if(p!==-1){var a=c[n].substr(0,p),t=c[n].substr(p+1);if(t===i&&o.eu_cookie_compliance.hasAgreedWithCategory(a)){return!0}}}};return!1};var n=!1,p=[];i(function(){if(o.eu_cookie_compliance.hasAgreed()||(o.eu_cookie_compliance.getCurrentStatus()===null&&e.eu_cookie_compliance.method!=="opt_in"&&e.eu_cookie_compliance.method!=="categories")){if(typeof euCookieComplianceLoadScripts==="function"){euCookieComplianceLoadScripts()};n=!0;if(e.eu_cookie_compliance.method==="categories"){var i=o.eu_cookie_compliance.getAcceptedCategories();o.eu_cookie_compliance.loadCategoryScripts(i)}}});if((e.eu_cookie_compliance.method==="opt_in"&&(o.eu_cookie_compliance.getCurrentStatus()===null||!o.eu_cookie_compliance.hasAgreed()))||(e.eu_cookie_compliance.method==="opt_out"&&!o.eu_cookie_compliance.hasAgreed()&&o.eu_cookie_compliance.getCurrentStatus()!==null)||(e.eu_cookie_compliance.method==="categories")){var c=setInterval(function(){var t=i.cookie();for(var n in t){var a=!0,e=window.location.hostname,c=!1,p=0;a=!o.eu_cookie_compliance.isWhitelisted(n);if(a){while(!c&&e!==""){c=i.removeCookie(n,{domain:"."+e,path:"/"});if(!c){c=i.removeCookie(n,{domain:e,path:"/"})};p=e.indexOf(".");e=(p===-1)?"":e.substring(p+1)};if(!c){document.cookie=n+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;"}}}},5000)}})(jQuery,Drupal,drupalSettings);
/* Source and licensing information for the above line(s) can be found at http://nico.lndo.site/modules/contrib/eu_cookie_compliance/js/eu_cookie_compliance.js. */