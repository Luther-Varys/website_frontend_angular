


//The current file is just an exmplae template on how to create AppConfigVariables.ts file
//This "AppConfigVariables.Example.ts" file can be copied and renamed as "AppConfigVariables.ts"
//This has been done for privacy reason to hide eventual public keys in public repositories by
//using .gitignore
export class AppConfigVariables {

    public static baseUrlBackend():string{
        return "http://localhost:3010/";
    }

    public static agmGoogleMapsApiKey():string {
        return "<GET API KEY FROM GOOGLE>";
    }


}