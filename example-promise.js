// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('Ei löyvy');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('Ei löytyny');
//     }, 1000);
//   });
// }
//
// getTempPromise('Oulu').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise err', err);
//
// })
function addPromise (a, b) {
  return new Promise( function (resolve, reject) {
        setTimeout(function () {
          if (typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
          } else {
            reject('Ei oo numeroa');
          }
        }, 1000);
  } )

}

addPromise( 4, 3 ).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise err', err);

})

addPromise( 'haa', 3 ).then(function (sum) {
  console.log('ei näy');
}, function (err) {
  console.log('virhe err', err);

})
