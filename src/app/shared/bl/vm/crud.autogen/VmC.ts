
import { VmBase } from "../infrastructure.entity/VmBase";


    //SCHEMA::: dbo
    export class ApplicationUser_VMC extends VmBase
    {

        public firstName:string;

        public lastName:string;

        public dateOfBirth:string;

        public gender:any;

    }


    export class CommunityNet_VMC extends VmBase
    {

        public name:string;

        public description:string;

    }


    export class EntityCrudLog_VMC extends VmBase
    {

        public entityIdRef:string;

        public entityType:string;

        public entityDataJson:string;

        public entityCrudLogType:any;

    }


    export class Language_VMC
    {

        public langCode:string;

        public langName_en:string;

        public langName_native:string;

        public langCodeAndLocale:string;

        public languageLocaleType:any;

    }


    export class Tag_VMC extends VmBase
    {

        public tagName:string;

        public tagDescription:string;

    }


    //SCHEMA::: etn
    export class EntityComment_VMC extends VmBase
    {

        public comment:string;

        public baseEntityLikeComment_Id:string;

        public applicationUser_Id:string;

    }


    export class EntityLike_VMC extends VmBase
    {

        public baseEntityLikeComment_Id:string;

        public applicationUser_Id:string;

    }


    export class EntityTag_VMC extends VmBase
    {

        public tag_Id:string;

        public baseEntityLikeComment_Id:string;

    }


    //SCHEMA::: pol
    export class ActualAnswer_VMC extends VmBase
    {

        public possibleAnswer_Id:string;

        public applicationUser_Id:string;

    }


    export class Poll_VMC extends VmBase
    {

        public title:string;

        public description:string;

        public suffrageType:any;

        public pollCreatorApplicationUser_Id:string;

        public baseEntityLikeComment_Id:string;

    }


    export class PossibleAnswer_VMC extends VmBase
    {

        public numOrdering:number;

        public answerText:string;

        public question_Id:string;

    }


    export class Question_VMC extends VmBase
    {

        public numOrdering:number;

        public questionText:string;

        public poll_Id:string;

        public baseEntityLikeComment_Id:string;

    }



