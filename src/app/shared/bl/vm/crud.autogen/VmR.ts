import { VmBase } from "../infrastructure.entity/VmBase";

// import { VmBase } from "../infrastructure.entity/VmBase";


    //SCHEMA::: dbo
    export class ApplicationUser_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public auth0_SubUserId:string;

        public auth0_Email:string;

        public auth0_EmailVerified:any;

        public auth0_UpdatedAt:string;

        public firstName:string;

        public lastName:string;

        public dateOfBirth:string;

        public gender:any;

    }


    export class CommunityNet_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public name:string;

        public description:string;

        public createdByApplicationUser_Id:string;

    }


    export class EntityCrudLog_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public entityIdRef:string;

        public entityType:string;

        public entityDataJson:string;

        public entityCrudLogType:any;

    }


    export class Language_VMR
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public langCode:string;

        public langName_en:string;

        public langName_native:string;

        public langCodeAndLocale:string;

        public languageLocaleType:any;

    }


    export class Tag_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public tagName:string;

        public tagDescription:string;

    }


    //SCHEMA::: etn
    export class BaseEntityLikeComment_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public entityType:string;

    }


    export class EntityComment_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public comment:string;

        public baseEntityLikeComment_Id:string;

        public applicationUser_Id:string;

    }


    export class EntityLike_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public baseEntityLikeComment_Id:string;

        public applicationUser_Id:string;

    }


    export class EntityTag_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public tag_Id:string;

        public baseEntityLikeComment_Id:string;

        public applicationUser_Id:string;

    }


    //SCHEMA::: pol
    export class ActualAnswer_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public possibleAnswer_Id:string;

        public applicationUser_Id:string;

    }


    export class Poll_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public title:string;

        public description:string;

        public suffrageType:any;

        public pollCreatorApplicationUser_Id:string;

        public baseEntityLikeComment_Id:string;

    }


    export class PossibleAnswer_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public numOrdering:number;

        public answerText:string;

        public question_Id:string;

    }


    export class Question_VMR extends VmBase
    {

        //inherited Properties:::

        public id:string;  

        public dateTimeUtcCreated:string;  

        public dateTimeUtcLastUpdated:string;  

        public unixTimestampMillisCreated:number;  

        public unixTimestampMillisUpdated:number;  

        //non-inherited Properties:::

        public numOrdering:number;

        public questionText:string;

        public poll_Id:string;

        public baseEntityLikeComment_Id:string;

    }


