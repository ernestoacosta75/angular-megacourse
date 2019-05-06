// "who" is an obbligatory parameter.
// "object" is a default parameter
// "moment" is an optional parameter
function activate( who:string, object:string = "bati-signal", moment?:string ) {

    let message:string;
    if( moment ) {
        message = `${ who } has activated the ${ object } in the ${ moment }`;
    }
    else {
        message = `${ who } has activated the ${ object }`;
    }

    console.log(message);
}

activate("Ernesto");
activate("Ernesto", "bat-movil");
activate("Ernesto", "bat-movil", "afternoon");