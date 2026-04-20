

# Enviar Simulação para WhatsApp 81993797051

## Objetivo
Quando o lead clicar em "Finalizar Simulação", além de enviar para o Make (planilha) e Kommo (CRM), abrir uma conversa no WhatsApp **(81) 99379-7051** com uma mensagem pré-formatada contendo todos os dados da simulação.

## Como vai funcionar

1. O usuário preenche o formulário e clica em **Finalizar Simulação**
2. O sistema envia os dados para Make e Kommo (como já faz hoje)
3. **Novo:** Abre uma nova aba do navegador com `https://wa.me/5581993797051?text=...` contendo a mensagem formatada
4. O usuário é redirecionado para `/obrigado` normalmente

A mensagem chegará no WhatsApp **81 99379-7051** já pronta — basta o lead apertar enviar (ou já dispara automaticamente dependendo do dispositivo).

## Formato da mensagem no WhatsApp

```text
🏠 *Nova Simulação de Crédito*

👤 *Nome:* João da Silva
📱 *WhatsApp:* (11) 99999-9999
📍 *Cidade:* Recife

💰 *Detalhes da Simulação:*
• Tipo de Bem: Imóvel
• Valor Pretendido: R$ 200.000,00
• Valor de Entrada: R$ 30.000,00
• Parcela Ideal: R$ 1.500,00

📅 Data: 20/04/2026
```

Campos formatados em **negrito** (sintaxe `*texto*` do WhatsApp), com emojis para facilitar leitura, separação clara entre dados pessoais e dados financeiros.

## Detalhes técnicos

### Arquivo alterado: `src/components/Simulator.tsx`

Dentro de `handleFinish`, após o envio bem-sucedido para Make/Kommo e antes do `navigate("/obrigado")`:

1. Construir a string da mensagem com todos os campos do `formData`
2. Codificar com `encodeURIComponent()` para uso seguro em URL
3. Montar a URL: `https://wa.me/5581993797051?text=${encoded}`
4. Abrir em nova aba: `window.open(whatsappUrl, "_blank")`

O número será formatado com código do país: **55** (Brasil) + **81** (DDD Pernambuco) + **993797051** = `5581993797051`.

### Comportamento em caso de falha
- Se Make/Kommo falharem, **não** abrimos o WhatsApp (mantemos o comportamento atual de mostrar erro)
- O WhatsApp só abre quando a submissão é bem-sucedida, garantindo que o lead já está registrado no CRM/planilha antes do contato

### Considerações de UX
- `window.open` em nova aba pode ser bloqueado por popup blockers em alguns navegadores. Como ele é disparado dentro de um handler de clique do usuário (`handleFinish` foi acionado pelo botão), a maioria dos navegadores permite normalmente
- Em mobile, o link `wa.me` abre o app do WhatsApp diretamente
- Em desktop, abre o WhatsApp Web

## Critério de aceite
Após preencher e finalizar a simulação:
1. Os dados continuam sendo enviados para Make e Kommo (sem regressão)
2. Uma nova aba abre no WhatsApp com a conversa para **81 99379-7051** já com a mensagem formatada pronta para envio
3. O usuário é redirecionado para `/obrigado`

