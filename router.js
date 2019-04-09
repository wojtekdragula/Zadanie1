var Wszystko = { template: "results.html" };
var Wiadomosci = { template: "" };
var Grafika = { template: "" };
var Zakupy = { template: "" };
var Filmy = { template: "" };
var Wiecej = { template: "" };
var Ustawienia = { template: "" };
var Narzedzia = { template: "" };

var routes = [
  { path: '/', component: Wszystko },
  { path: '/wiadomosci', component: Wiadomosci},
  { path: '/mapy', component: Mapy},
  { path: '/filmy', component: Filmy},
  { path: '/grafika', component: Grafika},
  { path: '/wiecej', component: Wiecej},
  { path: '/ustawienia', component: Ustawienia},
  { path: '/narzedzia', component: Narzedzia},
];

var router = new VueRouter({
  routes: routes,
  mode: 'history',
});

var app = new Vue({
  el: '.top-menu',
  router: router
});
