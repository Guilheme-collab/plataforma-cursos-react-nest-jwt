import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreatePagamentoDto {
  @ApiProperty({ example: 1, description: 'ID da assinatura' })
  @IsInt()
    @IsNotEmpty()
  assinaturaId: number;

  @ApiProperty({ example: 99.90, description: 'Valor pago' })
  @IsNumber()
    @Min(0)
    @IsNotEmpty()
  valorPago: number;

  @ApiProperty({ example: 'cartao_credito', description: 'Método de pagamento' })
  @IsString()
    @IsNotEmpty()
  metodoPagamento: string;

  @ApiProperty({ example: 'txn_123456', description: 'ID da transação no gateway' })
  @IsString()
    @IsNotEmpty()
  idTransacaoGateway: string;
}
