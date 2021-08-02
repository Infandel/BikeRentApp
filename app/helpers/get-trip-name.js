import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getTripName(params/*, hash*/) {
  let [rentHours, rentDate, pointName] = params;    
  return htmlSafe(
    `Bike was rented for <strong>${rentHours} hours</strong>
    at the ${pointName} point
    on ${rentDate}
    `);
}

export default helper(getTripName);
