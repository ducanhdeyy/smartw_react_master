import Center from "../views/Report/Center/center";
import District from "../views/Report/District/district";
import Nest from "../views/Report/Nest/nest";
import Province from "../views/Report/Province/province";
import Room from "../views/Report/Room/room";
import Station from "../views/Report/Station/station";


const Report = [
  {path: '/report/nest', component: Nest},
  {path: '/report/district',component: District},
  {path: '/report/province',component: Province},
  {path: '/report/room',component: Room},
  {path: '/report/station',component: Station},
  {path: '/report/center',component: Center}
]

export default Report;