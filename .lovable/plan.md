

# Corrigir Emojis Quebrados na Mensagem do WhatsApp

## Problema
Os emojis (🏠 👤 📱 📍 💰 📅) estão chegando como `�` no WhatsApp porque a mensagem está sendo codificada/transmitida sem UTF-8 adequado em algum ponto do caminho.

## Causa
O `encodeURIComponent` no JavaScript já lida com UTF-8 corretamente, então os emojis deveriam funcionar. O problema mais provável é que o arquivo `Simulator.tsx` foi salvo sem encoding UTF-8, ou os caracteres emoji foram corrompidos durante a edição anterior. Quando o navegador lê o arquivo com encoding errado, os emojis viram `�` antes mesmo de chegarem ao `encodeURIComponent`.

## Solução
Reescrever os emojis no `src/components/Simulator.tsx` usando **escapes Unicode** (`\u{XXXX}`) em vez dos caracteres emoji diretos. Isso garante que, independente do encoding do arquivo, os emojis serão renderizados corretamente em runtime.

## O que será alterado

### Arquivo: `src/components/Simulator.tsx`

Substituir a construção da `waMessage` para usar escapes Unicode:

```typescript
const waMessage =
  `\u{1F3E0} *Nova Simulação de Crédito*\n\n` +              // 🏠 Casa
  `\u{1F464} *Nome:* ${formData.fullName.trim()}\n` +         // 👤 Pessoa
  `\u{1F4F1} *WhatsApp:* ${formData.whatsapp}\n` +            // 📱 Celular
  `\u{1F4CD} *Cidade:* ${formData.city.trim()}\n\n` +         // 📍 Pin localização
  `\u{1F4B0} *Detalhes da Simulação:*\n` +                    // 💰 Saco de dinheiro
  `\u{1F3F7}\u{FE0F} Tipo de Bem: ${formData.propertyType}\n` +  // 🏷️ Etiqueta
  `\u{1F4B5} Valor Pretendido: ${formData.creditAmount}\n` +     // 💵 Nota dinheiro
  `\u{1F4B3} Valor de Entrada: ${downPaymentValue}\n` +          // 💳 Cartão
  `\u{1F4C5} Parcela Ideal: ${formData.monthlyPayment}\n\n` +    // 📅 Calendário
  `\u{23F0} Data: ${todayBR}`;                                   // ⏰ Despertador
```

### Mapeamento dos ícones (mais profissional e contextual)

| Campo | Ícone | Unicode |
|---|---|---|
| Título | 🏠 Casa | `\u{1F3E0}` |
| Nome | 👤 Pessoa | `\u{1F464}` |
| WhatsApp | 📱 Celular | `\u{1F4F1}` |
| Cidade | 📍 Localização | `\u{1F4CD}` |
| Detalhes | 💰 Dinheiro | `\u{1F4B0}` |
| Tipo de Bem | 🏷️ Etiqueta | `\u{1F3F7}\u{FE0F}` |
| Valor Pretendido | 💵 Nota | `\u{1F4B5}` |
| Valor de Entrada | 💳 Cartão | `\u{1F4B3}` |
| Parcela | 📅 Calendário | `\u{1F4C5}` |
| Data | ⏰ Relógio | `\u{23F0}` |

## Critério de aceite
Após preencher e finalizar a simulação, a mensagem que abre no WhatsApp deve mostrar todos os ícones renderizados corretamente (sem nenhum `�`), com cada campo tendo um ícone contextual diferente para ficar mais visual e profissional.

