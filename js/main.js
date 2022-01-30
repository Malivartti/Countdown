import {intervalToDuration, formatDuration} from 'date-fns';
import Cookies from 'js-cookie'

let index = 0;

if (Cookies.get('endTime')) {
  document.querySelector('.input').value = Cookies.get('endTime')
  updateTime(Cookies.get('endTime'), index++)
};

document.querySelector('.form').addEventListener('submit', function() {
  endTime = this.firstElementChild.value;
  Cookies.set('endTime', endTime, {expires: 1/24})
  updateTime(endTime, index++)
});

function getInterval(end) {
  return intervalToDuration ( {
    start: new Date(), 
    end: new Date(end),
  });
}

function updateTime(endTime, ind) {
  const timer = setInterval(() => {
    if (ind + 1 != index) clearTimeout(timer);

    document.querySelector('.result').textContent = formatDuration(getInterval(endTime));
  }, 1000);
}