
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/polyfills-legacy.ZgOB0OQF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/app-legacy.DBQf5Jpx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/page-OnePage-legacy.DApXrPKi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/DeliveryMethodSelectorSection-legacy.DhsLXI-z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useEditorShopPayNavigation-legacy.zcdKh6GA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/ShopPayLogo-legacy.FIaj_hbm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/VaultedPayment-legacy.CKqndMzU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/LocalizationExtensionField-legacy.CUy8VOlS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/ShopPayOptInDisclaimer-legacy.Bk5hWOR5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/ShipmentBreakdown-legacy.nslgsU2J.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/MerchandiseModal-legacy.D3Dj_Zsq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/StackedMerchandisePreview-legacy.DI9LHRwc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/PayButtonSection-legacy.BHtmrarR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/component-ShopPayVerificationSwitch-legacy.BJ1WCA5c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/useSubscribeMessenger-legacy.BWt5hWg-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.es/index-legacy.CtV_jTf8.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0262/4320/3125/files/logox_x320.png?v=1743195174"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  