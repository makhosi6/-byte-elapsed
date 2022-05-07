
let unixtime = 1651849381


const now = new Date().getTime() // - (2*60*60*1000);
  console.log('Unixtime ' + unixtime)
  console.log('now ' + now)
  const duration = Math.abs(unixtime - now)
  //const lastupdated = msToTime(elapes)
  let lastupdated = ''
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)



  console.log({
      seconds,minutes,hours, duration, unixtime
  })


 function getFormattedDate() {
    const t = new Date(1651849381)
    let birthday = new Date(628021800000)   
    console.log(t, birthday)
    if (!t)
        return;
    const e = new Date().getTime() - t.getTime()
      , n = Math.floor(e / 1e3)
      , s = Math.floor(n / 60)
      , r = Math.floor(s / 60)
      , u = Math.floor(r / 24)
      , g = n - s * 60
      , _ = s - r * 60
      , M = r - u * 24;
    return s < 1 ? applyPrecision([`${n}s`]) : r < 1 ? applyPrecision([`${s}m`, `${g}s`]) : u < 1 ? applyPrecision([`${r}h`, `${_}m`, `${g}s`]) : applyPrecision([`${u}d`, `${M}h`, `${_}m`, `${g}s`])
}

function applyPrecision(t: any[]) {
  const e = Number( t.length);
  return t.slice(0, e).join(" ")
}

console.log(getFormattedDate())