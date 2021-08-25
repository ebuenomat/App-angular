export interface Cliente {
    id: number;
    nome: string;
    dataNascimento: Date;
    rua: string;
    numero: number;
    bairro: string;
    uf: string;
    cidade: string;
    ativo: boolean;
    tipo: string;
}