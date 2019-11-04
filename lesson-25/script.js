jQuery.noConflict();
let el = jQuery('#test');
el.addClass('ref');

jQuery(document).ready(() => {
  console.log('jQuery loaded event');
});

let el2 = jQuery('<div><p>Вася</p></div>');

jQuery(el).prepend(el2);

console.dir(el);

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event');
});


setTimeout(() => {
  jQuery('html, body').animate({ scrollTop: 0 }, 3000);
}, 3000);
