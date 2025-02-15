<script type="text/javascript">
var adBlockEnabled = false;
(function() {
    var testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    window.setTimeout(function() {
        if (testAd.offsetHeight === 0) {
            adBlockEnabled = true;
        }
        testAd.remove();
        if (adBlockEnabled) {
            document.body.innerHTML = "<h1>AdBlock Detected</h1><p>Please disable your ad blocker to view this site.</p>";
        } else {
            console.log("No AdBlock detected");
        }
    }, 5000);
})();
</script>

