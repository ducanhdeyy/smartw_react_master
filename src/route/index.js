import Center from "../views/Report/center";
import District from "../views/Report/district";
import Nest from "../views/Report/nest";
import Province from "../views/Report/province";
import Room from "../views/Report/room";
import Station from "../views/Report/station";


const Report = [
  {path: '/report/nest', component: Nest,label: 'TỔ'},
  {path: '/report/district',component: District,label: 'HUYỆN'},
  {path: '/report/province',component: Province,label: 'THÀNH PHỐ'},
  {path: '/report/room',component: Room,label: 'PHÒNG'},
  {path: '/report/station',component: Station,label: 'TRẠM'},
  {path: '/report/center',component: Center,label: 'TRUNG TÂM'}
]

export default Report;