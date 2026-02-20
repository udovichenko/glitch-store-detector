(function () {
  var ua = navigator.userAgent || navigator.vendor || ''
  var platform = navigator.platform || ''
  var maxTP = navigator.maxTouchPoints || 0

  var isIOS =
    /iP(hone|od|ad)/i.test(ua) ||
    /iP(hone|od|ad)/i.test(platform) ||
    (/Mac/i.test(platform) && maxTP > 1) ||
    (/Macintosh/i.test(ua) && maxTP > 1)

  var isAndroid = /Android/i.test(ua) || /HarmonyOS/i.test(ua) || /Huawei/i.test(ua)

  var platformKey = isIOS ? 'ios' : isAndroid ? 'android' : 'fallback'

  setTimeout(function () {
    document.getElementById('screen-detecting').classList.add('hidden')
    document.getElementById('screen-main').classList.remove('hidden')

    document.querySelectorAll('[data-show]').forEach(function (el) {
      var platforms = el.getAttribute('data-show').split(' ')
      if (platforms.indexOf(platformKey) === -1) {
        el.classList.add('hidden')
      }
    })

    if (isIOS) {
      window.location.href = document.getElementById('ios-link').href
    }
  }, 250)
})()
