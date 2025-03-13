import { WebviewPlugin } from 'capacitor-moneytrack-pay';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    WebviewPlugin.echo({ value: inputValue })
}
