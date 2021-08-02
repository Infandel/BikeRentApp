import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getBicycleName(params/*, hash*/) {
  let [rentPoint, bicycleItself, averageRentTime] = params;
  return htmlSafe(`<strong>${rentPoint}</strong>.
  ${bicycleItself} bicycle.
   Average rent time is: ${averageRentTime}
   `);
}

export default helper(getBicycleName);

