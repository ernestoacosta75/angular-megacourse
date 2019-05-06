"use strict";
// "who" is an obbligatory parameter.
// "object" is a default parameter
// "moment" is an optional parameter
function activate(who, object, moment) {
    if (object === void 0) { object = "bati-signal"; }
    var message;
    if (moment) {
        message = who + " has activated the " + object + " in the " + moment;
    }
    else {
        message = who + " has activated the " + object;
    }
    console.log(message);
}
activate("Ernesto");
activate("Ernesto", "bat-movil");
activate("Ernesto", "bat-movil", "afternoon");
