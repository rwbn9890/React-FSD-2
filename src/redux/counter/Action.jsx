
export const INC = "INC";
export const DEC = "DEC";
export const RESET = "RESET";

    export function incCount(){
            return {
                type:INC
            }
        }


    export function decCount(){
            return {
                type:DEC
            }
        }


    export function resCount(){
            return {
                type:RESET
            }
        }
