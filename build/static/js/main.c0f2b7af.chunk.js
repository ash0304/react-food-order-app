(this["webpackJsonpreact-food-order-app"]=this["webpackJsonpreact-food-order-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__33TTc",summary:"CartItem_summary__GWlmw",price:"CartItem_price__3ALQs",amount:"CartItem_amount__1-7wQ",actions:"CartItem_actions__1vICh"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__29NnX",total:"Cart_total__c8F6P",actions:"Cart_actions__28cFF","button--alt":"Cart_button--alt__3fNWo",button:"Cart_button__iaqcM"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2ZGAp",icon:"HeaderCartButton_icon__1ulhX",badge:"HeaderCartButton_badge__3tqbH",bump:"HeaderCartButton_bump__jtC-s"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2ytCM",description:"MealItem_description__1md2j",price:"MealItem_price__23pdv"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1Egt8",modal:"Modal_modal__iB0Do","slide-down":"Modal_slide-down__3Wfkm"}},,function(e,t,n){e.exports={header:"Header_header__1FU51","main-image":"Header_main-image__1JzK7"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__2k5rs"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3da6g","meals-appear":"AvailableMeals_meals-appear__1T1Y2"}},function(e,t,n){e.exports={input:"Input_input__GPtui"}},function(e,t,n){e.exports={form:"MealItemForm_form__3E8b6"}},function(e,t,n){e.exports={card:"Card_card__1hKQ7"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),o=n.n(r),s=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),l=n(0),d=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(8),u=n.n(m),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(s).items,m=o.reduce((function(e,t){return e+t.amount}),0),j="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(l.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(l.jsx)("span",{className:u.a.icon,children:Object(l.jsx)(d,{})}),Object(l.jsx)("span",{children:"Your Cart"}),Object(l.jsx)("span",{className:u.a.badge,children:m})]})},b=n.p+"static/media/meals.2971f633.jpg",p=n(13),x=n.n(p),O=function(e){return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsxs)("header",{className:x.a.header,children:[Object(l.jsx)("h1",{children:"ReactMeals"}),Object(l.jsx)(j,{onClick:e.onShowCart})]}),Object(l.jsx)("div",{className:x.a["main-image"],children:Object(l.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(15),f=n.n(h),_=function(){return Object(l.jsxs)("section",{className:f.a.summary,children:[Object(l.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(l.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(l.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=n(2),A=n(17),N=n.n(A),y=o.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:N.a.input,children:[Object(l.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(l.jsx)("input",Object(g.a)({ref:t},e.input))]})})),I=n(18),M=n.n(I),w=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(l.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddtoCart(a)},children:[Object(l.jsx)(y,{ref:o,label:"Amount",input:{id:"amount".concat(e.id),type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(l.jsx)("button",{children:"+ Add"}),!a&&Object(l.jsx)("p",{children:"Please Enter a valid amount (1-5)."})]})},k=n(10),F=n.n(k),H=function(e){var t=Object(r.useContext)(s),n="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:F.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("div",{className:F.a.description,children:e.description}),Object(l.jsx)("div",{className:F.a.price,children:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)(w,{onAddtoCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},B=n(19),E=n.n(B),S=function(e){return Object(l.jsx)("div",{className:E.a.card,children:e.children})},D=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],R=function(){var e=D.map((function(e){return Object(l.jsx)(H,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(l.jsx)("section",{className:C.a.meals,children:Object(l.jsx)(S,{children:Object(l.jsx)("ul",{children:e})})})},T=function(){return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)(_,{}),Object(l.jsx)(R,{})]})},P=n(11),z=n.n(P),G=function(e){return Object(l.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},q=function(e){return Object(l.jsx)("div",{className:z.a.modal,children:Object(l.jsx)("div",{className:z.a.content,children:e.children})})},J=document.getElementById("overlays"),Q=function(e){return Object(l.jsxs)(o.a.Fragment,{children:[c.a.createPortal(Object(l.jsx)(G,{onClose:e.onClose}),J),c.a.createPortal(Object(l.jsx)(q,{children:e.children}),J)]})},V=n(4),W=n.n(V),Y=function(e){var t="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:W.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:W.a.summary,children:[Object(l.jsx)("span",{className:W.a.price,children:t}),Object(l.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(l.jsxs)("div",{className:W.a.actions,children:[Object(l.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(l.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(5),K=n.n($),X=function(e){var t=Object(r.useContext)(s),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.addItem(Object(g.a)(Object(g.a)({},e),{},{amount:1}))},i=function(e){t.removeItem(e)},o=Object(l.jsx)("ul",{className:K.a["cart-items"],children:t.items.map((function(e){return Object(l.jsx)(Y,{name:e.name,amount:e.amount,price:e.price,onAdd:c.bind(null,e),onRemove:i.bind(null,e.id)},e.id)}))});return Object(l.jsxs)(Q,{onClose:e.onClose,children:[o,Object(l.jsxs)("div",{className:K.a.total,children:[Object(l.jsx)("span",{children:"Total Amount"}),Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("div",{className:K.a.actions,children:[Object(l.jsx)("button",{className:K.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(l.jsx)("button",{className:K.a.button,children:"Order"})]})]})},L=n(14),U={items:[],totalAmount:0},Z=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(g.a)(Object(g.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(L.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],d=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(g.a)(Object(g.a)({},l),{},{amount:l.amount-1});(o=Object(L.a)(e.items))[s]=m}return{items:o,totalAmount:d}}return U},ee=function(e){var t=Object(r.useReducer)(Z,U),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(l.jsx)(s.Provider,{value:o,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(ee,{children:[n&&Object(l.jsx)(X,{onClose:function(){a(!1)}}),Object(l.jsx)(O,{onShowCart:function(){a(!0)}}),Object(l.jsx)("main",{children:Object(l.jsx)(T,{})})]})};c.a.render(Object(l.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.c0f2b7af.chunk.js.map