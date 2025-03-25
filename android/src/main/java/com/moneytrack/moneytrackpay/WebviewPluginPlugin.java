package com.moneytrack.moneytrackpay;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "WebviewPlugin")
public class WebviewPluginPlugin extends Plugin {

    private WebView webView;

    @PluginMethod
    public void openAddCard(PluginCall call) {
        openWebView("http://192.168.1.58:8080/#/add-card", call);
    }

    @PluginMethod
    public void openPay(PluginCall call) {
        openWebView("http://192.168.1.58:8080/#/pay", call);
    }

    @PluginMethod
    public void openMap(PluginCall call) {
        openWebView("http://192.168.1.58:8080/#/map", call);
    }

    @PluginMethod
    public void openOnboarding(PluginCall call) {
        String payload = call.getString("payload", "");
        openWebView("http://192.168.1.58:8080/#/onboarding?payload=" + payload, call);
    }

    private void openWebView(String url, PluginCall call) {
        getActivity().runOnUiThread(() -> {
            Context context = getContext();

            // Create WebView
            webView = new WebView(context);
            WebSettings webSettings = webView.getSettings();
            webSettings.setJavaScriptEnabled(true); // Ensure JS is enabled
            webSettings.setDomStorageEnabled(true); // Enable localStorage/sessionStorage
            webSettings.setAllowFileAccess(true);
            webSettings.setAllowContentAccess(true);

            webView.setLayoutParams(new ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT
            ));

            // Set WebViewClient
            webView.setWebViewClient(new WebViewClient() {
                @Override
                public boolean shouldOverrideUrlLoading(WebView view, String url) {
                    if (url.contains("static-page")) {
                        // Remove WebView when dismissed
                        ((ViewGroup) webView.getParent()).removeView(webView);
                        call.resolve(new JSObject().put("dismissed", true));
                        return true;
                    }
                    return super.shouldOverrideUrlLoading(view, url);
                }
            });

            // Load the URL
            webView.loadUrl(url);

            // Get the root view and add WebView
            ViewGroup rootView = (ViewGroup) getActivity().findViewById(android.R.id.content);
            rootView.addView(webView);
        });
    }
}
