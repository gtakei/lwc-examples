import { LightningElement, api } from 'lwc';
import { tokens } from './tokens.js';


// Example of using the component in a builder and loading pre defined tokens from JS
export default class CssTokenInjector extends LightningElement {
    @api tokensFromBuilderJSON;

    connectedCallback(){
        addTokensToDocument(tokens);
        if(this.tokensFromBuilderJSON) addTokensToDocument(JSON.parse(this.tokensFromBuilderJSON));
    }
}

// Public function to inject an object of Design tokens to document as CSS variables
export function addTokensToDocument(tokens){
    for(const i of Object.keys(tokens)){
        document.documentElement.style.setProperty(`--${i}`, tokens[i]);
    }
}