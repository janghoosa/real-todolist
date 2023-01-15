import Login from '@/views/pages/Login';
import TodoList from '@/views/pages/TodoList';

const routes = [
  {
    path: '/',
    component: TodoList,
  },
  {
    path: '/login',
    component: Login,
  },
];

class Router {
  routes: object;
  $app: Element;

  constructor() {
    this.routes = routes;
    this.$app = document.querySelector('#app');
    window.onpopstate = () => {
      this.init();
    };
  }

  async init() {
    const { component } = routes.find(
      (route) => route.path === location.pathname
    );
    return new component(this.$app, {});
  }

  static push(destination) {
    const $app = document.querySelector('#app');
    const { path, component } = routes.find(
      (route) => route.path === destination
    );
    history.pushState(null, null, path);
    return new component($app, {});
  }
}

export default Router;
