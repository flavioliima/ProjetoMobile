/*export type Musicos{
    id?: string;
    descricao: string;
    data: string;
    
}
*/

export class Musicos{
    public constructor(public descricao: string, public data: string, public imagem:any, public id?: string){}
}

