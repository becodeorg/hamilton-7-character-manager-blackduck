const body = document.querySelector('body');
body.className =
    'p-10 bg-gradient-to-b from-gray-900 via-gray-400 to-teal-100 flex-col items-center';

// HEADER
const header = document.querySelector('header');
header.className = 'w-full pb-10';
const heading = document.querySelector('.headerContainer');
heading.className =
    'flex items-center justify-center pb-4 text-center flex-col lg:justify-between lg:flex-row';
const h1 = document.querySelector('h1');
h1.className = 'font-blackOps pb-4';
const line = document.querySelector('.seperation__bar');
line.className = 'h-1 bg-white m-auto';

// MULTIPLE CARDS PAGE
const container = document.querySelector('.container');
container.className =
    'grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ';
console.log(container);

// BUTTONS
const addButton = document.querySelector('.btnAdd');
addButton.className =
    'w-20 h-20 bg-slate-500 hover:bg-white/50 rounded-full mt-8 pt-4 text-white hover:text-slate-500 text-center text-5xl font-bold m-auto drop-shadow-lg';

// SINGLE CARD PAGE
const singleCard = document.querySelector('.single__card');
singleCard.className = 'p-6 bg-black/30 rounded-3xl';