
import { VmBase } from "../infrastructure.entity/VmBase";


    //SCHEMA::: dbo
    export class ApplicationUser_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public firstName:string;

        public lastName:string;

        public dateOfBirth:string;

        public gender:any;

    }


    export class CommunityNet_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public name:string;

        public description:string;

    }


    export class EntityCrudLog_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public entityIdRef:string;

        public entityType:string;

        public entityDataJson:string;

        public entityCrudLogType:any;

    }


    export class Language_VMU
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public langCode:string;

        public langName_en:string;

        public langName_native:string;

        public langCodeAndLocale:string;

        public languageLocaleType:any;

    }


    export class Tag_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public tagName:string;

        public tagDescription:string;

    }


    //SCHEMA::: etn
    export class EntityComment_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public comment:string;

        public baseEntityLikeComment_Id:string;

    }


    export class EntityLike_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public baseEntityLikeComment_Id:string;

        public applicationUser_Id:string;

    }


    export class EntityTag_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public tag_Id:string;

        public baseEntityLikeComment_Id:string;

    }


    //SCHEMA::: pol
    export class ActualAnswer_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public possibleAnswer_Id:string;

    }


    export class Poll_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public title:string;

        public description:string;

        public suffrageType:any;

        public baseEntityLikeComment_Id:string;

    }


    export class PossibleAnswer_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public numOrdering:number;

        public answerText:string;

    }


    export class Question_VMU extends VmBase
    {

        //inherited Properties:::

        public id:string;

        //non-inherited Properties:::

        public numOrdering:number;

        public questionText:string;

        public baseEntityLikeComment_Id:string;

    }


