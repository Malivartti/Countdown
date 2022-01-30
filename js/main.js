import {intervalToDuration, formatDuration} from 'date-fns';
import Cookies from 'js-cookie'

if (Cookies.get('endTime')) {
  document.querySelector('.input').value = Cookies.get('endTime')
  updateTime(Cookies.get('endTime'))
};

document.querySelector('.form').addEventListener('submit', function() {
  endTime = this.firstElementChild.value;
  Cookies.set('endTime', endTime, {expires: 1/24})
  updateTime(endTime)
});

function getInterval(end) {
  return intervalToDuration ( {
    start: new Date(), 
    end: new Date(end),
  });
}

function updateTime(endTime) {
  setInterval(() => {
    document.querySelector('.result').textContent = formatDuration(getInterval(endTime));
  }, 1000);
}