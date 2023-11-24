(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),c=(i(16),i(8)),s=i(2),l=(i(17),i(1)),r=(i(18),i(19),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=i(5),b=i(7),j=i(10),h=i.n(j);var u=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,o=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0!==d&&d,b=e.onChange,j=void 0===b?function(){}:b,u=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),g=Object(s.a)(u,1)[0],O=Object(l.useState)(!1),p=Object(s.a)(O,2),v=p[0],f=p[1],x=v&&m&&!i;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:g,children:n}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{name:t,type:"text",id:g,"data-cy":"movie-".concat(t),className:h()("input",{"is-danger":x}),placeholder:o,value:i,onChange:function(e){return j(e)},onBlur:function(){return f(!0)}})}),x&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},g=function(e){var t=e.onAdd,i=Object(l.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(l.useState)(0),d=Object(s.a)(o,2),j=d[0],h=d[1];var g=function(e){var t=e.target,i=t.name,a=t.value;c((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(m.a)({},i,a))}))};return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t(n),c({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),h(j+1)},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(u,{name:"title",label:"Title",value:n.title,onChange:g,required:!0}),Object(r.jsx)(u,{name:"description",label:"Description",value:n.description,onChange:g}),Object(r.jsx)(u,{name:"imgUrl",label:"Image URL",value:n.imgUrl,onChange:g,required:!0}),Object(r.jsx)(u,{name:"imdbUrl",label:"Imdb URL",value:n.imdbUrl,onChange:g,required:!0}),Object(r.jsx)(u,{name:"imdbId",label:"Imdb ID",value:n.imdbId,onChange:g,required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!(n.title.trim()&&n.imgUrl.trim()&&n.imdbUrl.trim()&&n.imdbId.trim()),children:"Add"})})})]},j)},O=i(11),p=function(){var e=Object(l.useState)(Object(c.a)(O)),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(g,{onAdd:function(e){return a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};n.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.78970b44.chunk.js.map