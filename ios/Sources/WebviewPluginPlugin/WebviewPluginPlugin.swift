import Foundation
import Capacitor
@preconcurrency import WebKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(WebviewPluginPlugin)
public class WebviewPluginPlugin: CAPPlugin, CAPBridgedPlugin {
    var webViewController: UIViewController?  // Define webViewController
    public let identifier = "WebviewPluginPlugin"
    public let jsName = "WebviewPlugin"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "openAddCard", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openPay", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openMap", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openOnboarding", returnType: CAPPluginReturnPromise)
    ]

    @objc func openAddCard(_ call: CAPPluginCall) {
        openWebView(url: "http://localhost:8080/#/add-card", call: call)
    }

    @objc func openPay(_ call: CAPPluginCall) {
        openWebView(url: "http://localhost:8080/#/pay", call: call)
    }

    @objc func openMap(_ call: CAPPluginCall) {
        openWebView(url: "http://localhost:8080/#/map", call: call)
    }

    @objc func openOnboarding(_ call: CAPPluginCall) {
        guard let payload = call.getString("payload") else {
            call.reject("Payload is required.")
            return
        }
        openWebView(url: "http://localhost:8080/#/onboarding?payload=\(payload)", call: call)
    }

  private func openWebView(url: String, call: CAPPluginCall) {
          DispatchQueue.main.async {
              let config = WKWebViewConfiguration()
              self.webView = WKWebView(frame: UIScreen.main.bounds, configuration: config)
              self.webView?.navigationDelegate = self
              
              let urlRequest = URLRequest(url: URL(string: url)!)
              self.webView?.load(urlRequest)

              let vc = UIViewController()
              vc.view = self.webView
              self.webViewController = vc

              self.bridge?.viewController?.present(vc, animated: true, completion: nil)
          }
      }

}

extension WebviewPluginPlugin: WKNavigationDelegate {
    
  public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
      if let url = navigationAction.request.url?.absoluteString, url.contains("sdk-static-page") {
          DispatchQueue.main.async {
              self.webViewController?.dismiss(animated: true, completion: nil)
              self.webView = nil
              self.webViewController = nil
              self.notifyListeners("dismissed", data: ["dismissed": true])
          }
      }
      decisionHandler(.allow)
  }
}
