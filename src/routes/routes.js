import Account from "../components/Account/Account";
import Documentation from "../components/Documentation/Documentation";
import Landing from "../components/Landing/Landing";


const routes = [
  {
    id: 1,
    component: Landing,
    path: "/",
  },
  {
    id: 2,
    component: Account,
    path: "/account",
  },
  {
    id: 3,
    component: Documentation,
    path: "/documentation",
  },
];

export default routes;
